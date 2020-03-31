<p align="center">
  <a href="https://github.com/nejinn/nly-adminlte-vue">
    <img src="https://github.com/nejinn/nly-adminlte-vue/blob/master/static/NLYREADME.png" width="300">
  </a>
</p>
<br>
<p align="center">
  <a href="https://travis-ci.org/github/nejinn/nly-adminlte-vue">
    <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="build result">
  </a>
  <a href="https://www.npmjs.com/package/nly-adminlte-vue">
    <img src="https://img.shields.io/badge/npm-0.3.6-blue" alt="current version">
  </a>
  <a href="https://cn.vuejs.org">
    <img src="https://img.shields.io/badge/vue.js-2.x-green" alt="vue version">
  </a>
  <a href="https://github.com/ColorlibHQ/AdminLTE">
    <img src="https://img.shields.io/badge/adminlte-3.x-yellow" alt="adminlte version">
  </a>
  <a href="https://packagequality.com/#?package=nly-adminlte-vue">
    <img src="https://npm.packagequality.com/shield/nly-adminlte-vue.svg" alt="package quality" />
  </a>
</p>

> 2020/3/28-2020/4/2 大概5天时间因为python项目比较忙，会暂停更新组件。

> 2020/3/28-2020/4/2 大概5天时间因为python项目比较忙，会暂停更新组件。

# 1. nly-adminlte-vue
<!-- TOC -->

- [1. nly-adminlte-vue](#1-nly-adminlte-vue)
- [2. demo](#2-demo)
- [3. 文档](#3-文档)
- [4. 进度](#4-进度)
  - [4.1. 组件](#41-组件)
  - [4.2. 指令](#42-指令)
  - [4.3. 使用](#43-使用)
    - [4.3.1. 可以直接clone下载项目](#431-可以直接clone下载项目)
    - [4.3.2. 从npm下载](#432-从npm下载)
- [5. 感谢](#5-感谢)

<!-- /TOC -->

> nly-adminlte-vue是一个基于adminlte3封装的vue组件库。干掉jq，让vue更好的使用adminlte3。

> 欢迎贡献代码

> 欢迎加群交流 QQ群：927568606

# 2. demo

> demo可以看到跟master同步的组件。点击下面
[nly-daminlte-vue-demo](https://nejinn.github.io/nly-adminlte-vue-demo)

# 3. 文档

> 直接从github上clone的项目，可以从src进入adminlte-vue下面的components和directives,打开对应的组件或者指令文件夹，查看README.md
比如查看badge的文件，点击[badgeREADME.md](https://github.com/nejinn/nly-adminlte-vue/blob/master/src/nly-adminlte-vue/components/badge/README.md)

> 从npm下载的文件，可以在packages文件夹下面的components和directives中打开对应的组件或者指令文件夹，查看README.md

# 4. 进度

> 目前已经封装完成

## 4.1. 组件

* 皮肤  theme
* 折叠板 collapse
* 导航栏 navbar
* 导航 nav
* 栅格布局 grid row col
* 容器 container
* 正文容器 content
* 包装容器 wrapper
* 文字路由 link
* 按钮 button
* 开关 switch
* 卡片 card
* 小标签 badge
* 下拉菜单 dropdown
* 图标 icon
* 右侧收缩板 control-sidebar
* 罩层 overlay
* 弹框消息 toast
* 旋转loading spinner
* 进度条 progress
* 时间轴 timeline
* 面包屑导航 breadcrumb
* 信息箱 infobox
* 表格 table 表格是bootstrapVue的组件。传送门[bootstrapVue](https://bootstrap-vue.js.org)
* 提示工具 tooltip
* 分页 paginaton
* 渲染函数 renderfunction 根据数组渲染整个页面的组件
* 表单 form
* input框 input
* 表单验证 feedback
* 日志组件 log

## 4.2. 指令

* 左侧导航栏收起指令 v-nly-sidebar-collapse
* 右侧收缩版收起指令 v-nly-control-sidebar-collapse
* 卡片最大化指令 v-nly-card-maximized
* 折叠版收起展开指令 v-nly-toggle
* 提示工具指令 v-nly-tooltip

## 4.3. 使用

### 4.3.1. 可以直接clone下载项目

```html
git clone https://github.com/nejinn/nly-adminlte-vue.git

npm install 

npm run serve

// 查看example，所有组件demo都在这里
http://localhost:8080
```

### 4.3.2. 从npm下载

* 整包引入
```html

npm install nly-adminlte-vue

main.js
import "nly-adminlte-vue/dist/adminlte/css/adminlte.css";
import "nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css";
import "nly-adminlte-vue/dist/adminlte/icon/iconfont.css";
import "nly-adminlte-vue/dist/nly-adminlte-vue.css";
import { NlyAdminlteVue } from "nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
```
* 单包引入

> 比如引入 nly-badge

```js
import { NlyBadge } from "./nly-adminlte-vue";
Vue.component('nly-badge', NlyBadge)
```

> 整个badgePlugin导出

```js
import { badgePlugin } from "./nly-adminlte-vue";
Vue.use(badgePlugin);
```

# 5. 感谢

[bootstrapVue](https://bootstrap-vue.js.org)
