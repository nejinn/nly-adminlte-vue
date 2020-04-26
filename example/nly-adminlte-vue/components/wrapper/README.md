# Wrapper

> NlyAdminlteVue 布局组件，支持 Top Navigation，Boxed， Fixed Navbar，Fixed Footer， Collapsed Sidebar
## Top Navigation

> top navigation 是一种正常的 navbar-content-footer 上中下布局，在线 demo [Top Navigation](http://nly-adminlte-vue-demo.nejinn.com/#/top-nav)
```html
<nly-wrapper top-nav>
	<nly-wrapper-header> </nly-wrapper-header>
	<nly-wrapper-content> </nly-wrapper-content>
	<nly-wrapper-footer> </nly-wrapper-footer>
</nly-wrapper>
```

## Boxed

> Boxed 是一种非全屏的盒子容器 左右上中下布局，在线 demo [Boxed](http://nly-adminlte-vue-demo.nejinn.com/#/boxed)
> 左右上中下布局请注意添加罩层<nly-overlay sidebar />
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

> Fixed Sidebar 是一种固定左侧导航栏 左右上中下布局，在线 demo [Fixed Sidebar](http://nly-adminlte-vue-demo.nejinn.com/#/fixed-sidebar)
> 左右上中下布局请注意添加罩层<nly-overlay sidebar />
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

> Fixed Navbar 是一种固定头部侧导航栏 左右上中下布局，在线 demo [Fixed Navbar](http://nly-adminlte-vue-demo.nejinn.com/#/fixed-navbar)
> 左右上中下布局请注意添加罩层<nly-overlay sidebar />
> 当左侧导航栏内容不够高的时候，左下角会出现一个白色方格，这是 adminlte3 自带 bug，请谨慎使用这种布局
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

> Collapsed Sidebar 是一种可收起展开左侧导航栏 左右上中下布局，在线 demo [Collapsed Sidebar](http://nly-adminlte-vue-demo.nejinn.com/#/)
> 左右上中下布局请注意添加罩层<nly-overlay sidebar />
> 这种布局下，fixed props 用来开启左侧导航栏 scrollbar 美化插件，如果不传入 fixed,请给 nly-sidebar 组件传入 scrollbar=false，否则滚动条失效。
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