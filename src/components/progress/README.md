# 1. progress 
<!-- TOC -->

- [1. progress](#1-progress)
    - [1.1. nly-progress](#11-nly-progress)
        - [1.1.1. props](#111-props)
        - [1.1.2. nly-progress-bar](#112-nly-progress-bar)
        - [1.1.3. props](#113-props)
    - [1.2. nly-progress-description](#12-nly-progress-description)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->
> 进度条

## 1.1. nly-progress

> nly-progress默认会生成一个nly-progress-bar，当nly-progress下插入nly-progress-bar组件时，默认生成的nly-progress-bar不会渲染。

> nly-progress下插入的nly-progress-bar组件会继承nly-progress的某些porps，当nly-progress-bar自己传入这些props时，会覆盖从nly-progress继承的props

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
variant | String | | 颜色，primary，secondary，info，success，danger，indigo，purple，pink，navy，light，warning，lightblue，olive，lime，fuchsia，maroon，blue，orange，teal，white，gray，dark
vertical | Boolean | false | 垂直进度条，注意设置为true时，nly-progress组件下只能有一个nly-progress-bar组件
size | String |  | 大小，可选sm，xs，xxs。在vertical=true时，设置label-value或者label-value-percent的时候，会导致文字无法显示齐全。
striped | Boolean | false | 条纹背景，默认无条纹
animated | Boolean | false | 在striped=true的情况下，animated=true会使条纹背景有动画
precision | Number, String | 0 | 设置label-value和label-value-percent的小数点位数
label-value-percent | Boolean | false | 设置为true会以百分数展示当前进度值，会覆盖label-value
label-value | Boolean | false | 设置为true会展示当前进度。值
max | Number, String | 100 | 总进度值
value | Number, String | 100 | 当前进度值
progress-class | String |  | progress自定义css式样
progress-bar-class | Number, String |  | progress-bar自定义css式样

### 1.1.2. nly-progress-bar

> 进度条

### 1.1.3. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
variant | String | | 颜色，primary，secondary，info，success，danger，indigo，purple，pink，navy，light，warning，lightblue，olive，lime，fuchsia，maroon，blue，orange，teal，white，gray，dark
striped | Boolean | false | 条纹背景，默认无条纹
animated | Boolean | false | 在striped=true的情况下，animated=true会使条纹背景有动画
precision | Number, String | 0 | 设置label-value和label-value-percent的小数点位数
label-value-percent | Boolean | false | 设置为true会以百分数展示当前进度值，会覆盖label-value
label-value | Boolean | false | 设置为true会展示当前进度。值
max | Number, String | 100 | 总进度值
value | Number, String | 100 | 当前进度值
label | String |  | 自定义显示的文本内容
progress-bar-class | Number, String |  | progress-bar自定义css式样

## 1.2. nly-progress-description

> 进度条描述，此组件只有放在info-box才有css式样

## 1.3. 单包导出

> 如果只需要使用progressPlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> progressPlugin包括以下组件

名称 | 导出路径
-|-
NlyProgress | nly-adminlte-vue
NlyProgressBar | nly-adminlte-vue
NlyProgressBarDescription | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlyProgress } from "nly-adminlte-vue";
Vue.component('nly-progress', NlyProgress)
```

> 整个progressPlugin出

```js
import { progressPlugin } from "nly-adminlte-vue";
Vue.use(progressPlugin);
```
