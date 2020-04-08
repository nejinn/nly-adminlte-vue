# 1. breadcrumb
<!-- TOC -->

- [1. breadcrumb](#1-breadcrumb)
    - [1.1. nly-breadcrumb](#11-nly-breadcrumb)
        - [1.1.1. props](#111-props)
            - [1.1.1.1. demo](#1111-demo)
    - [1.2. nly-breadcrumb-item](#12-nly-breadcrumb-item)
        - [1.2.1. props](#121-props)
    - [1.3. 单包导出](#13-单包导出)
        - [1.3.1. 包含组件](#131-包含组件)
        - [1.3.2. 导出方法](#132-导出方法)

<!-- /TOC -->
> 面包屑导航

## 1.1. nly-breadcrumb

> 面包屑导航

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
item | Array |  | nly-breadcrumb-item props的数组，每个元素接受nly-breadcrumb-item组件的所有props。传入item会自动渲染nly-breadcrumb-item组件，这时会渲染成一个完整的breadcrumb。如果不传入item，则需要手动插入nly-breadcrumb-item组件。
breadcrumb-class | String |  | 自定义css式样

#### 1.1.1.1. demo

```html
<template>
<nly-breadcrumb :item="item" />
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          text: "home",
          to: "/",
          icon: "nlyfont nly-home-fill"
        },
        {
          text: "collapse",
          to: "/collapse",
          icon: "nlyfont nly-outlet"
        },
        {
          text: "breadcrumb",
          to: "/breadcrumb",
          active: true,
          icon: "nlyfont nly-security-fill"
        }
      ],
    };
  }
};
</script>
```

## 1.2. nly-breadcrumb-item

> 面包屑导航item

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
icon | String |  | icon图标
text | String |  | 文本内容
href | String |  | 普通a标签跳转
to | String or Object |  | router-link 调用router.push()
target | String | '_self' | target属性,支持所有target值_blank，_self，_parent，_top，framename
active | Boolean | false | 激活状态
append | Boolean | false | router-link，需要使用to这个props，将需要跳转的url字符串添加到当前url的后面再跳转。设置append=true，比如当前http://localhost:8080/link，to='collapse'，则会跳转到http://localhost:8080/link/collapse
replace | Boolean | false | router-link，调用router.replace()
item-class | String |  | item自定义css式样
link-class | String |  | 当active为false的时候，link-class为自定义nly-icon组件的自定义css式样

## 1.3. 单包导出

> 如果只需要使用breadcrumbPlugin中的组件，请使用单个组件导出

### 1.3.1. 包含组件

> breadcrumbPlugin包括以下组件

名称 | 导出路径
-|-
NlyBreadcrumb | nly-adminlte-vue
NlyBreadcrumbItem | nly-adminlte-vue

### 1.3.2. 导出方法

> 单组件导出

```js
import { NlyBreadcrumb } from "nly-adminlte-vue";
Vue.component('nly-breadcrumb', NlyBreadcrumb)
```

> 整个breadcrumbPlugin导出

```js
import { breadcrumbPlugin } from "nly-adminlte-vue";
Vue.use(breadcrumbPlugin);
```