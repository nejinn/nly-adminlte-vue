import Vue from "../../utils/vue";
import {
  NlyTreeItem,
  TREE_ADD_EVENT,
  TREE_DELETE_EVENT,
  TREE_LABEL_CHANGE_EVENT,
  TREE_VALUE_CHANGE_EVENT,
  TREE_ASYN_ADD_LOADING,
  TREE_ASYN_ADD_EVENT
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
import { isObject, isNumber, isString } from "../../utils/inspect";

const name = "NlyTree";

export const NlyTree = Vue.extend({
  name: name,
  model: {
    prop: "value",
    event: "input"
  },
  mixins: [listenOnRootMixin, idMixin],
  data() {
    return {
      // 树数组
      localOptions: undefined,
      // 树顺序
      localOptionsIndex: [],
      // 最后添加的树
      lastAddNode: [],
      // 已删除的树
      deleteNode: [],
      // copyLocalOptions: undefined
      // 当前选中node， v-model
      localValue: undefined
    };
  },
  props: {
    // 初始选中的
    value: {
      type: Array,
      default: () => []
    },
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
    showDelete: {
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
    /**
     *  1. 把options转为普通数组赋值给
     */

    //把默认选中的node 赋值给localValue
    this.localValue = this.initDefaultCheckedNode(this.options);
    this.options.forEach(element => {
      this.localOptionsIndex.push(element.id);
    });
    this.localOptions = this.initLocalOptions(this.options);
    this.listenOnRoot(TREE_VALUE_CHANGE_EVENT, this.treeValueChangeEvt);
    this.listenOnRoot(TREE_LABEL_CHANGE_EVENT, this.treeLabelChangeEvt);
    this.listenOnRoot(TREE_DELETE_EVENT, this.treeDeleteEvt);
    this.listenOnRoot(TREE_ADD_EVENT, this.treeAddEvt);
    this.listenOnRoot(TREE_ASYN_ADD_EVENT, this.treeAsynAddEvt);
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
    // 获取初始选中节点
    initDefaultCheckedNode(val) {
      if (!val) {
        return [];
      }
      const copyOptions = clonedeep(val);
      const arrayOptions = this.transformOptions(copyOptions);
      const checkedId = [];
      if (this.value) {
        this.value.forEach(item => {
          if (isObject(item)) {
            const { id } = item;
            if (id !== undefined && checkedId.indexOf(id) === -1) {
              checkedId.push(id);
            }
          }
          if (isNumber(item) || isString(item)) {
            if (checkedId.indexOf(item) === -1) {
              checkedId.push(item);
            }
          }
        });
      }
      arrayOptions.map(item => {
        const { id } = item;
        if (checkedId.indexOf(id) !== -1) {
          item.value = true;
        }
        return item;
      });
      const checkedNode = arrayOptions.filter(e => e.value === true);
      return checkedNode;
    },
    // 遍历数组，生成渲染json
    mapItem(val) {
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
            item.showDelete = this.showDelete;
          } else if (!isBoolean(showDelete)) {
            throw new ReferenceError("showDelete must be Boolean");
          } else {
            item.showDelete = showDelete;
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

          if (children === undefined) {
            item._type = NlyTreeItem;
            return item;
          } else if (!isArray(children)) {
            throw new ReferenceError("children must be Array");
          } else {
            item._children = children;
            delete item.children;
            item._type = NlyTreeItemTree;
            item.appear = this.appear;
            item.target = `${this._uid}_${item.id}_nly_tree_target`;
            mapArray(children);
            return item;
          }
        });
      let mapItemArray = mapArray(val);
      return mapItemArray;
    },
    // 手风琴处理
    transformAccordion(val) {
      val.map(item => {
        if (this.accordion) {
          item.accordion = `${this._uid}_${item.parentId}_nly_tree_accordion`;
        } else {
          item.accordion = `${this._uid}_${item.id}_nly_tree_accordion`;
        }
      });
      return val;
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
      const copyOptions = clonedeep(val);
      const accordionArrayOptions = this.transformOptions(copyOptions);
      const arrayOptions = this.transformAccordion(accordionArrayOptions);
      arrayOptions.map(item => {
        const { id } = item;
        const trueItem = this.localValue.filter(e => e.id === id);
        if (trueItem.length > 0) {
          item.value = true;
        }
        return item;
      });
      const arrayTrueOptions = arrayOptions.filter(e => e.value === true);
      arrayTrueOptions.forEach(item => {
        this.setChildrenById(arrayOptions, item.id, item.value);
      });
      arrayOptions.forEach(item => {
        this.setParentById(arrayOptions, item.id);
      });
      this.localValue = arrayOptions.filter(e => e.value === true);
      // this.$emit("input", this.localValue);
      return arrayOptions;
    },
    // 根据 id获取所有子集 id
    getChildrenIdById(node, evtId) {
      const childrenId = [];
      const getChildrenIdByIdLoop = (loopNode, loopId) => {
        const loopArray = loopNode.filter(e => e.parentId === loopId);
        if (loopArray.length > 0) {
          loopArray.forEach(item => {
            const { id } = item;
            if (childrenId.indexOf(id) === -1) {
              childrenId.push(id);
            }
            const ItemId = id;
            getChildrenIdByIdLoop(loopNode, ItemId);
          });
        }
      };
      getChildrenIdByIdLoop(node, evtId);
      return childrenId;
    },
    // 根据 id 和 value 修改子级选择状态
    setChildrenById(node, evtId, evtValue) {
      const childrenId = this.getChildrenIdById(node, evtId);
      node.forEach((item, index) => {
        const { id } = item;
        if (childrenId.indexOf(id) !== -1) {
          item.value = evtValue;
          const childrenArray = node.filter(e => e.parentId === id);
          if (childrenArray.length > 0) {
            item.indeterminate = false;
          }
          this.$set(node, index, item);
          this.setCurrentCheckNode(id, evtValue);
        }
      });
      return node;
    },
    // 根据 id 和 value 修改父级状态
    setParentById(node, evtId) {
      const setParentByIdLoop = (loopNode, loopId) => {
        const loopArray = loopNode.filter(e => e.id === loopId);
        if (loopArray.length > 0) {
          loopArray.forEach(item => {
            const { parentId } = item;
            if (parentId) {
              loopNode.forEach((f, h) => {
                const { id } = f;
                if (id === parentId) {
                  const allItemNum = loopNode.filter(h => h.parentId === id)
                    .length;
                  const trueItemNum = loopNode.filter(
                    h => h.parentId === id && h.value === true
                  ).length;

                  if (trueItemNum === 0) {
                    f.value = false;
                    f.indeterminate = false;
                    const childrenIdArray = this.getChildrenIdById(
                      loopNode,
                      id
                    );
                    const childrenArray = loopNode.filter(
                      e =>
                        childrenIdArray.indexOf(e.id) !== -1 && e.value === true
                    );
                    if (childrenArray.length > 0) {
                      f.indeterminate = true;
                    }
                  } else {
                    if (allItemNum === trueItemNum) {
                      f.value = true;
                      f.indeterminate = false;
                    } else {
                      f.value = false;
                      f.indeterminate = true;
                    }
                  }
                  this.$set(loopNode, h, f);
                  this.setCurrentCheckNode(id, f.value);
                }
              });
              const ItemParentId = parentId;
              setParentByIdLoop(loopNode, ItemParentId);
            }
          });
        }
      };
      setParentByIdLoop(node, evtId);
    },
    // 选中状态变化时更新localOption重新渲染树
    treeValueChangeEvt(evtId, evtLabel, evtValue) {
      this.localOptions.forEach((item, index) => {
        const { id } = item;
        if (id === evtId) {
          item.value = evtValue;
          const loopChildrenArray = this.localOptions.filter(
            e => e.parentId === evtId
          );
          if (loopChildrenArray.length > 0) {
            item.indeterminate = false;
          }
          this.$set(this.localOptions, index, item);
        }
      });
      this.setCurrentCheckNode(evtId, evtValue);
      this.setChildrenById(this.localOptions, evtId, evtValue);
      this.setParentById(this.localOptions, evtId);
    },
    // 根据选择状态变化修改当前选中 node
    setCurrentCheckNode(evtId, evtValue) {
      if (this.localOptions) {
        const localValue = this.localValue.filter(e => e.id === evtId);
        if (evtValue && localValue.length === 0) {
          this.localValue.push(
            this.localOptions.filter(e => e.id === evtId)[0]
          );
        }
        if (!evtValue) {
          this.localValue.forEach((item, index) => {
            const { id } = item;
            if (id === evtId) {
              this.localValue.splice(index, 1);
            }
          });
        }
      }
    },
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
    // label编辑之后更新localOptions重新渲染树
    treeLabelChangeEvt(evtId, evtLabel) {
      this.localOptions.forEach((item, index) => {
        const { id } = item;
        if (id === evtId) {
          item.label = evtLabel;
          this.$set(this.localOptions, index, item);
        }
      });
      const localValue = this.localValue.filter(e => e.id === evtId);
      if (localValue.length > 0) {
        this.localValue.forEach((item, index) => {
          const { id } = item;
          if (id === evtId) {
            item.label = evtLabel;
            this.$set(this.localValue, index, item);
          }
        });
      }
    },
    // 删除节点更新localOptions重新渲染树
    treeDeleteEvt(evtId) {
      // // 获取父级id
      const parent = this.localOptions.filter(e => e.id === evtId)[0];
      // 处理localOptionsIndex
      this.deleteLocalOptionsIndex(evtId);
      const childrenIdArray = this.getChildrenIdById(this.localOptions, evtId);
      // 处理localOptions
      this.deleteLocalOptions(evtId, childrenIdArray);
      // 处理父级
      this.deleteSetParentById(this.localOptions, parent.parentId);
      // this.setCurrentCheckNode(parent.id, parent.value);
      // this.setChildrenById(this.localOptions, parent.id, parent.value);
      // this.setParentById(this.localOptions, parent.id);
      // 处理localValue
      this.deleteLocalValue(evtId, childrenIdArray);
    },
    // 删除节点处理localOptionsIndex
    deleteLocalOptionsIndex(evtId) {
      for (let i = this.localOptionsIndex.length - 1; i >= 0; i--) {
        if (this.localOptionsIndex[i] === evtId) {
          this.localOptionsIndex.splice(i, 1);
        }
      }
    },
    // 删除节点处理 localOptions
    deleteLocalOptions(evtId, childrenIdArray) {
      var that = this;
      for (let i = that.localOptions.length - 1; i >= 0; i--) {
        const { id } = that.localOptions[i];
        if (id === evtId) {
          that.localOptions.splice(i, 1);
        }
        if (childrenIdArray.indexOf(id) !== -1) {
          that.localOptions.splice(i, 1);
        }
      }
    },
    // 删除节点处理localValue
    deleteLocalValue(evtId, childrenIdArray) {
      for (let i = this.localValue.length - 1; i >= 0; i--) {
        const { id } = this.localValue[i];
        if (id === evtId) {
          this.localValue.splice(i, 1);
        }
        if (childrenIdArray.indexOf(id) !== -1) {
          this.localValue.splice(i, 1);
        }
      }
    },
    // 删除节点处理父级
    deleteSetParentById(node, parentId) {
      const deleteSetParentByIdLoop = (loopNode, loopId) => {
        const loopArray = loopNode.filter(e => e.id === loopId);
        if (loopArray.length > 0) {
          loopArray.forEach(item => {
            loopNode.forEach((f, h) => {
              if (item.id === f.id) {
                const allItemNum = loopNode.filter(g => g.parentId === f.id)
                  .length;
                const trueItemNum = loopNode.filter(
                  g => g.parentId === f.id && g.value === true
                ).length;
                if (allItemNum === 0) {
                  f.indeterminate = false;
                } else if (trueItemNum === 0) {
                  f.value = false;
                  f.indeterminate = false;
                  const childrenIdArray = this.getChildrenIdById(
                    loopNode,
                    f.id
                  );
                  const childrenArray = loopNode.filter(
                    e =>
                      childrenIdArray.indexOf(e.id) !== -1 && e.value === true
                  );
                  if (childrenArray.length > 0) {
                    f.indeterminate = true;
                  }
                } else {
                  if (allItemNum === trueItemNum) {
                    f.value = true;
                    f.indeterminate = false;
                  } else {
                    f.value = false;
                    f.indeterminate = true;
                  }
                }
                this.$set(loopNode, h, f);
                this.setCurrentCheckNode(f.id, f.value);
              }
            });
            const ItemParentId = item.parentId;
            deleteSetParentByIdLoop(loopNode, ItemParentId);
          });
        }
      };
      deleteSetParentByIdLoop(node, parentId);
    },
    // 添加节点触发事件
    treeAddEvt(evtId) {
      this.$emit("addNode", evtId);
    },
    // 异步添加触发事件
    treeAsynAddEvt(evtId) {
      this.$emit("asynAddNode", evtId);
    },
    // 添加节点校验数据
    validAddNode(data) {
      if (isArray(data)) {
        data.forEach(item => {
          if (!item.id) {
            throw new ReferenceError("id is need");
          }
        });
      } else if (isObject(data)) {
        if (!data.id) {
          throw new ReferenceError("id is need");
        }
      } else {
        throw new ReferenceError("data must be Array or Object");
      }
    },
    // 添加子集节点
    addNode(id, data) {
      this.validAddNode(data);
      if (isArray(data)) {
        data.forEach(item => {
          item.parentId = id;
          if (this.accordion) {
            item.accordion = `${this._uid}_${item.parentId}_nly_tree_accordion`;
          } else {
            item.accordion = `${this._uid}_${item.id}_nly_tree_accordion`;
          }
          const filterArray = this.localOptions.filter(e => e.id === item.id);
          if (filterArray.length > 0) {
            this.localOptions.forEach((e, i) => {
              if (e.id === item.id) {
                this.$set(this.localOptions, i, item);
              }
            });
          } else {
            this.$set(this.localOptions, this.localOptions.length, item);
          }
        });
      } else if (isObject(data)) {
        data.parentId = id;
        if (this.accordion) {
          data.accordion = `${this._uid}_${data.parentId}_nly_tree_accordion`;
        } else {
          data.accordion = `${this._uid}_${data.id}_nly_tree_accordion`;
        }
        const filterArray = this.localOptions.filter(e => e.id === data.id);
        if (filterArray.length > 0) {
          this.localOptions.forEach((e, i) => {
            if (e.id === data.id) {
              this.$set(this.localOptions, i, data);
            }
          });
        } else {
          this.$set(this.localOptions, this.localOptions.length, data);
        }
      }
    },
    // 添加1级节点
    addAncestorsNode(data) {
      this.validAddNode(data);
      if (isArray(data)) {
        data.forEach(item => {
          item.parentId = undefined;
          if (this.accordion) {
            item.accordion = `${this._uid}_${item.parentId}_nly_tree_accordion`;
          } else {
            item.accordion = `${this._uid}_${item.id}_nly_tree_accordion`;
          }
          const filterArray = this.localOptions.filter(e => e.id === item.id);
          if (filterArray.length > 0) {
            this.localOptions.forEach((e, i) => {
              if (e.id === item.id) {
                this.$set(this.localOptions, i, item);
              }
            });
          } else {
            this.$set(
              this.localOptionsIndex,
              this.localOptionsIndex.length,
              item.id
            );
            this.$set(this.localOptions, this.localOptions.length, item);
          }
        });
      } else if (isObject(data)) {
        data.parentId = undefined;
        if (this.accordion) {
          data.accordion = `${this._uid}_${data.parentId}_nly_tree_accordion`;
        } else {
          data.accordion = `${this._uid}_${data.id}_nly_tree_accordion`;
        }
        const filterArray = this.localOptions.filter(e => e.id === data.id);
        if (filterArray.length > 0) {
          this.localOptions.forEach((e, i) => {
            if (e.id === data.id) {
              this.$set(this.localOptions, i, data);
            }
          });
        } else {
          this.$set(
            this.localOptionsIndex,
            this.localOptionsIndex.length,
            data.id
          );
          this.$set(this.localOptions, this.localOptions.length, data);
        }
      }
    },
    //异步添加节点事件
    asynAddNode(evtId, data) {
      if (isArray(data)) {
        data.map(item => {
          if (!item.id) {
            this.emitLoading(evtId, false);
            throw new ReferenceError("id is need");
          }
        });
      } else if (isObject(data)) {
        if (!data.id) {
          this.emitLoading(evtId, false);
          throw new ReferenceError("id is need");
        }
      } else {
        this.emitLoading(evtId, false);
        throw new ReferenceError("data must be Array or Object");
      }
      if (isArray(data)) {
        data.forEach(item => {
          item.parentId = evtId;
          if (this.accordion) {
            item.accordion = `${this._uid}_${item.parentId}_nly_tree_accordion`;
          } else {
            item.accordion = `${this._uid}_${item.id}_nly_tree_accordion`;
          }
          const filterArray = this.localOptions.filter(e => e.id === item.id);
          if (filterArray.length > 0) {
            this.localOptions.forEach((e, i) => {
              if (e.id === item.id) {
                this.$set(this.localOptions, i, item);
              }
            });
          } else {
            this.$set(this.localOptions, this.localOptions.length, item);
          }
        });
      } else if (isObject(data)) {
        data.parentId = evtId;
        if (this.accordion) {
          data.accordion = `${this._uid}_${data.parentId}_nly_tree_accordion`;
        } else {
          data.accordion = `${this._uid}_${data.id}_nly_tree_accordion`;
        }
        const filterArray = this.localOptions.filter(e => e.id === data.id);
        if (filterArray.length > 0) {
          this.localOptions.forEach((e, i) => {
            if (e.id === data.id) {
              this.$set(this.localOptions, i, data);
            }
          });
        } else {
          this.$set(this.localOptions, this.localOptions.length, data);
        }
      }
      this.emitLoading(evtId, false);
    },
    // 通知子组件关掉异步loading
    emitLoading(evtId, evtLoading) {
      this.emitOnRoot(TREE_ASYN_ADD_LOADING, evtId, evtLoading);
    }
  },
  watch: {
    options: {
      handler(val) {
        this.localOptions = this.initLocalOptions(val);
      },
      deep: true
    },
    localValue: {
      handler(val) {
        const copyVal = clonedeep(val);
        copyVal.map(item => {
          if (Object.prototype.hasOwnProperty.call(item, "parentId")) {
            delete item.parentId;
          }
          if (Object.prototype.hasOwnProperty.call(item, "indeterminate")) {
            delete item.indeterminate;
          }
        });
        this.$emit("input", copyVal);
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
