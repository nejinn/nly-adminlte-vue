import { nlyPluginFactory } from "../../utils/plugins";
import { NlyTable } from "./table";
import { NlyTableLite } from "./table-lite";
import { NlyTableSimple } from "./table-simple";
import { NlyTbody } from "./tbody";
import { NlyThead } from "./thead";
import { NlyTfoot } from "./tfoot";
import { NlyTr } from "./tr";
import { NlyTd } from "./td";
import { NlyTh } from "./th";

const TableLitePlugin = nlyPluginFactory({
  components: {
    NlyTableLite
  }
});

const TableSimplePlugin = nlyPluginFactory({
  components: {
    NlyTableSimple,
    NlyTbody,
    NlyThead,
    NlyTfoot,
    NlyTr,
    NlyTd,
    NlyTh
  }
});

const TablePlugin = nlyPluginFactory({
  components: {
    NlyTable
  },
  plugins: {
    TableLitePlugin,
    TableSimplePlugin
  }
});

export {
  // Plugins
  TablePlugin,
  TableLitePlugin,
  TableSimplePlugin,
  // Table components
  NlyTable,
  NlyTableLite,
  NlyTableSimple,
  // Helper components
  NlyTbody,
  NlyThead,
  NlyTfoot,
  NlyTr,
  NlyTd,
  NlyTh
};
