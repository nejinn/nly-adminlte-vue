import { nlyPluginFactory } from "../../utils/plugins";
import { NlyInfobox } from "./infobox";
import { NlyInfoboxIcon } from "./infobox-icon";
import { NlyInfoboxBody } from "./infobox-body";
import { NlyInfoboxText } from "./infobox-text";
import { NlyInfoboxNumber } from "./infobox-number";

const InfoboxPlugin = nlyPluginFactory({
  components: {
    NlyInfobox,
    NlyInfoboxIcon,
    NlyInfoboxBody,
    NlyInfoboxText,
    NlyInfoboxNumber
  }
});

export {
  InfoboxPlugin,
  NlyInfobox,
  NlyInfoboxIcon,
  NlyInfoboxBody,
  NlyInfoboxText,
  NlyInfoboxNumber
};
