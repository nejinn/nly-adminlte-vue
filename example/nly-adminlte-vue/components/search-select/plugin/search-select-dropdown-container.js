import Vue from "../../../utils/vue";
import get from "../../../utils/get";
import {
  isNull,
  isArray,
  isPlainObject,
  isUndefined
} from "../../../utils/inspect";
import { keys } from "../../../utils/object";
import { warn } from "../../../utils/warn";
import idMixin from "../../../mixins/id";
import optionsMixin from "./mixin-options";

const name = "NlySearchSelectItemContainer";

const OPTIONS_OBJECT_DEPRECATED_MSG =
  'Setting prop "options" to an object is deprecated. Use the array format instead.';

export const NlySearchSelectItemContainer = Vue.extend({
  name: name,
  mixins: [idMixin, optionsMixin],
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
    }
  },
  data() {
    return {
      localValue: this.value
    };
  },
  computed: {
    formOptions() {
      return this.normalizeOptions(this.options);
    }
  },
  methods: {},
  render(h) {
    var self = this;

    const $options = self.formOptions.map((option, index) => {
      const { value, label, options, disabled } = option;
      const key = `option_${index}`;

      return isArray(options)
        ? h(BFormSelectOptionGroup, { props: { label, options }, key })
        : h(BFormSelectOption, {
            props: { value, disabled },
            domProps: htmlOrText(option.html, option.text),
            key
          });
    });

    $dropDownInput = h(
      "span",
      {
        staticClass: "select2-search select2-search--dropdown"
      },
      [
        h("input", {
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
  }
});
/**
<span
  class="select2-container select2-container--default select2-container--open"
  style="position: absolute; top: 472px; left: 285.5px;"
>
  <span
    class="select2-dropdown select2-danger select2-dropdown--below"
    dir="ltr"
    style="width: 752.5px;"
  >
    <span class="select2-search select2-search--dropdown">
      <input
        class="select2-search__field"
        type="search"
        tabindex="0"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="none"
        spellcheck="false"
        role="searchbox"
        aria-autocomplete="list"
        aria-controls="select2-a5l9-results"
        aria-activedescendant="select2-a5l9-result-v6dd-Alabama"
      />
    </span>
    <span class="select2-results">
      <ul
        class="select2-results__options"
        role="listbox"
        id="select2-a5l9-results"
        aria-expanded="true"
        aria-hidden="false"
      >
        <li
          class="select2-results__option select2-results__option--highlighted"
          id="select2-a5l9-result-v6dd-Alabama"
          role="option"
          aria-selected="true"
          data-select2-id="select2-a5l9-result-v6dd-Alabama"
        >
          Alabama
        </li>
        <li
          class="select2-results__option"
          id="select2-a5l9-result-l87u-Alaska"
          role="option"
          aria-selected="false"
          data-select2-id="select2-a5l9-result-l87u-Alaska"
        >
          Alaska
        </li>
        <li
          class="select2-results__option"
          id="select2-a5l9-result-xt5o-California"
          role="option"
          aria-selected="false"
          data-select2-id="select2-a5l9-result-xt5o-California"
        >
          California
        </li>
        <li
          class="select2-results__option"
          id="select2-a5l9-result-ejye-Delaware"
          role="option"
          aria-selected="false"
          data-select2-id="select2-a5l9-result-ejye-Delaware"
        >
          Delaware
        </li>
        <li
          class="select2-results__option"
          id="select2-a5l9-result-torf-Tennessee"
          role="option"
          aria-selected="false"
          data-select2-id="select2-a5l9-result-torf-Tennessee"
        >
          Tennessee
        </li>
        <li
          class="select2-results__option"
          id="select2-a5l9-result-o1ew-Texas"
          role="option"
          aria-selected="false"
          data-select2-id="select2-a5l9-result-o1ew-Texas"
        >
          Texas
        </li>
        <li
          class="select2-results__option"
          id="select2-a5l9-result-5b53-Washington"
          role="option"
          aria-selected="false"
          data-select2-id="select2-a5l9-result-5b53-Washington"
        >
          Washington
        </li>
      </ul>
    </span>
  </span>
</span>;

<span
  class="select2-container select2-container--default select2-container--open"
  style="position: absolute; top: 29px; left: 1053px;"
>
  <span
    class="select2-dropdown select2-dropdown--above"
    dir="ltr"
    style="width: 752.5px;"
  >
    <span class="select2-results">
      <ul
        class="select2-results__options"
        role="listbox"
        aria-multiselectable="true"
        id="select2-lpj7-results"
        aria-expanded="true"
        aria-hidden="false"
      >
        <li
          class="select2-results__option"
          id="select2-lpj7-result-7fnt-Alabama"
          role="option"
          aria-selected="false"
          data-select2-id="select2-lpj7-result-7fnt-Alabama"
        >
          Alabama
        </li>
        <li
          class="select2-results__option"
          id="select2-lpj7-result-on4j-Alaska"
          role="option"
          aria-selected="false"
          data-select2-id="select2-lpj7-result-on4j-Alaska"
        >
          Alaska
        </li>
        <li
          class="select2-results__option"
          id="select2-lpj7-result-deve-California"
          role="option"
          aria-selected="false"
          data-select2-id="select2-lpj7-result-deve-California"
        >
          California
        </li>
        <li
          class="select2-results__option"
          id="select2-lpj7-result-a9sa-Delaware"
          role="option"
          aria-selected="false"
          data-select2-id="select2-lpj7-result-a9sa-Delaware"
        >
          Delaware
        </li>
        <li
          class="select2-results__option"
          id="select2-lpj7-result-0wpy-Tennessee"
          role="option"
          aria-selected="false"
          data-select2-id="select2-lpj7-result-0wpy-Tennessee"
        >
          Tennessee
        </li>
        <li
          class="select2-results__option select2-results__option--highlighted"
          id="select2-lpj7-result-alfp-Texas"
          role="option"
          aria-selected="false"
          data-select2-id="select2-lpj7-result-alfp-Texas"
        >
          Texas
        </li>
        <li
          class="select2-results__option"
          id="select2-lpj7-result-if0w-Washington"
          role="option"
          aria-selected="false"
          data-select2-id="select2-lpj7-result-if0w-Washington"
        >
          Washington
        </li>
      </ul>
    </span>
  </span>
</span>;
*/
