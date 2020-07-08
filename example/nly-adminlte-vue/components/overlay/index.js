import { nlyPluginFactory } from "../../utils/plugins";
import { NlyOverlay } from "./overlay";

const OverlayPlugin = nlyPluginFactory({
  components: {
    NlyOverlay
  }
});

export { OverlayPlugin, NlyOverlay };
