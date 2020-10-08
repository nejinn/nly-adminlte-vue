import NlyDateRangePicker from "./DateRangePicker.vue";
import { nlyPluginFactory } from "../../utils/plugins";

const DateRangePickerPlugin = nlyPluginFactory({
  components: {
    NlyDateRangePicker
  }
});

export { DateRangePickerPlugin, NlyDateRangePicker };
