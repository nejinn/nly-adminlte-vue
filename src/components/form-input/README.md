# Form Input

> input 输入框，支出设置类型: text, password, email, number, url, tel, search, range, color, date, time, datetime, datetime-local , month, week

```html
<template>
  <div>
    <nly-form-input v-model="text" placeholder="姓名"></nly-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      }
    },
  }
</script>

<!-- v-model.name -->
<!-- nly-from-input.vue -->
```

# 输入框类型

`nly-form-input` 默认的类型为 `text`。你可以设置 prop `type` 为 HTML5 浏览器所支持的类型来改变 `nly-form-input` 的类型。 可选类型为： text, password, email, number, url, tel, search, range, color, date, time, datetime, datetime-local , month, week

```html
<template>
  <nly-form-group :label="label">
    <nly-form-input v-model="value" :type="type" />
    <select class="form-control" v-model="type">
      <option>text</option>
      <option>password</option>
      <option>email</option>
      <option>number</option>
      <option>url</option>
      <option>tel</option>
      <option>search</option>
      <option>range</option>
      <option>color</option>
      <option>date</option>
      <option>time</option>
      <option>datetime</option>
      <option>datetime-local</option>
      <option>month</option>
      <option>week</option>
    </select>
  </nly-form-group>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        type: 'text',
      }
    },
    computed: {
      label() {
        return `类型为 ${this.type}, 值为 ${this.value}`
      },
    },
  }
</script>

<!-- type.name -->
<!-- nly-from-input.vue -->
```

**注意**

