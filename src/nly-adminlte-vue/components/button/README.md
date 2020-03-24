# 1. button
<!-- TOC -->

- [1. button](#1-button)
  - [1.1. nly-button](#11-nly-button)
    - [1.1.1. props](#111-props)
  - [1.2. nly-button-group](#12-nly-button-group)
    - [1.2.1. props](#121-props)
  - [1.3. 单包导出](#13-单包导出)
    - [1.3.1. 包含组件](#131-包含组件)
    - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->
## 1.1. nly-button

> 按钮 支持颜色，形状，绑定事件需要加修饰符.native

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
block | Boolean | false | 按钮填充父级div
variant | String | default | 按钮颜色 可选  default，primary，secondary，success，info，danger，warning，outlineDefaul，outlinePrimary，outlineSecondary，outlineSuccess，outlineInfo，outlineDanger，outlineWarning。要设置透明，传入null。
bg-gradient | String | 无 | 按钮渐变色颜色，和variant只能选择一个。可选primary，secondary，success，info，danger，warning
bg-variant | String | | 背景色，primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark。
size | String | 无 | 按钮大小，可选lg，sm，sx
type | String | button | 按钮类型，可选button，submit
shape | String | 无 | 按钮形状，可选roundedFlat，roundedPill，roundedCircle，roundedLg，roundedSm
disabled | Boolean | false | 禁用按钮
pressed | Boolean | false |按钮激活按下效果
tool | Boolean | false | 工具类按钮，默认非工具类。此时variant参数在不点击的情况下，只会改变边框颜色。可以使用bg-variant和bg-gradient props改变背景色
button-class | String | 无 | 自定义式样
app | Boolean | false | app类按钮.一般情况下是对图标使用的按钮。可以将图标变小，居中。

## 1.2. nly-button-group

> 按钮组

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
vertical | Boolean | false | 是否垂直
group-size | String |  | 大小，可选'lg'，'sm'
group-tag | String | div | 标签
button-group-class | String | | 自定义css式样

## 1.3. 单包导出

> 如果只需要使用buttonPlugin中的组件，请使用单个组件导出.

### 1.3.1. 包含组件

> buttonPlugin包括以下组件

名称 | 导出路径
-|-
NlyButtonGroup | nly-adminlte-vue
NlyButton | nly-adminlte-vue
NlyButtonClose | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlyButtonGroup } from "./nly-adminlte-vue";
Vue.component('nly-button-group', NlyButtonGroup)
```

> 整个buttonPlugin导出

```js
import { buttonPlugin } from "./nly-adminlte-vue";
Vue.use(buttonPlugin);
```

