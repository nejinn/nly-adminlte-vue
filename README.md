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

English README || [中文 README](https://github.com/nejinn/nly-adminlte-vue/tree/master/zh)

# 1. nly-adminlte-vue

> nly-adminlte-vue is based on adminlte3 vue2.js， not need JQ

> Welcome to communicating with QQ：927568606

> This is a Alpha Version，Some prop perhaps deprecated in new Version， user caution!

# 2. Demo

> The Demo is synchronize with master

[demo-china](http://nly-adminlte-vue-demo.nejinn.com/#/)

[demo-github](https://nejinn.github.io/nly-adminlte-vue-demo/)

![demoPic](https://github.com/nejinn/nly-adminlte-vue/blob/master/static/demoPic.png)

![demo](https://github.com/nejinn/nly-adminlte-vue/blob/master/static/demo.gif)

![demoPic](https://github.com/nejinn/nly-adminlte-vue/blob/master/static/demo1.gif)

# 3. Docs

> [nly-daminlte-vue-docs](http://nly-adminlte-vue.nejinn.com/)

**Note** : The documentation has not been completely migrated to the website. If there is no document on the website, you can view it in the README.md under the corresponding component folder.

We also can view docs localhost with `npm run docs-dev`. [docs-dev](#43-install)

# 4. Progress

> Packaged components

## 4.1. Component

- theme
- collapse
- navbar
- nav
- grid row col
- container
- content
- wrapper
- link
- button
- switch
- card
- badge
- dropdown
- icon
- control-sidebar
- overlay
- toast
- spinner
- progress
- timeline
- breadcrumb
- infobox
- table
- tooltip
- paginaton
- renderfunction
- form
- input
- feedback
- log
- list-group
- modal
- tabs
- form-group
- popover
- input-group
- form-select
- form-daterangepicker

## 4.2. Directives

- v-nly-sidebar-collapse
- v-nly-control-sidebar-collapse
- v-nly-card-maximized
- v-nly-toggle
- v-nly-tooltip
- v-nly-modal
- v-nly-scrollspy
- v-nly-popover
- v-nly-toggle

## 4.3. Install

### 4.3.1. clone from Github

```html
git clone https://github.com/nejinn/nly-adminlte-vue.git npm install npm run
serve // view example http://localhost:8080 // view local docs npm run docs-dev
```

### 4.3.2. npm

- import all

```js

npm install nly-adminlte-vue

main.js
import "nly-adminlte-vue/dist/adminlte/css/adminlte.css";
import "nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css";
import "nly-adminlte-vue/dist/adminlte/icon/iconfont.css";
import "nly-adminlte-vue/dist/nly-adminlte-vue.css";
import { NlyAdminlteVue, NlyAdminlteVueIcons } from "nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
Vue.use(NlyAdminlteVueIcons);
```

- CDN

```html
<!-- vue -->
<script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>

<!-- nly-adminlte-vue JS-->
<script src="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue.umd.js"></script>

<!--  import nly-adminlte-vue CSS -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue.css"
/>

<!-- adminlte3 CSS -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/css/adminlte.css"
/>

<!-- nly-adminlte-vue-icon JS-->
<script src="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue-icon.umd.js"></script>

<!-- nlyfont icon CSS -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/icon/iconfont.css"
/>

<!-- fontawesome icon CSS -->
<link
  type="text/css"
  rel="stylesheet"
  href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/fontawesome-free/css/all.css"
/>
```

- import one

> Just like nly-badge

```js
import { NlyBadge } from "nly-adminlte-vue";
Vue.component("nly-badge", NlyBadge);
```

> import Plugin

```js
import { badgePlugin } from "nly-adminlte-vue";
Vue.use(badgePlugin);
```

# 5. Thanks

[bootstrapVue](https://bootstrap-vue.js.org)
