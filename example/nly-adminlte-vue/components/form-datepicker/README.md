# NlyFormDatepicker

> 日期选择器可以选择范围日期，单个日期，选择时间，以及渲染成其他任何组件

## 日期值的获取和格式化

### value

`value` 是日期选择器选择的时间，给 `date-range` 传值可以初始化日期选择器的初始值。

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

### locale-data 格式化默认显示时间

可以使用 `locale-data` 来设置输入框显示的数据格式，比如设置 `:locale-data = "{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"` 来使数据显示格式为 2020-01-01 08：30：22

`value` 是日期选择器选择的时间，给 `value` 传值可以初始化日期选择器的初始值。

```html
<nly-form-datepicker
  :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
  :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
/>

<!-- locale-data.name -->
<!-- date-picker.vue -->
```

`locale-data` 可以用来设置一些自定义配置，比如设置中文。

**注意**

- 这里有个 bug，如果星期的名称太长，比如 星期一 这样，会导致日历挤出 dropdown 的包裹，建议星期名称只设置一个字

- 这个 bug 暂时不会修复

```html
<template>
  <nly-form-datepicker
    :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
    :locale-data="localeData"
    show-week-numbers
    show-dropdowns
    :ranges="ranges"
  />
</template>

<script>
  export default {
    data() {
      return {
        localeData: {
          direction: 'ltr',
          format: 'mm/dd/yyyy',
          separator: ' - ',
          applyLabel: '确定',
          cancelLabel: '取消',
          weekLabel: '周',
          customRangeLabel: 'Custom Range',
          daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
          monthNames: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
          ],
          firstDay: 0,
        },
        ranges: false,
      }
    },
    mounted() {
      let today = new Date()
      today.setHours(0, 0, 0, 0)

      let yesterday = new Date()
      yesterday.setDate(today.getDate() - 1)
      yesterday.setHours(0, 0, 0, 0)
      let thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1)
      let thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0)
      this.ranges = {
        今天: [today, today],
        昨天: [yesterday, yesterday],
        本月: [thisMonthStart, thisMonthEnd],
        今年: [
          new Date(today.getFullYear(), 0, 1),
          new Date(today.getFullYear(), 11, 31),
        ],
        上个月: [
          new Date(today.getFullYear(), today.getMonth() - 1, 1),
          new Date(today.getFullYear(), today.getMonth(), 0),
        ],
      }
    },
  }
</script>
<!-- locale-data.name -->
<!-- date-picker.vue -->
```

### update 获取选择时间

不使用 `v-model` 指令，也可以通过 update 函数来获取日期选择器选择的时间, 默认获取的时间是 GMT 时间， 格式需要自己定义函数来修改

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      @update="update"
    />
    <p>
      <span>起始时间： {{startDate}}</span>
    </p>
    <p>
      <span>结束时间： {{endDate}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        startDate: null,
        endDate: null,
      }
    },
    methods: {
      update(value) {
        console.log(111)
        this.startDate = this.gmtFormat(value.startDate)
        this.endDate = this.gmtFormat(value.endDate)
      },
      gmtFormat(time) {
        let date = new Date(time)
        let Str =
          date.getFullYear() +
          '-' +
          (date.getMonth() + 1) +
          '-' +
          date.getDate() +
          ' ' +
          date.getHours() +
          ':' +
          date.getMinutes() +
          ':' +
          date.getSeconds()
        return Str
      },
    },
  }
</script>

<!-- locale-data.name -->
<!-- date-picker.vue -->
```

### 最小和最大时间限制

设置 `min-date` 和 `max-date` prop 可以限制日期选择器的 时间选择范围，超出这个范围的时间是无法选择的，且日历上也无法联动现实超出这个范围的时间

```html
<template>
  <div>
    <nly-form-datepicker
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

## 渲染输入框的一些设置

### prepend 和 append

`prepend` 和 `append` prop 可以设置前后显示文字，渲染成类似 icon 的效果

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      :prepend="prepend"
      :append="append"
    />
    <nly-form-group
      label="prepend 输入框前面图标"
      label-cols-xs="auto"
      class="mt-2"
    >
      <nly-form-input v-model="prepend" size="sm" />
    </nly-form-group>

    <nly-form-group label="append 输入框前面图标" label-cols-xs="auto">
      <nly-form-input v-model="append" size="sm" />
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        prepend: '',
        append: '',
      }
    },
  }
</script>

<!-- prepend and append .name -->
<!-- date-picker.vue -->
```

也可以使用 `prepend-html` 和 `append-html` prop 来设置输入框前后显示的内容。由于是 html 字符串，请谨慎使用

```html
<template>
  <nly-form-datepicker
    :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
    :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
    :prepend-html="prepend"
    :append-html="append"
  />
</template>

