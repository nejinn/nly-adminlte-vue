# Control Sidebar

> Control Sidebar 是一个可收缩的右侧滑板，浮动在右侧，自适应布局 header 和 footer 距离

## 使用方法

Control Sidebar 的收起和展开以及浮动在右侧并自适应上下距离都是由指令 `v-nly-control-sidebar-collapse` 来实现的，单独使用并无效果

详情请参考指令 **[文档](http://nly-adminlte-vue.nejinn.com/docs/directives/sidebar-collapse)**

**注意:**

-   请保证一个页面只有一个 Control Sidebar，因为指令 `v-nly-control-sidebar-collapse` 无需传入任何参数，会同时控制 windows 中所有的 Control sidebar
-   请保证 `nly-control-sidebar` 组件和指令 `v-nly-control-sidebar-collapse` 同时使用，否则组件 `nly-control-sidebar` 会失效
-   `v-nly-control-sidebar-collapse` 指令可以当定在任何组件上。请尽量不要在绑定指令的组件上 click 事件。
-   `v-nly-control-sidebar-collapse`是修改 body class
-   `nly-control-sidebar` 和 组件 `nly-wrapper-control-sidebar` 作用是相同的，请保证不要同时出现这两个组件

```html
<nly-control-sidebar>
	<nly-control-sidebar-container> </nly-control-sidebar-container>
</nly-control-sidebar>
```

```html
<nly-nav-item v-nly-control-sidebar-collapse>
	...
</nly-nav-item>
<nly-control-sidebar>
	<nly-control-sidebar-container> </nly-control-sidebar-container>
</nly-control-sidebar>
```

`nly-control-sidebar` 支持设置 `light`、 `bg-varaint-*`、 `bg-gradient-variant-*` props 来设置主题颜色
