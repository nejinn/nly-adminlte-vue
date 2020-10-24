# modal

> `v-nly-modal` 可以绑定到可点击的元素上来显示和隐藏对应 id 的 modal

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
