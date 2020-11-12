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
