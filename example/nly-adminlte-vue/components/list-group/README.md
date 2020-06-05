# List group

> 列表组是一个非常灵活的且可以以列表形式展示其他任何组件的组件，甚至可以用作导航。

``` html
<nly-list-group>
    <nly-list-group-item>诸葛亮</nly-list-group-item>
    <nly-list-group-item>曹操</nly-list-group-item>
    <nly-list-group-item>刘备</nly-list-group-item>
    <nly-list-group-item>赵云</nly-list-group-item>
    <nly-list-group-item>孙权</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group.name -->
<!-- nly-list-group.vue -->
```

## 激活状态

给 `<nly-list-group-item>` 设置 prop `active` 会激活当前 `<nly-list-group-item>` 。

``` html
<nly-list-group>
    <nly-list-group-item active>诸葛亮</nly-list-group-item>
    <nly-list-group-item>曹操</nly-list-group-item>
    <nly-list-group-item>刘备</nly-list-group-item>
    <nly-list-group-item>赵云</nly-list-group-item>
    <nly-list-group-item>孙权</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-active.name -->
<!-- nly-list-group-active.vue -->
```

## 禁用状态

给 `<nly-list-group-item>` 设置 prop `disabled` 会禁用当前 `<nly-list-group-item>` 。

``` html
<nly-list-group>
    <nly-list-group-item disabled>诸葛亮</nly-list-group-item>
    <nly-list-group-item>曹操</nly-list-group-item>
    <nly-list-group-item>刘备</nly-list-group-item>
    <nly-list-group-item disabled>赵云</nly-list-group-item>
    <nly-list-group-item>孙权</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-disabled.name -->
<!-- nly-list-group-disabled.vue -->
```

## 带有操作的列表元素

通过指定的 prop 把 `<nly-list-group-item>` 转换成带有操作的列表元素。比如设置 prop `href` 可以把组件

`<nly-list-group-item>` 设置成带有连接的 a 标签( `<a href="...">` )。

``` html
<nly-list-group>
    <nly-list-group-item href="#some-link">诸葛亮</nly-list-group-item>
    <nly-list-group-item href="#" active>刘备</nly-list-group-item>
    <nly-list-group-item href="#">孙权</nly-list-group-item>
    <nly-list-group-item href="#foobar" disabled>曹操</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-disabled.name -->
<!-- nly-list-group-link.vue -->
```

可以设置 prop `<button>` 使得 `nly-list-group-item` 可以渲染成一个按钮组件。

``` html
<nly-list-group>
    <nly-list-group-item button>诸葛亮 </nly-list-group-item>
    <nly-list-group-item button>曹操</nly-list-group-item>
    <nly-list-group-item button disabled>孙权</nly-list-group-item>
    <nly-list-group-item button>刘备</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-button.name -->
<!-- nly-list-group-button.vue -->
```

**注意:**

* 当设置 prop `button` is `true` , 所有的 link 相关的 prop 以及 prop `tag` 会失效

* 当设置了 `href` or `to` 时, prop `tag` 会失效

## 颜色

### variant

支持 `adminlte` 主题颜色，设置 prop `variant` 为对应值即可。

``` html
<nly-list-group>
    <nly-list-group-item>Default </nly-list-group-item>
    <nly-list-group-item variant="primary">Primary </nly-list-group-item>
    <nly-list-group-item variant="secondary">Secondary </nly-list-group-item>
    <nly-list-group-item variant="success">Success</nly-list-group-item>
    <nly-list-group-item variant="danger">Danger</nly-list-group-item>
    <nly-list-group-item variant="warning">Warning</nly-list-group-item>
    <nly-list-group-item variant="info">Info</nly-list-group-item>
    <nly-list-group-item variant="light">Light</nly-list-group-item>
    <nly-list-group-item variant="dark">Dark</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-variant.name -->
<!-- nly-list-group-variant.vue -->
```

### bg-gradient-variant

同时也支持 `adminlte` 渐变色背景色。设置 `bg-gradient-variant` 为对应的值。

