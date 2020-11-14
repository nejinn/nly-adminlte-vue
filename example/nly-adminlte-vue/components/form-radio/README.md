# Form Radio Inputs

> `<nly-form-radio-group>` 和 `<nly-form-radio>` 组件是单选框组件

## 单个单选框

```html
<template>
  <div>
    <nly-form-group label="单个单选框">
      <nly-form-radio v-model="selected" name="some-radios" value="A"
        >Option A</nly-form-radio
      >
      <nly-form-radio v-model="selected" name="some-radios" value="B"
        >Option B</nly-form-radio
      >
    </nly-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: ""
      };
    }
  };
</script>

<!-- 单选框组件.name -->
<!-- nly-form-radio.vue -->
```

## 单选框组

`<nly-form-radio-group>` 可以设置 `options` prop 或者嵌入 `<nly-form-radio>` 组件来渲染成单选框组

使用 `<nly-form-radio>` 嵌入 `<nly-form-radio-group>` 组件时，`<nly-form-radio>` 会继承 `<nly-form-radio-group>` 的大部分 prop

v-model 也会绑定在 `<nly-form-radio-group>`上

```html
<template>
  <div>
    <nly-form-group label="options 单选框组">
      <nly-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        name="radio-options"
      ></nly-form-radio-group>
    </nly-form-group>

    <nly-form-group label="子组件单选框组">
      <nly-form-radio-group
        id="radio-group-2"
        v-model="selected"
        name="radio-sub-component"
      >
        <nly-form-radio value="first">切换</nly-form-radio>
        <nly-form-radio value="second">切换</nly-form-radio>
        <nly-form-radio value="third" disabled>切换</nly-form-radio>
        <nly-form-radio :value="{ fourth: 4 }">切换</nly-form-radio>
      </nly-form-radio-group>
    </nly-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "first",
        options: [
          { text: "切换为第一个", value: "first" },
          { text: "切换为第二个", value: "second" },
          { text: "切换为第三个", value: "third", disabled: true },
          { text: "切换为第四个", value: { fourth: 4 } }
        ]
      };
    }
  };
</script>

<!-- 单选框组.name -->
<!-- nly-form-radio-group.vue -->
```

支持混合使用 `options` prop 和 `<nly-form-radio>` 嵌套到 `<nly-form-radio-group>` 中，但是 `<nly-form-radio>`
组件会默认渲染到 `options` prop 渲染的选项下面，如果需要使 `<nly-form-radio` 渲染到 `options` prop 上面，请使用插槽 `first`

```html
<template>
  <div>
    <nly-form-group label="使用插槽">
      <nly-form-radio-group
        id="radio-slots"
        v-model="selected"
        :options="options"
        name="radio-options-slots"
      >
        <template #first>
          <nly-form-radio value="first">切换</nly-form-radio>
        </template>

        <nly-form-radio :value="{ fourth: 4 }">这是第四个</nly-form-radio>
        <nly-form-radio value="fifth">这是第五个</nly-form-radio>
      </nly-form-radio-group>
    </nly-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "",
        options: [
          { text: "切换为第二个", value: "second" },
          { text: "切换为第三个", value: "third" }
        ]
      };
    }
  };
</script>

<!-- first 插槽.name -->
<!-- nly-form-radio-group-slot.vue -->
```

## 数组类型 options

`options` 是一个数组，元素可以是字符串或者 `key-value` 对象，每一个元素可以有以下 key:

- **`value`** 选项值， 如果选中，会添加到 `v-model` 绑定的值中
- **`disabled`** 禁用当前选择，无法选中
- **`text`** 选项显示的文本
- **`html`** 选项显示的文本，是 html 字符串

`value` 类型可以是字符串，数字，简单对象. 请避免同一个 options 中不同元素的 `value` 类型不同.

如果 `text` 和 `html` 属性同时出现， `html` 属性会覆盖 `text`，即 `html` 属性的渲染的优先级比 `text` 高。 `html` 属性仅
支持原生的 html 字符串，如果嵌入组件，是不生效的。注意并非所有的浏览器都会支持所有的 html 字符串。

<div class="alert alert-warning">
  <p class="mb-0 small">
    <strong>注意:</strong> 使用 (<code class="notranslate" translate="no"
      >html</code
    >) 字符串的属性可能会引起
    <nly-link
      href="https://en.wikipedia.org/wiki/Cross-site_scripting"
      class="alert-link"
      target="_blank"
    >
      脚本攻击 (XSS)，
    </nly-link>
    当用户使用这类属性的时候，您应该谨慎
    <nly-link
      href="https://en.wikipedia.org/wiki/HTML_sanitization"
      class="alert-link"
      target="_blank"
    >
      处理
    </nly-link>
    这类值
  </p>
</div>

