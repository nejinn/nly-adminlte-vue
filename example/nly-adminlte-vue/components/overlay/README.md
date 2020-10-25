# Overlay

> NlyAdminlteVue 自定义的罩层组件 `nly-overlay` 用来在视觉上挡住和遮住组件或元素，用来展示组件或者
> 元素的一种状态，比如创建，更新，加载，警告等等。

## Overview

`<nly-overlay>` can be used to obscure almost anything. [Example use cases](#use-case-examples) would
be forms, tables, delete confirmation dialogs, or anywhere you need to signal that the application
is busy performing a background task, to signal that a certain component is unavailable, or to
provide additional context to the end user.

`<nly-overlay>` can be used to overlay (wrap) an element or component (the default behaviour), or can
be placed as a descendant of a `position: relative` element
([non-wrapping mode](#non-wrapping-mode)).

The overlay visibility is controlled via the `show` prop. By default the overlay is _not_ shown.

<div class="alert alert-info">
  <p class="mb-0">
    Note that this component only <em>visually obscures</em> its content (or the page). Refer to the
    <a href="#accessibility" class="alert-link">Accessibility section</a> below for additional
    accessibility details and concerns.
  </p>
</div>

**Default wrapping mode example:**

```html
<template>
  <div>
    <nly-overlay :show="show" rounded="sm">
      <nly-card title="Card with overlay" :aria-hidden="show ? 'true' : null">
        <nly-card-body>
          <nly-card-text
            >Laborum consequat non elit enim exercitation cillum.</nly-card-text
          >
          <nly-card-text>Click the button to toggle the overlay:</nly-card-text>
          <nly-button :disabled="show" variant="primary" @click="show = true">
            Show overlay
          </nly-button>
        </nly-card-body>
      </nly-card>
    </nly-overlay>
    <nly-button class="mt-3" @click="show = !show">Toggle overlay</nly-button>
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
