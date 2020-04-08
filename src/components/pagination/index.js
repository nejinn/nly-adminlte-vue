import { nlyPluginFactory } from "../../utils/plugins";
import { NlyPagination } from "./pagination";

const paginationPlugin = nlyPluginFactory({
  components: {
    NlyPagination
  }
});
export { paginationPlugin, NlyPagination };
