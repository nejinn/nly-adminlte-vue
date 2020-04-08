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

const tableLitePlugin = nlyPluginFactory({
  components: {
    NlyTableLite
  }
});

const tableSimplePlugin = nlyPluginFactory({
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

const tablePlugin = nlyPluginFactory({
  components: {
    NlyTable
  },
  plugins: {
    tableLitePlugin,
    tableSimplePlugin
  }
});

export {
  // Plugins
  tablePlugin,
  tableLitePlugin,
  tableSimplePlugin,
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
