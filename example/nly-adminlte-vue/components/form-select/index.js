import { NlyFormSelect } from "./form-select";
import { NlyFormSelectOption } from "./form-select-option";
import { NlyFormSelectOptionGroup } from "./form-select-option-group";
import { nlyPluginFactory } from "../../utils/plugins";

const FormSelectPlugin = nlyPluginFactory({
  components: {
    NlyFormSelect,
    NlyFormSelectOption,
    NlyFormSelectOptionGroup,
    NlySelect: NlyFormSelect,
    NlySelectOption: NlyFormSelectOption,
    NlySelectOptionGroup: NlyFormSelectOptionGroup
  }
});

export {
  FormSelectPlugin,
  NlyFormSelect,
  NlyFormSelectOption,
  NlyFormSelectOptionGroup
};
