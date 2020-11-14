# Form Checkbox Inputs

> `<nly-form-checkbox-group>` and `<nly-form-checkbox>` 是用来代替浏览器默认选择框的组件

**单选**

```html
<template>
  <div>
    <nly-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="选中"
      unchecked-value="未选中"
    >
      点击选中
    </nly-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: "未选中"
      };
    }
  };
</script>

<!-- 单选.name -->
<!-- nly-form-checkbox.vue -->
```

**多选**

```html
<template>
  <div>
    <nly-form-group label="数组 options">
      <nly-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="choose-1"
      ></nly-form-checkbox-group>
    </nly-form-group>

    <nly-form-group label="子组件">
      <nly-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        name="choose-2"
      >
        <nly-form-checkbox value="kongming">诸葛亮</nly-form-checkbox>
        <nly-form-checkbox value="yide">张飞</nly-form-checkbox>
        <nly-form-checkbox value="zilong">赵云</nly-form-checkbox>
        <nly-form-checkbox value="yunchang">关羽</nly-form-checkbox>
      </nly-form-checkbox-group>
    </nly-form-group>

    <div>Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: "诸葛亮", value: "kongming" },
          { text: "张飞", value: "yide" },
          { text: "赵云", value: "zilong" },
          { text: "关羽", value: "yunchang" }
        ]
      };
    }
  };
</script>

<!-- nly-form-checkbox-multiple.vue -->
```

支持混合使用 `options` prop 和 `<nly-form-checkbox>` 嵌套到 `<nly-form-checkbox-group>` 中，但是 `<nly-form-checkbox>`
组件会默认渲染到 `options` prop 渲染的选项下面，如果需要使 `<nly-form-checkbox>` 渲染到 `options` prop 上面，请使用插槽 `first`

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
    <nly-form-checkbox-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></nly-form-checkbox-group>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
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

<!-- 自定义属性名称.name -->
<!-- nly-form-checkbox-group-options-fields.vue -->
```

## 水平模式和堆叠模式

`<nly-form-checkbox-group>` 组件默认是渲染成水平模式, `<nly-form-checkbox>` 默认是渲染成块级堆叠模式.

可以设置 `<nly-form-checkbox-group>` 的 prop `stacked` 使其渲染成堆叠式样

如果 `<nly-form-checkbox>` 不是嵌套在 `<nly-form-checkbox-group>` 中， 可以设置 `<nly-form-checkbox>` 的 `inline` 使其渲染成水平模式

```html
<template>
  <div>
    <nly-form-group label="check-group 默认水平模式">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        name="choose-1"
      ></nly-form-checkbox-group>
    </nly-form-group>

    <nly-form-group label="checkbox-group 堆叠模式">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        name="choose-2"
        stacked
      ></nly-form-checkbox-group>
    </nly-form-group>

    <nly-form-group label="checkbox 默认堆叠模式">
      <nly-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        name="choose-3"
      >
        {{ option.text }}
      </nly-form-checkbox>
    </nly-form-group>

    <nly-form-group label="checkboxe 水平模式">
      <nly-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        name="choose-4"
        inline
      >
        {{ option.text }}
      </nly-form-checkbox>
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
        options: [
          { text: "诸葛亮", value: "kongming" },
          { text: "张飞", value: "yide" },
          { text: "赵云", value: "zilong" },
          { text: "关羽", value: "yunchang" }
        ]
      };
    }
  };
</script>

<!-- 堆叠模式和水平模式.name -->
<!-- nly-form-checkbox-stacked.vue -->
```

## 大小

使用 `size` prop 来控制大小，默认大小为 `md`, 可选 `sm` (small) and `lg` (large).

```html
<div>
  <nly-form-checkbox size="sm">Small</nly-form-checkbox>
  <nly-form-checkbox>Default</nly-form-checkbox>
  <nly-form-checkbox size="lg">Large</nly-form-checkbox>
</div>

