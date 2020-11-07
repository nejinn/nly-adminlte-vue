# Spinner

> spinner 微调是一个可以显示元素或者组件某些特殊状态的者组件, 比如显示加载状态

spinner 组件可以插入大部分元素和组件，比如 `nly-button` (按钮), `nly-card` (卡片加载状态), `nly-table` (表格) 的 busy slot， `nly-overlay` (罩层)等

```html
<div class="text-center">
  <nly-spinner label="Spinning"></nly-spinner>
  <nly-spinner type="grow" label="Spinning"></nly-spinner>
  <nly-spinner variant="primary" label="Spinning"></nly-spinner>
  <nly-spinner variant="pink" type="grow" label="Spinning"></nly-spinner>
  <nly-spinner variant="yellow" label="Spinning"></nly-spinner>
  <nly-spinner variant="success" type="grow" label="Spinning"></nly-spinner>
</div>

<!-- spinner.name -->
<!-- spinner.vue -->
```

## 类型

spinner 有两种类型，默认类型是 `border`， 即空心圆圈。我们可以设置 prop `type` 为 `border` 和 `grow` 来修改 spinner 的类型

### border 空心圈圈

`border` 类型是默认类型，一个旋转的空心圆圈

```html
<div class="text-center">
  <nly-spinner label="Spinning"></nly-spinner>
</div>

<!-- border.name -->
<!-- border.vue -->
```

### grow 增大圆点

`grow` 是一个变大圆点类型， `grow` spinner 会反复增大来显示需要展示的状态

```html
<div class="text-center">
  <nly-spinner label="Spinning" type="grow"></nly-spinner>
</div>

<!-- grow.name -->
<!-- grow.vue -->
```

## variant 颜色

spinner 实际上完全由 css 完成渲染，所以跟 `text` 本质是一样的，同样可以接受一些 `text-*` 类的 css

spinner 默认颜色是黑色，设置 `variant` 来改变 spinner 的颜色。`variant` prop 会给 spinner 添加 `text-*` 类颜色，比如 `text-danger`。

```html
<template>
  <div>
    <div class="text-center mb-3 d-flex justify-content-between">
      <nly-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
      ></nly-spinner>
    </div>

    <div class="text-center d-flex justify-content-between">
      <nly-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
        type="grow"
      ></nly-spinner>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        variants: [
          "primary",
          "secondary",
          "info",
          "success",
          "danger",
          "indigo",
          "purple",
          "pink",
          "navy",
          "light",
          "warning",
          "lightblue",
          "olive",
          "lime",
          "fuchsia",
          "maroon",
          "blue",
          "orange",
          "teal",
          "white",
          "gray",
          "dark"
        ]
      };
    }
  };
</script>

<!-- varaint.name -->
<!-- variant.vue -->
```

## 大小

可以设置 `sm` prop 渲染小型的 spinner

```html
<div>
  <nly-spinner sm label="Small Spinner"></nly-spinner>
  <nly-spinner sm label="Small Spinner" type="grow"></nly-spinner>
</div>
<!-- sm.name -->
<!-- sm.vue -->
```

也可以设置 `style` 属性来渲染 spinner 的大小

```html
<div>
  <nly-spinner
    style="width: 3rem; height: 3rem;"
    label="Large Spinner"
  ></nly-spinner>
  <nly-spinner
    style="width: 6rem; height: 6rem;"
    label="Large Spinner"
    type="grow"
  ></nly-spinner>
</div>

<!-- size.name -->
<!-- size.vue -->
```

## 位置

### 边距

可以设置 `m-*`, `mr-*`, `mt-*`, `ml-*` 等 css 类来调整 spinner 的边距

```html
<div>
  <nly-spinner class="m-5" label="Busy"></nly-spinner>
</div>

<!-- 边距.name -->
<!-- margin.vue -->
```

### flex

```html
<div>
  <div class="d-flex justify-content-center mb-3">
    <nly-spinner label="Loading..."></nly-spinner>
  </div>

  <div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <nly-spinner class="ml-auto"></nly-spinner>
  </div>
</div>

<!-- flex.name -->
<!-- flex.vue -->
```

### float

```html
<div class="clearfix">
  <nly-spinner class="float-right" label="Floated Right"></nly-spinner>
</div>

<!-- float.name -->
<!-- float.vue -->
```

### center

```html
<div class="text-center">
  <nly-spinner variant="primary" label="Text Centered"></nly-spinner>
</div>

<!-- center.name -->
<!-- center.vue -->
```

## 按钮 spinner

```html
<template>
  <div>
    <nly-button variant="primary" disabled>
      <nly-spinner sm></nly-spinner>
      <span class="sr-only">Loading...</span>
    </nly-button>

    <nly-button variant="primary" disabled>
      <nly-spinner sm type="grow"></nly-spinner>
      Loading...
    </nly-button>

    <nly-button variant="primary" @click="status =!status" :disabled="status">
      <div v-show="status">
        <nly-spinner sm type="grow"></nly-spinner>
        loading
      </div>
      <div v-show="!status">
        提交
      </div>
    </nly-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: false
      };
    }
  };
</script>

<!-- 按钮.name -->
<!-- button spinner.vue -->
```
