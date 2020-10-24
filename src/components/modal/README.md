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

可以设置 `modal-title` , `modal-header` , `modal-footer` 插槽来设置元素和组件嵌入 modal 的标题，头部和底部

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
      },
    },
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
        modalShow: false,
      };
    },
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
      },
    },
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
        submittedNames: [],
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
      },
    },
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
| `target`           | Property | modal 元素                                                                                                                                                                                                                                                                                                                                                              |
| `vueTarget`        | property | vue 实例的 modal 元素                                                                                                                                                                                                                                                                                                                                                   |
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

## modal 主体内容

### 使用 `grid` 布局和 `container` 布局和 `wrapper` 布局

在 `nly-modal` 中可以任意嵌套 `nly-container` , `nly-row` , `nly-col` , `nly-wrapper` 系列 布局

### Tooltips and popovers

Tooltips 和 popovers 放在 `nly-modal` 中，当 `nly-modal` 关闭的时候， Tooltips 和 popovers 会自动关闭。

Tooltips 和 popovers 会自动添加到 modal 元素中，当然您也可以把 Tooltips 和 popovers 添加到指定 id 的元素中， 可以参考 Tooltips 和 popovers 的文档

```html
<div>
  <nly-button v-nly-modal.modalPopover>弹出modal</nly-button>

  <nly-modal id="modalPopover" title="带 popovers 的 modal" ok-only>
    <p>
      这个
      <nly-button v-nly-popover="'modal 中的 popovers!'" title="Popover"
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

在默认情况下， modal 是不会渲染在当前元素中的，会渲染在 `<body>` 的尾部。 `nly-modal` 不会影响布局，因为他会在元素下面渲染成 `<!-- -->` 占位符。由于 `portal-vue` 可以把元素替换到其他任意地方，他可以把多个 `nly-modal` 渲染到指定目标元素下面。

设置 `static` prop 为 `true`时，可以把 `nly-modal` 渲染到当前元素下面，而不是添加到 `<body>` 的尾部，且是渲染成一个正常的 html 元素，非 `<!-- -->` 占位符， 这时候 modal 会影响布局。 如果设置`lazy` prop 为 `true`， 即渲染为懒加载模式， modal 会渲染到当前元素，当模态框不显示的时候会渲染成 `<!-- -->` 占位符。注意 `lazy` 只有在`static` prop 为 `true`时有效。

## 式样， 选项， 定制

### 大小

modal 的大小可以由 `size` prop 來控制。 可选 `sm`, `md`, `lg`。

```html
<div>
  <nly-button v-nly-modal.modal-xl variant="primary">xl modal</nly-button>
  <nly-button v-nly-modal.modal-lg variant="primary">lg modal</nly-button>
  <nly-button v-nly-modal.modal-sm variant="primary">sm modal</nly-button>

  <nly-modal id="modal-xl" size="xl" title="Extra Large Modal"
    >Hello Extra Large Modal!</nly-modal
  >
  <nly-modal id="modal-lg" size="lg" title="Large Modal"
    >Hello Large Modal!</nly-modal
  >
  <nly-modal id="modal-sm" size="sm" title="Small Modal"
    >Hello Small Modal!</nly-modal
  >
</div>

<!-- 大小.name -->
<!-- size.vue -->
```

### 滚动条

如果 modal 的主体内容太长，超过当前屏幕可见区域，会自动出现滚动条，滚动条是浏览器的滚动条，这时候，不可见区域需要滚动条滚下去才能看到。

```html
<div>
  <nly-button v-nly-modal.modal-tall>滚动加载内容</nly-button>

  <nly-modal id="modal-tall" title="Overflowing Content">
    <p class="my-4" v-for="i in 20" :key="i">
      作者又高又帅，作者大帅比，帅的世界地震
    </p>
  </nly-modal>
</div>

