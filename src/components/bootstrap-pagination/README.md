# Bootstrap Pagination

> 一个具有 bootstrap 特征的可以快速跳转第一页，最后一页，下一页，上一页，且可以被其他组件（`nly-table`）直接控制的分页

分页的总页数是由 prop `total-rows` 和 `per-page` 计算的。

```html
<template>
  <div class="overflow-auto" style="width:100%">
    <nly-bootstrap-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></nly-bootstrap-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <nly-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: "张三", last_name: "张" },
          { id: 2, first_name: "李四", last_name: "李" },
          { id: 3, first_name: "王五", last_name: "王" },
          { id: 4, first_name: "赵一", last_name: "赵" },
          { id: 5, first_name: "钱二", last_name: "钱" },
          { id: 6, first_name: "孙六", last_name: "孙" },
          { id: 7, first_name: "左七", last_name: "左" },
          { id: 8, first_name: "右八", last_name: "右" },
          { id: 9, first_name: "龙九", last_name: "龙" }
        ]
      };
    },
    computed: {
      rows() {
        return this.items.length;
      }
    }
  };
</script>

<!-- 简单分页.name -->
<!-- with pagination.vue -->
```

## 自定义外观和式样

`<nly-bootstrap-pagination>` 支持多个 prop 和 slots 来自定义外观和式样。 所有类似 `*-text` 的 prop 都是纯文本类型的，且非 `html` 字符串。同时还有对应的同名插槽。

### 自定义按钮显示数量

`<nly-bootstrap-pagination>` 可以支持自定义显示按钮数量（按钮包括：跳转到第一页按钮，上一页按钮，下一页按钮，跳转到最后一页按钮，跳转到指定一页按钮，省略号等）。

使用 `limit` prop 可以设置显示按钮的最大数量。 默认的最大数量按钮是 `5`，最小可设置为 `3`。当设置为 `3` 的时候，省略号并不会显示。

跳转到第一页按钮（`first`）和 跳转到最后一页按钮 （`last`） 可以设置 `hide-goto-end-buttons` 为 `true` 来隐藏

分页器中的 `...` 省略号可以用 `hide-ellipsis` prop 来隐藏

### 小屏模式

在较小的屏幕上， `<nly-bootstrap-pagination>` 的部分按钮会自动隐藏，以适应小屏显示。

- 省略号会在 `xs` 及更小的屏幕上自动隐藏

- 分页按钮数量在 `xs` 及更小的屏幕上会只显示 3 个

在小屏模式中， 分页一般只会出现三个按钮， 这三个按钮只会出现第一页，上一页，下一页，最后一页四个类型中的三个。

### 按钮文本内容

`*-text`一类 `slots` 和 `prop` 的用法：

```html
<template>
  <div class="overflow-auto">
    <nly-bootstrap-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></nly-bootstrap-pagination>

    <nly-bootstrap-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4"
    ></nly-bootstrap-pagination>

    <nly-bootstrap-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4"
    >
      <template #first-text><span class="text-success">First</span></template>
      <template #prev-text><span class="text-danger">Prev</span></template>
      <template #next-text><span class="text-warning">Next</span></template>
      <template #last-text><span class="text-info">Last</span></template>
      <template #ellipsis-text>
        <nly-spinner sm type="grow"></nly-spinner>
        <nly-spinner sm type="grow"></nly-spinner>
        <nly-spinner sm type="grow"></nly-spinner>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </nly-bootstrap-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        perPage: 10,
        currentPage: 1
      };
    }
  };
</script>

<!-- *-text.name -->
<!-- *-text.vue -->
```

`page`, `first-text`, `prev-text`, `next-text`, `last-text` 都是作用域插槽. `ellipsis-text` 是普通插槽。详情请查看[]()

**作用域插槽 `page` 可调用参数:**

| 参数       | 类型    | 描述                                               |
| ---------- | ------- | -------------------------------------------------- |
| `page`     | Number  | 页码，从 `1` 开始到 `总页数`                       |
| `index`    | Number  | 页码索引， 从 `1` 开始到 `总页数-1`                |
| `active`   | Boolean | 如果当前页码跟按钮指向的页码匹配，则会处于激活状态 |
| `disabled` | Boolean | 禁用当前页码按钮                                   |
| `content`  | String  | 当前页码按钮的文本内容                             |

**作用域插槽 `first-text`, `prev-text`, `next-text`, `last-text` 可调用参数:**

| 参数       | 类型    | 描述                                |
| ---------- | ------- | ----------------------------------- |
| `page`     | Number  | 页码， 从 `1` 开始到 `总页数`       |
| `index`    | Number  | 页码索引， 从 `1` 开始到 `总页数-1` |
| `disabled` | Boolean | 禁用当前页码按钮                    |

### 最后一页和第一页按钮类型

默认最后一页和第一页按钮是 `<<` 和 `>>`。可以设置 prop `first-number` 和 `last-number` 为 `true` 来使得按钮变为数字。

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>第一页按钮为数字</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6>最后一页为数字</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        last-number
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6>第一页和最后一页都是数字</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></nly-bootstrap-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        perPage: 1,
        currentPage: 5
      };
    }
  };
</script>

<!-- first and last number.name -->
<!-- first and last number.vue -->
```

### 大小

可以设置 `size` prop 来调整分页的大小， 可选 `sm`, `md`, `lg`

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>小型</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="sm"
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6>默认</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6>大型</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="lg"
      ></nly-bootstrap-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
      };
    }
  };
</script>

<!-- size.name -->
<!-- size.vue -->
```

### pills 圆形按钮

可以设置 `pills` 为 `true` 把分页外观从方形设为圆形

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>Small Pills</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="sm"
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6>Default Pills</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6>Large Pills</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="lg"
      ></nly-bootstrap-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 1
      };
    }
  };
</script>

<!-- pill page .name -->
<!-- pill page.vue -->
```

### 水平布局，位置

设置 `align` prop 可以调整分页的水平布局，可选 `left(start)`, `center`, `right(end)`, `fill`

```html
<template>
  <div class="overflow-auto">
    <div>
      <h6>左侧布局(默认)</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">居中布局</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="center"
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-right">右侧布局</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="right"
      ></nly-bootstrap-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">填充父元素</h6>
      <nly-bootstrap-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="fill"
      ></nly-bootstrap-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 100,
        currentPage: 3
      };
    }
  };
</script>

<!-- align.name -->
<!-- align.vue -->
```

## 阻止页码被选中

你可以使用 `page-click` 事件来阻止页码被选中。

`page-click` 事件可以传入 2 个参数：

- `nlyaEvent`, `NlyaEvent` 对象， 可以调用 `nlyaEvt.preventDefault()` 来取消或者阻止页码被选择

- `page`, 被选择的页码

对于屏幕阅读器来说， 你在使用 `page-click` 的时候需要提供一个消息来告诉屏幕阅读器这个页码被你阻止选择了。
更好的方式是设置 prop `disabled` 来禁用分页按钮点击事件
