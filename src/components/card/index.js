import { nlyPluginFactory } from "../../utils/plugins";
import { NlyCardGroup } from "./card-group";
import { NlyCard } from "./card";
import { NlyCardHeader } from "./card-header";
import { NlyCardBody } from "./card-body";
import { NlyCardFooter } from "./card-footer";
import { NlyCardTitle } from "./card-title";
import { NlyCardSubtitle } from "./card-subtitle";
import { NlyCardImg } from "./card-img";
import { NlyCardTool } from "./card-tool";
import { NlyCardText } from "./card-text";

const CardPlugin = nlyPluginFactory({
  components: {
    NlyCardGroup,
    NlyCard,
    NlyCardHeader,
    NlyCardBody,
    NlyCardFooter,
    NlyCardTitle,
    NlyCardSubtitle,
    NlyCardImg,
    NlyCardTool,
    NlyCardText
  }
});

export {
  CardPlugin,
  NlyCardGroup,
  NlyCard,
  NlyCardHeader,
  NlyCardBody,
  NlyCardFooter,
  NlyCardTitle,
  NlyCardSubtitle,
  NlyCardImg,
  NlyCardTool,
  NlyCardText
};
