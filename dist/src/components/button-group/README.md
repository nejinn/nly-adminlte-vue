# Button Group

> 按钮组，可以把一系列按钮放到一个组里，可以水平排列，可以垂直排列，默认水平排列

## 总览

`nly-button-group` 按钮组默认水平布局，子组件中的 `nly-button` 边角会发生变化

```html
<nly-button-group>
	<nly-button variant="info">按钮1</nly-button>
	<nly-button variant="info">按钮2</nly-button>
	<nly-button variant="info">按钮3</nly-button>
</nly-button-group>

<nly-button-group>
	<nly-button variant="outlineInfo">按钮1</nly-button>
	<nly-button variant="outlineInfo">按钮2</nly-button>
	<nly-button variant="outlineInfo">按钮3</nly-button>
</nly-button-group>

<nly-button-group>
	<nly-button variant="outlineInfo" disabled>按钮1</nly-button>
	<nly-button variant="outlineInfo" disabled>按钮2</nly-button>
	<nly-button variant="outlineInfo" disabled>按钮3</nly-button>
</nly-button-group>

<nly-button-group>
	<nly-button variant="danger">按钮1</nly-button>
	<nly-button variant="warning">按钮2</nly-button>
	<nly-button variant="primary">按钮3</nly-button>
</nly-button-group>

<!-- 总览.name -->
<!-- nly-button-group.vue -->
```

## vertical

按钮组垂直布局

```html
<nly-button-group vertical>
	<nly-button variant="danger">按钮1</nly-button>
	<nly-button variant="warning">按钮2</nly-button>
	<nly-button variant="primary">按钮3</nly-button>
</nly-button-group>

<!-- vertical.name -->
<!-- nly-button-group.vue -->
```

roundedFlat

```html
<nly-button-group vertical>
	<nly-button variant="danger" shape="roundedFlat">按钮1</nly-button>
	<nly-button variant="warning" shape="roundedFlat">按钮2</nly-button>
	<nly-button variant="primary" shape="roundedFlat">按钮3</nly-button>
</nly-button-group>

<!-- vertical.name -->
<!-- nly-button-group.vue -->
```

roundedPill

```html
<nly-button-group vertical>
	<nly-button variant="danger" shape="roundedPill">按钮1</nly-button>
	<nly-button variant="warning" shape="roundedPill">按钮2</nly-button>
	<nly-button variant="primary" shape="roundedPill">按钮3</nly-button>
</nly-button-group>

<!-- vertical.name -->
<!-- nly-button-group.vue -->
```

## size

按钮组大小

```html
<nly-button-group size="sm">
	<nly-button variant="danger">sm</nly-button>
	<nly-button variant="warning">sm</nly-button>
	<nly-button variant="primary">sm</nly-button>
</nly-button-group>

<nly-button-group>
	<nly-button variant="danger">按钮1</nly-button>
	<nly-button variant="warning">按钮2</nly-button>
	<nly-button variant="primary">按钮3</nly-button>
</nly-button-group>

<nly-button-group size="lg">
	<nly-button variant="danger">lg</nly-button>
	<nly-button variant="warning">lg</nly-button>
	<nly-button variant="primary">lg</nly-button>
</nly-button-group>

<!-- size.name -->
<!-- nly-button-group.vue -->
```

```html
<nly-button-group size="sm" vertical>
	<nly-button variant="danger">sm</nly-button>
	<nly-button variant="warning">sm</nly-button>
	<nly-button variant="primary">sm</nly-button>
</nly-button-group>

<nly-button-group vertical>
	<nly-button variant="danger">按钮1</nly-button>
	<nly-button variant="warning">按钮2</nly-button>
	<nly-button variant="primary">按钮3</nly-button>
</nly-button-group>

<nly-button-group size="lg" vertical>
	<nly-button variant="danger">lg</nly-button>
	<nly-button variant="warning">lg</nly-button>
	<nly-button variant="primary">lg</nly-button>
</nly-button-group>

<!-- size.name -->
<!-- nly-button-group.vue -->
```

`nly-button-group` 的 `size` 会覆盖 `nly-button` 的 `size` 失效

```html
<nly-button-group size="sm">
	<nly-button variant="danger" size="lg">sm</nly-button>
	<nly-button variant="warning" size="lg">sm</nly-button>
	<nly-button variant="primary" size="lg">sm</nly-button>
</nly-button-group>

<!-- size.name -->
<!-- nly-button-group.vue -->
```
