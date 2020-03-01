# checkbox switch

## nly-swiitch

> 开关，支持颜色，大小，形状等设置

### props

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
checeked | Boolean, String, Number |  | 初始选中状态，和v-model一起用会被v-model值覆盖。
