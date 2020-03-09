import { nlyPluginFactory } from "../../utils/plugins";
import { NlyCardMaximized } from "./maximized-card";
import { NlyCardCollapse } from "./collapse-card";

const cardDirectivePlugin = nlyPluginFactory({
  directives: {
    NlyCardMaximized,
    NlyCardCollapse
  }
});

export { cardDirectivePlugin, NlyCardMaximized, NlyCardCollapse };
