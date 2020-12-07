import { nlyPluginFactory } from "../../utils/plugins";
import { NlyFormTag } from "./form-tag";
import { NlyFormTags } from "./form-tags";
const FormTagsPlugin = nlyPluginFactory({
  components: {
    NlyFormTag,
    NlyFormTags
  }
});

export { FormTagsPlugin, NlyFormTag, NlyFormTags };
