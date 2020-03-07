import Vue from "../../utils/vue";

// v-model in input demo
export const testComponent = Vue.extend({
  name: "testComponent",
  model: {
    prop: "good",
    event: "change"
  },
  props: ["good"],
  methods: {
    changeValue(event) {
      this.$emit("change", event.target.value);
    }
  },
  render(h) {
    return h("input", {
      on: {
        // input: function(event) {
        //   self.$emit("change", event.target.value);
        // }
        input: () => this.changeValue(event)
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: this.good
      }
    });
  }
});
