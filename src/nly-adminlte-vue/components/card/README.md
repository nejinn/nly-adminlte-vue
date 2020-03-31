# 1. card
<!-- TOC -->

- [1. card](#1-card)
  - [1.1. nly-card-group](#11-nly-card-group)
    - [1.1.1. props](#111-props)
  - [1.2. nly-card](#12-nly-card)
    - [1.2.1. props](#121-props)
  - [1.3. nly-card-header](#13-nly-card-header)
    - [1.3.1. props](#131-props)
  - [1.4. nly-card-body](#14-nly-card-body)
    - [1.4.1. props](#141-props)
  - [1.5. nly-card-footer](#15-nly-card-footer)
    - [1.5.1. props](#151-props)
  - [1.6. nly-card-title](#16-nly-card-title)
    - [1.6.1. props](#161-props)
  - [1.7. nly-card-img](#17-nly-card-img)
    - [1.7.1. props](#171-props)
  - [1.8. nly-card-tool](#18-nly-card-tool)
    - [1.8.1. props](#181-props)
  - [1.9. nly-card-text](#19-nly-card-text)
    - [1.9.1. props](#191-props)
  - [1.10. 单包导出](#110-单包导出)
    - [1.10.1. 包含组件](#1101-包含组件)
    - [1.10.2. 导出方法](#1102-导出方法)

<!-- /TOC -->
## 1.1. nly-card-group

> 卡片组

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
group-type | String | default | 卡片组类型 默认card-group，可选，default，deck，columns，accordion。deck水平，colunms当水平排列放不下，就垂直，先垂直一列，载垂直第二列。
group-class | String |  | 自定义css式样
tag | String | div | 标签

## 1.2. nly-card

> 卡片

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
header-variant | String |  | header背景色，card-*。可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
header-outline | Boolean | false | header边框
card-outline-tabs | Boolean | false | 作为tab时，header的式样
card-tabs | Boolean | false | 是否作为一个tab
text-variant | String |  | 字体颜色，可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-variant | String |  | 整个卡片背景色，可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-gradient-variant | String |  | 整个卡片背景色，渐变色可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
height-control | Boolean | false | 控制卡片高度，最高300px
loading | Boolean | false | 开启图标，图片和文字loading
dark | Boolean | false | loading式样，默认light，设置dark=true为黑色
loading-content | String |  | 自定义loading文字内容，设置loading为true的时候，生效，传入内容会覆盖icon-loading
loading-content-tag | String | p | 自定义loading文字内容标签，设置loading为true的时候，生效
loading-content-class | String |  | 自定义loading文字内容css式样，设置loading为true的时候，生效，
loading-icon | String | fas fa-2x fa-sync-alt fa-spin | 开启loading情况下默认loading内容。如果传入loading-content，会覆盖loading-icon
loading-img-src | String |  | loading图片url，在设置loading为true的时候，传入loading-img-src参数会显示loadingimg
loading-img-class | String |  | loading图片自定义css式样，在传入loading-img-src的时候，loading-img-class生效
tag | String | div | 标签
card-class | String |  |自定义css式样
id | String | | id

## 1.3. nly-card-header

> 卡片头部

### 1.3.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景色，可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-gradient-variant | String |  | 背景色,渐变色，可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
img-overlay | Boolean | false | 放置到图片card-img上
text-variant | String |  | 字体颜色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
tag | String | div | 标签
card-header-class | String |  | 自定义css式样

## 1.4. nly-card-body

> 卡片body

### 1.4.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-gradient-variant | String |  | 背景色,渐变色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
img-overlay | Boolean | false | 放置到图片card-img上
text-variant | String |  | 字体颜色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
tag | String | div | 标签
card-body-class | String |  | 自定义css式样

## 1.5. nly-card-footer

> 卡片footer

### 1.5.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-gradient-variant | String |  | 背景色,渐变色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
img-overlay | Boolean | false | 放置到图片card-img上
text-variant | String |  | 字体颜色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
tag | String | div | 标签
card-footer-class | String |  | 自定义css式样

## 1.6. nly-card-title

> 卡片title

### 1.6.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
text-variant | String |  | 字体颜色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
tag | String | h4 | 标签
title-class | String |  | 自定义css式样

## 1.7. nly-card-img

> 卡片图片

### 1.7.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
top | Boolean | false | top圆角
buttom | Boolean | false | buttom圆角
src | String |  | 图片url
img-class | String |  | 自定义css式样

## 1.8. nly-card-tool

> 卡片工具，只能放在header中，否则无效

### 1.8.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | div | 标签
tool-class | String |  | 自定义css式样

## 1.9. nly-card-text

> 卡片文字

### 1.9.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | p | 标签
text-class | String |  | 自定义css式样
text-variant | String |  | 字体颜色，选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark

## 1.10. 单包导出

> 如果只需要使用cardPlugin中的组件，请使用单个组件导出

### 1.10.1. 包含组件

> cardPlugin包括以下组件

名称 | 导出路径
-|-
NlyCardGroup |  nly-adminlte-vue
NlyCard |  nly-adminlte-vue
NlyCardHeader |  nly-adminlte-vue
NlyCardBody |  nly-adminlte-vue
NlyCardFooter |  nly-adminlte-vue
NlyCardTitle |  nly-adminlte-vue
NlyCardSubtitle |  nly-adminlte-vue
NlyCardImg |  nly-adminlte-vue
NlyCardTool |  nly-adminlte-vue
NlyCardText |  nly-adminlte-vue

### 1.10.2. 导出方法

> 单组件导出

```js
import { NlyCardGroup } from "nly-adminlte-vue";
Vue.component('nly-card-group', NlyCardGroup)
```

> 整个cardPlugin导出

```js
import { cardPlugin } from "nly-adminlte-vue";
Vue.use(cardPlugin);
```