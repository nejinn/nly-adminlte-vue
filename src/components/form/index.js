import { nlyPluginFactory } from "../../utils/plugins";
import { NlyForm } from "./form";
import { NlyFormFeedback } from "./form-feedback";
import { NlyFormText } from "./form-text";
import { NlyFormDatalist } from "./form-datalist";

const FormPlugin = nlyPluginFactory({
  components: {
    NlyForm,
    NlyFormFeedback,
    NlyFormText,
    NlyFormDatalist
  }
});

export { FormPlugin, NlyForm, NlyFormFeedback, NlyFormText, NlyFormDatalist };
