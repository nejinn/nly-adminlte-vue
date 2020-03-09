import { nlyPluginFactory } from "../../utils/plugins";
import { NlySwitch } from "./switch";
import { NlyBootstrapSwitch } from "./bootstrap-switch";

const switchPlugin = nlyPluginFactory({
  components: {
    NlySwitch,
    NlyBootstrapSwitch
  }
});

export { switchPlugin, NlySwitch, NlyBootstrapSwitch };
