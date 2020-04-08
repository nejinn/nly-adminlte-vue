# 1. wrapper
<!-- TOC -->

- [1. wrapper](#1-wrapper)
    - [1.1. nly-container-wrapper](#11-nly-container-wrapper)
        - [1.1.1. props](#111-props)
    - [1.2. nly-wrapper](#12-nly-wrapper)
        - [1.2.1. props](#121-props)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->
## 1.1. nly-container-wrapper

> 此组件会修改body的class,props参数自由搭配会有不同的布局,请自由发挥

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
side-mini | Boolean | 无 | 边侧栏是否可以收起,true可以收起,false将边侧画板左侧滑入消失
layout | String | 无 | 整体布局,可选fixed和boxed
navbar-fixed | Boolean | 无 | 头部导航fixed布局
footer-fixed | Boolean | 无 | 底部fixed布局
top-nav | Boolean | 无 | 头部导航顶格无边侧栏布局
warpper-class | String | 无 | wrapper 式样
container-class | String | 无 | body式样

## 1.2. nly-wrapper

### 1.2.1. props

无

## 1.3. 单包导出

> 如果只需要使用wrapperPlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> wrapperPlugin包括以下组件

名称 | 导出路径
-|-
NlyContainerWrapper | nly-adminlte-vue
NlyWrapper | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlyWrapper } from "nly-adminlte-vue";
Vue.component('nly-wrapper', NlyWrapper)
```

> 整个wrapperPlugin导出

```js
import { wrapperPlugin } from "nly-adminlte-vue";
Vue.use(wrapperPlugin);
```