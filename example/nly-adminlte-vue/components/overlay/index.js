import { NlyOverlay } from "./overlay";
import { nlyPluginFactory } from "../../utils/plugins";

const OverlayPlugin = nlyPluginFactory({
  components: { NlyOverlay }
});

export { OverlayPlugin, NlyOverlay };
