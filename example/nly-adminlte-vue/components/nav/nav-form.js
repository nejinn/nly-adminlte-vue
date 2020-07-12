import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { omit } from "../../utils/object";
import { NlyForm, props as NlyFormProps } from "../form/form";

export const props = {
  ...omit(NlyFormProps, ["inline"]),
  formClass: {
    type: [String, Array, Object],
    default: null
  }
};

export const NlyNavForm = Vue.extend({
  name: "NlyNavForm",
  functional: true,
  props,
  render(h, { props, data, children, listeners = {} }) {
    const attrs = data.attrs;
    data.attrs = {};
    data.on = {};
    const $form = h(
      NlyForm,
      {
        class: props.formClass,
        props: { ...props, inline: true },
        attrs,
        on: listeners
      },
      children
    );
    return h("li", mergeData(data, { staticClass: "form-inline" }), [$form]);
  }
});