<!-- 滚动条.name -->
<!-- scrolling.vue -->
```

我们可以设置 `scrollable` 为 `true` 来给 modal 创建一个滚动条，滚动条会出现在 modal 的 body 中。

```html
<div>
  <nly-button v-nly-modal.modal-scrollable>Launch scrolling modal</nly-button>

  <nly-modal id="modal-scrollable" scrollable title="滚动条加载内容">
    <p class="my-4" v-for="i in 20" :key="i">
      作者又高又帅，作者大帅比，帅的世界地震
    </p>
  </nly-modal>
</div>

<!-- 滚动条.name -->
<!-- scrollable.vue -->
```

### 垂直居中

可以设置 `centered` prop 为 `true` 来使得 modal 垂直居中

```html
<div>
  <nly-button v-nly-modal.modal-center>垂直居中 modal</nly-button>

  <nly-modal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">垂直居中 modal</p>
  </nly-modal>
</div>

<!-- 垂直居中.name -->
<!-- centered.vue -->
```

### 颜色

使用以下 prop 来控制 header， foorer， body 的颜色： `header-bg-variant`, `header-text-variant`, `body-bg-variant`, `body-text-variant`, `footer-bg-variant`, `footer-text-variant` props. 使用 adminlte 的主体颜色， 比如: `danger`, `warning`, `info`, `success`, `dark`, `light`

```html
<template>
  <div>
    <nly-button @click="show=true" variant="primary">Show Modal</nly-button>

    <nly-modal
      v-model="show"
      title="Modal Variants"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <nly-container fluid>
        <nly-row class="mb-1 text-center">
          <nly-col cols="3"></nly-col>
          <nly-col>Background</nly-col>
          <nly-col>Text</nly-col>
        </nly-row>

        <nly-row class="mb-1">
          <nly-col cols="3">Header</nly-col>
          <nly-col>
            <nly-form-select
              v-model="headerBgVariant"
              :options="variants"
            ></nly-form-select>
          </nly-col>
          <nly-col>
            <nly-form-select
              v-model="headerTextVariant"
              :options="variants"
            ></nly-form-select>
          </nly-col>
        </nly-row>

        <nly-row class="mb-1">
          <nly-col cols="3">Body</nly-col>
          <nly-col>
            <nly-form-select
              v-model="bodyBgVariant"
              :options="variants"
            ></nly-form-select>
          </nly-col>
          <nly-col>
            <nly-form-select
              v-model="bodyTextVariant"
              :options="variants"
            ></nly-form-select>
          </nly-col>
        </nly-row>

        <nly-row>
          <nly-col cols="3">Footer</nly-col>
          <nly-col>
            <nly-form-select
              v-model="footerBgVariant"
              :options="variants"
            ></nly-form-select>
          </nly-col>
          <nly-col>
            <nly-form-select
              v-model="footerTextVariant"
              :options="variants"
            ></nly-form-select>
          </nly-col>
        </nly-row>
      </nly-container>

      <template v-slot:modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <nly-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </nly-button>
        </div>
      </template>
    </nly-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        variants: [
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
          "info",
          "light",
          "dark",
        ],
        headerBgVariant: "dark",
        headerTextVariant: "light",
        bodyBgVariant: "light",
        bodyTextVariant: "dark",
        footerBgVariant: "warning",
        footerTextVariant: "dark",
      };
    },
  };
</script>

<!-- 颜色.name -->
<!-- variant.vue -->
```

### 隐藏罩层

```html
<div>
  <nly-button v-nly-modal.modal-no-backdrop>打开</nly-button>

  <nly-modal
    id="modal-no-backdrop"
    hide-backdrop
    content-class="shadow"
    title="NlyAdminlteVue"
  >
    <p class="my-2">给modal添加了css 类 <code>'shadow'</code></p>
  </nly-modal>
</div>

