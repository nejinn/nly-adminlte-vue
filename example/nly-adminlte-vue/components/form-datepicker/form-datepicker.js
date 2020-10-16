import Vue from "../../utils/vue";
import dateUtilMixin from "../../mixins/date-util";
import { NlyCalendar } from "./pulgin/calendar";
import { NlyCalendarTime } from "./pulgin/calendar-time";
import { NlyCalendarRangs } from "./pulgin/calendar-rangs";
import { getDateUtil } from "../../utils/daterange-picker/util";
import { VNlyAppendToBody } from "./pulgin/append-to-body";
import { NlyInputGroup } from "../input-group/input-group";
import { NlyFormInput } from "../form-input/form-input";
import { hasNormalizedSlot, normalizeSlot } from "../../utils/normalize-slot";
import { NlyInputGroupPrepend } from "../input-group/input-group-prepend";
import { NlyInputGroupAppend } from "../input-group/input-group-append";
import { NlyInputGroupText } from "../input-group/input-group-text";
import { htmlOrText } from "../../utils/html";
import { formValidOptions } from "../../utils/nly-config";
import { nlyGetOptionInclusion } from "../../utils/get-options";
import { NlyFormFeedback } from "../form/form-feedback";
import formValid from "../../mixins/form/form-valid";
import { NlyDaterangePickerTransition } from "./pulgin/transition";

const name = "NlyFormDatepicker";

