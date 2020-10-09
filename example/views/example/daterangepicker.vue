<template>
  <nly-container>
    <nly-row>
      <nly-col>
        <nly-form-group
          label="Shipping Address"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <nly-daterange-picker
            ref="picker"
            :opens="opens"
            :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
            :minDate="minDate"
            :maxDate="maxDate"
            :singleDatePicker="singleDatePicker"
            :timePicker="timePicker"
            :timePicker24Hour="timePicker24Hour"
            :showWeekNumbers="showWeekNumbers"
            :showDropdowns="showDropdowns"
            :autoApply="autoApply"
            v-model="dateRange"
            :ranges="show_ranges ? undefined : false"
            @update="updateValues"
            @toggle="checkOpen"
            :linkedCalendars="linkedCalendars"
            :dateFormat="dateFormat"
            :always-show-calendars="false"
            :alwaysShowCalendars="alwaysShowCalendars"
            :append-to-body="appendToBody"
            :closeOnEsc="closeOnEsc"
          />
        </nly-form-group>
      </nly-col>
    </nly-row>
    <div class="form-row pt-3 bg-light">
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label" for="startDate"
            >开始日期</label
          >
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              id="startDate"
              v-model="dateRange.startDate"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label" for="endDate">结束日期</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              id="endDate"
              v-model="dateRange.endDate"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label" for="minDate">最小日期</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              id="minDate"
              v-model="minDate"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 col-form-label" for="maxDate">最大日期</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              id="maxDate"
              v-model="maxDate"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      日历布局
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="options"
          id="option1"
          value="left"
          v-model="opens"
        />
        <label class="form-check-label">左侧</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="options"
          id="option2"
          value="center"
          v-model="opens"
        />
        <label class="form-check-label">居中</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="options"
          id="option3"
          value="right"
          v-model="opens"
        />
        <label class="form-check-label">右侧</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="options"
          id="option4"
          value="inline"
          v-model="opens"
        />
        <label class="form-check-label">垂直</label>
      </div>
      <small class="form-text text-muted"
        >日历布局，可选左侧，居中，右侧，垂直，当为垂直的时候，无法关闭
      </small>
    </div>

    <div>
      <div class="form-check form-inline py-3">
        <label class="form-check-label" for="singleDatePicker">
          日历选择模式
        </label>
        <select
          v-model="singleDatePicker"
          id="singleDatePicker"
          class="form-control ml-3"
        >
          <option>单选</option>
          <option>双选</option>
          <option :value="false">默认</option>
        </select>
        <small class="form-text text-muted"
          >单选只能选择一个日期，双选必须选择两个日期</small
        >
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="showWeekNumbers"
          v-model="showWeekNumbers"
        />
        <label class="form-check-label" for="showWeekNumbers">
          显示周数
        </label>
        <small class="form-text text-muted">
          日历左侧显示整个日期对应的周数
        </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="timePicker"
          v-model="timePicker"
        />
        <label class="form-check-label" for="timePicker">
          显示时间选择器
        </label>
        <small class="form-text text-muted">
          允许选择时间
        </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="timePicker24Hour"
          v-model="timePicker24Hour"
        />
        <label class="form-check-label" for="timePicker24Hour">
          24小时制时间选择器
        </label>
        <small class="form-text text-muted">
          时间显示器转为24小时制
        </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="showDropdowns"
          v-model="showDropdowns"
        />
        <label class="form-check-label" for="showDropdowns">
          显示为下拉菜单
        </label>
        <small class="form-text text-muted">
          让日历显示为下拉菜单
        </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="autoApply"
          v-model="autoApply"
        />
        <label class="form-check-label" for="autoApply">
          自动提交
        </label>
        <small class="form-text text-muted">
          会自动提交选择的时间，并隐藏停止，提交按钮
        </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="show_ranges"
          v-model="show_ranges"
        />
        <label class="form-check-label" for="show_ranges">
          显示左侧最近时间
        </label>
        <small class="form-text text-muted">
          可以显示左侧最近时间，比如上个月
        </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="alwaysShowCalendars"
          v-model="alwaysShowCalendars"
        />
        <label class="form-check-label" for="alwaysShowCalendars">
          显示日历
        </label>
        <small class="form-text text-muted">
          不显示日历，如果设置了rang显示左侧最近时间，这个选项无效
        </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="appendToBody"
          v-model="appendToBody"
        />
        <label class="form-check-label" for="appendToBody">
          把日历显示到输入框下面
        </label>
        <small class="form-text text-muted"> </small>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="closeOnEsc"
          v-model="closeOnEsc"
        />
        <label class="form-check-label" for="closeOnEsc">
          按esc键退出
        </label>
      </div>
    </div>
  </nly-container>
</template>

<script>
import dateUtil from "../../nly-adminlte-vue/utils/daterange-picker/native";
export default {
  name: "",
  filters: {
    date(value) {
      if (!value) return "";

      let options = { year: "numeric", month: "long", day: "numeric" };
      return Intl.DateTimeFormat("en-US", options).format(value);
    }
  },
  data() {
    //                    :locale-data="{ daysOfWeek: [ 'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ] }"
    return {
      sss: "",
      opens: "center",
      minDate: "2019-05-02 04:00:00",
      maxDate: "2020-12-26 14:00:00",
      // minDate: '',
      // maxDate: '',
      dateRange: {
        startDate: "2019-12-10",
        endDate: "2019-12-20"
      },
      single_range_picker: false,
      show_ranges: true,
      singleDatePicker: false,
      timePicker: true,
      timePicker24Hour: true,
      showDropdowns: true,
      autoApply: false,
      showWeekNumbers: true,
      linkedCalendars: true,
      alwaysShowCalendars: true,
      appendToBody: false,
      closeOnEsc: true
    };
  },
  mounted() {
    // this.$refs.picker.open = true
  },
  methods: {
    updateValues(values) {
      console.log("event: update", { ...values });
      this.dateRange.startDate = dateUtil.format(
        values.startDate,
        "yyyy-mm-dd HH:MM:ss"
      );
      this.dateRange.endDate = dateUtil.format(
        values.endDate,
        "yyyy-mm-dd HH:MM:ss"
      );
    },
    checkOpen(open) {
      console.log("event: open", open);
    },
    dateFormat(classes, date) {
      let yesterday = new Date();
      let d1 = dateUtil.format(date, "isoDate");
      let d2 = dateUtil.format(
        yesterday.setDate(yesterday.getDate() - 1),
        "isoDate"
      );
      if (!classes.disabled) {
        classes.disabled = d1 === d2;
      }
      return classes;
    }
  }
};
</script>
