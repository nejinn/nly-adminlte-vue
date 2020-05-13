import { NlyDropdown } from "./dropdown";
import { NlyDropdownItem } from "./dropdown-item";
import { NlyDropdownItemButton } from "./dropdown-item-button";
import { NlyDropdownHeader } from "./dropdown-header";
import { NlyDropdownDivider } from "./dropdown-divider";
import { NlyDropdownForm } from "./dropdown-form";
import { NlyDropdownText } from "./dropdown-text";
import { NlyDropdownGroup } from "./dropdown-group";
import { NlyDropdownFooter } from "./dropdown-footer";
import { nlyPluginFactory } from "../../utils/plugins";

const DropdownPlugin = nlyPluginFactory({
  components: {
    NlyDropdown,
    NlyDd: NlyDropdown,
    NlyDropdownItem,
    NlyDdItem: NlyDropdownItem,
    NlyDropdownItemButton,
    NlyDropdownItemBtn: NlyDropdownItemButton,
    NlyDdItemButton: NlyDropdownItemButton,
    NlyDdItemBtn: NlyDropdownItemButton,
    NlyDropdownHeader,
    NlyDdHeader: NlyDropdownHeader,
    NlyDropdownDivider,
    NlyDdDivider: NlyDropdownDivider,
    NlyDropdownForm,
    NlyDdForm: NlyDropdownForm,
    NlyDropdownText,
    NlyDdText: NlyDropdownText,
    NlyDropdownGroup,
    NlyDdGroup: NlyDropdownGroup,
    NlyDropdownFooter,
    NlyDdFooter: NlyDropdownFooter
  }
});

export {
  DropdownPlugin,
  NlyDropdown,
  NlyDropdownItem,
  NlyDropdownItemButton,
  NlyDropdownHeader,
  NlyDropdownDivider,
  NlyDropdownForm,
  NlyDropdownText,
  NlyDropdownGroup,
  NlyDropdownFooter
};
