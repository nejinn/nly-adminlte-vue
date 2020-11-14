import { nlyPluginFactory } from "../../utils/plugins";
import { NlyBootstrapPagination } from "./bootstrap-pagination";

const BootstrapPaginationPlugin = nlyPluginFactory({
  components: {
    NlyBootstrapPagination,
    NlyBPagination: NlyBootstrapPagination
  }
});

export { BootstrapPaginationPlugin, NlyBootstrapPagination };
