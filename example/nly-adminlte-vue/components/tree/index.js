import { nlyPluginFactory } from "../../utils/plugins";
import { NlyTreeItem } from "./tree-item";
import { NlyTreeItemTree } from "./tree-item-tree";

const TreePlugin = nlyPluginFactory({
  components: {
    NlyTreeItem,
    NlyTreeItemTree
  }
});

export { TreePlugin, NlyTreeItem, NlyTreeItemTree };
