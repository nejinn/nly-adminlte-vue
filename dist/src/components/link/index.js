import { nlyPluginFactory } from "../../utils/plugins";
import { NlyLink } from "./link";

const LinkPlugin = nlyPluginFactory({
  components: {
    NlyLink
  }
});

export { LinkPlugin, NlyLink };
