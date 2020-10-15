# NlyFormDatepicker

> 日期选择器可以选择范围日期，单个日期，选择时间

```html
<template>
  <nly-container>
    <nly-row>
      <nly-col>
        <nly-form-group
          label="data picker"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <nly-form-datepicker
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
            :dateFormat="setDateFormat"
            :linkedCalendars="linkedCalendars"
            :always-show-calendars="false"
            :alwaysShowCalendars="alwaysShowCalendars"
            :append-to-body="appendToBody"
            :closeOnEsc="closeOnEsc"
            :prepend="prepend"
            :append="append"
            :valid="valid"
            invalid-feedback="我是invalid"
            valid-feedback="我是valid"
            warning-feedback="我是warning"
            size="sm"
          />
        </nly-form-group>
      </nly-col>
    </nly-row>
    <div class="form-row pt-3 bg-light">
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label" for="startDate"
            >startDate 开始日期</label
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
          <label class="col-sm-4 col-form-label" for="endDate"
            >endDate 结束日期</label
          >
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
          <label class="col-sm-4 col-form-label" for="minDate"
            >minDate 日历可选择最小日期</label
          >
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
          <label class="col-sm-4 col-form-label" for="maxDate"
            >maxDate 日历可选择最大日期</label
          >
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
        <label class="form-check-label">left 左侧</label>
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
        <label class="form-check-label">center 居中</label>
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
        <label class="form-check-label">right 右侧</label>
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
        <label class="form-check-label">inline 垂直</label>
      </div>
      <small class="form-text text-muted"
        >日历布局，可选左侧，居中，右侧，垂直，当为垂直的时候，无法关闭
      </small>
    </div>
    <div>
      <div class="form-check form-inline py-3">
        <label class="form-check-label" for="singleDatePicker">
          single-date-picker 日历选择模式
        </label>
        <select
          v-model="singleDatePicker"
          id="singleDatePicker"
          class="form-control ml-3"
        >
          <option>single 单个日期</option>
          <option>range 范围日期</option>
          <option :value="false">默认</option>
        </select>
        <small class="form-text text-muted"
          >单个日期只能选择一个日期，范围日期必须选择两个日期</small
        >
      </div>

      <!-- prepend="@@"
            append="!"
            valid="invalid"
            invalid-feedback="我是invalid"
            valid-feedback="我是valid"
            warning-feedback="我是warning"
            size="sm" -->

      <nly-form-group label="prepend 输入框前面图标" label-cols-xs="auto">
        <nly-form-input v-model="prepend" size="sm" />
      </nly-form-group>

      <nly-form-group label="append 输入框前面图标" label-cols-xs="auto">
        <nly-form-input v-model="append" size="sm" />
      </nly-form-group>

      <nly-form-group label="valid 表单状态" label-cols-xs="auto">
        <nly-form-select v-model="valid" :options="validOptinos" />
      </nly-form-group>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="showWeekNumbers"
          v-model="showWeekNumbers"
        />
        <label class="form-check-label" for="showWeekNumbers">
          show-week-numbers 显示周数
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
          time-picker 显示时间选择器
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
          time-picker24-hour 24小时制时间选择器
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
          show-dropdowns 显示选择月份和输入年份
        </label>
        <small class="form-text text-muted">
          允许 显示选择月份和输入年份
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
          auto-apply 自动提交
        </label>
        <small class="form-text text-muted">
          选择完日期之后，会自动提交选择的时间，并隐藏停止，提交按钮
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
          ranges 显示左侧最近时间
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
          always-show-calendars 显示日历
        </label>
        <small class="form-text text-muted">
          设置为false 不显示日历，如果设置了rangs显示左侧最近时间，这个选项无效
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
          append-to-body 把日期选择器渲染到 body
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
          close-on-esc 按esc键退出
        </label>
      </div>
    </div>
  </nly-container>
</template>

<script>
  export default {
    name: '',
    filters: {
      date(value) {
        if (!value) return ''

        let options = { year: 'numeric', month: 'long', day: 'numeric' }
        return Intl.DateTimeFormat('en-US', options).format(value)
      },
    },
    data() {
      //                    :locale-data="{ daysOfWeek: [ 'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ] }"
      return {
        sss: '',
        opens: 'center',
        minDate: '2019-05-02 04:00:00',
        maxDate: '2020-12-26 14:00:00',
        // minDate: '',
        // maxDate: '',
        dateRange: {
          startDate: '2019-12-10',
          endDate: '2019-12-20',
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
        closeOnEsc: true,
        dateUtil: undefined,
        dateFormat: undefined,
        prepend: '@',
        append: '!',
        valid: 'novalid',
        validOptinos: [
          { value: null, text: 'Please select an option', disabled: true },
          { value: 'novalid', text: '不显示 feedback' },
          { value: 'invalid', text: '显示invalid feedback' },
          { value: 'valid', text: '显示 valid feedback' },
          { value: 'warning', text: '显示 warning feedback' },
        ],
      }
    },
    mounted() {
      this.dateFormat = (function() {
        var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g
        var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
        var timezoneClip = /[^-+\dA-Z]/g

        // Regexes and supporting functions are cached through closure
        return function(date, mask, utc, gmt) {
          // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
          if (
            arguments.length === 1 &&
            this.kindOf(date) === 'string' &&
            !/\d/.test(date)
          ) {
            mask = date
            date = undefined
          }

          date = date || new Date()

          if (!(date instanceof Date)) {
            date = new Date(date)
          }

          if (isNaN(date)) {
            throw TypeError('Invalid date')
          }

          mask = String(
            this.dateFormat.masks[mask] ||
              mask ||
              this.dateFormat.masks['default']
          )

          // Allow setting the utc/gmt argument via the mask
          var maskSlice = mask.slice(0, 4)
          if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
            mask = mask.slice(4)
            utc = true
            if (maskSlice === 'GMT:') {
              gmt = true
            }
          }

          var _ = utc ? 'getUTC' : 'get'
          var d = date[_ + 'Date']()
          var D = date[_ + 'Day']()
          var m = date[_ + 'Month']()
          var y = date[_ + 'FullYear']()
          var H = date[_ + 'Hours']()
          var M = date[_ + 'Minutes']()
          var s = date[_ + 'Seconds']()
          var L = date[_ + 'Milliseconds']()
          var o = utc ? 0 : date.getTimezoneOffset()
          var W = this.getWeek(date)
          var N = this.getDayOfWeek(date)
          var flags = {
            d: d,
            dd: this.pad(d),
            ddd: this.dateFormat.i18n.dayNames[D],
            dddd: this.dateFormat.i18n.dayNames[D + 7],
            m: m + 1,
            mm: this.pad(m + 1),
            mmm: this.dateFormat.i18n.monthNames[m],
            mmmm: this.dateFormat.i18n.monthNames[m + 12],
            yy: String(y).slice(2),
            yyyy: y,
            h: H % 12 || 12,
            hh: this.pad(H % 12 || 12),
            H: H,
            HH: this.pad(H),
            M: M,
            MM: this.pad(M),
            s: s,
            ss: this.pad(s),
            l: this.pad(L, 3),
            L: this.pad(Math.round(L / 10)),
            t:
              H < 12
                ? this.dateFormat.i18n.timeNames[0]
                : this.dateFormat.i18n.timeNames[1],
            tt:
              H < 12
                ? this.dateFormat.i18n.timeNames[2]
                : this.dateFormat.i18n.timeNames[3],
            T:
              H < 12
                ? this.dateFormat.i18n.timeNames[4]
                : this.dateFormat.i18n.timeNames[5],
            TT:
              H < 12
                ? this.dateFormat.i18n.timeNames[6]
                : this.dateFormat.i18n.timeNames[7],
            Z: gmt
              ? 'GMT'
              : utc
              ? 'UTC'
              : (String(date).match(timezone) || [''])
                  .pop()
                  .replace(timezoneClip, ''),
            o:
              (o > 0 ? '-' : '+') +
              this.pad(
                Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60),
                4
              ),
            S: ['th', 'st', 'nd', 'rd'][
              d % 10 > 3 ? 0 : (((d % 100) - (d % 10) != 10) * d) % 10
            ],
            W: W,
            N: N,
          }

          return mask.replace(token, function(match) {
            if (match in flags) {
              return flags[match]
            }
            return match.slice(1, match.length - 1)
          })
        }
      })()

      this.dateFormat.masks = {
        default: 'ddd mmm dd yyyy HH:MM:ss',
        shortDate: 'm/d/yy',
        mediumDate: 'mmm d, yyyy',
        longDate: 'mmmm d, yyyy',
        fullDate: 'dddd, mmmm d, yyyy',
        shortTime: 'h:MM TT',
        mediumTime: 'h:MM:ss TT',
        longTime: 'h:MM:ss TT Z',
        isoDate: 'yyyy-mm-dd',
        isoTime: 'HH:MM:ss',
        isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
        expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z',
      }

      // Internationalization strings
      this.dateFormat.i18n = {
        dayNames: [
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        monthNames: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
      }

      this.dateUtil = {
        isSame: (date1, date2, granularity) => {
          let dt1 = new Date(date1)
          let dt2 = new Date(date2)
          if (granularity === 'date') {
            dt1.setHours(0, 0, 0, 0)
            dt2.setHours(0, 0, 0, 0)
          }
          return dt1.getTime() === dt2.getTime()
        },
        daysInMonth: (year, month) => {
          return new Date(year, month, 0).getDate()
        },
        weekNumber: (date) => {
          return this.getWeek(date)
        },
        format: (date, mask) => {
          return this.dateFormat(date, mask)
        },
        nextMonth: (date) => {
          let nextMonthDate = new Date(date.getTime())
          nextMonthDate.setDate(1)
          nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)
          return nextMonthDate
        },
        prevMonth: (date) => {
          let prevMonthDate = new Date(date.getTime())
          prevMonthDate.setDate(1)
          prevMonthDate.setMonth(prevMonthDate.getMonth() - 1)
          return prevMonthDate
        },
        validateDateRange: (newDate, min, max) => {
          let max_date = new Date(max)
          let min_date = new Date(min)

          if (max && newDate.getTime() > max_date.getTime()) {
            return max_date
          }

          if (min && newDate.getTime() < min_date.getTime()) {
            return min_date
          }

          return newDate
        },
        localeData: (options) => {
          let default_locale = {
            direction: 'ltr',
            format: 'mm/dd/yyyy',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: this.dateFormat.i18n.dayNames
              .slice(0, 7)
              .map((d) => d.substring(0, 2)),
            monthNames: this.dateFormat.i18n.monthNames.slice(0, 12),
            firstDay: 0,
          }

          return { ...default_locale, ...options }
        },
        yearMonth: (date) => {
          let month = date.getMonth() + 1
          return date.getFullYear() + (month < 10 ? '0' : '') + month
        },
        isValidDate: (d) => {
          return d instanceof Date && !isNaN(d)
        },
      }
    },
    methods: {
      pad(val, len) {
        val = String(val)
        len = len || 2
        while (val.length < len) {
          val = '0' + val
        }
        return val
      },
      getWeek(date) {
        var targetThursday = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate()
        )

        targetThursday.setDate(
          targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3
        )

        var firstThursday = new Date(targetThursday.getFullYear(), 0, 4)

        firstThursday.setDate(
          firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3
        )

        var ds =
          targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset()
        targetThursday.setHours(targetThursday.getHours() - ds)

        var weekDiff = (targetThursday - firstThursday) / (86400000 * 7)
        return 1 + Math.floor(weekDiff)
      },
      updateValues(values) {
        this.dateRange.startDate = this.dateUtil.format(
          values.startDate,
          'yyyy-mm-dd HH:MM:ss'
        )
        this.dateRange.endDate = this.dateUtil.format(
          values.endDate,
          'yyyy-mm-dd HH:MM:ss'
        )
      },
      getDayOfWeek(date) {
        var dow = date.getDay()
        if (dow === 0) {
          dow = 7
        }
        return dow
      },
      kindOf(val) {
        if (val === null) {
          return 'null'
        }

        if (val === undefined) {
          return 'undefined'
        }

        if (typeof val !== 'object') {
          return typeof val
        }

        if (Array.isArray(val)) {
          return 'array'
        }

        return {}.toString
          .call(val)
          .slice(8, -1)
          .toLowerCase()
      },
      checkOpen(open) {
        console.log('event: open', open)
      },
      setDateFormat(classes, date) {
        let yesterday = new Date()
        let d1 = this.dateUtil.format(date, 'isoDate')
        let d2 = this.dateUtil.format(
          yesterday.setDate(yesterday.getDate() - 1),
          'isoDate'
        )
        if (!classes.disabled) {
          classes.disabled = d1 === d2
        }
        return classes
      },
    },
  }
</script>

<!-- demo.name -->
<!-- date-picker.vue -->
```

