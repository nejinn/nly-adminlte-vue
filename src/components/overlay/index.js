import { nlyPluginFactory } from "../../utils/plugins";
import { NlyOverlay } from "./overlay";

const overlayPlugin = nlyPluginFactory({
  components: {
    NlyOverlay
  }
});

export { overlayPlugin, NlyOverlay };
