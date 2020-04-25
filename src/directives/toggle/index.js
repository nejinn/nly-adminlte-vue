import { nlyPluginFactory } from "../../utils/plugins";
import { VNlyToggle } from "./toggle";

const VNlyTogglePlugin = nlyPluginFactory({
  directives: {
    VNlyToggle
  }
});

export { VNlyTogglePlugin, VNlyToggle };
