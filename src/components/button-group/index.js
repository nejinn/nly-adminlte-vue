import { NlyButtonGroup } from "./button-group";
import { nlyPluginFactory } from "../../utils/plugins";

const ButtonGroupPlugin = nlyPluginFactory({
  components: {
    NlyButtonGroup,
    NlyBtnGroup: NlyButtonGroup
  }
});

export { ButtonGroupPlugin, NlyButtonGroup };
