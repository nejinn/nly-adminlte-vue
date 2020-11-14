import { nlyPluginFactory } from "../../utils/plugins";
import { NlyNav } from "./nav";
import { NlyNavItem } from "./nav-item";
import { NlyNavDropdown } from "./nav-dropdown";
import { NlyNavForm } from "./nav-form";
import { NlyNavText } from "./nav-text";

const NavPlugin = nlyPluginFactory({
  components: {
    NlyNav,
    NlyNavItem,
    NlyNavDropdown,
    NlyNavForm,
    NlyNavText
  }
});

export {
  NavPlugin,
  NlyNav,
  NlyNavItem,
  NlyNavDropdown,
  NlyNavForm,
  NlyNavText
};
