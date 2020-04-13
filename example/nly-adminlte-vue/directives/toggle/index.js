import { nlyPluginFactory } from "../../utils/plugins";
import { YNlyToggle } from "./toggle";

const toggleDirectivePlugin = nlyPluginFactory({
  directives: {
    YNlyToggle
  }
});

export { toggleDirectivePlugin, YNlyToggle };