<script>
  export default {
    data() {
      return {
        prepend: '<b>w</b>',
        append: '<b>Q</b>',
      }
    },
  }
</script>

<!-- prepend-html and append-html .name -->
<!-- date-picker.vue -->
```

还可以使用 `prepend` 和 `append` 插槽插入其他嵌套元素

```html
<template>
  <nly-form-datepicker
    :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
    :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
  >
    <template v-slot:prepend>
      <nly-input-group-text>
        <nly-icon icon="nlyfont nly-icon-time" />
      </nly-input-group-text>
    </template>
    <template v-slot:append>
      <nly-dropdown text="Dropdown" variant="success">
        <nly-dropdown-item>Action A</nly-dropdown-item>
        <nly-dropdown-item>Action B</nly-dropdown-item>
      </nly-dropdown>
    </template>
  </nly-form-datepicker>
</template>

<!-- prepend-html and append-html .name -->
<!-- date-picker.vue -->
```

### 控制大小

`nly-form-datepicker` 提供一个 `size` prop 来控制默认渲染的输入框大小， 可选 `sm`, `md`, `lg`。

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      size="sm"
    >
    </nly-form-datepicker>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      size="md"
      class="mt-2"
    >
    </nly-form-datepicker>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      size="lg"
      class="mt-2"
    >
    </nly-form-datepicker>
  </div>
</template>

<!-- prepend-html and append-html .name -->
<!-- date-picker.vue -->
```

### valid 验证提示

`nly-form-datepicker` 提供一个 `valid` 和 `invalid-feedback` , `valid-feedback`, `waring-feedback` 来显示验证信息

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      prepend="@"
      append="!"
      invalid-feedback="invalid"
      valid-feedback="valid"
      warning-feedback="warning"
      :valid="valid"
    />
    <nly-form-group label="valid 表单状态" label-cols-xs="auto" class="mt-2">
      <nly-form-select v-model="valid" :options="validOptinos" />
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
  }
</script>

<!-- valid .name -->
<!-- date-picker.vue -->
```

## 日历的一些设置

- 使用 `opens` prop 来设置日历的位置, 可选 `center`, `left`, `right`, `inline`

- 使用 `single-date-picker` prop 来选择日期选择器的选择模式，分为单个日期选择和范围日期选择，设置 `single-date-picker` prop 为 `true` 为范围日期选择， `false` 为 单个日期选择

- 设置 `show-week-numbers` prop 为 `true` 来显示日历上的周数，设置为 `false` 不显示

- 设置 `time-picker` prop 为 `true` 来显示时间选择器

- 设置 `time-picker24-hour` prop 为 `true` 来显示 24 小时制时间显示器，必须设置 `time-picker` prop 为 `true` 才有效

- 设置 `show-dropdowns` prop 为 `true` 来显示月份选择下拉框和年份快速输入

- 设置 `auto-apply` prop 为 `true` 来设置自动提交选择的时间

- 设置 `ranges` prop 为 `true` 来显示左侧快速选择时间

- 设置 `always-show-calendars` prop 为 `true` 来显示日历

- 设置 `append-to-body` prop 为 `true` 来把日历渲染到 body 尾部，不然渲染在输入框下面, **注意 `append-to-body` 为 `false` 时可能会影响布局，如果影响布局， 请设置 `append-to-body` 为 `true`**

- 设置 `close-on-esc` prop 为 `true` 来支持键盘按键 <kbd>ESC</kbd> 退出日历

- 设置 `linked-calendars` prop 为 `true` 来使得两个日历联动

```html
<template>
  <div>
    <nly-form-datepicker
      :opens="opens"
      :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
      :single-date-picker="singleDatePicker"
      :time-picker="timePicker"
      :time-picker24-hour="timePicker24Hour"
      :show-week-numbers="showWeekNumbers"
      :show-dropdowns="showDropdowns"
      :auto-apply="autoApply"
      v-model="dateRange"
      :ranges="show_ranges ? undefined : false"
      :linked-calendars="linkedCalendars"
      :always-show--calendars="alwaysShowCalendars"
      :append-to-body="appendToBody"
      :close-on-esc="closeOnEsc"
    />
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
          <option :value="true">single 单个日期</option>
          <option :value="false">range 范围日期</option>
          <option :value="false">默认</option>
        </select>
        <small class="form-text text-muted"
          >单个日期只能选择一个日期，范围日期必须选择两个日期</small
        >
      </div>
    </div>
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
</template>

<script>
  export default {
    data() {
      return {
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
        opens: 'center',
      }
    },
  }
</script>

<!-- calendars .name -->
<!-- date-picker.vue -->
```

## 禁用日期选择器

使用 `disabled` prop 可以禁用日历选择时间，这时候点击并不会显示日期选择器

```html
<nly-form-datepicker
  :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
  :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
  disabled
