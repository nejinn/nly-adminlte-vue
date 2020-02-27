import { NlyNav } from "./nav";
import { NlyNavItem } from "./nav-item";
import { NlyNavDropdown } from "./nav-dropdown";

const navPlugin = {
  NlyNav: NlyNav,
  NlyNavItem: NlyNavItem,
  NlyNavDropdown: NlyNavDropdown
};

export { navPlugin, NlyNav, NlyNavItem, NlyNavDropdown };
