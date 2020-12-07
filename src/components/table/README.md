# Table

> 一个支持分页，过滤，排序，异步数据等功能的表格. 如果只需要简单的展示数据可以使用组件 `nly-table-lite` 和 `nly-table-simple`

> 通常情况下可以配合分页组件 `nly-bootstrap-pagination` 使用，如果需要高度定制分页功能和函数, 请使用 `nly-pagination` 组件

**带有分页的加单用法**

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

<!-- 带有分页.name -->
<!-- with pagination.vue -->
```

**简单用法**

```html
<template>
  <div>
    <nly-table striped hover :items="items"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: "诸葛亮", last_name: "诸葛" },
          { age: 21, first_name: "刘备", last_name: "刘" },
          { age: 89, first_name: "曹操", last_name: "曹" },
          { age: 38, first_name: "郭嘉", last_name: "郭" }
        ]
      };
    }
  };
</script>

<!-- 简单用法.name -->
<!-- demo.vue -->
```

## 表格数据主体（items）

items 是数组类型的，且每个元素都是 `key-value`对象。 是表格渲染数据主体。

```js
const items = [
  { age: 32, first_name: "Cyndi" },
  { age: 27, first_name: "Havij" },
  { age: 42, first_name: "Robert" }
];
```

`<nly-table>` 会自动提取 `items` 第一个元素的 `key` 来生成表头，并会对 `kebab-case`, `snake_case`, `camelCase` 写法的 key 进行转化， 转为 `Kebab Case` 这样的写法。

- `first_name` 转为 `First Name`
- `last-name` 转为 `Last Name`
- `age` 转为 `Age`
- `YEAR` 转为 `YEAR`
- `isActive` 转为 `Is Active`
- `key` 可以是中文，但是不会进行转化

提取出来生成表头的 `key` 会按照在 `items` 中第一条数据中的顺序渲染在表头。 至于自定义表头，请查看下面 **[自定义表头](#自定义表头)**

**注意**

表头的顺序并不能保证一定是按照 `items` 中第一条数据中的顺序渲染，在不同的浏览器中可能会出现不同的顺序。如果需要保证顺序， 请查看 [自定义表头](#自定义表头)

`items` 每个元素还有一部分可选属性，用来设置每个单元格的颜色或着触发单元格事件。支持的可选属性如下：

| 属性                              | 类型    | 描述                                                                                                                                                                                        |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_cellVariants`                   | Object  | 设置每一个单元格的背景颜色. 可选 `primary`, `secondary`, `dark`, `light`, `info`, `danger`, `warning`, `success` . 这些 prop 会渲染成 `table-${variant}` 或者 `bg-${variant}` (设置 `dark`) |
| `_rowVariant`                     | String  | 设置每一行的背景颜色. 可选 `primary`, `secondary`, `dark`, `light`, `info`, `danger`, `warning`, `success` . 这些 prop 会渲染成 `table-${variant}` 或者 `bg-${variant}` (设置 `dark`)       |
| `_showDetails`                    | Boolean | 用来显示 `row-details` 插槽的内容. 具体请查看                                                                                                                                               |
| [Row details 插槽](#每行详细数据) |

```html
<template>
  <div>
    <nly-table hover :items="items"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: "诸葛亮", last_name: "孔明" },
          { age: 21, first_name: "赵云", last_name: "子龙" },
          {
            age: 89,
            first_name: "张飞",
            last_name: "翼德",
            _rowVariant: "danger"
          },
          {
            age: 40,
            first_name: "关羽",
            last_name: "云长",
            _cellVariants: { age: "info", first_name: "warning" }
          },
          { age: 29, first_name: "曹操", last_name: "沙雕" }
        ]
      };
    }
  };
</script>

<!-- items 可选属性.vue -->
<!-- items 可选属性.name -->
```

`items` 可以是一个函数，函数的返回值应该是一个数组，函数可以支持异步数据

- 返回 `null` 或者 `undefined` 直到异步结束, 当数据回调成功之后，返回唯一一个参数，这个参数应该是 `items` 类似的数组

- `Promise` 到达 resolves 状态之后，函数应该返回一个数组结果

点击 [函数类型 items](#函数类型（items）) 查看详情

**注意**

- 请不要直接修改操作 `items` ， 因为修改 `items` 会导致 表格重新渲染， 如果需要修好某些数据， 请查看 [Primary Key](#primary-key)

- `items` 数组应该是一个简单的数组对象，并且必须避免在某一行的值中添加可能具有循环引用的数据。`<nly-table>` 将对行数据序列化为字符串进行排序和筛选，循环引用将导致堆栈溢出并导致
  应用程序崩溃

## 自定义表头

`fields` prop 会渲染为表格的表头，并按照顺序来渲染每一个列。 fields 中对象的 key 会被提取出来渲染表头，并用来完成其他功能，比如 **[排序](#排序)**

`fields` 应该是一个简单的数组对象， 在表格内部， `fields` 会被转化为一个标准的数组

### 简单数组

简单数组的 `fields`, 表头会严格按照数组顺序来渲染

```html
<template>
  <div>
    <nly-table striped hover :items="items" :fields="fields"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["first_name", "last_name", "age"],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "诸葛亮",
            last_name: "诸葛孔明"
          },
          { isActive: false, age: 21, first_name: "张飞", last_name: "张翼德" },
          { isActive: false, age: 89, first_name: "刘备", last_name: "刘阿斗" },
          { isActive: true, age: 38, first_name: "赵云", last_name: "赵子龙" }
        ]
      };
    }
  };
</script>

<!-- simple fields.name -->
<!-- simple fields.vue -->
```

### 对象数组

对象数组 `fields` 可以给列设置更多的属性，比如 `sortable`(允许排序), `variant`(颜色) 等。只有 `fields` 中每个元素中的 `key` 对应的
列名才会渲染出来，没有设置的 `key` 的列不会渲染。

**注意：** 下面这个 demo 中， `isActive` 这列在 `fields` 中没有对应的 `key`, 所以没有渲染出来

```html
<template>
  <div>
    <nly-table striped hover :items="items" :fields="fields"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: "last_name",
            sortable: true
          },
          {
            key: "first_name",
            sortable: false
          },
          {
            key: "age",
            label: "Person age",
            sortable: true,
            variant: "danger"
          }
        ],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "nly",
            last_name: "adminlte"
          },
          { isActive: false, age: 21, first_name: "张飞", last_name: "翼德" },
          {
            isActive: false,
            age: 89,
            first_name: "赵云",
            last_name: "子龙"
          },
          { isActive: true, age: 38, first_name: "刘备", last_name: "玄德" }
        ]
      };
    }
  };
</script>

<!-- 对象数组 fields.name -->
<!-- fields.vue -->
```

### fields 自定义属性

| 属性                                   | 类型                        | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                  | String                      | 需要渲染的列名， `items` 数组中的键， `fields` 为数组对象的时候， `key` 必须设置。 `key` 也可以 用于[自定义渲染数据](#自定义渲染数据) and [插槽自定义头部和底部](#插槽自定义头部和底部) names.                                                                                                                                                                                                                                                                                       |
| `label`                                | String                      | 每一列的别名，如果没有提供，则会用 `key`（对 key 进行内部格式转化[表格数据主体（items）](#表格数据主体（items）)） 来代替， 如果设置了 `foot-clone` true， 底部列名也会用 `label代替`， 可以设置空字符（`label=""`）显示空白列名                                                                                                                                                                                                                                                     |
| `headerTitle`                          | String                      | 设置表头中 `<th>` 的 `title` 属性.， 默认是没有这个属性的                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `headerAbbr`                           | String                      | 设置表头中 `<th>` 的 `abbr` 属性， 如果标签（或标题）是缩写，则将其设置为标签（或标题）的未缩写版本。默认为无 abbr 属性                                                                                                                                                                                                                                                                                                                                                              |
| `class`                                | String or Array             | 自定义 css 类型， 会添加到每一列的 `<th>` **和** `<td>` 元素中                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `formatter`                            | String or Function          | 列数据格式化函数, 调用方式为 `formatter(value, key, item)`. 更多详情请查看 [自定义渲染数据](#自定义渲染数据)                                                                                                                                                                                                                                                                                                                                                                         |
| `sortable`                             | Boolean                     | 设置 `true` 允许排序， 更多详情请查看 [排序](#排序)                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `sortKey`                              | String                      | <span class="badge badge-secondary">v0.7.0+</span> 当 `no-local-sorting` 是 `true` 的时候请设置 `sortBy`                                                                                                                                                                                                                                                                                                                                                                             |
| `sortDirection`                        | String                      | 设置排序方向，正序，倒序等， 更多详情请查看[修改排序方向](#修改排序方向)                                                                                                                                                                                                                                                                                                                                                                                                             |
| `sortByFormatted`                      | Boolean or Function         | 设置 true 的时候会按照上面的 `formatter` 属性格式化的值排序， 默认是 `false`。如果没有 `formatter` 属性， `sortByFormatted` 不起作用。 可以接受一个格式化的函数来格式化排序的数据，但是不会渲染到表格中，仅仅用来排序， 更多详情请查看 [排序](#排序)                                                                                                                                                                                                                                 |
| `filterByFormatted`                    | Boolean or Function         | 设置 true 的时候会按照上面的 `formatter` 属性格式化的值过滤， 默认是 `false`。如果没有 `formatter` 属性， `filterByFormatted` 不起作用。 可以接受一个格式化的函数来格式化过滤的数据，但是不会渲染到表格中，仅仅用来过滤， 更多详情请查看 [过滤](#过滤)                                                                                                                                                                                                                               |
| `tdClass`                              | String or Array or Function | `<tbody>` 中的 `<td>` 单元格自定义 css 类， 如果每个单元格都需要自定义 css 类， 请传入一个 `tdClass(value, key, item)` 函数,来设置， 返回值必须是 `Array`(数组) 或者 `String` 字符串                                                                                                                                                                                                                                                                                                 |
| `thClass`                              | String or Array             | 自定义 `<thead>`/`<tfoot>` 中的 `<th>` 单元格 css 类                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `thStyle`                              | Object                      | 自定义 `<thead>`/`<tfoot>` 中 `<th>` 元素的 style 属性                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `variant`                              | String                      | 每列中 `<th>` **和** `<td>` 元素的颜色。 值 `active`, `success`, `info`, `warning`, `danger` 会在表格 header 渲染`thead-${variant}` css 类, 表格 body 渲染 `table-${variant}` css 类， 如果设置 `dark` 会渲染 `bg-${variant}` css 类                                                                                                                                                                                                                                                 |
| `tdAttr`                               | Object or Function          | JavaScript object， 自定义 `<tbody>` 中 `<td>` 单元格的 attr 属性。 如果每个单元格都需要自定义 attr 属性， 请传入一个 `tdAttr(value, key, item)` 来设置，函数返回值必须是一个 `Object`(对象)                                                                                                                                                                                                                                                                                         |
| `thAttr`                               | Object or Function          | JavaScript object， 自定义 `<thead>`/`<tfoot>` 中 `<th>` 单元格的 attr 属性。 如果每个单元格都需要自定义 attr 属性， 请传入一个 `thAttr(value, key, item)` 来设置，函数返回值必须是一个 `Object`(对象)                                                                                                                                                                                                                                                                               |
| `isRowHeader`                          | Boolean                     | 设置 `true`, 单元格标签会渲染成 `<th>`， 默认渲染成`<td>`                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `stickyColumn`                         | Boolean                     | 设置 true, 表格会处于 [列浮动模式](#列浮动模式), 如果滚动条出现且滚动， 每一列会悬浮固定在左侧, 且会重叠， 查看更多详情 [列浮动模式](#列浮动模式)                                                                                                                                                                                                                                                                                                                                    |
| `fixed`                                | Boolean, String             | `fixed` 可选 `true`, `left`, `right`。 当 `stickyColumn` 设置为 `true` 的时候， 设置 `fixed` 值, 表格会处于 [冻结列模式](#冻结列模式)。 如果 `fixed= true`, 且表格出现滚动条，随着滚动条滚动， `fixed=true` 的列依次会悬浮在左侧(不会重叠)并随着滚动条滚动。 如果 `fixed='left'`, 这些列会提取到最左侧渲染，依次排列(不会重叠), 悬浮固定在左侧，且随着滚动条滚动而滚动。如果 `fixed='right'`, 这些列会提取到最又侧渲染，依次排列(不会重叠), 悬浮固定在右侧，且随着滚动条滚动而滚动。 |
| 查看更多详情 [冻结列模式](#冻结列模式) |

**注意**

- `fields` 的属性，如果不是格外说明， 默认值都是 `null`

- `class`, `thClass`, `tdClass` 等自定义 css 不会在 `scoped CSS` 中生效, 必须使用 [VueLoader's Deep selector](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B7%E7%94%A8%E6%9C%AC%E5%9C%B0%E5%92%8C%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F)

- 关于 `thStyle` 语法信息，请查看 [Class 与 Style 绑定](https://cn.vuejs.org/v2/guide/class-and-style.html)

- 自定义属性可以通过作用域插槽 `data`, `header`, 和 `footer` 访问， 详情请查看 [自定义渲染数据](#自定义渲染数据)

`fields` 支持混合使用字符串和对象

```js
const fields = [
  { key: "first_name", label: "First" },
  { key: "last_name", label: "Last" },
  "age",
  "sex"
];
```

## Primary key

`<nly-table>` 提供了一个 prop `primary-key`，用于给每列的行的 `key` 提供唯一标识

`primary-key` 的值必须是字符串或数字，并且在表的所有行中都必须唯一

`primary-key` 不需要出现在 `fields` 的可显示列中

### 表格每行的 id

如果设置了 `primary-key`， 表格的每一行的 `<tr>` 元素会自动生成一个唯一的 id， id 渲染的格式是 `{table-id}__row_{primary-key-value}`,
其中 `{table-id}` 是 `<nly-table>` 的唯一 id， `{primary-key-value}` 是 `primary-key` 的值和对应列的值。

### 表格渲染和动画

`primary-key` 会优化表格的渲染，在表格内部，由 `primary-key` prop 指定的列的对应每行的值会作为 `Vue :key` 作用于<tr>元素

如果使用第三方表转换或拖放插件，则指定主键列非常方便，因为它们依赖于每行都有且唯一的 `Vue :key`

如果没有提供 `primary-key`， `<nly-table>` 将根据显示行的索引号（即在显示的表行中的位置）自动生成键。这可能会导致 GUI 问题, 比如使用数据改变之前的数据进行渲染的子组件/元素指定主键列可以缓解此问题（或者可以在自定义格式字段槽中的元素/组件上设置唯一的 `:key`）

查看更多 [表格主体动画](#表格主体动画)

## 表格样式选项

| prop                 | 类型              | 描述                                                                                                                                                                                                                                                    |
| -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `striped`            | Boolean           | `<tbody>` 斑马纹式样 ， 即条纹式样                                                                                                                                                                                                                      |
| `bordered`           | Boolean           | 给所有单元格和头部添加圆角边框式样                                                                                                                                                                                                                      |
| `borderless`         | Boolean           | 移除所有单元格的内置边框 table.                                                                                                                                                                                                                         |
| `outlined`           | Boolean           | 给表格添加外边框， 如果 `bordered` prop 设置为 true， `outlined`会失效                                                                                                                                                                                  |
| `small`              | Boolean           | 小型表格                                                                                                                                                                                                                                                |
| `hover`              | Boolean           | 给`<tbody>` 中的每行添加添加鼠标悬浮效果                                                                                                                                                                                                                |
| `dark`               | Boolean           | 反转颜色-在深色背景上使用浅色文本                                                                                                                                                                                                                       |
| `fixed`              | Boolean           | 设置每列等宽，会加快渲染速度                                                                                                                                                                                                                            |
| `responsive`         | Boolean or String | 使得表格自适应宽度并添加水平滚动条，可选 'sm', 'md', 'lg', 'xl' 或者 'true', 由于 adminlte3 的 bug，（其实是 bootstrap 的 bug）, 通常水平滚动条并不会出现。可以在 table 外面套一层'<div class='table-responsive'>'， 查看等多详情 [响应模式](#响应模式) |
| `sticky-header`      | Boolean or String | 设置 true 会使得头部悬浮. 并且表格的最大高度为 300px, 使用其他 css 或者 style 可以设置表格的高度，查看更多详情 [头部浮动模式](#头部浮动模式)                                                                                                            |
| `stacked`            | Boolean or String | 表格堆叠模式. 设置 true 使得表格一直处于堆叠模式, 或者可以设置为对应的 'sm', 'md', 'lg', 'xl' 断点来使得表格在对应的断点变成堆叠模式, 查看更多详情 [堆叠模式](#堆叠模式)                                                                                |
| `caption-top`        | Boolean           | 如果表格有标题， 设置 `caption-top` 为 `true`, 标题会放置在表格上方， 如果设置为 `false` (默认值), 标题会放在表格底部                                                                                                                                   |
| `table-variant`      | String            | 表格颜色， 可选 'primary','secondary','info','danger','warning','success','light', 'dark'                                                                                                                                                               |
| `head-variant`       | String            | 头部颜色，可选 `'light'` or `'dark'`, 会覆盖 `head-row-variant`                                                                                                                                                                                         |
| `foot-variant`       | String            | 底部颜色，可选 `'light'` or `'dark'`， 如果没有传入值， 默认会使用 `head-variant` prop 的值，如果没有设置 `foot-clone` 则无效, 会覆盖 `foot-row-variant`                                                                                                |
| `foot-clone`         | Boolean           | 复制头部的内容到底部，并集成头部的功能                                                                                                                                                                                                                  |
| `no-footer-sorting`  | Boolean           | 设置为 true 的时候， 如果 `foot-clone` 为 true 且每列设置 `sortable`, 会禁用排序功能                                                                                                                                                                    |
| `no-border-collapse` | Boolean           | 禁用表格边框的可重叠性。主要用于 [头部浮动模式](#头部浮动模式) 和 [列浮动模式](#列浮动模式)。在某些情况下会导致出现双重边界                                                                                                                             |

示例 Demo

```html
<template>
  <div>
    <nly-form-group label="Table Options" label-cols-lg="2">
      <nly-form-checkbox v-model="striped" inline>Striped</nly-form-checkbox>
      <nly-form-checkbox v-model="bordered" inline>Bordered</nly-form-checkbox>
      <nly-form-checkbox v-model="borderless" inline
        >Borderless</nly-form-checkbox
      >
      <nly-form-checkbox v-model="outlined" inline>Outlined</nly-form-checkbox>
      <nly-form-checkbox v-model="small" inline>Small</nly-form-checkbox>
      <nly-form-checkbox v-model="hover" inline>Hover</nly-form-checkbox>
      <nly-form-checkbox v-model="dark" inline>Dark</nly-form-checkbox>
      <nly-form-checkbox v-model="fixed" inline>Fixed</nly-form-checkbox>
      <nly-form-checkbox v-model="footClone" inline
        >Foot Clone</nly-form-checkbox
      >
      <nly-form-checkbox v-model="noCollapse" inline
        >No border collapse</nly-form-checkbox
      >
    </nly-form-group>
    <nly-form-group label="Head Variant" label-cols-lg="2">
      <nly-form-radio-group v-model="headVariant" class="mt-lg-2">
        <nly-form-radio :value="null" inline>None</nly-form-radio>
        <nly-form-radio value="light" inline>Light</nly-form-radio>
        <nly-form-radio value="dark" inline>Dark</nly-form-radio>
      </nly-form-radio-group>
    </nly-form-group>
    <nly-form-group
      label="Table Variant"
      label-for="table-style-variant"
      label-cols-lg="2"
    >
      <nly-form-select
        v-model="tableVariant"
        :options="tableVariants"
        id="table-style-variant"
      >
        <template #first>
          <option value="">-- None --</option>
        </template>
      </nly-form-select>
    </nly-form-group>

    <nly-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["first_name", "last_name", "age"],
        items: [
          { age: 40, first_name: "nly", last_name: "adminlte" },
          { age: 21, first_name: "张飞", last_name: "翼德" },
          { age: 89, first_name: "赵云", last_name: "子龙" }
        ],
        tableVariants: [
          "primary",
          "secondary",
          "info",
          "danger",
          "warning",
          "success",
          "light",
          "dark"
        ],
        striped: false,
        bordered: false,
        borderless: false,
        outlined: false,
        small: false,
        hover: false,
        dark: false,
        fixed: false,
        footClone: false,
        headVariant: null,
        tableVariant: "",
        noCollapse: false
      };
    }
  };
</script>

<!-- 式样demo.name -->
<!-- style-demo.vue -->
```

### 行式样和属性

你可以使用 prop `tbody-tr-class` 给你每行设置自定义 css 类, 也可以使用 `tbody-tr-attr` 给每一行设置 attr 属性

| 属性             | 类型                      | 描述                                                                                                                                            |
| ---------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `tbody-tr-class` | String, Array or Function | 给表格每行设置自定义 css 类, 如果接受的是一个函数， 调用方式是 `tbodyTrClass( item, type )` ， 函数必须返回一个 `Array`, `Object` 或者 `String` |
| `tbody-tr-attr`  | Object or Function        | 给表格每行设置自定义 attrs 属性, 如果接受的是一个函数， 调用方式是 `tbodyTrAttr( item, type )` ， 函数必须返回一个 `Object`                     |

如果将函数传给 `tbody-tr-class` 和 `tbody-tr-attr`， 函数参数应该是：

- `item`, items 中每一行的数据， 如果数据不在 items 中， 那么 item 会自动转换为 `null` 或者 `undefined`

- `type`, 将要渲染在表格的哪个地方， 可选 `'row'`， `'row-details'`, `'row-top'`, `'row-bottom'`, `'table-busy'`。 `'row'` 是渲染在每一行数据，
  `'row-details'` 是渲染在每一行的 `row-detail` 插槽中，`'row-top'` 用于固定行顶部插槽，`'row-bottom'` 用于固定行底部插槽, `'table-busy'` 用于表格繁忙插槽

```html
<template>
  <div>
    <nly-table
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    ></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["first_name", "last_name", "age"],
        items: [
          {
            age: 40,
            first_name: "nly",
            last_name: "adminlte",
            status: "awesome"
          },
          { age: 21, first_name: "张飞", last_name: "翼德" },
          { age: 89, first_name: "赵云", last_name: "子龙" }
        ]
      };
    },
    methods: {
      rowClass(item, type) {
        if (!item || type !== "row") return;
        if (item.status === "awesome") return "table-success";
      }
    }
  };
</script>

<!-- row-style.name -->
<!-- row-style.vue -->
```

### 响应模式

prop `responsive` 可以让表格出现水平滚动条， 设置 `true` 可以使表格一直出现滚动条， 也可以设置为 `sm`, `md`, `lg`, `xl`， 使表格在对应的断点出现滚动条

```html
<template>
  <div>
    <nly-table responsive :items="items"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            heading1: "算尽天机-诸葛半仙",
            heading2: "算尽天机-诸葛半仙",
            heading3: "算尽天机-诸葛半仙",
            heading4: "算尽天机-诸葛半仙",
            heading5: "算尽天机-诸葛半仙",
            heading6: "算尽天机-诸葛半仙",
            heading7: "算尽天机-诸葛半仙",
            heading8: "算尽天机-诸葛半仙",
            heading9: "算尽天机-诸葛半仙",
            heading10: "算尽天机-诸葛半仙",
            heading11: "算尽天机-诸葛半仙",
            heading12: "算尽天机-诸葛半仙"
          },
          {
            heading1: "算尽天机-诸葛半仙",
            heading2: "算尽天机-诸葛半仙",
            heading3: "算尽天机-诸葛半仙",
            heading4: "算尽天机-诸葛半仙",
            heading5: "算尽天机-诸葛半仙",
            heading6: "算尽天机-诸葛半仙",
            heading7: "算尽天机-诸葛半仙",
            heading8: "算尽天机-诸葛半仙",
            heading9: "算尽天机-诸葛半仙",
            heading10: "算尽天机-诸葛半仙",
            heading11: "算尽天机-诸葛半仙",
            heading12: "算尽天机-诸葛半仙"
          },
          {
            heading1: "算尽天机-诸葛半仙",
            heading2: "算尽天机-诸葛半仙",
            heading3: "算尽天机-诸葛半仙",
            heading4: "算尽天机-诸葛半仙",
            heading5: "算尽天机-诸葛半仙",
            heading6: "算尽天机-诸葛半仙",
            heading7: "算尽天机-诸葛半仙",
            heading8: "算尽天机-诸葛半仙",
            heading9: "算尽天机-诸葛半仙",
            heading10: "算尽天机-诸葛半仙",
            heading11: "算尽天机-诸葛半仙",
            heading12: "算尽天机-诸葛半仙"
          }
        ]
      };
    }
  };
</script>

<!-- responsive.name -->
<!-- responsive.vue -->
```

```html
<template>
  <div class="table-responsive">
    <nly-table sticky-header :items="items"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            heading1: "算尽天机-诸葛半仙",
            heading2: "算尽天机-诸葛半仙",
            heading3: "算尽天机-诸葛半仙",
            heading4: "算尽天机-诸葛半仙",
            heading5: "算尽天机-诸葛半仙",
            heading6: "算尽天机-诸葛半仙",
            heading7: "算尽天机-诸葛半仙",
            heading8: "算尽天机-诸葛半仙",
            heading9: "算尽天机-诸葛半仙",
            heading10: "算尽天机-诸葛半仙",
            heading11: "算尽天机-诸葛半仙",
            heading12: "算尽天机-诸葛半仙"
          },
          {
            heading1: "算尽天机-诸葛半仙",
            heading2: "算尽天机-诸葛半仙",
            heading3: "算尽天机-诸葛半仙",
            heading4: "算尽天机-诸葛半仙",
            heading5: "算尽天机-诸葛半仙",
            heading6: "算尽天机-诸葛半仙",
            heading7: "算尽天机-诸葛半仙",
            heading8: "算尽天机-诸葛半仙",
            heading9: "算尽天机-诸葛半仙",
            heading10: "算尽天机-诸葛半仙",
            heading11: "算尽天机-诸葛半仙",
            heading12: "算尽天机-诸葛半仙"
          },
          {
            heading1: "算尽天机-诸葛半仙",
            heading2: "算尽天机-诸葛半仙",
            heading3: "算尽天机-诸葛半仙",
            heading4: "算尽天机-诸葛半仙",
            heading5: "算尽天机-诸葛半仙",
            heading6: "算尽天机-诸葛半仙",
            heading7: "算尽天机-诸葛半仙",
            heading8: "算尽天机-诸葛半仙",
            heading9: "算尽天机-诸葛半仙",
            heading10: "算尽天机-诸葛半仙",
            heading11: "算尽天机-诸葛半仙",
            heading12: "算尽天机-诸葛半仙"
          }
        ]
      };
    }
  };
</script>

<!-- responsive.name -->
<!-- responsive.vue -->
```

**注意**

- 由于 adminlte3 的 bug，（其实是 bootstrap 的 bug）, 可能水平滚动条并不会出现。可以在 table 外面套一层 `<div class='table-responsive'>`

- 这个 prop 可能会出现各种无法预料的 bug， 比如表格超出父元素等等，请在 table 外面套一层 `<div class='table-responsive'>`

- 同时使用 `responsive` 和 `fixed`， 会出现冲突。 这时候请给每列设置宽度， 文档中可以设置列宽的方法都可以

### 堆叠模式

prop `stacked` 可以让表格出现水平滚动条， 设置 `true` 可以使表格一直出现滚动条， 也可以设置为 `sm`, `md`, `lg`, `xl`， 使表格在对应的断点渲染成堆叠表

堆叠模式在应用于小屏或者移动端很有用处

每列的列名将会使用 `CSS::before` 伪元素呈现在每个字段值的左侧，宽度为 40%

`stacked` prop 的优先级高于 `responsive` prop，[`sticky-header`](#头部浮动模式) prop 和 [`sticky-column`](#列浮动模式) prop

```html
<template>
  <div>
    <nly-table stacked :items="items"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: "nly", last_name: "adminlte" },
          { age: 21, first_name: "张飞", last_name: "翼德" },
          { age: 89, first_name: "赵云", last_name: "子龙" }
        ]
      };
    }
  };
</script>

<!-- 堆叠模式.name -->
<!-- stacked.vue -->
```

### 表格标题

使用 `caption` prop 或者使用 `caption` 插槽可以给表格添加标题或者注释，默认 `caption` 在表格下方

```html
<template>
  <div>
    <nly-table :items="items" :fields="fields" caption="这是一个注释">
    </nly-table>
  </div>
  <div>
    <nly-table :items="items" :fields="fields">
      <template #table-caption>这是一个注释</template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["first_name", "last_name", "age"],
        items: [
          { age: 40, first_name: "nly", last_name: "adminlte" },
          { age: 21, first_name: "张飞", last_name: "翼德" },
          { age: 89, first_name: "赵云", last_name: "子龙" }
        ]
      };
    }
  };
</script>

<!-- caption.name -->
<!-- caption.vue -->
```

使用 `caption-top` prop， 设置为 `true` 可以让标题或者注释渲染在表格上方

```html
<template>
  <div>
    <nly-table
      :items="items"
      :fields="fields"
      caption="这是一个注释"
      caption-top
    >
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["first_name", "last_name", "age"],
        items: [
          { age: 40, first_name: "nly", last_name: "adminlte" },
          { age: 21, first_name: "张飞", last_name: "翼德" },
          { age: 89, first_name: "赵云", last_name: "子龙" }
        ]
      };
    }
  };
</script>

<!-- caption-top.name -->
<!-- caption-top.vue -->
```

### 作用域插槽 `table-colgroup`

使用作用域插槽 `table-colgroup` 设置每列的 `<colgroup>` 和 `<col>` 元素的式样

插槽 `table-colgroup` 可以接受以下参数：

| 属性      | 类型   | 描述                                                              |
| --------- | ------ | ----------------------------------------------------------------- |
| `columns` | Number | 表格中的列数                                                      |
| `fields`  | Array  | `fields` 数组中定义的元素， 更多详情请查看 [对象数组](#对象数组)) |

如果设置了 `table-colgroup`, 会把插槽内容嵌入到 `<colgroup>` 元素中， 您不需要额外设置 `<colgroup>` 元素， 如果辅助技术需要对表列进行分组， 请设置 `<col span="#">` （请使用一分组的列数来代替`#`）。

在某些情况下， 使用 `style` 或者 `css class` 来给 `<col>` 元素设置列宽的时候， 可能会使表格渲染成列的等宽模式， 可以结合使用 `responsive` 模式， 给每一列 `<col>` 元素设置显性的列宽和最小列宽

```html
<nly-table fixed responsive :items="items" :fields="fields" ...>
  <template #table-colgroup="scope">
    <col
      v-for="field in scope.fields"
      :key="field.key"
      :style="{ width: field.key === 'foo' ? '120px' : '180px' }"
    />
  </template>
</nly-table>
```

### 表格加载状态

`nly-table` 提供了一个 `busy` prop 来在视觉上显示表格加载状态， 在加载数据之前设置 `busy` 为 `true` 来展示加载状态， 加载完数据之后设置 `busy` 为 `false` 关闭加载提示。 加载状态会自动添加 attr 属性 `aria-busy="true"`

可以通过设置 `css` 来调整加载状态透明度

```css
table.nly-table[aria-busy="true"] {
  opacity: 0.6;
}
```

如果设置 `busy` prop 为 `true` 时， 也可以使用 `table-busy` 插槽来自定义加载状态消息。

```html
<template>
  <div>
    <nly-button @click="toggleBusy">切换加载状态</nly-button>

    <nly-table :items="items" :busy="isBusy" class="mt-3" outlined>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <nly-spinner class="align-middle"></nly-spinner>
          <strong>加载中...</strong>
        </div>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isBusy: false,
        items: [
          { age: 40, first_name: "nly", last_name: "adminlte" },
          { age: 21, first_name: "张飞", last_name: "翼德" },
          { age: 89, first_name: "赵云", last_name: "子龙" }
        ]
      };
    },
    methods: {
      toggleBusy() {
        this.isBusy = !this.isBusy;
      }
    }
  };
</script>

<!-- 加载状态.name -->
<!-- busy.vue -->
```

## 自定义渲染数据

可以使用 `scoped slots` 或者 `formatter` 函数来自定义每一列数据渲染形式

### Scoped fields slots

`scoped fields slots` 可以帮助更好的展示每一列的数据， 您可以使用 `scoped slots` 自定义渲染 `fields` 中指定列数据。如果您需要额外渲染一个不在 `items` 中的列， 在 `fields` 中添加列名， 在 scoped slots 中指定列名就可以了。 使用方式为 `cell(' + field key + ')`

```html
<template>
  <div>
    <nly-table small :fields="fields" :items="items" responsive="sm">
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(name)="data">
        <b class="text-info">{{ data.value.last.toUpperCase() }}</b>,
        <b>{{ data.value.first }}</b>
      </template>
      <template #cell(nameage)="data">
        {{ data.item.name.first }} is {{ data.item.age }} years old
      </template>
      <template #cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          "index",
          { key: "name", label: "Full Name" },
          "age",
          "sex",
          { key: "nameage", label: "First name and age" }
        ],
        items: [
          { name: { first: "张", last: "翼德" }, sex: "男", age: 42 },
          { name: { first: "诸葛", last: "孔明" }, sex: "女", age: 36 },
          { name: { first: "关", last: "云长" }, sex: "男", age: 73 },
          {
            name: { first: "赵", last: "子龙" },
            sex: "女",
            age: 62
          }
        ]
      };
    }
  };
</script>

<!-- scoped slots.name -->
<!-- scoped-slots.vue -->
```

`scoped slots` 中的变量具有以下属性：

| 属性             | 类型     | 描述                                                                                                                                                                    |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index`          | Number   | 每一个的行数，当前行的索引 （默认从 0 开始）                                                                                                                            |
| `item`           | Object   | 每当前行的数据， 即 `items` 中代表当前行数据（未进进行内部格式化的数据）                                                                                                |
| `value`          | Any      | `fileds` 中当前列的 `key` 值， 如果是一个额外的虚拟列，值会是 `null` 或者 `undefined`。 如果在 `fields` 中设置了 [`formatter`](#格式化函数)， 值是 `formatter` 返回的值 |
| `unformatted`    | Any      | `fileds` 中当前列的 `key` 值， 是[`formatter`](#格式化函数) 格式化之前的数据， 如果是一个额外的虚拟列，值会是 `null` 或者 `undefined`。                                 |
| `field`          | Object   | `fields` 中的元素                                                                                                                                                       |
| `detailsShowing` | Boolean  | 设置为 `true` 会显示 `row-details` 插槽内容， 查看更多详情 [每行详情数据](#每行详情数据)                                                                                |
| `toggleDetails`  | Function | 可以切换 `row-details` 插槽可见状态， 查看更多详情 [每行详情数据](#每行详情数据)                                                                                        |
| `rowSelected`    | Boolean  | 如果选中当前行 `rowSelected` 为 `true`, 更多详情请查看 [可选中模式](#可选中模式)                                                                                        |
| `selectRow`      | Function | 一个调用可以选中指定行的函数， 查看更多详情 [可选中模式](#可选中模式)                                                                                                   |
| `unselectRow`    | Function | 一个调用可以取消选中指定行的函数， 查看更多详情 [可选中模式](#可选中模式)                                                                                               |

**注意：**

- `index` 并不是每一行真正的所有，他只是在经过过滤， 排序， 分页之后根据当前页需要渲染的数据算出来的， 默认的 `index` 是显示每一行的行号， 将与可选的 v-model 绑定变量中的索引对齐

- 使用新版本的 V ue 2.6 `v-slot` 语法时，请注意插槽名称不能包含空格，而在浏览器中使用 DOM 模板时，插槽名称应该是小写。要解决这个问题，可以使用 Vue 的[动态插槽名称](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D)传递插槽名称

### 渲染 html 字符串

默认情况下， `nly-table` 会自动转义 `items` 中的 `html` 字符串，如果需要在 `nly-table` 中显示渲染 `html` 字符串， 请在 `scoped slots` 中使用 `v-html` 指令

```html
<template>
  <div>
    <nly-table :items="items">
      <template #cell(html)="data">
        <span v-html="data.value"></span>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: "This is <i>escaped</i> content",
            html:
              'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>'
          }
        ]
      };
    }
  };
</script>

<!-- html字符串.name -->
<!-- html.vue -->
```

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

### 格式化函数

可以使用 `formatter` 函数格式化对应 `field`(列) 的渲染， `formatter` 必须接受一个字符串或者函数。

如果接受的是字符串， 字符串对应的函数名函数应该在父组件中定义好。

如果接受的是函数， 函数应该在全局范围内申明，或者绑定到 `this`。

`formatter` 函数可以接受三个参数，分别是 `value`, `key`, `item`， 返回值必须是一个字符串。

```html
<template>
  <div>
    <nly-table :fields="fields" :items="items">
      <template #cell(name)="data">
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`"
          >{{ data.value }}</a
        >
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: "name",
            label: "Full Name",
            formatter: "fullName"
          },
          "age",
          {
            key: "sex",
            formatter: value => {
              return value.charAt(0).toUpperCase();
            }
          },
          {
            key: "birthYear",
            label: "Calculated Birth Year",
            formatter: (value, key, item) => {
              return new Date().getFullYear() - item.age;
            }
          }
        ],
        items: [
          { name: { first: "张", last: "翼德" }, sex: "男", age: 42 },
          { name: { first: "诸葛", last: "孔明" }, sex: "女", age: 36 },
          { name: { first: "关", last: "云长" }, sex: "男", age: 73 },
          {
            name: { first: "赵", last: "子龙" },
            sex: "女",
            age: 62
          }
        ]
      };
    },
    methods: {
      fullName(value) {
        return `${value.first} ${value.last}`;
      }
    }
  };
</script>

<!-- formatter.name -->
<!-- formatter.vue -->
```

## 插槽自定义头部和底部

`nly-table` 支持自定义设置页眉和页脚(头部和底部)，在默认情况下，可以设置 `foot_clone` 为 true 来 copy 一个页眉作为页脚

页眉页脚每一个单元格的**作用域插槽**使用方式为 `#head(<fieldkey>)='data'`, `#foot(<fieldkey>)='data'`。 如果没有设置页
脚插槽 `#foot(<fieldkey>)='data'`，而设置了 `foot-clone` 的话, 页眉会默认使用页眉插槽 `#head(<fieldkey>)='data'`

也可以使用 `#head()` 或者 `#foot()` 来代替作用域插槽，这种写法没有可调用的显性参数

**注意**

- `<fieldkey>` 为列名的 key

- `#head()` 和 `#foot()` 会作用于那些没有作用于插槽 `#head(<fieldkey>)='data'`, `#foot(<fieldkey>)='data'` 的列上

```html
<template>
  <div>
    <nly-table :fields="fields" :items="items" foot-clone>
      <template #cell(name)="data">
        {{ data.value.first }} {{ data.value.last }}
      </template>

      <template #head(name)="data">
        <span class="text-info">{{ data.label.toUpperCase() }}</span>
      </template>
      <template #foot(name)="data">
        <span class="text-danger">{{ data.label }}</span>
      </template>
      <template #foot()="data">
        <i>{{ data.label }}</i>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [{ key: "name", label: "全名" }, "age", "sex"],
        items: [
          { name: { first: "飞", last: "张" }, sex: "男", age: 42 },
          { name: { first: "云", last: "赵" }, sex: "男", age: 36 },
          { name: { first: "羽", last: "关" }, sex: "女", age: 73 },
          {
            name: { first: "孔明", last: "诸葛" },
            sex: "女",
            age: 62
          }
        ]
      };
    }
  };
</script>
<!-- head-foot.name -->
<!-- head-foot.vue -->
```

页眉页脚的作用域可调用参数

| 参数            | 类型   | 描述                                                               |
| --------------- | ------ | ------------------------------------------------------------------ |
| `column`        | String | fields prop 的 `key` 值                                            |
| `field`         | Object | 列对象 (`fields` prop 中当前列对应的对象元素)                      |
| `label`         | String | `fields` prop 中的 `label` 值 (也可以用 `data.field.label` 来代替) |
| `selectAllRows` | Method | 选中所有所有行 (只有处于 [`可选中模式`](#可选中模式) 模式才有效    |
| `clearSelected` | Method | 取消选中行 (只有处于 [`可选中模式`](#可选中模式) 模式才有效        |

如果往插槽 `head(...)` 和 `foot(...)` 插入 `inputs`, `buttons`, `selects` 或者 `links` 组件时和元素时，请注意：

- 点击 `input`, `select`, `textarea` 的时候， `head-clicked` 不会被触发

- 点击 `links`, `buttons` 时， `head-clicked` 不会触发

- 使用 `vue 2.6` 的 `v-slot` 写法时， 插槽明不能包含空格。 使用浏览器 dom 元素的时候，插槽名应该小写。如果需要以上情况以外的写法，请查看 [Vue's dynamic slot names](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D)

### 添加自定义表头

使用作用域插槽 `thead-top` 向表头添加额外的行内容， 这些行内容会插入 `fields` 表头之前，且不会被 `<tr>..</tr>` 标签包裹

不建议插入原生 dom 元素，您可以查看 [表格组件](#表格组件) 来选择需要插入的组件

`rowspan` 可以设置占用列高， `colspan`可以设置占用列宽

```html
<template>
  <div>
    <nly-table :items="items" :fields="fields" responsive="sm">
      <template #thead-top="data">
        <nly-tr>
          <nly-th rowspan="2" colspan="2"
            ><span class="sr-only">空列名</span></nly-th
          >
          <nly-th variant="secondary">列1</nly-th>
          <nly-th variant="primary" colspan="3">列2</nly-th>
          <nly-th variant="danger">列3</nly-th>
        </nly-tr>
        <nly-tr>
          <nly-th variant="secondary">列1</nly-th>
          <nly-th variant="primary" colspan="3">列2</nly-th>
          <nly-th variant="danger">列3</nly-th>
        </nly-tr>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "Stephen Hawking",
            id: 1,
            type1: false,
            type2a: true,
            type2b: false,
            type2c: false,
            type3: false
          },
          {
            name: "Johnny Appleseed",
            id: 2,
            type1: false,
            type2a: true,
            type2b: true,
            type2c: false,
            type3: false
          },
          {
            name: "George Washington",
            id: 3,
            type1: false,
            type2a: false,
            type2b: false,
            type2c: false,
            type3: true
          },
          {
            name: "Albert Einstein",
            id: 4,
            type1: true,
            type2a: false,
            type2b: false,
            type2c: true,
            type3: false
          },
          {
            name: "Isaac Newton",
            id: 5,
            type1: true,
            type2a: true,
            type2b: false,
            type2c: true,
            type3: false
          }
        ],
        fields: [
          "name",
          { key: "id", label: "ID" },
          { key: "type1", label: "Type 1" },
          { key: "type2a", label: "Type 2A" },
          { key: "type2b", label: "Type 2B" },
          { key: "type2c", label: "Type 2C" },
          { key: "type3", label: "Type 3" }
        ]
      };
    }
  };
</script>

<!-- 自定义表头.name -->
<!-- custom-header.vue -->
```

插槽 `thead-top` 作为作用域插槽使用的时候，可以调用以下属性:

| 参数            | 类型   | 描述                                                            |
| --------------- | ------ | --------------------------------------------------------------- |
| `columns`       | Number | 表格的列数                                                      |
| `field`         | Object | 列对象 (`fields` prop 中当前列对应的对象元素)                   |
| `selectAllRows` | Method | 选中所有所有行 (只有处于 [`可选中模式`](#可选中模式) 模式才有效 |
| `clearSelected` | Method | 取消选中行 (只有处于 [`可选中模式`](#可选中模式) 模式才有效     |

### 自定义底部

如果需要自定义 `<tfoot>`的布局和式样， 可以使用 `custom-foot` 插槽来自定义每一个单元格，
不建议插入原生 dom 元素，您可以查看 [表格组件](#表格组件) 来选择需要插入的组件， 比如 `<nly-tr>`, `<nly-th>`, `<nly-td>`

插槽 `custom-foot` 作为作用域插槽使用的时候，可以调用以下属性:

| 参数      | 类型   | 描述                                          |
| --------- | ------ | --------------------------------------------- |
| `columns` | Number | 表格的列数                                    |
| `field`   | Object | 列对象 (`fields` prop 中当前列对应的对象元素) |
| `items`   | Array  | 数据在分页，排序，筛选之后的数据对象          |

**注意:**

- 如果设置了 prop `foot-clone`， 插槽 `custom-foot` 不会生效
- 点击 `custom-foot` 插槽中的单元格时不会触发 `head-clicked` 事件
- 排序和开启排序显示的图标在插槽 `custom-foot` 不会生效
- 堆叠模式表格不会显示页脚

## 使用插槽自定义空表格状态

使用 `empty-text`, `empty-filtered-text`, `empty-html`, `empty-filtered-html` 可以自定义空表格显示内容

必选设置 `show-empty` 和空的 `items` 才会渲染以上 prop 传入的值

```html
<template>
  <div>
    <nly-table :fields="fields" :items="items" show-empty>
      <template #empty="scope">
        <h4>{{ scope.emptyText }}</h4>
      </template>
      <template #emptyfiltered="scope">
        <h4>{{ scope.emptyFilteredText }}</h4>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [],
        items: []
      };
    }
  };
</script>
<!-- empty.name -->
<!-- empty.vue -->
```

| prop                | 类型   | 描述                                  |
| ------------------- | ------ | ------------------------------------- |
| `emptyHtml`         | String | `empty-html` prop                     |
| `emptyText`         | String | `empty-text` prop                     |
| `emptyFilteredHtml` | String | `empty-filtered-html` prop            |
| `emptyFilteredText` | String | `empty-filtered-text` prop            |
| `fields`            | Array  | `fields` prop                         |
| `items`             | Array  | `items` prop. 应该设置为 null 或者 [] |

## 其他功能

### 头部浮动模式

使用 `sticky-header` prop 可以使表格出现垂直滚动条，并且是表头固定在顶部（表头浮动在顶部），可以随着滚动条一起向下或者向上滚动

设置 `sticky-header` 为 `true`， 默认会给表头添加一个最大高度 `300px`。 如果需要设置其他高度， 可以设置 `sticky-header='100px'`。

如果表格内容高度比表格可见高度大， 滚动滚动条的时候，表头会始终悬浮在顶部

```html
<template>
  <div>
    <nly-table sticky-header :items="items" head-variant="light"></nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          },
          {
            heading1: "table cell",
            heading2: "table cell",
            heading3: "table cell"
          }
        ]
      };
    }
  };
</script>
<!-- 浮动表头.name -->
<!-- sticky-header.vue -->
```

**注意：**

- 堆叠模式下， `sticky-header` 无效

- 表头浮动模式需要设置表格最大高度

- 表头浮动模式需要引入 `nly-adminlte-vue.css`

- 表头浮动模式用的是 `sticky` 定义， ie 浏览器会有兼容性问题

### 列浮动模式

设置 `stickyColumn` 可以使列浮动在左侧，随着滚动条一起滚动， `stickyColumn` 只有在 `sticky-header` 或者 [`responsive` (水平滚动条)](#水平滚动条) 设置为 `true` 或者有值的时候才有效

```html
<template>
  <div>
    <div class="mb-2">
      <nly-form-checkbox v-model="stickyHeader" inline
        >Sticky header</nly-form-checkbox
      >
      <nly-form-checkbox v-model="noCollapse" inline
        >No border collapse</nly-form-checkbox
      >
    </div>
    <nly-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
    >
      <template #head(id)="scope">
        <div class="text-nowrap">Row ID</div>
      </template>
      <template #head()="scope">
        <div class="text-nowrap">
          Heading {{ scope.label }}
        </div>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stickyHeader: true,
        noCollapse: false,
        fields: [
          {
            key: "id",
            stickyColumn: true,
            isRowHeader: true,
            variant: "primary"
          },
          "a",
          "b",
          { key: "c", stickyColumn: true, variant: "info" },
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l"
        ],
        items: [
          {
            id: 1,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 2,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 3,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 4,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 5,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 6,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 7,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 8,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 9,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 10,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          }
        ]
      };
    }
  };
</script>

<!-- stickyColumn.name -->
<!-- stickyColumn.vue -->
```

**注意：**

- 堆叠模式下， `stickyColumn` 无效

- 表头浮动模式需要处于表头浮动模式挥着有水平滚动条

- 表头浮动模式需要引入 `nly-adminlte-vue.css`

- 表头浮动模式用的是 `sticky` 定义， ie 浏览器会有兼容性问题

- 表头浮动模式浮动列在最左侧会重叠在一起，如果不想重叠，请设置宽度或者使用[列冻结模式](#冻结列模式)

#### 冻结列模式

列冻结模式需要在 `fields` 中设置属性 `fixed`， 冻结列分为左侧冻结，右侧冻结，自由冻结

- 左侧冻结会把设置 `fixed='left'`的列提取到最左侧渲染，且不会重叠

- 右侧侧冻结会把设置 `fixed='right'`的列提取到最右侧渲染，且不会重叠

- 左右冻结会把设置 `fixed=true` 悬浮起来，会随着滚动条的滚动而固定到左侧，位置排列的左侧冻结列的后面，且不会重叠

- 列冻结模式需要在列浮动模式下才会生效

#### 自由冻结

自由列冻结模式需要在列浮动模式下才会生效，即必须设置 `stickyColumn` 为 `true`， 且 `fixed=true`

```html
<template>
  <div>
    <div class="mb-2">
      <nly-form-checkbox v-model="stickyHeader" inline
        >Sticky header</nly-form-checkbox
      >
      <nly-form-checkbox v-model="noCollapse" inline
        >No border collapse</nly-form-checkbox
      >
    </div>
    <nly-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
    >
      <template #head(id)="scope">
        <div class="text-nowrap">Row ID</div>
      </template>
      <template #head()="scope">
        <div class="text-nowrap">
          Heading {{ scope.label }}
        </div>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stickyHeader: true,
        noCollapse: false,
        fields: [
          {
            key: "id",
            stickyColumn: true,
            isRowHeader: true,
            variant: "primary",
            fixed: true
          },
          "a",
          "b",
          { key: "c", stickyColumn: true, variant: "info", fixed: true },
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l"
        ],
        items: [
          {
            id: 1,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 2,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 3,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 4,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 5,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 6,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 7,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 8,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 9,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 10,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          }
        ]
      };
    }
  };
</script>

<!-- 冻结列.name -->
<!-- stickyColumn.vue -->
```

#### 左侧冻结

左侧列冻结模式需要在列浮动模式下才会生效，即必须设置 `stickyColumn` 为 `true`， 且 `fixed='left'`

```html
<template>
  <div>
    <div class="mb-2">
      <nly-form-checkbox v-model="stickyHeader" inline
        >Sticky header</nly-form-checkbox
      >
      <nly-form-checkbox v-model="noCollapse" inline
        >No border collapse</nly-form-checkbox
      >
    </div>
    <nly-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
    >
      <template #head(id)="scope">
        <div class="text-nowrap">Row ID</div>
      </template>
      <template #head()="scope">
        <div class="text-nowrap">
          Heading {{ scope.label }}
        </div>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stickyHeader: true,
        noCollapse: false,
        fields: [
          {
            key: "id",
            isRowHeader: true,
            variant: "primary"
          },
          "a",
          "b",
          { key: "c", stickyColumn: true, variant: "info", fixed: "left" },
          { key: "d", stickyColumn: true, variant: "info", fixed: "left" },
          "e",
          { key: "f", stickyColumn: true, variant: "primary", fixed: true },
          "g",
          "h",
          "i",
          "j",
          "k",
          "l"
        ],
        items: [
          {
            id: 1,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 2,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 3,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 4,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 5,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 6,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 7,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 8,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 9,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 10,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          }
        ]
      };
    }
  };
</script>

<!-- 冻结列.name -->
<!-- stickyColumn.vue -->
```

#### 右侧冻结

左侧列冻结模式需要在列浮动模式下才会生效，即必须设置 `stickyColumn` 为 `true`， 且 `fixed='right'`

```html
<template>
  <div>
    <div class="mb-2">
      <nly-form-checkbox v-model="stickyHeader" inline
        >Sticky header</nly-form-checkbox
      >
      <nly-form-checkbox v-model="noCollapse" inline
        >No border collapse</nly-form-checkbox
      >
    </div>
    <nly-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
    >
      <template #head(id)="scope">
        <div class="text-nowrap">Row ID</div>
      </template>
      <template #head()="scope">
        <div class="text-nowrap">
          Heading {{ scope.label }}
        </div>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stickyHeader: true,
        noCollapse: false,
        fields: [
          {
            key: "id",
            isRowHeader: true,
            variant: "primary"
          },
          "a",
          "b",
          { key: "c", stickyColumn: true, variant: "info", fixed: "left" },
          { key: "d", stickyColumn: true, variant: "info", fixed: "left" },
          "e",
          { key: "f", stickyColumn: true, variant: "primary", fixed: "right" },
          "g",
          "h",
          "i",
          "j",
          "k",
          { key: "l", stickyColumn: true, variant: "primary", fixed: "right" }
        ],
        items: [
          {
            id: 1,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 2,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 3,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 4,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 5,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 6,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 7,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 8,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 9,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          },
          {
            id: 10,
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11
          }
        ]
      };
    }
  };
</script>

<!-- 冻结列.name -->
<!-- stickyColumn.vue -->
```

### 每行详情数据

如果需要拓展显示每一条数据的其他详细信息，可以使用作用域插槽 `row-details` 配合 prop `_showDetails`
来显示。

在需要显示其他详细信息的行中，设置 `_showDetails` 为 `true`, 并插作用域插槽 `row-details`，此行会多渲染一个作用域插槽的内容

在作用域插槽中，你可以调用作用域插槽的 `toggleDetails` 函数来切换详细内容插槽的可见度

也可以设置 prop `detailsShowing` 的值切换详细内榕的可见状态

| 属性            | 类型     | 描述                                                                                        |
| --------------- | -------- | ------------------------------------------------------------------------------------------- |
| `item`          | Object   | 整行数据                                                                                    |
| `index`         | Number   | 当前显示详情行的行数                                                                        |
| `fields`        | Array    | fiedls 数组传入的经数据                                                                     |
| `toggleDetails` | Function | 切换当前详情数据可见状态的函数                                                              |
| `rowSelected`   | Boolean  | 如果当前行被选中，则 `rowSelected` 的值的为 `true`，点击 [可选中模式](#可选中模式) 查看更多 |
| `selectRow`     | Function | 调用该函数，则当前行会被选中， 击 [可选中模式](#可选中模式) 查看更多                        |
| `unselectRow`   | Function | 调用该函数，则当前行会取消选中， 击 [可选中模式](#可选中模式) 查看更多                      |

**注意：**

- 详情模式只在 `<nly-table>` 中可以用

```html
<template>
  <div>
    <nly-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <nly-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? '隐藏' : '显示'}} 详情
        </nly-button>
        <nly-form-checkbox
          v-model="row.detailsShowing"
          @change="row.toggleDetails"
        >
          选中展示详情
        </nly-form-checkbox>
      </template>

      <template #row-details="row">
        <nly-card>
          <nly-card-header>
            <nly-card-tool>
              <nly-button tool size="sm" @click="row.toggleDetails"
                >隐藏详情</nly-button
              >
            </nly-card-tool>
          </nly-card-header>
          <nly-card-body>
            <nly-row class="mb-2">
              <nly-col sm="3" class="text-sm-right"><b>Age:</b></nly-col>
              <nly-col>{{ row.item.age }}</nly-col>
            </nly-row>

            <nly-row class="mb-2">
              <nly-col sm="3" class="text-sm-right"><b>Is Active:</b></nly-col>
              <nly-col>{{ row.item.isActive }}</nly-col>
            </nly-row>
          </nly-card-body>
        </nly-card>
      </template>
    </nly-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["first_name", "last_name", "show_details"],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "张飞",
            last_name: "蜀国"
          },
          { isActive: false, age: 21, first_name: "诸葛亮", last_name: "蜀国" },
          {
            isActive: false,
            age: 89,
            first_name: "司马懿",
            last_name: "魏国",
            _showDetails: true
          },
          { isActive: true, age: 38, first_name: "孙权", last_name: "吴国" }
        ]
      };
    }
  };
</script>

<!-- detail.name -->
<!-- detail.vue -->
```

## 可选中模式

设置 prop `selectable` 会使表格渲染成可选中模式

设置 prop `select-mode` 可以设置可选中模式的类型：

- `'multi'`, 多选模式，可以随意选中每一列，默认为 `'multi'` 模式

- `'single'`, 单选模式，一次只能选中一列

- `'range'`, 点击可以选择任意列，其他未点击的会取消选中

可选中模式下，用户点击一行数据的时候会触发 `row-selected` 事件，会传递一个参数，这个参数是整个选中行的所有数据。

`<nly-table>` 可以调用以下方法来选中或者取消选中：

| 方法                   | 描述                                                                      |
| ---------------------- | ------------------------------------------------------------------------- |
| `selectRow(index)`     | 选中索引为 `index` 的行 number.                                           |
| `unselectRow(index)`   | 取消索引为 `index` 的行                                                   |
| `selectAllRows()`      | 选中表格当前页面所有行, 如果是 `single` 模式，则只会选择第一行            |
| `clearSelected()`      | 清除所有选中行                                                            |
| `isRowSelected(index)` | 如果索引为 `index` 行被选中了，则返回 `true`, 如果没有选中，则返回`false` |

**以上方法需要注意：**

- 索引 `index` 是从 `0` 开始的，且表格可见区域第一行是索引是 `0`, 索引值是经过排序，过滤，之后的的索引

- 在 `single` 模式中， `selectRow(index)` 会取消其他所有行的选中状态

- 没有出现的列上面的 `selectRow(index)`, `unselectRow(index)` 会被失效

- 以上方法必须在 prop `selectable` 设置为 `true` 才会生效

- 您可以设置 prop `no-select-on-click` 来禁用行点击事件， 这样就可以只通过调用以上方法以代码控制的方式来选中可取消表格行状态

**可选中模式需要注意：**

- [过滤](#过滤)， [分页](#分页), [排序](#排序) 会清除表格的选中状态， `row-selected` 事件会触发并返回一个空的数组。

- 如果表格 prop `selectable` 设置为 `true`， 即表格处于可选中模式，为了辅助技术实现，所有 `data` 中的 `tr` 元素都会被添加 `tabindex="0"` 属性， 且会设置 `aria-selected` 属性，如果列被选中，则 `aria-selected='true'`， 如果列没有被选中， 则 `aria-selected='false'`

- 如果是可选中模式，且 `select-mode` 为 `single`， 表格会有 `aria-multiselect='false'`属性；如果`select-mode` 为 `multi` 或者 `range`， 表格会有 `aria-multiselect='true'`属性

```html
<template>
  <div>
    <nly-form-group label="可选中类型:" label-cols-md="4">
      <nly-form-select
        v-model="selectMode"
        :options="modes"
        class="mb-3"
      ></nly-form-select>
    </nly-form-group>

    <nly-table
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      :items="items"
      :fields="fields"
      @row-selected="onRowSelected"
      responsive="sm"
    >
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <nly-icon icon="nlyfont nly-icon-success" />
          <span class="sr-only">选中</span>
        </template>
        <template v-else>
          <nly-icon icon="nlyfont nly-icon-check" />
          <span class="sr-only">未选中</span>
        </template>
      </template>
    </nly-table>
    <p>
      <nly-button size="sm" @click="selectAllRows">选中所有的</nly-button>
      <nly-button size="sm" @click="clearSelected">清除选中</nly-button>
      <nly-button size="sm" @click="selectThirdRow">选中第三行</nly-button>
      <nly-button size="sm" @click="unselectThirdRow"
        >取消第三行选中状态</nly-button
      >
    </p>
    <p>
      选中行:<br />
      {{ selected }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modes: ["multi", "single", "range"],
        fields: ["selected", "isActive", "age", "first_name", "last_name"],
        items: [
          {
            isActive: true,
            age: 40,
            first_name: "张飞",
            last_name: "蜀国"
          },
          { isActive: false, age: 21, first_name: "单于", last_name: "匈奴" },
          {
            isActive: false,
            age: 89,
            first_name: "孙权",
            last_name: "吴国"
          },
          { isActive: true, age: 38, first_name: "司马懿", last_name: "魏国" }
        ],
        selectMode: "multi",
        selected: []
      };
    },
    methods: {
      onRowSelected(items) {
        this.selected = items;
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows();
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected();
      },
      selectThirdRow() {
        this.$refs.selectableTable.selectRow(2);
      },
      unselectThirdRow() {
        this.$refs.selectableTable.unselectRow(2);
      }
    }
  };
</script>

<!-- 可选中模式.name -->
<!-- selected-mode.vue -->
```

## 表格组件

table helper components,

## 函数类型（items）

Using items provider functions （）

## 每行详情数据

（Row details support）

## 排序

## 分页

Sorting

Custom data rendering

## 修改排序方向

Change initial sort direction

## 过滤

Filtering

Responsive tables

## 头部浮动模式

Sticky headers

## 列浮动模式

Sticky columns

## 表格主体动画

Table body transition support -->
