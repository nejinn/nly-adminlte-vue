# Form tags

> 轻表单标签是量级自定义外观表单输入控件，可以验证重复值等

## 基本用法

`nly-form-tags` 默认会删除所输入的 tags 值的前后空格，且不允许重复值出现。

可以通过单击添加按钮、按 <kbd>ENTER</kbd> 键或输入框失去焦距来添加标记。添加按钮只在用户输入新的值时出现。

可以通过设置 `no-add-on-enter` prop 来禁用按 <kbd>ENTER</kbd> 键添加 tag

也可以设置 `add-on-change` prop 来开启失去焦距触发 change 事件来添加 tag

```html
<template>
  <div>
    <label for="tags-basic">按 ENTER 键添加新tag</label>
    <nly-form-tags input-id="tags-basic" v-model="value"></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "不多"]
      };
    }
  };
</script>

<!-- 基本用法.name -->
<!-- basic use .vue -->
```

### 使用分隔符创建 tag

可以设置 prop `separator`，当输入框输入对应的设置的分隔符的时候，会自动触发 change 事件来添加 tag

只有一个分隔符的时候可以设置 `separator=','`； 如果有多个分隔符，可以设置 `separator=',;'` 或者 `separator='[',',';',':']'`

```html
<template>
  <div>
    <label for="tags-separators">使用分隔符自动生成 tag</label>
    <nly-form-tags
      input-id="tags-separators"
      v-model="value"
      separator=" ,;"
      placeholder="使用分隔符自动生成 tag"
      no-add-on-enter
    ></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "不多"]
      };
    }
  };
</script>

<!-- 分隔符.name -->
<!-- separators .vue -->
```

### 使用后退键或者删除键删除最后一个 tag

设置 `remove-on-delete` prop 开启按 <kbd>Backspace</kbd> 或者 <kbd>Del</kbd> 删除最后一个 tag

```html
<template>
  <div>
    <label for="tags-remove-on-delete">按后退键或者删除键删除最后一个tag</label>
    <nly-form-tags
      input-id="tags-remove-on-delete"
      :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
      v-model="value"
      separator=" "
      placeholder="按后退键或者删除键删除最后一个tag"
      remove-on-delete
      no-add-on-enter
    ></nly-form-tags>
    <nly-form-text id="tags-remove-on-delete-help" class="mt-2">
      按 <kbd>Backspace</kbd> 或者 <kbd>Del</kbd> 删除最后一个 tag
    </nly-form-text>
    <p>值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "还好", "不错"]
      };
    }
  };
</script>

<!-- 后退键删除 tag .name -->
<!-- Backspace.vue -->
```

## 式样设置

tag 式样支持以下属性设置

| Prop                  | 描述                                                |
| --------------------- | --------------------------------------------------- |
| `tag-pills`           | 圆形 tag                                            |
| `tag-variant`         | tag 主题颜色                                        |
| `size`                | tag 大小. 可选 'sm', 'md' (默认), 或者 'lg'         |
| `placeholder`         | 默认提示文本                                        |
| `state`               | 状态. 可选 invalid, novalid, valid, warning         |
| `disabled`            | 设置 tag 为禁用状态                                 |
| `bg-variant`          | tag 背景色                                          |
| `bg-gradient-variant` | tag 渐变背景色                                      |
| `tag-outline`         | tag 外边框模式，只有设置 tag-variant 的时候有效     |
| `tag-dashed`          | tag 外边框虚线模式，只有设置 tag-variant 的时候有效 |

### 主题颜色

`tag-variant` prop 可以设置主题颜色， 可选 `primary`， `secondary`， `success`， `info`， `warning`，`danger`， `light`， `dark`

```html
<template>
  <div>
    <label for="tags-pills">输入 tags</label>
    <nly-form-tags
      input-id="tags-pills"
      v-model="value"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="输入"
    ></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "还不错", "你是好人"]
      };
    }
  };
</script>

<!-- 式样.name -->
<!-- style.vue -->
```

### 外边框

设置 `tag-variant` 的时候可以设置 `tag-outline` 调整为外边框式样

在外边框式样下， 设置 `tag-dashed` 可以调整为虚线外边框式样

```html
<template>
  <div>
    <label for="tags-pills">输入 tags</label>
    <nly-form-tags
      input-id="tags-pills"
      v-model="value"
      tag-variant="primary"
      tag-pills
      tag-outline
      size="lg"
      separator=" "
      placeholder="输入"
    ></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "还不错", "你是好人"]
      };
    }
  };
</script>

<!-- 式样.name -->
<!-- style.vue -->
```

```html
<template>
  <div>
    <label for="tags-pills">输入 tags</label>
    <nly-form-tags
      input-id="tags-pills"
      v-model="value"
      tag-variant="primary"
      tag-pills
      tag-outline
      tag-dashed
      size="lg"
      separator=" "
      placeholder="输入"
    ></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "还不错", "你是好人"]
      };
    }
  };
</script>

<!-- 式样.name -->
<!-- style.vue -->
```

### 背景色

设置 `bg-variant` prop 可以设置 tag 背景色, 可选 `primary`， `secondary`， `success`， `info`， `warning`， `danger`， `light`， `dark`， `lightblue`，
`navy`，`olive`， `lime`， `fuchsia`， `maroon`， `blue`， `indigo`， `purple`， `pink`， `red`， `orange`， `yellow`， `green`， `teal`， `cyan`， `white`， `gray`， `graydark`

