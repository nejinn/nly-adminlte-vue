# 1. timeline
<!-- TOC -->

- [1. timeline](#1-timeline)
    - [1.1. nly-timeline](#11-nly-timeline)
        - [1.1.1. props](#111-props)
    - [1.2. nly-timeline-label](#12-nly-timeline-label)
        - [1.2.1. props](#121-props)
    - [1.3. nly-timeline-content](#13-nly-timeline-content)
        - [1.3.1. props](#131-props)
    - [1.4. nly-timeline-item](#14-nly-timeline-item)
        - [1.4.1. props](#141-props)
    - [1.5. nly-timeline-header](#15-nly-timeline-header)
        - [1.5.1. props](#151-props)
    - [1.6. nly-timeline-body](#16-nly-timeline-body)
        - [1.6.1. props](#161-props)
    - [1.7. nly-timeline-footer](#17-nly-timeline-footer)
        - [1.7.1. props](#171-props)
    - [1.8. 单包导出](#18-单包导出)
        - [1.8.1. 包含组件](#181-包含组件)
        - [1.8.2. 导出方法](#182-导出方法)

<!-- /TOC -->
> 时间轴

## 1.1. nly-timeline

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
inverse | Boolean |  | 边框，默认无边框，设置true则有边框

## 1.2. nly-timeline-label

> 时间标签

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景颜色
bg-gradient-variant | String |  | 背景颜色，渐变色
tag | String | div | 标签
label-class | String |  | 自定义css式样
span-class | String |  | 自定义span元素css式样


## 1.3. nly-timeline-content

> 容器

### 1.3.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景颜色
bg-gradient-variant | String |  | 背景颜色，渐变色
icon | String |  | 容器icon，传入icon才会渲染，否则不会渲染
icon-class | String |  | 自定义css式样

## 1.4. nly-timeline-item

> item元素

### 1.4.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
time | String |  | 时间值
timeIcon | String |  | 时间icon，传入time才会渲染
time-tag | String | span | time标签
time-class | String |  | time自定义css式样
item-tag | String | div | item标签
item-class | String |  | item自定义css式样
item-tag | String | div | item标签

## 1.5. nly-timeline-header

> item元素中header部分

### 1.5.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签
timelineHeaderClass | String |  | 自定义css式样

## 1.6. nly-timeline-body

> item元素中body部分

### 1.6.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签
timelineBodyClass | String |  | 自定义css式样

## 1.7. nly-timeline-footer

> item元素中footer部分

### 1.7.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签
timelineFooterClass | String |  | 自定义css式样

## 1.8. 单包导出

> 如果只需要使用timelinePlugin中的组件，请使用单个组件导出

### 1.8.1. 包含组件

> timelinePlugin包括以下组件

名称 | 导出路径
-|-
NlyTimeline | nly-adminlte-vue
NlyTimelineLabel | nly-adminlte-vue
NlyTimelineContent | nly-adminlte-vue
NlyTimelineItem | nly-adminlte-vue
NlyTimelineHeader | nly-adminlte-vue
NlyTimelineBody | nly-adminlte-vue
NlyTimelineFooter | nly-adminlte-vue

### 1.8.2. 导出方法

> 单组件导出

```js
import { NlyTimeline } from "nly-adminlte-vue";
Vue.component('nly-timeline', NlyTimeline)
```

> 整个timelinePlugin出

```js
import { timelinePlugin } from "nly-adminlte-vue";
Vue.use(timelinePlugin);
```

