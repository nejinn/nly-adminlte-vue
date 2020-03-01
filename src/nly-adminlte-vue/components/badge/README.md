# 1. badge
<!-- TOC -->

- [1. badge](#1-badge)
    - [1.1. nly-badge](#11-nly-badge)
        - [1.1.1. props](#111-props)

<!-- /TOC -->
## 1.1. nly-badge

> 一般情况下badge的大小时由父元素或者以上的元素决定的。
比如可以

```html
<h1><nly-badge variant='info'>info</nly-badge></h1>
<h2><nly-badge variant='info'>info</nly-badge></h2>
<h3><nly-badge variant='info'>info</nly-badge></h3>
<h4><nly-badge variant='info'>info</nly-badge></h4>
```

>提供了一个设置badge大小的props size

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
size | String |  | 大小，可选sm，lg，会强制覆盖父元素以上设置的大小
variant | String |  | 背景色，默认无背景。可选primary，secondary，success，info:，warning，danger，light，dark，lightblue，navy，olive，lime，fuchsia，maroon，blue，indigo，purple，pink，red，orange，yellow，green，teal，cyan，white，gray，graydark
tag | String | span | 标签，默认span
badge-class | String | | 自定义css式样，如果需要放在navbar中，可以传入navbar-badge，这样会让badge变成右上角小图标，在一般情况下不会挡住navbar-item
