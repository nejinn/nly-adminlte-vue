<p align="center">
  <a href="https://github.com/nejinn/nly-adminlte-vue">
    <img src="https://github.com/nejinn/nly-adminlte-vue/blob/master/static/NLYREADME.png" width="300">
  </a>
</p>
<br>
<p align="center">
  <a href="https://travis-ci.org/github/nejinn/nly-adminlte-vue">
    <img src="https://travis-ci.org/nejinn/nly-adminlte-vue.svg?branch=master" alt="build result">
  </a>
  <a href="https://www.npmjs.com/package/nly-adminlte-vue">
    <img src="https://img.shields.io/npm/v/nly-adminlte-vue?color=green" alt="current version">
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
    <a href="https://github.com/nejinn/nly-adminlte-vue/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/nly-adminlte-vue" alt="package LICENSE" />
  </a>
  </a>
    <a href="https://www.npmjs.com/package/nly-adminlte-vue">
    <img src="https://img.shields.io/npm/dt/nly-adminlte-vue" alt="downloads" />
  </a>
  </a>
    <a href="https://github.com/nejinn/nly-adminlte-vue/graphs/contributors">
    <img src="https://img.shields.io/npm/collaborators/nly-adminlte-vue" alt="collaborators" />
  </a>

</p>

</BR>

[English README](https://github.com/nejinn/nly-adminlte-vue) || 中文 README

# 1. nly-adminlte-vue

> nly-adminlte-vue 是一个基于 adminlte3 封装的 vue 组件库。干掉 jq，让 vue 更好的使用 adminlte3。

> 欢迎加群交流 QQ 群：927568606

> 目前版本为测试版本，欢迎体验更新代码。可能会 存在新版本不兼容旧版本 prop 的情况，请注意

# 2. demo

> demo 可以看到跟 master 同步的组件。点击下面

> [demo-国内](http://nly-adminlte-vue-demo.nejinn.com/#/)

> [demo-github](https://nejinn.github.io/nly-adminlte-vue-demo/)

![demoPic](https://github.com/nejinn/nly-adminlte-vue/blob/master/static/demoPic.png)

![demo](https://github.com/nejinn/nly-adminlte-vue/blob/master/static/demo.gif)

![demoPic](https://github.com/nejinn/nly-adminlte-vue/blob/master/static/demo1.gif)

# 3. 文档

> [nly-daminlte-vue-docs](http://nly-adminlte-vue.nejinn.com/)

**注意** : 目前文档还没有完全迁移到网站上，网站上没有文档的可以在对应组件文件夹下面的 README.md 查看

在本地 运行 docs-dev 命令也可以查看文档。 [docs-dev](#43-install)

# 4. 进度

> 目前已经封装完成

## 4.1. 组件

- 皮肤 theme
- 折叠板 collapse
- 导航栏 navbar
- 导航 nav
- 栅格布局 grid row col
- 容器 container
- 正文容器 content
- 布局容器 wrapper
- 文字路由 link
- 按钮 button
- 开关 switch
- 卡片 card
- 小标签 badge
- 下拉菜单 dropdown
- 图标 icon
- 右侧收缩板 control-sidebar
- 罩层 overlay
- 弹框消息 toast
- 旋转 loading spinner
- 进度条 progress
- 时间轴 timeline
- 面包屑导航 breadcrumb
- 信息箱 infobox
- 表格 table 表格是 bootstrapVue 的组件。传送门[bootstrapVue](https://bootstrap-vue.js.org)
- 提示工具 tooltip
- 分页 paginaton
- 渲染函数 renderfunction 根据数组渲染整个页面的组件
- 表单 form
- input 框 input
- 表单验证 feedback
- 日志组件 log
- 列表 list-group
- 弹框 modal
- tab 标签 tabs
- 表单组 form-group
- 弹出框 popover
- 输入框组 input-group
- 下拉选择输入框 form-select
- 日期选择器 form-daterangepicker
- bootstrap 分页 bootstrap-pagination

## 4.2. 指令

- 左侧导航栏收起指令 v-nly-sidebar-collapse
- 右侧收缩版收起指令 v-nly-control-sidebar-collapse
- 卡片最大化指令 v-nly-card-maximized
- 折叠版收起展开指令 v-nly-toggle
- 提示工具指令 v-nly-tooltip
- 弹框工具指令 v-nly-modal
- 滚动条工具指令 v-nly-scrollspy
- 弹出框指令 v-nly-popover
- 收起展开指令 v-nly-toggle

## 4.3. 使用

### 4.3.1. 可以直接 clone 下载项目

```html
git clone https://github.com/nejinn/nly-adminlte-vue.git npm install npm
runserve // 查看example，所有组件demo都在这里 http://localhost:8080 //
查看本地文档 npm run docs-dev
```

### 4.3.2. 从 npm 下载

- 整包引入

```js
npm install nly-adminlte-vue main.js
import "nly-adminlte-vue/dist/adminlte/css/adminlte.css";
import "nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css";
import "nly-adminlte-vue/dist/adminlte/icon/iconfont.css";
import "nly-adminlte-vue/dist/nly-adminlte-vue.css";
import { NlyAdminlteVue, NlyAdminlteVueIcons } from "nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
Vue.use(NlyAdminlteVueIcons);
```

- CDN 引入

```html
<!-- 引入vue -->
<script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>

<!-- 引入nly-adminlte-vue JS入口文件-->
<script src="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue.umd.js"></script>

<!-- 引入nly-adminlte-vue CSS文件 -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue.css"
/>

<!-- 引入adminlte3 CSS文件 -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/css/adminlte.css"
/>

<!-- 引入nly-adminlte-vue-icon JS入口文件-->
<script src="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue-icon.umd.js"></script>

<!-- 引入nlyfont icon CSS文件 -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/icon/iconfont.css"
/>

<!-- 引入免费fontawesome icon CSS文件 -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/fontawesome-free/css/all.css"
/>
```

- 单包引入

> 比如引入 nly-badge

```js
import { NlyBadge } from "nly-adminlte-vue";
Vue.component("nly-badge", NlyBadge);
```

> 整个 badgePlugin 导出

```js
import { badgePlugin } from "nly-adminlte-vue";
Vue.use(badgePlugin);
```

# 5. 感谢

[bootstrapVue](https://bootstrap-vue.js.org)
