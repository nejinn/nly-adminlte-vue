# Nav

> 导航元素，可以设置不同的状态进行路由跳转， 包括下拉导航菜单， 子菜单，导航元素等等

```html
<div>
  <nly-nav>
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Another Link</nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
</div>

<!-- demo.name -->
<!-- nly-nav.vue -->
```

## 总览

`nly-nav` 是 flexbox 构建的，为不同的导航式样和类型提供了强大的布局基础， 且提供了许多不同式样，可以点击跳转或者嵌入表单

`nly-nav` 支持嵌套以下组件：

- `nly-nav-item` 路由跳转元素

- `nly-nav-dropdown` 下拉菜单

- `nly-nav-form` 菜单表单

- `nly-nav-text` 菜单文本

## 外观

`nly-nav` 支持 `tabs` 和 `pills` 两种外观。且都支持 `active` 激活状态

### tabs

设置 prop `tabs`，使得 nav 变成 tabs

```html
<div>
  <nly-nav tabs>
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Another Link</nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
</div>

<!-- tabs.name -->
<!-- nly-nav.vue -->
```

### pills

设置 prop `pills` 使得 nav 变成 圆丸形状

```html
<div>
  <nly-nav pills>
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Another Link</nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
</div>

<!-- pills.name -->
<!-- nly-nav.vue -->
```

### 小型导航

设置 prop `small` 使得导航变小

```html
<div>
  <nly-nav small>
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Another Link</nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
</div>

<!-- small.name -->
<!-- nly-nav.vue -->
```

## 填充整个宽度

设置 prop `fill` 和 `justified` 可以使得 `nly-nav-item` 填充整个 nav 宽度

### `fill`

设置 prop `fill` 可以使得 `nly-nva-item` 按照比列 填充满整个水平空间

注意，虽然填充满整个水平空间，但并不是所有的 `nly-nva-item` 宽度都一样

```html
<div>
  <nly-nav tabs fill>
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Link with a long name </nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
</div>

<!-- fill.name -->
<!-- nly-nav.vue -->
```

### `justified`

设置 prop `justified` 可以使得 `nly-nva-item` 等宽 填充满整个水平空间

```html
<div>
  <nly-nav tabs justified>
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Link with a long name </nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
</div>

<!-- justified.name -->
<!-- nly-nav.vue -->
```

## 水平对齐位置

设置 prop `align` 可以调整 `nly-nav-item` 的对齐位置。 可选： start，left，center，end，right

```html
<div>
  <nly-nav tabs align="center">
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Link with a long name </nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>

  <nly-nav tabs align="start">
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Link with a long name </nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
  <nly-nav tabs align="end">
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Link with a long name </nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
  <nly-nav tabs align="right">
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-item>Link with a long name </nly-nav-item>
    <nly-nav-item disabled>Disabled</nly-nav-item>
  </nly-nav>
</div>

<!-- align.name -->
<!-- nly-nav.vue -->
```

## 垂直布局

设置 prop `vertical` 可以使得 `nly-nav` 为垂直布局, 在设置 `vertical` 的情况下设置 prop `tabs-right`，可以使得 `nly-nav` 右侧垂直布局式样

注意 只是 tabs 式样有差异

```html
<nly-row>
  <nly-col xs="4">
    <nly-nav tabs vertical>
      <nly-nav-item active>Active</nly-nav-item>
      <nly-nav-item>Link</nly-nav-item>
      <nly-nav-item>Another Link</nly-nav-item>
      <nly-nav-item disabled>Disabled</nly-nav-item>
    </nly-nav>
  </nly-col>
  <nly-col xs="8" />
</nly-row>

<!-- vertical.name -->
<!-- nly-nav.vue -->
```

```html
<nly-row>
  <nly-col xs="8" />
  <nly-col xs="4">
    <nly-nav tabs tabs-right vertical>
      <nly-nav-item active>Active</nly-nav-item>
      <nly-nav-item>Link</nly-nav-item>
      <nly-nav-item>Another Link</nly-nav-item>
      <nly-nav-item disabled>Disabled</nly-nav-item>
    </nly-nav>
  </nly-col>
</nly-row>

<!-- vertical.name -->
<!-- nly-nav.vue -->
```

## 下拉菜单

可以 添加 `nly-nav-dropdown` 组件来渲染下拉菜单

```html
<div>
  <nly-nav pills>
    <nly-nav-item active>Active</nly-nav-item>
    <nly-nav-item>Link</nly-nav-item>
    <nly-nav-dropdown
      id="my-nav-dropdown"
      text="Dropdown"
      direction="right"
      dropdown-toggle
      dropdown-item
    >
      <nly-dropdown-item>One</nly-dropdown-item>
      <nly-dropdown-item>Two</nly-dropdown-item>
      <nly-dropdown-divider></nly-dropdown-divider>
      <nly-dropdown-item>Three</nly-dropdown-item>
    </nly-nav-dropdown>
  </nly-nav>
</div>
<!-- dropdown.name -->
<!-- nly-nav.vue -->
```

## 文本

使用 `nly-nav-text` 可以输入纯文本来代替 `nly-nav-item`

```html
<div>
  <div>
    <nly-nav>
      <nly-nav-item href="#1">Link 1</nly-nav-item>
      <nly-nav-item href="#2">Link 2</nly-nav-item>
      <nly-nav-text>Plain text</nly-nav-text>
    </nly-nav>
  </div>
</div>
<!-- dropdown.name -->
<!-- nly-nav.vue -->
```
