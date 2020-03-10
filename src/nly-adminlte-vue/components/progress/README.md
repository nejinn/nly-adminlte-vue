# progress 

> 进度条

## nly-progress

> nly-progress默认会生成一个nly-progress-bar，当nly-progress下插入nly-progress-bar组件时，默认生成的nly-progress-bar不会渲染。

> nly-progress下插入的nly-progress-bar组件会继承nly-progress的某些porps，当nly-progress-bar自己传入这些props时，会覆盖从nly-progress继承的props

### props

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

### nly-progress-bar

> 进度条

### props

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
