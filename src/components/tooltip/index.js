import { NlyTooltip } from "./tooltip";
import { nlyTooltipPlugin } from "../../directives/tooltip";
import { nlyPluginFactory } from "../../utils/plugins";

const tooltipPlugin = nlyPluginFactory({
  components: { NlyTooltip },
  plugins: { nlyTooltipPlugin }
});

export { tooltipPlugin, NlyTooltip };
