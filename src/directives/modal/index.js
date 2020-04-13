import { YNlyModal } from "./modal";
import { nlyPluginFactory } from "../../utils/plugins";

const yNlyModalPlugin = nlyPluginFactory({
  directives: { YNlyModal }
});

export { yNlyModalPlugin, YNlyModal };
