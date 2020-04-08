import { nlyPluginFactory } from "../../utils/plugins";
import { NlyDropdown } from "./dropdown";
import { NlyDropdownMenu } from "./dropdown-menu";

const dropdownPlugin = nlyPluginFactory({
  components: {
    NlyDropdown,
    NlyDropdownMenu
  }
});
export { dropdownPlugin, NlyDropdown, NlyDropdownMenu };
