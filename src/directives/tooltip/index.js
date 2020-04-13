import { YNlyTooltip } from "./tooltip";
import { nlyPluginFactory } from "../../utils/plugins";

const yNlyTooltipPlugin = nlyPluginFactory({
  directives: { YNlyTooltip }
});

export { yNlyTooltipPlugin, YNlyTooltip };
