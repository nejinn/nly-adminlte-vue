import { nlyPluginFactory } from "../../utils/plugins";
import { NlyDaterangePicker } from "./daterange-picker";
import { VNlyAppendToBody } from "./pulgin/append-to-body";
import { NlyCalendar } from "./pulgin/calendar";
import { NlyCalendarRangs } from "./pulgin/calendar-rangs";
import { NlyCalendarTime } from "./pulgin/calendar-time";
import { NlyDaterangePickerTransition } from "./pulgin/transition";

const DaterangePickerPlugin = nlyPluginFactory({
  components: {
    NlyDaterangePicker,
    NlyCalendar,
    NlyCalendarRangs,
    NlyCalendarTime,
    NlyDaterangePickerTransition
  },
  plugins: { VNlyAppendToBody }
});

export {
  DaterangePickerPlugin,
  NlyDaterangePicker,
  NlyCalendar,
  NlyCalendarRangs,
  NlyCalendarTime,
  NlyDaterangePickerTransition
};
