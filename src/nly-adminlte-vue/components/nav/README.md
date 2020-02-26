# nav

>导航

## nly-nav

>导航

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | ul | 标签
fill | Boolean | false | 按比列填充整个nav，但不是等宽
justified | Boolean | false | 等宽填充整个nav
align | String |  | nly-nav-item位置:可选 start，left，center，end'，right
tabs | Boolean | false | nav table形状，会添加class='nav-tabs'
tabs-right | Boolean | false | 选项卡形状，vertical,tabs为true的情况下生效,nav右侧形状
pills | Boolean | false | nav圆角按钮形状
vertical | Boolean | false | 垂直
small | Boolean | false | 小字体
card-header | Boolean | false | 放在卡片中时，可以设置为true,就会变成卡片头部

## nly-nav-item

>导航item元素
>nly-nav-item中封装岭一个nly-link，默认a标签

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
href | String |  | 普通a标签跳转
rel | String |  | rel属性
target | String | '_self' | target属性,支持所有target值_blank，_self，_parent，_top，framename
active | Boolean | false | 激活状态
disabled | Boolean | false | 禁用状态
to | String or Object |  | router-link 调用router.push()
append | Boolean | false | router-link，需要使用to这个props，将需要跳转的url字符串添加到当前url的后面再跳转。设置append=true，比如当前http://localhost:8080/link，to='collapse'，则会跳转到http://localhost:8080/link/collapse
replace | Boolean | false | router-link，调用router.replace()
event | String or Array | 'click' | 点击事件，尽量不要和to以及href同时使用，如果同时使用，点击事件和跳转会依次发生
router-tag | String | 'a' |  标签
active-class | String |  | 自定义router-link激活时的css式样，必选设置active=true
exact | Boolean | false | router-link router-view一起用，当前router和当前nly-nav-item的to props一样的时候，会自动激活active
exact-active-class | String |  | excet被激活的时候，自定义的css式样
link-attrs | Object |  | 自定义封装在nly-nav-item中的nly-link的attrs
link-classes | String or Object or Array |  | 自定义自定义封装在nly-nav-item中的nly-link的css式样