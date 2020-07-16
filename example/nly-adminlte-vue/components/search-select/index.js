import { NlySearchSelectItem } from "./plugin/search-select-item";
import { nlyPluginFactory } from "../../utils/plugins";
import { NlySearchSelectSingleItem } from "./plugin/search-select-single-item";
import { NlySearchSelectMultipleItem } from "./plugin/search-select-multiple-item";
import { NlySearchSelectSingleContainer } from "./plugin/search-select-single-container";
import { NlySearchSelectMultipleContainer } from "./plugin/search-select-multiple-container";

const SearchSelectPlugin = nlyPluginFactory({
  components: {
    NlySearchSelectItem,
    NlySearchSelectSingleItem,
    NlySearchSelectMultipleItem,
    NlySearchSelectSingleContainer,
    NlySearchSelectMultipleContainer
  }
});

export {
  SearchSelectPlugin,
  NlySearchSelectItem,
  NlySearchSelectSingleItem,
  NlySearchSelectMultipleItem,
  NlySearchSelectSingleContainer,
  NlySearchSelectMultipleContainer
};
