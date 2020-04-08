# 1. toggle 折叠指令
<!-- TOC -->

- [1. toggle 折叠指令](#1-toggle-折叠指令)
    - [1.1. v-nly-toggle](#11-v-nly-toggle)
        - [1.1.1. 用法](#111-用法)
    - [1.2. 单包导出](#12-单包导出)
        - [1.2.1. 包含组件](#121-包含组件)
        - [1.2.2. 导出方法](#122-导出方法)

<!-- /TOC -->

## 1.1. v-nly-toggle

>用于折叠版的指令

### 1.1.1. 用法

```html
<nly-button v-nly-toggle.nly />

<nly-collapse id='nly'>
    ···
</nly-collapse>
```

> id为折叠版的id,更多用法请查看源码

## 1.2. 单包导出

> 如果只需要使用toggleDirectivePlugin中的组件，请使用单个组件导出

### 1.2.1. 包含组件

> toggleDirectivePlugin包括以下组件

名称 | 导出路径
-|-
NlyCardMaximized | nly-adminlte-vue

### 1.2.2. 导出方法

> 单组件导出

```js
import { NlyToggle } from "nly-adminlte-vue";
Vue.use(NlyToggle);
```

> 整个toggleDirectivePlugin出

```js
import { toggleDirectivePlugin } from "nly-adminlte-vue";
Vue.use(toggleDirectivePlugin);
