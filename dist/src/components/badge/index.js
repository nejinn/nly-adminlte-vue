import { NlyBadge } from "./badge";
import { nlyPluginFactory } from "../../utils/plugins";

const BadgePlugin = nlyPluginFactory({
  components: { NlyBadge }
});

export { BadgePlugin, NlyBadge };
