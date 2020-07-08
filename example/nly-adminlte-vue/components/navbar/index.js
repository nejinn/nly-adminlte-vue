import { nlyPluginFactory } from "../../utils/plugins";
import { NlyNavbar } from "./navbar";
import { NlyNavbarNav } from "./navbar-nav";
import { NlyNavbarBrand } from "./navbar-brand";
import { NlyNavbarBrandimg } from "./navbar-brandimg";
import { NlyNavbarBrandtext } from "./navbar-brandtext";
import { NlyNavbarToggle } from "./navbar-toggle";

const NavbarPlugin = nlyPluginFactory({
  components: {
    NlyNavbar,
    NlyNavbarNav,
    NlyNavbarBrand,
    NlyNavbarBrandimg,
    NlyNavbarBrandtext,
    NlyNavbarToggle
  }
});

export {
  NavbarPlugin,
  NlyNavbar,
  NlyNavbarNav,
  NlyNavbarBrand,
  NlyNavbarBrandimg,
  NlyNavbarBrandtext,
  NlyNavbarToggle
};
