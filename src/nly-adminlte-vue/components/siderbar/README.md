# sidebar

>左侧导航

## nly-sidebar-container

> 左侧导航栏容器， 收起成只有icon的导航栏，需要body中有class='sidebar-mini sidebar-collapse'，如果只有sidebar-collapse，则会将左侧导航栏滑到左侧区域外，不可见。sidebar-collapse用来控制左侧导航栏展开收缩。sidebar-mini允许左侧导航栏收起到只有图标的状态

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

> 左侧菜单栏

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
scrollbar | Boolean | true | 是否开启overlayscrollbars组件。默认开启，此组件是一个滚动条组件，可以使滚动条出现时不挤压其他容器位置


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

## nly-sidebar-nav

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
pill | Boolean | false | 导航形状，圆角
flat | Boolean | false | 导航形状，直角
legacy | Boolean | false | 导航形状，左侧竖线
compact | Boolean | false | 导航形状，压缩形状
childIndent | Boolean | false | 子菜单缩进，默认与一级菜单齐平
size | String | 无 | 文字大小，可选sm，lg
sidebar-nav-class | String |  | 自定义ul标签css式样
role | String | menu | role

## nly-sidebar-nav-item

>菜单元素

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
href | String | 无 | 路由，非router-link跳转
link-target | String | _self | target
active | Boolean | false | 当前元素激活状态
disabled | Boolean | false |  禁用状态
to | String |  | router-link路由
append | String |  | router-link路由,将跳转路由添加到当前路由后面再跳转，详情请查看nly-link文档
exact | Boolean | false |  自动匹配当前路由，如果和当前元素跳转的路由相同，也就是href和to的路由相同，则自动激活exact-active-class
exact-active-class | String | active | 默认active
link-class | String |  | 菜单元素自定义css式样
icon | String |  | 菜单icon

## nly-sidebar-nav-tree

>下拉菜单元素，默认所有下拉菜单为手风琴模式，如需关闭，请给每个下拉菜单设置accordion=null

>如果需要分组手风琴，请给同一组的菜单设置相同的accordion

>请保证target唯一，这是控制手风琴的唯一表示。多个相同，会导致一起展开收起。

>如果有多个target相同，请勿设置visible=true，会导致浏览器崩溃

> 由于overlayscrollbars的原因，下拉菜单动画只有在body class有layout-fixed的时候生效。如果不需要overlayscrollbars，请选择其他wrapper组件。由于左右布局默认选择了nly-container-wrapper，会导致这个问题。
后续修改该bug

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
label | String | nly sidebar navigation | aria-label
target | String |  | 必填，一般情况下请保证target唯一
link-class | String |  | 下拉菜单元素自定义css式样
href | String | 无 | 路由，非router-link跳转，一般不建议使用，会导致页面跳转
link-target | String | _self | target
active | Boolean | false | 当前元素激活状态
disabled | Boolean | false |  禁用状态
to | String |  | router-link路由，一般不建议使用，会导致页面跳转
append | String |  | router-link路由,将跳转路由添加到当前路由后面再跳转，详情请查看nly-link文档
exact | Boolean | false | 自动匹配当前路由，如果和当前元素跳转的路由相同，也就是href和to的路由相同，则自动激活exact-active-class
exact-active-class | String | active | 默认active
icon | String |  | 菜单icon
accordion | String | nly-accordion | 手风琴分组，默认所有下拉菜单为手风琴模式，如需关闭，请给每个下拉菜单设置accordion=null，如果需要分组手风琴，请给同一组的菜单设置相同的accordion
visible | Boolean | false |  菜单是否展开，默认收起
tag | String | ul | 下拉部分菜单标签
appear | Boolean | false |  初始化动画，默认无
menu-class | String |  | 下拉部分菜单自定义css式样，即ul标签自定义css class

### slot 插槽

参数 | 描述
-|-
link | 下拉菜单元素插槽，文字内容
linktool | 下拉菜单元素工具类插槽，可以放badge等。
default | 下拉菜单下拉部分内容

## nly-sidebar-nav-header

>左侧导航栏导航title

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | li | 标签