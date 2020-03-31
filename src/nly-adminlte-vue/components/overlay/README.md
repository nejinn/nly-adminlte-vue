# 1. overlay 
<!-- TOC -->

- [1. overlay](#1-overlay)
    - [1.1. nly-overlay](#11-nly-overlay)
        - [1.1.1. props](#111-props)
    - [1.2. 单包导出](#12-单包导出)
        - [1.2.1. 包含组件](#121-包含组件)
        - [1.2.2. 导出方法](#122-导出方法)

<!-- /TOC -->


> 罩层

## 1.1. nly-overlay

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
sibebar | Boolean | false | 是否作为左侧导航栏的罩层。默认不是。
dark | Boolean | false | 罩层颜色和字体颜色。默认白色黑字，true为黑色白字

## 1.2. 单包导出

> 如果只需要使用overlayPlugin中的组件，请使用单个组件导出

### 1.2.1. 包含组件

> overlayPlugin包括以下组件

名称 | 导出路径
-|-
NlyOverlay | nly-adminlte-vue

### 1.2.2. 导出方法

> 单组件导出

```js
import { NlyOverlay } from "nly-adminlte-vue";
Vue.component('nly-overlay', NlyOverlay)
```

> 整个overlayPlugin出

```js
import { overlayPlugin } from "nly-adminlte-vue";
Vue.use(overlayPlugin);
```