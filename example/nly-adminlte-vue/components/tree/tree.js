import Vue from "../../utils/vue";
import {
  NlyTreeItem,
  // TREE_ADD_EVENT,
  // TREE_DELETE_EVENT,
  // TREE_LABEL_CHANGE_EVENT,
  TREE_VALUE_CHANGE_EVENT
  // TREE_PARENT_VALUE_CHECKED_EVENT
  // TREE_CHECKED_INDETERMINATE_VALUE_CHANGE_EVENT
} from "./tree-item";
import { NlyTreeItemTree } from "./tree-item-tree";
import listenOnRootMixin from "../../mixins/listen-on-root";
import idMixin from "../../mixins/id";
import { getComponentConfig } from "../../utils/config";
import { isBoolean, isArray } from "../../utils/inspect";
import { NlyRenderFunction } from "../render-function";
import clonedeep from "lodash.clonedeep";

const name = "NlyTree";

export const NlyTree = Vue.extend({
  name: name,
  mixins: [listenOnRootMixin, idMixin],
  data() {
    return {
      // 树数组
      localOptions: undefined,
      // 树顺序
      localOptionsIndex: [],
      // 当前选中树
      currentNode: [],
      // 最后添加的树
      lastAddNode: [],
      // 已删除的树
      deleteNode: []
      // copyLocalOptions: undefined
    };
  },
  props: {
    options: {
      type: Array,
      default: undefined
    },
    iconVariant: {
      type: String,
      default: () => getComponentConfig(name, "iconVariant")
    },
    accordion: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    showCheck: {
      type: Boolean,
      default: false
    },
    editor: {
      type: Boolean,
      default: false
    },
    editorVariant: {
      type: String,
      default: "default"
    },
    dbEditor: {
      type: Boolean,
      default: false
    },
    dbEditorVariant: {
      type: String,
      default: "default"
    },
    delete: {
      type: Boolean,
      default: false
    },
    deleteVariant: {
      type: String,
      default: "default"
    },
    asyn: {
      type: Boolean,
      default: false
    },
    asynVariant: {
      type: String,
      default: "default"
    },
    loadingVariant: {
      type: String,
      default: "secondary"
    },
    add: {
      type: Boolean,
      default: false
    },
    addVariant: {
      type: String,
      default: "default"
    },
    subInputEditorButtonText: {
      type: String,
      default: () => getComponentConfig(name, "subInputEditorButton")
    },
    subEditorButtonText: {
      type: String,
      default: () => getComponentConfig(name, "subEditorButtonText")
    },
    editorButtonText: {
      type: String,
      default: () => getComponentConfig(name, "editorButtonText")
    },
    deleteButtonText: {
      type: String,
      default: () => getComponentConfig(name, "deleteButtonText")
    },
    asynButtonText: {
      type: String,
      default: () => getComponentConfig(name, "asynButtonText")
    },
    addButtonText: {
      type: String,
      default: () => getComponentConfig(name, "addButtonText")
    }
  },
  mounted() {
    this.options.forEach(element => {
      this.localOptionsIndex.push(element.id);
    });
    this.localOptions = this.initLocalOptions(this.options);
    // this.localOptions = this.transformOptions(this.options);
    // const a = this.findAncestorsId(this.localOptions, 10010);
    // console.log(111, a);
    // console.log(22, this.findHasChildrenId(this.localOptions, a));
    this.listenOnRoot(TREE_VALUE_CHANGE_EVENT, this.treeValueChangeEvt);
  },
  computed: {
    customOptions() {
      if (this.localOptions) {
        const converArray = this.computedLocalOptions(this.localOptions);
        return this.mapItem(converArray);
      }
      return [];
    }
  },
  methods: {
    // 遍历数组，生成渲染json
    mapItem(val) {
      let mapNum = 1;
      const mapArray = optionsArray =>
        optionsArray.map(item => {
          const {
            id,
            value,
            label,
            visible,
            iconVariant,
            showCheck,
            editor,
            editorVariant,
            dbEditor,
            dbEditorVariant,
            showDelete,
            deleteVariant,
            asyn,
            asynVariant,
            loadingVariant,
            add,
            addVariant,
            subInputEditorButtonText,
            subEditorButtonText,
            editorButtonText,
            deleteButtonText,
            asynButtonText,
            addButtonText,
            indeterminate,
            children
          } = item;
          if (!id) {
            throw new ReferenceError("id is need");
          }
          item.id = id;
          if (value === undefined) {
            item.value = false;
          } else if (!isBoolean(value)) {
            throw new ReferenceError("value must be Boolean");
          } else {
            item.value = value;
          }
          item.label = label;
          if (!visible) {
            item.visible = this.visible;
          } else if (!isBoolean(visible)) {
            throw new ReferenceError("visible must be Boolean");
          } else {
            item.visible = visible;
          }
          if (!iconVariant) {
            item.iconVariant = this.iconVariant;
          } else {
            item.iconVariant = iconVariant;
          }
          if (!showCheck) {
            item.showCheck = this.showCheck;
          } else if (!isBoolean(showCheck)) {
            throw new ReferenceError("showCheck must be Boolean");
          } else {
            item.showCheck = showCheck;
          }
          if (!editor) {
            item.editor = this.editor;
          } else if (!isBoolean(editor)) {
            throw new ReferenceError("editor must be Boolean");
          } else {
            item.editor = editor;
          }
          if (!editorVariant) {
            item.editorVariant = this.editorVariant;
          } else {
            item.editorVariant = editorVariant;
          }
          if (!dbEditor) {
            item.dbEditor = this.dbEditor;
          } else if (!isBoolean(dbEditor)) {
            throw new ReferenceError("dbEditor must be Boolean");
          } else {
            item.dbEditor = dbEditor;
          }
          if (!dbEditorVariant) {
            item.dbEditorVariant = this.dbEditorVariant;
          } else {
            item.dbEditorVariant = dbEditorVariant;
          }
          if (!showDelete) {
            item.delete = this.showDelete;
          } else if (!isBoolean(showDelete)) {
            throw new ReferenceError("showDelete must be Boolean");
          } else {
            item.delete = showDelete;
          }
          if (!deleteVariant) {
            item.deleteVariant = this.deleteVariant;
          } else {
            item.deleteVariant = deleteVariant;
          }
          if (!asyn) {
            item.asyn = this.asyn;
          } else if (!isBoolean(asyn)) {
            throw new ReferenceError("asyn must be Boolean");
          } else {
            item.asyn = asyn;
          }
          if (!asynVariant) {
            item.asynVariant = this.asynVariant;
          } else {
            item.asynVariant = asynVariant;
          }
          if (!add) {
            item.add = this.add;
          } else if (!isBoolean(add)) {
            throw new ReferenceError("add must be Boolean");
          } else {
            item.add = add;
          }
          if (!addVariant) {
            item.addVariant = this.addVariant;
          } else {
            item.addVariant = addVariant;
          }
          if (!loadingVariant) {
            item.loadingVariant = this.loadingVariant;
          } else {
            item.loadingVariant = loadingVariant;
          }

          if (!subInputEditorButtonText) {
            item.subInputEditorButtonText = this.subInputEditorButtonText;
          } else {
            item.subInputEditorButtonText = subInputEditorButtonText;
          }
          if (!subEditorButtonText) {
            item.subEditorButtonText = this.subEditorButtonText;
          } else {
            item.subEditorButtonText = subEditorButtonText;
          }
          if (!editorButtonText) {
            item.editorButtonText = this.editorButtonText;
          } else {
            item.editorButtonText = editorButtonText;
          }
          if (!deleteButtonText) {
            item.deleteButtonText = this.deleteButtonText;
          } else {
            item.deleteButtonText = deleteButtonText;
          }
          if (!asynButtonText) {
            item.asynButtonText = this.asynButtonText;
          } else {
            item.asynButtonText = asynButtonText;
          }
          if (!addButtonText) {
            item.addButtonText = this.addButtonText;
          } else {
            item.addButtonText = addButtonText;
          }

          if (value) {
            this.currentNode.push({
              id: item.id,
              label: item.label,
              value: item.value
            });
          }

          if (children === undefined) {
            item._type = NlyTreeItem;
            return item;
          } else if (!isArray(children)) {
            throw new ReferenceError("children must be Array");
          } else {
            item._children = children;
            delete item.children;
            item._type = NlyTreeItemTree;
            if (!indeterminate) {
              item.indeterminate = false;
            } else {
              item.indeterminate = true;
            }
            item.appear = this.appear;
            item.target = `${this._uid}_${item.id}_nly_tree_target`;
            if (this.accordion) {
              item.accordion = `${mapNum}-nly-tree-accordion`;
            } else {
              item.accordion = `${this._uid}_${item.id}_nly_tree_accordion`;
            }
            mapNum += 1;
            mapArray(children);
            return item;
          }
        });
      let mapItemArray = mapArray(val);
      return mapItemArray;
    },
    // 把嵌套数组转为普通数组
    transformOptions(val) {
      const customOptions = [];
      const transformOptionsLoop = (val, parentId) => {
        val.forEach(element => {
          const item = clonedeep(element);
          if (Object.prototype.hasOwnProperty.call(item, "children")) {
            delete item.children;
          }
          item.parentId = parentId;
          customOptions.push(item);
          const { children, id } = element;
          if (children) {
            transformOptionsLoop(children, id);
          }
        });
      };
      transformOptionsLoop(val);
      return customOptions;
    },
    // 初始化 localOptions
    initLocalOptions(val) {
      const localOptionIndex = [];
      const copyOptions = clonedeep(val);
      const arrayOptions = this.transformOptions(copyOptions);
      val.forEach(item => {
        if (arrayOptions.filter(e => e.parentId === item.id).length > 0) {
          localOptionIndex.push(item.id);
        }
      });
      localOptionIndex.forEach(item => {
        const hasChildrenIdArray = this.findHasChildrenId(arrayOptions, item);
        hasChildrenIdArray.forEach(hasItemId => {
          const trueLength = arrayOptions.filter(
            item => item.parentId === hasItemId && item.value === true
          ).length;
          const allLength = arrayOptions.filter(
            item => item.parentId === hasItemId
          ).length;
          if (trueLength === allLength) {
            arrayOptions.map(cInItem => {
              if (cInItem.id === hasItemId) {
                cInItem.value = true;
              }
              return cInItem;
            });
          }
        });
      });
      localOptionIndex.forEach(item => {
        const hasChildrenIdArray = this.findHasChildrenId(arrayOptions, item);
        hasChildrenIdArray.forEach(hasItemId => {
          const trueLength = arrayOptions.filter(
            item => item.parentId === hasItemId && item.value === true
          ).length;
          const allLength = arrayOptions.filter(
            item => item.parentId === hasItemId
          ).length;
          if (trueLength !== allLength && trueLength >= 1) {
            arrayOptions.map(cInItem => {
              if (cInItem.id === hasItemId) {
                cInItem.indeterminate = true;
              }
              return cInItem;
            });
          }
        });
      });
      return arrayOptions;
    },
    // 修改全选状态
    // computedIndeterminate(val) {
    //   this.localOptionsIndex.forEach(item => {
    //     this.val.forEach(chItem => {
    //       // if (item.id===chItem)
    //     });
    //   });
    // },
    // 根据id找出第一层父级元素的id
    findAncestorsId(arr, arrId) {
      let ancestorsIdArray = [];
      const findAncestorsIdLoop = (a, aId) => {
        for (let i = 0; i < a.length; i++) {
          const item = a[i];
          if (item.id === aId && item.parentId === undefined) {
            ancestorsIdArray.push(item.id);
            break;
          }
          if (item.id === aId && item.parentId !== undefined) {
            findAncestorsIdLoop(a, item.parentId);
          }
        }
      };
      findAncestorsIdLoop(arr, arrId);
      if (ancestorsIdArray) {
        return ancestorsIdArray[0];
      }
      return undefined;
    },
    // 根据第一层父元素id找出所有的有children的元素id
    findHasChildrenId(arr, arrId) {
      const hasChildrenIdArray = [arrId];
      const findChildIdLoop = (a, aId) => {
        a.forEach((item, index) => {
          if (
            item.parentId === aId &&
            hasChildrenIdArray.indexOf(item.parentId) === -1
          ) {
            hasChildrenIdArray.push(item.parentId);
          }
          if (item.parentId === aId) {
            const aCopy = clonedeep(a);
            aCopy.splice(index, 1);
            findChildIdLoop(aCopy, item.id);
          }
        });
      };
      findChildIdLoop(arr, arrId);
      return hasChildrenIdArray;
    },
    // 把普通数组转为嵌套数组
    computedLocalOptions(val) {
      const localOptions = clonedeep(val);
      const buildTree = arr => {
        const temp = {};
        const tree = {};
        const arrayTree = [];
        arr.forEach(item => {
          temp[item.id] = item;
        });
        const tempKeys = [];
        localOptions.forEach(item => {
          tempKeys.push(item.id);
        });
        tempKeys.forEach(key => {
          const item = temp[key];
          const _itemPId = item.parentId;
          const parentItemByPid = temp[_itemPId];
          if (parentItemByPid) {
            if (!parentItemByPid.children) {
              parentItemByPid.children = [];
            }
            parentItemByPid.children.push(item);
          } else {
            tree[item.id] = item;
          }
        });
        this.localOptionsIndex.forEach(element => {
          arrayTree.push(tree[element]);
        });

        return arrayTree;
      };
      return buildTree(localOptions);
    },
    // 更新localOption重新渲染树
    treeValueChangeEvt(evtId) {
      this.localOptions.forEach((item, index) => {
        if (item.id === evtId) {
          if (item.indeterminate) {
            const z = clonedeep(item);
            z.indeterminate = false;
            z.value = false;
            this.$set(this.localOptions, index, z);
            // this.$set(this.localOptions[index], "value", false);
          }
        }
      });
    }
  },
  watch: {
    options: {
      handler(val) {
        this.localOptions = this.initLocalOptions(val);
      },
      deep: true
    }
  },
  render(h) {
    let $content = h();
    if (this.customOptions) {
      const contentArray = [
        {
          _type: "ul",
          _children: this.customOptions
        }
      ];
      $content = h(NlyRenderFunction, {
        props: {
          flat: true,
          contentToRender: contentArray
        }
      });
    }
    return $content;
  }
});
