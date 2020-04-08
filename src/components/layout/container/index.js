import { nlyPluginFactory } from "../../../utils/plugins";
import { NlyContainer } from "./container";

const containerPlugin = nlyPluginFactory({
  components: {
    NlyContainer
  }
});

export { containerPlugin, NlyContainer };
