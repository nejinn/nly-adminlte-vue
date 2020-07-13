# Collapse

> 折叠板,支持任何元素折叠,支持手风琴模式

## 总览

折叠板有 2 个组件,一个是 `nly-collaspe`, 一个是`nly-collapse-noclass`.这 2 个折叠板组件的使用方法是一样的

**注意：**

- 区别在于 `nly-collaspe` 的动画需要依赖一些 admintle 3 自带的 css 式样:

```
css: true,
enterClass: "",
enterActiveClass: "collapsing",
enterToClass: "collapse show",
leaveClass: "collapse show",
leaveActiveClass: "collapsing",
leaveToClass: "collapse"
```

- `nly-collapse` 组件在某些情况下动画会失效. 比如被包裹的元素存在 `margin` 属性等.

- `nly-collapse`使用的动画组件是 `NlyCollapseTransition`

- `nly-collapse-noclass` 使用的动画组件是 `NlyCollapseNoclassTransition`

```html
<div>
  <nly-button v-nly-toggle.collapse-1 variant="primary"
    >Toggle 折叠板</nly-button
  >
  <nly-collapse id="collapse-1" class="mt-2">
    <nly-card>
      <nly-card-body>
        <p class="card-text">折叠板内容</p>
        <nly-button v-nly-toggle.collapse-1-inner variant="default" size="sm"
          >嵌套折叠板</nly-button
        >
        <nly-collapse id="collapse-1-inner" class="mt-2">
          <nly-card>
            <nly-card-body>
              Hello NlyadminlteVue!
            </nly-card-body>
          </nly-card>
        </nly-collapse>
      </nly-card-body>
    </nly-card>
  </nly-collapse>
</div>

<!-- 嵌套折叠板.name -->
<!-- nly-collapse.vue -->
```

## 其他元素使用折叠板

其他元素可以被 `<nly-collapse>` 包裹, 利用指令 `v-nly-toggle` 开控制收起展开

```html
<div>
  <nly-button v-nly-toggle.collapse-2 class="m-1" variant="default"
    >指令折叠板</nly-button
  >

  <nly-button v-nly-toggle="'collapse-2'" class="m-1" variant="default"
    >指令折叠板</nly-button
  >

  <nly-collapse id="collapse-2">
    <nly-card>
      <nly-card-body>
        折叠板内容
      </nly-card-body>
    </nly-card>
  </nly-collapse>
</div>

<!-- 指令折叠板.name -->
<!-- nly-collapse-usage.vue -->
```

## 初始化展开状态

设置 prop visible 为 true,使 `<nly-collapse>` 初始状态为展开

```html
<div>
  <nly-button v-nly-toggle.collapse-3 class="m-1" variant="info"
    >指令折叠板</nly-button
  >
  <nly-collapse visible id="collapse-3">
    <nly-card>
      <nly-card-body>
        初始状态为展开!
      </nly-card-body>
    </nly-card>
  </nly-collapse>
</div>

<!-- visible设置初始状态.name -->
<!-- nly-collapse-visible.vue -->
```

默认状态下,折叠板的 `visible` 或者 `v-model` 为 `true` 的时候,初始打开的折叠板并不会在渲染的时候就有动画

请设置`<nly-collapse>`的 `prop appear` 为 `true` 来使得折叠板具有初始展开动画

## `v-model`

折叠板的 收起展开状态(visible)支持用 `v-model` 来控制,在组件中 `v-model` 输入的值会传给 `prop visible`

注意,当我们用 `v-model` 来控制 `<nly-collapse>` 折叠版的时候, `aria-*` 属性和 class `collapsed` 并不会自动变化, 我们需要手动设置函数或者做点什么事来修改他们

```html
<template>
  <div>
    <nly-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
      variant="danger"
    >
      折叠板
    </nly-button>
    <nly-collapse id="collapse-4" v-model="visible" class="mt-2">
      <nly-card>
        <nly-card-body>
          初始状态为展开
        </nly-card-body>
      </nly-card>
    </nly-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: true,
      }
    },
  }
</script>

<!-- v-model.name -->
<!-- nly-collapse-v-model.vue -->
```

## 控制多个折叠板

使用一个 `v-nly-toggle` 可以控制多个 `<nly-collapse>` 组件 ,只需要将多个折叠板的 id 以 modifiers 传入同一个 `v-nly-toggle` 指令即可

