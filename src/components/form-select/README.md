# Form Select

> 一个支持传入数组和对象，支持多选的下拉框选择组件

传入数组或者对象值给 `options` prop 来生成下拉选项

```html
<template>
  <div>
    <nly-form-select v-model="selected" :options="options"></nly-form-select>
    <nly-form-select
      v-model="selected"
      :options="options"
      size="sm"
      class="mt-3"
    ></nly-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: "请选择" },
          { value: "a", text: "第一个选项" },
          { value: "b", text: "第二个选项" },
          { value: { C: "3PO" }, text: "对象选项" },
          { value: "d", text: "禁用选项", disabled: true }
        ]
      };
    }
  };
</script>

<!-- arr and object.name -->
<!-- select.vue -->
```

可以对选项进行分组

```html
<template>
  <div>
    <nly-form-select v-model="selected" :options="options"></nly-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: "请选择" },
          { value: "a", text: "第一个选项" },
          { value: "b", text: "禁用选项", disabled: true },
          {
            label: "分组选项",
            options: [
              { value: { C: "3PO" }, text: "对象选项一" },
              { value: { R: "2D2" }, text: "对象选项二" }
            ]
          }
        ]
      };
    }
  };
</script>

<!-- group.name -->
<!-- group.vue -->
```

使用 `nly-form-select-option` 组件代替 `options` prop

```html
<template>
  <div>
    <nly-form-select v-model="selected" class="mb-3">
      <nly-form-select-option :value="null">请选择</nly-form-select-option>
      <nly-form-select-option value="a">选项A</nly-form-select-option>
      <nly-form-select-option value="b" disabled
        >选项B 禁用选项</nly-form-select-option
      >
      <nly-form-select-option-group label="分组选项">
        <nly-form-select-option :value="{ C: '3PO' }"
          >分组选项1</nly-form-select-option
        >
        <nly-form-select-option :value="{ R: '2D2' }"
          >分组选项2</nly-form-select-option
        >
      </nly-form-select-option-group>
    </nly-form-select>

    <div class="mt-2">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null
      };
    }
  };
</script>

<!-- option.name -->
<!-- option.vue -->
```

如果混合使用 `options` prop 和 `nly-form-select-option` 组件， `nly-form-select-option`组件的内容会渲染在 `options` prop 的内容下面，如果要让 `nly-form-select-option`组件的内容会渲染在 `options` prop 的内容上面，请使用插槽 `first`

```html
<template>
  <div>
    <nly-form-select v-model="selected" :options="options" class="mb-3">
      <!-- slot first 会渲染在 options prop 上方 -->
      <template slot="first">
        <nly-form-select-option :value="null" disabled
          >-- 请选择 --</nly-form-select-option
        >
      </template>

      <!-- 不使用插槽 first 会渲染在 options 下方 -->
      <nly-form-select-option value="C">选项C</nly-form-select-option>
      <nly-form-select-option value="D">选项D</nly-form-select-option>
    </nly-form-select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: "A", text: "选项 A (options prop)" },
          { value: "B", text: "选项 B (options prop)" }
        ]
      };
    }
  };
</script>

<!-- first.name -->
<!-- first.vue -->
```

## options prop

`options` prop 可以是数组，也可以是对象，支持一下属性设置：

- `value`, 选择的值，选项被选中会把 `value` 传给 `v-model` 绑定的变量

- `disabled`, 禁用属性，设置为 true 会禁用选项，无法选中

- `text`, 选项显示的文本

- `html`, 可以代替 `text` 显示的 html 字符串

`value` 属性可以是 string, number, 或者简单的对象. 请慎用复杂对象

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

### 数组类型 options

数组 `opitons` 可以申明为：

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

在数组 `options` 中可以混合使用对象和字符串

`nly-form-select` 组件会把上面的数组转换为以下形式:

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

### 数组中包含对象类型 options

对象 `options` 可以申明如下:

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

### 对象类型 options

<span class="badge badge-warning">不推荐使用</span>

对象类型 `opitons` 可以申明如下：

```js
const options = {
  a: "Item A",
  b: "Item B",
  c: { html: "Item C", disabled: true },
  d: { text: "Item D", value: "zzz" },
  e: { text: "Item E", value: { foo: "bar", baz: true } }
};
```

`nly-form-select` 组件会把上面的对象转换为以下形式:

```js
const options = [
  { text: "Item A", value: "a", disabled: false },
  { text: "Item B", value: "b", disabled: false },
  { html: "Item C", value: "c", disabled: false },
  { text: "Item D", value: "zzz", disabled: true },
  { text: "Item E", value: { foo: "bar", baz: true }, disabled: false }
];
```

