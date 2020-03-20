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

// const name = "NlyFormInput";

// export const testComponent = Vue.extend({
//   name: name,
//   data() {
//     return {
//       localValue: this.value
//     };
//   },
//   props: {
//     value: {
//       type: String
//     }
//   },
//   watch: {
//     value: function(newVal) {
//       if (newVal !== this.localValue) {
//         this.localValue = newVal;
//       }
//     }
//   },
//   methods: {
//     onInput(evt) {
//       // 组织ime,防止非英文输出发还在输入就触发
//       if (evt.target.composing) {
//         return;
//       }

//       const value = evt.target.value;
//       console.log(11, value, evt.defaultPrevented);
//       if (value === false || evt.defaultPrevented) {
//         evt.preventDefault();
//         return;
//       }
//       this.localValue = value;
//       this.$emit("input", value);
//     }
//   },
//   render(h) {
//     return h("input", {
//       ref: "input",
//       class: "form-control",
//       directives: [
//         {
//           name: "model",
//           rawName: "v-model",
//           value: this.value,
//           expression: "value"
//         }
//       ],
//       domProps: {
//         value: this.value
//       },
//       on: {
//         //   ...self.$listeners,
//         input: this.onInput
//         //   change: self.onChange,
//         //   blur: self.onBlur
//       }
//     });
//   }
// });
