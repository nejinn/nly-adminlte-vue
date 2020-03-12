import { nlyPluginFactory } from "../../utils/plugins";
import { NlyProgress } from "./progress";
import { NlyProgressBar } from "./progress-bar";
import { NlyProgressDescription } from "./progress-description";

const progressPlugin = nlyPluginFactory({
  components: {
    NlyProgress,
    NlyProgressBar,
    NlyProgressDescription
  }
});

export { progressPlugin, NlyProgress, NlyProgressBar, NlyProgressDescription };
