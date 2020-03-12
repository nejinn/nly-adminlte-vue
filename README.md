# 1. nly-adminlte-vue
<!-- TOC -->

- [1. nly-adminlte-vue](#1-nly-adminlte-vue)
    - [1.1. 进度](#11-进度)
        - [1.1.1. 组件](#111-组件)
        - [1.1.2. 指令](#112-指令)
    - [1.2. 使用](#12-使用)
        - [1.2.1. 可以直接clone下载项目](#121-可以直接clone下载项目)
        - [1.2.2. 从npm下载](#122-从npm下载)

<!-- /TOC -->

nly-adminlte-vue是一个基础adminlte3封装的vue组件库。干掉jq，让vue更好的使用adminlte3。

欢迎贡献代码

欢迎加群交流 QQ群：927568606

![demo1](https://github.com/nejinn/nly-adminlte-vue/blob/master/nly-adminlte-vue-1.gif)
![demo2](https://github.com/nejinn/nly-adminlte-vue/blob/master/nly-adminlte-vue-2.gif)
![demo3](https://github.com/nejinn/nly-adminlte-vue/blob/master/nly-adminlte-vue-3.gif)
![demo4](https://github.com/nejinn/nly-adminlte-vue/blob/master/nly-adminlte-vue-4.gif)

## 1.1. 进度

目前已经封装完成

### 1.1.1. 组件

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

### 1.1.2. 指令

* 左侧导航栏收起指令 v-nly-sidebar-collapse
* 右侧收缩版收起指令 v-nly-control-sidebar-collapse
* 卡片最大化指令 v-nly-card-maximized
* 折叠版收起展开指令 v-nly-toggle

## 1.2. 使用

### 1.2.1. 可以直接clone下载项目

```html
git clone https://github.com/nejinn/nly-adminlte-vue.git

npm install 

npm run server

// 查看example，所有组件demo都在这里
http://localhost:8080
```

### 1.2.2. 从npm下载

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