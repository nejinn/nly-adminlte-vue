# Button

> 具有 NlyAdminlteVue 主题特征的按钮

## 总览

nly-button 组件因为有 3 种类型的背景色，所以默认是没有颜色的，按钮组件支持原生点击事件
接受所有 `nly-link` props, 会渲染成<a>标签按钮, 用 `role='button'` 来实现按钮特征

```html
<nly-button>默认</nly-button>
<nly-button variant="dark">dark</nly-button>
<nly-button variant="primary">primary</nly-button>
<nly-button variant="primary">
  <nly-icon
    icon="nlyfont nly-icon-sr-chuangxinfuwu-fill
-icon-outlet"
  />
</nly-button>
<nly-button variant="info">
  <nly-icon
    icon="nlyfont nly-icon-sr-chuangxinfuwu-fill
-icon-outlet"
  />
</nly-button>
<nly-button variant="outlineDanger">
  <nly-icon
    icon="nlyfont nly-icon-sr-chuangxinfuwu-fill
-icon-outlet"
  />
</nly-button>
<nly-button variant="success">
  <nly-icon
    icon="nlyfont nly-icon-sr-chuangxinfuwu-fill
-icon-outlet"
  />
</nly-button>
<nly-button variant="secondary">
  <nly-icon
    icon="nlyfont nly-icon-sr-chuangxinfuwu-fill
-icon-outlet"
  />
</nly-button>

<!-- 总览.name -->
<!-- nly-button.vue -->
```

## variant

`btn-*` 类颜色，支持 adminlte3 的基础主题颜色，支持边框颜色

```html
<div>
  <nly-button variant="default">default</nly-button>
  <nly-button variant="dark">dark</nly-button>
  <nly-button variant="light">light</nly-button>
  <nly-button variant="primary">primary</nly-button>
  <nly-button variant="secondary">secondary</nly-button>
  <nly-button variant="success">success</nly-button>
  <nly-button variant="info">info</nly-button>
  <nly-button variant="warning">warning</nly-button>
  <nly-button variant="danger">danger</nly-button>
</div>

<div class="mt-2">
  <nly-button variant="outlineDark">outlineDark</nly-button>
  <nly-button variant="outlineLight">outlineLight</nly-button>
  <nly-button variant="outlinePrimary">outlinePrimary</nly-button>
  <nly-button variant="outlineSecondary">outlineSecondary</nly-button>
  <nly-button variant="outlineSuccess">outlineSuccess</nly-button>
  <nly-button variant="outlineInfo">outlineInfo</nly-button>
  <nly-button variant="outlineWarning">outlineWarning</nly-button>
  <nly-button variant="outlineDanger">outlineDanger</nly-button>
</div>

<!-- variant.name -->
<!-- nly-button.vue -->
```

## bg-variant

`bg-*` 类颜色

```html
<nly-button bg-variant="default">default</nly-button>
<nly-button bg-variant="dark">dark</nly-button>
<nly-button bg-variant="light">light</nly-button>
<nly-button bg-variant="primary">primary</nly-button>
<nly-button bg-variant="secondary">secondary</nly-button>
<nly-button bg-variant="success">success</nly-button>
<nly-button bg-variant="info">info</nly-button>
<nly-button bg-variant="warning">warning</nly-button>
<nly-button bg-variant="danger">danger</nly-button>
<nly-button bg-variant="lightblue">lightblue</nly-button>
<nly-button bg-variant="navy">navy</nly-button>
<nly-button bg-variant="olive">olive</nly-button>
<nly-button bg-variant="lime">lime</nly-button>
<nly-button bg-variant="fuchsia">fuchsia</nly-button>
<nly-button bg-variant="maroon">maroon</nly-button>
<nly-button bg-variant="blue">blue</nly-button>
<nly-button bg-variant="indigo">indigo</nly-button>
<nly-button bg-variant="purple">purple</nly-button>
<nly-button bg-variant="pink">pink</nly-button>
<nly-button bg-variant="red">red</nly-button>
<nly-button bg-variant="orange">orange</nly-button>
<nly-button bg-variant="yellow">yellow</nly-button>
<nly-button bg-variant="green">green</nly-button>
<nly-button bg-variant="teal">teal</nly-button>
<nly-button bg-variant="cyan">cyan</nly-button>
<nly-button bg-variant="white">white</nly-button>
<nly-button bg-variant="gray">gray</nly-button>
<nly-button bg-variant="graydark">graydark</nly-button>

<!-- bg-variant.name -->
<!-- nly-button.vue -->
```

## bg-gradient-variant

`bg-gradient-*` 类颜色，渐变色

