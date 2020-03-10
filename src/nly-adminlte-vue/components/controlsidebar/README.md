# 1. control sidebar

> 右侧收缩菜单(滑板)

<!-- TOC -->

- [1. control sidebar](#1-control-sidebar)
    - [1.1. nly-control-sidebar-container](#11-nly-control-sidebar-container)
    - [1.2. nly-control-sidebar](#12-nly-control-sidebar)
        - [1.2.1. props](#121-props)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->

## 1.1. nly-control-sidebar-container

> 右侧收缩菜单容器，请保持一个页面只有一个这样的容器，由于指令v-nly-control-sidebar-collapse是定向指向此容器的。如果需要多个，请重新封装指定。详情请查看v-nly-control-sidebar-collapse源码。一般情况下容器请配合指令v-nly-control-sidebar-collapse一起使用。在指令v-nly-control-sidebar-collapse的文档有以下一段话请注意

>> 此指令用来控制control-sidebar（右侧收缩菜单栏）收起展开，同时使得control-sidebar的height，top，button自适应滚动条改变以及页面高度改变，使control-sidebar始终自适应悬浮在右侧


## 1.2. nly-control-sidebar

> 右侧收缩菜单栏

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
scrollbar | Boolean | true | 是否overlayscrollbars组件。默认开启，此组件是一个滚动条组件，可以使滚动条出现时不挤压其他容器位置

## 1.3. 单包导出

> 如果只需要使用controlSidebarPlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> controlSidebarPlugin包括以下组件

名称 | 导出路径
-|-
NlyControlSidebarContainer | nly-adminlte-vue
NlyControlSidebar | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlyControlSidebar } from "./nly-adminlte-vue";
Vue.component('nly-control-sidebar', NlyControlSidebar)
```

> 整个controlSidebarPlugin导出

```js
import { controlSidebarPlugin } from "./nly-adminlte-vue";
Vue.use(controlSidebarPlugin);
```