# card

## nly-crad-group

> 卡片组

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
group-type | String | default | 卡片组类型 默认card-group，可选，default，deck，columns，accordion。deck水平，colunms当水平排列放不下，就垂直，先垂直一列，载垂直第二列。
group-class | String |  | 自定义css式样
tag | String | div | 标签

## nly-crad

> 卡片

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
header-variant | String |  | header背景色
header-outline | Boolean | false | header边框
card-outline-tabs | Boolean | false | 作为tab时，header的式样
card-tabs | Boolean | false | 是否作为一个tab
text-variant | String |  | 字体颜色
bg-variant | String |  | 整个卡片背景色
bg-gradient-variant | String |  | 整个卡片背景色,渐变色
height-control | Boolean | false | 控制卡片高度，最高300px
loading | Boolean | false | 开启图标和文字内容loading
loading-content | String |  | 自定义loading文字内容，设置loading为true的时候，生效，传入内容会覆盖icon-loading
loading-content-tag | String | p | 自定义loading文字内容标签，设置loading为true的时候，生效
loading-content-class | String |  | 自定义loading文字内容css式样，设置loading为true的时候，生效，
loading-icon | String | fas fa-2x fa-sync-alt fa-spin | 开启loading情况下默认loading内容。如果传入loading-content，会覆盖loading-icon
loading-img | Boolean | false | 开启loading图片。
loading-img-src | String |  | loading图片url，在设置loading-img为true的时候，这个loading-img-src参数必传
loading-img-class | String |  | loading图片自定义css式样，在设置loading-img为true的时候，loading-img-class生效
tag | String | div | 标签
card-class | String |  |自定义css式样

## nly-card-header

> 卡片头部

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景色
bg-gradient-variant | String |  | 背景色,渐变色
img-overlay | Boolean | false | 放置到图片card-img上
text-variant | String |  | 字体颜色
tag | String | div | 标签
card-header-class | String |  | 自定义css式样


## nly-card-body

> 卡片body

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景色
bg-gradient-variant | String |  | 背景色,渐变色
img-overlay | Boolean | false | 放置到图片card-img上
text-variant | String |  | 字体颜色
tag | String | div | 标签
card-body-class | String |  | 自定义css式样

## nly-crad-footer

> 卡片footer

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
bg-variant | String |  | 背景色
bg-gradient-variant | String |  | 背景色,渐变色
img-overlay | Boolean | false | 放置到图片card-img上
text-variant | String |  | 字体颜色
tag | String | div | 标签
card-footer-class | String |  | 自定义css式样

## nly-card-title

> 卡片title

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
text-variant | String |  | 字体颜色
tag | String | h4 | 标签
title-class | String |  | 自定义css式样

## nly-card-img

> 卡片图片

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
top | Boolean | false | top圆角
buttom | Boolean | false | buttom圆角
src | String |  | 图片url
img-class | String |  | 自定义css式样