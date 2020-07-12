# Modal

> 模态框是一种悬浮悬浮于主窗口的用来现实额外内容的对话框，允许自定义对话内容，几乎可以内嵌其他任何组件和元素。

```html
<div>
  <nly-button variant="primary" v-nly-modal.no-close-on-esc.modal-1
    >点击弹出Modal</nly-button
  >

  <nly-modal id="modal-1" title="NlyAdminlteVue">
    <p class="my-4">Hello NlyAdminlteVue</p>
  </nly-modal>
</div>

<!-- 总览.name -->
<!-- nly-modal.vue -->
```

## 总览

在默认下， `nly-modal` 在底部有 取消 和 确定的按钮，用来进行确认操作和关闭操作。 可以通过 `nly-modal` 的专门 prop 来对这些按钮进行设置。同时也可以用对应的 `modal-ok` 和 `modal-cancel` 插槽来嵌入其他元素和组件来替换按钮。

`nly-modal` 在默认下是可以使用键盘上的 `ESC` 按键来关闭的，也可以通过点击 `nly-modal` 的罩层来关闭，还可以通过点击 `nly-modal` 右上角的 X 按钮来关闭。 这些关闭行为都是默认的。您可以通过设置 prop `no-close-on-esc` , `no-close-on-backdrop` , `hide-header-close` 来禁止对应的行为, 指令 `nly-modal` 无效。

可以设置 `modal-title` , `modal-header` , `modal-footer` 插槽来设置元素和组件嵌入 model 的标题，头部和底部

`nly-modal` 懒加载模式不会渲染 dom 元素，只有在点击触发显示的时候才会渲染，您可以设置 `static` 来实现初始渲染

**注意**

使用 `modal-footer` 插槽时，默认的 确定 和 取消 按钮不会显示，需要您自己设置。如果您使用 `modal-header` 插槽，默认的页眉关闭按钮 X 也不会显示，也无法使用 `modal-title` 插槽。

## 切换 `nly-modal` 的隐藏和展示状态

您可以通过以下方法来关闭和显示模态框

### 使用 `v-nly-modal` 指令

`v-nly-modal` 可以快速控制 `nly-modal` 显示和隐藏

```html
<div>
  <!-- 使用 modifiers -->
  <nly-button variant="primary" v-nly-modal.my-modal>点击显示</nly-button>

  <!-- 使用 value -->
  <nly-button variant="primary" v-nly-modal="'my-modal'">点击显示</nly-button>

  <nly-modal id="my-modal">Hello NlyAdminlteVue</nly-modal>
</div>

<!-- v-nly-modal 指令显示隐藏.name -->
<!-- v-nly-modal.vue -->
```

### 使用 `$nlyaModal`

如果是 `import "NlyAdminlteVue" ...` 或者注册为 插件的时候（ `ModalPlugin` ）, `NlyAdminlteVue` 会给每个组件注入一个 `$nlyaModal` 对象，来控制 `nly-modal` 的展示和隐藏

| 方法                       | 描述                             |
| -------------------------- | -------------------------------- |
| `this.$nlyaModal.show(id)` | 显示 模态框， `id` 为模态框的 id |
| `this.$nlyaModal.hide(id)` | 隐藏 模态框， `id` 为模态框的 id |

```html
<div>
  <nly-button
    variant="primary"
    id="show-btn"
    @click="$nlyaModal.show('nly-modal-example')"
    >显示</nly-button
  >

  <nly-modal id="nly-modal-example" hide-footer>
    <template v-slot:modal-title> 使用 <code>$nlyaModal</code> 方法 </template>
    <div class="d-block text-center">
      <h3>Hello NlyAdminlteVue!</h3>
    </div>
    <nly-button
      variant="primary"
      class="mt-3"
      block
      @click="$nlyaModal.hide('nly-modal-example')"
      >关闭</nly-button
    >
  </nly-modal>
</div>

<!-- $nlyaModal 显示隐藏.name -->
<!-- nly-modal-bv-modal-hide-show.vue -->
```

`this.$nlyaModal` 同样可以使用于 显示 **[模态消息框](#模态消息框)**

### 使用 `show()` , `hide()` , `toggle()`

`show()` , `hide()` , `toggle()` 3 个方法是 `nly-modal` 暴露出来的方法， 可以通过 `ref` 来调用

```html
<template>
  <div>
    <nly-button variant="primary" id="show-btn" @click="showModal"
      >show</nly-button
    >
    <nly-button variant="primary" id="toggle-btn" @click="toggleModal"
      >Toggle
    </nly-button>

    <nly-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello NlyAdminlteVue</h3>
      </div>
      <nly-button class="mt-3" variant="outlineDanger" block @click="hideModal"
        >hide</nly-button
      >
      <nly-button
        class="mt-2"
        variant="outlineWarning"
        block
        @click="toggleModal"
        >Toggle</nly-button
      >
    </nly-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
    },
  }
</script>

<!-- show,hide,toggle 显示隐藏.name -->
<!-- nly-modal-bv-modal-hide-show.vue -->
```

`hide()` 可以接受一个 `trigger` 参数 来阻止模态框关闭，具体请查看 **[阻止关闭](#阻止关闭)**

**注意**

建议使用 `$nlyaModal` 方法而不是 `ref` 这种方法

### 使用 `v-model`

`v-model` 的值始终会与 `nly-modal` 的 显示和隐藏状态同步，你可以用 `v-model` 来控制模态框的显示和隐藏

使用 `v-model` 的时候，请不要同时使用 `visible` , 因为 `v-model` 是 指向 `visible` 的。

```html
<template>
  <div>
    <nly-button variant="outlineDanger" @click="modalShow = !modalShow"
      >显示</nly-button
    >

    <nly-modal v-model="modalShow">Hello NlyAdminlteVue</nly-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modalShow: false,
      }
    },
  }
</script>

<!-- v-model 显示隐藏.name -->
<!-- nly-modal-bv-modal-hide-show.vue -->
```

### 使用具名插槽

具体见 **[具名插槽](#具名插槽)**

### 将事件发射到 root

您可以将 `nlya::show::modal` , `nlya::hide::modal` 和 `nlya::toggle::modal` 事件发射到\$root，其他组件或者元素可以来调用对应的方法来显示和隐藏对应的模态框

第一个参数为对应的上述三个方法，第二个参数对应模态框 id，或 css 元素选择器，第三个元素为需要绑定控制事件的元素，最好用 `ref` 获取



```html
<template>
  <div>
    <nly-button @click="showModal" variant="outlineDanger" ref="btnShowRoot"
      >show</nly-button
    >
    <nly-button @click="toggleModal" variant="outlineDanger" ref="btnToggleRoot"
      >Toggle</nly-button
    >

    <nly-modal id="modal-root">
      <div class="d-block">Hello NlyAdminlteVue</div>
      <nly-button @click="hideModal" variant="outlineDanger">hide</nly-button>
      <nly-button @click="toggleModal" variant="outlineDanger"
        >Toggle</nly-button
      >
    </nly-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$root.$emit('nlya::show::modal', 'modal-root', '#btnShowRoot')
      },
      hideModal() {
        this.$root.$emit('nlya::hide::modal', 'modal-root', '#btnShowRoot')
      },
      toggleModal() {
        this.$root.$emit('nlya::toggle::modal', 'modal-root', '#btnToggleRoot')
      },
    },
  }
</script>

<!-- $root 显示隐藏.name -->
<!-- nly-modal-bv-modal-hide-show.vue -->
```

## 模态消息框

## 阻止关闭

## 具名插槽
