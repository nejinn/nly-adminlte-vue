# Grid

> `nly-row` 和 `nly-col` 是一个移动端优先的 `flex-box` 布局，是 `adminlte3` 的响应式布局

```html
<nly-row>
  <nly-col xs="6" md="6" lg="3" col-class="bg-info">1</nly-col>
  <nly-col xs="6" md="2" lg="3" col-class="col bg-warning">2</nly-col>
  <nly-col xs="6" md="1" lg="3" col-class="col bg-danger">3</nly-col>
  <nly-col xs="6" md="3" lg="3" col-class="col bg-primary">4</nly-col>
</nly-row>

<!-- grid.name -->
<!-- nly-grid.vue -->
```

**栅格布局原理**

- 在栅格布局中，每列最多可设置 1 到 12 个宽度单位，且每行在视觉上，最多只能允许所有列加起来有 12 个单位的宽度，超出的会自动换行排列
- 栅格布局中共有 5 个断点，分别是 `xs, sm, md, lg, xl`
- 断点是基于媒体查询的 `min-width` 写法，即每个断点是代表当前断点及以上。 比如 `md` 代表最小宽度在 `md` 以及以上宽度，如果不另外设置，这条规则将在 `md, lg, xl` 都会生效
- `nly-col` 在理论上必须嵌套在 `nly-row` 中，且 `nly-row` 不能直接嵌套在 `nly-row` 中，但 `nly-row` 可以嵌套在 `nly-col` 中
- 每个 `nly-col` 都有一个水平的 `padding` 属性，用来控制列的距离，防止内容超出列范围，且可以在视觉上使得每列都是对齐的
- 在没有设置宽度的情况下，每列会以等宽布局，即每列的宽度都是相等的。由于水平的 `padding` 属性，会导致每列之间会有间隔，可以使用 `nly-row` 的 prop `no-gutters` 来消除列之间的间隔
- 可以通过设置 `<nly-col xs="auto">` 来设置每列为最小宽度，即自适应内容宽度。此列代表在 `xs` 及以上断点，此列都是最小宽度
- `nly-row` 的 `cols-xs, cols-sm, cols-md, cols-lg, cols-xl` prop 可让其在不同断点上具有不同的宽度， 通常可选 `1, 2, 3, 4, 5, 6`
- `nly-col` 的 `xs, sm, md, lg, xl` prop 代表在不同断点上的宽度，最小 1 个单位的宽度，最多 12 个单位的宽度。当一个 `nly-col` 的宽度为 12 时，在视觉上宽度会填充满整个 `nly-row`
- `nly-col` 是用百分比来设置的宽度，所以能够适用父元素的宽度

