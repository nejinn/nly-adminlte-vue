# 1. icon 

> icon 图标
<!-- TOC -->

- [1. icon](#1-icon)
  - [1.1. nly-icon](#11-nly-icon)
    - [1.1.1. props](#111-props)
  - [1.2. 单包导出](#12-单包导出)
    - [1.2.1. 包含组件](#121-包含组件)
    - [1.2.2. 导出方法](#122-导出方法)

<!-- /TOC -->

## 1.1. nly-icon

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | i | 标签
size | String |  | 字体大小，可选sm，lg
icon | String |  | icon class

## 1.2. 单包导出

> 如果只需要使用iconPlugin中的组件，请使用单个组件导出

### 1.2.1. 包含组件

> iconPlugin包括以下组件

名称 | 导出路径
-|-
NlyIcon | nly-adminlte-vue

### 1.2.2. 导出方法

> 单组件导出

```js
import { NlyIcon } from "nly-adminlte-vue";
Vue.component('nly-icon', NlyIcon)
```

> 整个iconPlugin导出

```js
import { iconPlugin } from "nly-adminlte-vue";
Vue.use(iconPlugin);
```