**注意**，由于对象的无序性，无法保证最终渲染的 option 的顺序，所以不推荐使用对象类型 `options`

### 自定义属性

如果您想用自定义的属性来代替 `text`, `value` 属性。比如使用 `name` 来代替 `text`, 可以通过 `text-field`, `html-field`, `value-field`, 和 `disabled-field` prop 来指定自定义的属性

```html
<template>
  <div>
    <nly-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></nly-form-select>

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

<!-- 自定义属性.name -->
<!-- custom.vue -->
```

### 注意

如果您传入给 v-model 的值没有匹配 `options` 中的任何元素， 那么 `nly-form-select` 组件默认会渲染成未选中状态，这会引发在 IOS 系统上将会导致组件无法选择第一个选项的 bug，建议在使用`nly-form-select` 组件时，将第一个选项设置为一个有空值的禁用选项。

```html
<nly-form-select v-model="selected" :options="options">
  <template #first>
    <nly-form-select-option value="" disabled
      >-- 请选择 --</nly-form-select-option
    >
  </template>
</nly-form-select>
```

如果想了解更多，请查看 [Vue 文档](https://cn.vuejs.org/v2/guide/forms.html#%E9%80%89%E6%8B%A9%E6%A1%86)

## 单选模式

### 单选模式返回值

在单选模式下， `nly-form-select` 只会返回单个选中值

```html
<template>
  <div>
    <nly-form-select v-model="selected" :options="options"></nly-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: "请选择" },
          { value: "a", text: "选项 a" },
          { value: "b", text: "选项 b" },
          { value: "c", text: "选项 c" },
          { value: "d", text: "禁用选项", disabled: true }
        ]
      };
    }
  };
</script>

<!-- 单选.name -->
<!-- single.vue -->
```

### 选择列表框

使用 `select-size` prop 可以使 `adminlt3` 默认格式的下拉框选择式样变成下拉列表式样。

可以设置 `select-size` 为大于 1 的数值来控制下拉列表的可见行数

请注意并非所有浏览器都支持下拉列表式样

```html
<template>
  <div>
    <nly-form-select
      v-model="selected"
      :options="options"
      :select-size="5"
    ></nly-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: "请选择" },
          { value: "a", text: "选项 a" },
          { value: "b", text: "选项 b" },
          { value: "c", text: "选项 c" },
          { value: "d", text: "禁用选项", disabled: true },
          { value: "e", text: "选项 e" },
          { value: "f", text: "选项 f" }
        ]
      };
    }
  };
</script>
<!-- list.name -->
<!-- list.vue -->
```

### 多选模式

在多选模式下，`nly-form-select` 会返回一个数组值， 数组中至少会有一个元素。所以必须给 v-model 传入数组类型的值

```html
<template>
  <div>
    <nly-form-select
      v-model="selected"
      :options="options"
      multiple
      :select-size="4"
    ></nly-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: ["b"], // 数组类型
        options: [
          { value: null, text: "请选择" },
          { value: "a", text: "选项 a" },
          { value: "b", text: "选项 b" },
          { value: "c", text: "选项 c" },
          { value: "d", text: "禁用选项", disabled: true },
          { value: "e", text: "选项 e" },
          { value: "f", text: "选项 f" },
          { value: "g", text: "选项 g" }
        ]
      };
    }
  };
</script>
<!-- 多选模式.name -->
<!-- multiple.vue -->
```

## 大小

可以 设置`size` prop 来控制 `nly-form-select` 组件大小。可选 `sm`, `lg`

如果需要控制宽度，可以给 `nly-form-select` 组件的父元素控制宽度，因为默认下 `nly-form-select` 组件会填充整个父元素的宽度

## 自动聚焦

设置 prop `autofocus` 时， 渲染时会自动聚集到 `nly-form-select` 组件中，或者使用 `keep_alive` 时切回到缓存的 `nly-form-select` 组件时会自动聚焦到 `nly-form-select` 组件

## 验证状态

`adminlte3` 默认提供表单验证状态，您可以设置 `valid` prop 为 `valid`, `invalid`, `waring`, `novalid`

详情请查看 [input valid](/docs/components/form-input#输入框状态)

```html
<template>
  <div>
    <nly-form-select
      v-model="selected"
      :options="options"
      valid="invalid"
    ></nly-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: "请选择" },
          { value: "a", text: "选项 a" },
          { value: "b", text: "选项 b" },
          { value: "c", text: "选项 c" },
          { value: "d", text: "禁用选项", disabled: true }
        ]
      };
    }
  };
</script>

<!-- valid.name -->
<!-- valid.vue -->
```