## date

### value

`value` 是 日期选择器选择的时间，给 `date-range` 传值可以初始化日期选择器的初始值。

```html
<nly-form-datepicker
  :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
/>

<!-- value.name -->
<!-- date-picker.vue -->
```

`value` 是可以双向绑定数据的，即使用 `v-model` 指令来绑定, 这样可以设定日期选择器的初始化，也能获取到他的修改值

```html
<template>
  <div>
    <nly-form-datepicker v-model="dateRange" />
    <nly-form-group label="起始时间">
      <nly-form-input v-model="dateRange.startDate" type="text" />
    </nly-form-group>
    <nly-form-group label="结束时间">
      <nly-form-input v-model="dateRange.endDate" type="text" />
    </nly-form-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dateRange: {
          startDate: '2019-12-10',
          endDate: '2019-12-20',
        },
      }
    },
  }
</script>

<!-- v-model value.name -->
<!-- date-picker.vue -->
```

**注意**

- 默认渲染下， 不支持从日期选择器中输入日期来调整日历上的时间

### 最小和最大时间限制

设置 `min-date` 和 `max-date` prop 可以限制日期选择器的 时间选择范围，超出这个范围的时间是无法选择的，且日历上也无法联动现实超出这个范围的时间

```html
<template>
  <div>
    <nly-form-datepicker
      ref="picker"
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      :min-date="minDate"
      :max-date="maxDate"
      v-model="dateRange"
      show-dropdowns
    />
    
    <nly-form-group label="起始时间">
      <nly-form-input v-model="dateRange.startDate" type="text" />
    </nly-form-group>
    <nly-form-group label="结束时间">
      <nly-form-input v-model="dateRange.endDate" type="text" />
    </nly-form-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dateRange: {
          startDate: '2019-12-10',
          endDate: '2019-12-20',
        },
        minDate: '2019-5-1 04:00:00',
        maxDate: '2021-1-1 04:00:00',
      }
    },
  }
</script>

<!-- min & max date.name -->
<!-- date-picker.vue -->
```
