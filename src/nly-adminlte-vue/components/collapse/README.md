# 1. collapse 
<!-- TOC -->

- [1. collapse](#1-collapse)
    - [1.1. nly-collapse](#11-nly-collapse)
        - [1.1.1. props](#111-props)
    - [1.2. nly-collapse-transition](#12-nly-collapse-transition)
        - [1.2.1. props](#121-props)

<!-- /TOC -->
## 1.1. nly-collapse

>折叠版

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
id | String |  | 折叠组id
is-nav | Boolean | false | 菜单模式，会添加class='navbar-collapse'
accordion | String |  | 手风琴模式，手风琴分组字段
visible | Boolean | false | 设置true，会展开折叠版
tag | String | 'div' | 标签
appear | Boolean | false | 初始化展开动画


## 1.2. nly-collapse-transition

>一个boostrap,adminlte展开折叠动画
需要css中有以下式样
```
  css: true,
  enterClass: "",
  enterActiveClass: "collapsing",
  enterToClass: "collapse show",
  leaveClass: "collapse show",
  leaveActiveClass: "collapsing",
  leaveToClass: "collapse"
```

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
appear | Boolean | false | 初始化展开动画