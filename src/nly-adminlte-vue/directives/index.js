import { NlyToggle } from "./toggle/toggle";

export default {
  install: Vue => {
    Vue.directive("nly-toggle", NlyToggle);
  }
};
