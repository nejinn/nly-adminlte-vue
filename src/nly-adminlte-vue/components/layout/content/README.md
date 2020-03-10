# 1. content
<!-- TOC -->

- [1. content](#1-content)
    - [1.1. nly-content-wrapper](#11-nly-content-wrapper)
        - [1.1.1. props](#111-props)
    - [1.2. nly-content-header](#12-nly-content-header)
        - [1.2.1. props](#121-props)
    - [1.3. nly-content](#13-nly-content)
        - [1.3.1. props](#131-props)
    - [1.4. 单包导出](#14-单包导出)
        - [1.4.1. 包含组件](#141-包含组件)
        - [1.4.2. 导出方法](#142-导出方法)

<!-- /TOC -->
> 正文容器

## 1.1. nly-content-wrapper

> 一般适用于左上中下布局中间部分容器。

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签

## 1.2. nly-content-header

> 一般适用于左上中下布局中间部分头部容器。

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | section | 标签

## 1.3. nly-content

> 一般适用于左上中下布局中间部分main内容容器。

### 1.3.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | section | 标签

## 1.4. 单包导出

> 如果只需要使用contentPlugin中的组件，请使用单个组件导出

### 1.4.1. 包含组件

> contentPlugin包括以下组件

名称 | 导出路径
-|-
NlyContent | nly-adminlte-vue
NlyContentHeader | nly-adminlte-vue
NlyContentWrapper | nly-adminlte-vue

### 1.4.2. 导出方法

> 单组件导出

```js
import { NlyContent } from "./nly-adminlte-vue";
Vue.component('nly-content', NlyContent)
```

> 整个contentPlugin导出

```js
import { contentPlugin } from "./nly-adminlte-vue";
Vue.use(contentPlugin);
```