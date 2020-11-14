import { nlyPluginFactory } from "../../utils/plugins";
import { NlyRenderFunction } from "./render-function";

const RenderFunctionPlugin = nlyPluginFactory({
  components: {
    NlyRenderFunction
  }
});

export { RenderFunctionPlugin, NlyRenderFunction };
