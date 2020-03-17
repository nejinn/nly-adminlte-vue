import { NlyFormCheckbox } from "./form-checkbox";
import { NlyFormCheckboxGroup } from "./form-checkbox-group";
import { nlyPluginFactory } from "../../utils/plugins";

const FormCheckboxPlugin = nlyPluginFactory({
  components: {
    NlyFormCheckbox,
    NlyCheckbox: NlyFormCheckbox,
    NlyCheck: NlyFormCheckbox,
    NlyFormCheckboxGroup,
    NlyCheckboxGroup: NlyFormCheckboxGroup,
    NlyCheckGroup: NlyFormCheckboxGroup
  }
});

export { FormCheckboxPlugin, NlyFormCheckbox, NlyFormCheckboxGroup };
