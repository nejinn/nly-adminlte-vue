# 1. container
<!-- TOC -->

- [1. container](#1-container)
    - [1.1. nly-container](#11-nly-container)
        - [1.1.1. props](#111-props)
    - [1.2. 单包导出](#12-单包导出)
        - [1.2.1. 包含组件](#121-包含组件)
        - [1.2.2. 导出方法](#122-导出方法)

<!-- /TOC -->
## 1.1. nly-container

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
fluid | Boolean |  | 宽度铺满整个屏幕

## 1.2. 单包导出

> 如果只需要使用containerPlugin中的组件，请使用单个组件导出

### 1.2.1. 包含组件

> containerPlugin包括以下组件

名称 | 导出路径
-|-
NlyContainer | nly-adminlte-vue

### 1.2.2. 导出方法

> 单组件导出

```js
import { NlyContainer } from "nly-adminlte-vue";
Vue.component('nly-container', NlyContainer)
```

> 整个containerPlugin导出

```js
import { containerPlugin } from "nly-adminlte-vue";
Vue.use(containerPlugin);
```