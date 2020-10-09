import Vue from "../../../utils/vue";
import dateUtilMixin from "../../../mixins/date-util";

const name = "NlyCalendar";

export const NlyCalendar = Vue.extend({
  name: name,
  mixins: [dateUtilMixin],
  props: {
    monthDate: Date,
    localeData: Object,
    start: Date,
    end: Date,
    minDate: Date,
    maxDate: Date,
    showDropdowns: {
      type: Boolean,
      default: false
    },
    showWeekNumbers: {
      type: Boolean,
      default: false
    },
    dateFormat: {
      type: Function,
      default: null
    }
  },
  data() {
    let currentMonthDate = this.monthDate || this.start || new Date();
    return {
      currentMonthDate,
      year_text: currentMonthDate.getFullYear()
    };
  },
  methods: {
    onChange(evt) {
      this.month = evt.target.value;
    },
    onInput(evt) {
      this.year = evt.target.value;
    },
    prevMonthClick() {
      this.changeMonthDate(this.$dateUtil.prevMonth(this.currentMonthDate));
    },
    nextMonthClick() {
      this.changeMonthDate(this.$dateUtil.nextMonth(this.currentMonthDate));
    },
    changeMonthDate(date, emit = true) {
      let year_month = this.$dateUtil.yearMonth(this.currentMonthDate);
      this.currentMonthDate = this.$dateUtil.validateDateRange(
        date,
        this.minDate,
        this.maxDate
      );
      if (
        emit &&
        year_month !== this.$dateUtil.yearMonth(this.currentMonthDate)
      ) {
        this.$emit("change-month", {
          month: this.currentMonthDate.getMonth() + 1,
          year: this.currentMonthDate.getFullYear()
        });
      }
      this.checkYear();
    },
    dayClass(date) {
      let dt = new Date(date);
      dt.setHours(0, 0, 0, 0);
      let start = new Date(this.start);
      start.setHours(0, 0, 0, 0);
      let end = new Date(this.end);
      end.setHours(0, 0, 0, 0);

      let classes = {
        off: date.getMonth() + 1 !== this.month,
        weekend: date.getDay() === 6 || date.getDay() === 0,
        today: dt.setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0),
        active:
          dt.setHours(0, 0, 0, 0) ==
            new Date(this.start).setHours(0, 0, 0, 0) ||
          dt.setHours(0, 0, 0, 0) == new Date(this.end).setHours(0, 0, 0, 0),
        "in-range": dt >= start && dt <= end,
        "start-date": dt.getTime() === start.getTime(),
        "end-date": dt.getTime() === end.getTime(),
        disabled:
          (this.minDate && dt.getTime() < this.minDate.getTime()) ||
          (this.maxDate && dt.getTime() > this.maxDate.getTime())
      };
      return this.dateFormat ? this.dateFormat(classes, date) : classes;
    },
    checkYear() {
      if (this.$refs.yearSelect !== document.activeElement) {
        this.$nextTick(() => {
          this.year_text = this.monthDate.getFullYear();
        });
      }
    }
  },
  computed: {
    monthName() {
      return this.locale.monthNames[this.currentMonthDate.getMonth()];
    },
    year: {
      get() {
        //return this.currentMonthDate.getFullYear()
        return this.year_text;
      },
      set(value) {
        this.year_text = value;
        let newDate = this.$dateUtil.validateDateRange(
          new Date(value, this.month, 1),
          this.minDate,
          this.maxDate
        );
        if (this.$dateUtil.isValidDate(newDate)) {
          this.$emit("change-month", {
            month: newDate.getMonth(),
            year: newDate.getFullYear()
          });
        }
      }
    },
    month: {
      get() {
        return this.currentMonthDate.getMonth() + 1;
      },
      set(value) {
        let newDate = this.$dateUtil.validateDateRange(
          new Date(this.year, value - 1, 1),
          this.minDate,
          this.maxDate
        );

        this.$emit("change-month", {
          month: newDate.getMonth() + 1,
          year: newDate.getFullYear()
        });
      }
    },
    calendar() {
      let month = this.month;
      let year = this.currentMonthDate.getFullYear();
      let firstDay = new Date(year, month - 1, 1);
      let lastMonth = this.$dateUtil.prevMonth(firstDay).getMonth() + 1;
      let lastYear = this.$dateUtil.prevMonth(firstDay).getFullYear();
      let daysInLastMonth = new Date(lastYear, month - 1, 0).getDate();

      let dayOfWeek = firstDay.getDay();

      let calendar = [];

      for (let i = 0; i < 6; i++) {
        calendar[i] = [];
      }

      let startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
      if (startDay > daysInLastMonth) startDay -= 7;

      if (dayOfWeek === this.locale.firstDay) startDay = daysInLastMonth - 6;

      let curDate = new Date(lastYear, lastMonth - 1, startDay, 12, 0, 0);
      for (
        let i = 0, col = 0, row = 0;
        i < 6 * 7;
        i++, col++, curDate.setDate(curDate.getDate() + 1)
      ) {
        if (i > 0 && col % 7 === 0) {
          col = 0;
          row++;
        }
        calendar[row][col] = new Date(curDate.getTime());
      }

      return calendar;
    },
    months() {
      let monthsData = this.locale.monthNames.map((m, idx) => ({
        label: m,
        value: idx
      }));

      if (this.maxDate && this.minDate) {
        let y = this.maxDate.getFullYear() - this.minDate.getFullYear();
        if (y < 2) {
          // get months
          let months = [];
          if (y < 1) {
            for (
              let i = this.minDate.getMonth();
              i <= this.maxDate.getMonth();
              i++
            ) {
              months.push(i);
            }
          } else {
            for (let i = 0; i <= this.maxDate.getMonth(); i++) {
              months.push(i);
            }
            for (let i = this.minDate.getMonth(); i < 12; i++) {
              months.push(i);
            }
          }
          // do filter
          if (months.length > 0) {
            return monthsData.filter(m => {
              return months.find(i => m.value === i) > -1;
            });
          }
        }
      }
      return monthsData;
    },
    locale() {
      return this.$dateUtil.localeData(this.localeData);
    }
  },
  watch: {
    monthDate(value) {
      if (this.currentMonthDate.getTime() !== value.getTime()) {
        this.changeMonthDate(value, false);
      }
    }
  },
  render(h) {
    var self = this;
    const monthselectOptinos = [];
    this.months.forEach(element => {
      monthselectOptinos.push(
        h(
          "option",
          {
            key: element.value,
            domProps: {
              value: element.value + 1
            }
          },
          element.label
        )
      );
    });

    const monthselect = h(
      "select",
      {
        class: "monthselect col",
        domProps: {
          value: this.month
        },
        on: {
          change: this.onChange
        }
      },
      monthselectOptinos
    );

    const thead = () => {
      if (this.showDropdowns) {
        return h("thead", [
          h("tr", [
            h(
              "th",
              {
                class:
                  "nly-datarange-calendar-prev available nly-datarange-calendar-th",
                on: { click: this.prevMonthClick },
                attrs: {
                  tabindex: 0
                }
              },
              [h("span")]
            ),
            h(
              "th",
              {
                class: "month nly-datarange-calendar-th",
                attrs: {
                  colspan: self.showWeekNumbers ? 6 : 5
                }
              },
              [
                h(
                  "div",
                  {
                    class: "row mx-1"
                  },
                  [
                    monthselect,
                    h("input", {
                      class: "yearselect col",
                      ref: "yearSelect",
                      attrs: {
                        type: "number"
                      },
                      on: {
                        // ...self.$listeners,
                        blur: self.checkYear,
                        input: self.onInput
                      },
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: self.year,
                          expression: "value"
                        }
                      ],
                      domProps: {
                        value: self.year
                      }
                    }),
                    self.year
                  ]
                )
              ]
            ),
            h(
              "th",
              {
                class:
                  "nly-datarange-calendar-next available nly-datarange-calendar-th",
                on: { click: this.nextMonthClick },
                attrs: {
                  tabindex: 0
                }
              },
              [h("span")]
            )
          ])
        ]);
      } else {
        return h("thead", [
          h("tr", [
            h(
              "th",
              {
                class: "month nly-datarange-calendar-th",
                attrs: {
                  colspan: self.showWeekNumbers ? 6 : 5
                }
              },
              [this.monthName, this.year]
            ),
            h(
              "th",
              {
                class:
                  "nly-datarange-calendar-next available nly-datarange-calendar-th",
                on: { click: this.nextMonthClick },
                attrs: {
                  tabindex: 0
                }
              },
              [h("span")]
            )
          ])
        ]);
      }
    };

    const tbodyWeekDayTrVnodes = [];
    if (this.showWeekNumbers) {
      tbodyWeekDayTrVnodes.push(
        h(
          "th",
          { class: "week nly-datarange-calendar-th" },
          this.locale.weekLabel
        )
      );
    }
    this.locale.daysOfWeek.forEach(item => {
      tbodyWeekDayTrVnodes.push(
        h("th", { key: item, class: "nly-datarange-calendar-th" }, item)
      );
    });

    const tbodyWeekDayTr = h("tr", tbodyWeekDayTrVnodes);

    const tobody = [tbodyWeekDayTr];
    this.calendar.forEach((item, index) => {
      const tobodyDateRowVnodes = [];
      if (this.showWeekNumbers && (index % 7 || index === 0)) {
        tobodyDateRowVnodes.push(
          h(
            "td",
            { class: "week nly-datarange-calendar-td" },
            this.$dateUtil.weekNumber(item[0])
          )
        );
      }
      item.forEach((childItem, childIndex) => {
        tobodyDateRowVnodes.push(
          h(
            "td",
            {
              class: this.dayClass(childItem),
              staticClass: "nly-datarange-calendar-td",
              on: {
                click: () => {
                  this.$emit("dateClick", childItem);
                },
                mouseover: () => {
                  this.$emit("hoverDate", childItem);
                }
              },
              key: childIndex
            },
            childItem.getDate()
          )
        );
      });
      tobody.push(h("tr", { key: index }, tobodyDateRowVnodes));
    });

    return h("table", { class: "table-condensed" }, [thead(), tobody]);
  }
});
