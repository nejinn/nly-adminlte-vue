# Icons

> icon 图标默认是基于 iconfont 的图标，理论上可以传入任何 icon 图标，只要引入了对应的 css

## 总览

`nly-icon` 支持渲染任何 font class 的 icon。只需要导入对应的 CSS 就可

`nly-icon` 组件不包含在 `NlyAdminlteVue` 中，需要额外引入

```js
import { NlyAdminlteVueIcons } from 'nly-adminlte-vue'
Vue.use(NlyAdminlteVueIcons)
```

比如使用默认的 `nlyfont icon`

```js
import 'nly-adminlte-vue/dist/adminlte/icon/iconfont.css'
import { NlyAdminlteVueIcons } from 'nly-adminlte-vue'
```

使用 `Adminlte 3` 自带 `icon`

```js
import 'nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css'
import { NlyAdminlteVueIcons } from 'nly-adminlte-vue'
```

```HTML
<div>
  <nly-icon icon='far fa-circle text-info' />
  <nly-icon icon='far fa-circle text-warning' />
  <nly-icon icon='far fa-circle text-danger' />
</div>

<div>
  <nly-icon icon='nlyfont nly-icon-breadcrumb-fill text-info' />
  <nly-icon icon='nlyfont nly-icon-breadcrumb-fill text-warning' />
  <nly-icon icon='nlyfont nly-icon-breadcrumb-fill text-danger' />
</div>

<!-- nly-icon.vue -->
```

**注意：**

- 使用 `nly-icon` 需要额外导入
- 某些组件中默认会带有 `nly-icon` 组件, 需要 `import 'nly-adminlte-vue/dist/adminlte/icon/iconfont.css'` 才会生效

## size

`nly-icon` 大小一般由父元素决定， size 提供一个直接设置大小的入口

```HTML
<h1><nly-icon icon='nlyfont nly-icon-breadcrumb-fill' /></h1>
<h2><nly-icon icon='nlyfont nly-icon-breadcrumb-fill' /></h2>
<h3><nly-icon icon='nlyfont nly-icon-breadcrumb-fill' /></h3>
<h4><nly-icon icon='nlyfont nly-icon-breadcrumb-fill' /></h4>
<h5><nly-icon icon='nlyfont nly-icon-breadcrumb-fill' /></h5>

<!-- size.name -->
<!-- nly-icon.vue -->
```

```HTML
<nly-icon icon='nlyfont nly-icon-breadcrumb-fill' />
<nly-icon icon='nlyfont nly-icon-breadcrumb-fill' size='xs' />
<nly-icon icon='nlyfont nly-icon-breadcrumb-fill' size='sm' />
<nly-icon icon='nlyfont nly-icon-breadcrumb-fill' size='md' />
<nly-icon icon='nlyfont nly-icon-breadcrumb-fill' size='lg' />
<nly-icon icon='nlyfont nly-icon-breadcrumb-fill' size='xl' />

<!-- size.name -->
<!-- nly-icon.vue -->
```
