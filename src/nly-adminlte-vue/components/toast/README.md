# toast

## nly-toast

### props

参数 | 类型 |  默认值 | 描述
-|-|-|-
id | String |  | 需要触发的toast id。用于在函数中可以通过id来触发显示toast
title | String |  | toasttitle内容
toaster | String | 'nly-toaster-top-right' | toast出现位置。可选nly-toaster-top-right，nly-toaster-top-left，nly-toaster-top-center，nly-toaster-top-full，nly-toaster-bottom-right，nly-toaster-bottom-left，nly-toaster-bottom-center，nly-toaster-bottom-full
visible | Boolean | false | 是否可见，设置true，则可见。请用v-model指令传值
variant | String |  | 主题色，可选default，primary，secondary，success，info，danger，warning
is-status | Boolean | false | 设置true，添加aria-live=polite，role=status。默认aria-live=assertive，role=alert
append-toast | Boolean | false | 添加模式，从底部添加
no-auto-hide | Boolean | false | 是否自动关闭，默认自动关闭
auto-hide-delay | Number or String | 5000 | 关闭时间，默认5s
no-close-button | Boolean | false | 右上角关闭按钮
no-fade | Boolean | false | 开启动画，默认有动画
no-hover-pause | Boolean | false | 鼠标悬停暂停自动关闭计时
solid | Boolean | false | 背景色深色
toast-class | String，Object，Array |  | 自定义css式样
header-class | String，Object，Array |  | header 自定义css式样
body-class | String，Object，Array |  | body自定义css式样
href | String |  | 跳转链接
to | String，Object |  | router-link router
static | Boolean | false | 把toast挂载在当前元素父元素内。默认都是挂载在body