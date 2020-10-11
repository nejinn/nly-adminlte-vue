import Vue from "../../../utils/vue";

const name = "NlyCalendarTime";

export const NlyCalendarTime = Vue.extend({
  name: name,
  filters: {
    formatNumber: value => {
      if (value < 10) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  },
  props: {
    miniuteIncrement: {
      type: Number,
      default: 5
    },
    hour24: {
      type: Boolean,
      default: true
    },
    secondPicker: {
      type: Boolean,
      default: false
    },
    currentTime: {
      default() {
        return new Date();
      }
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let current = this.currentTime ? this.currentTime : new Date();
    let hours = current.getHours();
    return {
      hour: this.hour24 ? hours : hours % 12 || 12,
      minute:
        current.getMinutes() - (current.getMinutes() % this.miniuteIncrement),
      second: current.getSeconds(),
      ampm: hours < 12 ? "AM" : "PM"
    };
  },
  computed: {
    hours() {
      let values = [];
      let max = this.hour24 ? 24 : 12;
      for (let i = 0; i < max; i++) {
        values.push(this.hour24 ? i : i + 1);
      }
      return values;
    },
    minutes() {
      let values = [];
      let max = 60;
      for (let i = 0; i < max; i = i + this.miniuteIncrement) {
        values.push(i);
      }
      return values;
    }
  },
  watch: {
    hour() {
      this.onChange();
    },
    minute() {
      this.onChange();
    },
    second() {
      this.onChange();
    },
    ampm() {
      this.onChange();
    }
  },
  methods: {
    hourOnChange(evt) {
      this.hour = evt.target.value;
    },
    minuteOnChange(evt) {
      this.minute = evt.target.value;
    },
    secondOnChange(evt) {
      this.second = evt.target.value;
    },
    ampmOnChange(evt) {
      this.ampm = evt.target.value;
    },
    getHour() {
      if (this.hour24) {
        return this.hour;
      } else {
        if (this.hour === 12) {
          return this.ampm === "AM" ? 0 : 12;
        } else {
          return this.hour + (this.ampm === "PM" ? 12 : 0);
        }
      }
    },
    onChange() {
      this.$emit("update", {
        hours: this.getHour(),
        minutes: this.minute,
        seconds: this.second
      });
    }
  },
  render(h) {
    const hourselectVnodes = () => {
      const hourselectOptionsVnodes = this.hours.map(item => {
        return h(
          "option",
          { key: item, domProps: { value: item } },
          item | this.formatNumber
        );
      });
      return h(
        "select",
        {
          class: "hourselect form-control mr-1",
          attrs: {
            disabled: this.readonly
          },
          domProps: {
            value: this.hour
          },
          on: {
            change: this.hourOnChange
          }
        },
        hourselectOptionsVnodes
      );
    };

    const minuteselectVnodes = () => {
      const minuteselectOptionsVnodes = this.minutes.map(item => {
        return h(
          "option",
          { key: item, domProps: { value: item } },
          item | this.formatNumber
        );
      });
      return h(
        "select",
        {
          class: "minuteselect form-control ml-1",
          attrs: {
            disabled: this.readonly
          },
          domProps: {
            value: this.minute
          },
          on: {
            change: this.minuteOnChange
          }
        },
        minuteselectOptionsVnodes
      );
    };

    const secondPickerVnodes = () => {
      const secondPickerOptionsVnodes = [];
      for (var i = 1; i < 60; i++) {
        secondPickerOptionsVnodes.push(
          h(
            "option",
            { key: i - 1, domProps: { value: i - 1 } },
            (i - 1) | this.formatNumber
          )
        );
      }
      return h(
        "select",
        {
          class: "secondselect form-control ml-1",
          attrs: {
            disabled: this.readonly
          },
          domProps: {
            value: this.second
          },
          on: {
            change: this.secondOnChange
          }
        },
        secondPickerOptionsVnodes
      );
    };

    const ampmselectVnodes = () => {
      return h(
        "select",
        {
          class: "ampmselect",
          attrs: {
            disabled: this.readonly
          },
          domProps: {
            value: this.ampm
          },
          on: {
            change: this.ampmOnChange
          }
        },
        [
          h("option", { domProps: { value: this.AM } }, "AM"),
          h("option", { domProps: { value: this.PM } }, "PM")
        ]
      );
    };

    const renderVnodes = () => {
      if (this.secondPicker) {
        if (!this.hour24) {
          return h("div", { class: "calendar-time" }, [
            hourselectVnodes(),
            ":",
            minuteselectVnodes(),
            ":",
            secondPickerVnodes(),
            ampmselectVnodes()
          ]);
        } else {
          return h("div", { class: "calendar-time" }, [
            hourselectVnodes(),
            ":",
            minuteselectVnodes(),
            ":",
            secondPickerVnodes()
          ]);
        }
      } else {
        if (!this.hour24) {
          return h("div", { class: "calendar-time" }, [
            hourselectVnodes(),
            ":",
            minuteselectVnodes(),
            ampmselectVnodes()
          ]);
        } else {
          return h("div", { class: "calendar-time" }, [
            hourselectVnodes(),
            ":",
            minuteselectVnodes()
          ]);
        }
      }
    };
    return renderVnodes();
  }
});
