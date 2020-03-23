import { nlyPluginFactory } from "../../utils/plugins";
import { NlyForm } from "./form/form";
import { NlyFormInput } from "./form-input/form-input";

const formPlguin = nlyPluginFactory({
  components: {
    NlyForm,
    NlyFormInput
  }
});

export { formPlguin, NlyForm, NlyFormInput };