<!-- 大小.name -->
<!-- form-checkbox-sizes.vue -->
```

如果需要控制 `<nly-form-checkbox>` 组件的大小，可以设置 `size`， 也可以设置 `<nly-form-checkbox-group>` 的 `size` prop
通常情况下， 如果不单独设置 `<nly-form-checkbox>` 组件的大小, `<nly-form-checkbox>` 组件会继承 `<nly-form-checkbox-group>` 的大小

**注意:** 控制 check 的大小在 `adminlte3` 中是不支持的， 这是 `NlyAdminlteVue` 自定义的 css 式样

## 选择框的 values 和 `v-model`

默认情况下, `<nly-form-checkbox>` 的值是 `true` （选中的时候） 或者 `false` (未选中的时候). 支持自定义选中和未选中的值，使用 `value` 来自定义选中的， 使用 `unchecked-value` 来自定义未选中的值

`v-model` 指令绑定值是 `checked` prop. 如使用的是多选框，你必须给 `v-model` 绑定一个数组类型(或者 `[]`)的变量，不要直接使用 `checked`

**注意**

- 如果 `v-model` 绑定的是一个多选框的值， `unchecked-value` 是无效的。

- 请您根据您的选择框类型来定义 `v-model` 绑定值的类型

- 如果 `<nly-form-checkbox>` 组件嵌套在 `<nly-form-checkbox-group>` 组件中， 大部分的 prop 和 `v-model` 都会
  继承 `<nly-form-checkbox-group>` 的值

- `unchecked-value` prop 并不会对原生的 `<input>` 的 `value` 起作用， 浏览器并不会在提交的时候提交未选择的选择框，
  所以您可以使用[单选框](#/docs/components/form-radio)来代替, 具体原因请查看[Vue has with native checkbox inputs](https://cn.vuejs.org/v2/guide/forms.html#%E9%80%89%E6%8B%A9%E6%A1%86).

### 多选框的辅助功能

如果使用的是多选模式，您必须设置所有的在同一个 `<nly-form-checkbox-group>` 组件中的 `<nly-form-checkbox>`
的 `name` prop 为相同的值，或者只设置 `<nly-form-checkbox-group>` 的 `name` prop。 这样辅助技术才能识别他们为一组，并且启用本地键盘进行切换

当使用多选模式的时候， 建议把 `<nly-form-checkbox>` 嵌套到 `<nly-form-checkbox-group>` 中

## 按钮模式

支持设置 `<nly-form-checkbox>` 渲染成按钮式样

按钮模式下的 checkbox 在选中的时候会渲染一个 `.active` css 类型

### 单选模式

设置 prop `button` to `true` 会渲染成单选按钮模式

设置 `button-variant` prop 能改变按钮的颜色， 可选 adminlte3 的主题颜色

按钮模式下， `inline` prop 不生效

```html
<template>
  <div>
    <nly-form-checkbox v-model="checked1" name="check-button" button>
      Button Checkbox <b>(Checked: {{ checked1 }})</b>
    </nly-form-checkbox>
    <nly-form-checkbox
      v-model="checked2"
      name="check-button"
      button
      button-variant="info"
    >
      Button Checkbox <b>(Checked: {{ checked2 }})</b>
    </nly-form-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: false
      };
    }
  };
</script>

<!-- button 模式.name -->
<!-- nly-form-checkbox-button.vue -->
```

### 按钮组模式

`<nly-form-checkbox-group>`组件 的 prop `buttons` 可以把 `nly-form-checkbox` 渲染成按钮组

设置 `button-variant` prop 可以改变按钮颜色

```html
<template>
  <div>
    <nly-form-group label="按钮组模式">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        name="buttons-1"
        buttons
      ></nly-form-checkbox-group>
    </nly-form-group>

    <nly-form-group label="按钮组模式定义颜色">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        buttons
        button-variant="primary"
        size="lg"
        name="buttons-2"
      ></nly-form-checkbox-group>
    </nly-form-group>

    <nly-form-group label="堆叠按钮组模式">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        stacked
        buttons
      ></nly-form-checkbox-group>
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
        options: [
          { text: "诸葛亮", value: "kongming" },
          { text: "张飞", value: "yide" },
          { text: "赵云", value: "zilong" },
          { text: "关羽", value: "yunchang" }
        ]
      };
    }
  };
</script>

