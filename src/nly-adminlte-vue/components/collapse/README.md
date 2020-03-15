# 1. collapse 
<!-- TOC -->

- [1. collapse](#1-collapse)
  - [1.1. nly-collapse](#11-nly-collapse)
    - [1.1.1. props](#111-props)
  - [1.2. nly-collapse-transition](#12-nly-collapse-transition)
    - [1.2.1. props](#121-props)
  - [1.3. nly-collapse-noclass](#13-nly-collapse-noclass)
    - [1.3.1. props](#131-props)
  - [1.4. nly-collapse-noclass-transition](#14-nly-collapse-noclass-transition)
    - [1.4.1. props](#141-props)
  - [1.5. 单包导出](#15-单包导出)
    - [1.5.1. 包含组件](#151-包含组件)
    - [1.5.2. 导出方法](#152-导出方法)

<!-- /TOC -->
## 1.1. nly-collapse

> 折叠版

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
id | String |  | 折叠组id
is-nav | Boolean | false | 菜单模式，会添加class='navbar-collapse'
accordion | String |  | 手风琴模式，手风琴分组字段
visible | Boolean | false | 设置true，会展开折叠版
tag | String | 'div' | 标签
appear | Boolean | false | 初始化展开动画

## 1.2. nly-collapse-transition

> 一个boostrap,adminlte展开折叠动画

> 需要css中有以下式样
```
  css: true,
  enterClass: "",
  enterActiveClass: "collapsing",
  enterToClass: "collapse show",
  leaveClass: "collapse show",
  leaveActiveClass: "collapsing",
  leaveToClass: "collapse"
```

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
appear | Boolean | false | 初始化展开动画

## 1.3. nly-collapse-noclass

> 为了修复左侧导航栏开启child-indent时nly-collapse动画失效增加的折叠版

### 1.3.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
id | String |  | 折叠组id
is-nav | Boolean | false | 菜单模式，会添加class='navbar-collapse'
accordion | String |  | 手风琴模式，手风琴分组字段
visible | Boolean | false | 设置true，会展开折叠版
tag | String | 'div' | 标签
appear | Boolean | false | 初始化展开动画

## 1.4. nly-collapse-noclass-transition

>为了修复左侧导航栏开启child-indent时nly-collapse-transition动画失效增加的动画

### 1.4.1. props

无

## 1.5. 单包导出

> 如果只需要使用collapsePlugin中的组件，请使用单个组件导出

### 1.5.1. 包含组件

> collapsePlugin包括以下组件

名称 | 导出路径
-|-
NlyCollapseTransition | nly-adminlte-vue
NlyCollapse | nly-adminlte-vue
NlyCollapseNoclassTransition | nly-adminlte-vue
NlyCollapseNoclass | nly-adminlte-vue

### 1.5.2. 导出方法

> 单组件导出

```js
import { NlyCollapse } from "./nly-adminlte-vue";
Vue.component('nly-collapse', NlyCollapse)
```

> 整个collapsePlugin导出

```js
import { collapsePlugin } from "./nly-adminlte-vue";
Vue.use(collapsePlugin);
```