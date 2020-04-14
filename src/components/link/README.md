# Link

## 默认

```html
<nly-link>
	nly-link
</nly-link>

<!-- nly-link.vue -->
```

## click

> 点击事件

```html
<template>
	<nly-link @click="show">
		nly-link
	</nly-link>
</template>
<script>
	export default {
		methods: {
			show() {
				alert('click')
			}
		}
	}
</script>

<!-- nly-link.vue -->
```

## active

> 激活状态

```html
<nly-link active active-class="text-danger">
	nly-link
</nly-link>

<!-- nly-link.vue -->
```

## disabled

> 禁用状态，阻止 link 跳转

> 注意 adminlte 并没有改变鼠标手势，请添加 style

```html
<style lang="css">
	a.disabled {
		pointer-events: none;
	}
</style>
```

```html
<template>
	<nly-link disabled href="/">
		nly-link
	</nly-link>
</template>

<!-- nly-link.vue -->
```

## to

> router-link rouer.push 跳转

```html
<nly-link to="collapse">
	nly-link
</nly-link>

<!-- nly-link.vue -->
```

## href

> 普通跳转，会刷新页面

```html
<nly-link to="docs">
	nly-link
</nly-link>

<!-- nly-link.vue -->
```

## replace

> router-link， router.replace()跳转

```html
<nly-link replace="docs">
	nly-link
</nly-link>

<!-- nly-link.vue -->
```

## append

> 将url添加到当前路由后面并跳转

```html
<nly-link to="docs" append>
	nly-link
</nly-link>

<!-- nly-link.vue -->
```

## target

> 跳转窗口，当前窗口，新窗口，父路由窗口等

```html
<nly-link to="docs" target="_blank">
	_blank
</nly-link>

<nly-link to="docs" target="_parent">
	_parent
</nly-link>

<!-- nly-link.vue -->
```