<!-- 隐藏罩层.name -->
<!-- hide-backdrop.vue -->
```

### 关闭 出现/消失 动画

可以给 `nly-moodal` 设置 prop `no-fade` 来关闭 modal 出现或者消失时的动画

### footer 按钮大小

可以设置 `button-size` prop 为 `sm` 显示小按钮或者设置为 `lg` 显示大按钮

```html
<div>
  <nly-button v-nly-modal.modal-footer-sm>小按钮</nly-button>
  <nly-button v-nly-modal.modal-footer-lg>大按钮</nly-button>

  <nly-modal id="modal-footer-sm" title="NlyAdminlteVue" button-size="sm">
    <p class="my-2">小按钮</p>
  </nly-modal>

  <nly-modal id="modal-footer-lg" title="NlyAdminlteVue" button-size="lg">
    <p class="my-2">大按钮</p>
  </nly-modal>
</div>

<!-- 按钮大小.name -->
<!-- button-size.vue -->
```

### 禁用 footer 按钮

可以通过设置 `cancel-disabled` 和`ok-disabled` 来禁用 footer 中的 OK 和 CANCEL 按钮

可以设置 `busy` prop 来使用 OK 和 CANCEL 按钮 同时不可用

### 自定义设置 和 插槽

modal 有以下插槽

| Slot                 | Optionally Scoped | Description                      |
| -------------------- | ----------------- | -------------------------------- |
| `default`            | Yes               | 默认插槽，modal 的主体内容       |
| `modal-title`        | Yes               | title 插槽                       |
| `modal-header`       | Yes               | header 插槽， 包括 头部关闭按钮  |
| `modal-footer`       | Yes               | footer 插槽，包括 OK CANCEL 按钮 |
| `modal-ok`           | No                | OK 按钮插槽                      |
| `modal-cancel`       | No                | CANCEL 按钮插槽                  |
| `modal-header-close` | No                | 头头部关闭按钮插槽               |

modal 插槽有以下方法

| Method or Property | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `ok()`             | 关闭 modal 和触发 `ok` ， `hide` 事件, 使用 `nlyaModalEvent.trigger = 'ok'`                  |
| `cancel()`         | 关闭 modal 和触发 `cancel` ， `hide` 事件, 使用 `nlyaModalEvent.trigger = 'cancel'`          |
| `close()`          | 关闭 modal 和触发 `close` and `hide` 事件, 使用 `nlyaModalEvent.trigger = 'headerclose'`     |
| `hide(trigger)`    | 关闭 modal 和触发 `hide` 事件, 使用 `nlyaModalEvent.trigger = trigger` (trigger is optional) |
| `visible`          | modal 的可见状态. 设置 `true` 弹出 modal， 设置 `false` 关闭 modal                           |

#### 使用 scoped slots

```html
<template>
  <nly-button @click="$nlyaModal.show('modal-scoped')">打开</nly-button>

  <nly-modal id="modal-scoped">
    <template v-slot:modal-header="{ close }">
      <nly-button size="sm" variant="outline-danger" @click="close()">
        关闭
      </nly-button>
      <h5>footer</h5>
    </template>

    <template v-slot:default="{ hide }">
      <p>body 按钮</p>
      <nly-button @click="hide()">关闭 modal</nly-button>
    </template>

    <template v-slot:modal-footer="{ ok, cancel, hide }">
      <b>Custom Footer</b>
      <nly-button size="sm" variant="success" @click="ok()">
        OK
      </nly-button>
      <nly-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </nly-button>
      <nly-button size="sm" variant="outlineSecondary" @click="hide('forget')">
        Forget it
      </nly-button>
    </template>
  </nly-modal>
</template>

