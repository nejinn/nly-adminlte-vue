import { nlyPluginFactory } from "../../utils/plugins";
import { NlyProgress } from "./progress";
import { NlyProgressBar } from "./progress-bar";

const progressPlugin = nlyPluginFactory({
  components: {
    NlyProgress,
    NlyProgressBar
  }
});

export { progressPlugin, NlyProgress, NlyProgressBar };
