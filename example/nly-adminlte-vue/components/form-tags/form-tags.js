import Vue from "../../utils/vue";
import KEY_CODES from "../../utils/key-codes";
import { RX_SPACES } from "../../utils/regex";
import cssEscape from "../../utils/css-escape";
import identity from "../../utils/identity";
import looseEqual from "../../utils/loose-equal";
import { arrayIncludes, concat } from "../../utils/array";
import { getComponentConfig } from "../../utils/config";
import {
  attemptBlur,
  attemptFocus,
  closest,
  isActiveElement,
  matches,
  requestAF,
  select
} from "../../utils/dom";
import { stopEvent } from "../../utils/events";
import { isEvent, isFunction, isNumber, isString } from "../../utils/inspect";
import { escapeRegExp, toString, trim, trimLeft } from "../../utils/string";
import idMixin from "../../mixins/id";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import { NlyButton } from "../button/button";
import { NlyFormFeedback } from "../form/form-feedback";
import { NlyFormText } from "../form/form-text";
import { NlyFormTag } from "./form-tag";
import { NlyIcon } from "../icons/icon";
import {
  bgVariantOptions,
  variantOptions,
  bgGradientOptions
} from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const TYPES = ["text", "email", "tel", "url", "number"];

const escapeRegExpChars = str => escapeRegExp(str).replace(RX_SPACES, "\\s");

const cleanTags = tags => {
  return concat(tags)
    .map(tag => trim(toString(tag)))
    .filter((tag, index, arr) => tag.length > 0 && arr.indexOf(tag) === index);
};

const processEventValue = evt =>
  isString(evt) ? evt : isEvent(evt) ? evt.target.value || "" : "";

const cleanTagsState = () => ({
  all: [],
  valid: [],
  invalid: [],
  duplicate: []
});

