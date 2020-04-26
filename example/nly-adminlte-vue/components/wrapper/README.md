# Wrapper

> wrapper 布局，是 NlyadminlteVue 页面结构布局组件，支持 Top Navigation，Boxed， Fixed Navbar，Fixed Footer， Collapsed Sidebar 等布局

## 总览

左侧导航栏和右侧滑板的收起和展开都是由指令完成的。

右侧滑板组件 `nly-wrapper-control-sidebar` 对应的指令是 `v-nly-control-sidebar-collapse`

左侧导航栏组件 `nly-wrapper-sidebar` 对应的指令是 `v-nly-sidebar-collapse`

### `v-nly-control-sidebar-collapse` 右侧滑板指令

`nly-wrapper-control-sidebar` 的收起和展开以及浮动在右侧并自适应上下距离都是由指令 `v-nly-control-sidebar-collapse` 来实现的，单独使用并无效果。

详情请参考指令 **[文档](http://nly-adminlte-vue.nejinn.com/docs/directives/sidebar-collapse)**

**注意:**

-   请保证一个页面只有一个 `nly-wrapper-control-sidebar`，因为指令 `v-nly-control-sidebar-collapse` 无需传入任何参数，会同时控制 windows 中所有的 Control sidebar
-   请保证 `nly-wrapper-control-sidebar` 组件和指令 `v-nly-control-sidebar-collapse` 同时使用，否则组件 `nly-wrapper-control-sidebar` 会失效
-   `v-nly-control-sidebar-collapse` 指令可以当定在任何组件上。请尽量不要在绑定指令的组件上 click 事件。
-   `v-nly-control-sidebar-collapse`是修改 body class
-   `nly-control-sidebar` 和 组件 `nly-wrapper-control-sidebar` 作用是相同的，请保证不要同时出现这两个组件

### `v-nly-sidebar-collapse` 左侧导航栏指令

`nly-wrapper-sidebar` 的收起和展开以及浮动在右侧并自适应上下距离都是由指令 `v-nly-sidebar-collapse` 来实现的，单独使用并无效果。

详情请参考指令 **[文档](http://nly-adminlte-vue.nejinn.com/docs/directives/sidebar-collapse)**

**注意:**

-   请保证一个页面只有一个 `nly-wrapper-sidebar`，因为指令 `v-nly-sidebar-collapse` 默认会控制 windows 中所有的 `nly-wrapper-sidebar`
-   请保证 `nly-wrapper-sidebar` 组件和指令 `v-nly-sidebar-collapse` 同时使用，否则组件 `nly-wrapper-sidebar` 会失效
-   `v-nly-sidebar-collapse` 指令 _通常_ 只能绑定在 `nly-nav-item` 组件和 `nly-overlay` 组件上。请尽量不要在绑定指令的组件上 click 事件。绑定在其他组件可能会出现不可意料的 BUG
-   `v-nly-sidebar-collapse` 可传入modifiers。可选navitem，overlay，绑定在nly-nav-item上请传入navitem，绑定在nly-overlay上请传入overlay
-   `v-nly-sidebar-collapse`是修改 body class
-   `nly-control-sidebar` 和 组件 `nly-sidebar-container 作用是相同的，请保证不要同时出现这两个组件

### 使用

```html
<nly-wrapper side-mini layout="fixed">
	<nly-wrapper-header>
		<nly-nav-item v-nly-sidebar-collapse.navitem>
			...
		</nly-nav-item>
		...
		<nly-nav-item v-nly-control-sidebar-collapse>
			...
		</nly-nav-item>
	</nly-wrapper-header>
	<nly-wrapper-sidebar> </nly-wrapper-sidebar>
	<nly-wrapper-content> </nly-wrapper-content>
	<nly-wrapper-control-sidebar> </nly-wrapper-control-sidebar>
	<nly-wrapper-footer> </nly-wrapper-footer>
	<nly-overlay sidebar v-nly-sidebar-collapse.overlay />
</nly-wrapper>
```

## Top Navigation

top navigation 是一种正常的 navbar-content-footer 上中下布局，在线 **demo [Top Navigation](http://nly-adminlte-vue-demo.nejinn.com/#/top-nav)**

```html
<nly-wrapper top-nav>
	<nly-wrapper-header> </nly-wrapper-header>
	<nly-wrapper-content> </nly-wrapper-content>
	<nly-wrapper-footer> </nly-wrapper-footer>
</nly-wrapper>
```

## Boxed

Boxed 是一种非全屏的盒子容器 左右上中下布局，在线 **demo [Boxed](http://nly-adminlte-vue-demo.nejinn.com/#/boxed)**

左右上中下布局请注意添加罩层`<nly-overlay sidebar />`

```html
<nly-wrapper side-mini layout="boxed">
	<nly-wrapper-header> </nly-wrapper-header>
	<nly-wrapper-sidebar> </nly-wrapper-sidebar>
	<nly-wrapper-content> </nly-wrapper-content>
	<nly-wrapper-control-sidebar> </nly-wrapper-control-sidebar>
	<nly-wrapper-footer> </nly-wrapper-footer>
	<nly-overlay sidebar />
</nly-wrapper>
```

## Fixed Sidebar

Fixed Sidebar 是一种固定左侧导航栏 左右上中下布局，在线 **demo [Fixed Sidebar](http://nly-adminlte-vue-demo.nejinn.com/#/fixed-sidebar)**

左右上中下布局请注意添加罩层`<nly-overlay sidebar />`

```html
<nly-wrapper side-mini layout="fixed">
	<nly-wrapper-header> </nly-wrapper-header>
	<nly-wrapper-sidebar> </nly-wrapper-sidebar>
	<nly-wrapper-content> </nly-wrapper-content>
	<nly-wrapper-control-sidebar> </nly-wrapper-control-sidebar>
	<nly-wrapper-footer> </nly-wrapper-footer>
	<nly-overlay sidebar />
</nly-wrapper>
```

## Fixed Navbar

Fixed Navbar 是一种固定头部侧导航栏 左右上中下布局，在线 **demo [Fixed Navbar](http://nly-adminlte-vue-demo.nejinn.com/#/fixed-navbar)**

左右上中下布局请注意添加罩层`<nly-overlay sidebar />`

当左侧导航栏内容不够高的时候，左下角会出现一个白色方格，这是 adminlte3 自带 bug，请谨慎使用这种布局

```html
<nly-wrapper side-mini navbar-fixed>
	<nly-wrapper-header> </nly-wrapper-header>
	<nly-wrapper-sidebar> </nly-wrapper-sidebar>
	<nly-wrapper-content> </nly-wrapper-content>
	<nly-wrapper-control-sidebar> </nly-wrapper-control-sidebar>
	<nly-wrapper-footer> </nly-wrapper-footer>
	<nly-overlay sidebar />
</nly-wrapper>
```

## Collapsed Sidebar

Collapsed Sidebar 是一种可收起展开左侧导航栏 左右上中下布局，在线 **demo [Collapsed Sidebar](http://nly-adminlte-vue-demo.nejinn.com/#/)**

左右上中下布局请注意添加罩层`<nly-overlay sidebar />`

这种布局下，fixed props 用来开启左侧导航栏 scrollbar 美化插件，如果不传入 `fixed`,请给 `nly-sidebar` 组件传入 `scrollbar=false`，否则滚动条失效。

```html
<nly-wrapper side-mini fixed>
	<nly-wrapper-header> </nly-wrapper-header>
	<nly-wrapper-sidebar> </nly-wrapper-sidebar>
	<nly-wrapper-content> </nly-wrapper-content>
	<nly-wrapper-control-sidebar> </nly-wrapper-control-sidebar>
	<nly-wrapper-footer> </nly-wrapper-footer>
	<nly-overlay sidebar />
</nly-wrapper>
```
