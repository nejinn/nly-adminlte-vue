import { NlyFormRadio } from "./form-radio";
import { NlyFormRadioGroup } from "./form-radio-group";
import { nlyPluginFactory } from "../../utils/plugins";

const FormRadioPlugin = nlyPluginFactory({
  components: {
    NlyFormRadio,
    NlyRadio: NlyFormRadio,
    NlyFormRadioGroup,
    NlyRadioGroup: NlyFormRadioGroup
  }
});

export { FormRadioPlugin, NlyFormRadio, NlyFormRadioGroup };
