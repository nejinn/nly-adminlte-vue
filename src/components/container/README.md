# Container

> 一个提供了宽度的居中布局容器，

## 总览

`container` 是 `NlyAdminlteVue` 的基本布局组件，在一定程度是可以和 `content` 布局交换使用。

```html
<nly-container>
  <div style="background-color:#000;height:70px;color:#fff;text-align: center;">
    <p>
      container
    </p>
  </div>
</nly-container>

<!-- 总览.name -->
<!-- nly-container.vue -->
```

## fluid

一边情况下，`container` 组件宽度基本是可以达到视觉上的填充整个屏幕。但是在超级大屏的情况下，比如大于 1280 的情况下，
`container`组件就无法达到填充满整个屏幕的效果，这时候可以使用 `prop fluid` 来使得无论在哪种情况下都能达到`100%`宽度。

``` html
<nly-container fluid>
  <div
    style="background-color:#007bff;height:70px;color:#fff;text-align: center;"
  >
    <p>
      container fluid
    </p>
  </div>
</nly-container>

<!-- fluid.name -->
<!-- nly-container.vue -->
```

## tag

可以给 `container` 设置不同的tag以满足不同类型的布局。

``` html
<nly-container tag="li">
  <div
    style="background-color:#28a745;height:70px;color:#fff;text-align: center;"
  >
    <p>
      container tag=li
    </p>
  </div>
</nly-container>

<!-- tag.name -->
<!-- nly-container.vue -->
```
