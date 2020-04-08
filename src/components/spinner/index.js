import { nlyPluginFactory } from "../../utils/plugins";
import { NlySpinner } from "./spinner";

const spinnerPlugin = nlyPluginFactory({
  components: {
    NlySpinner
  }
});

export { spinnerPlugin, NlySpinner };
