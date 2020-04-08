import { nlyPluginFactory } from "../../utils/plugins";
import { NlyRenderFunction } from "./render-function";

const renderFunctionPlugin = nlyPluginFactory({
  components: {
    NlyRenderFunction
  }
});

export { renderFunctionPlugin, NlyRenderFunction };
