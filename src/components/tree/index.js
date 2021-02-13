import { nlyPluginFactory } from "../../utils/plugins";
import { NlyTreeItem } from "./tree-item";
import { NlyTreeItemTree } from "./tree-item-tree";
import { NlyTree } from "./tree";

const TreePlugin = nlyPluginFactory({
  components: {
    NlyTreeItem,
    NlyTreeItemTree,
    NlyTree
  }
});

export { TreePlugin, NlyTreeItem, NlyTreeItemTree, NlyTree };