```html
<div>
  <nly-button v-nly-toggle.collapse-a.collapse-b variant="outlineSuccess"
    >同时控制AB折叠板</nly-button
  >

  <nly-collapse id="collapse-a" class="mt-2">
    <nly-card><nly-card-body>折叠板A</nly-card-body></nly-card>
  </nly-collapse>
  <nly-collapse id="collapse-b" class="mt-2">
    <nly-card><nly-card-body>折叠板B</nly-card-body></nly-card>
  </nly-collapse>
</div>

<!-- 指令控制多个折叠板.name -->
<!-- nly-collapse-trigger-multiple.vue -->
```

## 手风琴模式

`<nly-collapse>` 组件的手风琴模式由 `prop accordion` 来分组,当你把多个折叠板的 `accordion`设置为相同的时候,这些折叠板一次只能打开一个

```html
<nly-card>
  <nly-button variant="info" v-nly-toggle.collapseTest1 block>
    collapseTest1
  </nly-button>
</nly-card>
<nly-collapse id="collapseTest1">
  <nly-card>
    我的标识是collapseTest1 我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
  </nly-card>
</nly-collapse>

<nly-card>
  <nly-button variant="info" v-nly-toggle.collapseTest2 block>
    collapseTest2
  </nly-button>
</nly-card>
<nly-collapse id="collapseTest2">
  <nly-card>
    我的标识是collapseTest2 我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
    我是一个非手风琴演示，我跟他们都没关系
  </nly-card>
</nly-collapse>

<nly-card>
  <nly-button variant="warning" v-nly-toggle.accordion1 block>
    accordion1
  </nly-button>
</nly-card>
<nly-collapse id="accordion1" accordion="accordion">
  <nly-card>
    我的标识是id="accordion1" accordion='accordion' 我是一个手风琴演示
    我是一个手风琴演示 我是一个手风琴演示 我是一个手风琴演示 我是一个手风琴演示
  </nly-card>
</nly-collapse>

<nly-card>
  <nly-button variant="warning" v-nly-toggle.accordion2 block>
    accordion2
  </nly-button>
</nly-card>
<nly-collapse id="accordion2" accordion="accordion" visible>
  <nly-card>
    我的标识是id="accordion2" accordion='accordion' 我是一个手风琴演示
    因为我有visible，所以我最开始就被打开了
  </nly-card>
</nly-collapse>

<nly-card>
  <nly-button variant="warning" v-nly-toggle.accordion3 block>
    accordion3
  </nly-button>
</nly-card>
<nly-collapse id="accordion3" accordion="accordion" visible>
  <nly-card>
    我的标识是id="accordion3" accordion='accordion' 我是一个手风琴演示
  </nly-card>
</nly-collapse>

<!-- 手风琴模式.name -->
<!-- nly-accordion.vue -->
```

这列子是边侧导航栏,二级菜单有偏移属性,即 `padding-left: 1rem`.这是用使用 `nly-collapse` 动画会失效, 只能使用 `nly-collapse-noclass`. 在这里边侧导航栏是用 `nly-collapse-noclass`进行封装的, 有兴趣可以看源码

```html
<nly-sidebar-nav class="mt-2" pill child-indent>
  <nly-sidebar-nav-tree
    target="collapsenoclass1"
    accordion="collapsenoclass"
    icon="nav-icon fas nlyfont nly-logo-aperture"
    link-class="bg-info"
    visible
    text="accordion1"
  >
    <template slot="linktool">
      <nly-badge variant="primary" badge-class="right" pill> </nly-badge>
    </template>

    <nly-sidebar-nav-item
      link-class="xxx zzz"
      class="sss"
      icon="nav-icon far nlyfont nly-logo-chrome"
    >
      i have props visible,so i opened here
      <nly-badge bg-variant="fuchsia" badge-class="right" size="sm">
        NEW
      </nly-badge>
    </nly-sidebar-nav-item>
  </nly-sidebar-nav-tree>

  <nly-sidebar-nav-tree
    target="collapsenoclass2"
    accordion="collapsenoclass"
    icon="nav-icon fas nlyfont nly-nav-fill"
    link-class="bg-info"
    text="accordion2"
  >
    <nly-sidebar-nav-item
      link-class="xxx zzz"
      class="sss"
      icon="nav-icon far nlyfont nly-nav-tool"
    >
      上面的有visible props，所以他最开始就打开了
    </nly-sidebar-nav-item>
  </nly-sidebar-nav-tree>

  <nly-sidebar-nav-tree
    target="collapsenoclass3"
    accordion="collapsenoclass"
    icon="nav-icon fas nlyfont nly-magic-cube"
    link-class="bg-info"
    text="accordion3"
  >
    <nly-sidebar-nav-item
      link-class="xxx zzz"
      class="sss"
      icon="nav-icon far nlyfont nly-keypad"
      exact
    >
      我跟上面的2个都是accordion='collapse'，所以我们是同一组手风琴
    </nly-sidebar-nav-item>
  </nly-sidebar-nav-tree>

  <nly-sidebar-nav-item
    link-class="xxx zzz"
    class="bg-danger"
    icon="nav-icon far nlyfont nly-keypad"
    v-nly-toggle.collapseTest
  >
    我是一个非手风琴演示
  </nly-sidebar-nav-item>
  <nly-collapse id="collapseTest">
    我是一个非手风琴演示，我跟他们都没关系
  </nly-collapse>
</nly-sidebar-nav>

<!-- nly-collapse-noclass.name -->
<!-- nly-accordion.vue -->
```

