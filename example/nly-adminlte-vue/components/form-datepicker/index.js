import { nlyPluginFactory } from "../../utils/plugins";
import { NlyFormDatepicker } from "./form-datepicker";
import { VNlyAppendToBody } from "./pulgin/append-to-body";
import { NlyCalendar } from "./pulgin/calendar";
import { NlyCalendarRangs } from "./pulgin/calendar-rangs";
import { NlyCalendarTime } from "./pulgin/calendar-time";
import { NlyDaterangePickerTransition } from "./pulgin/transition";

const FormDatepickerPlugin = nlyPluginFactory({
  components: {
    NlyFormDatepicker,
    NlyCalendar,
    NlyCalendarRangs,
    NlyCalendarTime,
    NlyDaterangePickerTransition
  },
  plugins: { VNlyAppendToBody }
});

export {
  FormDatepickerPlugin,
  NlyFormDatepicker,
  NlyCalendar,
  NlyCalendarRangs,
  NlyCalendarTime,
  NlyDaterangePickerTransition
};
