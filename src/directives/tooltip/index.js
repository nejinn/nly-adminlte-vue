import { VNlyTooltip } from "./tooltip";
import { nlyPluginFactory } from "../../utils/plugins";

const VNlyTooltipPlugin = nlyPluginFactory({
  directives: { VNlyTooltip }
});

export { VNlyTooltipPlugin, VNlyTooltip };
