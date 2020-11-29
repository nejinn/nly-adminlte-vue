# Popover

> Popover 类似于 '<nly-tooltip>', 使用 '<nly-popover>' 组件和 'v-nly-popover' 指令可以给任何元素和组件提供消息提示

```html
<div class="text-center my-3">
  <nly-button
    v-nly-popover.hover.top="'指令 popover 的内容'"
    title="popover 标题"
  >
    悬浮一下，你会发现奇迹
  </nly-button>

  <nly-button id="popover-target-1">
    悬浮一下，你会发现奇迹
  </nly-button>
  <nly-popover target="popover-target-1" triggers="hover" placement="top">
    <template #title>popover 标题</template>
    我是组件 popover <b>文本</b> 内容!
  </nly-popover>
</div>

<!-- popover.name -->
<!-- popover.vue -->
```

## 总览

- Popover 使用第三方 [Popover.js](https://popper.js.org/) 进行定位

- Popover 需要使用自定义 css `nly-adminlte-vue.css` 才会有式样

- 设置 `container` prop 为 `null`（即默认值，默认情况下， `nly-popover` 是渲染到 `<body>` 下面的）来避免在一些复杂组件中出现渲染 bug （比如 `input-group`, `button-group` 等）。可以设置 `container` 为指定的元素， `nly-popover` 会渲染到指定的元素中。

- `nly-popover` 组件或者指令 `v-nly-popover` 如果是绑定在隐藏的元素上会失效

- 在 `disabled` 的元素上绑定 `nly-popover` 组件或者指令 `v-nly-popover`， 必须在其父元素上触发显示和隐藏

## target

`target` prop 指定了切换 `<nly-popover>` 显示隐藏的元素和组件，比如一个按钮的 id 属性为 `popover-test`， 则给 `nly-popover` 传入 `target='popover-test'`，那么这个 popover 的显示和隐藏便由这个按钮控制

`target` 接收的值可以是以下几种:

- 普通 `HTMLElement` 或者 `SVGElement` 标签的 id 或者组件的 id。这时候传入应该是一个字符串

- 普通 `HTMLElement` 或者 `SVGElement` 的 `ref` 属性 （`this.$refs.refName`）

- 组件的 `ref` 属性 （`this.$refs.refName`）

- 一个可以返回普通 `HTMLElement` 或者 `SVGElement` 的函数

**注意：**

- `target` 指向的元素或着组件必须在 `<nly-popover>` 挂载之前出现在 `document` 中，如果在 `nly-popover` 挂载的时候， `target` 指向的元素或着组件没有在 `document` 中， `popover` 会失效

- 请确保 `nly-popover` 挂载的时候能找得到 `target` 指向的元素或着组件。

- `target` 传入函数的时候，也请注意以上两条

- `HTMLElement` 是指普通的 `html` 标签， 比如 `<div>`, `<a>` 等

- `SVGElement` 是指 `<svg>` 标签

## 定位（Positioning）

`popover` 的使用 `relative` 定位， 可选位置有: `top`, `topleft`, `topright`, `right`, `righttop`,
`rightbottom`, `bottom`, `bottomleft`, `bottomright`, `left`, `lefttop`, `leftbottom`

<div class="bd-example bd-example-popover-static">
  <div class="popover nly-popover bs-popover-top bs-popover-top-docs">
    <div class="arrow" style="left: calc(50% - 8px)"></div>
    <h3 class="popover-header">Popover top</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-top bs-popover-top-docs">
    <div class="arrow" style="right: 0px"></div>
    <h3 class="popover-header">Popover topleft</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-top bs-popover-top-docs">
    <div class="arrow" style="left: 0px"></div>
    <h3 class="popover-header">Popover topright</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>

  <div class="popover nly-popover bs-popover-right bs-popover-right-docs">
    <div class="arrow" style="top: calc(50% - 4px)"></div>
    <h3 class="popover-header">Popover right</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-right bs-popover-right-docs">
    <div class="arrow" style="bottom: 0px"></div>
    <h3 class="popover-header">Popover righttop</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-right bs-popover-right-docs">
    <div class="arrow" style="top: 0px"></div>
    <h3 class="popover-header">Popover rightbottom</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>

  <div class="popover nly-popover bs-popover-bottom bs-popover-bottom-docs">
    <div class="arrow" style="left: calc(50% - 8px)"></div>
    <h3 class="popover-header">Popover bottom</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-bottom bs-popover-bottom-docs">
    <div class="arrow" style="right: 0px"></div>
    <h3 class="popover-header">Popover bottomleft</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-bottom bs-popover-bottom-docs">
    <div class="arrow" style="left: 0px"></div>
    <h3 class="popover-header">Popover bottomright</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>

  <div class="popover nly-popover bs-popover-left bs-popover-left-docs">
    <div class="arrow" style="top: calc(50% - 4px)"></div>
    <h3 class="popover-header">Popover left</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-left bs-popover-left-docs">
    <div class="arrow" style="bottom: 0px"></div>
    <h3 class="popover-header">Popover lefttop</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>
  <div class="popover nly-popover bs-popover-left bs-popover-left-docs">
    <div class="arrow" style="top: 0px"></div>
    <h3 class="popover-header">Popover leftbottom</h3>
    <div class="popover-body">
      吾三岁识万字，十岁七步成诗，年幼而天下闻名，始上山学艺，八年间艺成下山，一入汪洋深似海，而今满头白发似秃顶
    </div>
  </div>

  <div class="clearfix"></div>
</div>

点击 [指令 popover](#) 查看更多定位 Demo

## 切换状态（Triggers）

`popover` 可以使用 `click`, `hover`, `focus` 来切换可见状态。
