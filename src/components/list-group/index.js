import { NlyListGroup } from "./list-group";
import { NlyListGroupItem } from "./list-group-item";
import { nlyPluginFactory } from "../../utils/plugins";

const ListGroupPlugin = nlyPluginFactory({
  components: {
    NlyListGroup,
    NlyListGroupItem
  }
});

export { ListGroupPlugin, NlyListGroup, NlyListGroupItem };
