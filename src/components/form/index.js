import { nlyPluginFactory } from "../../utils/plugins";
import { NlyForm } from "./form";
import { NlyFormFeedback } from "./form-feedback";

const formPlguin = nlyPluginFactory({
  components: {
    NlyForm,
    NlyFormFeedback
  }
});

export { formPlguin, NlyForm, NlyFormFeedback };
