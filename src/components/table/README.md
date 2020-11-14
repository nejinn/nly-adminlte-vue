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

## Items 表格数据主体

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

| 属性            | 类型    | 描述                                                                                                                                                                                        |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_cellVariants` | Object  | 设置每一个单元格的背景颜色. 可选 `primary`, `secondary`, `dark`, `light`, `info`, `danger`, `warning`, `success` . 这些 prop 会渲染成 `table-${variant}` 或者 `bg-${variant}` (设置 `dark`) |
| `_rowVariant`   | String  | 设置每一行的背景颜色. 可选 `primary`, `secondary`, `dark`, `light`, `info`, `danger`, `warning`, `success` . 这些 prop 会渲染成 `table-${variant}` 或者 `bg-${variant}` (设置 `dark`)       |
| `_showDetails`  | Boolean | 用来显示 `row-details` 插槽的内容. 具体请查看 [Row details 插槽](#row-details-support)                                                                                                      |

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

点击 [函数类型 items](#函数类型items) 查看详情

**注意**

- 请不要直接修改操作 `items` ， 因为修改 `items` 会导致 表格重新渲染， 如果需要修好某些数据， 请查看 [Primary Key](#primary-key)

- `items` 数组应该是一个简单的数组对象，并且必须避免在某一行的值中添加可能具有循环引用的数据。`<nly-table>` 将对行数据序列化为字符串进行排序和筛选，循环引用将导致堆栈溢出并导致
  应用程序崩溃

## 自定义表头

`fields` prop 会渲染为表格的表头，并按照顺序来渲染每一个列。 fields 中对象的 key 会被提取出来渲染表头，并用来完成其他功能，比如 **[排序](#排序)**

`fields` 应该是一个简单的数组对象， 在表格额你不， `fields` 会被转化为一个标准的数组

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