```html
<template>
  <div>
    <label for="tags-pills">输入 tags</label>
    <nly-form-tags
      input-id="tags-pills"
      v-model="value"
      bg-variant="fuchsia"
      tag-pills
      separator=" "
      placeholder="输入"
    ></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "还不错", "你是好人"]
      };
    }
  };
</script>

<!-- 式样.name -->
<!-- style.vue -->
```

### 渐变背景色

设置 `bg-gradient-variant` prop 可以设置 tag 背景色, 可选 `primary`， `secondary`， `success`， `info`， `warning`， `danger`， `light`， `dark`， `lightblue`，
`navy`，`olive`， `lime`， `fuchsia`， `maroon`， `blue`， `indigo`， `purple`， `pink`， `red`， `orange`， `yellow`， `green`， `teal`， `cyan`， `white`， `gray`， `graydark`

```html
<template>
  <div>
    <label for="tags-pills">输入 tags</label>
    <nly-form-tags
      input-id="tags-pills"
      v-model="value"
      bg-gradient-variant="fuchsia"
      tag-pills
      separator=" "
      placeholder="输入"
    ></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ["可以", "还不错", "你是好人"]
      };
    }
  };
</script>

<!-- 式样.name -->
<!-- style.vue -->
```

## 跟随对应 form 提交

设置 prop `name` 会使表单标签跟岁 `name` 对应的 `<form>` 一起提交数据， 默认情况下， 表单标签不会跟随 `<form>` 一起提交

设置 prop `name` 之后， `<nly-form-tags>` 的每一个 `tag` 都会生成一个隐藏的 `input` 输入框， 并给 `input` 框设置 `name` 属性

## 验证状态

```html
<template>
  <div>
    <nly-form-group
      label="Tags validation"
      label-for="tags-validation"
      :valid="state"
      invalid-feedback="请输入至少3个，最多8个tag"
      description="每一个tag都应该是小写，且最少3个长度，最多5个长度"
    >
      <nly-form-tags
        input-id="tags-validation"
        v-model="tags"
        :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
        :tag-validator="tagValidator"
        :valid="state"
        separator=" "
      ></nly-form-tags>
    </nly-form-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [],
        dirty: false
      };
    },
    computed: {
      state() {
        if (this.dirty) {
          if (this.tags.length < 3) {
            return "invalid";
          } else if (this.tags.length > 8) {
            return "invalid";
          } else {
            return "valid";
          }
        } else {
          return "novalid";
        }
      }
    },
    watch: {
      tags(newValue, oldValue) {
        this.dirty = true;
      }
    },
    methods: {
      tagValidator(tag) {
        return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6;
      }
    }
  };
</script>

<!-- 验证状态.name -->
<!-- valid.vue -->
```

### 获取新增值，非法值，重复值

`tag-state` 事件会返回正在输入的 tag 值， 未通过验证的 tag 值和重复的 tag 值

- `validTags` 新增的通过验证的值
- `invalidTags` 未通过验证的新增值
- `duplicateTags` 重复的新增值

这 3 个返回的都是数组

`tag-state` 事件只有在输入或者按 <bdk>Enter</bdk> 或者点击增加按钮或者使用分隔符自动添加 tag 的时候会触发，如果输入框中没有值的时候，这些返回值通常都是空数组

```html
<template>
  <div>
    <label for="tags-state-event">输入 tags</label>
    <nly-form-tags
      input-id="tags-state-event"
      v-model="tags"
      :tag-validator="validator"
      placeholder="输入 tags"
      separator=" "
      @tag-state="onTagState"
    ></nly-form-tags>
    <p class="mt-2">Tags: {{ tags }}</p>
    <p>返回值:</p>
    <ul>
      <li>validTags: {{ validTags }}</li>
      <li>invalidTags: {{ invalidTags }}</li>
      <li>duplicateTags: {{ duplicateTags }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [],
        validTags: [],
        invalidTags: [],
        duplicateTags: []
      };
    },
    methods: {
      onTagState(valid, invalid, duplicate) {
        this.validTags = valid;
        this.invalidTags = invalid;
        this.duplicateTags = duplicate;
      },
      validator(tag) {
        return tag.length > 2 && tag.length < 6;
      }
    }
  };
</script>

<!-- tags-state.name -->
<!-- tags-state.vue -->
```

## 限制 tags 数量

设置 `limit` prop 之后可以限制 tag 的最大数量，这时候输入超过最大数量 tag 的时候，会出现提示语，如果需要自定义提示语可以设置 prop `limit-tags-text`。限制最大数量 tag 的时候，tag 数量达到最大时， 输入框无法再添加更多的 tag， 只能通过修改 v-model 值来修改 tag 的数量限制。如果不想显示数量达到最大的提示语，可以设置 `limit-tags-text` 为 `""` 或者 `null`

```html
<template>
  <div>
    <label for="tags-limit">输入 tags</label>
    <nly-form-tags
      input-id="tags-limit"
      v-model="value"
      :limit="limit"
      remove-on-delete
    ></nly-form-tags>
    <p class="mt-2">值: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        limit: 5
      };
    }
  };
</script>

<!-- limit.name -->
<!-- limit.vue -->
```

## 插槽自定义渲染

可以使用插槽来自定义渲染更美观的插槽

### 插槽 props
