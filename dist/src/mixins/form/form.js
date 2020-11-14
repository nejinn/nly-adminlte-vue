import { matches, select, isVisible, requestAF } from "../../utils/dom";

const SELECTOR = "input, textarea, select";

export default {
  props: {
    // form中可以通过name取值
    name: {
      type: String
    },
    // id
    id: {
      type: String
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // html校验必填
    required: {
      type: Boolean,
      default: false
    },
    // 指定归属表单
    form: {
      type: String,
      default: null
    },
    // 自动聚焦
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.handleAutofocus();
  },
  // keep-alive才有的钩子
  activated() {
    this.handleAutofocus();
  },
  methods: {
    handleAutofocus() {
      this.$nextTick(() => {
        requestAF(() => {
          let el = this.$el;
          if (this.autofocus && isVisible(el)) {
            if (!matches(el, SELECTOR)) {
              el = select(SELECTOR, el);
            }
            el && el.focus && el.focus();
          }
        });
      });
    }
  }
};
