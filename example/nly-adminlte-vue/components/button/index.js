import { nlyPluginFactory } from "../../utils/plugins";
import { NlyButton } from "./button";
import { NlyButtonGroup } from "./button-group";
import { NlyButtonClose } from "./button-close";

const buttonPlugin = nlyPluginFactory({
  components: {
    NlyButton,
    NlyButtonGroup,
    NlyButtonClose
  }
});
export { buttonPlugin, NlyButton, NlyButtonGroup, NlyButtonClose };
