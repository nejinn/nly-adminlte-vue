import { VNlyPopover } from "./popover";
import { nlyPluginFactory } from "../../utils/plugins";

const VNlyPopoverPlugin = nlyPluginFactory({
  directives: { VNlyPopover }
});

export { VNlyPopoverPlugin, VNlyPopover };
