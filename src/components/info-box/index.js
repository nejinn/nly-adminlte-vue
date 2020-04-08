import { nlyPluginFactory } from "../../utils/plugins";
import { NlyInfobox } from "./infobox";
import { NlyInfoboxIcon } from "./infobox-icon";
import { NlyInfoboxBody } from "./infobox-body";
import { NlyInfoboxText } from "./infobox-text";
import { NlyInfoboxNumber } from "./infobox-number";

const infoboxPlugin = nlyPluginFactory({
  components: {
    NlyInfobox,
    NlyInfoboxIcon,
    NlyInfoboxBody,
    NlyInfoboxText,
    NlyInfoboxNumber
  }
});

export {
  infoboxPlugin,
  NlyInfobox,
  NlyInfoboxIcon,
  NlyInfoboxBody,
  NlyInfoboxText,
  NlyInfoboxNumber
};
