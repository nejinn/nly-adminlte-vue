# 1. spinner
<!-- TOC -->

- [1. spinner](#1-spinner)
    - [1.1. nly-spinner](#11-nly-spinner)
        - [1.1.1. props](#111-props)
    - [1.2. 单包导出](#12-单包导出)
        - [1.2.1. 包含组件](#121-包含组件)
        - [1.2.2. 导出方法](#122-导出方法)

<!-- /TOC -->
## 1.1. nly-spinner

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
variant | String |  | 颜色 primary，secondary，info，success，danger，indigo，purple，pink，navy，light，warning，lightblue，olive，lime，fuchsia，maroon，blue，orange，teal，white，gray，dark
type | String | border | 类型，可选border，grow
sm | Boolean | false | 是否开启小号spinner，默认不开启
tag | String | span | html标签
label | String |  | sr-only标签文字
role | String | status | role
spinner-class | String |  | 自定义css式样
label-class | String |  | sr-only自定义css式样

## 1.2. 单包导出

> 如果只需要使用spinnerPlugin中的组件，请使用单个组件导出

### 1.2.1. 包含组件

> spinnerPlugin包括以下组件

名称 | 导出路径
-|-
NlySpinner | nly-adminlte-vue

### 1.2.2. 导出方法

> 单组件导出

```js
import { NlySpinner } from "./nly-adminlte-vue";
Vue.component('nly-spinner', NlySpinner)
```

> 整个spinnerPlugin出

```js
import { spinnerPlugin } from "./nly-adminlte-vue";
Vue.use(spinnerPlugin);
```

