# Input Group

```html
<div>
  <nly-input-group prepend="@" append=".00">
    <nly-form-input> </nly-form-input>
  </nly-input-group>

  <nly-input-group class="mt-3">
    <template v-slot:append>
      <nly-input-group-text
        ><strong class="text-danger">!</strong></nly-input-group-text
      >
    </template>
    <nly-form-input></nly-form-input>
  </nly-input-group>

  <nly-input-group prepend="Username" class="mt-3">
    <nly-form-input></nly-form-input>
    <nly-input-group-append>
      <nly-button variant="outlineSuccess">Button</nly-button>
      <nly-button variant="info">Button</nly-button>
    </nly-input-group-append>
  </nly-input-group>
</div>

<!-- input-group.name -->
<!-- nly-input-group.vue -->
```

## 总览

`nly-input-group` 是输入框组的容器，支持以下几种使用方式

- 可以使用 props `prepend` 和 `append` 来 添加 `nly-input-group-prepend` 和 `nly-input-group-append`，传入的值为这 2 个组件的文本内容

- 可以使用插槽`prepend` 和 `append`，传入的元素会渲染到`nly-input-group-prepend` 和 `nly-input-group-append` 组件中

- 可以使用嵌套子组件：`nly-input-group-prepend` ， `nly-input-group-append`，`nly-input-group-text` 和 `nly-input-group-add`

### props `prepend` 和 `append`

使用 props `prepend` 和 `append` 会渲染出 `nly-input-group-prepend` 和 `nly-input-group-append` 2 个组件，且嵌套一个 `nly0input-group-text` 组件

```html
<div>
  <nly-input-group prepend="@" append=".00">
    <nly-form-input></nly-form-input>
  </nly-input-group>

  <nly-input-group prepend="0" append="100" class="mt-3">
    <nly-form-input type="range" min="0" max="100"></nly-form-input>
  </nly-input-group>
</div>

<!-- prepend-append.name -->
<!-- nly-input-group.vue -->
```

### 插槽

如果您想自定义一些拓展，可以使用插槽 `prepend` 和 `append`，分别会渲染嵌套在`nly-input-group-prepend` 和 `nly-input-group-append` 中的元素

```html
<div>
  <nly-input-group>
    <template v-slot:prepend>
      <nly-input-group-text>
        <nly-icon icon="fas fa-envelope" />
      </nly-input-group-text>
    </template>
    <nly-form-input></nly-form-input>

    <template v-slot:append>
      <nly-dropdown text="Dropdown" variant="success">
        <nly-dropdown-item>Action A</nly-dropdown-item>
        <nly-dropdown-item>Action B</nly-dropdown-item>
      </nly-dropdown>
    </template>
  </nly-input-group>
</div>

<!-- slot.name -->
<!-- nly-input-group.vue -->
```

### 使用子组件

可以使用组件嵌套在 `nly-input-group` 中

```html
<nly-input-group>
  <nly-input-group-prepend>
    <nly-input-group-text>
      <nly-icon icon="fas fa-envelope" />
    </nly-input-group-text>
    <nly-input-group-text>
      <nly-icon icon="fas fa-dollar-sign" />
    </nly-input-group-text>
  </nly-input-group-prepend>

  <nly-form-input type="color" value="#ffc107"></nly-form-input>

  <nly-input-group-append>
    <nly-input-group-text>
      <nly-icon icon="fas fa-check" />
    </nly-input-group-text>
    <nly-button variant="outlineSecondary">Button</nly-button>
  </nly-input-group-append>
</nly-input-group>

<!-- component.name -->
<!-- nly-input-group.vue -->
```

## 多个输入框

`nly-input-group` 多个输入框支持放入 `prepend` 和 `append`

### 复选框和单选框

如果 `prepend` 和 `append` 中嵌套的组件不是 文本类型组件，请不要嵌套 `nly-input-group-text`, 比如嵌套 `nly-button`

