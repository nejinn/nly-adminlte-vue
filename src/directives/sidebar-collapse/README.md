# Sidebar Collapse

> 边侧菜单指令是控制左侧菜单和右侧滑板收起展开的指令

## 总览

右侧滑板组件 `nly-wrapper-control-sidebar` 对应的指令是 `v-nly-control-sidebar-collapse`

左侧导航栏组件 `nly-wrapper-sidebar` 对应的指令是 `v-nly-sidebar-collapse`

```html
<nly-wrapper>
  <nly-wrapper-header>
    <nly-nav-item v-nly-sidebar-collapse.sidebar-collapse>
      ...
    </nly-nav-item>
    ...
    <nly-nav-item v-nly-control-sidebar-collapse>
      ...
    </nly-nav-item>
  </nly-wrapper-header>
  <nly-sidebar-menu> </nly-sidebar-menu>
  <nly-wrapper-content> </nly-wrapper-content>
  <nly-wrapper-control-sidebar> </nly-wrapper-control-sidebar>
  <nly-wrapper-footer> </nly-wrapper-footer>
  <nly-overlay sidebar v-nly-sidebar-collapse.overlay />
</nly-wrapper>
```

## `v-nly-sidebar-collapse` 左侧导航栏指令

`nly-wrapper-sidebar` 的收起和展开以及浮动在右侧并自适应上下距离都是由指令 `v-nly-sidebar-collapse` 来实现的，单独使用并无效果

**注意:**

- 请保证一个页面只有一个 `nly-sidebar-menu` 或者只有一个 `nly-sidebar-container`, 因为指令 `v-nly-sidebar-collapse` 默认会控制 windows 中所有的 `nly-sidebar-menu` 和 `nly-sidebar-container`
- 请保证 `nly-sidebar-menu` 或者 `nly-sidebar-container` 组件和指令 `v-nly-sidebar-collapse` 同时使用，否则组件 `nly-sidebar-menu` 和 `nly-sidebar-container` 会无法收起
- `v-nly-sidebar-collapse` 指令 _通常_ 只能可以绑定在 `nly-nav-item` 组件和 `nly-overlay` 组件以及其他任何可点击组件上。请尽量不要在绑定指令的组件上 click 事件。绑定在其他组件可能会出现不可意料的 BUG
- `v-nly-sidebar-collapse` 可传入 modifiers。可选 `sidebar-collapse`， `overlay`，绑定在 `nly-nav-item` 和可点击组件上请传入 `sidebar-collapse` ， 绑定在 `nly-overlay` 上请传入 `overlay`
- `v-nly-sidebar-collapse`是修改 `body class`

### 传入参数

| 参数      | 描述                                                                                                                                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| modifiers | 可选 `sidebar-collapse`，`overlay`，绑定在 `nly-nav-item` 和可点击组件上请传入 `sidebar-collapse` ， 绑定在 `nly-overlay` 上请传入 `overlay` |

## `v-nly-control-sidebar-collapse` 右侧滑板指令

`nly-wrapper-control-sidebar` 的收起和展开以及浮动在右侧并自适应上下距离都是由指令 `v-nly-control-sidebar-collapse` 来实现的，单独使用并无效果。

同时使得 `nly-control-sidebar` 和 `nly-wrapper-control-sidebar` 的 height，top，button 自适应滚动条改变以及页面高度改变，使 control-sidebar 始终自适应悬浮在右侧

**注意:**

- 请保证一个页面只有一个 `nly-wrapper-control-sidebar`，因为指令 `v-nly-control-sidebar-collapse` 无需传入任何参数，会同时控制 windows 中所有的 Control sidebar
- 请保证 `nly-wrapper-control-sidebar` 组件和指令 `v-nly-control-sidebar-collapse` 同时使用，否则组件 `nly-wrapper-control-sidebar` 会失效
- `v-nly-control-sidebar-collapse` 指令可以当定在任何组件上。请尽量不要在绑定指令的组件上 click 事件。
- `v-nly-control-sidebar-collapse`是修改 body class
- `nly-control-sidebar` 和 组件 `nly-wrapper-control-sidebar` 作用是相同的，请保证不要同时出现这两个组件
