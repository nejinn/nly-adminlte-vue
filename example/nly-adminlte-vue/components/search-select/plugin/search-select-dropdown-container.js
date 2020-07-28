import Vue from "../../../utils/vue";
//import get from "../../../utils/get";
import {
  //isNull,
  isArray
  // isPlainObject,
  // isUndefined
} from "../../../utils/inspect";
// import { keys } from "../../../utils/object";
// import { warn } from "../../../utils/warn";
import idMixin from "../../../mixins/id";
// import optionsMixin from "./mixin-options";
import { NlySearchSelectDropdownGroup } from "./search-select-dropdown-group";
import { NlySearchSelectDropdownOption } from "./search-select-dropdown-option";
import { htmlOrText } from "../../../utils/html";

const name = "NlySearchSelectDropdownContainer";

// const OPTIONS_OBJECT_DEPRECATED_MSG =
//   'Setting prop "options" to an object is deprecated. Use the array format instead.';

export const NlySearchSelectDropdownContainer = Vue.extend({
  name: name,
  mixins: [idMixin],
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    variant: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {},
    top: {
      type: String,
      default: null
    },
    left: {
      type: String,
      default: null
    },
    labelField: {
      type: String,
      default: "label"
    },
    optionsField: {
      type: String,
      default: "options"
    },
    options: {
      type: [Array, Object],
      default: () => []
    },
    valueField: {
      type: String,
      default: "value"
    },
    textField: {
      type: String,
      default: "text"
    },
    htmlField: {
      type: String,
      default: "html"
    },
    disabledField: {
      type: String,
      default: "disabled"
    },
    open: {
      type: Boolean,
      default: null
    },
    below: {
      type: Boolean,
      default: null
    },
    addCheckedValue: {
      type: Function
    },
    width: {
      type: String
    }
  },
  data() {
    return {
      localValue: this.value
    };
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  computed: {
    formOptions() {
      return this.options;
    },
    customWidth() {
      return this.width;
    },
    customLeft() {
      return this.left;
    }
  },
  render(h) {
    var self = this;

    const $dropDownGroup = self.options.map((option, index) => {
      const { value, label, options, disabled, selected } = option;
      const key = `option_${index}`;

      return isArray(options)
        ? h(NlySearchSelectDropdownGroup, {
            props: { addCheckedValue: self.addCheckedValue, label, options },
            key
          })
        : h(NlySearchSelectDropdownOption, {
            props: {
              value: value,
              disabled: disabled,
              selected: selected
            },
            domProps: htmlOrText(option.html, option.text),
            key: `search_select_group_option_${index}`,
            on: {
              click() {
                if (!disabled) {
                  self.addCheckedValue(option);
                }
              }
            }
          });
    });

    const $dropResult = h(
      "span",
      {
        staticClass: "select2-results__options",
        attrs: {
          "aria-expanded": self.open ? "true" : "false",
          "aria-hidden": !self.open ? "true" : "false",
          id: self.id ? `${self.id}-result` : null,
          role: "listbox"
        }
      },
      [$dropDownGroup]
    );

    const $dropDownInput = h(
      "span",
      {
        staticClass: "select2-search select2-search--dropdown"
      },
      [
        h("input", {
          staticClass: "select2-search__field",
          attrs: {
            type: "search",
            tabindex: "1",
            autocomplete: "off",
            autocorrect: "off",
            autocapitalize: "none",
            spellcheck: "false",
            role: "searchbox",
            "aria-autocomplete": "list",
            "aria-controls": "select2-a5l9-results",
            "aria-activedescendant": "select2-a5l9-result-v6dd-Alabama"
          },
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: self.value,
              expression: "value"
            }
          ]
        })
      ]
    );

    const childrenVnodes =
      self.multiple === true ? [$dropResult] : [$dropDownInput, $dropResult];

    return h(
      "span",
      {
        staticClass: "select2-container select2-container--default",
        class: [self.open ? "select2-container--open" : null],
        style: {
          position: "absolute",
          // top: "472px",
          left: self.customLeft
        }
      },
      [
        h(
          "span",
          {
            staticClass: "select2-dropdown",
            class: [
              self.variant ? `select-${self.variant}` : null,
              self.below === true
                ? "select2-danger select2-dropdown--below"
                : self.below === false
                ? "select2-danger select2-dropdown--above"
                : null
            ],
            attrs: {
              dir: "ltr"
            },
            style: {
              width: self.customWidth
            }
          },
          childrenVnodes
        )
      ]
    );
  }
});
