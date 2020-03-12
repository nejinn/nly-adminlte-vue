# info-box

> 消息box

## nly-infobox

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 整个卡片背景色，可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-gradient-variant | String |  | 整个卡片背景色，渐变色可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
loading | Boolean | false | 开启图标，图片和文字loading
dark | Boolean | false | loading式样，默认light，设置dark=true为黑色
loading-content | String |  | 自定义loading文字内容，设置loading为true的时候，生效，传入内容会覆盖icon-loading
loading-content-tag | String | p | 自定义loading文字内容标签，设置loading为true的时候，生效
loading-content-class | String |  | 自定义loading文字内容css式样，设置loading为true的时候，生效，
loading-icon | String | fas fa-2x fa-sync-alt fa-spin | 开启loading情况下默认loading内容。如果传入loading-content，会覆盖loading-icon
loading-img-src | String |  | loading图片url，在设置loading为true的时候，传入loading-img-src参数会显示loadingimg
loading-img-class | String |  | loading图片自定义css式样，在传入loading-img-src的时候，loading-img-class生效

## nly-infobox-icon

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
icon | String |  | icon图标
bg-variant | String |  | 整个卡片背景色，可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-gradient-variant | String |  | 整个卡片背景色，渐变色可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
info-box-icon-class | String |  | 自定义css式样

## nly-infobox-body

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
icon | String |  | icon图标
bg-variant | String |  | 整个卡片背景色，可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
bg-gradient-variant | String |  | 整个卡片背景色，渐变色可选primary，secondary，success，info，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
text | String |  | 传入text会渲染一个nly-infobox-text组件
text-class | String |  | nly-infobox-text组件自定义css
number | String,Number |  | 传入number会渲染一个nly-infobox-number组件
number-class | String |  | nly-infobox-number组件自定义css
info-box-body-class | String |  | 自定义css式样
progress-value | String,Number |  | 传入progress-value会渲染一个nly-progress组件，value为progress-value
progress-description | String |  | 传入progress-description会渲染一个nly-progress-description组件，text为progress-description

## nly-infobox-text

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
text | String |  | 组件文本内容
text-class | String |  | 自定义css式样

## nly-infobox-number

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
number | String,Number |  | 组件文本内容。当number不以props传入而是用默认插槽传入时，不会转换为货币数字
number-class | String |  | 自定义css式样

## 1.2. 单包导出

> 如果只需要使用infoboxPlugin中的组件，请使用单个组件导出

### 1.2.1. 包含组件

> infoboxPlugin包括以下组件

名称 | 导出路径
-|-
NlyInfobox | nly-adminlte-vue
NlyInfoboxIcon | nly-adminlte-vue
NlyInfoboxBody | nly-adminlte-vue
NlyInfoboxText | nly-adminlte-vue
NlyInfoboxNumber | nly-adminlte-vue

### 1.2.2. 导出方法

> 单组件导出

```js
import { NlyInfobox } from "./nly-adminlte-vue";
Vue.component('nly-infobox', NlyInfobox)
```

> 整个infoboxPlugin导出

```js
import { infoboxPlugin } from "./nly-adminlte-vue";
Vue.use(infoboxPlugin);
```