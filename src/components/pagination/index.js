import { nlyPluginFactory } from "../../utils/plugins";
import { NlyPagination } from "./pagination";

const PaginationPlugin = nlyPluginFactory({
  components: {
    NlyPagination
  }
});
export { PaginationPlugin, NlyPagination };
