import { NlyPopover } from "./popover";
import { VNlyPopoverPlugin } from "../../directives/popover";
import { nlyPluginFactory } from "../../utils/plugins";

const PopoverPlugin = nlyPluginFactory({
  components: { NlyPopover },
  plugins: { VNlyPopoverPlugin }
});

export { PopoverPlugin, NlyPopover };
