# 1. <a>...</a> Nlylink
<!-- TOC -->

- [1. <a>...</a> Nlylink](#1-aa-nlylink)
    - [1.1. nly-link](#11-nly-link)
        - [1.1.1. props](#111-props)

<!-- /TOC -->
## 1.1. nly-link

>代替a标签的组件。

>to和href都不传的时候，默认href="#"，会不跳转url，只有点击效果，需要绑定@click触发点击函数

### 1.1.1. props

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