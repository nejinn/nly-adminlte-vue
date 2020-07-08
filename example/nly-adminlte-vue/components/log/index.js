import { nlyPluginFactory } from "../../utils/plugins";
import { NlyLogLine } from "./log-line";
import { NlyLogLineTree } from "./log-line-tree";
import { NlyLogHeader } from "./log-header";
import { NlyLogTools } from "./log-tools";
import { NlyLogBody } from "./log-body";
import { NlyLog } from "./log";

const LogPlugin = nlyPluginFactory({
  components: {
    NlyLogLine,
    NlyLogLineTree,
    NlyLogHeader,
    NlyLogTools,
    NlyLogBody,
    NlyLog
  }
});

export {
  LogPlugin,
  NlyLogLine,
  NlyLogLineTree,
  NlyLogTools,
  NlyLogBody,
  NlyLog
};
