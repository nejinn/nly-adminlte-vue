# adminlte form 分析

## form验证

### 格式1 was-validated

> 必须配input type,会自动校验

> 提示消息有 valid-feedback和invalid-feedback

> 提示tooltip有 valid-tooltip和invalid-tooltip

```html
不带提示信息(input框绿色或者红色，右侧绿色√湖泊这红色x)
<element class="was-validated">
  …
    <element class="form-control">

带提示信息(input框绿色或者红色，右侧绿色√湖泊这红色x,且input框下面带提示信息)
<element class="was-validated">
  …
    <element class="form-control">
    <element class="valid-feedback">
    ⋮
    <element class="valid-feedback">
    ⋮
    <element class="invalid-feedback">

带tootip提示(input框绿色或者红色，右侧绿色√湖泊这红色x,tooltip元素对应绿色或者红色)
<element class="was-validated">
  …
    <element class="form-control" :invalid>
    <element class="invalid-tooltip">
    ⋮
    <element class="invalid-tooltip">

demo 1 不带提示信息(根据type自动校验，并触发sucess和error)
<div class="was-validated">
 ...
  <input type="email" class="form-control" />
 ...
<div>

demo 2 带提示信息(自动校验触发)
<div class="was-validated">
 ...
  <input type="email" class="form-control" />
  ...
  <span class="valid-feedback">我是通过验证提示信息</span>
  <span class="invalid-feedback">我是通过验证提示信息</span>
 ...
<div>
span元素可以有多个，与input的间隔可以为0,也可以相隔多个

demo 3 带tooltip提示信息(自动校验触发)
<div class="form-group was-validated">
  <label>
    was-validated input type valid-tooltip invalid-tooltip</label
  >
  <input type="email" class="form-control" />
  <div class="valid-tooltip">我是通过验证提示信息</div>
  <div class="invalid-tooltip">我是验证不通过的提示信息</div>
</div>
```

### 格式2 is-valid

```html
不带提示信息(input框绿色，右侧绿色√)
<element class="form-control is-valid">

带提示信息(input框绿色，右侧绿色√,且input框下面带提示信息)
<element class="form-control is-valid">
<element class="valid-feedback">
⋮
<element class="valid-feedback">

带提示tooltip(input框绿色，右侧绿色√,且input框下面带提示信息)
<element class="form-control is-valid">
<element class="valid-tooltip">
⋮
<element class="valid-tooltip">

demo 1 不带提示信息
<input class='form-control is-valid' />

demo 2 带提示信息
<input class='form-control is-valid' />
<span class="valid-feedback" />验证通过<span>

demo 3 带提示tooltip
<input class='form-control is-valid' />
<span class="valid-tooltip" />验证通过<span>
```

### 格式3 is-invalid

```html
不带提示信息(input框红色，右侧红色×)
<element class="form-control is-invalid">

带提示信息(input框红色，右侧红色×,且input框下面带提示信息)
<element class="form-control is-invalid">
<element class="invalid-feedback">
⋮
<element class="invalid-feedback">

带提示tooltip(input框红色，右侧红色×,且input框下面带提示信息)
<element class="form-control is-invalid">
<element class="invalid-tooltip">
⋮
<element class="invalid-tooltip">

demo 1 不带提示信息
<input class='form-control is-invalid' />

demo 2 带提示信息
<input class='form-control is-invalid' />
<span class="invalid-feedback" />验证通过<span>

demo 3 带提示tooltip
<input class='form-control is-invalid' />
<span class="invalid-tooltip" />验证通过<span>
```

### 格式4 is-warning

```html
不带提示信息(input框黄色)
<element class="form-control is-warning">

带提示信息(input框黄色,且input框下面带提示信息)
<element class="form-control is-warning">
<element class="warning-feedback">
⋮
<element class="warning-feedback">

带提示tooltip(input框黄色，且input框下面带提示信息)
<element class="form-control is-warning">
<element class="warning-tooltip">
⋮
<element class="warning-tooltip">

demo 1 不带提示信息
<input class='form-control is-warning' />

demo 2 带提示信息
<input class='form-control is-warning' />
<span class="warning-feedback" />验证通过<span>

demo 3 带提示tooltip
<input class='form-control is-warning' />
<span class="warning-tooltip" />验证通过<span>
```

