import { nlyPluginFactory } from "../../utils/plugins";
import { NlyIcon } from "./icon";

const iconPlugin = nlyPluginFactory({
  components: {
    NlyIcon
  }
});

export { iconPlugin, NlyIcon };
