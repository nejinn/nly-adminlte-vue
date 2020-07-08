import { nlyPluginFactory } from "../../utils/plugins";
import { NlyForm } from "./form";
import { NlyFormFeedback } from "./form-feedback";

const FormPlugin = nlyPluginFactory({
  components: {
    NlyForm,
    NlyFormFeedback
  }
});

export { FormPlugin, NlyForm, NlyFormFeedback };
