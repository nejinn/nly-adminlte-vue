# Breadcrumb

> 面包屑导航， 类似于嵌套路径，可以显示出当前route的父级以上的router，并可以点击跳转直达

## 总览

> 面包屑导航在存在route重定向的情况下，可能会存在某个元素指向的url就是当前route，在vue版本或者vue-router版本过低的情况下（目前知道vue-router 3以下会导致此问题，但不百分比百保证），会报错如下

```js
Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
```

> 解决方法可以尝试

```js
// main.js写入

import Router from 'vue-router'
 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 或者降低vue-router版本
npm i vue-router@3.0 -S
```


## item

> 数组元素，可以生成多个nly-breadcrumb-item

```html
<template>
	<div>
		<nly-badge variant="info"> to </nly-badge>
		<nly-breadcrumb :item="itemTo" />

		<nly-badge variant="info"> href </nly-badge>
		<nly-breadcrumb :item="itemHref" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				itemTo: [
					{
						text: '文档',
						to: '/docs'
					},
					{
						text: '组件',
						to: '/docs/components/'
					},
					{
						text: 'Breadcrumb',
						to: '/docs/components/breadcrumb'
					}
				],
				itemHref: [
					{
						text: '文档',
						to: '/docs'
					},
					{
						text: '组件',
						to: '/docs/components/'
					},
					{
						text: 'Breadcrumb',
						to: '/docs/components/breadcrumb'
					}
				]
			}
		}
	}
</script>

<!-- item.name -->
<!-- nly-breadcrumb.vue -->
```

## icon

> icon 图标

```html
<template>
	<div>
		<nly-breadcrumb :item="itemIcon" />
		<nly-breadcrumb :item="itemIconOnly" />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				itemIcon: [
					{
						text: '文档',
						to: '/docs',
						icon: 'nlyfont nly-icon-home-fill',
						linkClass: 'text-danger'
					},
					{
						text: '组件',
						to: '/docs/components/',
						icon: 'nlyfont nly-icon-outlet'
					},
					{
						text: 'Breadcrumb',
						to: '/docs/components/breadcrumb',
						icon: 'nlyfont nly-icon-security-fill'
					}
				],
				itemIconOnly: [
					{
						text: '文档',
						to: '/docs',
						icon: 'nlyfont nly-icon-home-fill',
						linkClass: 'text-info'
					},
					{
						text: '组件',
						to: '/docs/components/',
						linkClass: 'text-danger'
					},
					{
						text: 'Breadcrumb',
						to: '/docs/components/breadcrumb'
					}
				]
			}
		}
	}
</script>

<!-- icon.name -->
<!-- nly-breadcrumb.vue -->
```

```html
<template>
	<nly-breadcrumb>
		<nly-breadcrumb-item icon="nlyfont nly-icon-home-fill" to="/docs">
			docs
		</nly-breadcrumb-item>
		<nly-breadcrumb-item
			icon="nlyfont nly-icon-outlet"
			to="/docs/components"
			active
		>
			components
		</nly-breadcrumb-item>
	</nly-breadcrumb>
</template>

<!-- icon.name -->
<!-- nly-breadcrumb.vue -->
```

## text

> 文本内容

```html
<template>
	<nly-breadcrumb>
		<nly-breadcrumb-item
			icon="nlyfont nly-icon-home-fill"
			to="/docs"
			text="docs"
		/>
		<nly-breadcrumb-item
			icon="nlyfont nly-icon-outlet"
			to="/docs/components"
			active
			text="components"
		/>
	</nly-breadcrumb>
</template>

<!-- text.name -->
<!-- nly-breadcrumb.vue -->
```

## target

> 决定新路由跳转窗口

```html
<template>
	<nly-breadcrumb>
		<nly-breadcrumb-item
			icon="nlyfont nly-icon-home-fill"
			to="/docs"
			text="docs"
			target="_blank"
		/>
		<nly-breadcrumb-item
			icon="nlyfont nly-icon-outlet"
			to="/docs/components"
			text="components"
			target="_parent"
		/>
		<nly-breadcrumb-item
			icon="nlyfont nly-icon-outlet"
			to="/docs/components/breadcrumb"
			text="breadcrumb"
			target="_top"
		/>
	</nly-breadcrumb>
</template>

<!-- target.name -->
<!-- nly-breadcrumb.vue -->
```