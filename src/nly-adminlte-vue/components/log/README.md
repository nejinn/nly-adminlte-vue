# 1. log

<!-- TOC -->

- [1. log](#1-log)
  - [1.1. nly-log](#11-nly-log)
  - [1.2. nly-log-header](#12-nly-log-header)
    - [1.2.1. props](#121-props)
  - [1.3. nly-log-tools](#13-nly-log-tools)
  - [1.4. nly-log-body](#14-nly-log-body)
    - [1.4.1. props](#141-props)
  - [1.5. nly-log-line](#15-nly-log-line)
    - [1.5.1. props](#151-props)
  - [1.6. nly-log-line-tree](#16-nly-log-line-tree)
    - [1.6.1. props](#161-props)
  - [1.7. 单包导出](#17-单包导出)
    - [1.7.1. 包含组件](#171-包含组件)
    - [1.7.2. 导出方法](#172-导出方法)

<!-- /TOC -->

## 1.1. nly-log

> 日志容器

## 1.2. nly-log-header

> 日志组件头部

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
title | String |  | 头部标题
title-calss | String |  | 头部标题css式样
log-header-class | String | | 自定义css式样

## 1.3. nly-log-tools

> 日志工具,放在nly-log-header生效

## 1.4. nly-log-body

### 1.4.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
scroll-bottom | Boolean | true | 显示滚动到底部按钮
bottom-icon | String | nlyfont nly-icon-logo-ionic | 滚动到底部按钮图标
bottom-text | String | 滚动到底部 | 滚动到底部按钮文字
scroll-top | Boolean | true | 显示滚动到顶部按钮
top-icon | String | nlyfont nly-icon-logo-aperture | 滚动到顶部图标
log-body-class | String | | 自定义css式样
pre-class | String | | pre标签自定义css式样
lock-scroll-bottom | Boolean | true | 显示锁定到底部按钮
lock-bottom-icon | String | nlyfont nly-icon-logo-ionic | 锁定底部按钮图标
lock-bottom-text | String | 锁定底部 | 锁定到底部按钮文字

## 1.5. nly-log-line

> log日志行

### 1.5.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
duration | String |  | 时间，传入会渲染time组件
duration-class | String |  | time组件自定义css
line | String, Number |  | log行数
line-class | String |  | log行数自定义css
text | String |  | log内容
text-class | String |  | log内容自定义css
title | String |  | log标题
title-class | String |  | log标题自定义css
icon | String |  | log内容icon
icon-class | String |  | log内容icon自定义css
log-line-class | String |  | log自定义css
high-light | Boolean | false | 高亮

## 1.6. nly-log-line-tree

> log日志行，可折叠

### 1.6.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
duration | String |  | 时间，传入会渲染time组件
duration-class | String |  | time组件自定义css
line | String, Number |  | log行数
line-class | String |  | log行数自定义css
text | String |  | log内容
text-class | String |  | log内容自定义css
title | String |  | log标题
title-class | String |  | log标题自定义css
icon | String |  | log内容icon
icon-class | String |  | log内容icon自定义css
log-line-class | String |  | log自定义css
visible | Boolean | fase | 默认收起折叠后log，设置true会打开
high-light | Boolean | false | 高亮

## 1.7. 单包导出

> 如果只需要使用logPlugin中的组件，请使用单个组件导出

### 1.7.1. 包含组件

> logPlugin包括以下组件

名称 | 导出路径
-|-
NlyLog | nly-adminlte-vue
NlyLogHeader | nly-adminlte-vue
NlyLogBody | nly-adminlte-vue
NlyLogLine | nly-adminlte-vue
NlyLogLineTree | nly-adminlte-vue
NlyLogTools | nly-adminlte-vue

### 1.7.2. 导出方法

> 单组件导出

```js
import { NlyLogTools } from "nly-adminlte-vue";
Vue.component('nly-log-tools', NlyLogTools)
```

> 整个logPlugin导出

```js
import { logPlugin } from "nly-adminlte-vue";
Vue.use(logPlugin);
```