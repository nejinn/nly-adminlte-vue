import { nlyPluginFactory } from "../../utils/plugins";
import { NlySpinner } from "./spinner";

const SpinnerPlugin = nlyPluginFactory({
  components: {
    NlySpinner
  }
});

export { SpinnerPlugin, NlySpinner };
