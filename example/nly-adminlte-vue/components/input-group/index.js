import { nlyPluginFactory } from "../../utils/plugins";
import { NlyInputGroupText } from "./input-group-text";
import { NlyInputGroupAdd } from "./input-group-add";
import { NlyInputGroup } from "./input-group";
import { NlyInputGroupAppend } from "./input-group-append";
import { NlyInputGroupPrepend } from "./input-group-prepend";

const InputGroupoPlugin = nlyPluginFactory({
  components: {
    NlyInputGroupText,
    NlyInputGroupAdd,
    NlyInputGroup,
    NlyInputGroupAppend,
    NlyInputGroupPrepend
  }
});

export {
  InputGroupoPlugin,
  NlyInputGroupText,
  NlyInputGroupAdd,
  NlyInputGroup,
  NlyInputGroupAppend,
  NlyInputGroupPrepend
};
