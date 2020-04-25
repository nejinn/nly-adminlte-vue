import { NlyTooltip } from "./tooltip";
import { VNlyTooltipPlugin } from "../../directives/tooltip";
import { nlyPluginFactory } from "../../utils/plugins";

const TooltipPlugin = nlyPluginFactory({
  components: { NlyTooltip },
  plugins: { VNlyTooltipPlugin }
});

export { TooltipPlugin, NlyTooltip };
