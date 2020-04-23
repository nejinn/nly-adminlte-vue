# 开始

> 快速开始使用 NlyAdminlteVue。一个基于 bootstrap 和 Adminlte 3 的响应式 Vue2.js 组件库。

## 依赖包

NlyAdminlteVue 需要依赖以下几个包才能运行

-   [Vue.js](https://vuejs.org/) `v{{ vueVersionMinor }}` 版本是必须的依赖，推荐`v{{ vueVersion }}`版本。
-   [Adminlte](https://adminlte.io/) `v3` 版本是必须的依赖，推荐`v3` 版本
-   [Popper.js](https://popper.js.org/) `v{{ popperVersionMinor }}` 版本是必须的依赖，这是 dropdwon 组件 (或者以 dropdown 为基础组件的组件), tooltips 等组件必须的依赖。推荐`v{{ popperVersion }}` 版本。
-   [PortalVue](https://portal-vue.linusb.org/) `v{{ portalVueVersionMinor }}` 版本是 [Toasts](/docs/components/toast) 组件和指令必须的依赖，推荐 `v{{ portalVueVersion }}` 版本
-   [lodash.clonedeep](https://lodash.com/) `v{{ lodashClonedeepVersionMinor }}` 版本是 [RenderFunction](/docs/components/render-function) 组件必须的依赖，推荐 `v{{ lodashClonedeepVersion }}` 版本
-   [overlayscrollbars](https://kingsora.github.io/OverlayScrollbars/) `v{{ overlayscrollbarsVersionMinor }}` 版本是 [Sidebar](/docs/components/sidebar)、[ControlSidebar](/docs/components/control-sidebar)和[Log](/docs/components/log)等需要用到滚动条的组件必须的依赖，推荐 `v{{ overlayscrollbarsVersion }}` 版本
-   [overlayscrollbars-vue](https://kingsora.github.io/OverlayScrollbars/frameworks/vue/) `v{{ overlayscrollbarsVueVersionMinor }}` 版本是 [Sidebar](/docs/components/sidebar)、[ControlSidebar](/docs/components/control-sidebar)和[Log](/docs/components/log)等需要用到滚动条的组件必须的依赖，推荐 `v{{ overlayscrollbarsVueVersion }}` 版本
-   [jQuery](https://jquery.com/) **不需要**，NlyAdminlteVue 并不依赖于 JQ。请谨慎使用 JQ 插入 NlyAdminlteVue。

## 文档主要内容

本站点在线文档主要内容分为以下几个部分

-   [组件](/docs/components) - 组件和组件插件的文档
-   [指令](/docs/directives) - 指令和指令插件的文档
-   [图标](/docs/icons) - NlyAdminlteVue nlyfont icon
-   [其他](/docs/misc) - 其他杂项
-   [在线测试代码](/play) - 在这里您可以测试NlyAdminlteVue的所有组件

## 安装命令

```js
npm install nly-adminlte-vue
```

## unpkg CDN 快速开始

您可以通过 unpkg CDN 引入相关文件来快速开始

```html
<!-- 引入vue -->
<script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>

<!-- 引入nly-adminlte-vue JS入口文件-->
<script src="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue.common.js"></script>

<!-- 引入nly-adminlte-vue CSS文件 -->
<link type="text/css" rel="stylesheet" href="//unpkg.com/nly-adminlte-vue@latest/dist/nly-adminlte-vue.css" />

<!-- 引入adminlte3 CSS文件 -->
<link type="text/css" rel="stylesheet" href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/css/adminlte.css" />

<!-- 引入nlyfont icon CSS文件 -->
<link type="text/css" rel="stylesheet" href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/icon/iconfont.css" />

<!-- 引入免费fontawesome icon CSS文件 -->
<link type="text/css" rel="stylesheet" href="//unpkg.com/nly-adminlte-vue@latest/dist/adminlte/fontawesome-free/css/all.css" />
```

如果您需要支持低版本浏览器，请添加

```html
<script src="//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver" crossorigin="anonymous"></script>
```

## 全局引入

```js
import "nly-adminlte-vue/dist/adminlte/css/adminlte.css";
import "nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css";
import "nly-adminlte-vue/dist/adminlte/icon/iconfont.css";
import "nly-adminlte-vue/dist/nly-adminlte-vue.css";
import { NlyAdminlteVue } from "nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
```

## 单包引入

单组件引入
```js
import { NlyBadge } from "nly-adminlte-vue";
Vue.component('nly-badge', NlyBadge)
```

单个插件引入
```js
import { BadgePlugin } from "nly-adminlte-vue";
Vue.use(BadgePlugin);
```