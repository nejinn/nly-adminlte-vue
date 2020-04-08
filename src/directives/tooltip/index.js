import { NlyTooltip } from "./tooltip";
import { nlyPluginFactory } from "../../utils/plugins";

const nlyTooltipPlugin = nlyPluginFactory({
  directives: { NlyTooltip }
});

export { nlyTooltipPlugin, NlyTooltip };
