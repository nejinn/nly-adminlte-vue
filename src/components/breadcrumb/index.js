import { nlyPluginFactory } from "../../utils/plugins";
import { NlyBreadcrumbItem } from "./breadcrumb-item";
import { NlyBreadcrumb } from "./breadcrumb";

const breadcrumbPlugin = nlyPluginFactory({
  components: {
    NlyBreadcrumbItem,
    NlyBreadcrumb
  }
});

export { breadcrumbPlugin, NlyBreadcrumbItem, NlyBreadcrumb };
