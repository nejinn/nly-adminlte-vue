import { nlyPluginFactory } from "../../utils/plugins";
import { NlyFormInput } from "./form-input/form-input";

const formPlguin = nlyPluginFactory({
  components: {
    NlyFormInput
  }
});

export { formPlguin, NlyFormInput };
