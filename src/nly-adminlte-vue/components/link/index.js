import { nlyPluginFactory } from "../../utils/plugins";
import { NlyLink } from "./link";

const linkPlugin = nlyPluginFactory({
  components: {
    NlyLink
  }
});

export { linkPlugin, NlyLink };
