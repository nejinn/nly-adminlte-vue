import { NlyModal } from "./modal";
import { NlyAModalPlugin } from "./helpers/nlya-modal";
import { nlyPluginFactory } from "../../utils/plugins";

const ModalPlugin = nlyPluginFactory({
  components: { NlyModal },
  plugins: { NlyAModalPlugin }
});

export { ModalPlugin, NlyModal };
