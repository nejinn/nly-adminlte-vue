import { nlyPluginFactory } from "../../utils/plugins";
import { NlyNav } from "./nav";
import { NlyNavItem } from "./nav-item";
import { NlyNavDropdown } from "./nav-dropdown";

const navPlugin = nlyPluginFactory({
  components: {
    NlyNav,
    NlyNavItem,
    NlyNavDropdown
  }
});

export { navPlugin, NlyNav, NlyNavItem, NlyNavDropdown };
