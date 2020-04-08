import { nlyPluginFactory } from "../../utils/plugins";
import { NlyForm } from "./form/form";
import { NlyFormInput } from "./form-input/form-input";
import { NlyFormFeedback } from "./form-feedback/form-feedback";

const formPlguin = nlyPluginFactory({
  components: {
    NlyForm,
    NlyFormInput,
    NlyFormFeedback
  }
});

export { formPlguin, NlyForm, NlyFormInput, NlyFormFeedback };
