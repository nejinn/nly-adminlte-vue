import Vue from "../../utils/vue";
import {
  NlyTreeItem,
  TREE_ADD_EVENT,
  TREE_DELETE_EVENT,
  TREE_LABEL_CHANGE_EVENT,
  TREE_VALUE_CHECKED_EVENT,
  TREE_PARENT_VALUE_CHECKED_EVENT,
  TREE_CHECKED_INDETERMINATE_VALUE_CHANGE_EVENT
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
      // 当前选中树
      currentNode: [],
      // 最后添加的树
      lastAddNode: [],
      // 已删除的树
      deleteNode: [],
      copyLocalOptions: undefined
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
    this.localOptions = this.options;
    this.copyLocalOptions = clonedeep(this.localOptions);
    this.listenOnRoot(TREE_ADD_EVENT, this.treeAddEvt);
    this.listenOnRoot(TREE_DELETE_EVENT, this.treeDeleteEvt);
    this.listenOnRoot(TREE_LABEL_CHANGE_EVENT, this.treeLabelChangeEvt);
    this.listenOnRoot(TREE_VALUE_CHECKED_EVENT, this.treeValueChangeEvt);
  },
  computed: {
    customOptions() {
      if (this.copyLocalOptions) {
        const z = this.mapItem(this.copyLocalOptions);
        return z;
      } else {
        return [];
      }
    }
  },
  methods: {
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
            item.indeterminate = indeterminate;
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
    treeAddEvt() {},
    treeDeleteEvt() {},
    treeLabelChangeEvt() {},
    treeValueChangeEvt(evtId, evtLabel, evtValue) {
      this.changeCurrentNode(this.copyLocalOptions, evtId, evtLabel, evtValue);
      this.changeAllChildrenNodes(this.copyLocalOptions, evtId, evtValue);
    },
    changeCurrentNode(val, evtId, evtLabel, evtValue) {
      val.forEach(item => {
        const { id, _children } = item;
        if (id === evtId) {
          item.value = evtValue;
          if (evtValue === false) {
            let isFalseIndex = -1;
            this.currentNode.forEach((element, index) => {
              if (element.id == evtId) {
                isFalseIndex = index;
              }
            });
            if (isFalseIndex !== -1) {
              this.currentNode.splice(isFalseIndex, 1);
            }
          } else {
            let isTrueIndex = -1;
            if (evtValue === true) {
              this.currentNode.forEach((element, index) => {
                if (element.id == evtId) {
                  isTrueIndex = index;
                }
              });
            }

            if (isTrueIndex === -1) {
              this.currentNode.push({
                id: evtId,
                label: evtLabel,
                value: evtValue
              });
            }
          }
        } else {
          if (isArray(_children)) {
            this.changeCurrentNode(_children, evtId, evtLabel, evtValue);
          }
        }
      });
    },
    changeAllChildrenNodes(val, evtId, evtValue) {
      const mapChangeAllChildrenNodes = eles =>
        eles.map(ele => {
          ele.value = evtValue;
          this.emitOnRoot(TREE_PARENT_VALUE_CHECKED_EVENT, ele.id, evtValue);
          const { _children } = ele;
          if (isArray(_children)) {
            mapChangeAllChildrenNodes(_children);
            return ele;
          } else {
            return ele;
          }
        });

      const mapIndeterminateChangeNodes = es => {
        es.map(e => {
          const { id, indeterminate } = e;
          if (evtId === id && indeterminate === true) {
            console.log(222, id, evtId, indeterminate);
            e.value = false;
            e.indeterminate = false;
            evtValue = false;
            const evtIndeterminate = false;
            this.emitOnRoot(
              TREE_CHECKED_INDETERMINATE_VALUE_CHANGE_EVENT,
              id,
              evtValue,
              evtIndeterminate
            );
            return e;
          } else {
            return e;
          }
        });
      };

      const mapAllChildrenNodes = val1 =>
        val1.map(item => {
          const { id, _children } = item;
          if (id === evtId) {
            if (isArray(_children)) {
              mapChangeAllChildrenNodes(_children);
              return item;
            } else {
              if (isArray(_children)) {
                mapChangeAllChildrenNodes(_children);
                return item;
              } else {
                return item;
              }
            }
          } else {
            if (isArray(_children)) {
              mapAllChildrenNodes(_children);
              return item;
            } else {
              return item;
            }
          }
        });
      mapIndeterminateChangeNodes(val);
      console.log("1val", val);
      mapAllChildrenNodes(val);
    }
  },
  render(h) {
    let $content = h();
    if (this.copyLocalOptions) {
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
