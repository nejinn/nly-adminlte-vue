import { NlyTabs } from "./tabs";
import { NlyTab } from "./tab";
import { nlyPluginFactory } from "../../utils/plugins";

const TabsPlugin = nlyPluginFactory({
  components: {
    NlyTabs,
    NlyTab
  }
});

export { TabsPlugin, NlyTabs, NlyTab };
