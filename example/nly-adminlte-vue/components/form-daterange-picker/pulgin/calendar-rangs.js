import Vue from "../../../utils/vue";
import dateUtilMixin from "../../../mixins/date-util";

const name = "NlyCalendarRangs";

export const NlyCalendarRangs = Vue.extend({
  name: name,
  mixins: [dateUtilMixin],
  props: {
    ranges: Object,
    selected: Object,
    localeData: Object,
    alwaysShowCalendars: Boolean
  },
  data() {
    return {
      customRangeActive: false
    };
  },
  methods: {
    clickRange(range) {
      this.customRangeActive = false;
      this.$emit("clickRange", range);
    },
    clickCustomRange() {
      this.customRangeActive = true;
      this.$emit("showCustomRange");
    },
    range_class(range) {
      return { active: range.selected === true };
    }
  },
  computed: {
    listedRanges() {
      if (!this.ranges) return false;
      return Object.keys(this.ranges).map(value => {
        return {
          label: value,
          value: this.ranges[value],
          selected:
            this.$dateUtil.isSame(
              this.selected.startDate,
              this.ranges[value][0]
            ) &&
            this.$dateUtil.isSame(this.selected.endDate, this.ranges[value][1])
        };
      });
    },
    selectedRange() {
      return this.listedRanges.find(r => r.selected === true);
    },
    showCustomRangeLabel() {
      return !this.alwaysShowCalendars;
    }
  },
  render(h) {
    const customRangeLabelVnodes = h(
      "li",
      {
        class: {
          active: this.customRangeActive || !this.selectedRange
        },
        attrs: {
          tabindex: 0
        },
        on: { click: this.clickCustomRange }
      },
      this.localeData.customRangeLabel
    );

    const listedRangesVnodes = this.listedRanges.map(item => {
      return h(
        "li",
        {
          attrs: {
            "data-range-key": item.label,
            tabindex: 0
          },
          class: this.range_class(item),
          key: item.label,
          on: {
            click: () => {
              this.clickRange(item.value);
            }
          }
        },
        item.label
      );
    });

    if (this.showCustomRangeLabel) {
      listedRangesVnodes.push(customRangeLabelVnodes);
    }

    const renderVnodes = () => {
      if (this.ranges) {
        return h("div", { class: "ranges" }, [h("ul", listedRangesVnodes)]);
      } else {
        return h("div", { class: "ranges" });
      }
    };

    return renderVnodes();
  }
});