/>

<!-- disabled.name -->
<!-- date-picker.vue -->
```

可以使用 `date-format` prop 接受有个函数来设置禁止选择日期。给 `date-format` 函数的第一个参数 classes 添加一个 disabled 属性

```html
<template>
  <nly-form-datepicker
    :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
    :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd HH:MM:ss' }"
    :date-format="dateFormat"
  />
</template>

<script>
  export default {
    methods: {
      dateFormat(classes, date) {
        if (!classes.disabled) {
          classes.disabled = date.getTime() < new Date()
        }
        return classes
      },
    },
  }
</script>

<!-- dateFormat disabled.name -->
<!-- date-picker.vue -->
```

## 使用插槽

### input 插槽

我们可以使用 input 插槽来使默认渲染的 input 输入框变成其他想渲染的任何组件。

**注意**

- 如果影响布局， 请设置 `append-to-body` 为 `true`

- 需要给渲染的组件绑定 `click` 事件为 `clickPicker`

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :append-to-body="true"
    >
      <template #input="picker" style="min-width: 350px;">
        <nly-form-input
          :value='picker.startDate + "-" +  picker.endDate'
          @click="picker.clickPicker"
        />
      </template>
    </nly-form-datepicker>

    <nly-input-group>
      <nly-input :value="inputDate" />
      <template v-slot:append>
        <nly-input-group-text>
          <nly-form-datepicker v-model="dateRange" :append-to-body="true">
            <template #input="picker">
              <nly-icon
                icon="far fa-calendar-alt"
                @click="picker.clickPicker"
              />
            </template>
          </nly-form-datepicker>
        </nly-input-group-text>
      </template>
    </nly-input-group>
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
    computed: {
      inputDate() {
        const locale = this.dateRange.startDate + ' - ' + this.dateRange.endDate
        return locale
      },
    },
  }
</script>
<!-- input 插槽.name -->
<!-- date-picker.vue -->
```

### header 插槽

我们可以使用 header 插槽来给日期选择器添加 header

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :append-to-body="true"
    >
      <div
        slot="header"
        slot-scope="header"
        :style='{"background-color": "#aaa", padding: "0.5rem", color: "white",display: "flex", "align-items": "center","justify-content": "space-between"}'
      >
        <h3>Calendar header</h3>
        <span v-if="header.in_selection"> - in selection</span>
      </div>
    </nly-form-datepicker>
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
    computed: {
      inputDate() {
        const locale = this.dateRange.startDate + ' - ' + this.dateRange.endDate
        return locale
      },
    },
  }
</script>
<!-- header 插槽.name -->
<!-- date-picker.vue -->
```

### ranges 插槽

我们可以使用 ranges 插槽来自定义 ranges 的内容

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :append-to-body="true"
    >
      <template #ranges="ranges">
        <div class="ranges">
          <ul>
            <li
              v-for="(range, name) in ranges.ranges"
              :key="name"
              @click="ranges.clickRange(range)"
            >
              <b>{{name}}</b>
              <small class="text-muted"
                >{{range[0].toDateString()}} -
                {{range[1].toDateString()}}</small
              >
            </li>
          </ul>
        </div>
      </template>
    </nly-form-datepicker>
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
    computed: {
      inputDate() {
        const locale = this.dateRange.startDate + ' - ' + this.dateRange.endDate
        return locale
      },
    },
  }
</script>
<!-- ranges 插槽.name -->
<!-- date-picker.vue -->
```

### footer 插槽

我们可以使用 footer 插槽来自定义 foorer 的内容

```html
<template>
  <div>
    <nly-form-datepicker
      :value='{
          startDate: "2019-12-10",
          endDate: "2019-12-20"
        }'
      :append-to-body="true"
    >
      <div
        slot="footer"
        slot-scope="data"
        :style='{"background-color": "#aaa", padding: "0.5rem", color: "white",display: "flex", "align-items": "center","justify-content": "space-between"}'
      >
        <div><b class="text-black">Calendar footer</b> {{data.rangeText}}</div>
        <div style="margin-left: auto">
          <a
            @click="data.clickApply"
            v-if="!data.in_selection"
            class="btn btn-primary btn-sm"
            >Choose current</a
          >
        </div>
      </div>
    </nly-form-datepicker>
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
    computed: {
      inputDate() {
        const locale = this.dateRange.startDate + ' - ' + this.dateRange.endDate
        return locale
      },
    },
  }
</script>
<!-- footer 插槽.name -->
<!-- date-picker.vue -->
```

## 可以在其他任何地方打开日期选择器

使用 `this.$refs.pickerRefName.togglePicker(true/false)` 可以在其他元素上点击打开日期选择器

## 完整 demo

这是一个完整的 demo ，差不多包括所有 prop 值的切换

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