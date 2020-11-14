import { VNlyModal } from "./modal";
import { nlyPluginFactory } from "../../utils/plugins";

const VNlyModalPlugin = nlyPluginFactory({
  directives: { VNlyModal }
});

export { VNlyModalPlugin, VNlyModal };
