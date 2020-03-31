# 1. grid
<!-- TOC -->

- [1. grid](#1-grid)
    - [1.1. nly-row](#11-nly-row)
        - [1.1.1. props](#111-props)
    - [1.2. nly-col](#12-nly-col)
        - [1.2.1. props](#121-props)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->
## 1.1. nly-row

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签
no-gutters | Boolean | false | 去除栅格间距
col-xs | String | | 宽度xs及以上断点一行列数，可选1，2，3，4，5，6
col-sm | String | | 宽度sm及以上断点一行列数，可选同上
col-md | String | | 宽度md及以上断点一行列数，可选同上
col-lg | String | | 宽度lg及以上断点一行列数，可选同上
col-xl | String | | 宽度xl及以上断点一行列数，可选同上
row-class | String | | 自定义css式样，可自定义实现需要，也可以使用align-items-start所有行顶部对齐，row align-items-center所有行锤子居中对齐，align-items-end所有行底部对齐，justify-content-start所有行水平左对齐，justify-content-center所有行水平居中对齐，justify-content-end所有行右对齐，justify-content-around所有行非起始中间对齐，justify-content-between所有行左右对齐

## 1.2. nly-col

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签
col | Boolean | false | 在没有其他props的情况下，所有列等宽
xs | String |  | 宽度在xs及以上断点列宽,可选1，2，3，4，5，6，7，8，9，10，11，12，auto，auto为根据子节点自动宽度
md | String |  | 宽度在md及以上断点列宽,可选同上
lg | String |  | 宽度在lg及以上断点列宽，可选同上
xl | String |  | 宽度在xl及以上断点列宽，可选同上
offset-xs | String |  | 宽度在xs及以上断点右移列数,可选0，2，3，4，5，6，7，8，9，10，11
offset-sm | String |  | 宽度在sm及以上断点右移列数,可选同上
offset-md | String |  | 宽度在md及以上断点右移列数,可选同上
offset-lg | String |  | 宽度在lg及以上断点右移列数,可选同上
offset-xl | String |  | 宽度在xl及以上断点右移列数,可选同上
order-xs | String |  | 宽度在xs及以上断点排列顺序,可选0，2，3，4，5，6，7，8，9，10，11，12
order-sm | String |  | 宽度在sm及以上断点排列顺序,可选同上
order-md | String |  | 宽度在md及以上断点排列顺序,可选同上
order-lg | String |  | 宽度在lg及以上断点排列顺序,可选同上
order-xl | String |  | 宽度在xl及以上断点排列顺序,可选同上
col-class | String |  | 自定义css式样,可以用自定义css式样或者adminlte自定义式样让col实现对齐等其他功能align-self-start顶部对齐，align-self-center中间对齐，align-self-end底部对齐

## 1.3. 单包导出

> 如果只需要使用gridPlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> gridPlugin包括以下组件

名称 | 导出路径
-|-
NlyRow | nly-adminlte-vue
NlyCol | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlyRow } from "nly-adminlte-vue";
Vue.component('nly-row', NlyRow)
```

> 整个gridPlugin导出

```js
import { gridPlugin } from "nly-adminlte-vue";
Vue.use(gridPlugin);
```