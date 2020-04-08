import Vue from "../../utils/vue";
import { NlyBreadcrumbItem } from "./breadcrumb-item";

const name = "NlyBreadcrumb";

export const NlyBreadcrumb = Vue.extend({
  name: name,
  props: {
    item: {
      type: Array
    },
    breadcrumbClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        item: this.item,
        breadcrumbClass: this.breadcrumbClass
      };
    }
  },
  render(h) {
    const itemVnodes = () => {
      const itemArray = [];
      if (this.customProps.item) {
        this.customProps.item.forEach(itemProps => {
          itemArray.push(
            h(NlyBreadcrumbItem, {
              props: itemProps
            })
          );
        });
      } else {
        itemArray.push(this.$slots.default);
      }

      return itemArray;
    };

    return h(
      "ol",
      {
        staticClass: "breadcrumb",
        class: [this.customProps.breadcrumbClass]
      },
      itemVnodes()
    );
  }
});
