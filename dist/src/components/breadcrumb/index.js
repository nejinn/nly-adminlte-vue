import { nlyPluginFactory } from "../../utils/plugins";
import { NlyBreadcrumbItem } from "./breadcrumb-item";
import { NlyBreadcrumb } from "./breadcrumb";

const BreadcrumbPlugin = nlyPluginFactory({
  components: {
    NlyBreadcrumbItem,
    NlyBreadcrumb
  }
});

export { BreadcrumbPlugin, NlyBreadcrumbItem, NlyBreadcrumb };