<!-- scoped slots.name -->
<!-- scoped slots.vue -->
```

## 多个模式

`nly-modal` 支持多个模态框

设置 `no-stacking` 为 `true` 可以使得在另一个模态框出现之前， 在他前面的模态框会隐藏掉

```html
<div>
  <nly-button v-nly-modal.modal-multi-1>打开第一个 Modal</nly-button>

  <nly-modal id="modal-multi-1" size="lg" title="Modal 1" ok-only no-stacking>
    <p class="my-2">First Modal</p>
    <nly-button v-nly-modal.modal-multi-2>打开第二个modal</nly-button>
  </nly-modal>

  <nly-modal id="modal-multi-2" title="Modal 2" ok-only>
    <p class="my-2">第二个 Modal</p>
    <nly-button v-nly-modal.modal-multi-3 size="sm"
      >打开第三个 Modal</nly-button
    >
  </nly-modal>

  <nly-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
    <p class="my-1">第三个modal</p>
  </nly-modal>
</div>

<!-- 多个模式.name -->
<!-- modal-multi.vue -->
```

**注意**
请尽量不要使用嵌套 `nly-modal`， 因为这样会影响布局，尤其是静态 modal

## 模态消息框

modal 可以渲染成消失提示框

| Method                                            | Description              |
| ------------------------------------------------- | ------------------------ |
| `this.$nlyaModal.msgBoxOk(message, options)`      | 打开 msg box modal       |
| `this.$nlyaModal.msgBoxConfirm(message, options)` | 打开 msgBoxConfirm modal |

`option` 是可以设置对象，用来设置标题 和 设置 渲染为 msgBoxOk 的 modal，
两种方法都返回一个 `Promise`（IE 11 和较旧的浏览器需要的 polyfill），当 modal 隐藏时，该解析为一个值。`.msgBoxOk()`始终解析为值 true，而`.msgBoxConfirm()`解析为 true（按下“确定”按钮），false（按下“取消”按钮）或 null（如果通过背景幕点击，Esc 按下或其他方式关闭了模式，则解析为）。

如果 `message` ·没有提供，则这两种方法都将立即返回 value undefined。

您可以使用.then(..).catch(...)或异步 await 代码样式（异步 await 需要浏览器或编译器）。

### OK message box

```html
<template>
  <div>
    <div class="mb-2">
      <nly-button @click="showMsgBoxOne">Simple msgBoxOk</nly-button>
      Return value: {{ String(boxOne) }}
    </div>
    <div class="mb-1">
      <nly-button @click="showMsgBoxTwo">msgBoxOk with options</nly-button>
      Return value: {{ String(boxTwo) }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        boxOne: "",
        boxTwo: "",
      };
    },
    methods: {
      showMsgBoxOne() {
        this.boxOne = "";
        this.$nlyaModal
          .msgBoxOk("Action completed")
          .then((value) => {
            this.boxOne = value;
          })
          .catch((err) => {
            // An error occurred
          });
      },
      showMsgBoxTwo() {
        this.boxTwo = "";
        this.$nlyaModal
          .msgBoxOk("Data was submitted successfully", {
            title: "Confirmation",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true,
          })
          .then((value) => {
            this.boxTwo = value;
          })
          .catch((err) => {
            // An error occurred
          });
      },
    },
  };
</script>

<!-- MsgBox.name -->
<!-- MsgBox,.vue -->
```

### Confirm message box

```html
<template>
  <div>
    <div class="mb-2">
      <nly-button @click="showMsgBoxOne">Simple msgBoxConfirm</nly-button>
      Return value: {{ String(boxOne) }}
    </div>
    <div class="mb-1">
      <nly-button @click="showMsgBoxTwo">msgBoxConfirm with options</nly-button>
      Return value: {{ String(boxTwo) }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        boxOne: "",
        boxTwo: "",
      };
    },
    methods: {
      showMsgBoxOne() {
        this.boxOne = "";
        this.$nlyaModal
          .msgBoxConfirm("Are you sure?")
          .then((value) => {
            this.boxOne = value;
          })
          .catch((err) => {
            // An error occurred
          });
      },
      showMsgBoxTwo() {
        this.boxTwo = "";
        this.$nlyaModal
          .msgBoxConfirm("Please confirm that you want to delete everything.", {
            title: "Please Confirm",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          })
          .then((value) => {
            this.boxTwo = value;
          })
          .catch((err) => {
            // An error occurred
          });
      },
    },
  };
