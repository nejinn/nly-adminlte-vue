# 开始

> 快速开始使用 `NlyAdminlteVue` 。一个基于 `bootstrap` 和 `Adminlte 3` 的响应式 `Vue2.js` 组件库。
> `NlyAdminlteVue` 是一个移动优先的响应式组件库，每个组件在不同的屏幕宽度有不同的式样，以容器布局，栅格系统来适配不同的屏幕。

## 详细说明

`NlyAdminlteVue` 组件库是作者一个人完成的，花费了较多时间和精力，大体上还算不错，但是总会出现一些小错误，欢迎各位读者一起加入开发。

- QQ 群号: 927568606

文档是一个巨大的工程，目前文档还在陆续迁移，因为文档的代码是可实时编辑预览的，所以工程量比较大，难免存在一些错误，如果您发现了文档的错误，或者您想修改文档，请点击文档右上角的修改本页来修改文档。或者联系作者，联系方式

- QQ:871966163
- 邮箱：admin@nejinn.com

## 依赖包

`NlyAdminlteVue` 需要依赖以下几个包才能运行

- [Vue.js](https://vuejs.org/) `v{{ vueVersionMinor }}` 版本是必须的依赖，推荐 `v{{ vueVersion }}` 版本。
- [Adminlte](https://adminlte.io/) `v3` 版本是必须的依赖，推荐 `v3` 版本
- [Popper.js](https://popper.js.org/) `v{{ popperVersionMinor }}` 版本是必须的依赖，这是 [dropdwon](/docs/components/dropdown) 组件 (或者以 dropdown 为基础组件的组件), [tooltips](/docs/components/tooltip) 等组件必须的依赖。推荐 `v{{ popperVersion }}` 版本。
- [PortalVue](https://portal-vue.linusb.org/) `v{{ portalVueVersionMinor }}` 版本是 [Toasts](/docs/components/toast) 组件和指令必须的依赖，推荐 `v{{ portalVueVersion }}` 版本
- [lodash.clonedeep](https://lodash.com/) `v{{ lodashClonedeepVersionMinor }}` 版本是 [RenderFunction](/docs/components/render-function) 组件必须的依赖，推荐 `v{{ lodashClonedeepVersion }}` 版本
- [overlayscrollbars](https://kingsora.github.io/OverlayScrollbars/) `v{{ overlayscrollbarsVersionMinor }}` 版本是 [Sidebar](/docs/components/sidebar)、[ControlSidebar](/docs/components/control-sidebar)和[Log](/docs/components/log)等需要用到滚动条的组件必须的依赖，推荐 `v{{ overlayscrollbarsVersion }}` 版本
- [overlayscrollbars-vue](https://kingsora.github.io/OverlayScrollbars/frameworks/vue/) `v{{ overlayscrollbarsVueVersionMinor }}` 版本是 [Sidebar](/docs/components/sidebar)、[ControlSidebar](/docs/components/control-sidebar)和[Log](/docs/components/log)等需要用到滚动条的组件必须的依赖，推荐 `v{{ overlayscrollbarsVueVersion }}` 版本
- [jQuery](https://jquery.com/) **不需要**， `NlyAdminlteVue` 并不依赖于 JQ。请谨慎使用 JQ 插入 `NlyAdminlteVue` 。

## 文档主要内容

本站点在线文档主要内容分为以下几个部分

- [组件](/docs/components) - 组件和组件插件的文档
- [指令](/docs/directives) - 指令和指令插件的文档
- [图标](/docs/icons) - `NlyAdminlteVue nlyfont icon`
- [其他](/docs/misc) - 其他杂项
- [在线体验](/play) - 在这里您可以体验 `NlyAdminlteVue` 的所有组件

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

如果您需要支持低版本浏览器，请添加

```html
<script
  src="//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver"
  crossorigin="anonymous"
></script>
```

## 全局引入

```js
import "nly-adminlte-vue/dist/adminlte/css/adminlte.css";
import "nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css";
import "nly-adminlte-vue/dist/adminlte/icon/iconfont.css";
import "nly-adminlte-vue/dist/nly-adminlte-vue.css";
import { NlyAdminlteVue, NlyAdminlteVueIcons } from "nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
Vue.use(NlyAdminlteVueIcons);
```

**注意：**

- `NlyAdminlteVue` 中并不包含 `icon` 。
- 如果您需要使用 `nly-icon` 组件和自带的 `icon` 图标，需要 额外 `import { NlyAdminlteVueIcons } from "nly-adminlte-vue"` 和 `import 'nly-adminlte-vue/dist/adminlte/icon/iconfont.css'`
- 某些组件中默认会带有 `nly-icon` 组件, 需要 `import 'nly-adminlte-vue/dist/adminlte/icon/iconfont.css'` 才会生效

## 单包引入

单组件引入

```js
import { NlyBadge } from "nly-adminlte-vue";
Vue.component("nly-badge", NlyBadge);
```

单个插件引入

```js
import { BadgePlugin } from "nly-adminlte-vue";
Vue.use(BadgePlugin);
```
