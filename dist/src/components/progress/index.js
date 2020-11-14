import { nlyPluginFactory } from "../../utils/plugins";
import { NlyProgress } from "./progress";
import { NlyProgressBar } from "./progress-bar";
import { NlyProgressDescription } from "./progress-description";

const ProgressPlugin = nlyPluginFactory({
  components: {
    NlyProgress,
    NlyProgressBar,
    NlyProgressDescription
  }
});

export { ProgressPlugin, NlyProgress, NlyProgressBar, NlyProgressDescription };
