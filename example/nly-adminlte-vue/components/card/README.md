# Card

## 总览

> 卡片包括卡片组，卡片，卡片 header，卡片 body，卡片 footer3 个主要部分

```html
<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card>
			<nly-card-header> header</nly-card-header>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card>
			<nly-card-body>body </nly-card-body>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<!-- 总览.name -->
<!-- nly-card.vue -->
```

## card variant

> 卡片颜色可以支持 bg-_ 类和 bg-gradient-_ 类

### bg-variant

> 背景色

```html
<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-variant="pink">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-variant="primary">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-variant="maroon">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<!-- card variant.name -->
<!-- nly-card.vue -->
```

### bg-gradient-variant

> 渐变色背景色

```html
<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-gradient-variant="lightblue">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-gradient-variant="cyan">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-gradient-variant="dark">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<!-- card variant.name -->
<!-- nly-card.vue -->
```

> 当 header，body，footer 都设置 bg-variant 和 bg-gradient-variant 时，card 的 bg-variant 和 bg-gradient-variant 会被覆盖对应部分。

```html
<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-variant="navy">
			<nly-card-header bg-variant="purple">header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-variant="gray">
			<nly-card-header> header</nly-card-header>
			<nly-card-body bg-variant="purple">body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-variant="indigo">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer bg-variant="purple">footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-gradient-variant="lightblue">
			<nly-card-header bg-gradient-variant="lime">
				header</nly-card-header
			>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-gradient-variant="cyan">
			<nly-card-header> header</nly-card-header>
			<nly-card-body bg-gradient-variant="lime">body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card bg-gradient-variant="dark">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer bg-gradient-variant="lime">footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<!-- header-variant.name -->
<!-- nly-card.vue -->
```

## header-variant

> nly-card 设置 nly-card-header 背景色，当 nly-card-header 设置了 bg-variant 和 bg-gradient-variant 时，header-variant 失效

```html
<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="info">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="danger">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="warning">
			<nly-card-header bg-variant="pink"> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<!-- header-variant.name -->
<!-- nly-card.vue -->
```

## header-outline

> header-outline 只有在 headr-variant 有效的时候才会生效，nly-header 的 variant prop 会使 header-outline 失效

```html
<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="info" header-outline>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="danger" header-outline>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="warning" header-outline>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="primary" header-outline>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="lime" header-outline>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
	<nly-col xs="12" md="6" lg="4">
		<nly-card header-variant="olive" header-outline>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<!-- header-outline.name -->
<!-- nly-card.vue -->
```

## tabs

> 让 card 变成 tabs

```html
<nly-row>
	<nly-col xs="12" md="6">
		<nly-card card-tabs>
			<nly-card-header> <a> card-outline-tabs</a> </nly-card-header>
			<nly-card-body>主要用于nav，详情情况nav </nly-card-body>
			<nly-card-footer>card-tabs</nly-card-footer>
		</nly-card>
	</nly-col>

	<nly-col xs="12" md="6">
		<nly-card card-tabs card-outline-tabs>
			<nly-card-header> <a> card-outline-tabs</a> </nly-card-header>
			<nly-card-body>主要用于nav，详情情况nav </nly-card-body>
			<nly-card-footer>card-tabs</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<nly-row>
	<nly-col>
		<nly-card card-outline-tabs card-tabs>
			<nly-card-header>
				<nly-nav tabs card-header>
					<nly-nav-item active class="xxx">
						tabs card-header active
					</nly-nav-item>

					<nly-nav-item disabled>
						tabs card-header disabled
					</nly-nav-item>

					<nly-nav-item>
						tabs card-header-------
					</nly-nav-item>
				</nly-nav>
			</nly-card-header>
		</nly-card>
	</nly-col>
</nly-row>

<nly-row>
	<nly-col>
		<nly-card headerVariant="info" card-tabs>
			<nly-card-header>
				<nly-nav tabs card-header>
					<nly-nav-item active class="xxx">
						tabs card-header active
					</nly-nav-item>

					<nly-nav-item disabled>
						tabs card-header disabled
					</nly-nav-item>

					<nly-nav-item>
						tabs card-header-------
					</nly-nav-item>
				</nly-nav>
			</nly-card-header>
		</nly-card>
	</nly-col>
</nly-row>
<!-- tabs.name -->
<!-- nly-card.vue -->
```

## loading

> 开启 loading 罩层，有 text loading，icon loading， img loading

```html
<nly-row>
	<nly-col xs="12" md="6" lg="4">
		<nly-card loading>
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body</nly-card-body>
			<nly-card-footer> footer</nly-card-footer>
		</nly-card>
	</nly-col>

	<nly-col xs="12" md="6" lg="4">
		<nly-card loading loading-content="加载中">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>

	<nly-col xs="12" md="6" lg="4">
		<nly-card loading loading-content="加载中" loading-content-tag="a">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body </nly-card-body>
			<nly-card-footer>footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<nly-row>
	<nly-col>
		<nly-card loading loading-icon="nlyfont nly-icon-home text-danger">
			<nly-card-header> header</nly-card-header>
			<nly-card-body>body</nly-card-body>
			<nly-card-footer> footer</nly-card-footer>
		</nly-card>
	</nly-col>
</nly-row>

<!-- loading.name -->
<!-- nly-card.vue -->
```