```html
<nly-button bg-gradient-variant="default">default</nly-button>
<nly-button bg-gradient-variant="dark">dark</nly-button>
<nly-button bg-gradient-variant="light">light</nly-button>
<nly-button bg-gradient-variant="primary">primary</nly-button>
<nly-button bg-gradient-variant="secondary">secondary</nly-button>
<nly-button bg-gradient-variant="success">success</nly-button>
<nly-button bg-gradient-variant="info">info</nly-button>
<nly-button bg-gradient-variant="warning">warning</nly-button>
<nly-button bg-gradient-variant="danger">danger</nly-button>
<nly-button bg-gradient-variant="lightblue">lightblue</nly-button>
<nly-button bg-gradient-variant="navy">navy</nly-button>
<nly-button bg-gradient-variant="olive">olive</nly-button>
<nly-button bg-gradient-variant="lime">lime</nly-button>
<nly-button bg-gradient-variant="fuchsia">fuchsia</nly-button>
<nly-button bg-gradient-variant="maroon">maroon</nly-button>
<nly-button bg-gradient-variant="blue">blue</nly-button>
<nly-button bg-gradient-variant="indigo">indigo</nly-button>
<nly-button bg-gradient-variant="purple">purple</nly-button>
<nly-button bg-gradient-variant="pink">pink</nly-button>
<nly-button bg-gradient-variant="red">red</nly-button>
<nly-button bg-gradient-variant="orange">orange</nly-button>
<nly-button bg-gradient-variant="yellow">yellow</nly-button>
<nly-button bg-gradient-variant="green">green</nly-button>
<nly-button bg-gradient-variant="teal">teal</nly-button>
<nly-button bg-gradient-variant="cyan">cyan</nly-button>
<nly-button bg-gradient-variant="white">white</nly-button>
<nly-button bg-gradient-variant="gray">gray</nly-button>
<nly-button bg-gradient-variant="graydark">graydark</nly-button>

<!-- bg-gradient-variant.name -->
<!-- nly-button.vue -->
```

## size

按钮大小，可选 `lg` ， `sm` ， `sx`

```html
<nly-button bg-gradient-variant="graydark" size="xs">graydark</nly-button>
<nly-button bg-gradient-variant="graydark" size="sm">graydark</nly-button>
<nly-button bg-gradient-variant="graydark" size="lg">graydark</nly-button>

<!-- size.name-->
<!-- nly-button.vue -->
```

## block

使按钮填充整个父元素

```html
<div>
  <nly-button bg-gradient-variant="graydark" block>block</nly-button>
</div>

<!-- block.name -->
<!-- nly-button.vue -->
```

## click

点击事件，鼠标事件，原生事件

```html
<template>
  <div>
    <nly-button variant="danger" @click="clickFunc">点击</nly-button>
    <nly-button variant="danger" @click="clickFunc" button-class="ml-2" disabled
      >点击</nly-button
    >
  </div>
</template>
<script>
  export default {
    methods: {
      clickFunc() {
        alert("Hello NlyadminlteVue");
      }
    }
  };
</script>

<!-- click.name -->
<!-- nly-button.vue -->
```

## disabled

禁用按钮， 禁用状态无法点击，无法触发 click 事件

```html
<nly-button bg-gradient-variant="graydark" disabled> disabled</nly-button>
<nly-button bg-gradient-variant="graydark"> diabled</nly-button>

<nly-button bg-gradient-variant="info" disabled> disabled</nly-button>
<nly-button bg-gradient-variant="info"> diabled</nly-button>

<!-- disabled.name-->
<!-- nly-button.vue -->
```

## shape

按钮形状，方形，小圆角，大圆角

```html
<nly-button bg-gradient-variant="graydark" shape="roundedFlat">
  roundedFlat</nly-button
>
<nly-button bg-gradient-variant="graydark" shape="roundedPill">
  roundedPill</nly-button
>
<nly-button bg-gradient-variant="graydark" shape="roundedCircle">
  Cir</nly-button
>
<nly-button bg-gradient-variant="info" shape="roundedLg"> roundedLg</nly-button>
<nly-button bg-gradient-variant="info" shape="roundedSm"> roundedSm</nly-button>

<!-- shap.name -->
<!-- nly-button.vue -->
```

## tool

工具类按钮，一般建议用在 `nly-card-header` 组件中的 `nly-card-tool` 组件中

```html
<nly-button tool> tool</nly-button>

<nly-card header-variant="pink" header-outline>
  <nly-card-header>
    <nly-card-tool>
      <nly-button tool> tool</nly-button>
    </nly-card-tool>
  </nly-card-header>
</nly-card>

<!-- tool.name -->
<!-- nly-button.vue -->
```

## app

`app` 类按钮

```html
<nly-button app variant="danger">
  <nly-icon
    icon="nlyfont nly-icon-sr-chuangxinfuwu-fill
-icon-breadcrumb-fill"
  />
</nly-button>

<!-- app.name -->
<!-- nly-button.vue -->
```

## link props

接收 `nly-link` 组件参数，会变成 a 标签按钮

```html
<nly-button variant="danger"> Button</nly-button>
<nly-button variant="danger" to="/">Link to</nly-button>
<nly-button variant="danger" href="#">Link href</nly-button>

<!-- link props.name -->
<!-- nly-button.vue -->
```
