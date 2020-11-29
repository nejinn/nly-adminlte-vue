# Tooltip

> 一个可以通过 `<nly-tooltip>` 组件或者 `v-nly-tooltip` 指令把提示框插组件的插件

```HTML
<div class="text-center my-3">
  <nly-button v-nly-tooltip.hover title="`v-nly-tooltip` 指令提示框">
    移入鼠标查看效果
  </nly-button>

  <nly-button id="tooltip-target-1">
    移入鼠标查看效果
  </b-button>
  <nly-tooltip target="tooltip-target-1" triggers="hover">
    提示框 <b>组件</b>
  </b-tooltip>
</div>

<!-- tooltip.name -->
<!-- tooltip.vue -->
```