<!-- 按钮组模式.name -->
<!-- nly-form-checkbox-button-group.vue -->
```

## 开关模式

`<nly-form-checkbox>` 和 `<nly-form-checkbox-group>` 都支持开关模式.

**Note:** 如果是 [按钮模式](#按钮模式), 开关模式不会生效

### 单选开关模式

设置 prop `switch` 为 `true`， 单选 checkbox 会被渲染成开关

```html
<template>
  <div>
    <nly-form-checkbox v-model="checked" name="check-button" switch>
      Switch Checkbox <b>(Checked: {{ checked }})</b>
    </nly-form-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false
      };
    }
  };
</script>

<!-- 单选开关模式.name -->
<!-- nly-form-checkbox-switch.vue -->
```

### 多选开关模式

设置 prop `switches` 为 `true` `<nly-form-checkbox-group>` 会被渲染成开关组

```html
<template>
  <div>
    <nly-form-group label="Inline switch style checkboxes">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        switches
      ></nly-form-checkbox-group>
    </nly-form-group>

    <nly-form-group label="Stacked (vertical) switch style checkboxes">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        switches
        stacked
      ></nly-form-checkbox-group>
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
        options: [
          { text: "Red", value: "red" },
          { text: "Green", value: "green" },
          { text: "Yellow (disabled)", value: "yellow", disabled: true },
          { text: "Blue", value: "blue" }
        ]
      };
    }
  };
</script>

<!-- 开关组.name -->
<!-- nly-form-checkboxes-switch-group.vue -->
```

### 开关大小

使用 `size` prop 来控制大小，默认大小为 `md`, 可选 `sm` (small) and `lg` (large).

```html
<div>
  <nly-form-checkbox switch size="sm">Small</nly-form-checkbox>
  <nly-form-checkbox switch>Default</nly-form-checkbox>
  <nly-form-checkbox switch size="lg">Large</nly-form-checkbox>
</div>

<!-- 大小 -->
<!-- form-checkbox-switch-sizes.vue -->
```

如果需要控制 `<nly-form-checkbox>` 组件的大小，可以设置 `size`， 也可以设置 `<nly-form-checkbox-group>` 的 `size` prop
通常情况下， 如果不单独设置 `<nly-form-checkbox>` 组件的大小, `<nly-form-checkbox>` 组件会继承 `<nly-form-checkbox-group>` 的大小

**注意:** 控制 check 的大小在 `adminlte3` 中是不支持的， 这是 `NlyAdminlteVue` 自定义的 css 式样

## 原生 checkbox

设置 `plain` prop 可以使 `<nly-form-checkbox-group>` or `<nly-form-checkbox>` 渲染成一个原生的 checkbox

```html
<template>
  <div>
    <nly-form-group label="Plain inline checkboxes">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        plain
      ></nly-form-checkbox-group>
    </nly-form-group>

    <nly-form-group label="Plain stacked checkboxes">
      <nly-form-checkbox-group
        v-model="selected"
        :options="options"
        plain
        stacked
      ></nly-form-checkbox-group>
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
        options: [
          { text: "诸葛亮", value: "kongming" },
          { text: "张飞", value: "yide" },
          { text: "赵云", value: "zilong" },
          { text: "关羽", value: "yunchang" }
        ]
      };
    }
  };
</script>

<!-- 原生checkbox.name -->
<!-- nly-form-checkbox-plain.vue -->
```

**注意:** 原生 checkbox 的 prop `button` 和 `buttons` 无效

## 校验状态 valid

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
    <nly-form-checkbox-group
      v-model="value"
      :options="options"
      :valid="state"
      name="checkbox-validation"
    >
      <nly-form-feedback
        :state="state"
        :class="state==='invalid'?'d-block':null"
        >请选择2个</nly-form-feedback
      >
      <nly-form-feedback :state="state" :class="state==='valid'?'d-block':null"
        >干得漂亮</nly-form-feedback
      >
      <nly-form-feedback
        :state="state"
        :class="state==='warning'?'d-block':null"
        >数量不对</nly-form-feedback
      >
    </nly-form-checkbox-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          { text: "First Check", value: "first" },
          { text: "Second Check", value: "second" },
          { text: "Third Check", value: "third" }
        ]
      };
    },
    computed: {
      state() {
        if (this.value.length === 2) {
          return "valid";
        } else if (this.value.length === 1 || this.value.length === 3) {
          return "warning";
        } else if (this.value.length === 0) {
          return "invalid";
        } else {
          return "novalid";
        }
      }
    }
  };
</script>

<!-- form-checkbox-validation.vue -->
```

