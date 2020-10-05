import { NlyFormSelect } from "./form-select";
import { NlyFormSelectOption } from "./form-select-option";
import { NlyFormSelectOptionGroup } from "./form-select-option-group";
import { nlyPluginFactory } from "../../utils/plugins";

const FormSelectPlugin = /*#__PURE__*/ nlyPluginFactory({
  components: {
    NlyFormSelect,
    NlyFormSelectOption,
    NlyFormSelectOptionGroup,
    BSelect: NlyFormSelect,
    BSelectOption: NlyFormSelectOption,
    BSelectOptionGroup: NlyFormSelectOptionGroup
  }
});

export {
  FormSelectPlugin,
  NlyFormSelect,
  NlyFormSelectOption,
  NlyFormSelectOptionGroup
};
