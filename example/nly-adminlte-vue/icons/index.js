import { nlyPluginFactory } from "../utils/plugins";
import { NlyIcon } from "./icon";

const IconPlugin = nlyPluginFactory({
  components: {
    NlyIcon
  }
});

export { IconPlugin, NlyIcon };
