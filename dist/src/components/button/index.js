import { nlyPluginFactory } from "../../utils/plugins";
import { NlyButton } from "./button";
import { NlyButtonClose } from "./button-close";

const ButtonPlugin = nlyPluginFactory({
  components: {
    NlyButton,
    NlyBtn: NlyButton,
    NlyButtonClose,
    NlyBtnClose: NlyButtonClose
  }
});
export { ButtonPlugin, NlyButton, NlyButtonClose };
