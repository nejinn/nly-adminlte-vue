import { nlyPluginFactory } from "../../utils/plugins";
import { NlyIcon } from "./icon";

const IconsPlugin = nlyPluginFactory({
  components: {
    NlyIcon
  }
});

export { IconsPlugin, NlyIcon };
