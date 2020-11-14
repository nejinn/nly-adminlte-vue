import Vue from "../../utils/vue";
import { NlyTd } from "./td";

const name = "NlyTh";

export const NlyTh = Vue.extend({
  name: name,
  extends: NlyTd,
  computed: {
    tag() {
      return "th";
    }
  }
});
