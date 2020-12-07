import Vue from "../../utils/vue";
import { NlyBadge, props as badgeProps } from "../badge/badge";
import { NlyButtonClose } from "../button/button-close";
import idMixin from "../../mixins/id";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import KEY_CODES from "../../utils/key-codes";
import { NlyIcon } from "../icons/icon";

const name = "NlyFormTag";

const tagProps = badgeProps;
delete tagProps.badgeClass;

export const props = {
  ...tagProps,
  tagClass: {
    type: String
  },
  tagTextClass: {
    type: String
  },
  tagCloseClass: {
    type: String
  },
  noClose: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  removeLabel: {
    type: String,
    default: "remove tag"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  }
};

export const NlyFormTag = Vue.extend({
  name: name,
  mixins: [idMixin, normalizeSlotMixin],
  props,
  methods: {
    onDelete(evt) {
      const { type, keyCode } = evt;
      if (
        !this.disabled &&
        (type === "click" ||
          (type === "keydown" && keyCode === KEY_CODES.DELETE))
      ) {
        this.$emit("remove");
      }
    }
  },
  render(h) {
    const tagId = this.safeId();
    const tagLabelId = this.safeId("_nlytaglabel_");
    let $remove = h(NlyButtonClose, {
      staticClass: "nly-form-tag-remove",
      class: [this.tagCloseClass ? this.tagCloseClass : null],
      props: { ariaLabel: this.removeLabel },
      attrs: {
        "aria-controls": tagId,
        "aria-describedby": tagLabelId,
        "aria-keyshortcuts": "Delete"
      },
      on: {
        click: this.onDelete,
        keydown: this.onDelete
      }
    });
    if (this.disabled || this.noClose) {
      $remove = h();
    }
    const $tag = h(
      "span",
      {
        staticClass: "nly-form-tag-text flex-grow-1 text-truncate",
        class: [this.tagTextClass ? this.tagTextClass : null],
        attrs: { id: tagLabelId }
      },
      this.normalizeSlot("default") || this.title || [h()]
    );

    let $icon = h();
    if (this.icon) {
      $icon = h(NlyIcon, {
        staticClass: "nly-form-tag-icon",
        props: {
          icon: this.icon
        }
      });
    }

    return h(
      NlyBadge,
      {
        staticClass: "nly-form-tag d-inline-flex align-items-baseline mw-100",
        class: [
          this.disabled ? "disabled" : null,
          this.tagClass ? this.tagClass : null
        ],
        attrs: {
          id: tagId,
          title: this.title || null,
          "aria-labelledby": tagLabelId
        },
        props: {
          size: this.size,
          variant: this.variant,
          bgVariant: this.bgVariant,
          bgGradientVariant: this.bgGradientVariant,
          tag: this.tag,
          pill: this.pill,
          dashed: this.dashed,
          outline: this.outline
        }
      },
      [$icon, $tag, $remove]
    );
  }
});
