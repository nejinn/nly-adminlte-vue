import { nlyPluginFactory } from "../../utils/plugins";
import { NlyTreeItem } from "./tree-item";

const TreePlugin = nlyPluginFactory({
  components: {
    NlyTreeItem
  }
});

export { TreePlugin, NlyTreeItem };
