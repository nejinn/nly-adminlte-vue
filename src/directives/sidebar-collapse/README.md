# 1. 边侧栏收起展开指令 sidebar-collapse
<!-- TOC -->

- [1. 边侧栏收起展开指令 sidebar-collapse](#1-边侧栏收起展开指令-sidebar-collapse)
    - [1.1. nly-sidebar-collapse](#11-nly-sidebar-collapse)
        - [1.1.1. binding](#111-binding)
            - [1.1.1.1. demo](#1111-demo)
    - [1.2. v-nly-control-sidebar-collapse](#12-v-nly-control-sidebar-collapse)
        - [1.2.1. binding](#121-binding)
            - [1.2.1.1. demo](#1211-demo)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->
## 1.1. nly-sidebar-collapse

> 左侧导航栏收起展开指令，此指令只能绑定在nly-nav-item组件和nly-overlay组件上。

>请注意这两个组件不要绑定click事件,免得导致冲突

### 1.1.1. binding

参数 | 描述
-|-
modifiers | 可选navitem，overlay，绑定在nly-nav-item上请传入navitem，绑定在nly-overlay上请传入overlay

#### 1.1.1.1. demo

```html
<nly-sidebar-overlay v-nly-sidebar-collapse.overlay />

<nly-nav-item v-nly-sidebar-collapse.navitem>
    ...
</nly-nav-item>

```

## 1.2. v-nly-control-sidebar-collapse

> 此指令用来控制control-sidebar（右侧收缩菜单栏）收起展开，同时使得control-sidebar的height，top，button自适应滚动条改变以及页面高度改变，使control-sidebar始终自适应悬浮在右侧

> 此指令可以当定在任何组件上。请注意绑定的组件不要绑定click事件。

### 1.2.1. binding

无

#### 1.2.1.1. demo

```html
<nly-nav-item v-nly-control-sidebar-collapse>
    ...
</nly-nav-item>
```

## 1.3. 单包导出

> 如果只需要使用collapseSidebarDirectivePlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> collapseSidebarDirectivePlugin包括以下组件

名称 | 导出路径
-|-
NlySidebarCollapse | nly-adminlte-vue
NlyControlSidebarCollapse | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlySidebarCollapse } from "nly-adminlte-vue";
Vue.use(NlySidebarCollapse);
```

> 整个collapseSidebarDirectivePlugin出

```js
import { collapseSidebarDirectivePlugin } from "nly-adminlte-vue";
Vue.use(collapseSidebarDirectivePlugin);
```