export const NlyFormDatepicker = Vue.extend({
  name: name,
  inheritAttrs: false,
  mixins: [dateUtilMixin, formValid],
  directives: { VNlyAppendToBody },
  model: {
    prop: "value",
    event: "update"
  },
  props: {
    description: {
      type: String
    },
    invalidFeedback: {
      type: String
    },
    validFeedback: {
      type: String
    },
    warningFeedback: {
      type: String
    },
    valid: {
      type: String,
      validator: valid => nlyGetOptionInclusion(formValidOptions, valid)
    },
    size: {
      type: String,
      default: null
    },
    prepend: {
      type: String
    },
    prependHtml: {
      type: String
    },
    append: {
      type: String
    },
    appendHtml: {
      type: String
    },
    /**
     * minimum date allowed to be selected
     * @default null
     */
    minDate: {
      type: [String, Date],
      default() {
        return null;
      }
    },
    /**
     * maximum date allowed to be selected
     * @default null
     */
    maxDate: {
      type: [String, Date],
      default() {
        return null;
      }
    },
    /**
     * Show the week numbers on the left side of the calendar
     */
    showWeekNumbers: {
      type: Boolean,
      default: false
    },
    /**
     * Each calendar has separate navigation when this is false
     */
    linkedCalendars: {
      type: Boolean,
      default: true
    },
    /**
     * Only show a single calendar, with or without ranges.
     *
     * Set true or 'single' for a single calendar with no ranges, single dates only.
     * Set 'range' for a single calendar WITH ranges.
     * Set false for a double calendar with ranges.
     */
    singleDatePicker: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Show the dropdowns for month and year selection above the calendars
     */
    showDropdowns: {
      type: Boolean,
      default: false
    },
    /**
     * Show the dropdowns for time (hour/minute) selection below the calendars
     */
    timePicker: {
      type: Boolean,
      default: false
    },
    /**
     * Determines the increment of minutes in the minute dropdown
     */
    timePickerIncrement: {
      type: Number,
      default: 5
    },
    /**
     * Use 24h format for the time
     */
    timePicker24Hour: {
      type: Boolean,
      default: true
    },
    /**
     * Allows you to select seconds except hour/minute
     */
    timePickerSeconds: {
      type: Boolean,
      default: false
    },
    /**
     * Auto apply selected range. If false you need to click an apply button
     */
    autoApply: {
      type: Boolean,
      default: false
    },
    /**
     * Object containing locale data used by the picker. See example below the table
     *
     * @default *see below
     */
    localeData: {
      type: Object,
      default() {
        return {};
      }
    },
    /**
     * This is the v-model prop which the component uses. This should be an object containing startDate and endDate props.
     * Each of the props should be a string which can be parsed by Date, or preferably a Date Object.
     * @default {
     * startDate: null,
     * endDate: null
     * }
     */
    value: {
      // for v-model
      type: [Object],
      default: null,
      required: true
    },
    /**
     * You can set this to false in order to hide the ranges selection. Otherwise it is an object with key/value. See below
     * @default *see below
     */
    ranges: {
      type: [Object, Boolean],
      default() {
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        let yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);

        let thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        let thisMonthEnd = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        );

        return {
          Today: [today, today],
          Yesterday: [yesterday, yesterday],
          "This month": [thisMonthStart, thisMonthEnd],
          "This year": [
            new Date(today.getFullYear(), 0, 1),
            new Date(today.getFullYear(), 11, 31)
          ],
          "Last month": [
            new Date(today.getFullYear(), today.getMonth() - 1, 1),
            new Date(today.getFullYear(), today.getMonth(), 0)
          ]
        };
      }
    },
    /**
     * which way the picker opens - "center", "left", "right" or "inline"
     */
    opens: {
      type: String,
      default: "center"
    },
    /**
       function(classes, date) - special prop type function which accepts 2 params:
       "classes" - the classes that the component's logic has defined,
       "date" - tha date currently processed.
       You should return Vue class object which should be applied to the date rendered.
       */
    dateFormat: Function,
    /**
     * If set to false and one of the predefined ranges is selected then calendars are hidden.
     * If no range is selected or you have clicked the "Custom ranges" then the calendars are shown.
     */
    alwaysShowCalendars: {
      type: Boolean,
      default: true
    },
    /**
     * Disabled state. If true picker do not popup on click.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Class of html picker control container
     */
    controlContainerClass: {
      type: [Object, String],
      default: "form-control reportrange-text"
    },
    /**
     * Append the dropdown element to the end of the body
     * and size/position it dynamically. Use it if you have
     * overflow or z-index issues.
     * @type {Boolean}
     */
    appendToBody: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to close the dropdown on "esc"
     */
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    /**
     * Makes the picker readonly. No button in footer. No ranges. Cannot change.
     */
    readonly: {
      type: Boolean
    }
  },
  data() {
    //copy locale data object
    const util = getDateUtil();
    let data = { locale: util.localeData({ ...this.localeData }) };

    let startDate = this.value.startDate || null;
    let endDate = this.value.endDate || null;

    data.monthDate = startDate ? new Date(startDate) : new Date();
    //get next month date
    data.nextMonthDate = util.nextMonth(data.monthDate);

    data.start = startDate ? new Date(startDate) : null;
    if (this.singleDatePicker && this.singleDatePicker !== "range") {
      // ignore endDate for singleDatePicker
      data.end = data.start;
    } else {
      data.end = endDate ? new Date(endDate) : null;
    }
    data.in_selection = false;
    data.open = false;
    //When alwaysShowCalendars = false and custom range is clicked
    data.showCustomRangeCalendars = false;

    // update day names order to firstDay
    if (data.locale.firstDay !== 0) {
      let iterator = data.locale.firstDay;
      let weekDays = [...data.locale.daysOfWeek];
      while (iterator > 0) {
        weekDays.push(weekDays.shift());
        iterator--;
      }
      data.locale.daysOfWeek = weekDays;
    }
    return data;
  },
  methods: {
    calculatePosition(dropdownList, component, { width, top, left, right }) {
      // which way the picker opens - "center", "left" or "right"
      if (component.opens === "center") {
        // console.log('center open', left, width)
        dropdownList.style.left = left + width / 2 + "px";
      } else if (component.opens === "left") {
        // console.log('left open', right, width)
        dropdownList.style.right = window.innerWidth - right + "px";
      } else if (component.opens === "right") {
        // console.log('right open')
        dropdownList.style.left = left + "px";
      }
      dropdownList.style.top = top + "px";
      // dropdownList.style.width = width + 'px'
    },
    dateFormatFn(classes, date) {
      let dt = new Date(date);
      dt.setHours(0, 0, 0, 0);
      let start = new Date(this.start);
      start.setHours(0, 0, 0, 0);
      let end = new Date(this.end);
      end.setHours(0, 0, 0, 0);

      classes["in-range"] = dt >= start && dt <= end;

      return this.dateFormat ? this.dateFormat(classes, date) : classes;
    },
    changeLeftMonth(value) {
      let newDate = new Date(value.year, value.month - 1, 1);
      this.monthDate = newDate;
      if (
        this.linkedCalendars ||
        this.$dateUtil.yearMonth(this.monthDate) >=
          this.$dateUtil.yearMonth(this.nextMonthDate)
      ) {
        this.nextMonthDate = this.$dateUtil.validateDateRange(
          this.$dateUtil.nextMonth(newDate),
          this.minDate,
          this.maxDate
        );
        if (
          (!this.singleDatePicker || this.singleDatePicker === "range") &&
          this.$dateUtil.yearMonth(this.monthDate) ===
            this.$dateUtil.yearMonth(this.nextMonthDate)
        ) {
          this.monthDate = this.$dateUtil.validateDateRange(
            this.$dateUtil.prevMonth(this.monthDate),
            this.minDate,
            this.maxDate
          );
        }
      }
      /**
       * Emits event when the viewing month is changes. The second param is the index of the calendar.
       *
       * @param {monthDate} date displayed (first day of the month)
       * @param calendarIndex int 0 - first(left) calendar, 1 - second(right) calendar
       */
      this.$emit("change-month", this.monthDate, 0);
    },
    changeRightMonth(value) {
      let newDate = new Date(value.year, value.month - 1, 1);
      this.nextMonthDate = newDate;
      if (
        this.linkedCalendars ||
        this.$dateUtil.yearMonth(this.nextMonthDate) <=
          this.$dateUtil.yearMonth(this.monthDate)
      ) {
        this.monthDate = this.$dateUtil.validateDateRange(
          this.$dateUtil.prevMonth(newDate),
          this.minDate,
          this.maxDate
        );
        if (
          this.$dateUtil.yearMonth(this.monthDate) ===
          this.$dateUtil.yearMonth(this.nextMonthDate)
        ) {
          this.nextMonthDate = this.$dateUtil.validateDateRange(
            this.$dateUtil.nextMonth(this.nextMonthDate),
            this.minDate,
            this.maxDate
          );
        }
      }
      this.$emit("change-month", this.monthDate, 1);
    },
    normalizeDatetime(value, oldValue) {
      let newDate = new Date(value);
      if (this.timePicker && oldValue) {
        newDate.setHours(oldValue.getHours());
        newDate.setMinutes(oldValue.getMinutes());
        newDate.setSeconds(oldValue.getSeconds());
        newDate.setMilliseconds(oldValue.getMilliseconds());
      }

      return newDate;
    },
    dateClick(value) {
      if (this.readonly) return false;
      if (this.in_selection) {
        this.in_selection = false;
        this.end = this.normalizeDatetime(value, this.end);

        if (this.end < this.start) {
          this.in_selection = true;
          this.start = this.normalizeDatetime(value, this.start);
        }
        if (!this.in_selection) {
          this.onSelect();
          if (this.autoApply) this.clickedApply();
        }
      } else {
        this.start = this.normalizeDatetime(value, this.start);
        this.end = this.normalizeDatetime(value, this.end);
        if (!this.singleDatePicker || this.singleDatePicker === "range") {
          this.in_selection = true;
        } else {
          this.onSelect();
          if (this.autoApply) this.clickedApply();
        }
      }
    },
    hoverDate(value) {
      if (this.readonly) return false;
      let dt = this.normalizeDatetime(value, this.end);
      if (this.in_selection && dt >= this.start) this.end = dt;
      /**
       * Emits event when the mouse hovers a date
       * @param {Date} value the date that is being hovered
       */
      this.$emit("hoverDate", value);
    },
    onClickPicker() {
      if (!this.disabled) {
        this.togglePicker(null, true);
      }
    },
    togglePicker(value, event) {
      if (typeof value === "boolean") {
        this.open = value;
      } else {
        this.open = !this.open;
      }

      if (event === true)
        /**
         * Emits whenever the picker opens/closes
         * @param {boolean} open - the current state of the picker
         * @param {Function} togglePicker - function (show, event) which can be used to control the picker. where "show" is the new state and "event" is boolean indicating whether a new event should be raised
         */
        this.$emit("toggle", this.open, this.togglePicker);
    },
    clickedApply() {
      // this.open = false
      this.togglePicker(false, true);
      /**
       * Emits when the user selects a range from the picker and clicks "apply" (if autoApply is true).
       * @param {json} value - json object containing the dates: {startDate, endDate}
       */
      this.$emit("update", {
        startDate: this.start,
        endDate:
          this.singleDatePicker && this.singleDatePicker !== "range"
            ? this.start
            : this.end
      });
    },
    clickCancel() {
      if (this.open) {
        // reset start and end
        let startDate = this.value.startDate;
        let endDate = this.value.endDate;
        this.start = startDate ? new Date(startDate) : null;
        this.end = endDate ? new Date(endDate) : null;
        // this.open = false
        this.togglePicker(false, true);
      }
    },
    onSelect() {
      /**
       * Emits when the user selects a range from the picker.
       * @param {json} value - json object containing the dates: {startDate, endDate}
       */
      this.$emit("select", { startDate: this.start, endDate: this.end });
    },
    clickAway($event) {
      if (
        $event &&
        $event.target &&
        !this.$el.contains($event.target) &&
        this.$refs.dropdown &&
        !this.$refs.dropdown.contains($event.target)
      ) {
        this.clickCancel();
      }
    },
    clickRange(value) {
      this.in_selection = false;

      if (
        this.$dateUtil.isValidDate(value[0]) &&
        this.$dateUtil.isValidDate(value[1])
      ) {
        this.start = this.$dateUtil.validateDateRange(
          new Date(value[0]),
          this.minDate,
          this.maxDate
        );
        this.end = this.$dateUtil.validateDateRange(
          new Date(value[1]),
          this.minDate,
          this.maxDate
        );
        this.changeLeftMonth({
          month: this.start.getMonth() + 1,
          year: this.start.getFullYear()
        });
      } else {
        this.start = null;
        this.end = null;
      }

      this.onSelect();

      if (this.autoApply) this.clickedApply();
    },
    onUpdateStartTime(value) {
      let start = new Date(this.start);
      start.setHours(value.hours);
      start.setMinutes(value.minutes);
      start.setSeconds(value.seconds);

      this.start = this.$dateUtil.validateDateRange(
        start,
        this.minDate,
        this.maxDate
      );

      // if autoapply is ON we should update the value on time selection change
      if (this.autoApply) {
        this.$emit("update", {
          startDate: this.start,
          endDate:
            this.singleDatePicker && this.singleDatePicker !== "range"
              ? this.start
              : this.end
        });
      }
    },
    onUpdateEndTime(value) {
      let end = new Date(this.end);
      end.setHours(value.hours);
      end.setMinutes(value.minutes);
      end.setSeconds(value.seconds);

      this.end = this.$dateUtil.validateDateRange(
        end,
        this.minDate,
        this.maxDate
      );

      // if autoapply is ON we should update the value on time selection change
      if (this.autoApply) {
        this.$emit("update", { startDate: this.start, endDate: this.end });
      }
    },
    handleEscape(e) {
      if (this.open && e.keyCode === 27 && this.closeOnEsc) {
        this.clickCancel();
      }
    }
  },
  computed: {
    showRanges() {
      return this.ranges !== false && !this.readonly;
    },
    showCalendars() {
      return this.alwaysShowCalendars || this.showCustomRangeCalendars;
    },
    startText() {
      if (this.start === null) return "";
      return this.$dateUtil.format(this.start, this.locale.format);
    },
    endText() {
      if (this.end === null) return "";
      return this.$dateUtil.format(this.end, this.locale.format);
    },
    rangeText() {
      let range = this.startText;
      if (!this.singleDatePicker || this.singleDatePicker === "range") {
        range += this.locale.separator + this.endText;
      }
      return range;
    },
    min() {
      return this.minDate ? new Date(this.minDate) : null;
    },
    max() {
      return this.maxDate ? new Date(this.maxDate) : null;
    },
    pickerStyles() {
      return {
        "show-calendar": this.open || this.opens === "inline",
        "show-ranges": this.showRanges,
        "show-weeknumbers": this.showWeekNumbers,
        single: this.singleDatePicker,
        ["opens" + this.opens]: true,
        linked: this.linkedCalendars,
        "hide-calendars": !this.showCalendars
      };
    },
    isClear() {
      return !this.value.startDate || !this.value.endDate;
    },
    isDirty() {
      let origStart = new Date(this.value.startDate);
      let origEnd = new Date(this.value.endDate);

      return (
        !this.isClear &&
        (this.start.getTime() !== origStart.getTime() ||
          this.end.getTime() !== origEnd.getTime())
      );
    }
  },
  watch: {
    minDate() {
      let dt = this.$dateUtil.validateDateRange(
        this.monthDate,
        this.minDate || new Date(),
        this.maxDate
      );
      this.changeLeftMonth({
        year: dt.getFullYear(),
        month: dt.getMonth() + 1
      });
    },
    maxDate() {
      let dt = this.$dateUtil.validateDateRange(
        this.nextMonthDate,
        this.minDate,
        this.maxDate || new Date()
      );
      this.changeRightMonth({
        year: dt.getFullYear(),
        month: dt.getMonth() + 1
      });
    },
    "value.startDate"(value) {
      if (!this.$dateUtil.isValidDate(new Date(value))) return;

      this.start =
        !!value && !this.isClear && this.$dateUtil.isValidDate(new Date(value))
          ? new Date(value)
          : null;
      if (this.isClear) {
        this.start = null;
        this.end = null;
      } else {
        this.start = new Date(this.value.startDate);
        this.end = new Date(this.value.endDate);
      }
    },
    "value.endDate"(value) {
      if (!this.$dateUtil.isValidDate(new Date(value))) return;

      this.end = !!value && !this.isClear ? new Date(value) : null;
      if (this.isClear) {
        this.start = null;
        this.end = null;
      } else {
        this.start = new Date(this.value.startDate);
        this.end = new Date(this.value.endDate);
      }
    },
    open: {
      handler(value) {
        if (typeof document === "object") {
          this.$nextTick(() => {
            value
              ? document.body.addEventListener("click", this.clickAway)
              : document.body.removeEventListener("click", this.clickAway);
            value
              ? document.addEventListener("keydown", this.handleEscape)
              : document.removeEventListener("keydown", this.handleEscape);

            if (!this.alwaysShowCalendars && this.ranges) {
              this.showCustomRangeCalendars = !Object.keys(this.ranges).find(
                key =>
                  this.$dateUtil.isSame(
                    this.start,
                    this.ranges[key][0],
                    "date"
                  ) &&
                  this.$dateUtil.isSame(this.end, this.ranges[key][1], "date")
              );
            }
          });
        }
      },
      immediate: true
    }
  },
  render(h) {
    const drpCalendarLeftChildrenVnodes = [
      h("div", { class: "calendar-table" }, [
        h(NlyCalendar, {
          props: {
            monthDate: this.monthDate,
            localeData: this.locale,
            start: this.start,
            end: this.end,
            minDate: this.min,
            maxDate: this.max,
            showDropdowns: this.showDropdowns,
            dateFormat: this.dateFormatFn,
            showWeekNumbers: this.showWeekNumbers
          },
          on: {
            "change-month": this.changeLeftMonth,
            dateClick: this.dateClick,
            hoverDate: this.hoverDate
          }
        })
      ])
    ];

    if (this.timePicker && this.start) {
      drpCalendarLeftChildrenVnodes.push(
        h(NlyCalendarTime, {
          props: {
            update: this.onUpdateStartTime,
            miniuteIncrement: this.timePickerIncrement,
            hour24: this.timePicker24Hour,
            secondPicker: this.timePickerSeconds,
            currentTime: this.start,
            readonly: this.readonly
          },
          on: {
            update: this.onUpdateStartTime
          }
        })
      );
    }

    const drpCalendarLeftVnodes = h(
      "div",
      {
        staticClass: "drp-calendar col left",
        class: { single: this.singleDatePicker }
      },
      drpCalendarLeftChildrenVnodes
    );

    const drpCalendarRightChildrenVnodes = [
      h("div", { class: "calendar-table" }, [
        h(NlyCalendar, {
          props: {
            monthDate: this.nextMonthDate,
            localeData: this.locale,
            start: this.start,
            end: this.end,
            minDate: this.min,
            maxDate: this.max,
            showDropdowns: this.showDropdowns,
            dateFormat: this.dateFormatFn,
            showWeekNumbers: this.showWeekNumbers
          },
          on: {
            "change-month": this.changeRightMonth,
            dateClick: this.dateClick,
            hoverDate: this.hoverDate
          }
        })
      ])
    ];
    if (this.timePicker && this.start) {
      drpCalendarRightChildrenVnodes.push(
        h(NlyCalendarTime, {
          props: {
            miniuteIncrement: this.timePickerIncrement,
            hour24: this.timePicker24Hour,
            secondPicker: this.timePickerSeconds,
            currentTime: this.end,
            readonly: this.readonly
          },
          on: {
            update: this.onUpdateEndTime
          }
        })
      );
    }

    const drpCalendarRightVnodes = h(
      "div",
      {
        class: "drp-calendar col right"
      },
      drpCalendarRightChildrenVnodes
    );

    const calendarsContainerChildrenVnodes = [drpCalendarLeftVnodes];

    if (!this.singleDatePicker) {
      calendarsContainerChildrenVnodes.push(drpCalendarRightVnodes);
    }

    const calendarsContainerVnodes = h(
      "div",
      {
        class: "calendars-container"
      },
      calendarsContainerChildrenVnodes
    );
    const calendarsRowVnodes = () => {
      if (hasNormalizedSlot("ranges", this.$scopedSlots, this.$slots)) {
        if (this.showRanges) {
          return h("div", { class: "calendars row no-gutters" }, [
            this.$scopedSlots.ranges({
              startDate: this.start,
              endDate: this.end,
              ranges: this.ranges,
              clickRange: this.clickRange
            }),
            calendarsContainerVnodes
          ]);
        }
      } else {
        if (this.showRanges) {
          return h("div", { class: "calendars row no-gutters" }, [
            h(NlyCalendarRangs, {
              class: "col-12 col-md-auto",
              props: {
                alwaysShowCalendars: this.alwaysShowCalendars,
                localeData: this.locale,
                ranges: this.ranges,
                selected: { startDate: this.start, endDate: this.end }
              },
              on: {
                clickRange: this.clickRange,
                showCustomRange: () => {
                  this.showCustomRangeCalendars = true;
                }
              }
            }),
            calendarsContainerVnodes
          ]);
        }
      }
    };

    const slotsFooterButtonsChildrenVnodes = [];

    if (this.showCalendars) {
      slotsFooterButtonsChildrenVnodes.push(
        h("span", { class: "drp-selected" }, this.rangeText)
      );
    }

    if (!this.readonly) {
      slotsFooterButtonsChildrenVnodes.push(
        h(
          "button",
          {
            class: "cancelBtn btn btn-sm btn-secondary",
            attrs: {
              type: "button"
            },
            on: { click: this.clickCancel }
          },
          this.locale.cancelLabel
        )
      );
    }
    if (!this.readonly) {
      slotsFooterButtonsChildrenVnodes.push(
        h(
          "button",
          {
            class: "applyBtn btn btn-sm btn-success",
            attrs: {
              disabled: this.in_selection,
              type: "button"
            },
            on: { click: this.clickedApply }
          },
          this.locale.applyLabel
        )
      );
    }

    const scopedSlotsFooter = () => {
      if (hasNormalizedSlot("footer", this.$scopedSlots, this.$slots)) {
        return this.$scopedSlots.footer({
          rangeText: this.rangeText,
          locale: this.locale,
          clickCancel: this.clickCancel,
          clickApply: this.clickedApply,
          in_selection: this.in_selection,
          autoApply: this.autoApply
        });
      } else {
        if (!this.autoApply) {
          return h(
            "div",
            { class: "drp-buttons" },
            slotsFooterButtonsChildrenVnodes
          );
        }
      }
    };

    const daterangePickerTransitionVnodes = () => {
      if (hasNormalizedSlot("header", this.$scopedSlots, this.$slots)) {
        if (this.open || this.opens === "inline") {
          return h(NlyDaterangePickerTransition, [
            h(
              "div",
              {
                staticClass: "daterangepicker dropdown-menu ltr",
                class: this.pickerStyles,
                directives: [{ name: "v-nly-append-to-body" }],
                ref: "dropdown"
              },
              [
                this.$scopedSlots.header({
                  rangeText: this.rangeText,
                  locale: this.locale,
                  clickCancel: this.clickCancel,
                  clickApply: this.clickedApply,
                  in_selection: this.in_selection,
                  autoApply: this.autoApply
                }),
                calendarsRowVnodes(),
                scopedSlotsFooter()
              ]
            )
          ]);
        }
      } else {
        if (this.open || this.opens === "inline") {
          return h(NlyDaterangePickerTransition, [
            h(
              "div",
              {
                staticClass: "daterangepicker dropdown-menu ltr",
                class: this.pickerStyles,
                directives: [{ name: "v-nly-append-to-body" }],
                ref: "dropdown"
              },
              [calendarsRowVnodes(), scopedSlotsFooter()]
            )
          ]);
        }
      }
    };

    let $prepend = h();
    const hasPrependSlot = hasNormalizedSlot(
      "prepend",
      this.$scopedSlots,
      this.$slots
    );
    if (hasPrependSlot || this.prepend || this.prependHtml) {
      $prepend = h(NlyInputGroupPrepend, [
        hasPrependSlot
          ? normalizeSlot(
              "prepend",
              this.slotScope,
              this.$scopedSlots,
              this.$slots
            )
          : h(NlyInputGroupText, {
              domProps: htmlOrText(this.prependHtml, this.prepend)
            })
      ]);
    }

    let $append = h();
    const hasAppendSlot = hasNormalizedSlot(
      "append",
      this.$scopedSlots,
      this.$slots
    );
    if (hasAppendSlot || this.append || this.appendHtml) {
      $append = h(NlyInputGroupAppend, [
        hasAppendSlot
          ? normalizeSlot(
              "append",
              this.slotScope,
              this.$scopedSlots,
              this.$slots
            )
          : h(NlyInputGroupText, {
              domProps: htmlOrText(this.appendHtml, this.append)
            })
      ]);
    }

    // const InputGroupVnodes = [
    //   prependVnodes,
    //   h(NlyFormInput, {
    //     props: {
    //       value: this.rangeText,
    //       valid: this.valid
    //     },
    //     on: {
    //       click: this.onClickPicker
    //     }
    //   })
    // ];

    const scopedSlotsInput = () => {
      if (hasNormalizedSlot("input", this.$scopedSlots, this.$slots)) {
        return h(
          "span",
          {
            on: { click: this.onClickPicker },
            ref: "toggle"
          },
          [
            this.$scopedSlots.input({
              startDate: this.start,
              endDate: this.end,
              ranges: this.ranges
            })
          ]
        );
      } else {
        return h(
          "span",
          {
            on: { click: this.onClickPicker },
            ref: "toggle"
          },
          [
            h(
              NlyInputGroup,
              {
                props: {
                  size: this.size
                },
                class: this.validClass
              },
              [
                $prepend,
                h(NlyFormInput, {
                  props: {
                    value: this.rangeText,
                    valid: this.valid
                  }
                }),
                $append
              ]
            )
          ]
        );
      }
    };

    const pickerVnodes = [scopedSlotsInput()];

    const feedback = {
      invalid: this.invalidFeedback,
      valid: this.validFeedback,
      warning: this.warningFeedback
    };

    const stateList = ["invalid", "valid", "warning"];

    stateList.forEach(item => {
      if (Object.keys(feedback).indexOf(item) !== -1) {
        if (feedback[item]) {
          pickerVnodes.push(
            h(NlyFormFeedback, {
              props: {
                state: item,
                text: feedback[item]
              }
            })
          );
        }
      }
    });

    if (this.description) {
      pickerVnodes.push(
        h(
          "small",
          {
            staticClass: "form-text text-muted"
          },
          this.description
        )
      );
    }

    pickerVnodes.push(daterangePickerTransitionVnodes());

    return h(
      "div",
      {
        staticClass: "nly-daterange-picker",
        class: [this.opens === "inline" ? "inline" : null]
      },
      pickerVnodes
    );
  }
});