```html
<div>
  <nly-input-group class="mb-2">
    <nly-input-group-prepend is-text>
      <input type="checkbox" aria-label="Checkbox for following text input" />
    </nly-input-group-prepend>
    <nly-form-input aria-label="Text input with checkbox"></nly-form-input>
  </nly-input-group>

  <nly-input-group class="mb-2">
    <nly-input-group-prepend is-text>
      <input type="radio" aria-label="Radio for following text input" />
    </nly-input-group-prepend>
    <nly-form-input aria-label="Text input with radio input"></nly-form-input>
  </nly-input-group>

  <nly-input-group>
    <nly-input-group-prepend is-text>
      <nly-switch />
    </nly-input-group-prepend>
    <nly-form-input aria-label="Text input with switch input"></nly-form-input>
    <nly-input-group-append is-text>
      <nly-bootstrap-switch size="xs" />
    </nly-input-group-append>
  </nly-input-group>
</div>

<!-- inputs.name -->
<!-- nly-input-group.vue -->
```

### 多个输入框

```html
<nly-input-group>
  <nly-input-group-prepend is-text>
    <nly-switch />
  </nly-input-group-prepend>
  <nly-form-input aria-label="Text input with switch input"></nly-form-input>
  <nly-form-input aria-label="Text input with switch input"></nly-form-input>
</nly-input-group>

<!-- inputs.name -->
<!-- nly-input-group.vue -->
```

## 多个拓展

多个拓展可以嵌套多个 `nly-input-group-text` 或者多个 `ly-input-group-prepend`，请注意刺猬差别 prop `is-text`

```html
<nly-input-group>
  <nly-input-group-prepend>
    <nly-input-group-text>
      <nly-icon icon="fas fa-envelope" />
    </nly-input-group-text>
    <nly-input-group-text>
      <nly-icon icon="fas fa-dollar-sign" />
    </nly-input-group-text>
  </nly-input-group-prepend>

  <nly-form-input type="color" value="#ffc107"></nly-form-input>

  <nly-input-group-append>
    <nly-input-group-text>
      <nly-icon icon="fas fa-check" />
    </nly-input-group-text>
    <nly-button variant="outlineSecondary">Button</nly-button>
  </nly-input-group-append>
</nly-input-group>

<!-- 多个.name -->
<!-- nly-input-group.vue -->
```

```html
<nly-input-group>
  <nly-input-group-prepend is-text>
    <nly-icon icon="fas fa-envelope" />
  </nly-input-group-prepend>
  <nly-input-group-prepend>
    <nly-input-group-text>
      <nly-icon icon="fas fa-dollar-sign" />
    </nly-input-group-text>
  </nly-input-group-prepend>

  <nly-input-group-prepend is-text>
    <nly-switch />
  </nly-input-group-prepend>

  <nly-form-input type="color" value="#ffc107"></nly-form-input>

  <nly-input-group-append>
    <nly-input-group-text>
      <nly-icon icon="fas fa-check" />
    </nly-input-group-text>
    <nly-button variant="outlineSecondary">Button</nly-button>
  </nly-input-group-append>
</nly-input-group>

<!-- 多个.name -->
<!-- nly-input-group.vue -->
```

## 嵌入下拉菜单

```html
<div>
  <nly-input-group>
    <template v-slot:prepend>
      <nly-dropdown text="Dropdown" variant="info">
        <nly-dropdown-item>Action A</nly-dropdown-item>
        <nly-dropdown-item>Action B</nly-dropdown-item>
      </nly-dropdown>
    </template>

    <nly-form-input></nly-form-input>

    <template v-slot:append>
      <nly-dropdown
        text="Dropdown"
        variant="outlineSecondary"
        v-for="i in 2"
        :key="i"
      >
        <nly-dropdown-item>Action C</nly-dropdown-item>
        <nly-dropdown-item>Action D</nly-dropdown-item>
      </nly-dropdown>
    </template>
  </nly-input-group>
</div>

<!-- 下拉菜单.name -->
<!-- nly-input-group.vue -->
```

## 大小

可以设置 prop `size` 来控制大小

```html
<div>
  <nly-input-group
    v-for="size in ['sm','','lg']"
    :key="size"
    :size="size"
    class="mb-3"
  >
    <nly-input-group-prepend is-text>
      <nly-icon icon="fas fa-envelope" />
    </nly-input-group-prepend>
    <nly-form-input></nly-form-input>
    <nly-input-group-append>
      <nly-button size="sm" text="Button" variant="success">Button</nly-button>
    </nly-input-group-append>
  </nly-input-group>
</div>
<!-- size.name -->
<!-- nly-input-group.vue -->
```
