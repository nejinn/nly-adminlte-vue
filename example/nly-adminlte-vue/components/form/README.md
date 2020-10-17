# form

> `nly-form` 是一个表单控件，会为置于其中的其他表单控件提供一些辅助型功能，比如布局，验证等等。

## 简介

确保置于 `nly-form` 中的 `nly-form-input` 设置正确的 prop `type`，以便 `nly-form` 可以直接控制验证信息

```html
<template>
  <div>
    <nly-form @submit="onSubmit" @reset="onReset" v-if="show">
      <nly-form-group
        id="input-group-1"
        label="邮件:"
        label-for="input-1"
        description="请输入您的邮件地址"
      >
        <nly-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></nly-form-input>
      </nly-form-group>

      <nly-form-group id="input-group-2" label="姓名:" label-for="input-2">
        <nly-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></nly-form-input>
      </nly-form-group>

      <nly-form-group id="input-group-3" label="Food:" label-for="input-3">
        <nly-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></nly-form-select>
      </nly-form-group>

      <nly-button type="submit" variant="primary">Submit</nly-button>
      <nly-button type="reset" variant="danger">Reset</nly-button>
    </nly-form>
    <nly-card class="mt-3" header-variant="info" header-outline>
      <nly-card-header>
        输入结果
      </nly-card-header>
      <nly-card-body>
        <pre class="m-0">{{ form }}</pre>
      </nly-card-body>
    </nly-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
        },
        foods: [
          { text: '请选择', value: null },
          '作者帅',
          '作者屌大',
          '作者大佬',
          '牛逼',
        ],
        show: true,
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    },
  }
</script>

<!-- 简介 .name -->
<!-- form.vue -->
```

## inline 水平表格

使用 `inline` prop 来使得表单内的输入框，标签，按钮等处于水平，您可能需要设置 `mr-*, ml-*` 等自带的 css 类来控制表单组件的间距

```html
<div>
  <nly-form inline>
    <label class="sr-only" for="inline-form-input-name">名字</label>
    <nly-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe"
    ></nly-input>

    <label class="sr-only" for="inline-form-input-username">用户名</label>
    <nly-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
      <nly-input
        id="inline-form-input-username"
        placeholder="Username"
      ></nly-input>
    </nly-input-group>

    <nly-button variant="primary">保存</nly-button>
  </nly-form>
</div>

<!-- inline.name -->
<!-- inline.vue -->
```

下拉选择框同样支持

```html
<div>
  <nly-form inline>
    <label class="mr-sm-2" for="inline-form-custom-select-pref"
      >Preference</label
    >
    <nly-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></nly-form-select>
    <nly-button variant="primary">保存</nly-button>
  </nly-form>
</div>

<!-- inline.name -->
<!-- inline.vue -->
```

## 屏幕阅读器隐藏标签

如果您可以屏幕阅读器上的效果，您可以使用 `.sr-only` 来在普通屏幕上隐藏标签。您还可以使用 `aria-label`, `aria-labelledby` 或者 `title` attrs 来代替 `.sr-only`。如果这些属性都没有，屏幕阅读器会自动关联 `placeholder` 来代替 label 。

## 表单简介

`nly-form-text` 组件可以为表单提供一简介提示描述文字， 默认颜色是 `muted`, 默认标签是 `small`

```html
<div>
  <nly-form @submit.stop.prevent>
    <label for="text-password">Password</label>
    <nly-input
      type="password"
      id="text-password"
      aria-describedby="password-help-block"
    ></nly-input>
    <nly-form-text id="password-help-block" text-variant="yellow">
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </nly-form-text>
  </nly-form>
</div>

<!-- form-text.name -->
<!-- form-text.vue -->
```

## valid feedback 验证提示

`nly-form-feedback` 会给对应的表单组件提供一个彩色的文本信息来说明表单组件所处的状态，会渲染在表单组件的后面，并且是同一级。 如果需要强制显示对应的 `feedback`， 可以设置 prop `force-show` 为 true 或者设置 `state` prop 为 `invalid`, `warning`, `valid`, `novalid` ，也可以给父元素添加 `.was-validated` css 类.

`nly-input-group` 除外，因为 `adminlte 3` 的 `input-group` 本身并不支持 `feedback` , `nly-input-group` 最外层封装了一层 `<div>` 才使得 `input-group` 支持 `feedback`， **[详情](/docs/components/input-group)**

```html
<template>
  <div>
    <nly-form @submit.stop.prevent>
      <label for="feedback-user">User ID</label>
      <nly-input
        v-model="userId"
        :valid="validation"
        id="feedback-user"
      ></nly-input>
      <nly-form-feedback state="invalid">
        Your user ID must be 5-12 characters long.
      </nly-form-feedback>
      <nly-form-feedback state="valid">
        Looks Good.
      </nly-form-feedback>
    </nly-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userId: '',
      }
    },
    computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
          ? 'valid'
          : 'invalid'
      },
    },
  }
</script>

<!-- valid.name -->
<!-- valid.vue -->
```

如果使用 `nly-form-feedback`，需要同级元素设置 `.is-valid`, `.is-invalid`, `.is-warning` css类, prop `state` 的取值请**注意**：

- `valid` 代表正确验证提示

- `invalid` 代表错误验证提示

- `warning` 代表警告提示

## datalist

如果浏览器支持 `<datalist>`， `nly-form-datalist` 组件会创建一个 `<datalist>` 元素来为表单控件提供输入选项。

可以使用 `options` prop 给 `nly-form-datalist` 组件提供下拉选项，也可以直接插入 `<option>` 标签给 `nly-form-datalist` 提供下拉选项

```html
<template>
  <label for="input-with-list">Input with datalist</label>
  <nly-form-input list="input-list" id="input-with-list"></nly-form-input>
  <nly-form-datalist id="input-list" :options="options"></nly-form-datalist>
</template>

<script>
  export default {
    data() {
      return {
        options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange'],
      }
    },
  }
</script>

<!-- datalist.name -->
<!-- datalist.vue -->
```
