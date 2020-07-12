# Dropdowns

> 下拉菜单，一个可以切换显示和隐藏下拉列表的组件。

## 总览

`<nly-dropdown>` (简写 `<nly-dd>` ) 是一个可以显示隐藏下拉列表的组件, 可以通过点击，悬浮，聚焦等操作对其显示和隐藏

```html
<div>
  <nly-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <nly-dropdown-item>First Action</nly-dropdown-item>
    <nly-dropdown-item>Second Action</nly-dropdown-item>
    <nly-dropdown-item>Third Action</nly-dropdown-item>
    <nly-dropdown-divider></nly-dropdown-divider>
    <nly-dropdown-item active>Active action</nly-dropdown-item>
    <nly-dropdown-item disabled>Disabled action</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- 总览.name -->
<!-- nly-dropdown.vue -->
```

## Button content 插槽

可以用 `text` prop 或者 用 `button-content` 插槽 来代替 `text` prop 来设置下拉菜单的内容。 `button-content` 插槽允许使用 HTML 语言和 icon 等其他组件。

`button-content` 插槽 会覆盖 `text` prop

```html
<div>
  <nly-dropdown text="Button text via Prop">
    <nly-dropdown-item href="#">An item</nly-dropdown-item>
    <nly-dropdown-item href="#">Another item</nly-dropdown-item>
  </nly-dropdown>

  <nly-dropdown>
    <template v-slot:button-content>
      Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <nly-dropdown-item href="#">An item</nly-dropdown-item>
    <nly-dropdown-item href="#">Another item</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- button-content.name -->
<!-- nly-dropdown-button-content.vue -->
```

## 定位

下拉菜单支持列表展示在各种位置，还支持列表自适应翻滚。

### 对齐

下拉菜单支持左右对齐，设置 `right` prop 为右对齐， 设置 `left` prop 为左对齐

```html
<div>
  <nly-dropdown id="dropdown-left" text="左对齐" variant="primary" class="m-2">
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>

  <nly-dropdown
    id="dropdown-right"
    right
    text="右对齐"
    variant="primary"
    class="m-2"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- 左右对齐.name -->
<!-- nly-dropdown-right.vue -->
```

### Dropup

下拉菜单默认是底部显示，设置 `dropup` prop，列表顶部显示。

```html
<div>
  <nly-dropdown
    id="dropdown-dropup"
    dropup
    text="顶部显示"
    variant="primary"
    class="m-2"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- Dropup.name -->
<!-- nly-dropdown-dropup.vue -->
```

### Drop right or left

可以设置 `dropright` prop 或者 `dropleft` prop 来使得列表出现在右侧或者左侧。

`dropup` 会覆盖 `dropright` 和 `dropleft` ， `dropright` 会覆盖 `dropleft`

```html
<div>
  <nly-dropdown
    id="dropdown-dropright"
    dropright
    text="右侧显示"
    variant="primary"
    class="m-2"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>

  <nly-dropdown
    id="dropdown-dropleft"
    dropleft
    text="左侧显示"
    variant="primary"
    class="m-2"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- 左右显示.name -->
<!-- nly-dropdown-dropright-dropleft.vue -->
```

### 自动翻滚

下拉菜单默认是自动翻滚的，即自适应上下左右距离来自动变换位置，如果需要关闭，请设置 `no-flip` prop。

### offset

`offset` prop 用来设置列表和下拉菜单按钮的位置偏移量

- 可以设置为正负数，整数右偏，负数左偏
- 可以设置 css 中的写法作为偏移，此时应该是传入字符串 比如 `0.3rem` , `4px` , `1.2em` 等等

```html
<div>
  <nly-dropdown
    id="dropdown-offset"
    offset="25"
    text="Offset Dropdown"
    class="m-2"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- offset.name -->
<!-- nly-dropdown-offset.vue -->
```

### boundary 边界(容器)

可以设置下拉菜单列表出现的相对定位的容器

可选 'scrollParent', 'window', 'viewport', 或着自行指定的 dom。详情请参考 https://popper.js.org/"

## Split button 模式

`split` 模式 会将下拉菜单按钮拆分为两个按钮，右侧按钮为一个具有 toggle icon 的按钮

