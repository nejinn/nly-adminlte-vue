import { nlyPluginFactory } from "../../utils/plugins";
import { NlySwitch } from "./switch";
import { NlyBootstrapSwitch } from "./bootstrap-switch";

const SwitchPlugin = nlyPluginFactory({
  components: {
    NlySwitch,
    NlyBootstrapSwitch
  }
});

export { SwitchPlugin, NlySwitch, NlyBootstrapSwitch };
