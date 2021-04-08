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

# nly-adminlte-vue

> nly-adminlte-vue 是一个基于 adminlte3 封装的 vue 组件库。干掉 jq，让 vue 更好的使用 adminlte3。

> 欢迎加群交流 QQ 群：927568606

> 目前版本为测试版本，欢迎体验更新代码。可能会 存在新版本不兼容旧版本 prop 的情况，请注意

# demo

> demo 可以看到跟 master 同步的组件。点击下面

[admin-demo](http://gin-admin.nejinn.com)

帐号: admin
密码:123456

admin demo 后端是 go 语言写的，[项目地址](https://github.com/nejinn/gin-gorm)
https://github.com/nejinn/gin-gorm

[components-demo](http://nly-adminlte-vue-demo.nejinn.com/#/)
http://nly-adminlte-vue-demo.nejinn.com/#/

[components-demo](https://nejinn.github.io/nly-adminlte-vue-demo/)
https://nejinn.github.io/nly-adminlte-vue-demo/

# 文档

> [nly-daminlte-vue-docs](http://nly-adminlte-vue.nejinn.com/)

**注意** : 目前文档还没有完全迁移到网站上，网站上没有文档的可以在对应组件文件夹下面的 README.md 查看

在本地 运行 docs-dev 命令也可以查看文档。 [docs-dev](#43-install)

## 使用

### 可以直接 clone 下载项目

```js
git clone https://github.com/nejinn/nly-adminlte-vue.git
npm install
npm runserve // 查看example，所有组件demo都在这里 http://localhost:8080 //
查看本地文档 npm run docs-dev
```

### 从 npm 下载

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

# 感谢

<a href='https://www.jetbrains.com/'>
  <img height=100px src="https://raw.githubusercontent.com/nejinn/nly-adminlte-vue/master/static/jetbrains-variant-2.png" alt="jetbrains logo" />
</a>

<a href="https://bootstrap-vue.org/">
  <img height=100px src="https://raw.githubusercontent.com/bootstrap-vue/bootstrap-vue/master/static/banner.png" alt="jetbrains logo" />
</a>
