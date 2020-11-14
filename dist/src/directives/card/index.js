import { nlyPluginFactory } from "../../utils/plugins";
import { VNlyCardMaximized } from "./maximized-card";
import { VNlyCardCollapse } from "./collapse-card";

const VNlyCardPlugin = nlyPluginFactory({
  directives: {
    VNlyCardMaximized,
    VNlyCardCollapse
  }
});

export { VNlyCardPlugin, VNlyCardMaximized, VNlyCardCollapse };
