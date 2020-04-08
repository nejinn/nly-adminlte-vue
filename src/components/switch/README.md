# 1. checkbox switch
<!-- TOC -->

- [1. checkbox switch](#1-checkbox-switch)
    - [1.1. nly-switch](#11-nly-switch)
        - [1.1.1. props](#111-props)
    - [1.2. nly-bootstrap-switch](#12-nly-bootstrap-switch)
        - [1.2.1. props](#121-props)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->
## 1.1. nly-switch

> 开关，支持颜色，大小，形状等设置

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
size | String |  | 大小，可选sm，lg
flat | Boolean | false | 方形开关，默认false，圆角型
off-variant | String |  | 关闭状态颜色primary，secondary，success，info:，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark。
on-variant | String |  | 打开状态颜色primary，secondary，success，info:，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark。
switch-class | String |  | 开关自定义css式样
input-class | String |  | input框自定义css
label-class | String |  | 文字标签自定义css式样
id | String |  | id,默认会以组件_uid生成一个id
tag | String | div | 自定义标签，默认div
disabled | Boolean | false | 禁用
checked | Boolean, String, Number |  | 初始选中状态，和v-model一起用会被v-model值覆盖。

## 1.2. nly-bootstrap-switch

> bootstrap-switch

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
size | String |  | 大小，可选xs，sm，lg
off-variant | String | default | 关闭状态颜色primary，secondary，success，info:，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark。
on-variant | String | default | 打开状态颜色primary，secondary，success，info:，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark。
inverse | Boolean | false | 按钮内圆
readonly | Boolean | false | 只读状态
animate | Boolean | true | 开启动画
disabled | Boolean | false | 禁用
checked | Boolean, String, Number |  | 初始选中状态，和v-model一起用会被v-model值覆盖。
on-text | String | ON | on按钮文本，初始ON
label-text | String |  | label文本
off-text | String | OFF | off按钮文本，初始OFF
width | String, Number |  | 自定义宽度，请不要传入单位px，传入width将覆盖size。
switch-class | String |  | 自定义css式样，作用于switch上
container-class | String |  | 自定义css式样，作用于container上
on-class | String |  | 自定义css式样，作用于on上
label-class | String |  | 自定义css式样，作用于label上
off-class | String |  | 自定义css式样，作用于off上

## 1.3. 单包导出

> 如果只需要使用switchPlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> switchPlugin包括以下组件

名称 | 导出路径
-|-
NlySwitch | nly-adminlte-vue
NlyBootstrapSwitch | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlySwitch } from "nly-adminlte-vue";
Vue.component('nly-switch', NlySwitch)
```

> 整个switchPlugin出

```js
import { switchPlugin } from "nly-adminlte-vue";
Vue.use(switchPlugin);
```

