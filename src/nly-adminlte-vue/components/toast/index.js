import { NLYAToastPlugin } from "./plugin/nlya-toast";
import { NlyToast } from "./toast";
import { NlyToaster } from "./toaster";
import { nlyInstallFactory } from "../../utils/plugins";

const toastPlugin = nlyInstallFactory({
  components: { NlyToast, NlyToaster },
  plugins: { NLYAToastPlugin }
});

export { toastPlugin, NlyToast, NlyToaster };
