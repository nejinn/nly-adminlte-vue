# Overlay

> NlyAdminlteVue 自定义的罩层组件 `nly-overlay` 用来在视觉上挡住和遮住组件或元素，用来展示组件或者
> 元素的一种状态，比如创建，更新，加载，警告等等。

## Overview

- 设置 `sidebar` prop 的时候，罩层会渲染成一个左侧导航栏的罩层，在小屏的时候，展开左侧导航栏会自动显示罩层。
  且会给罩层传递一个 `atrrs id = 'sidebar-overlay'`，请注意不要给其他组件传递同样的 id
  这时候其他 prop 都不会生效， 因为 `adminlte3` 布局的原因，这个罩层不会带有任何 css 类， 除了 `nly-overlay`

- 设置 `custom` prop 的时候, 会渲染成一个 `adminlte3` 自带罩层， 用于 adminlte 的其他组件 loading 状态,
  这时候只有 prop `dark` 会生效， 其他 prop 都会失效, 比如 **[Card](/docs/components/card#loading)**，又比如 **[InFoBox](/docs/components/info-box)**

`<nly-overlay>` 差不多可以用在任何元素上. [使用 demo](#use-case-examples) 比如 表单(forms)，表格(tables),警告弹窗(modal)。
在任何需要显示警告，加载，更新等状态的组件和元素，用提在视觉上显示组件当前不可用状态

`<nly-overlay>` 可以包裹覆盖元素组件，也可以渲染成一个具有属性 `position: relative` 的子元素([non-wrapping mode](#non-wrapping-mode)).

`<nly-overlay>` 的可见状态是由 prop `show` 控制的，默认是不会显示的

<div class="alert alert-info">
  <p class="mb-0">
    此组件仅仅是在视觉上覆盖 <em>视觉上覆盖</em> 他所包裹的内容. 请查看下面
    <a href="#accessibility" class="alert-link">Accessibility section</a> 了解更多的信息
  </p>
</div>

**Default wrapping mode example:**

```html
<template>
  <div>
    <nly-overlay :show="show" rounded="sm" variant="gradient-pink">
      <nly-card :aria-hidden="show ? 'true' : null">
        <nly-card-body>
          <nly-card-text>作者帅比，查看罩层</nly-card-text>
          <nly-card-text>点击按钮显示罩层</nly-card-text>
          <nly-button :disabled="show" variant="primary" @click="show = true">
            显示 overlay
          </nly-button>
        </nly-card-body>
      </nly-card>
    </nly-overlay>
    <nly-button class="mt-3" @click="show = !show">切换 overlay</nly-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    }
  };
</script>

<!-- nly-overlay.vue -->
```
