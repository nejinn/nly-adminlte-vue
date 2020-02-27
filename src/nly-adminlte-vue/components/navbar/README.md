# 1. navbar
<!-- TOC -->

- [1. navbar](#1-navbar)
    - [1.1. nly-navbar](#11-nly-navbar)
        - [1.1.1. props](#111-props)
    - [1.2. nly-navbar-nav](#12-nly-navbar-nav)
        - [1.2.1. props](#121-props)
    - [1.3. nly-navbar-brand](#13-nly-navbar-brand)
        - [1.3.1. props](#131-props)
    - [1.4. nly-navbar-brandimg](#14-nly-navbar-brandimg)
        - [1.4.1. props](#141-props)
    - [1.5. nly-navbar-brandtext](#15-nly-navbar-brandtext)
        - [1.5.1. props](#151-props)
    - [1.6. nly-navbar-toggle](#16-nly-navbar-toggle)
        - [1.6.1. props](#161-props)

<!-- /TOC -->
## 1.1. nly-navbar

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
header | Boolean | false | 左右布局菜单,非左右布局是传入会导致左侧右移,请配合nly-container-wrapper一起用
expand | String | navbar-expand | 菜单栏屏幕变化收起断点,默认是sm断点,可选xl,lg,md,sm.no
variant | String | white | 菜单主题颜色,可选  orange,warning,lightlight,graygray,graydark,darkdark,cyan,teal,lightblue,navy,pink,purple,indigo,danger,success,info,secondary,primary,white
size | String | 无 | 菜单字体大小,可选sm,lg
boder | Boolean | true | 菜单底边框，header为true的时候生效
navbar-class | String | | 自定义css式样

## 1.2. nly-navbar-nav

### 1.2.1. props

无

## 1.3. nly-navbar-brand

### 1.3.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
to | String | 无 | router-link模式to路由，传to的情况下会渲染成router-link
href | String | 无 | 传link会渲染成a href标签，优先级别会to低，link，to都传入会渲染成router-link，两者都不传入会渲染成router-link，且指向/#

## 1.4. nly-navbar-brandimg

### 1.4.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
src | String | 无 | 图片url
navbar-brandimg-class | String | 无 | 自定义式样
alt | String | 无 | img alt
circle | Boolean | false | 圆形
elevation | Boolean | false | 阴影

## 1.5. nly-navbar-brandtext

### 1.5.1. props

无

## 1.6. nly-navbar-toggle

### 1.6.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
label | String | Nly Toggle navigation | aria-label
target | String |  | 对应collapse的id
navbar-class | String | | 自定义css式样