```js
const options = [
  "A",
  "B",
  "C",
  { text: "D", value: { d: 1 }, disabled: true },
  "E",
  "F"
];
```

如果数组的元素全是字符串， 这个字符串默认会被转为 `text` 和 `value`

支持在 `options` 中使用字符串和对象混合类型， 详情请查看[对象数组 options](#对象数组)

在 NlyAdminlteVue 中， 会自动把上面的 options 转化为 [对象数组 options](#对象数组) 格式:

```js
const options = [
  { text: "A", value: "A", disabled: false },
  { text: "B", value: "B", disabled: false },
  { text: "C", value: "C", disabled: false },
  { text: "D", value: { d: 1 }, disabled: true },
  { text: "E", value: "E", disabled: false },
  { text: "F", value: "F", disabled: false }
];
```

### 对象数组

```js
const options = [
  { text: "Item 1", value: "first" },
  { text: "Item 2", value: "second" },
  { html: "<b>Item</b> 3", value: "third", disabled: true },
  { text: "Item 4" },
  { text: "Item 5", value: { foo: "bar", baz: true } }
];
```

如果没有在数组的对象元素中定义 `value` 属性，`text` 属性既会渲染成 `text`, 又会渲染成 `value` 属性。

如果使用的是 `html` 属性, 那必须提供一个 `value` 属性， 否则会报错

在 NlyAdminlteVue 中， 会自动把上面的 options 转化为对象数组 options 格式:

```js
const options = [
  { text: "Item 1", value: "first", disabled: false },
  { text: "Item 2", value: "second", disabled: false },
  { html: "<b>Item</b> 3", value: "third", disabled: true },
  { text: "Item 4", value: "Item 4", disabled: false },
  { text: "Item 5", value: "E", disabled: false }
];
```

### 自定义 options 的属性名称

如果您想用自定义的属性来代替 `text`, `value` 属性。比如使用 `name` 来代替 `text`,
可以通过 `text-field`, `html-field`, `value-field`, 和 `disabled-field` prop 来指定自定义的属性

```html
<template>
  <div>
    <nly-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></nly-form-radio-group>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "A",
        options: [
          { item: "A", name: "Option A" },
          { item: "B", name: "Option B" },
          { item: "D", name: "Option C", notEnabled: true },
          { item: { d: 1 }, name: "Option D" }
        ]
      };
    }
  };
</script>

<!-- 自定义对象数组属性.name -->
<!-- nly-form-radio-group-options-fields.vue -->
```

## 单选框的值 value 和 v-model

`<nly-form-radio>` 组件没有默认值. 你必须给 `<nly-form-radio>` 的 prop `value` 传入一个人初始值 . 绑定到 `v-model` 值会直接渲染成选中状态

`<nly-form-radio>` 和 `<nly-form-radio-group>` `v-model` 都绑定到了 `checked` prop. 你逆序事给 `v-model` 绑定一个 `options` 中可选的值或者
`<nly-form-radio>` 中组件中的 `value`, 不要直接使用 `checked`

每个单选框都必须有一个唯一的值

单选框的 `value` props 支持 `string`, `boolean`, `number`, `object` 等类型

## 水平模式和堆叠模式

`<nly-form-radio-group>` 组件默认是渲染成水平模式, while `<nly-form-radio>` 默认是渲染成块级堆叠模式

可以设置 `<nly-form-radio-group>` 的 prop `stacked` 使其渲染成堆叠式样

如果 `<nly-form-radio>` 不是嵌套在 `<nly-form-radio-group>` 中， 可以设置 `nly-form-radio` 的 `inline` 使其渲染成水平模式

```html
<template>
  <div>
    <nly-form-group label="水平模式">
      <nly-form-radio-group
        v-model="selected"
        :options="options"
        name="radio-inline"
      ></nly-form-radio-group>
    </nly-form-group>

    <nly-form-group label="堆叠模式">
      <nly-form-radio-group
        v-model="selected"
        :options="options"
        name="radios-stacked"
        stacked
      ></nly-form-radio-group>
    </nly-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "yide",
        options: [
          { text: "张飞", value: "yide" },
          { text: "诸葛亮", value: "kongming" },
          { text: "关羽", value: "yunchang" }
        ]
      };
    }
  };
</script>

<!-- 水平和 堆叠.name -->
<!-- nly-form-radio-stacked.vue -->
```

## 控制代销

使用 `size` prop 来控制大小，默认大小为 `md`, 可选 `sm` (small) and `lg` (large).

```html
<div>
  <nly-form-radio name="radio-size" size="sm">Small</nly-form-radio>
  <nly-form-radio name="radio-size">Default</nly-form-radio>
  <nly-form-radio name="radio-size" size="lg">Large</nly-form-radio>
</div>

<!-- 大小.name -->
<!-- form-radio-sizes.vue -->
```

如果需要控制 `<nly-form-radio>` 组件的大小，可以设置 `size`， 也可以设置 `<nly-form-radio-group>` 的 `size` prop
通常情况下， 如果不单独设置 `<nly-form-radio>` 组件的大小, `<nly-form-radio>` 组件会继承 `<nly-form-radio>` 的大小

**注意:** 控制 check 的大小在 `adminlte3` 中是不支持的， 这是 `NlyAdminlteVue` 自定义的 css 式样

## 按钮模式

支持设置 `<nly-form-radio>` 渲染成按钮式样

按钮模式下的 radio 在选中的时候会渲染一个 `.active` css 类型

```html
<template>
  <div>
    <nly-form-group label="按钮模式">
      <nly-form-radio-group
        id="btn-radios-1"
        v-model="selected"
        :options="options"
        buttons
        name="radios-btn-default"
      ></nly-form-radio-group>
    </nly-form-group>

    <nly-form-group label="按钮模式">
      <nly-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        buttons
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
      ></nly-form-radio-group>
    </nly-form-group>

    <nly-form-group label="堆叠按钮模式">
      <nly-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        buttons
        stacked
        name="radio-btn-stacked"
      ></nly-form-radio-group>
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "radio1",
        options: [
          { text: "Radio 1", value: "radio1" },
          { text: "Radio 3", value: "radio2" },
          { text: "Radio 3 (disabled)", value: "radio3", disabled: true },
          { text: "Radio 4", value: "radio4" }
        ]
      };
    }
  };
</script>

<!-- 按钮模式.name -->
<!-- nly-form-radio-buttons.vue -->
```

## 原生单选框

设置 `plain` prop 可以使 `<nly-form-radio>` and `<nly-form-radio-group>` 渲染成一个原生单选框

```html
<template>
  <div>
    <nly-form-group label="水平原生单选框">
      <nly-form-radio-group
        v-model="selected"
        :options="options"
        plain
        name="plain-inline"
      ></nly-form-radio-group>
    </nly-form-group>

    <nly-form-group label="堆叠原生单选框">
      <nly-form-radio-group
        v-model="selected"
        :options="options"
        plain
        stacked
        name="plain-stacked"
      ></nly-form-radio-group>
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "first",
        options: [
          { text: "First radio", value: "first" },
          { text: "Second radio", value: "second" },
          { text: "Third radio", value: "third" }
        ]
      };
    }
  };
</script>

<!-- 原生单选框.name -->
<!-- nly-form-radio-plain.vue -->
```

**Note:** 原生 单选框 的 prop `button` 和 `buttons` is 无效

## 表单必填 valid 状态

如果使用单选 `<nly-form-radio>`组件 , 且需要在 `nly-form` 组件中必填 , 你必须传入 `name` prop 和 `required` 给每个
`<nly-form-radio>` 组件，这样 `nly-form` 的必填才会生效. 所有的绑定到同一个 `v-model` 值 的 `<nly-form-radio>`
组件必须设置相同的 `name` prop

对于辅助技术来说， prop `name` 是必传的， 这样辅助技术才能识别 radio 属于哪个表单。 prop `required` 只有在设置了 prop `name` 才生效.

如果 `<nly-form-radio-group>` 组件没有传入 prop `name`， 会自动生成一个唯一的 `name`

## 自动聚焦

`<nly-form-checkbox>` 组件设置 `autofocus` prop 时, 会自动聚焦到当前选择框。 如果组件或者页面
被 `<keep-alive>` 缓存了，返回这个页面或者组件时，也会自动聚焦到当前选择框，

## 校验状态

`Adminlte3` 的大部分表单组件都有状态 `invalid`, `valid`, `warning`, `novalid`

- `invalid` : 无效状态

- `valid` : 有效状态

- `warning` : 警告状态

- `novalid` : 无状态

**注意:** valid **不支持** 按钮模式.

### feedback valid 状态

```html
<template>
  <div>
    <nly-form-radio-group
      v-model="value"
      :options="options"
      :valid="state"
      name="radio-validation"
    >
      <nly-form-feedback
        :state="state"
        :class='state==="invalid"?"d-block":null'
        >Please select one</nly-form-feedback
      >
      <nly-form-feedback :state="state" :class='state==="valid"?"d-block":null'
        >Thank you</nly-form-feedback
      >
    </nly-form-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null,
        options: [
          { text: "First radio", value: "first" },
          { text: "Second radio", value: "second" },
          { text: "Third radio", value: "third" }
        ]
      };
    },
    computed: {
      state() {
        if (this.value !== null) {
          return "valid";
        } else {
          return "invalid";
        }
      }
    }
  };
</script>

<!-- valid.name -->
<!-- nly-form-radio-validation.vue -->
```
