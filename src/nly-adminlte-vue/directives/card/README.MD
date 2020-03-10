# 1. card指令
<!-- TOC -->

- [1. card指令](#1-card指令)
    - [1.1. v-card-maximized](#11-v-card-maximized)
        - [1.1.1. binding](#111-binding)
            - [1.1.1.1. demo](#1111-demo)
    - [1.2. 单包导出](#12-单包导出)
        - [1.2.1. 包含组件](#121-包含组件)
        - [1.2.2. 导出方法](#122-导出方法)

<!-- /TOC -->
## 1.1. v-card-maximized

> 卡片最大化指令，需要绑定card id。给nly-card传入id props

### 1.1.1. binding

参数 | 描述
-|-
modifiers | 请传入对应需要最大化的nly-card组件 id props。
values | 点击载体有icon,即载体下有一个nly-icon组件，且需要修改对应状态的icon，请同时传入beforeIcon，afterIcon，order。分别是初始化icon图标，最大化icon图标，以及需要修改的nly-icon组件的位置。具体请看demo，不要将强行指定到非nly-icon组件上，不然会出错。

#### 1.1.1.1. demo

```html

<--! 这种情况是只放大缩小-->
<nly-card id="cardmaximzed" >
</nly-card>
<nly-* v-card-maximized.cardmaximzed>
</nly-*>

<--! 这种情况会修改第一个nly-icon的icon，可以修改order值来决定要修改哪一个icon的 -->
<--! order值最小为1，代表第一个，以此类推，当不传入order的时候，默认修改第一个 -->
<nly-card id="cardmaximzed" >
</nly-card>
<nly-* v-card-maximized.cardmaximzed="{ afterIcon: 'fas fa-compress', beforeIcon: 'fas fa-expand', order: 1 }">
    <--! 注意第一个icon的icon和beforeIcon是一样的 -->
    <nly-icon icon='fas fa-expand' />
    <nly-icon icon='fas xxxx' />
    <nly-icon icon='fas zzzzz' />
</nly-*>

<--! 不传入order的时候，修改第一个 -->
<nly-card id="cardmaximzed" >
</nly-card>
<nly-* v-card-maximized.cardmaximzed="{ afterIcon: 'fas fa-compress', beforeIcon: 'fas fa-expand'}">
    <--! 注意第一个icon的icon和beforeIcon是一样的 -->
    <nly-icon icon='fas fa-expand' />
    <nly-icon icon='fas xxxx' />
    <nly-icon icon='fas zzzzz' />
</nly-*>
```

## 1.2. 单包导出

> 如果只需要使用cardDirectivePlugin中的组件，请使用单个组件导出

### 1.2.1. 包含组件

> cardDirectivePlugin包括以下组件

名称 | 导出路径
-|-
NlyCardMaximized | nly-adminlte-vue

### 1.2.2. 导出方法

> 单组件导出

```js
import { NlyCardMaximized } from "./nly-adminlte-vue";
Vue.use(NlyCardMaximized);
```

> 整个cardDirectivePlugin出

```js
import { cardDirectivePlugin } from "./nly-adminlte-vue";
Vue.use(cardDirectivePlugin);
```