请注意 [flexbox](https://github.com/philipwalton/flexbugs) 的局限性和 [有些 html 元素是无法使用 flexbox](https://github.com/philipwalton/flexbugs#flexbug-9)的

## 总览

`NlyAdminlteVue` 的 `Grid` 栅格布局跟 `bootstrap` 的栅格布局所支持的断点都是一样的。

### 行 `<nly-row>`

`nly-row` 是栅格布局的行， 是 `nly-col` 的容器。
`nly-col` 在理论上必须嵌套在 `nly-row` 中，且 `nly-row` 不能直接嵌套在 `nly-row` 中，但 `nly-row` 可以嵌套在 `nly-col` 中。
由于水平的 `padding` 属性，会导致每列之间会有间隔，可以使用 `nly-row` 的 prop `no-gutters` 来消除列之间的间隔

### 列 `nly-col`

`nly-col` 是栅格布局的列， 理论上 `nly-col` 必须嵌套在 `nly-row` 中

### 断点

`NlyAdminlteVue` 中的断点是是基于媒体查询的 `min-width` 写法，即每个断点是代表当前断点及以上。 比如 `md` 代表最小宽度在 `md` 以及以上宽度，如果不另外设置，这条规则将在 `md, lg, xl` 都会生效。
共有 5 个断点，分别是 `xs, sm, md, lg, xl`

<div class="table-responsive-sm">
  <table class="table table-bordered table-striped">

    <thead>
      <tr>
        <th></th>
        <th>
          <strong>Extra small</strong> (xs)<br>
          <code>&lt;576px</code>
        </th>
        <th>
          <strong>Small</strong> (sm)<br>
          <code>≥576px</code>
        </th>
        <th>
          <strong>Medium</strong> (md)<br>
          <code>≥768px</code>
        </th>
        <th>
          <strong>Large</strong> (lg)<br>
          <code>≥992px</code>
        </th>
        <th>
          <strong>Extra large</strong> (xl)<br>
          <code>≥1200px</code>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-left">Max container width</th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
      </tr>
      <tr>
        <th class="text-left">Prop</th>
        <td><code>xs="*"</code></td>
        <td><code>sm="*"</code></td>
        <td><code>md="*"</code></td>
        <td><code>lg="*"</code></td>
        <td><code>xl="*"</code></td>
      </tr>
      <tr>
        <th class="text-left"># of columns</th>
        <td colspan="5">12</td>
      </tr>
      <tr>
        <th class="text-left">Gutter width</th>
        <td colspan="5">30px (15px on each side of a column)</td>
      </tr>
      <tr>
        <th class="text-left">Nestable</th>
        <td colspan="5">Yes</td>
      </tr>
      <tr>
        <th class="text-left">Offset</th>
        <td><code>offset="*"</code></td>
        <td><code>offset-sm="*"</code></td>
        <td><code>offset-md="*"</code></td>
        <td><code>offset-lg="*"</code></td>
        <td><code>offset-xl="*"</code></td>
      </tr>
      <tr>
        <th class="text-left">Order</th>
        <td><code>order="*"</code></td>
        <td><code>order-sm="*"</code></td>
        <td><code>order-md="*"</code></td>
        <td><code>order-lg="*"</code></td>
        <td><code>order-xl="*"</code></td>
      </tr>
    </tbody>

  </table>
</div>

## `<nly-col>` 自动布局

可以利用媒体查询的断点来自动设置列的宽度，不需要使用 `nly-col` 的其他任何 prop

### 等宽布局

可以给 `nly-col` 设置 prop `col=true` 来使得每列宽度都一样

```HTML
<nly-container class="nly-example-row">
    <nly-row>
        <nly-col col col-class="bg-info">1 of 2</nly-col>
        <nly-col col-class="bg-warning">2 of 2</nly-col>
    </nly-row>

    <nly-row>
        <nly-col col-class="bg-primary">1 of 3</nly-col>
        <nly-col col-class="bg-dark">2 of 3</nly-col>
        <nly-col col-class="bg-danger">3 of 3</nly-col>
    </nly-row>
</nly-container>

<!-- 等宽.name -->
<!-- nly-grid.vue -->
```

### 多行等宽

可以通过插入一个 `class="w-100` 的元素来使得列换行

```html
<nly-container class="nly-example-row">
  <nly-row>
    <nly-col col-class="bg-primary">Column</nly-col>
    <nly-col col-class="bg-info">Column</nly-col>
    <div class="w-100"></div>
    <nly-col col-class="bg-danger">Column</nly-col>
    <nly-col col-class="bg-warning">Column</nly-col>
  </nly-row>
</nly-container>

<!-- 多行等宽.name -->
<!-- nly-grid-equal-width-multiple-lines.vue -->
```

### 单列宽度

`Grid` 是自动布局，您可以在设置其中一列的宽度，其他列会自动调整其宽度，以达到所有列填满 12 个宽度单位。

```html
<nly-container class="nly-example-row">
  <nly-row class="text-center">
    <nly-col col-class="bg-info">1 of 3</nly-col>
    <nly-col xs="8" col-class="bg-warning">2 of 3 (wider)</nly-col>
    <nly-col col-class="bg-primary">3 of 3</nly-col>
  </nly-row>

  <nly-row class="text-center">
    <nly-col col-class="bg-info">1 of 3</nly-col>
    <nly-col xs="5" col-class="bg-warning">2 of 3 (wider)</nly-col>
    <nly-col col-class="bg-primary">3 of 3</nly-col>
  </nly-row>
</nly-container>

<!-- 单列宽度.name -->
<!-- nly-one-columns.vue -->
```

### 内容宽度

在栅格布局中， 可以设置 `xs, sm, md, lg, xl` 为 `auto` 来使宽度跟随每列的内容，从而达到适应内容的宽度。

```html
<nly-container class="nly-example-row">
  <nly-row row-class="justify-content-md-center">
    <nly-col col lg="2" col-class="bg-info">1 of 3</nly-col>
    <nly-col xs="12" md="auto" col-class="bg-danger">内容宽度</nly-col>
    <nly-col col lg="2" col-class="bg-primary">3 of 3</nly-col>
  </nly-row>

  <nly-row>
    <nly-col col-class="bg-info">1 of 3</nly-col>
    <nly-col xs="12" md="auto" col-class="bg-danger">内容宽度</nly-col>
    <nly-col col lg="2" col-class="bg-primary">3 of 3</nly-col>
  </nly-row>
</nly-container>

<!-- 内容宽度.name -->
<!-- nly-grid-variable-width.vue -->
```

## 响应式

`NlyAdminlteVue` 响应式布局分为 5 个类别， 分别是 `xs, sm, md, lg, xl` 。可以通过相互搭配来调整在小屏，中屏，大屏，超大屏的显示，达到适应屏幕的效果

### 在所有断点下宽度不变

如果需要不同大小的设备，宽度都不变（这里指百分比），可以设置 `col` 或者 `xs=*` 。 col 在不同断点下，所有列宽度百分比都是一样的，即等宽。
还可以用 `xs=*` 来指定一列宽度。

```html
<nly-container class="nly-example-row">
  <nly-row>
    <nly-col col-class="bg-info">col</nly-col>
    <nly-col col-class="bg-warning">col</nly-col>
    <nly-col col-class="bg-danger">col</nly-col>
    <nly-col col-class="bg-dark">col</nly-col>
  </nly-row>

  <nly-row>
    <nly-col xs="8" col-class="bg-info">col-8</nly-col>
    <nly-col xs="4" col-class="bg-warning">col-4</nly-col>
  </nly-row>
</nly-container>

<!-- 所有断点宽度不变.name -->
<!-- nly-grid-all-breakpoint.vue -->
```

### 堆叠水平排列

使用 `sm="*"` or `sm` (此时每列都是等宽的) 可以创建一个在 `sm` 断点即以上屏幕的栅格布局，当屏幕在 `sm` 断点以下，所有列都会堆叠到水平排列，即视觉上，每一行只有一列。

```html
<nly-container class="nly-example-row">
  <nly-row>
    <nly-col sm="8">col-sm-8</nly-col>
    <nly-col sm="4">col-sm-4</nly-col>
  </nly-row>

  <nly-row>
    <nly-col sm>col-sm</nly-col>
    <nly-col sm>col-sm</nly-col>
    <nly-col sm>col-sm</nly-col>
  </nly-row>
</nly-container>

<!-- nly-grid-horizontal-stacked.vue -->
```

### 混合使用

不同的断点可以混合使用， 不同的断点在对应的屏幕大小范围会生效。但是需要注意大屏覆盖小屏的地方。

```html
<nly-container class="nly-example-row">
  <nly-row>
    <nly-col xs="12" md="8" col-class="bg-info">xs="12" md="8"</nly-col>
    <nly-col xs="6" md="4" col-class="bg-warning">xs="6" md="4"</nly-col>
  </nly-row>

  <nly-row>
    <nly-col xs="6" md="4" col-class="bg-info">xs="6" md="4"</nly-col>
    <nly-col xs="6" md="4" col-class="bg-warning">xs="6" md="4"</nly-col>
    <nly-col xs="6" md="4" col-class="bg-primary">xs="6" md="4"</nly-col>
  </nly-row>

  <nly-row>
    <nly-col xs="6" col-class="bg-info">xs="6"</nly-col>
    <nly-col xs="6" col-class="bg-danger">xs="6"</nly-col>
  </nly-row>
</nly-container>

<!-- 混合使用.name -->
<!-- nly-grid-mix-and-match.vue -->
```

## 对齐方式

使用 `flex-box` 的对齐 class 可以使得 `nly-row` 和 `nly-col` 实现盒子布局

### 整行行垂直对齐

可以设置 `nly-row` 的 prop `align-v` 来使得整行调整垂直对齐方式，可选 `start` , `baseline` , `end` , `stretch` , `center`

```html
<nly-container class="nly-example-row nly-example-row-flex-cols">
  <nly-row align-v="start">
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
  </nly-row>
  <nly-row align-v="center">
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
  </nly-row>

  <nly-row align-v="end">
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
  </nly-row>

  <nly-row align-v="baseline">
    <nly-col style="font-size: 0.75rem;">One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
    <nly-col style="font-size: 1.25rem;">One of three columns</nly-col>
  </nly-row>

  <nly-row align-v="stretch">
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
    <nly-col>One of three columns</nly-col>
  </nly-row>
</nly-container>

<!-- 行垂直对齐.name -->
<!-- nly-grid-align-v.vue -->
```

可以设置 `nly-col` 的 prop `align-self` 来设置每列在 `nly-row` 组件中的垂直位置。可选 `start` , `center` , `end` , `baseline` , `stretch`

```html
<nly-container class="nly-example-row nly-example-row-flex-cols">
  <nly-row>
    <nly-col align-self="start">One of three columns</nly-col>
    <nly-col align-self="center">One of three columns</nly-col>
    <nly-col align-self="end">One of three columns</nly-col>
  </nly-row>
  <nly-row>
    <nly-col align-self="baseline">One of two columns</nly-col>
    <nly-col align-self="stretch">One of two columns</nly-col>
  </nly-row>
</nly-container>

<!-- 行垂直对齐.name -->
<!-- nly-grid-align-self.vue -->
```

### 整行水平对齐

可以设置 `nly-row` 的 prop `align-h` 来设置正好水平对齐，可选 `start` , `center` , `end` , `around` , `between`

```html
<nly-container class="nly-example-row">
  <nly-row align-h="start">
    <nly-col xs="4">One of two columns</nly-col>
    <nly-col xs="4">One of two columns</nly-col>
  </nly-row>

  <nly-row align-h="center">
    <nly-col xs="4">One of two columns</nly-col>
    <nly-col xs="4">One of two columns</nly-col>
  </nly-row>

  <nly-row align-h="end">
    <nly-col xs="4">One of two columns</nly-col>
    <nly-col xs="4">One of two columns</nly-col>
  </nly-row>

  <nly-row align-h="around">
    <nly-col xs="4">One of two columns</nly-col>
    <nly-col xs="4">One of two columns</nly-col>
  </nly-row>

  <nly-row align-h="between">
    <nly-col cols="4">One of two columns</nly-col>
    <nly-col cols="4">One of two columns</nly-col>
  </nly-row>
</nly-container>

<!-- 整行水平对齐.name -->
<!-- nly-grid-align-h.vue -->
```

## 排序

### 重新排序

`nly-col` 可以设置 prop `order-*` 来重新排序。 `order-xs` , `order-sm` , `order-md` , `order-lg` , `order-xl` 分别代表 5 个断点下的排列循序。

```html
<nly-row style="padding-bottom:10px">
  <nly-col order-xs="1" order-sm="2" order-md="3" order-lg="4" style="background-color: #28a745;"> order-xs="1" order-sm="2" order-md="3" order-lg="4"</nly-col>

  <nly-col order-xs="2" order-sm="3" order-md="4" order-lg="1" style="background-color: #17a2b8;"> order-xs="2" order-sm="3" order-md="4" order-lg="1"</nly-col>

  <nly-col order-xs="3" order-sm="4" order-md="1" order-lg="2" style="background-color: #ffc107;"> order-xs="3" order-sm="4" order-md="1" order-lg="2"</nly-col>

  <nly-col order-xs="4" order-sm="1" order-md="2" order-lg="3" style="background-color: #dc3545;"> order-xs="4" order-sm="1" order-md="2" order-lg="3"</nly-col>
</nly-row>

<!-- 排序.name -->
<!-- nly-grid-order.vue -->
```

### 位置偏移

`nly-col` 可以设置 prop `offset-*` 来设置偏移量。 `offset-xs` , `offset-sm` , `offset-md` , `offset-lg` , `offset-xl` 分别代表 5 个断点下的偏移量。

```html
<nly-container fluid class="nly-example-row">
  <nly-row>
    <nly-col md="4">md="4"</nly-col>
    <nly-col md="4" offset-md="4">md="4" offset-md="4"</nly-col>
  </nly-row>

  <nly-row>
    <nly-col md="3" offset-md="3">md="3" offset-md="3"</nly-col>
    <nly-col md="3" offset-md="3">md="3" offset-md="3"</nly-col>
  </nly-row>

  <nly-row>
    <nly-col md="6" offset-md="3">md="6" offset-md="3"</nly-col>
  </nly-row>
</nly-container>

<!-- 偏移量.name -->
<!-- nly-grid-offset.vue -->
```

如果您需要重置偏移量，您可以设置 `offset-* = 0`

```html
<nly-container fluid class="nly-example-row">
  <nly-row>
    <nly-col sm="5" md="6">sm="5" md="6"</nly-col>
    <nly-col sm="5" offset-sm="2" md="6" offset-md="0">sm="5" offset-sm="2" md="6" offset-md="0"</nly-col>
  </nly-row>

  <nly-row>
    <nly-col sm="6" md="5" lg="6">sm="6" md="5" lg="6"</nly-col>
    <nly-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">sm="6" md="5" offset-md="2" col-lg="6" offset-lg="0"</nly-col>
  </nly-row>
</nly-container>

<!-- 偏移量.name -->
<!-- nly-grid-offset.vue -->
```
