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
<!-- nly-modal-hide-show.vue -->
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
        this.$refs["my-modal"].show();
      },
      hideModal() {
        this.$refs["my-modal"].hide();
      },
      toggleModal() {
        this.$refs["my-modal"].toggle("#toggle-btn");
      }
    }
  };
</script>

<!-- show,hide,toggle 显示隐藏.name -->
<!-- nly-modal-modal-hide-show.vue -->
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
        modalShow: false
      };
    }
  };
</script>

<!-- v-model 显示隐藏.name -->
<!-- nly--modal-hide-show.vue -->
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
        this.$root.$emit("nlya::show::modal", "modal-root", "#btnShowRoot");
      },
      hideModal() {
        this.$root.$emit("nlya::hide::modal", "modal-root", "#btnShowRoot");
      },
      toggleModal() {
        this.$root.$emit("nlya::toggle::modal", "modal-root", "#btnToggleRoot");
      }
    }
  };
</script>

<!-- $root 显示隐藏.name -->
<!-- nly-modal-modal-hide-show.vue -->
```

### 阻止关闭

可以绑定 `.preventDefault()` 方法到 `ok` (确定按钮), `cancel` (取消按钮), `close` (modal 头部的关闭按钮), `hide` 事件上 来阻止 `nly-modal` 关闭

`.preventDefault()` 使用的时候，必须是同步事件，不支持异步

```html
<template>
  <div>
    <nly-button v-nly-modal.modal-prevent-closing>Open Modal</nly-button>

    <div class="mt-3">
      提交的姓名:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames">{{ name }}</li>
      </ul>
    </div>

    <nly-modal
      id="modal-prevent-closing"
      ref="modal"
      title="提交您的姓名"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <nly-form-group
          :valid="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="姓名必填"
        >
          <nly-form-input
            id="name-input"
            v-model="name"
            :valid="nameState"
            required
          ></nly-form-input>
        </nly-form-group>
      </form>
    </nly-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        nameState: "novalid",
        submittedNames: []
      };
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity() ? "valid" : "invalid";
        this.nameState = valid;
        return valid;
      },
      resetModal() {
        this.name = "";
        this.nameState = "novalid";
      },
      handleOk(nlyaModalEvt) {
        nlyaModalEvt.preventDefault();
        this.handleSubmit();
      },
      handleSubmit() {
        if (this.checkFormValidity() === "invalid") {
          return;
        }
        this.submittedNames.push(this.name);
        this.$nextTick(() => {
          this.$nlyaModal.hide("modal-prevent-closing");
        });
      }
    }
  };
</script>

<!-- 阻止关闭.name -->
<!-- nly-modal-modal-hide-show.vue -->
```

**注意**

- `ok` (确定按钮), `cancel` (取消按钮), `colse` (modal 头部的关闭按钮) 都是内置的 `确定按钮` , `取消按钮` , `modal 头部的关闭按钮` 触发的. 如果您对这些适用卤具名按钮， 请使用 `hide` 事件来触发。

`ok` (确定按钮), `cancel` (取消按钮), `close` (modal 头部的关闭按钮), `hide` 事件 `(nlyaModalEvt)` 包含以下方法和属性：

| Property or Method | Type     | Description                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preventDefault()` | Method   | 阻止关闭                                                                                                                                                                                                                                                                                                                                                                |
| `trigger`          | Property | 可以是以下选项: `ok` (默认的 **OK** 按钮点击调用 Clicked), `cancel` (默认的 **Cancel** 按钮点击调用), `esc` (按下 <kbd>Esc</kbd> 按键调用), `backdrop` (点击 modal 罩层调用), `headerclose` (modal 头部 x 关闭按钮调用), 这些应该作为只一个参数传给 `hide()` 方法, 如果不需要设置，请传入 `null` 或者不传入， `trigger` 的使用方法请看下面 [trigger 源码](#trigger源码) |
| `target`           | Property | model 元素                                                                                                                                                                                                                                                                                                                                                              |
| `vueTarget`        | property | vue 实例的 model 元素                                                                                                                                                                                                                                                                                                                                                   |
| `componentId`      | property | modal 的 id                                                                                                                                                                                                                                                                                                                                                             |

**注意**

### trigger 源码

```js
hide(trigger = "") {
    if (!this.isVisible || this.isClosing) {
        /* istanbul ignore next */
        return;
    }
    this.isClosing = true;
    const hideEvt = this.buildEvent("hide", {
        cancelable: trigger !== "FORCE",
        trigger: trigger || null
    });
    // We emit specific event for one of the three built-in buttons
    if (trigger === "ok") {
        this.$emit("ok", hideEvt);
    } else if (trigger === "cancel") {
        this.$emit("cancel", hideEvt);
    } else if (trigger === "headerclose") {
        this.$emit("close", hideEvt);
    }
    this.emitEvent(hideEvt);
    // Hide if not canceled
    if (hideEvt.defaultPrevented || !this.isVisible) {
        this.isClosing = false;
        // Ensure v-model reflects current state
        this.updateModel(true);
        return;
    }
    // Stop observing for content changes
    if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
    }
    // Trigger the hide transition
    this.isVisible = false;
    // Update the v-model
    this.updateModel(false);
}
```

## model 主体内容

### 使用 `grid` 布局和 `container` 布局和 `wrapper` 布局

在 `nly-model` 中可以任意嵌套 `nly-container` , `nly-row` , `nly-col` , `nly-wrapper` 系列 布局

### Tooltips and popovers

Tooltips 和 popovers 放在 `nly-model` 中，当 `nly-model` 关闭的时候， Tooltips 和 popovers 会自动关闭。

Tooltips 和 popovers 会自动添加到 model 元素中，当然您也可以把 Tooltips 和 popovers 添加到指定 id 的元素中， 可以参考 Tooltips 和 popovers 的文档

```html
<div>
  <nly-button v-nly-modal.modalPopover>弹出model</nly-button>

  <nly-modal id="modalPopover" title="带 popovers 的 model" ok-only>
    <p>
      这个
      <nly-button v-nly-popover="'model 中的 popovers!'" title="Popover"
        >按钮</nly-button
      >
      点击弹出 popovers
    </p>
    <p>
      这个
      <a href="#" v-nly-tooltip title="modal 中的tooltip">链接</a>
      鼠标悬浮会弹出 toolptips
    </p>
  </nly-modal>
</div>

<!-- Tooltips 和 popovers.name -->
<!-- Tooltips and popovers.vue -->
```

## 懒加载和静态模态框

在默认情况下， model 是不会渲染在当前元素中的，会渲染在 `<body>` 的尾部。 `nly-model` 不会影响布局，因为他会在元素下面渲染成 `<!-- -->` 占位符。由于 `portal-vue` 可以把元素替换到其他任意地方，他可以把多个 `nly-model` 渲染到指定目标元素下面。

设置 `static` prop 为 `true`时，可以把 `nly-model` 渲染到当前元素下面，而不是添加到 `<body>` 的尾部，且是渲染成一个正常的 html 元素，非 `<!-- -->` 占位符， 这时候 model 会影响布局。 如果设置`lazy` prop 为 `true`， 即渲染为懒加载模式， model 会渲染到当前元素，当模态框不显示的时候会渲染成 `<!-- -->` 占位符。注意 `lazy` 只有在`static` prop 为 `true`时有效。

## 式样， 选项， 定制

## 模态消息框

## 具名插槽
