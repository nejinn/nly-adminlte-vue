import { NlyModal } from "./modal";
// import { VBModal } from '../../directives/modal/modal'
import { NlyAModalPlugin } from "./helpers/nlya-modal";
import { nlyPluginFactory } from "../../utils/plugins";

const ModalPlugin = /*#__PURE__*/ nlyPluginFactory({
  components: { NlyModal },
  //   directives: { VBModal },
  // $bvModal injection
  plugins: { NlyAModalPlugin }
});

export { ModalPlugin, NlyModal };
