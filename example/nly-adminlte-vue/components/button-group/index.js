import { NlyButtonGroup } from "./button-group";
import { pluginFactory } from "../../utils/plugins";

const ButtonGroupPlugin = pluginFactory({
  components: {
    NlyButtonGroup,
    NlyBtnGroup: NlyButtonGroup
  }
});

export { ButtonGroupPlugin, NlyButtonGroup };
