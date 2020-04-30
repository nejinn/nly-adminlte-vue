import { IconPlugin } from "./index";
import { nlyInstallFactory } from "../../utils/plugins";

const NAME = "NlyAdminlteVueIcons";

const install = nlyInstallFactory({
  plugins: {
    IconPlugin
  }
});

const NlyAdminlteVueIcons = {
  install,
  NAME
};

export { install, NAME, NlyAdminlteVueIcons };
