import { IconsPlugin } from "./index";
import { nlyInstallFactory } from "../../utils/plugins";

const NAME = "NlyAdminlteVueIcons";

const install = nlyInstallFactory({
  plugins: {
    IconsPlugin
  }
});

const NlyAdminlteVueIcons = {
  install,
  NAME
};

export { install, NAME, NlyAdminlteVueIcons };