**注意:**

- 在使用手风琴模式的时候,如果您需要使得屏幕阅读用户能够无障碍阅读，请保证 `<nly-collapse>` 和手风琴开关按钮组件都在同一个设有 `role="tablist"` 的元素中,并且给每个折叠板开关添加一个 `role="tab"`
- 在使用手风琴模式的时候,如果使用 `v-model` 来控制 `<nly-collapse>`,请不要将所有折叠板的`v-model` 和 `visible` 指向同一个变量
- 在手风琴模式中,请确认初始或者同时只有一个折叠板的 `visible` 或者 `v-model` 为 true,否则会造成死循环，导致页面无法渲染，卡死浏览器。

## 根据者的状态来显示和隐藏元素

使用 `v-nly-toggle` 指令时，`<nly-collapse>` 折叠板关闭的时候,绑定指令的元素会添加一个 class `collapsed`.折叠板展开的时候，这个 class 会移除。
可以根据这个 css 来写对应的 css 来显示或者隐藏，或者旋转某些元素，比如开关 icon 等。

**例子:**

```html
<template>
  <div>
    <nly-button v-nly-toggle.my-collapse variant="info">
      <span class="when-opened">Close</span>
      <span class="when-closed">Open</span> My Collapse
    </nly-button>
    <nly-collapse id="my-collapse">
      <nly-card>
        <nly-card-body>
          演示
        </nly-card-body>
      </nly-card>
    </nly-collapse>
  </div>
</template>

<style>
  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed {
    display: none;
  }
</style>
```

## 全局 \$root 事件

使用$root事件来发送和监听 `<nly-collapse>` 组件的展开和收起状态。 有关 $root 事件详细请查看[Vue 文档](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-the-Root-Instance).

### 使用 \$root 来监听折叠板折叠状态

这是一个监听折叠板展开状态的 js 例子

```js
export default {
  mounted() {
    this.$root.$on('nlya::collapse::state', (collapseId, isJustShown) => {
      console.log('collapseId:', collapseId)
      console.log('isJustShown:', isJustShown)
    })
  },
}
```

`collapseId` 是状态变化的折叠板的 id; `isJustShown` 返回的对应折叠板的展开状态，返回 true 或者 false

### 通过 \$root 控制折叠板展开状态

通过传递 id 和 `nlya::toggle::collapse`事件来控制对应 id 的折叠板状态

```js
this.$root.$emit('nlya::toggle::collapse', 'my-collapse-id')
```

## 可选范围默认插槽

<span class="badge badge-info small">New 0.4.0</span>

> 具体请查看下面 `slots` 表格

## 辅助技术

`v-nly-toggle` 会自动添加 ARIA attributes `aria-controls` 和 `aria-expanded` 到被绑定的组件上，被绑定的组件的 aria-expanded 属性将会反应对应的 `<nly-collapse>` 组件的展开状态，`aria-controls`会关联到对应的 `<nly-collapse>` 组件的 id

如果使用 `v-model` 来代替指令 `v-nly-toggle`，需要手动添加独赢的辅助属性。

在使用手风琴模式的时候,如果您需要使得屏幕阅读用户能够无障碍阅读，请保证 `<nly-collapse>` 和手风琴开关按钮组件都在同一个设有 `role="tablist"` 的元素中,并且给每个折叠板开关添加一个 `role="tab"`

**注意:**

- `<nly-collapse>` 组件有时候动画会失效，请使用 `<nly-collapse-noclass>` 代替
