import { NlyFormCheckbox } from "./form-checkbox";
import { NlyFormCheckboxGroup } from "./form-checkbox-group";
import { nlyPluginFactory } from "../../utils/plugins";

const FormCheckboxPlugin = /*#__PURE__*/ nlyPluginFactory({
  components: {
    NlyFormCheckbox,
    NlyCheckbox: NlyFormCheckbox,
    NlyCheck: NlyFormCheckbox,
    NlyFormCheckboxGroup,
    BCheckboxGroup: NlyFormCheckboxGroup,
    NlyCheckGroup: NlyFormCheckboxGroup
  }
});

export { FormCheckboxPlugin, NlyFormCheckbox, NlyFormCheckboxGroup };
