import { nlyPluginFactory } from "../../utils/plugins";
import { NlyCollapseTransition } from "../../utils/collapse-transition";
import { NlyCollapse } from "./collapse";
import { NlyCollapseNoclassTransition } from "../../utils/collapse-noclass-transition";
import { NlyCollapseNoclass } from "./collapse-noclass";
import { VNlyToggle } from "../../directives/toggle";

const CollapsePlugin = nlyPluginFactory({
  components: {
    NlyCollapseTransition,
    NlyCollapse,
    NlyCollapseNoclassTransition,
    NlyCollapseNoclass
  },
  directives: { VNlyToggle }
});

export {
  CollapsePlugin,
  NlyCollapseTransition,
  NlyCollapse,
  NlyCollapseNoclassTransition,
  NlyCollapseNoclass
};
