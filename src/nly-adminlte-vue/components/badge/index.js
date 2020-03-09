import { NlyBadge } from "./badge";
import { nlyPluginFactory } from "../../utils/plugins";

const badgePlugin = nlyPluginFactory({
  components: { NlyBadge }
});

export { badgePlugin, NlyBadge };