- 并不是所有的浏览器都支持所有的 `type` 类型，不同的浏览器之间同一个 `type` 类型渲染出来的实际效果也可能不一样， 详细情况清查 [caniuse.com](https://caniuse.com/#search=input)

- 如果浏览器不支持 `type` 所选类型，那么会渲染成一个 `text` 类型

- 我（也就是作者），并没有测试哪些浏览器支持哪些类型， 第一个是因为浏览器太多了，第二是因为我是 **菜鸡**， 欢迎大佬进行测试

- Input `datetime-local` 对象是 HTML5 新增的，这玩意我也不明白怎么玩，谨慎使用

- `datatime` 由于 Chrome 以及 Safari 的支持问题， 请慎用， 尽量使用 `data` 和 `time` 2 种类型分别获取 data 和 time

- `data` 和 `time` 是渲染成浏览器自带的式样，不是时间日期选择器。如果需要使用对应的选择器，请查看对应的组件

- 不管 `type` 设置什么，value 值的类型始终是一个 `String`，当然 `number`, `range` 除外（也有能是字符串，需要转换，我现在确定了）

- `v-model.lazy` 不支持使用的 `nly-form-input`， 如果需要，请使用 prop `lazy`

- `v-model` modifiers， 即 Vue `v-model` 的修饰符，`.number` 和 `.trim` 使用在 `nly-form-input` 上可能会造成鼠标跳转，这是 Vue 自身的问题, 如果需要对应功能，请使用 prop `number` 或 `trim。` 如果哪个大佬发现怎么解决这个问题，请提交一个 [`issue`](https://github.com/nejinn/nly-adminlte-vue/issues)

- 旧版本的 Firefox 可能不支持 `type` 为 `range` 下的 `readonly`。 即同时设置 type=range, :readonly=true。

- 如果设置的类型不支持 `min`, `max` 或者 `step`。`nly-form-input` 会忽略这些 prop

- 浏览器兼容性问题还有一大群，我不讲了， 使用这个组件的时候请注意

**关于联想输入和 IME**

联想输入时，除非确定了选择对应的值，不然 `v-model` 不会更新 value 值。

`nly-form-input` 是对 IME 进行了阻止的，请注意。 如果不明白什么是 IME，请 百度 或者 谷歌

## `range` 类型

`range` 类型的 `nly-form-input` 在浏览器中，渲染出来，背景和游标都在同一轨道上。

`range` 类型的 `nly-form-input` 默认的范围为 0-100， 即 `min=0`，`max=100`。您可以设置 `min` 和 `max` 来控范围

`range` 返回的 value 可能是一个字符串， 您可能需要 `Number(value)`, `parseInt(value, 10)`, `parseFloat(value)` 进行转换。 当然这只是可能，请在使用的时候注意。或者使用 prop `number`

```html
<template>
  <div>
    <label for="range-1">range default</label>
    <nly-form-input id="range-1" v-model="value" type="range"></nly-form-input>
    <div class="mt-2">Value: {{ value }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '2',
      }
    },
  }
</script>

<!-- range.name -->
<!-- nly-from-input.vue -->
```

### `min` 和 `max`

设置 `min` 和 `max` 来控范围， 如果 `value` 初始值 不在范围内， 当初始值小于 `min`，游标在最左边， 当初始值大于 `max`， 游标在最右边。

```html
<template>
  <div>
    <label for="range-2">range default</label>
    <nly-form-input
      id="range-2"
      v-model="value"
      type="range"
      min="20"
      max="50"
    ></nly-form-input>
    <div class="mt-2">Value: {{ value }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '35',
      }
    },
  }
</script>

<!-- min-max.name -->
<!-- nly-from-input.vue -->
```

### `step` 数据间隔

`step` 是来设置每次滚动的最小单位，即每次最小增加或者减少的值。

````html
```html
<template>
  <div>
    <label for="range-1">range default</label>
    <nly-form-input
      id="range-1"
      v-model="value"
      type="range"
      step="10"
    ></nly-form-input>
    <div class="mt-2">Value: {{ value }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '50',
      }
    },
  }
</script>

<!-- step.name -->
<!-- nly-from-input.vue -->
````

### `variant` 颜色

默认的 `range` 并没有 `variant` css 类. 但是会渲染成 `primary` 颜色。 variant 可选 primary, secondary, success, info, warning, danger, light, dark, lightblue, navy, olive, lime, fuchsia, maroon, blue, indigo, purple, pink, red, orange, yellow, green, teal, cyan, white, gray, graydark

```html
<template>
  <nly-form-input type="range" :variant="variant" v-model="variantNum" />
</template>

<script>
  export default {
    data() {
      return {
        variantNum: '50',
      }
    },
    computed: {
      variant() {
        return this.variantNum >= 0 && this.variantNum < 10
          ? 'secondary'
          : this.variantNum >= 10 && this.variantNum < 20
          ? 'success'
          : this.variantNum >= 10 && this.variantNum < 20
          ? 'info'
          : this.variantNum >= 20 && this.variantNum < 30
          ? 'warning'
          : this.variantNum >= 30 && this.variantNum < 40
          ? 'danger'
          : this.variantNum >= 40 && this.variantNum < 50
          ? 'dark'
          : this.variantNum >= 50 && this.variantNum < 60
          ? 'lightblue'
          : this.variantNum >= 60 && this.variantNum < 70
          ? 'navy'
          : this.variantNum >= 70 && this.variantNum < 80
          ? 'olive'
          : this.variantNum >= 80 && this.variantNum < 90
          ? 'fuchsia'
          : this.variantNum >= 90 && this.variantNum < 100
          ? 'maroon'
          : 'indigo'
      },
    },
  }
</script>

<!-- variant.name -->
<!-- nly-from-input.vue -->
```

## 尺寸

`nly-form-input` 的尺寸可以通过 `size` 和 `col` 相关一类 prop 来控制。

### `size` 大小

可以用 `size` 来控制 `nly-form-input` 的大小。 可选 `sm`, `lg`

```html
<div>
  <nly-form-group
    label-cols-xs="4"
    label-cols-lg="2"
    label-size="sm"
    label="Small"
    label-for="input-sm"
  >
    <nly-form-input id="input-sm" size="sm"></nly-form-input>
  </nly-form-group>

  <nly-form-group
    label-cols-xs="4"
    label-cols-lg="2"
    label="Default"
    label-for="input-default"
  >
    <nly-form-input id="input-default"></nly-form-input>
  </nly-form-group>

  <nly-form-group
    label-cols-xs="4"
    label-cols-lg="2"
    label-size="lg"
    label="Large"
    label-for="input-lg"
  >
    <nly-form-input id="input-lg" size="lg"></nly-form-input>
  </nly-form-group>
</div>

<!-- size.name -->
<!-- nly-form-input.vue -->
```

**注意**

`range` 类型时，设置 `size` 是无效的， 除非将其放到具有 `size` 的 `nly-input-group` 组件中

### 宽度，顺序，偏移

`nly-form-input` 可用如下 `col` prop 来设置宽度， 偏移， 顺序

| prop      | 描述                                                                     |
| --------- | ------------------------------------------------------------------------ |
| col       | 在没有其他 props 的情况下, 所有列等宽, 放在 class='row'的元素下有效      |
| xs        | 在 XS 及以上断点的宽度, 可选 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto |
| sm        | 在 SM 及以上断点的宽度, 可选 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto |
| md        | 在 MD 及以上断点的宽度, 可选 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto |
| lg        | 在 LG 及以上断点的宽度, 可选 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto |
| xl        | 在 XL 及以上断点的宽度, 可选 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto |
| offset-xs | 在 XS 及以上断点的偏移量, 可选 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11      |
| offset-sm | 在 SM 及以上断点的偏移量, 可选 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11      |
| offset-md | 在 MD 及以上断点的偏移量, 可选 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11      |
| offset-lg | 在 LG 及以上断点的偏移量, 可选 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11      |
| offset-xl | 在 XL 及以上断点的偏移量, 可选 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11      |
| order-xs  | 在 XS 及以上断点的排序, 可选 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12    |
| order-sm  | 在 SM 及以上断点的排序, 可选 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12    |
| order-md  | 在 MD 及以上断点的排序, 可选 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12       |
| order-lg  | 在 LG 及以上断点的排序, 可选 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12       |
| order-xl  | 在 XL 及以上断点的排序, 可选 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12       |

```html
<nly-row>
  <nly-form-input xs="7" md="4" lg="6" placeholder="xs='5' sm='4' md='3'" />
  <nly-form-input xs="4" md="4" lg="2" placeholder="xs='4' sm='3' md='5' " />
  <nly-form-input xs="1" md="4" lg="4" placeholder="xs='3' sm='5' md='4'" />
</nly-row>

<!-- 宽度.name -->
<!-- nly-form-input.vue -->
```

```html
<nly-row>
  <nly-form-input
    order-xs="5"
    order-sm="4"
    order-md="3"
    col
    placeholder="order-xs='5' order-sm='4' order-md='3'"
  />
  <nly-form-input
    col
    order-xs="4"
    order-sm="3"
    order-md="5"
    placeholder="order-xs='4' order-sm='3' order-md='5' "
  />
  <nly-form-input
    col
    order-xs="3"
    order-sm="5"
    order-md="4"
    placeholder="order-xs='3' order-sm='5' order-md='4'"
  />
</nly-row>

<!-- 顺序.name -->
<!-- nly-form-input.vue -->
```

```html
<nly-row>
  <nly-form-input
    offset-xs="5"
    offset-sm="4"
    offset-md="3"
    col
    placeholder="offset-xs='5' offset-sm='4' offset-md='3'"
  />
</nly-row>

<!-- 偏移.name -->
<!-- nly-form-input.vue -->
```

## 输入框状态

`Adminlte3` 的大部分表单组件都有状态 `invalid`, `valid`, `warning`, `loading`, `novalid`

- `invalid` : 无效状态

- `valid` : 有效状态

- `warning` : 警告状态

- `loading` : 加载状态

- `novalid` : 无状态

```html
<div>
  <nly-form-group label-cols-xs="3" label="invalid">
    <nly-form-input valid="invalid" />
  </nly-form-group>
  <nly-form-group label-cols-xs="3" label="valid">
    <nly-form-input valid="valid" />
  </nly-form-group>
  <nly-form-group label-cols-xs="3" label="warning">
    <nly-form-input valid="warning" />
  </nly-form-group>
  <nly-form-group label-cols-xs="3" label="loading">
    <nly-form-input valid="loading" />
  </nly-form-group>
</div>

<!-- valid.name -->
<!-- nly-form-input.vue -->
```

可以配合 `nly-form-feedback` 一起使用

```html
<div>
  <nly-form-input valid="valid" />
  <nly-form-feedback> 我是valid</nly-form-feedback>
  <nly-form-input valid="invalid" />
  <nly-form-feedback state="invalid"> 我是invalid</nly-form-feedback>
  <nly-form-input valid="warning" />
  <nly-form-feedback state="warning"> 我是warning</nly-form-feedback>
</div>

<!-- valid.name -->
<!-- nly-form-input.vue -->
```

配合 `nly-form-group` 使用

```html
<template>
  <nly-row>
    <nly-col>
      <nly-form-group
        id="fieldset-1"
        description="请输入姓名"
        label="姓名"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :valid-feedback="validFeedback"
        :warning-feedback="warningFeedback"
        :valid="state"
      >
        <nly-form-input
          id="input-1"
          v-model="name"
          :valid="state"
          trim
        ></nly-form-input>
      </nly-form-group>
    </nly-col>
  </nly-row>
</template>

<script>
  export default {
    computed: {
      state() {
        return this.name.length >= 8
          ? 'valid'
          : this.name.length < 4
          ? 'invalid'
          : 'warning'
      },
      invalidFeedback() {
        if (this.name.length > 4) {
          return ''
        } else if (this.name.length > 0) {
          return '请输入至少4个字符串'
        } else {
          return '内容不能为空'
        }
      },
      validFeedback() {
        return this.state === 'valid' ? 'ok，完美' : ''
      },
      warningFeedback() {
        return this.state === 'warning' ? '还是差一点点' : ''
      },
    },
    data() {
      return {
        name: '',
      }
    },
  }
</script>

<!-- nly-form-group.name -->
<!-- nly-form-input.vue -->
```

## `formatter` 格式化

您可以通过 prop `formatter` 来对 `nly-form-input` 的 `value` 进行格式化。 `formatter` 必须传入一个函数。 `formatter` 会在 `input` 框的 `input` 和 `change` 事件中触发。 您可以设置 `lazy-formatter` 来控制惰性格式化，设置了 `lazy-formatter` 之后，会在 `nly-form-input` 失去焦点才进行格式化。 即设置了 `lazy-formatter` 之后，`formatter` 会在 blur 事件中触发

`formatter` 函数接受 2 个参数， 一个是 value， 一个是 事件对象（如果写了一个格式化的函数，可以当做第二个参数）。

`formatter` 函数 必须是返回一个 `String` 类型数据

```html
<template>
  <div>
    <nly-form-group
      class="mb-0"
      label="formatter 值，在input事件中触发"
      label-for="input-formatter"
      description="直接格式化"
    >
      <nly-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="姓名"
        :formatter="formatter"
      ></nly-form-input>
    </nly-form-group>
    <p><b>Value:</b> {{ text1 }}</p>

    <nly-form-group
      class="mb-0"
      label="lazy formatter 值， 在blur时间中触发"
      label-for="input-lazy"
      description="惰性格式化"
    >
      <nly-form-input
        id="input-lazy"
        v-model="text2"
        placeholder="姓名"
        lazy-formatter
        :formatter="formatter"
      ></nly-form-input>
    </nly-form-group>
    <p class="mb-0"><b>Value:</b> {{ text2 }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text1: '',
        text2: '',
      }
    },
    methods: {
      formatter(value) {
        return value.toLowerCase()
      },
    },
  }
