# Form Group

> 表单组是一种使得标签和表单快速配对的组件, 并且提供文本、表单有效，表单无效，表单警告等来反映对应的表单控件的状态，还能控制对应表单颜色来反应其状态

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

<!-- form-group.name -->
<!-- nly-form-group.vue -->
```

## 标签

可以使用 prop `label` 或者使用 `label` 插槽来设置 `label` 元素， 同时可以设置 `label-sr-only` 来隐藏 `label` 元素，设置 `label-sr-only` 之后，仍旧可以在屏幕阅读器上显示该 `label` 元素。

`label-class` 可以用来设置 `label` 元素 的自定义 css 类

**注意**

在设置 `label-sr-only` 之后，如果是水平模式，会在 `label` 元素上套一层 `div` 元素，此时关于一切 `cols` 的 prop 都会作用于这个 `div` 元素上， 而其他作用于 `label` 元素的 prop 会失效。如果不是水平模式，作用于 `label` 元素的 prop 会失效。 关于**[水平模式](#水平模式)**

```html
<div>
  <nly-form-group
    id="fieldset-1"
    description="请输入姓名"
    label="姓名"
    label-for="input-1"
    label-sr-only
  >
    <nly-form-input id="input-1"></nly-form-input>
  </nly-form-group>

  <nly-form-group id="fieldset-2" description="请输入姓名" label-for="input-1">
    <nly-form-input id="input-2"></nly-form-input>
  </nly-form-group>

  <nly-form-group id="fieldset-3" description="请输入姓名" label-for="input-1">
    <nly-form-input id="input-3"></nly-form-input>
    <template slot="label">
      <label> 姓名</label>
    </template>
  </nly-form-group>
</div>

<!-- label.name -->
<!-- nly-form-group.vue -->
```

## 水平模式

在默认情况下，标签在表单控件上面，您可以通过设置一系列 `cols` 相关的 prop 来使得标签和表单控件呈水平布局模式

可以设置 `label-cols-*` 或者设置 `label-cols` 来设置 标签元素所占用的距离，表单控件将会自动沾满剩下的宽度。 也可以设置 `label-cols-*` 为 `true` 来占据一半的宽度, 或者 为 `auto` 来占据自适应宽度

可以设置 `label-cols-offset-*` 来设置标签偏移

可以设置 `label-cols-order-*` 来设置标签顺序（多个标签的时候，慎用，这时候需要使用 插槽，且插槽需要设置 `cols` 一类的 css）

| prop                   | 描述                                                                      |
| ---------------------- | ------------------------------------------------------------------------- |
| `label-cols-xs`        | 在 XS 及以上断点的宽度,可选 1,2,3,4,5,6,7,8,9,10,11,12, true, false, auto |
| `label-cols-sm`        | 在 SM 及以上断点的宽度,可选 1,2,3,4,5,6,7,8,9,10,11,12, true, false, auto |
| `label-cols-md`        | 在 MD 及以上断点的宽度,可选 1,2,3,4,5,6,7,8,9,10,11,12, true, false, auto |
| `label-cols-lg`        | 在 LG 及以上断点的宽度,可选 1,2,3,4,5,6,7,8,9,10,11,12, true, false, auto |
| `label-cols-xl`        | 在 XL 及以上断点的宽度,可选 1,2,3,4,5,6,7,8,9,10,11,12, true, false, auto |
| `label-cols-offset-xs` | 在 XS 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-offset-sm` | 在 SM 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-offset-md` | 在 MD 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-offset-lg` | 在 LG 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-offset-xl` | 在 XL 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-order-xs`  | 在 XS 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-order-sm`  | 在 SM 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-order-md`  | 在 MD 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-order-lg`  | 在 LG 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |
| `label-cols-order-xl`  | 在 XL 及以上断点的偏移量,可选 0,1,2,3,4,5,6,7,8,9,10,11                   |

```html
<div>
  <nly-form-group
    label-cols-xs="12"
    label-cols-sm="6"
    label-cols-md="4"
    label-cols-lg="3"
    label-cols-xl="2"
    label-for="wwww"
    label="cols"
  >
    <nly-form-input id="www" />
  </nly-form-group>

  <nly-form-group label-cols-xs="auto" label-for="wwww" label="cols-auto">
    <nly-form-input id="www" />
  </nly-form-group>

  <nly-form-group :label-cols-xs="true" label-for="wwww" label="cols-true">
    <nly-form-input id="www" />
  </nly-form-group>
</div>

<!-- cols.name -->
<!-- nly-form-group.vue -->
```

## 标签大小

`label-size` 可以用来控制 `label` 大小， 可选 `sm`, `lg`

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

<!-- label-size.name -->
<!-- nly-form-group.vue -->
```

## 标签对齐

设置 `label-align-*` 来控制标签位置， 可选 left, center, right

使用 `label-sr-only` 会使得 `label-align-*` 失效

| prop             | 描述                        |
| ---------------- | --------------------------- |
| `label-align-xs` | 在 XS 及以上断点 label 位置 |
| `label-align-sm` | 在 SM 及以上断点 label 位置 |
| `label-align-md` | 在 MD 及以上断点 label 位置 |
| `label-align-lg` | 在 LG 及以上断点 label 位置 |
| `label-align-xl` | 在 XL 及以上断点 label 位置 |

```html
<nly-form-group
  label-align-xs="right"
  label-align-sm="center"
  label-align-md="right"
  label-align-lg="center"
  label-align-xl="left"
  label-cols-xs="3"
  label-for="wwww"
  label="label-align"
>
  <nly-form-input xs="3" id="www" />
</nly-form-group>

<!-- label-align.name -->
<!-- nly-form-group.vue -->
```

## 嵌套表单组

`nly-form-group` 可以随意嵌套

```html
<div>
  <nly-card bg-variant="light">
    <nly-card-body>
      <nly-form-group
        label-cols-lg="3"
        label="Shipping Address"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <nly-form-group
          label-cols-sm="3"
          label="Street:"
          label-align-sm="right"
          label-for="nested-street"
        >
          <nly-form-input id="nested-street"></nly-form-input>
        </nly-form-group>

        <nly-form-group
          label-cols-sm="3"
          label="City:"
          label-align-sm="right"
          label-for="nested-city"
        >
          <nly-form-input id="nested-city"></nly-form-input>
        </nly-form-group>

        <nly-form-group
          label-cols-sm="3"
          label="State:"
          label-align-sm="right"
          label-for="nested-state"
        >
          <nly-form-input id="nested-state"></nly-form-input>
        </nly-form-group>

        <nly-form-group
          label-cols-sm="3"
          label="Country:"
          label-align-sm="right"
          label-for="nested-country"
        >
          <nly-form-input id="nested-country"></nly-form-input>
        </nly-form-group>
      </nly-form-group>
    </nly-card-body>
  </nly-card>
</div>

<!-- nly-form-group-nested.vue -->
```

## feedback

`feedback` 对应三种类型 `invalid-feedback`, `valid-feedback`, `warning-feedback`。在 prop `valid` 为 `invalid`, `valid`, `warning` 下触发显示。
prop `valid` 为 `novalid`的时候不会显示。