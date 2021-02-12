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
    target: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
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
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  computed: {
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
        label: this.label,
        labelHtml: this.labelHtml,
        value: this.value,
        showCheck: this.showCheck,
        id: this.id,
        editor: this.editor,
        editorVariant: this.editorVariant,
        dbEditor: this.dbEditor,
        dbEditorVariant: this.dbEditorVariant,
        showDelete: this.showDelete,
        deleteVariant: this.deleteVariant,
        asyn: this.asyn,
        asynVariant: this.asynVariant,
        loadingVariant: this.loadingVariant,
        add: this.add,
        addVariant: this.addVariant,
        subInputEditorButtonText: this.subInputEditorButtonText,
        subEditorButtonText: this.subEditorButtonText,
        editorButtonText: this.editorButtonText,
        deleteButtonText: this.deleteButtonText,
        asynButtonText: this.asynButtonText,
        addButtonText: this.addButtonText,
        indeterminate: this.indeterminate
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
        staticClass: "mt-0 mb-0 nly-tree-collapse"
      },
      this.$slots.default
    );
    const treeArray = h(NlyTreeItem, {
      class: "nly-tree-item-toggle",
      props: this.customTreeItemProps,
      attrs: {
        "aria-label": "nly tree navigation",
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
        staticClass: "list-unstyled nly-tree-item-tree",
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
