# 1. button
<!-- TOC -->

- [1. button](#1-button)
    - [1.1. nly-button](#11-nly-button)
        - [1.1.1. props](#111-props)
    - [1.2. nly-button-group](#12-nly-button-group)
        - [1.2.1. props](#121-props)

<!-- /TOC -->
## 1.1. nly-button

>按钮 支持颜色，形状，绑定事件需要加修饰符.native

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
block | Boolean | false | 按钮填充父级div
variant | String | default | 按钮颜色 可选  default，primary，secondary，success，info，danger，warning，outlineDefaul，outlinePrimary，outlineSecondary，outlineSuccess，outlineInfo，outlineDanger，outlineWarning。要设置透明，传入null。
gradient | String | 无 | 按钮渐变色颜色，和variant只能选择一个。可选primary，secondary，success，info，danger，warning
bg-variant | String | | 背景色，  primary，secondary，success，info:，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark。选择此props点击之后，按钮会处于激活状态的颜色。但不是激活状态。
size | String | 无 | 按钮大小，可选lg，sm，sx
type | String | button | 按钮类型，可选button，submit
shape | String | 无 | 按钮形状，可选roundedFlat，roundedPill，roundedCircle，roundedLg，roundedSm
disabled | Boolean | false | 禁用按钮
pressed | Boolean | false |按钮激活按下效果，目前只有default背景色按钮有效果,
tool | Boolean | false | 工具类按钮，默认非工具类。此时variant参数在不点击的情况下，只会改变边框颜色。可以使用bg-variant和gradient props改变背景色
button-class | String | 无 | 自定义式样

## 1.2. nly-button-group

>按钮组

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
vertical | Boolean | false | 是否垂直
groupSize | String |  | 大小，可选'lg'，'sm'
groupTag | String | div | 标签
button-group-class | String | | 自定义css式样

