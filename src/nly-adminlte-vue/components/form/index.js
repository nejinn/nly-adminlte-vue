import { NlyForm } from "./form";
import { NlyFormDatalist } from "./form-datalist";
import { NlyFormText } from "./form-text";
import { NlyFormInvalidFeedback } from "./form-invalid-feedback";
import { NlyFormValidFeedback } from "./form-valid-feedback";
import { NlyFormRow } from "./form-row";
import { nlyPluginFactory } from "../../utils/plugins";

const formPlugin = nlyPluginFactory({
  components: {
    NlyForm,
    NlyFormDatalist,
    NlyDatalist: NlyFormDatalist,
    NlyFormText,
    NlyFormInvalidFeedback,
    NlyFormFeedback: NlyFormInvalidFeedback,
    NlyFormValidFeedback,
    NlyFormRow
  }
});

export {
  formPlugin,
  NlyForm,
  NlyFormDatalist,
  NlyFormText,
  NlyFormInvalidFeedback,
  NlyFormValidFeedback
};