</script>
<!-- MsgBox.name -->
<!-- msgBoxConfirm,.vue -->
```

### 注意事项

- `this.$nlyaModal` 注入只有在引入整个 `NlyAdminlteVue` 或者 `ModalPlugin` 插件才有效。 引入 `nly-modal` 是无效的，如果只需要使用 `this.$nlyaModal`， 请引入 `VNlyModalPlugin`

- 每一个 Vue 虚拟 dom 都会创建一个 `$nlyaModal`, 注入到 mixin, 所有不能直接使用 `Vue.prototype` 来访问， 因为他需要使用实例的 `this` 和 `$root` 上下文

- message box 需要支持 `Promise` 的浏览器， 如果浏览器不支持， 请使用 polyfill，这会提供 `Promise` 支持，否则会返回 `undefined`

- message box 是 `nly-modal` 组件的拓展，他能支持 `nly-modal` 的绝大部分 props, 这些 prop 需要使用 <samp>camelCase</samp> 格式。但是下面这些 prop 会出现异常，请谨慎使用。`lazy`, `static`, `busy`, `visible`, `noStacking`, `okOnly`, `okDisabled`， `cancelDisabled`.

- `title` (`titleHtml`) 不在 设置（options）中，将不会显示 header

- `title` (`titleHtml`) 在设置中， header 中的关闭（x）按钮不会显示，您可以在 options 中设置 `hideHeaderClose: false` 来强制显示 headr 中的关闭按钮

- 如果 message box 在隐藏之前被关闭或者销毁，会抛出有个 `promise rejection error`，所以通常会有一个 `.catch(errHandler)` 在对应的函数中，可以使用 `await` 一类的异步代码

- 当你使用 `Vue Router` 时， 如果 message box 在路由切换的时候没有隐藏起来，会关闭并抛出错误，如果你希望这个 message box 在切换路由的时候不被销毁，使用 `this.$root.$nlyaModal` 代替 `this.$nlyaModal`.

- ssr 渲染中间，是无法生成 message box 的

- message box 目前不支持 HTM L 字符串，但是，您可以通过传递 VNodes 数组，来实现

- message box 内容的自定义。您可以使用 Vue 的 [`this.$createElement`](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments) 方法生成 VNode。对于 `modal title`（通过将 VNode 传递到 title 选项），`OK` 按钮文本（通过 `okTitle` 选项）和 `CANCEL` 按钮文本（通过 `cancelTitle` 选项）也可以这样做。

### Message box 的高级用法

使用 `this.$nlyaModal.msgBoxOk(...)` 或者 `this.$nlyaModal.msgBoxConfirm(...)` 生成 modal 时，如果需要展示更多的主体内容，除了 [注意事项](#注意事项) 说的事项之外，您可以构造一个 VNodes 传入 modal 来作为主体内容

```html
<template>
  <div>
    <nly-button @click="showMsgOk"
      >Show OK message box with custom content</nly-button
    >
  </div>
</template>

<script>
  export default {
    methods: {
      showMsgOk() {
        const h = this.$createElement;
        const titleVNode = h("div", {
          domProps: { innerHTML: "Title from <i>HTML<i> string" },
        });
        const messageVNode = h("div", { class: ["foobar"] }, [
          h("p", { class: ["text-center"] }, [
            " Flashy ",
            h("strong", "msgBoxOk"),
            " message ",
          ]),
          h("p", { class: ["text-center"] }, [h("nly-spinner")]),
          h("img", {
            class: "img-thumbnail img-fluid rounded-circle mx-auto d-block",
            attrs: {
              src: "https://picsum.photos/id/20/250/250",
            },
          }),
        ]);
        this.$nlyaModal.msgBoxOk([messageVNode], {
          title: [titleVNode],
          buttonSize: "sm",
          centered: true,
          size: "sm",
        });
      },
    },
  };