</script>

<!-- formatter.name -->
<!-- nly-form-input.vue -->
```

## `readonly` 只读模式

设置 `readonly` 使得 `nly-form-input` 变成只读模式

```html
<nly-form-input placeholder="default" readonly />

<!-- readonly.name -->
<!-- nly-form-input.vue -->
```

## `disabled` 禁用模式

设置 `disabled` 使得 `nly-form-input` 变成禁用模式

```html
<nly-form-input disabled />

<!-- disabled.name -->
<!-- nly-form-input.vue -->
```

## `plaintext` 纯文本模式

设置 `plaintext` 使得 `nly-form-input` 变成纯文本模式

```html
<nly-form-input plaintext placeholder="default" />

<!-- plaintext.name -->
<!-- nly-form-input.vue -->
```

## `no-wheel` 禁止鼠标滚动修改数字

在有些浏览器上可以设置 prop `no-wheel` 禁止鼠标滚动修改数字

## Datalist

使用 `list` 可以设置对应的 datalist

```html
<div>
  <nly-form-input type="text" list="url_list" />
  <datalist id="url_list">
    <option label="W3Schools" value="http://www.w3schools.com" />
    <option label="Google" value="http://www.google.com" />
    <option label="Microsoft" value="http://www.microsoft.com" />
  </datalist>