``` html
<nly-list-group>
    <nly-list-group-item>Default </nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="primary">Primary </nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="secondary">Secondary </nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="success">Success</nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="danger">Danger</nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="warning">Warning</nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="info">Info</nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="pink">Pink</nly-list-group-item>
    <nly-list-group-item bg-gradient-variant="indigo">Indigo</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-bg-gradient-variant.name -->
<!-- nly-list-group-bg-gradient-variant.vue -->
```

背景色应用于所有带操作的列表元素。同时也适用与处于激活状态的列表元素

``` html
<nly-list-group>
    <nly-list-group-item href="#">Default</nly-list-group-item>
    <nly-list-group-item href="#" variant="primary">Primary</nly-list-group-item>
    <nly-list-group-item href="#" variant="secondary">Secondary</nly-list-group-item>
    <nly-list-group-item href="#" variant="success">Success</nly-list-group-item>
    <nly-list-group-item href="#" variant="danger">Danger</nly-list-group-item>
    <nly-list-group-item href="#" variant="warning">Warning</nly-list-group-item>
    <nly-list-group-item href="#" variant="info">Info</nly-list-group-item>
    <nly-list-group-item href="#" variant="light">Light</nly-list-group-item>
    <nly-list-group-item href="#" variant="dark">Dark</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-variant-action.name -->
<!-- nly-list-group-variant-action.vue -->
```

## 加入徽章元素

可以在列表元素中添加徽章 `nly-badge` 来展示未读，激活等状态。

``` html
<nly-list-group>
    <nly-list-group-item class="d-flex justify-content-between align-items-center">
        诸葛亮
        <nly-badge variant="primary" pill>14</nly-badge>
    </nly-list-group-item>

    <nly-list-group-item class="d-flex justify-content-between align-items-center">
        刘备
        <nly-badge variant="primary" pill>2</nly-badge>
    </nly-list-group-item>

    <nly-list-group-item class="d-flex justify-content-between align-items-center">
        赵云
        <nly-badge variant="primary" pill>1</nly-badge>
    </nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-badges.name -->
<!-- nly-list-group-badges.vue -->
```

## 嵌套卡片list group

把list group嵌套到[cards](/docs/components/card)，使用 `<nly-list-group>` prop `flush` 设置成无左右边框，可以实现
list group和card无缝嵌套

``` html
<nly-card-group deck>
    <nly-card>
        <nly-card-header>
            Card with list group
        </nly-card-header>
        <nly-card-body>
            <nly-list-group>
                <nly-list-group-item href="#">Cras justo odio</nly-list-group-item>
                <nly-list-group-item href="#">Dapibus ac facilisis in</nly-list-group-item>
                <nly-list-group-item href="#">Vestibulum at eros</nly-list-group-item>
            </nly-list-group>

            <p class="card-text mt-2">
                诸葛亮，字孔明，人称卧2113龙，汉末徐州 琅邪郡阳都县(今山东沂南 县)人，父诸葛珪曾为泰山郡丞，叔父诸葛玄为当时名士。诸葛亮兄诸葛不共戴天瑾仕于吴孙权，拜大军、左都护，领豫州牧。亮从弟诸葛诞仕于魏，为吏部郎，累迁扬州刺吏、镇东将军、司空。兄弟三人“并有盛名，各在一国。于时以为‘蜀得其龙，吴得其虎5261，魏得其狗’
            </p>
        </nly-card-body>
    </nly-card>

    <nly-card>
        <nly-card-header>
            Card with flush list group
        </nly-card-header>
        <nly-list-group flush>
            <nly-list-group-item href="#">Cras justo odio</nly-list-group-item>
            <nly-list-group-item href="#">Dapibus ac facilisis in</nly-list-group-item>
            <nly-list-group-item href="#">Vestibulum at eros</nly-list-group-item>
        </nly-list-group>
        <nly-card-body>
            诸葛亮，字孔明，人称卧2113龙，汉末徐州 琅邪郡阳都县(今山东沂南 县)人，父诸葛珪曾为泰山郡丞，叔父诸葛玄为当时名士。诸葛亮兄诸葛不共戴天瑾仕于吴孙权，拜大军、左都护，领豫州牧。亮从弟诸葛诞仕于魏，为吏部郎，累迁扬州刺吏、镇东将军、司空。兄弟三人“并有盛名，各在一国。于时以为‘蜀得其龙，吴得其虎5261，魏得其狗’
        </nly-card-body>
    </nly-card>
</nly-card-group>

<!-- nly-list-group-card.name -->
<!-- nly-list-group-card.vue -->
```

