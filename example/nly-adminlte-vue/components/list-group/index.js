import { NlyListGroup } from "./list-group";
import { NlyListGroupItem } from "./list-group-item";
import { nlyPluginFactory } from "../../utils/plugins";

const listGroupPlugin = nlyPluginFactory({
  components: {
    NlyListGroup,
    NlyListGroupItem
  }
});

export { listGroupPlugin, NlyListGroup, NlyListGroupItem };
