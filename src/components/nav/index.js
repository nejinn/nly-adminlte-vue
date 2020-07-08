import { nlyPluginFactory } from "../../utils/plugins";
import { NlyNav } from "./nav";
import { NlyNavItem } from "./nav-item";
import { NlyNavDropdown } from "./nav-dropdown";

const NavPlugin = nlyPluginFactory({
  components: {
    NlyNav,
    NlyNavItem,
    NlyNavDropdown
  }
});

export { NavPlugin, NlyNav, NlyNavItem, NlyNavDropdown };
