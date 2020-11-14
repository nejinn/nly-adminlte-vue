import { NlyFormInput } from "./form-input";
import { nlyPluginFactory } from "../../utils/plugins";

const FormInputPlugin = nlyPluginFactory({
  components: {
    NlyFormInput,
    NlyInput: NlyFormInput
  }
});

export { FormInputPlugin, NlyFormInput };
