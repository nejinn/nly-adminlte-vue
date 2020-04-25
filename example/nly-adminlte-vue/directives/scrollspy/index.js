import { VNlyScrollspy } from "./scrollspy";
import { nlyPluginFactory } from "../../utils/plugins";

const VNlyScrollspyPlugin = nlyPluginFactory({
  directives: { VNlyScrollspy }
});

export { VNlyScrollspyPlugin, VNlyScrollspy };