</script>

<!-- 高级用法.name -->
<!-- advanced usage.vue -->
```

## 通过 \$root 事件 来监听 modal 的状态

```js
export default {
  mounted() {
    this.$root.$on("nlya::modal::show", (nlyaEvent, modalId) => {
      console.log("Modal is about to be shown", nlyaEvent, modalId);
    });
  },
};
```

## 辅助功能

`nly-modal` 提供了几种辅助功能，比如自动聚焦，返回焦点，键盘操作和 `aria-*` 属性

### ARIA 属性

在大多数情况下 modal 的 `aria-labelledby`和 `aria-describedby`属性会自动显示

- 如果您隐藏了 header，或者 没有提供 `title prop`，或者 自定义了一个 header， `aria-labelledby` 属性将不会自动生成。如果您需要在视觉上隐藏标标题，而在屏幕阅读器上显示标题， 您可以设置 `title-sr-only` prop， 如果没有 header，您可以给 `aria-label` prop 传入一个字符串值来代替

- `aria-describedby` 属性是渲染在 modal 的主体上的

- 如果 `aria-label` 传入了一个值，即使你的 modal 有 header 和 title，`aria-labelledby` 也会失效，

### 打开 modal 自动聚焦

`nly-modal` 在打开的时候会自动聚焦到 modal 主体上

您可以通过监听 `nly-modal` 的 `shown` 事件来调用想要聚焦的元素的 `focus()` 事件来使得 modal 打开就聚焦在对应的元素中。

```html
<nly-modal @shown="focusMyElement">
  <div>
    <nly-button>自动聚焦</nly-button>
  </div>

  <div>
    <nly-form-input></nly-form-input>
  </div>

  <div>
    <!-- Element to gain focus when modal is opened -->
    <nly-form-input ref="focusThis"></nly-form-input>
  </div>

  <div>
    <nly-form-input></nly-form-input>
  </div>
</nly-modal>
```

```js
export default {
  methods: {
    focusMyElement() {
      this.$refs.focusThis.focus();
    },
  },
};
```

如果你使用 `nly-form-*` 组件， modal 打开的时候会自动聚焦到 这些组件上。 如果使用了 `static` prop，但是没有设置 `lazy` prop， `autofocus` prop 会失效

如果您想自动聚焦到 `cancel`, `ok`, `close` 按钮上， 请设置 `auto-focus-button`，值为对应的按钮名称。 modal 打开的时候，会自动聚焦到对应的按钮上面，如果这个按钮被隐藏了，那么拒绝效果会失效。

### 关闭 modal 聚焦到指定元素

您可以设置 `return-focus` 来让 modal 关闭之后自动聚焦到对应的元素上。传入值可以为：

- CSS 选择器

- 组件的 refs

- dom 选择器

如果传入的对象是不可聚焦的， 这时候聚焦的元素会由浏览器自己选择

这个 prop 在使用 `nly-modal` 的 `show()`, `hide()` 方法 和 `v-model` 的时候特别方便，且优先级别高于其他聚焦 `foucs` prop

### 自动聚焦

`nly-modal` 如果是使用指令 `v-nly- modal` 显示/隐藏的, 将会自动聚焦到绑定指令的元素上，但是如果设置了 `return-foucs` prop，则会聚焦到 `return-foucs` 指定的元素上

### 通过事件来聚焦到指定的元素上

使用 `nly::show::modal` (必须是从 root 上发出的)事件，可以在第二个参数传入值，使得 modal 关闭时聚焦到对应的元素上。 第二个参数传入值类型应该跟 `return-focus` 是一样的。

```js
this.$root.$emit("nly::show::modal", "modal-1", "#focusThisOnClose");
```

** 注意 ** 如果 `return-focus` prop 设置了值， 这个事件设置是无效的
