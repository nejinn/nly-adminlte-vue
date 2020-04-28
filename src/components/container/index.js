import { nlyPluginFactory } from "../../utils/plugins";
import { NlyContainer } from "./container";

const ContainerPlugin = nlyPluginFactory({
  components: {
    NlyContainer
  }
});

export { ContainerPlugin, NlyContainer };
