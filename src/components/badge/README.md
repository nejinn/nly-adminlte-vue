# Badge

> 一个对正文进行补充的小标签。

## 总览

> nly-badge组件在一般情况下，大小由父元素或者以上的元素决定的。

```html
<h1><nly-badge variant="info">info</nly-badge></h1>
<h2><nly-badge variant="info">info</nly-badge></h2>
<h3><nly-badge variant="info">info</nly-badge></h3>
<h4><nly-badge variant="info">info</nly-badge></h4>

<!-- nly-badge.vue -->
```

## size

> nly-badge 提供了一个设置 badge 大小的 props size

> 请注意这时候可能会由于与文本内容或者同级元素的font-size和line-height不同而导致并不会对齐显示

```html
<nly-badge bg-variant="primary" size="xs">
	xs
</nly-badge>

<nly-badge bg-variant="primary" size="sm">
	sm
</nly-badge>

<nly-badge bg-variant="primary" size="md">
	md
</nly-badge>

<nly-badge bg-variant="primary" size="lg">
	lg
</nly-badge>

<nly-badge bg-variant="primary" size="xl">
	xl
</nly-badge>

<!-- nly-badge.vue -->
```

## pill

> 默认 badge 是小圆角形，设置 pill 之后，变成大圆角

```html
<nly-badge bg-variant="primary" pill size="xs">
	xs
</nly-badge>

<nly-badge bg-variant="primary" pill size="sm">
	sm
</nly-badge>

<nly-badge bg-variant="primary" pill size="md">
	md
</nly-badge>

<nly-badge bg-variant="primary" pill size="lg">
	lg
</nly-badge>

<nly-badge bg-variant="primary" pill size="xl">
	xl
</nly-badge>

<!-- nly-badge.vue -->
```

## tag

> 可以给 badge 设置 tag 标签。

```html
<nly-badge bg-variant="primary" tag="a">
	a
</nly-badge>

<nly-badge bg-variant="primary" tag="div">
	div
</nly-badge>

<nly-badge bg-variant="primary" tag="button" badge-class="btn">
	button
</nly-badge>

<!-- nly-badge.vue -->
```

## variant

> badge 类颜色，默认无颜色

```html
<nly-badge variant="primary">
	primary
</nly-badge>

<nly-badge variant="secondary">
	secondary
</nly-badge>

<nly-badge variant="success">
	success
</nly-badge>

<nly-badge variant="info">
	info
</nly-badge>

<nly-badge variant="warning">
	warning
</nly-badge>

<nly-badge variant="danger">
	danger
</nly-badge>

<nly-badge variant="dark">
	dark
</nly-badge>

<nly-badge variant="light">
	light
</nly-badge>

<!-- nly-badge.vue -->
```

## bg-variant

> bg类背景色

```html
<nly-badge bg-variant="light">
	light
</nly-badge>

<nly-badge bg-variant="dark">
	dark
</nly-badge>

<nly-badge bg-variant="primary">
	primary
</nly-badge>

<nly-badge bg-variant="secondary">
	secondary
</nly-badge>

<nly-badge bg-variant="success">
	success
</nly-badge>

<nly-badge bg-variant="info">
	info
</nly-badge>

<nly-badge bg-variant="warning">
	warning
</nly-badge>

<nly-badge bg-variant="danger">
	danger
</nly-badge>

<nly-badge bg-variant="lightblue">
	lightblue
</nly-badge>

<nly-badge bg-variant="navy">
	navy
</nly-badge>

<nly-badge bg-variant="olive">
	olive
</nly-badge>

<nly-badge bg-variant="lime">
	lime
</nly-badge>

<nly-badge bg-variant="fuchsia">
	fuchsia
</nly-badge>

<nly-badge bg-variant="maroon">
	maroon
</nly-badge>

<nly-badge bg-variant="blue">
	blue
</nly-badge>

<nly-badge bg-variant="indigo">
	indigo
</nly-badge>

<nly-badge bg-variant="purple">
	purple
</nly-badge>

<nly-badge bg-variant="pink">
	pink
</nly-badge>

<nly-badge bg-variant="red">
	red
</nly-badge>

<nly-badge bg-variant="orange">
	orange
</nly-badge>

<nly-badge bg-variant="yellow">
	yellow
</nly-badge>

<nly-badge bg-variant="green">
	green
</nly-badge>

<nly-badge bg-variant="teal">
	teal
</nly-badge>

<nly-badge bg-variant="cyan">
	cyan
</nly-badge>

<nly-badge bg-variant="white">
	white
</nly-badge>

<nly-badge bg-variant="gray">
	gray
</nly-badge>

<nly-badge bg-variant="graydark">
	graydark
</nly-badge>

<!-- nly-badge.vue -->
```

## bg-gradient-variant

> 渐变色背景色

```html
<nly-badge size='xl' bg-gradient-variant="light">
	light
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="dark">
	dark
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="primary">
	primary
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="secondary">
	secondary
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="success">
	success
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="info">
	info
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="warning">
	warning
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="danger">
	danger
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="lightblue">
	lightblue
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="navy">
	navy
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="olive">
	olive
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="lime">
	lime
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="fuchsia">
	fuchsia
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="maroon">
	maroon
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="blue">
	blue
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="indigo">
	indigo
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="purple">
	purple
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="pink">
	pink
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="red">
	red
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="orange">
	orange
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="yellow">
	yellow
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="green">
	green
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="teal">
	teal
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="cyan">
	cyan
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="white">
	white
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="gray">
	gray
</nly-badge>

<nly-badge size='xl' bg-gradient-variant="graydark">
	graydark
</nly-badge>

<!-- nly-badge.vue -->
```