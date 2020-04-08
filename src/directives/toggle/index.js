import { nlyPluginFactory } from "../../utils/plugins";
import { NlyToggle } from "./toggle";

const toggleDirectivePlugin = nlyPluginFactory({
  directives: {
    NlyToggle
  }
});

export { toggleDirectivePlugin, NlyToggle };
