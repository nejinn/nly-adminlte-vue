import { nlyPluginFactory } from "../../utils/plugins";
import { NlyCollapseTransition } from "../../utils/collapse-transition";
import { NlyCollapse } from "./collapse";
import { NlyCollapseNoclassTransition } from "../../utils/collapse-noclass-transition";
import { NlyCollapseNoclass } from "./collapse-noclass";

const collapsePlugin = nlyPluginFactory({
  components: {
    NlyCollapseTransition,
    NlyCollapse,
    NlyCollapseNoclassTransition,
    NlyCollapseNoclass
  }
});

export {
  collapsePlugin,
  NlyCollapseTransition,
  NlyCollapse,
  NlyCollapseNoclassTransition,
  NlyCollapseNoclass
};