```html
<div>
  <nly-dropdown split text="Split Dropdown" class="m-2">
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here...</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- split.name -->
<!-- nly-dropdown-split.vue -->
```

### Split button 模式支持 link 路由

`spilt` 模式下，左侧按钮默认 type 是 `<button>` ，支持 `link` 或者 `<router-link>` 。设置 `split-href` prop 或者 `split-to` prop 来实现对应功能

```html
<div>
  <nly-dropdown split split-href="#foo/bar" text="Split Link" class="m-2">
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here...</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- split-link.name -->
<!-- nly-dropdown-split-link.vue -->
```

### Split button type

`split` 模式按钮默认类型为 `'button'` ，可以设置为 `'button'` , `'submit'` and `'reset'` 。如果设置了 `split-to` 和 `split-href` 会覆盖 `split-button-type`

## 式样

下拉菜单支持设置不同式样

### Size

下拉菜单支持设置大小，接受与 `nly-button` 组件同样的 `size` prop

`size` prop 可选 `'sm'` , `'md'` (默认), or `'lg'`

```html
<div>
  <div>
    <nly-dropdown size="lg" text="Large" class="m-2">
      <nly-dropdown-item-button>Action</nly-dropdown-item-button>
      <nly-dropdown-item-button>Another action</nly-dropdown-item-button>
      <nly-dropdown-item-button>Something else here</nly-dropdown-item-button>
    </nly-dropdown>

    <nly-dropdown size="lg" split text="Large Split" class="m-2">
      <nly-dropdown-item-button>Action</nly-dropdown-item-button>
      <nly-dropdown-item-button>Another action</nly-dropdown-item-button>
      <nly-dropdown-item-button
        >Something else here...</nly-dropdown-item-button
      >
    </nly-dropdown>
  </div>
  <div>
    <nly-dropdown size="sm" text="Small" class="m-2">
      <nly-dropdown-item-button>Action</nly-dropdown-item-button>
      <nly-dropdown-item-button>Another action</nly-dropdown-item-button>
      <nly-dropdown-item-button
        >Something else here...</nly-dropdown-item-button
      >
    </nly-dropdown>

    <nly-dropdown size="sm" split text="Small Split" class="m-2">
      <nly-dropdown-item-button>Action</nly-dropdown-item-button>
      <nly-dropdown-item-button>Another action</nly-dropdown-item-button>
      <nly-dropdown-item-button
        >Something else here...</nly-dropdown-item-button
      >
    </nly-dropdown>
  </div>
</div>

<!-- size.name -->
<!-- nly-dropdown-sizes.vue -->
```

**注意:**

- 改变按钮大小并不影响下拉列表大小

### variant

下拉菜单可以设置不同背景色，默认为 `secondary` ， 可选 `success` , `primary` , `info` , `danger` , `link` , `outlinedark` 等。

```html
<div>
  <nly-dropdown text="Primary" variant="primary" class="m-2">
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>

  <nly-dropdown text="Success" variant="success" class="m-2">
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>

  <nly-dropdown text="Outline Danger" variant="outlineDanger" class="m-2">
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- variant.name -->
<!-- nly-dropdown-variants.vue -->
```

同时可以通过 `toggle-class` prop 来给按钮设置自定义背景色

### Split 模式 variant

`split` 模式左侧按钮接收上述 `variant` 来设置背景色，右侧按钮可以通过 `split-variant` 来设置背景色

```html
<div>
  <nly-dropdown
    split
    split-variant="outlinePrimary"
    variant="primary"
    text="Split Variant Dropdown"
    class="m-2"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here...</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- split-variant.name -->
<!-- nly-dropdown-split-variant.vue -->
```

### Block level dropdowns

可以 `block` 来使得下拉菜单按钮填充整个父级元素

```html
<div>
  <nly-dropdown text="Block Level Dropdown" block variant="primary" class="m-2">
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>

  <nly-dropdown
    text="Block Level Split Dropdown"
    block
    split
    split-variant="outlinePrimary"
    variant="primary"
    class="m-2"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here...</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- block.name -->
<!-- nly-dropdown-block.vue -->
```

如果您需要下拉列表的宽度也与父级元素宽度一样，可以设置 `menu-class` 为 `w-100`

