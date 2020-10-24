# progress

> 一个支持水泊，垂直布局，支持显示数字，百分数，描述的进度条

```html
<template>
  <div>
    <nly-progress :value="value" :max="max" animated label-value></nly-progress>
    <nly-progress class="mt-2" :max="max" label-value>
      <nly-progress-bar
        :value="value * (6 / 10)"
        variant="success"
      ></nly-progress-bar>
      <nly-progress-bar
        :value="value * (2.5 / 10)"
        variant="warning"
      ></nly-progress-bar>
      <nly-progress-bar
        :value="value * (1.5 / 10)"
        variant="danger"
      ></nly-progress-bar>
    </nly-progress>

    <nly-button class="mt-3" @click="randomValue">Click me</nly-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 45,
        max: 100
      };
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max;
      }
    }
  };
</script>

<!-- 总览.name -->
<!-- zonglan.vue -->
```

## value

- 使用 `value` prop 来设置进度条的值，默认为 0

- 使用 `max` prop 来设置进度条的最大值，默认为 100

- 使用 `label-value` prop 来显示进度条的值

- 如果一个 `nly-progress` 中有多个进度条，请给 `nly-progress-bar` 设置 prop `value`, 详情请查看**[多个进度条](#多个进度条)**

## 标签 label

使用 `label-value` 来设置显示进度条的 label， 即 value， 可以设置 `label-value-percent` 来设置进度条为 label 为百分数，使用 `precision` prop 可以设置 label 的小数点位数

```html
<template>
  <div>
    <h5>No label</h5>
    <nly-progress :value="value" :max="max" class="mb-3"></nly-progress>

    <h5>label-value</h5>
    <nly-progress
      :value="value"
      :max="max"
      label-value
      class="mb-3"
    ></nly-progress>

    <h5>label-value 和 precision</h5>
    <nly-progress
      :value="value"
      :max="max"
      label-value
      :precision="4"
      class="mb-3"
    ></nly-progress>

    <h5>label-value-percent</h5>
    <nly-progress
      :value="value"
      :max="max"
      label-value-percent
      class="mb-3"
    ></nly-progress>

    <h5>label-value-percent 和 percent</h5>
    <nly-progress
      :value="value"
      :max="max"
      :precision="3"
      label-value-percent
      class="mb-3"
    ></nly-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 33.333333333,
        max: 50
      };
    }
  };
</script>

<!-- label.name -->
<!-- label.vue -->
```

### 自定义 label

如果需要自定义 label， 可以给 `nly-progress-bar` 设置 `label` 或者 `label-html` prop
或者我使用默认插槽，插入 dom

```html
<template>
  <div>
    <h5>Custom label via default slot</h5>
    <nly-progress :max="max" height="2rem">
      <nly-progress-bar :value="value">
        <span
          >Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span
        >
      </nly-progress-bar>
    </nly-progress>

    <h5 class="mt-3">Custom label via property</h5>
    <nly-progress :max="max">
      <nly-progress-bar
        :value="value"
        :label="`${((value / max) * 100).toFixed(2)}%`"
      ></nly-progress-bar>
    </nly-progress>

    <h5 class="mt-3">Custom label via property (HTML support)</h5>
    <nly-progress :max="max">
      <nly-progress-bar
        :value="value"
        :label-html="`<del>${value}</del>`"
      ></nly-progress-bar>
    </nly-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 33.333333333,
        max: 50
      };
    }
  };
</script>
<!-- label-html.name -->
<!-- label-html.vue -->
```

## 宽度和高度

`nly-progess` 会始终跟随父容器的宽度和高度，如果需要设置高度和宽度，需要额外设置

### 宽度

`nly-progress` 的宽度请尽量使用 `adminlte` 自带的 css 类

```html
<template>
  <div>
    <h5>Default width</h5>
    <nly-progress :value="value" class="mb-3"></nly-progress>

    <h5>Custom widths</h5>
    <nly-progress :value="value" class="w-75 mb-2"></nly-progress>
    <nly-progress :value="value" class="w-50 mb-2"></nly-progress>
    <nly-progress :value="value" class="w-25"></nly-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 75
      };
    }
  };
</script>

<!-- width.name -->
<!-- width and height.vue -->
```

### 高度

`nly-progress` 提供了 `size` 和 `height` prop 来设置高度， `size` 可选 `xxs`, `xs`, `sm`

```html
<template>
  <div>
    <h5>Default height</h5>
    <nly-progress :value="value" label-value class="mb-3"></nly-progress>

    <h5>Custom heights</h5>
    <nly-progress
      height="2rem"
      :value="value"
      label-value
      class="mb-2"
    ></nly-progress>
    <nly-progress
      height="20px"
      :value="value"
      label-value
      class="mb-2"
    ></nly-progress>
    <nly-progress height="2px" :value="value" label-value></nly-progress>

    <h5>size</h5>
    <nly-progress
      :value="value"
      size="xss"
      class="mb-2"
      label-value
    ></nly-progress>
    <nly-progress
      size="xs"
      :value="value"
      label-value
      class="mb-2"
    ></nly-progress>
    <nly-progress
      height="2px"
      :value="value"
      size="sm"
      label-value
    ></nly-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 75
      };
    }
  };
</script>

<!-- height.name -->
<!-- width and height.vue -->
```

## 背景和颜色

### variant 背景颜色

`variant` prop 可以设置背景颜色

```html
<template>
  <div>
    <div v-for="bar in bars" class="row mb-1">
      <div class="col-sm-2">{{ bar.variant }}:</div>
      <div class="col-sm-10 pt-1">
        <nly-progress
          :value="bar.value"
          :variant="bar.variant"
          :key="bar.variant"
        ></nly-progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bars: [
          { variant: "success", value: 75 },
          { variant: "info", value: 75 },
          { variant: "warning", value: 75 },
          { variant: "danger", value: 75 },
          { variant: "primary", value: 75 },
          { variant: "secondary", value: 75 },
          { variant: "dark", value: 75 },
          { variant: "indigo", value: 75 },
          { variant: "purple", value: 75 },
          { variant: "pink", value: 75 },
          { variant: "navy", value: 75 },
          { variant: "light", value: 75 },
          { variant: "lightblue", value: 75 },
          { variant: "olive", value: 75 },
          { variant: "lime", value: 75 },
          { variant: "fuchsia", value: 75 },
          { variant: "maroon", value: 75 },
          { variant: "blue", value: 75 },
          { variant: "orange", value: 75 },
          { variant: "teal", value: 75 },
          { variant: "white", value: 75 },
          { variant: "gray", value: 75 },
          { variant: "dark", value: 75 }
        ],
        timer: null
      };
    },
    mounted() {
      this.timer = setInterval(() => {
        this.bars.forEach((bar) => (bar.value = 25 + Math.random() * 75));
      }, 2000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
    }
  };
</script>

<!-- variant.name -->
<!-- variant.vue -->
```

### Striped 和 Animated

```html
<template>
  <div>
    <nly-progress
      :value="25"
      variant="success"
      :striped="striped"
    ></nly-progress>
    <nly-progress
      :value="50"
      variant="info"
      :striped="striped"
      class="mt-2"
    ></nly-progress>
    <nly-progress
      :value="75"
      variant="warning"
      :striped="striped"
      class="mt-2"
    ></nly-progress>
    <nly-progress
      :value="100"
      variant="danger"
      :striped="striped"
      class="mt-2"
    ></nly-progress>

    <nly-button variant="secondary" @click="striped = !striped" class="mt-3">
      {{ striped ? 'Remove' : 'Add' }} Striped
    </nly-button>

    <div class="mt-2">
      <nly-progress
        :value="25"
        variant="success"
        striped
        :animated="animate"
      ></nly-progress>
      <nly-progress
        :value="50"
        variant="info"
        striped
        :animated="animate"
        class="mt-2"
      ></nly-progress>
      <nly-progress
        :value="75"
        variant="warning"
        striped
        :animated="animate"
        class="mt-2"
      ></nly-progress>
      <nly-progress
        :value="100"
        variant="danger"
        :animated="animate"
        class="mt-3"
      ></nly-progress>

      <nly-button variant="secondary" @click="animate = !animate" class="mt-3">
        {{ animate ? 'Stop' : 'Start' }} Animation
      </nly-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        striped: true,
        animate: true
      };
    }
  };
</script>

<!-- Striped 和 Animated.name -->
<!-- Striped 和 Animated.vue -->
```

**注意**

- 设置 `animated` prop 时， `striped` 会失效

- 动画基于 css3， 不支持 css3 的浏览器动画不会生效

## 多个进度条

可以设置多个 `nly-progress-bar` 来狗 i 按多个水平进度条，但是多个进度条不支持垂直模式

```html
<template>
  <div>
    <nly-progress :max="max" class="mb-3">
      <nly-progress-bar variant="primary" :value="values[0]"></nly-progress-bar>
      <nly-progress-bar variant="success" :value="values[1]"></nly-progress-bar>
      <nly-progress-bar variant="info" :value="values[2]"></nly-progress-bar>
    </nly-progress>

    <nly-progress label-value :max="max" class="mb-3">
      <nly-progress-bar variant="primary" :value="values[0]"></nly-progress-bar>
      <nly-progress-bar variant="success" :value="values[1]"></nly-progress-bar>
      <nly-progress-bar variant="info" :value="values[2]"></nly-progress-bar>
    </nly-progress>

    <nly-progress show-value striped :max="max" class="mb-3">
      <nly-progress-bar variant="primary" :value="values[0]"></nly-progress-bar>
      <nly-progress-bar variant="success" :value="values[1]"></nly-progress-bar>
      <nly-progress-bar variant="info" :value="values[2]"></nly-progress-bar>
    </nly-progress>

    <nly-progress :max="max">
      <nly-progress-bar
        variant="primary"
        :value="values[0]"
        label-value
      ></nly-progress-bar>
      <nly-progress-bar
        variant="success"
        :value="values[1]"
        animated
        label-value
      ></nly-progress-bar>
      <nly-progress-bar
        variant="info"
        :value="values[2]"
        striped
        label-value
      ></nly-progress-bar>
    </nly-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        values: [15, 30, 20],
        max: 100
      };
    }
  };
</script>

<!-- 多个进度条.name -->
<!-- 多个进度条.vue -->
```

## vertical 垂直模式

```html
<nly-progress max="140" value="80" variant="info" vertical> </nly-progress>

<nly-progress max="190" value="80" variant="info" vertical size="sm">
</nly-progress>

<nly-progress max="190" value="80" variant="info" vertical size="xs">
</nly-progress>

<nly-progress max="190" value="80" variant="info" vertical size="xxs">
</nly-progress>

<!-- height.name -->
<!-- width and height.vue -->
```
