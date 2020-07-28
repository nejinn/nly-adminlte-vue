import { NlySearchSelectItem } from "./plugin/search-select-item";
import { nlyPluginFactory } from "../../utils/plugins";
import { NlySearchSelectSingleItem } from "./plugin/search-select-single-item";
import { NlySearchSelectMultipleItem } from "./plugin/search-select-multiple-item";
import { NlySearchSelectSingleContainer } from "./plugin/search-select-single-container";
import { NlySearchSelectMultipleContainer } from "./plugin/search-select-multiple-container";
import { NlySearchSelect } from "./search-select";
import { NlySearchSelectDropdownOption } from "./plugin/search-select-dropdown-option";
import { NlySearchSelectDropdownContainer } from "./plugin/search-select-dropdown-container";

const SearchSelectPlugin = nlyPluginFactory({
  components: {
    NlySearchSelectItem,
    NlySearchSelectSingleItem,
    NlySearchSelectMultipleItem,
    NlySearchSelectSingleContainer,
    NlySearchSelectMultipleContainer,
    NlySearchSelect,
    NlySearchSelectDropdownOption,
    NlySearchSelectDropdownContainer
  }
});

export {
  SearchSelectPlugin,
  NlySearchSelectItem,
  NlySearchSelectSingleItem,
  NlySearchSelectMultipleItem,
  NlySearchSelectSingleContainer,
  NlySearchSelectMultipleContainer,
  NlySearchSelect,
  NlySearchSelectDropdownOption,
  NlySearchSelectDropdownContainer
};
