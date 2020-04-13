import { NlyTooltip } from "./tooltip";
import { yNlyTooltipPlugin } from "../../directives/tooltip";
import { nlyPluginFactory } from "../../utils/plugins";

const tooltipPlugin = nlyPluginFactory({
  components: { NlyTooltip },
  plugins: { yNlyTooltipPlugin }
});

export { tooltipPlugin, NlyTooltip };