</div>

<!-- Datalist.name -->
<!-- nly-form-input.vue -->
```

Datalists 不支持 `range`, `passowrd`, `color`

并不是所有的浏览器都支持持 datalist，请注意

## `debounce` 防抖

`debounce` 设置为任何大于 0 的数字， 注意在这 1000 为 1 秒，都会启用防抖功能，即输入完成之后，如果 `nly-form-input` 没有失去焦点，则会在 `debounce` 设定的时间之后更新 value 值。

如果设置 `lazy`, 则 `debounce` 失效

```html
<template>
  <div>
    <nly-form-input v-model="value" type="text" debounce="0"></nly-form-input>
    <div class="mt-2">Value: "{{ value }}"</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
      }
    },
  }
</script>

<!-- debounce.name -->
<!-- nly-form-input.vue -->
```

## input 方法

`nly-form-input` 支持 input 框固有的方法

`<nly-form-input ref="foo" ...>` 使用 `this.$refs['foo'].propertyName` 或者 `this.$refs['foo'].methodName(...)`

### Input properties

| Property              | Notes      |
| --------------------- | ---------- |
| `.selectionStart`     | Read/Write |
| `.selectionEnd`       | Read/Write |
| `.selectionDirection` | Read/Write |
| `.validity`           | Read only  |
| `.validationMessage`  | Read only  |
| `.willValidate`       | Read only  |

### Input methods

| Method                 | Notes                             |
| ---------------------- | --------------------------------- |
| `.focus()`             | Focus the input                   |
| `.blur()`              | Remove focus from the input       |
| `.select()`            | Selects all text within the input |
| `.setSelectionRange()` |                                   |
| `.setRangeText()`      |                                   |
| `.setCustomValidity()` |                                   |
| `.checkValidity()`     |                                   |
| `.reportValidity()`    |                                   |