```html
<div>
  <nly-dropdown
    text="Block Level Dropdown Menu"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- block.name -->
<!-- nly-dropdown-block-menu.vue -->
```

### 下拉菜单子子组件 variant

部份下拉菜单的子组件支持 `variant` 来控制文字颜色。

### no-caret

设置 `no-caret` 为 `true` 。可以隐藏下拉菜单按钮内容

```html
<div>
  <nly-dropdown
    size="lg"
    variant="link"
    toggle-class="text-decoration-none"
    no-caret
  >
    <template v-slot:button-content>
      &#x1f50d;<span class="sr-only">Search</span>
    </template>
    <nly-dropdown-item href="#">Action</nly-dropdown-item>
    <nly-dropdown-item href="#">Another action</nly-dropdown-item>
    <nly-dropdown-item href="#">Something else here...</nly-dropdown-item>
  </nly-dropdown>
</div>

<!-- no-caret.name -->
<!-- nly-dropdown-hidden-caret.vue -->
```

**注意:**

- `no-caret` 在 `split` 模式无效.

## Lazy dropdown

设置 `lazy` 为 true，则渲染为懒加载模式的下拉菜单

## 子组件

| Sub-component                | Description                                                                   | Aliases                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `<nly-dropdown-item>`        | items 支持 click 事件, link 路由, 和 `<router-link>` 。 默认渲染为 `<a>` 标签 | `<nly-dd-item>`                                                          |
| `<nly-dropdown-item-button>` | 可以代替 `<nly-dropdown-item>` 渲染为 `<button>` 元素。                       | `<nly-dropdown-item-btn>` , `<nly-dd-item-button>` , `<nly-dd-item-btn>` |
| `<nly-dropdown-divider>`     | 分割线                                                                        | `<nly-dd-divider>`                                                       |
| `<nly-dropdown-text>`        | 文字内容                                                                      | `<nly-dd-text>`                                                          |
| `<nly-dropdown-form>`        | 下拉菜单中渲染一个表单                                                        | `<nly-dd-form>`                                                          |
| `<nly-dropdown-group>`       | 可以渲染一个下拉菜单组，配合 `<nly-dropdown-header>` 效果更好                 | `<nly-dd-group>`                                                         |
| `<nly-dropdown-header>`      | 下拉菜单 header。                                                             | `<nly-dd-header>`                                                        |
| `<nly-dropdown-footer>`      | 下拉菜单 footer。                                                             | `<nly-dd-footer>`                                                        |

**注意:**

- 不支持嵌套子菜单

### `<nly-dropdown-item>`

`<nly-dropdown-item>` 是用来创建一个 link 菜单的，可以使用 `href` prop 和 the `to` prop 来实现路由跳转。如果不传入，则获渲染成 `href=#` ，且阻止跳转。默认渲染成 `<a>` 标签。

设置 `disabled` 会禁用 `<nly-dropdown-item>`

### `<nly-dropdown-item-button>`

`<nly-dropdown-item-button>` 可以用了来代替 `<nly-dropdown-item>` ，渲染为 `<button>` 元素。且不支持 `href`
和 `to` props。

设置 `disabled` 会禁用 `<nly-dropdown-item-button>`

```html
<div>
  <nly-dropdown
    id="dropdown-buttons"
    text="Dropdown using buttons as menu items"
    class="m-2"
  >
    <nly-dropdown-item-button>I'm a button</nly-dropdown-item-button>
    <nly-dropdown-item-button active
      >I'm a active button</nly-dropdown-item-button
    >
    <nly-dropdown-item-button disabled
      >I'm a button, but disabled!</nly-dropdown-item-button
    >
    <nly-dropdown-item-button
      >I don't look like a button, but I am!</nly-dropdown-item-button
    >
  </nly-dropdown>
</div>

<!-- nly-dropdown-item-buttons.vue -->
```

### `<nly-dropdown-item-divider>`

`<nly-dropdown-divider>` 是分割线

```html
<div>
  <nly-dropdown id="dropdown-divider" text="Dropdown with divider" class="m-2">
    <nly-dropdown-item-button>First item</nly-dropdown-item-button>
    <nly-dropdown-item-button>Second item</nly-dropdown-item-button>
    <nly-dropdown-divider></nly-dropdown-divider>
    <nly-dropdown-item-button>Separated Item</nly-dropdown-item-button>
  </nly-dropdown>
</div>

<!-- nly-dropdown-item-divider.vue -->
```