### 表单必填 valid 状态

如果使用单选 `<nly-form-checkbox>`组件 , 且需要在 `nly-form` 组件中必填 , 你必须传入 `name` prop 和 `required` 给每个
`<nly-form-checkbox>` 组件，这样 `nly-form` 的必填才会生效. 所有的绑定到同一个 `v-model` 值 的 `<nly-form-checkbox>`
组件必须设置相同的 `name` prop

对于辅助技术来说， prop `name` 是必传的， 这样辅助技术才能识别 checkbox 属于哪个表单。 prop `required` 只有在设置了 prop `name` 才生效.

如果 `<nly-form-checkbox-group>` 组件没有传入 prop `name`， 会自动生成一个唯一的 `name`

## 自动聚焦

`<nly-form-checkbox>` 组件设置 `autofocus` prop 时, 会自动聚焦到当前选择框。 如果组件或者页面
被 `<keep-alive>` 缓存了，返回这个页面或者组件时，也会自动聚焦到当前选择框，

## 不定状态

通常情况下， 选择框只有选中和未选中两个状态， 这时候 `unchecked-value` 和 `value` 可以是任何值。

在视觉上， 选择框有可以有三种状态， 选中，未选中，不确定。

`<nly-form-checkbox>` 支持通过 `indeterminate` prop 设置视觉上的不确定状态（默认为 false), 点击选择框会清除不确定状态，
设置 `indeterminate` prop 并使用修饰符 `.sync`，来异步修改不确定状态

**注意:** indeterminate 模式在按钮模式和开关模式下不生效

**单选不确定模式**

```html
<template>
  <div>
    <nly-form-checkbox v-model="checked" :indeterminate.sync="indeterminate">
      点击
    </nly-form-checkbox>

    <div class="mt-3">
      Checked: <strong>{{ checked }}</strong><br />
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>

    <nly-button @click="toggleIndeterminate"
      >修改 indeterminate 状态</nly-button
    >
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        indeterminate: true
      };
    },
    methods: {
      toggleIndeterminate() {
        this.indeterminate = !this.indeterminate;
      }
    }
  };
</script>

<!-- 单选indeterminate状态.name -->
<!-- nly-form-checkbox-indeterminate.vue -->
```

**多选不确定模式**

```html
<template>
  <div>
    <nly-form-group>
      <template #label>
        <b>选择</b><br />
        <nly-form-checkbox
          v-model="allSelected"
          :indeterminate="indeterminate"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="toggleAll"
        >
          {{ allSelected ? '非全选' : '全选' }}
        </nly-form-checkbox>
      </template>

      <nly-form-checkbox-group
        id="flavors"
        v-model="selected"
        :options="flavours"
        name="flavors"
        class="ml-4"
        aria-label="Individual flavours"
        stacked
      ></nly-form-checkbox-group>
    </nly-form-group>

    <div>
      Selected: <strong>{{ selected }}</strong><br />
      All Selected: <strong>{{ allSelected }}</strong><br />
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flavours: ["张飞", "诸葛亮", "赵云", "黄忠", "马超"],
        selected: [],
        allSelected: false,
        indeterminate: false
      };
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : [];
      }
    },
    watch: {
      selected(newVal, oldVal) {
        if (newVal.length === 0) {
          this.indeterminate = false;
          this.allSelected = false;
        } else if (newVal.length === this.flavours.length) {
          this.indeterminate = false;
          this.allSelected = true;
        } else {
          this.indeterminate = true;
          this.allSelected = false;
        }
      }
    }
  };
</script>

<!-- 多选indeterminate状态.name -->
<!-- nly-form-checkbox-indeterminate-multiple.vue -->
```

**注意:** indeterminate 不支持 按钮模式和多个单选框.

### 不确定状态和辅助线技术

并不是所有的屏幕都支持不确定状态