## 水平布局

设置 `horizontal` 为 `true` 会使得列表变为水平布局，默认情况下是垂直布局。可选 `sm` , `md` , `lg` or `xl` 。
注意不能与 `flush` 同时使用，否则 `horizontal` 会失效。

**提示:** 如果需要每个list宽度一样，给 `nly-list-item` 添加 `class=flex-fill` 
**Always horizontal:**

``` html
<div>
    <nly-list-group horizontal>
        <nly-list-group-item>诸葛亮</nly-list-group-item>
        <nly-list-group-item>刘备</nly-list-group-item>
        <nly-list-group-item>张飞</nly-list-group-item>
    </nly-list-group>
</div>

<!-- nly-list-group-horizontal.name -->
<!-- nly-list-group-horizontal.vue -->
```

**设置水平布局断点为 `md` and above:**

``` html
<div>
    <nly-list-group horizontal="md">
        <nly-list-group-item>诸葛亮</nly-list-group-item>
        <nly-list-group-item>项羽</nly-list-group-item>
        <nly-list-group-item>貂蝉</nly-list-group-item>
    </nly-list-group>
</div>

<!-- nly-list-group-horizontal-md.name -->
<!-- nly-list-group-horizontal-md.vue -->
```

## 自定义文本内容

list group 中几乎可以添加任何元素。

``` html
<nly-list-group>
    <nly-list-group-item href="#" active class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mnly-1">List group item heading</h5>
            <small>3 days ago</small>
        </div>

        <p class="mnly-1">
            诸葛亮，字孔明，人称卧2113龙，汉末徐州 琅邪郡阳都县(今山东沂南 县)人，父诸葛珪曾为泰山郡丞，叔父诸葛玄为当时名士。诸葛亮兄诸葛不共戴天瑾仕于吴孙权，拜大军、左都护，领豫州牧。亮从弟诸葛诞仕于魏，为吏部郎，累迁扬州刺吏、镇东将军、司空。兄弟三人“并有盛名，各在一国。于时以为‘蜀得其龙，吴得其虎5261，魏得其狗’
        </p>

        <small>诸葛亮，字孔明</small>
    </nly-list-group-item>

    <nly-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
        </div>

        <p class="mb-1">
            诸葛亮，字孔明，人称卧2113龙，汉末徐州 琅邪郡阳都县(今山东沂南 县)人，父诸葛珪曾为泰山郡丞，叔父诸葛玄为当时名士。诸葛亮兄诸葛不共戴天瑾仕于吴孙权，拜大军、左都护，领豫州牧。亮从弟诸葛诞仕于魏，为吏部郎，累迁扬州刺吏、镇东将军、司空。兄弟三人“并有盛名，各在一国。于时以为‘蜀得其龙，吴得其虎5261，魏得其狗’
        </p>

        <small class="text-muted">诸葛亮，字孔明</small>
    </nly-list-group-item>

    <nly-list-group-item href="#" disabled class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Disabled List group item</h5>
            <small class="text-muted">3 days ago</small>
        </div>

        <p class="mb-1">
            诸葛亮，字孔明，人称卧2113龙，汉末徐州 琅邪郡阳都县(今山东沂南 县)人，父诸葛珪曾为泰山郡丞，叔父诸葛玄为当时名士。诸葛亮兄诸葛不共戴天瑾仕于吴孙权，拜大军、左都护，领豫州牧。亮从弟诸葛诞仕于魏，为吏部郎，累迁扬州刺吏、镇东将军、司空。兄弟三人“并有盛名，各在一国。于时以为‘蜀得其龙，吴得其虎5261，魏得其狗’
        </p>

        <small class="text-muted">诸葛亮，字孔明</small>
    </nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-content.vue -->
```
