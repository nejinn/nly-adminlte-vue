# 1. nav
<!-- TOC -->

- [1. nav](#1-nav)
    - [1.1. nly-nav](#11-nly-nav)
        - [1.1.1. props](#111-props)
    - [1.2. nly-nav-item](#12-nly-nav-item)
        - [1.2.1. props](#121-props)
            - [1.2.1.1. demo](#1211-demo)
    - [1.3. nly-nav-dropdown](#13-nly-nav-dropdown)
        - [1.3.1. props](#131-props)
        - [slots](#slots)
            - [1.3.1.1. demo](#1311-demo)

<!-- /TOC -->
>导航

## 1.1. nly-nav

>导航

### 1.1.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
tag | String | ul | 标签
fill | Boolean | false | 按比列填充整个nav，但不是等宽
justified | Boolean | false | 等宽填充整个nav
align | String |  | nly-nav-item位置:可选 start，left，center，end'，right
tabs | Boolean | false | nav table形状，会添加class='nav-tabs'
tabs-right | Boolean | false | 选项卡形状，vertical,tabs为true的情况下生效,nav右侧形状
pills | Boolean | false | nav圆角按钮形状
vertical | Boolean | false | 垂直
small | Boolean | false | 小字体
card-header | Boolean | false | 放在卡片中时，可以设置为true,就会变成卡片头部

## 1.2. nly-nav-item

>导航item元素
>nly-nav-item中封装了一个nly-link，默认a标签

### 1.2.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
href | String |  | 普通a标签跳转
rel | String |  | rel属性
target | String | '_self' | target属性,支持所有target值_blank，_self，_parent，_top，framename
active | Boolean | false | 激活状态
disabled | Boolean | false | 禁用状态
to | String or Object |  | router-link 调用router.push()
append | Boolean | false | router-link，需要使用to这个props，将需要跳转的url字符串添加到当前url的后面再跳转。设置append=true，比如当前http://localhost:8080/link，to='collapse'，则会跳转到http://localhost:8080/link/collapse
replace | Boolean | false | router-link，调用router.replace()
event | String or Array | 'click' | 点击事件，尽量不要和to以及href同时使用，如果同时使用，点击事件和跳转会依次发生
router-tag | String | 'a' |  标签
active-class | String |  | 自定义router-link激活时的css式样，必选设置active=true
exact | Boolean | false | router-link router-view一起用，当前router和当前nly-nav-item的to props一样的时候，会自动激活active
exact-active-class | String |  | excet被激活的时候，自定义的css式样
link-attrs | Object |  | 自定义封装在nly-nav-item中的nly-link的attrs
link-classes | String or Object or Array |  | 自定义自定义封装在nly-nav-item中的nly-link的css式样
nav-item | Boolean | true | 默认会有class='nav-item'，设置为false则没有class='nav-item'
dropdown-item | Boolean | false | 默认false，中间封装的nly-link会有class='nav-link，设置为true，则会变成class='dropdown-item'

#### 1.2.1.1. demo

```html
<nly-nav-item active class="xxx" :to="{ name: 'collapse' }">
    home
</nly-nav-item>

<nly-nav-item disabled>
    home
</nly-nav-item>
```

>如下写法可以组成一个dropdown-item，放在nly-nav-dropdown中

```html
<nly-nav-dropdown>
    <template slot="menucontent">
        <nly-nav-item :nav-item="false" dropdown-item>
            ...
        </nly-nav-item>
    </template>
</nly-nav-dropdown>
```

## 1.3. nly-nav-dropdown

>导航下拉菜单
>nly-nav-dropdown中封装了一个a标签，nly-nav-dropdown渲染出来如下：

```html
<li>
    <a>
        <slot="linkcontent">(下拉菜单按钮)
    </a>
    <ul>
        <slot="menucontent">(下拉菜单内容)
    </ul>
</li>
```

### 1.3.1. props

参数 | 类型 |  默认值 | 描述
-|-|-|-
item-tag | String | li | 下拉菜单标签，默认li，
nav-item | Boolean | true | 默认li标签有一个class='nav-item',设置为false则没有，默认以nav-item式样呈现下拉菜单。nav-item作用于li标签
hover | Boolean | false | 鼠标悬浮显示下拉菜单内容，hover作用于li标签，会覆盖所有子菜单hover，这时候会使得所有子菜单包括nav-dropdown本身都会成为鼠标悬浮显示菜单
direction | String | down | 下拉菜单位置，可选down，left，right，up，none，选择none时li标签没有class='drop*'这个式样，当作为子菜单的时候，即submenu为true的时候，可以选择none（非必须，也可以选择down，left，right，up），子菜单会居右下显示。选择其他li标签会有class='drop*'，direction作用于li标签
submenu | Boolean | false | 默认不是子菜单，设置为true就是子菜单。可以作为下拉菜单的二级三级四级等菜单。submenu作用于li标签
item-class | String | | 自定义li标签css式样，item-class作用于li标签
disabled | Boolean | false | 禁用菜单，disabled作用于a标签
popup | Boolean | false | aria-haspopup，popup作用于a标签
id | String | | id，id作用于a标签
link-class | String | | 自定义a标签css式样，link-class作用于a标签
link-tag | String | a | 自定义下拉菜单按钮标签，默认a
dropdown-item | Boolean | false | 默认a标签没有class='dropdown-item'，设置为true则有class='dropdown-item'，设置true，可以用作带有子菜单的二级菜单内的元素。dropdown-item作用于a标签，
menu-tag | String | ul | 下拉菜单内容标签，默认ul
menu-class | String | | 自定义css式样，作用于ul标签，可以设置border-0去掉边框
size | String | | 菜单大小，可选md，lg，xl，作用于ul标签
menuDirection | String | |下拉菜单位置，只有direction为up或者down的时候有效，可选right。left，作用于ul标签
shadow | String | shadow | 菜单阴影，可选shadow，sm，lg，none，作用于ul标签

### slots

参数 | 描述
-|-
linkcontent | a标签中的插槽
menucontent | 菜单里的插槽

#### 1.3.1.1. demo

```html
<nly-nav-dropdown
    id="menudropdon1"
    :popup="true"
    :dropdown-toggle="true"
    menu-class="border-0"
    size="xl"
>
    <template slot="linkcontent">
        测试
        <i class="fas fa-comments"></i>
    </template>
    <template slot="menucontent">
        <nly-nav-item :nav-item="false" dropdown-item to="/">
        我是nav-item="false"
        </nly-nav-item>
        <nly-nav-item :nav-item="false" dropdown-item to="nav">
        dropdown-item
        </nly-nav-item>

        <nly-nav-item :nav-item="false" dropdown-item to="/" disabled>
        我是disabled
        </nly-nav-item>
        <nly-nav-item :nav-item="false" dropdown-item to="nav" append>
        我是append
        </nly-nav-item>

        <nly-nav-dropdown
        id="menudropdon2"
        hover
        :nav-item="false"
        submenu
        :nav-link="false"
        dropdown-item
        dropdown-toggle
        size="lg"
        direction="none"
        >
        <template slot="linkcontent">
            我是悬浮菜单
            <i class="fas fa-comments"></i>
        </template>
        <template slot="menucontent">
            <nly-nav-item
            :nav-item="false"
            dropdown-item
            :to="{ name: 'button' }"
            >
            我是nav-item="false"
            </nly-nav-item>
            <nly-nav-item :nav-item="false" dropdown-item>
            dropdown-item
            </nly-nav-item>

            <nly-nav-dropdown
            :nav-item="false"
            submenu
            :nav-link="false"
            dropdown-item
            dropdown-toggle
            direction="none"
            id="menudropdon3"
            >
            <template slot="linkcontent">
                我是三级
                <i class="fas fa-comments"></i>
            </template>
            <template slot="menucontent">
                <nly-nav-item
                :nav-item="false"
                dropdown-item
                :to="{ name: 'button' }"
                >
                我是nav-item="false"
                </nly-nav-item>
                <nly-nav-item :nav-item="false" dropdown-item>
                dropdown-item
                </nly-nav-item>
            </template>
            </nly-nav-dropdown>
        </template>
        </nly-nav-dropdown>
    </template>
</nly-nav-dropdown>
```