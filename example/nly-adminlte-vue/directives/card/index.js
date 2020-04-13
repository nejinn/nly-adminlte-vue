import { nlyPluginFactory } from "../../utils/plugins";
import { YNlyCardMaximized } from "./maximized-card";
import { YNlyCardCollapse } from "./collapse-card";

const cardDirectivePlugin = nlyPluginFactory({
  directives: {
    YNlyCardMaximized,
    YNlyCardCollapse
  }
});

export { cardDirectivePlugin, YNlyCardMaximized, YNlyCardCollapse };