const name = "NlyFormTags";
export const NlyFormTags = Vue.extend({
  name: name,
  mixins: [idMixin, normalizeSlotMixin],
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    inputId: {
      type: String
      // default: null
    },
    placeholder: {
      type: String,
      default: () => getComponentConfig(name, "placeholder")
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
      // default: null
    },
    form: {
      type: String
      // default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    state: {
      // Tri-state: `true`, `false`, `null`
      type: Boolean,
      default: null
    },
    size: {
      type: String
      // default: null
    },
    inputType: {
      type: String,
      default: "text",
      validator: type => arrayIncludes(TYPES, type)
    },
    inputClass: {
      type: [String, Array, Object]
      // default: null
    },
    inputAttrs: {
      // Additional attributes to add to the input element
      type: Object,
      default: () => ({})
    },
    addButtonText: {
      type: String
    },
    addButtonIcon: {
      type: String,
      default: () => getComponentConfig(name, "addButtonIcon")
    },
    addButtonVariant: {
      type: String,
      default: () => getComponentConfig(name, "addButtonVariant")
    },
    tagVariant: {
      type: String,
      default: () => getComponentConfig(name, "tagVariant")
    },
    tagClass: {
      type: [String, Array, Object]
      // default: null
    },
    tagPills: {
      type: Boolean,
      default: false
    },
    tagRemoveLabel: {
      type: String,
      default: () => getComponentConfig(name, "tagRemoveLabel")
    },
    tagRemovedLabel: {
      type: String,
      default: () => getComponentConfig(name, "tagRemovedLabel")
    },
    tagValidator: {
      type: Function
      // default: null
    },
    duplicateTagText: {
      type: String,
      default: () => getComponentConfig(name, "duplicateTagText")
    },
    invalidTagText: {
      type: String,
      default: () => getComponentConfig(name, "invalidTagText")
    },
    limitTagsText: {
      type: String,
      default: () => getComponentConfig(name, "limitTagsText")
    },
    limit: {
      type: Number
    },
    separator: {
      type: [String, Array]
    },
    removeOnDelete: {
      type: Boolean,
      default: false
    },
    addOnChange: {
      type: Boolean,
      default: false
    },
    noAddOnEnter: {
      type: Boolean,
      default: false
    },
    noOuterFocus: {
      type: Boolean,
      default: false
    },
    ignoreInputFocusSelector: {
      type: [Array, String],
      default: () => [".nly-form-tag", "button", "input", "select"]
    },
    value: {
      type: Array,
      default: () => []
    },
    tagIcon: {
      type: String
    },
    tagOutline: {
      type: Boolean,
      default: false
    },
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    tagDashed: {
      type: Boolean
    },
    tagTextClass: {
      type: String
    },
    tagNoClose: {
      type: Boolean
    },
    tagCloseClass: {
      type: String
    }
  },
  data() {
    return {
      hasFocus: false,
      newTag: "",
      tags: [],
      removedTags: [],
      tagsState: cleanTagsState()
    };
  },
  computed: {
    computedInputId() {
      return this.inputId || this.safeId("__input__");
    },
    computedInputType() {
      return arrayIncludes(TYPES, this.inputType) ? this.inputType : "text";
    },
    computedInputAttrs() {
      return {
        ...this.inputAttrs,
        id: this.computedInputId,
        value: this.newTag,
        disabled: this.disabled || null,
        form: this.form || null
      };
    },
    computedInputHandlers() {
      return {
        input: this.onInputInput,
        change: this.onInputChange,
        keydown: this.onInputKeydown
      };
    },
    computedSeparator() {
      return concat(this.separator)
        .filter(isString)
        .filter(identity)
        .join("");
    },
    computedSeparatorRegExp() {
      const separator = this.computedSeparator;
      return separator
        ? new RegExp(`[${escapeRegExpChars(separator)}]+`)
        : null;
    },
    computedJoiner() {
      const joiner = this.computedSeparator.charAt(0);
      return joiner !== " " ? `${joiner} ` : joiner;
    },
    computeIgnoreInputFocusSelector() {
      return concat(this.ignoreInputFocusSelector)
        .filter(identity)
        .join(",")
        .trim();
    },
    disableAddButton() {
      const newTag = trim(this.newTag);
      return (
        newTag === "" ||
        !this.splitTags(newTag).some(
          t => !arrayIncludes(this.tags, t) && this.validateTag(t)
        )
      );
    },
    duplicateTags() {
      return this.tagsState.duplicate;
    },
    hasDuplicateTags() {
      return this.duplicateTags.length > 0;
    },
    invalidTags() {
      return this.tagsState.invalid;
    },
    hasInvalidTags() {
      return this.invalidTags.length > 0;
    },
    isLimitReached() {
      const { limit } = this;
      return isNumber(limit) && limit >= 0 && this.tags.length >= limit;
    }
  },
  watch: {
    value(newVal) {
      this.tags = cleanTags(newVal);
    },
    tags(newVal, oldVal) {
      if (!looseEqual(newVal, this.value)) {
        this.$emit("input", newVal);
      }
      if (!looseEqual(newVal, oldVal)) {
        newVal = concat(newVal).filter(identity);
        oldVal = concat(oldVal).filter(identity);
        this.removedTags = oldVal.filter(old => !arrayIncludes(newVal, old));
      }
    },
    tagsState(newVal, oldVal) {
      if (!looseEqual(newVal, oldVal)) {
        this.$emit("tag-state", newVal.valid, newVal.invalid, newVal.duplicate);
      }
    }
  },
  created() {
    this.tags = cleanTags(this.value);
  },
  mounted() {
    this.handleAutofocus();
  },
  activated() {
    this.handleAutofocus();
  },
  methods: {
    addTag(newTag) {
      newTag = isString(newTag) ? newTag : this.newTag;
      if (this.disabled || trim(newTag) === "" || this.isLimitReached) {
        return;
      }
      const parsed = this.parseTags(newTag);
      if (parsed.valid.length > 0 || parsed.all.length === 0) {
        if (matches(this.getInput(), "select")) {
          this.newTag = "";
        } else {
          const invalidAndDuplicates = [...parsed.invalid, ...parsed.duplicate];
          this.newTag = parsed.all
            .filter(tag => arrayIncludes(invalidAndDuplicates, tag))
            .join(this.computedJoiner)
            .concat(
              invalidAndDuplicates.length > 0
                ? this.computedJoiner.charAt(0)
                : ""
            );
        }
      }
      if (parsed.valid.length > 0) {
        this.tags = concat(this.tags, parsed.valid);
      }
      this.tagsState = parsed;
      this.focus();
    },
    removeTag(tag) {
      if (this.disabled) {
        return;
      }
      this.tags = this.tags.filter(t => t !== tag);
      this.$nextTick(() => {
        this.focus();
      });
    },
    onInputInput(evt) {
      if (this.disabled || (isEvent(evt) && evt.target.composing)) {
        return;
      }
      let newTag = processEventValue(evt);
      const separatorRe = this.computedSeparatorRegExp;
      if (this.newTag !== newTag) {
        this.newTag = newTag;
      }
      newTag = trimLeft(newTag);
      if (separatorRe && separatorRe.test(newTag.slice(-1))) {
        this.addTag();
      } else {
        this.tagsState =
          newTag === "" ? cleanTagsState() : this.parseTags(newTag);
      }
    },
    onInputChange(evt) {
      if (!this.disabled && this.addOnChange) {
        const newTag = processEventValue(evt);
        if (this.newTag !== newTag) {
          this.newTag = newTag;
        }
        this.addTag();
      }
    },
    onInputKeydown(evt) {
      if (this.disabled || !isEvent(evt)) {
        return;
      }
      const keyCode = evt.keyCode;
      const value = evt.target.value || "";
      if (!this.noAddOnEnter && keyCode === KEY_CODES.ENTER) {
        stopEvent(evt, { propagation: false });
        this.addTag();
      } else if (
        this.removeOnDelete &&
        (keyCode === KEY_CODES.BACKSPACE || keyCode === KEY_CODES.DELETE) &&
        value === ""
      ) {
        stopEvent(evt, { propagation: false });
        this.tags = this.tags.slice(0, -1);
      }
    },
    onClick(evt) {
      const ignoreFocusSelector = this.computeIgnoreInputFocusSelector;
      const { target } = evt;
      if (
        !this.disabled &&
        !isActiveElement(target) &&
        (!ignoreFocusSelector || !closest(ignoreFocusSelector, target, true))
      ) {
        this.$nextTick(() => {
          this.focus();
        });
      }
    },
    onFocusin() {
      this.hasFocus = true;
    },
    onFocusout() {
      this.hasFocus = false;
    },
    handleAutofocus() {
      this.$nextTick(() => {
        requestAF(() => {
          if (this.autofocus && !this.disabled) {
            this.focus();
          }
        });
      });
    },
    focus() {
      if (!this.disabled) {
        attemptFocus(this.getInput());
      }
    },
    blur() {
      if (!this.disabled) {
        attemptBlur(this.getInput());
      }
    },
    splitTags(newTag) {
      newTag = toString(newTag);
      const separatorRe = this.computedSeparatorRegExp;
      return (separatorRe ? newTag.split(separatorRe) : [newTag])
        .map(trim)
        .filter(identity);
    },
    parseTags(newTag) {
      const tags = this.splitTags(newTag);
      const parsed = {
        all: tags,
        valid: [],
        invalid: [],
        duplicate: []
      };
      tags.forEach(tag => {
        if (arrayIncludes(this.tags, tag) || arrayIncludes(parsed.valid, tag)) {
          if (!arrayIncludes(parsed.duplicate, tag)) {
            parsed.duplicate.push(tag);
          }
        } else if (this.validateTag(tag)) {
          parsed.valid.push(tag);
        } else {
          if (!arrayIncludes(parsed.invalid, tag)) {
            parsed.invalid.push(tag);
          }
        }
      });
      return parsed;
    },
    validateTag(tag) {
      const validator = this.tagValidator;
      return isFunction(validator) ? validator(tag) : true;
    },
    getInput() {
      return select(`#${cssEscape(this.computedInputId)}`, this.$el);
    },
    defaultRender({
      tags,
      inputAttrs,
      inputType,
      inputHandlers,
      removeTag,
      addTag,
      isInvalid,
      isDuplicate,
      isLimitReached,
      disableAddButton,
      disabled,
      placeholder,
      inputClass,
      tagRemoveLabel,
      variant,
      tagPills,
      tagClass,
      addButtonText,
      addButtonIcon,
      addButtonVariant,
      invalidTagText,
      duplicateTagText,
      limitTagsText,
      tagIcon,
      tagOutline,
      bgVariant,
      bgGradientVariant,
      tagDashed,
      tagTextClass,
      tagNoClose,
      tagCloseClass
    }) {
      const h = this.$createElement;
      const $tags = tags.map(tag => {
        tag = toString(tag);
        return h(
          NlyFormTag,
          {
            props: {
              tag: "li",
              title: tag,
              disabled,
              variant: variant,
              bgVariant: bgVariant,
              bgGradientVariant: bgGradientVariant,
              dashed: tagDashed,
              outline: tagOutline,
              icon: tagIcon,
              pill: tagPills,
              noClose: tagNoClose,
              tagTextClass: tagTextClass,
              tagCloseClass: tagCloseClass,
              tagClass: tagClass,
              removeLabel: tagRemoveLabel
            },
            on: { remove: () => removeTag(tag) },
            key: `tags_${tag}`
          },
          tag
        );
      });

      const invalidFeedbackId =
        invalidTagText && isInvalid
          ? this.safeId("__invalid_feedback__")
          : null;
      const duplicateFeedbackId =
        duplicateTagText && isDuplicate
          ? this.safeId("__duplicate_feedback__")
          : null;
      const limitFeedbackId =
        limitTagsText && isLimitReached
          ? this.safeId("__limit_feedback__")
          : null;

      const ariaDescribedby = [
        inputAttrs["aria-describedby"],
        invalidFeedbackId,
        duplicateFeedbackId,
        limitFeedbackId
      ]
        .filter(identity)
        .join(" ");

      const $input = h("input", {
        ref: "input",

        directives: [{ name: "model", value: inputAttrs.value }],
        staticClass:
          "nly-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
        class: inputClass,
        style: { outline: 0, minWidth: "5rem" },
        attrs: {
          ...inputAttrs,
          "aria-describedby": ariaDescribedby || null,
          type: inputType,
          placeholder: placeholder || null
        },
        domProps: { value: inputAttrs.value },
        on: inputHandlers
      });

      const $button = h(
        NlyButton,
        {
          ref: "button",
          staticClass: "nly-form-tags-button py-0",
          class: {
            invisible: disableAddButton
          },
          style: { fontSize: "90%" },
          props: {
            variant: addButtonVariant,
            disabled: disableAddButton || isLimitReached
          },
          on: { click: () => addTag() }
        },
        [
          this.normalizeSlot("add-button-text") ||
            addButtonText ||
            h(NlyIcon, { props: { icon: addButtonIcon } })
        ]
      );
      const tagListId = this.safeId("__tag_list__");

      const $field = h(
        "li",
        {
          staticClass: "nly-from-tags-field flex-grow-1",
          attrs: {
            role: "none",
            "aria-live": "off",
            "aria-controls": tagListId
          },
          key: "tags_field"
        },
        [
          h(
            "div",
            {
              staticClass: "d-flex",
              attrs: { role: "group" }
            },
            [$input, $button]
          )
        ]
      );
      const $ul = h(
        "ul",
        {
          staticClass:
            "nly-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",
          attrs: { id: tagListId },
          key: "tags_list"
        },
        [$tags, $field]
      );

      let $feedback = h();
      if (invalidTagText || duplicateTagText || limitTagsText) {
        const joiner = this.computedJoiner;

        let $invalid = h();
        if (invalidFeedbackId) {
          $invalid = h(
            NlyFormFeedback,
            {
              props: {
                id: invalidFeedbackId,
                forceShow: true,
                state: "invalid"
              },
              key: "tags_invalid_feedback"
            },
            [this.invalidTagText, ": ", this.invalidTags.join(joiner)]
          );
        }

        let $duplicate = h();
        if (duplicateFeedbackId) {
          $duplicate = h(
            NlyFormText,
            {
              props: { id: duplicateFeedbackId },
              key: "tags_duplicate_feedback"
            },
            [this.duplicateTagText, ": ", this.duplicateTags.join(joiner)]
          );
        }

        let $limit = h();
        if (limitFeedbackId) {
          $limit = h(
            NlyFormText,
            {
              props: { id: limitFeedbackId },
              key: "tags_limit_feedback"
            },
            [limitTagsText]
          );
        }

        $feedback = h(
          "div",
          {
            attrs: {
              "aria-live": "polite",
              "aria-atomic": "true"
            },
            key: "tags_feedback"
          },
          [$invalid, $duplicate, $limit]
        );
      }
      return [$ul, $feedback];
    }
  },
  render(h) {
    const scope = {
      tags: this.tags.slice(),
      inputAttrs: this.computedInputAttrs,
      inputType: this.computedInputType,
      inputHandlers: this.computedInputHandlers,
      removeTag: this.removeTag,
      addTag: this.addTag,
      inputId: this.computedInputId,
      isInvalid: this.hasInvalidTags,
      invalidTags: this.invalidTags.slice(),
      isDuplicate: this.hasDuplicateTags,
      duplicateTags: this.duplicateTags.slice(),
      isLimitReached: this.isLimitReached,
      disableAddButton: this.disableAddButton,
      disabled: this.disabled,
      state: this.state,
      size: this.size,
      limit: this.limit,
      separator: this.separator,
      placeholder: this.placeholder,
      inputClass: this.inputClass,
      tagRemoveLabel: this.tagRemoveLabel,
      variant: this.tagVariant,
      tagPills: this.tagPills,
      tagClass: this.tagClass,
      addButtonText: this.addButtonText,
      addButtonIcon: this.addButtonIcon,
      addButtonVariant: this.addButtonVariant,
      invalidTagText: this.invalidTagText,
      duplicateTagText: this.duplicateTagText,
      limitTagsText: this.limitTagsText,
      tagIcon: this.tagIcon,
      tagOutline: this.tagOutline,
      bgVariant: this.bgVariant,
      bgGradientVariant: this.bgGradientVariant,
      tagDashed: this.tagDashed,
      tagTextClass: this.tagTextClass,
      tagNoClose: this.tagNoClose,
      tagCloseClass: this.tagCloseClass
    };

    const $content =
      this.normalizeSlot("default", scope) || this.defaultRender(scope);
    const $output = h(
      "output",
      {
        staticClass: "sr-only",
        attrs: {
          id: this.safeId("__selected_tags__"),
          role: "status",
          for: this.computedInputId,
          "aria-live": this.hasFocus ? "polite" : "off",
          "aria-atomic": "true",
          "aria-relevant": "additions text"
        }
      },
      this.tags.join(", ")
    );

    const $removed = h(
      "div",
      {
        staticClass: "sr-only",
        attrs: {
          id: this.safeId("__removed_tags__"),
          role: "status",
          "aria-live": this.hasFocus ? "assertive" : "off",
          "aria-atomic": "true"
        }
      },
      this.removedTags.length > 0
        ? `(${this.tagRemovedLabel}) ${this.removedTags.join(", ")}`
        : ""
    );

    let $hidden = h();
    if (this.name && !this.disabled) {
      $hidden = this.tags.map(tag => {
        return h("input", {
          attrs: {
            type: "hidden",
            value: tag,
            name: this.name,
            form: this.form || null
          },
          key: `tag_input_${tag}`
        });
      });
    }

    const tagsbgVariant = () =>
      nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant);
    const tagsvariant = () =>
      nlyGetOptionsByKeyEqual(variantOptions, this.tagVariant);
    const tagsbgGradientVariant = () =>
      nlyGetOptionsByKeyEqual(bgGradientOptions, this.bgGradientVariant);
    const customTagsVariant = tagsbgGradientVariant()
      ? `nly-form-tags-${tagsbgGradientVariant()}`
      : tagsbgVariant()
      ? `nly-form-tags-${tagsbgVariant()}`
      : tagsvariant()
      ? `nly-form-tags-${tagsvariant()}`
      : null;
    return h(
      "div",
      {
        staticClass: "nly-form-tags form-control h-auto",
        class: [
          customTagsVariant,
          this.hasFocus && !this.noOuterFocus && !this.disabled
            ? "focus"
            : null,
          this.disabled ? "disabled" : null,
          this.state === "valid" ? "is-valid" : null,
          this.state === "invalid" ? "is-invalid" : null,
          this.size ? `form-control-${this.size}` : null
        ],
        attrs: {
          id: this.safeId(),
          role: "group",
          tabindex: this.disabled || this.noOuterFocus ? null : "-1",
          "aria-describedby": this.safeId("__selected_tags__")
        },
        on: {
          click: this.onClick,
          focusin: this.onFocusin,
          focusout: this.onFocusout
        }
      },
      [$output, $removed, $content, $hidden]
    );
  }
});
