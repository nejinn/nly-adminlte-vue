import { nlyPluginFactory } from "../../utils/plugins";
import { NlyRow } from "./row";
import { NlyCol } from "./col";

const GridPlugin = nlyPluginFactory({
  components: {
    NlyRow,
    NlyCol
  }
});

export { GridPlugin, NlyRow, NlyCol };
