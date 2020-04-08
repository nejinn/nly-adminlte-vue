import { nlyPluginFactory } from "../../../utils/plugins";
import { NlyRow } from "./row";
import { NlyCol } from "./col";

const gridPlugin = nlyPluginFactory({
  components: {
    NlyRow,
    NlyCol
  }
});

export { gridPlugin, NlyRow, NlyCol };
