# sidebar

>左侧导航

## nly-sidebar-container

> 左侧导航栏， 收起成只有icon的导航栏，需要body中有class='sidebar-mini sidebar-collapse'，如果只有sidebar-collapse，则会将左侧导航栏滑到左侧区域外，不可见。sidebar-collapse用来控制左侧导航栏展开收缩。sidebar-mini允许左侧导航栏收起到只有图标的状态

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
variant | String | dark-primary | 导航栏主题色
hover | Boolean | true | 导航栏收起时，鼠标悬浮展开，设置为false则无悬浮效果
elevation | String | 无 |导航栏阴影，可选，sm，md，lg，xl。依次增大

## nly-sidebar-brand

>左侧导航栏brand

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
variant | String | 无 | 主题色，可选  primary，secondary，info，success，danger，indigo，purple，pink，navy，light，warning，lightblue，olive，lime，fuchsia，maroon，blue，orange，teal，white，gray，dark
size | String | 无 | 字体大小，可选sm，lg
elevation | String | 无 |导航栏阴影，可选，sm，md，lg，xl。依次增大

## nly-sidebar-brandimg

>左侧导航栏brand img

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
src | String | 无 | 必填，img url
sidebar-brandimg-class | String | 无 | 自定义css式样
alt | String | 无 | alt
circle | Boolean | false | 默认方形，设置true圆形
elevation | String | 无 | 阴影，默认无阴影，可选，sm，md，lg，xl。依次增大

## nly-sidebar-brandtext

>左侧导航栏brand text


## nly-sidebar


## nly-sidebar-userpanel


## nly-sidebar-userpanel-img

> 用户板图像

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
src | String | 无 | 必填，img url
img-class | String | 无 | 自定义css式样
alt | String | 无 | alt
circle | Boolean | false | 默认方形，设置true圆形
elevation | String | md | 阴影，可选，sm，md，lg，xl。其余依次增大