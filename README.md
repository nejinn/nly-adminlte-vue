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

# nly-adminlte-vue

> nly-adminlte-vue is based on adminlte3 vue2.js， not need JQ

> Welcome to communicating with QQ：927568606

> This is a Alpha Version，Some prop perhaps deprecated in new Version， user caution!

# Demo

> The Demo is synchronize with master

[admin-demo](http://gin-admin.nejinn.com)

uusername: admin
passowrd:123456

[components-demo](http://nly-adminlte-vue-demo.nejinn.com/#/)

[components-demo](https://nejinn.github.io/nly-adminlte-vue-demo/)

# Docs

> [nly-daminlte-vue-docs](http://nly-adminlte-vue.nejinn.com/)

**Note** : The documentation has not been completely migrated to the website. If there is no document on the website, you can view it in the README.md under the corresponding component folder.

We also can view docs localhost with `npm run docs-dev`. [docs-dev](#43-install)

## Install

### clone from Github

```js
git clone https://github.com/nejinn/nly-adminlte-vue.git
npm install npm run
serve view example http://localhost:8080
view local docs npm run docs-dev
```

### npm

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

# Thanks

<a>
  <a href="https://www.jetbrains.com/">
  <img height=100px src="https://raw.githubusercontent.com/nejinn/nly-adminlte-vue/master/static/jetbrains-variant-2.png" alt="jetbrains logo" />
  <div><h4>JetBrains</h4></div>
</a>

<a>
<a href="https://bootstrap-vue.org/">
<svg data-v-792738cd="" xmlns="http://www.w3.org/2000/svg" height="100px" width="100px" viewBox="0 0 2041 2160" clip-rule="evenodd" fill-rule="evenodd"><title data-v-792738cd="">BootstrapVue logo</title> <path data-v-792738cd="" d="m1397 271-370 642-371-642h-592l963 1667 962-1667z" fill="#34495e"></path> <path data-v-792738cd="" d="m44 0h1952l-979 1696z" fill="#563d7c" fill-rule="nonzero"></path> <path data-v-792738cd="" d="m1633 392-612 1061-613-1061h-408l1021 1768 1020-1768z" fill="#41b883"></path> <path data-v-792738cd="" d="m767 196h339c62 0 112 14 150 43 38 28 56 71 56 129 0 36-8 66-25 91s-42 44-74 58v2c43 9 75 29 98 61 22 31 33 71 33 118 0 28-5 53-15 77s-25 44-46 61c-21 18-47 31-80 41-32 11-71 16-116 16h-320zm122 292h199c29 0 54-9 73-25 20-17 29-41 29-72 0-35-8-60-26-75-17-14-43-21-76-21h-199zm0 305h216c37 0 66-10 86-29s31-46 31-81-10-61-31-80-49-28-86-28h-216z" fill="#fff"></path></svg>
<div><h4>BoostrapVue</h4></div>
</a>
</a>
