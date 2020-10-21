import { nlyPluginFactory } from "../../utils/plugins";
import { NlyFormDaterangepicker } from "./form-daterangepicker";
import { VNlyAppendToBody } from "./pulgin/append-to-body";
import { NlyCalendar } from "./pulgin/calendar";
import { NlyCalendarRangs } from "./pulgin/calendar-rangs";
import { NlyCalendarTime } from "./pulgin/calendar-time";
import { NlyDaterangePickerTransition } from "./pulgin/transition";

const FormDaterangepickerPlugin = nlyPluginFactory({
  components: {
    NlyFormDaterangepicker,
    NlyCalendar,
    NlyCalendarRangs,
    NlyCalendarTime,
    NlyDaterangePickerTransition
  },
  plugins: { VNlyAppendToBody }
});

export {
  FormDaterangepickerPlugin,
  NlyFormDaterangepicker,
  NlyCalendar,
  NlyCalendarRangs,
  NlyCalendarTime,
  NlyDaterangePickerTransition
};
