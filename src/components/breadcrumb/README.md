# Breadcrumb

> 面包屑导航

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

<!-- nly-breadcrumb.vue -->
```