import Vue from "../../utils/vue";
import { NlyFormCheckbox } from "../form-checkbox/form-checkbox";
import idMixin from "../../mixins/id";
import { hasNormalizedSlot, normalizeSlot } from "../../utils/normalize-slot";
import { htmlOrText } from "../../utils/html";
import { NlyButton } from "../button/button";
import { NlyInputGroup } from "../input-group/input-group";
import { NlyInputGroupAppend } from "../input-group/input-group-append";
import { NlyFormInput } from "../form-input/form-input";
import { NlySpinner } from "../spinner";
import { getComponentConfig } from "../../utils/config";
import listenOnRootMixin from "../../mixins/listen-on-root";
import { isArray, isObject } from "../../utils/inspect";

const name = "NlyTreeItem";

const TREE_DELETE_EVENT = "nlya::tree::delete";
const TREE_LABEL_CHANGE_EVENT = "nlya::tree::label::change";
const TREE_VALUE_CHECKED_EVENT = "nlya::tree::value::checked";
const TREE_ADD_EVENT = "nlya::tree::add";

export const NlyTreeItem = Vue.extend({
  name: name,
  mixins: [idMixin, listenOnRootMixin],
  data() {
    return {
      // check box value
      localValue: false,
      // id value
      loacalId: undefined,
      // 允许编辑状态
      localEditor: false,
      // label 标签值
      localLabel: undefined,
      // 新增的节点
      localAddNode: undefined,
      loading: false
    };
  },
  props: {
    label: {
      type: String,
      default: undefined
    },
    labelHtml: {
      type: String,
      default: undefined
    },
    value: undefined,
    showCheck: {
      type: Boolean,
      default: false
    },
    id: {
      type: [String, Number],
      default: undefined,
      required: true
    },
    editor: {
      type: Boolean,
      default: false
    },
    editorVariant: {
      type: String,
      default: undefined
    },
    dbEditor: {
      type: Boolean,
      default: false
    },
    dbEditorVariant: {
      type: String,
      default: undefined
    },
    delete: {
      type: Boolean,
      default: false
    },
    deleteVariant: {
      type: String,
      default: undefined
    },
    asyn: {
      type: Boolean,
      default: false
    },
    asynVariant: {
      type: String,
      default: undefined
    },
    loadingVariant: {
      type: String,
      default: "secondary"
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
    }
  },
  mounted() {
    this.localValue = this.value;
    this.loacalId = this.id;
    this.localLabel = this.label;
  },
  methods: {
    checkChange(val) {
      this.localValue = val;
      this.$emit("valueChange", this.id, this.localLabel, this.localValue);
      // 通知父组件，当前节点的选中状态
      this.emitValueChecked();
    },
    subInputEditorLabel() {
      // 非双击可编辑状态和 允许编辑状态 阻止事件
      if (!this.localEditor || !this.dbEditor) {
        return;
      }
      this.localEditor = false;
      this.emitLabelChange();
      this.$emit("labelChange", this.id, this.localLabel, this.localValue);
    },
    dbClickEditor() {
      // 非双击可编辑状态，不允许点击
      if (!this.dbEditor) {
        return;
      }
      this.localEditor = true;
    },
    inputEditorChange(val) {
      // 非允许编辑状态不允许触发input change 事件
      if (!this.localEditor) {
        return;
      }
      this.localLabel = val;
      this.$emit("inputChange", this.id, this.localLabel, this.localValue);
    },
    editorButtonClick() {
      // 非 editor  状态不允许触发编辑按钮事件
      if (!this.editor) {
        return;
      }
      if (this.localEditor) {
        this.emitLabelChange();
        this.$emit("labelChange", this.id, this.localLabel, this.localValue);
      }
      this.localEditor = !this.localEditor;
    },
    deleteButtonClick() {
      if (!this.delete) {
        return;
      }
      // 通知父组件删除当前节点
      this.emitDeleteTree();
    },
    asynButtonClick() {
      if (!this.asyn) {
        return;
      }
      this.loading = true;
      this.$emit("asynChange");
    },
    asynAddNode(data) {
      if (isArray(data)) {
        data.map(item => {
          const { id } = item;
          if (!id) {
            this.loading = false;
            throw new ReferenceError("id is need");
          }
        });
      } else if (isObject(data)) {
        const { id } = data;
        if (!id) {
          this.loading = false;
          throw new ReferenceError("id is need");
        }
      } else {
        this.loading = false;
        throw new ReferenceError("data must be Array or Object");
      }
      this.localAddNode = data;
      // 通知父组件添加节点
      this.emitAddNode();
      this.loading = false;
    },
    emitDeleteTree() {
      this.emitOnRoot(
        TREE_DELETE_EVENT,
        this.id,
        this.localLabel,
        this.localValue
      );
    },
    emitLabelChange() {
      this.emitOnRoot(
        TREE_LABEL_CHANGE_EVENT,
        this.id,
        this.localLabel,
        this.localValue
      );
    },
    emitValueChecked() {
      this.emitOnRoot(
        TREE_VALUE_CHECKED_EVENT,
        this.id,
        this.localLabel,
        this.localValue
      );
    },
    emitAddNode() {
      this.emitOnRoot(TREE_ADD_EVENT, this.id, this.localAddNode);
    }
  },
  render(h) {
    // let = $container = h();
    let $checkobx = h();
    if (this.showCheck) {
      $checkobx = h(NlyFormCheckbox, {
        class: "align-self-center mr-1",
        props: {
          checked: this.localValue,
          id: this.safeId("nly_tree_item_id")
        },
        on: {
          change: val => this.checkChange(val)
        }
      });
    }

    let $label = h();
    let $labelNoDbClick = h();
    let $labelDbClick = h();
    const hasLabelSlot = hasNormalizedSlot(
      "label",
      this.$scopedSlots,
      this.$slots
    );
    if (hasLabelSlot || this.localLabel || this.labelHtml) {
      $labelNoDbClick = hasLabelSlot
        ? h(
            "label",
            {
              staticClass:
                "mr-2 ml-0 mt-0 mb-0 font-weight-normal align-self-center"
            },
            [normalizeSlot("label", {}, this.$scopedSlots, this.$slots)]
          )
        : h("label", {
            staticClass:
              "mr-2 ml-0 mt-0 mb-0 font-weight-normal align-self-center",
            domProps: htmlOrText(this.labelHtml, this.localLabel)
          });
      $labelDbClick = hasLabelSlot
        ? h(
            "label",
            {
              staticClass:
                "mr-2 ml-0 mt-0 mb-0 font-weight-normal align-self-center"
            },
            [normalizeSlot("label", {}, this.$scopedSlots, this.$slots)]
          )
        : this.localLabel
        ? h(
            "label",
            {
              staticClass:
                "mr-2 ml-0 mt-0 mb-0 font-weight-normal align-self-center",
              on: {
                dblclick: this.dbClickEditor
              }
            },
            this.localLabel
          )
        : h("label", {
            staticClass:
              "mr-2 ml-0 mt-0 mb-0 font-weight-normal align-self-center",
            domProps: htmlOrText(this.labelHtml, this.localLabel)
          });

      // h("label", { staticClass: "m-0 font-weight-normal" }, [normalizeSlot("label", {}, this.$scopedSlots, this.$slots)]
      // h("label", { staticClass: "m-0 font-weight-normal", domProps: htmlOrText(this.labelHtml, this.label) })
    }

    if (this.dbEditor) {
      if (this.localEditor) {
        $label = h();
      } else {
        $label = $labelDbClick;
      }
    } else {
      if (this.localEditor) {
        $label = h();
      } else {
        $label = $labelNoDbClick;
      }
    }

    let $editorInput = h();
    if (this.localEditor) {
      $editorInput = h(
        NlyInputGroup,
        {
          staticClass: "w-auto mr-2",
          props: {
            size: "sm"
          }
        },
        [
          h(NlyFormInput, {
            props: {
              value: this.localLabel
            },
            on: {
              change: val => this.inputEditorChange(val)
            }
          }),
          this.dbEditor
            ? h(NlyInputGroupAppend, [
                h(
                  NlyButton,
                  {
                    props: {
                      variant: this.dbEditorVariant
                        ? this.dbEditorVariant
                        : "default"
                    },
                    on: {
                      click: this.subInputEditorLabel
                    }
                  },
                  this.subInputEditorButtonText
                )
              ])
            : h()
        ]
      );
    }

    let $editorButton = h();
    if (this.editor && !this.dbEditor && this.localLabel) {
      $editorButton = h(
        NlyButton,
        {
          class: "mr-2",
          props: {
            size: "sm",
            variant: this.editorVariant ? this.editorVariant : "default"
          },
          on: { click: this.editorButtonClick }
        },
        this.localEditor ? this.subEditorButtonText : this.editorButtonText
      );
    }
    let $deleteButton = h();
    if (this.delete) {
      $deleteButton = h(
        NlyButton,
        {
          props: {
            size: "sm",
            variant: this.deleteVariant ? this.deleteVariant : "default"
          },
          on: { click: this.deleteButtonClick }
        },
        this.deleteButtonText
      );
    }
    let $asynButton = h();
    if (this.asyn) {
      $asynButton = h(
        NlyButton,
        {
          class: "mr-2",
          props: {
            size: "sm",
            variant: this.asynVariant ? this.asynVariant : "default"
          },
          on: { click: this.asynButtonClick }
        },
        this.loading
          ? [
              h(NlySpinner, {
                props: {
                  sm: true,
                  label: "asynloading",
                  variant: this.loadingVariant
                }
              })
            ]
          : [this.asynButtonText]
      );
    }
    return h(
      "li",
      {
        staticClass: "h-auto mt-1 mb-1",
        style: {
          display: "flex"
        }
      },
      [
        $checkobx,
        $label,
        $editorInput,
        $editorButton,
        $deleteButton,
        $asynButton
      ]
    );
  }
});
