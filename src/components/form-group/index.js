import { nlyPluginFactory } from "../../utils/plugins";
import { NlyFormGroup } from "./form-group";

const FormGroupPlugin = nlyPluginFactory({
  components: {
    NlyFormGroup
  }
});

export { FormGroupPlugin, NlyFormGroup };