### `<nly-dropdown-text>`

`<nly-dropdown-text>` 可以用来代替 `<nly-dropdown-item>` 显示对应文字内容， 可能需要设置 `style` 来控制下拉列表的宽度。

```html
<div>
  <nly-dropdown id="dropdown-text" text="Dropdown with text" class="m-2">
    <nly-dropdown-text style="width: 240px;">
      Some example text that's free-flowing within the dropdown menu.
    </nly-dropdown-text>
    <nly-dropdown-text>And this is more example text.</nly-dropdown-text>
    <nly-dropdown-divider></nly-dropdown-divider>
    <nly-dropdown-item-button>First item</nly-dropdown-item-button>
    <nly-dropdown-item-button>Second Item</nly-dropdown-item-button>
  </nly-dropdown>
</div>

<!-- nly-dropdown-text.vue -->
```

默认情况下， `<nly-dropdown-text>` 会渲染成 `<p>` 标签，可以通过 `tag` 来设置对应标签。

默认情况下， `<nly-dropdown-text>` 的宽度会跟 `<nly-dropdown-item>` 宽度一样，可能需要设置 `style` 来控制下拉列表的宽度。

### `<nly-dropdown-item-group>`

```html
<div>
  <nly-dropdown id="dropdown-grouped" text="Dropdown with group" class="m-2">
    <nly-dropdown-item-button>
      Non-grouped Item
    </nly-dropdown-item-button>
    <nly-dropdown-divider></nly-dropdown-divider>
    <nly-dropdown-group id="dropdown-group-1" header="Group 1">
      <nly-dropdown-item-button>First Grouped item</nly-dropdown-item-button>
      <nly-dropdown-item-button>Second Grouped Item</nly-dropdown-item-button>
    </nly-dropdown-group>
    <nly-dropdown-group id="dropdown-group-2" header="Group 2">
      <nly-dropdown-item-button>First Grouped item</nly-dropdown-item-button>
      <nly-dropdown-item-button>Second Grouped Item</nly-dropdown-item-button>
    </nly-dropdown-group>
    <nly-dropdown-divider></nly-dropdown-divider>
    <nly-dropdown-item-button>
      Another Non-grouped Item
    </nly-dropdown-item-button>
  </nly-dropdown>
</div>

<!-- nly-dropdown-item-group.vue -->
```

### `<nly-dropdown-item-header>`

```html
<div>
  <nly-dropdown id="dropdown-header" text="Dropdown with header" class="m-2">
    <nly-dropdown-header id="dropdown-header-label">
      Dropdown header
    </nly-dropdown-header>
    <nly-dropdown-item-button aria-describedby="dropdown-header-label">
      First item
    </nly-dropdown-item-button>
    <nly-dropdown-item-button aria-describedby="dropdown-header-label">
      Second Item
    </nly-dropdown-item-button>
  </nly-dropdown>
</div>

<!-- nly-dropdown-item-header.vue -->
```

### `<nly-dropdown-item-footer>`

```html
<div>
  <nly-dropdown id="dropdown-footer" text="Dropdown with footer" class="m-2">
    <nly-dropdown-item-button aria-describedby="dropdown-footer-label">
      First item
    </nly-dropdown-item-button>
    <nly-dropdown-item-button aria-describedby="dropdown-footer-label">
      Second Item
    </nly-dropdown-item-button>

    <nly-dropdown-footer id="dropdown-footer-label">
      Dropdown footer
    </nly-dropdown-footer>
  </nly-dropdown>
</div>

<!-- nly-dropdown-item-footer.vue -->
```

#### Closing the menu via form interaction

点击 `<nly-dropdown-form>` 中的元素不会关闭下拉菜单. 如果需要关闭下拉菜单，请绑定事件来调用`hide()` 方法。

## Listening to dropdown changes via \$root events

监听下拉菜单展开状态

```js
export default {
  mounted() {
    this.$root.$on('nly::dropdown::show', (nlyEvent) => {
      console.log('Dropdown is about to be shown', nlyEvent)
    })
  },
}
```

点击 [Events](#component-reference) 查看完整事件
