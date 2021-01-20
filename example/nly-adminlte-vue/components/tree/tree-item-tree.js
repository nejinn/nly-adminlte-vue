import Vue from "../../utils/vue";
import { NlyTreeItem } from "./tree-item";
import listenOnRootMixin from "../../mixins/listen-on-root";
import { NlyCollapse } from "../collapse/collapse";
import {
  EVENT_TOGGLE,
  EVENT_STATE,
  EVENT_STATE_SYNC
} from "../../directives/toggle/toggle";
import { getComponentConfig } from "../../utils/config";
import { NlyIcon } from "../icons";

const name = "NlyTreeItemTree";

export const NlyTreeItemTree = Vue.extend({
  name: name,
  mixins: [listenOnRootMixin],
  data() {
    return {
      toggleState: false
    };
  },
  props: {
    label: {
      type: String,
      default: "nly tree navigation"
    },
    target: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //icon
    icon: {
      type: String
    },
    // menu props
    accordion: {
      type: String,
      default: "nly-tree-accordion"
    },
    visible: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    iconVariant: {
      type: String,
      default: () => getComponentConfig(name, "iconVariant")
    },
    treeLabel: {
      type: String,
      default: undefined
    },
    treeLabelHtml: {
      type: String,
      default: undefined
    },
    treeValue: undefined,
    treeShowCheck: {
      type: Boolean,
      default: false
    },
    treeId: {
      type: [String, Number],
      default: undefined,
      required: true
    },
    treeEditor: {
      type: Boolean,
      default: false
    },
    treeEditorVariant: {
      type: String,
      default: undefined
    },
    treeDbEditor: {
      type: Boolean,
      default: false
    },
    treeDbEditorVariant: {
      type: String,
      default: undefined
    },
    treeDelete: {
      type: Boolean,
      default: false
    },
    treeDeleteVariant: {
      type: String,
      default: undefined
    },
    treeAsyn: {
      type: Boolean,
      default: false
    },
    treeAsynVariant: {
      type: String,
      default: undefined
    },
    treeLoadingVariant: {
      type: String,
      default: "secondary"
    },
    treeAdd: {
      type: Boolean,
      default: false
    },
    treeAddVariant: {
      type: String,
      default: "default"
    },
    treeSubInputEditorButtonText: {
      type: String,
      default: () => getComponentConfig(name, "subInputEditorButton")
    },
    treeSubEditorButtonText: {
      type: String,
      default: () => getComponentConfig(name, "subEditorButtonText")
    },
    treeEditorButtonText: {
      type: String,
      default: () => getComponentConfig(name, "editorButtonText")
    },
    treeDeleteButtonText: {
      type: String,
      default: () => getComponentConfig(name, "deleteButtonText")
    },
    treeAsynButtonText: {
      type: String,
      default: () => getComponentConfig(name, "asynButtonText")
    },
    treeAddButtonText: {
      type: String,
      default: () => getComponentConfig(name, "addButtonText")
    }
  },
  computed: {
    customLabel: function() {
      return this.label;
    },
    customTarget: function() {
      return this.target;
    },
    customMenuProps: function() {
      return {
        accordion: this.accordion,
        visible: this.visible,
        tag: "ul",
        appear: this.appear,
        collapseClass: this.menuClass
      };
    },
    customTreeItemProps() {
      return {
        label: this.treeLabel,
        labelHtml: this.treeLabelHtml,
        value: this.treeValue,
        showCheck: this.treeShowCheck,
        id: this.treeId,
        editor: this.treeEditor,
        editorVariant: this.treeEditorVariant,
        dbEditor: this.treeDbEditor,
        dbEditorVariant: this.treeDbEditorVariant,
        delete: this.treeDelete,
        deleteVariant: this.treeDeleteVariant,
        asyn: this.treeAsyn,
        asynVariant: this.treeAsynVariant,
        loadingVariant: this.treeLoadingVariant,
        add: this.treeAdd,
        addVariant: this.treeAddVariant,
        subInputEditorButtonText: this.treeSubInputEditorButtonText,
        subEditorButtonText: this.treeSubEditorButtonText,
        editorButtonText: this.treeEditorButtonText,
        deleteButtonText: this.treeDeleteButtonText,
        asynButtonText: this.treeAsynButtonText,
        addButtonText: this.treeAddButtonText
      };
    }
  },
  created() {
    // 监听root 事件，获取初始toggleState值
    this.listenOnRoot(EVENT_STATE, this.handleStateEvt);
    this.listenOnRoot(EVENT_STATE_SYNC, this.handleStateEvt);
  },
  methods: {
    onClick(evt) {
      this.$emit("click", evt);
      if (!evt.defaultPrevented) {
        this.$root.$emit(EVENT_TOGGLE, this.customTarget);
      }
    },
    handleStateEvt(id, state) {
      if (id === this.customTarget) {
        this.toggleState = state;
      }
    }
  },
  render(h) {
    const menuArray = h(
      NlyCollapse,
      {
        props: this.customMenuProps,
        attrs: {
          id: this.customTarget
        },
        style: {
          display: this.customMenuProps.visible ? "block" : "none"
        },
        staticClass: "mt-0 mb-0"
      },
      this.$slots.default
    );
    const treeArray = h(NlyTreeItem, {
      props: this.customTreeItemProps,
      attrs: {
        "aria-label": this.customLabel,
        "aria-controls": this.customTarget,
        "aria-expanded": this.toggleState ? "true" : "false",
        "data-target": `#${this.customTarget}`
      }
    });
    const icon = h(
      "li",
      {
        class: [
          "mr-1",
          "pr-2",
          "pl-1",
          "align-self-center",
          `text-${this.iconVariant}`
        ],

        on: {
          click: this.onClick
        }
      },
      [
        h(NlyIcon, {
          staticClass: "nly-tree-icon",
          props: { icon: "fas fa-angle-left" }
        })
      ]
    );
    return h(
      "li",
      {
        staticClass: "list-unstyled",
        class: [this.toggleState ? "nly-tree-open" : null]
      },
      [
        h("ul", { staticClass: "list-unstyled d-flex mb-0" }, [
          icon,
          treeArray
        ]),
        menuArray
      ]
    );
  }
});
