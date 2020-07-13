import { nlyPluginFactory } from "../../utils/plugins";
import { NlyCollapseTransition } from "../../utils/collapse-transition";
import { NlyCollapse } from "./collapse";
import { VNlyToggle } from "../../directives/toggle";
import { NlyCollapseNoclass } from "./collapse-noclass";

const CollapsePlugin = nlyPluginFactory({
  components: {
    NlyCollapseTransition,
    NlyCollapse,
    NlyCollapseNoclass
  },
  directives: { VNlyToggle }
});

export {
  CollapsePlugin,
  NlyCollapseTransition,
  NlyCollapse,
  NlyCollapseNoclass
};
