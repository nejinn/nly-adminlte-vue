import { NlyCollapseTransition } from "./collapseTransition";
import { NlyCollapse } from "./collapse";
import { NlyCollapseNoclassTransition } from "./collapse-noclass-transition";
import { NlyCollapseNoclass } from "./collapse-noclass";

const collapsePlugin = {
  NlyCollapseTransition: NlyCollapseTransition,
  NlyCollapse: NlyCollapse,
  NlyCollapseNoclassTransition: NlyCollapseNoclassTransition,
  NlyCollapseNoclass: NlyCollapseNoclass
};

export {
  collapsePlugin,
  NlyCollapseTransition,
  NlyCollapse,
  NlyCollapseNoclassTransition,
  NlyCollapseNoclass
};
