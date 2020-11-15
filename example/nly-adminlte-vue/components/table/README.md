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

| 属性                | 类型                        | 描述                                                                                                                                                                                                                                                   |
| ------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `key`               | String                      | 需要渲染的列名， `items` 数组中的键， `fields` 为数组对象的时候， `key` 必须设置。 `key` 也可以 用于[自定义渲染数据](#自定义渲染数据) and [自定义头部和底部插槽](#自定义头部和底部插槽) names.                                                         |
| `label`             | String                      | 每一列的别名，如果没有提供，则会用 `key`（对 key 进行内部格式转化[表格数据主体（items）](#表格数据主体（items）)） 来代替， 如果设置了 `foot-clone` true， 底部列名也会用 `label代替`， 可以设置空字符（`label=""`）显示空白列名                       |
| `headerTitle`       | String                      | 设置表头中 `<th>` 的 `title` 属性.， 默认是没有这个属性的                                                                                                                                                                                              |
| `headerAbbr`        | String                      | 设置表头中 `<th>` 的 `abbr` 属性， 如果标签（或标题）是缩写，则将其设置为标签（或标题）的未缩写版本。默认为无 abbr 属性                                                                                                                                |
| `class`             | String or Array             | 自定义 css 类型， 会添加到每一列的 `<th>` **和** `<td>` 元素中                                                                                                                                                                                         |
| `formatter`         | String or Function          | 列数据格式化函数, 调用方式为 `formatter(value, key, item)`. 更多详情请查看 [自定义渲染数据](#自定义渲染数据)                                                                                                                                           |
| `sortable`          | Boolean                     | 设置 `true` 允许排序， 更多详情请查看 [排序](#排序)                                                                                                                                                                                                    |
| `sortKey`           | String                      | <span class="badge badge-secondary">v0.7.0+</span> 当 `no-local-sorting` 是 `true` 的时候请设置 `sortBy`                                                                                                                                               |
| `sortDirection`     | String                      | 设置排序方向，正序，倒序等， 更多详情请查看[修改排序方向](#修改排序方向)                                                                                                                                                                               |
| `sortByFormatted`   | Boolean or Function         | 设置 true 的时候会按照上面的 `formatter` 属性格式化的值排序， 默认是 `false`。如果没有 `formatter` 属性， `sortByFormatted` 不起作用。 可以接受一个格式化的函数来格式化排序的数据，但是不会渲染到表格中，仅仅用来排序， 更多详情请查看 [排序](#排序)   |
| `filterByFormatted` | Boolean or Function         | 设置 true 的时候会按照上面的 `formatter` 属性格式化的值过滤， 默认是 `false`。如果没有 `formatter` 属性， `filterByFormatted` 不起作用。 可以接受一个格式化的函数来格式化过滤的数据，但是不会渲染到表格中，仅仅用来过滤， 更多详情请查看 [过滤](#过滤) |
| `tdClass`           | String or Array or Function | `<tbody>` 中的 `<td>` 单元格自定义 css 类， 如果每个单元格都需要自定义 css 类， 请传入一个 `tdClass(value, key, item)` 函数,来设置， 返回值必须是 `Array`(数组) 或者 `String` 字符串                                                                   |
| `thClass`           | String or Array             | 自定义 `<thead>`/`<tfoot>` 中的 `<th>` 单元格 css 类                                                                                                                                                                                                   |
| `thStyle`           | Object                      | 自定义 `<thead>`/`<tfoot>` 中 `<th>` 元素的 style 属性                                                                                                                                                                                                 |
| `variant`           | String                      | 每列中 `<th>` **和** `<td>` 元素的颜色。 值 `active`, `success`, `info`, `warning`, `danger` 会在表格 header 渲染`thead-${variant}` css 类, 表格 body 渲染 `table-${variant}` css 类， 如果设置 `dark` 会渲染 `bg-${variant}` css 类                   |
| `tdAttr`            | Object or Function          | JavaScript object， 自定义 `<tbody>` 中 `<td>` 单元格的 attr 属性。 如果每个单元格都需要自定义 attr 属性， 请传入一个 `tdAttr(value, key, item)` 来设置，函数返回值必须是一个 `Object`(对象)                                                           |
| `thAttr`            | Object or Function          | JavaScript object， 自定义 `<thead>`/`<tfoot>` 中 `<th>` 单元格的 attr 属性。 如果每个单元格都需要自定义 attr 属性， 请传入一个 `thAttr(value, key, item)` 来设置，函数返回值必须是一个 `Object`(对象)                                                 |
| `isRowHeader`       | Boolean                     | 设置 `true`, 单元格标签会渲染成 `<th>`， 默认渲染成`<td>`                                                                                                                                                                                              |
| `stickyColumn`      | Boolean                     | 设置 true, 表格会处于 [响应模式](#响应模式) 或 [头部浮动模式](#头部浮动模式), 如果滚动条出现且滚动， 每一列会悬浮固定在左侧. 查看更多详情 [列浮动模式](#列浮动模式)                                                                                    |

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

## 函数类型（items）

Using items provider functions （）

## 每行详情数据

（Row details support）

## 排序

Sorting

## 自定义渲染数据

Custom data rendering

## 自定义头部和底部插槽

Header and Footer custom rendering via scoped slots

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

Table body transition support
