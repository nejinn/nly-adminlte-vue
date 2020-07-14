# navbar

> 导航栏, 是导航的响应式基础组件, 可以根据屏幕尺寸可收缩堆叠展开, `nly-navbar` 可以嵌套 `nly-nav` 和其他元素的容器.

```html
<div>
  <nly-navbar expand="lg" dark variant="info">
    <nly-navbar-brand>
      <nly-navbar-brandimg
        src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
        elevation
        circle
      />
      <nly-navbar-brandtext>
        NlyAdminlteVue
      </nly-navbar-brandtext>
    </nly-navbar-brand>

    <nly-navbar-toggle target="nav-collapse"></nly-navbar-toggle>

    <nly-collapse id="nav-collapse" is-nav>
      <nly-navbar-nav>
        <nly-nav-item href="#">Link</nly-nav-item>
        <nly-nav-item href="#" disabled>Disabled</nly-nav-item>
      </nly-navbar-nav>

      <!-- Right aligned nav items -->
      <nly-navbar-nav class="ml-auto">
        <nly-nav-form>
          <nly-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></nly-form-input>
          <nly-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            variant="danger"
            >Search</nly-button
          >
        </nly-nav-form>

        <nly-nav-dropdown text="Lang" menu-direction="right" dropdown-toggle>
          <nly-dropdown-item href="#">EN</nly-dropdown-item>
          <nly-dropdown-item href="#">ES</nly-dropdown-item>
          <nly-dropdown-item href="#">RU</nly-dropdown-item>
          <nly-dropdown-item href="#">FA</nly-dropdown-item>
        </nly-nav-dropdown>

        <nly-nav-dropdown menu-direction="right" dropdown-toggle>
          <template v-slot:linkcontent>
            <em>User</em>
          </template>
          <template v-slot:menucontent>
            <nly-dropdown-item href="#">Profile</nly-dropdown-item>
            <nly-dropdown-item href="#">Sign Out</nly-dropdown-item>
          </template>
        </nly-nav-dropdown>
      </nly-navbar-nav>
    </nly-collapse>
  </nly-navbar>
</div>

<!-- nly-navbar.name -->
<!-- nly-navbar.vue -->
```

```html
<nly-navbar variant="lightlight" navbar-class="xxx" expand="md">
  <nly-navbar-brand>
    <nly-navbar-brandimg
      src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
      elevation
      circle
    />
    <nly-navbar-brandtext>
      NlyAdminlteVue
    </nly-navbar-brandtext>
  </nly-navbar-brand>
  <nly-navbar-toggle target="aaa" navbar-class="order-1" />

  <nly-collapse is-nav id="aaa" collapse-class="order-3" appear>
    <nly-navbar-nav class="xxxxx">
      <nly-nav-item active class="xxx" :to="{ name: 'collapse' }">
        home
      </nly-nav-item>

      <nly-nav-item disabled>
        home
      </nly-nav-item>

      <nly-nav-item>
        home
      </nly-nav-item>

      <nly-nav-dropdown
        id="menudropdon1"
        :popup="true"
        :dropdown-toggle="true"
        menu-class="border-0"
        size="xl"
      >
        <template slot="linkcontent">
          NlyAdminlteVue
          <i class="fas fa-comments"></i>
        </template>
        <template slot="menucontent">
          <nly-nav-item dropdown-item to="/">
            我是nav-item
          </nly-nav-item>
          <nly-nav-item :nav-item="false" dropdown-item to="/">
            我是nav-item=false
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

      <nly-nav-dropdown
        :popup="true"
        :dropdown-toggle="true"
        menu-class="border-0"
        size="xl"
        hover
      >
        <template slot="linkcontent">
          我是悬浮菜单
        </template>
        <template slot="menucontent">
          <nly-nav-item :nav-item="false" dropdown-item to="/">
            我是nav-item="false"
          </nly-nav-item>
          <nly-nav-item :nav-item="false" dropdown-item to="nav">
            dropdown-item
          </nly-nav-item>
        </template>
      </nly-nav-dropdown>
    </nly-navbar-nav>
  </nly-collapse>
  <nly-navbar-nav class="order-1 order-md-3 navbar-no-expand ml-auto">
    <nly-nav-dropdown
      :popup="true"
      menu-class="border-0"
      size="lg"
      menu-direction="right"
    >
      <template slot="linkcontent">
        <i class="fas fa-comments"></i>
      </template>
      <template slot="menucontent">
        <nly-nav-item :nav-item="false" dropdown-item to="/">
          我是nav-item="false"
        </nly-nav-item>
        <nly-nav-item :nav-item="false" dropdown-item to="nav">
          dropdown-item
        </nly-nav-item>
      </template>
    </nly-nav-dropdown>

    <nly-nav-dropdown
      :popup="true"
      menu-class="border-0"
      size="lg"
      menu-direction="right"
    >
      <template slot="linkcontent">
        <i class="far fa-bell"></i>
      </template>
      <template slot="menucontent">
        <nly-nav-item :nav-item="false" dropdown-item to="/">
          我是nav-item="false"
        </nly-nav-item>
        <nly-nav-item :nav-item="false" dropdown-item to="nav">
          dropdown-item
        </nly-nav-item>
      </template>
    </nly-nav-dropdown>

    <nly-nav-item>
      <i class="fas fa-th-large"></i>
    </nly-nav-item>
  </nly-navbar-nav>
</nly-navbar>
<!-- nly-navbar.name -->
<!-- nly-navbar.vue -->
```

## `variant` 主题颜色

`nly-navbar` 可以设置 prop `variant` 来控制导航颜色. 可选 primary, secondary, success, info, warning, danger, light, dark, lightblue, navy, olive, lime, fuchsia, maroon, blue, indigo, purple, pink, red, orange, yellow, green, teal, cyan, white, gray, graydark

同时可以设置 prop `dark` 来控制文本颜色

```html
<template>
  <nly-row>
    <nly-col>
      <nly-navbar
        :variant="variant"
        navbar-class="xxx"
        expand="lg"
        :dark="dark"
      >
        <nly-navbar-brand>
          <nly-navbar-brandimg
            src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
            elevation
            circle
          />
          <nly-navbar-brandtext>
            NlyAdminlteVue
          </nly-navbar-brandtext>
        </nly-navbar-brand>
        <nly-navbar-toggle target="aaa" navbar-class="order-1" />

        <nly-collapse is-nav id="aaa" collapse-class="order-3" appear>
          <nly-navbar-nav class="xxxxx">
            <nly-nav-item active class="xxx" :to="{ name: 'collapse' }">
              home
            </nly-nav-item>

            <nly-nav-item disabled>
              home
            </nly-nav-item>

            <nly-nav-item>
              home
            </nly-nav-item>

            <nly-nav-dropdown
              id="menudropdon1"
              :popup="true"
              :dropdown-toggle="true"
              menu-class="border-0"
              size="xl"
            >
              <template slot="linkcontent">
                NlyAdminlteVue
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

            <nly-nav-dropdown
              :popup="true"
              :dropdown-toggle="true"
              menu-class="border-0"
              size="xl"
              hover
            >
              <template slot="linkcontent">
                我是悬浮菜单
              </template>
              <template slot="menucontent">
                <nly-nav-item :nav-item="false" dropdown-item to="/">
                  我是nav-item="false"
                </nly-nav-item>
                <nly-nav-item :nav-item="false" dropdown-item to="nav">
                  dropdown-item
                </nly-nav-item>
              </template>
            </nly-nav-dropdown>
          </nly-navbar-nav>
        </nly-collapse>
        <nly-navbar-nav class="order-1 order-md-3 navbar-no-expand ml-auto">
          <nly-nav-dropdown
            :popup="true"
            menu-class="border-0"
            size="lg"
            menu-direction="right"
          >
            <template slot="linkcontent">
              <i class="fas fa-comments"></i>
            </template>
            <template slot="menucontent">
              <nly-nav-item :nav-item="false" dropdown-item to="/">
                我是nav-item="false"
              </nly-nav-item>
              <nly-nav-item :nav-item="false" dropdown-item to="nav">
                dropdown-item
              </nly-nav-item>
            </template>
          </nly-nav-dropdown>

          <nly-nav-dropdown
            :popup="true"
            menu-class="border-0"
            size="lg"
            menu-direction="right"
          >
            <template slot="linkcontent">
              <i class="far fa-bell"></i>
            </template>
            <template slot="menucontent">
              <nly-nav-item :nav-item="false" dropdown-item to="/">
                我是nav-item="false"
              </nly-nav-item>
              <nly-nav-item :nav-item="false" dropdown-item to="nav">
                dropdown-item
              </nly-nav-item>
            </template>
          </nly-nav-dropdown>

          <nly-nav-item>
            <i class="fas fa-th-large"></i>
          </nly-nav-item>
        </nly-navbar-nav>
      </nly-navbar>
    </nly-col>
  </nly-row>
  <nly-row>
    <nly-col>
      <label for="color">颜色</label>
      <select id="color" v-model="variant">
        <option
          v-for="(item, index) in variantOpitons"
          :key="index"
          :value="index"
        >
          {{ index }}
        </option>
      </select>
    </nly-col>
    <nly-col>
      <nly-switch offVariant="dark" onVariant="white" v-model="dark" />
    </nly-col>
  </nly-row>
</template>

<script>
  export default {
    data() {
      return {
        variant: 'lightlight',
        dark: false,
        variantOpitons: {
          orange: 'navbar-light navbar-orange',
          warning: 'navbar-light navbar-warning',
          lightlight: 'navbar-light',
          graygray: 'navbar-dark navbar-gray',
          graydark: 'navbar-dark navbar-gray-dark',
          darkdark: 'navbar-dark',
          cyan: 'navbar-dark navbar-cyan',
          teal: 'navbar-dark navbar-teal',
          lightblue: 'navbar-dark navbar-lightblue',
          navy: 'navbar-dark navbar-navy',
          pink: 'navbar-dark navbar-pink',
          purple: 'navbar-dark navbar-purple',
          indigo: 'navbar-dark navbar-indigo',
          danger: 'navbar-dark navbar-danger',
          success: 'navbar-dark navbar-success',
          info: 'navbar-dark navbar-info',
          secondary: 'navbar-dark navbar-secondary',
          primary: 'navbar-dark navbar-primary',
          white: 'navbar-light navbar-white',
        },
      }
    },
  }
</script>

<!-- 主题颜色.name -->
<!-- nly-navbar.vue -->
```

## 位置

`nly-navbar` 可以设置以下 2 个 prop 来调整位置

| prop     | type    | default | description                                                                                                       |
| -------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `fixed`  | String  | `null`  | 让 navbar 位置固定. 可选,`top`, `bottom`. 选择 `top` 会把 navbar 固定在顶部, 选择 `bottom` 会把 navbar 固定在底部 |
| `sticky` | Boolean | `false` | 设置 `sticky` 会让 navbar 悬浮在浏览器顶部                                                                        |

**注意**

- `fixed` 使用 CSS `position: fixed`, 您可能需要调整顶部距离或者底部距离

- 并不是所有浏览器都支持 `sticky`

## 内置组件

`nly-navbar` 内置了几个组件

- `nly-navbar-brand`

  - `nly-navbar-brandimg`

  - `nly-navbar-brandtext`

- `nly-navbar-toggle` 与 `nly-collapse is-nav` 组件一起使用

  - `nly-collapse is-nav` 会根据 `nly-navbar` 的 prop `expand` 在断点上隐藏和展示被其包裹的元素

- `nly-navbar-nav`

  - `nly-nav-item` 用于链接和路由链接）操作项

  - `nly-nav-dropdown` 下拉菜单

  - `nly-nav-text` 文本字符串。

  -- `nly-nav-form` 表单控件。

### `nly-navbar-brand`

设置 prop `href` `nly-navbar-brand` 会渲染成一个普通的 url 跳转。 设置 prop `to` 会渲染成 `router-link` 跳转

```html
<nly-navbar expand="lg" dark variant="info">
  <nly-navbar-brand>
    <nly-navbar-brandimg
      src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
      elevation
      circle
    />
    <nly-navbar-brandtext>
      NlyAdminlteVue
    </nly-navbar-brandtext>
  </nly-navbar-brand>
</nly-navbar>

<!-- nly-navbar-brand.name -->
<!-- nly-navbar.vue -->
```

### `nly-navbar-nav`

整个导航的路由跳转都嵌套在 `nly-navbar-nav` 中，如果需要实现响应式收起和展开，需要使用 `nly-collapse is-nav` 和 `nly-nav-toggle` 配合。

`nly-navbar-nav` 会适应子组件的宽度和大小，使得子组件和元素能够正确布局

`<nly-collapse is-nav id='demo'>` 和 `<nly-nav-toggle target='demo>` 配合使用需要 `nly-nav-toggle` 设置 prop `target` 且值为对应的 `nly-collapse` 的 id。注意 `nly-collapse` 需要设置 prop `is-nav`

`nly-navbar-nav` 内置以下组件：

- `nly-navbar-nav`

  - `nly-nav-item` 用于链接和路由链接）操作项

  - `nly-nav-dropdown` 下拉菜单

  - `nly-nav-text` 文本字符串。

  -- `nly-nav-form` 表单控件。

### `nly-navbar-item`

`nly-navbar-item` 接受大部分 `nly-link` 的 prop

`nly-navbar-item` 是导航栏的路由跳转元素。 设置 prop `to` 将会渲染成 `router-link`， 设置 prop `href` 渲染成普通链接。

可以设置 `active` 来激活当前元素

设置 `disabled` 来禁用当前元素

设置 `exact` 和 `exact-active-class` 来匹配当前路由实现对应的 css 类。 当前地址栏的 url 为 `/demo`， 如果当前 `nly-navbar-item` 设置了 `href` 或者 `to` 跳转指向 `、demo`, 则会自动激活 `exact-active-class` css 类

`nly-navbar-item` 可以绑定 `@click` 等事件来实现 对应函数

### `nly-navbar-text`

```html
<div>
  <nly-navbar expand="sm" variant="light">
    <nly-navbar-toggle target="nav-text-collapse"></nly-navbar-toggle>

    <nly-navbar-brand>
      <nly-navbar-brandimg
        src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
        elevation
        circle
      />
      <nly-navbar-brandtext>
        NlyAdminlteVue
      </nly-navbar-brandtext>
    </nly-navbar-brand>

    <nly-collapse id="nav-text-collapse" is-nav>
      <nly-navbar-nav>
        <nly-nav-text>Navbar text</nly-nav-text>
      </nly-navbar-nav>
    </nly-collapse>
  </nly-navbar>
</div>

<!-- nly-navbar-text.name -->
<!-- nly-navbar.vue -->
```

### `nly-nav-dropdown`

`nly-nav-dropdown` 的使用方法可以查看 <a href="/docs/components/nav"> nly-nav </a>

```html
<div>
  <nly-navbar expand="lg" dark variant="info">
    <nly-navbar-nav>
      <nly-nav-item href="#">Link</nly-nav-item>
      <nly-nav-item href="#" disabled>Disabled</nly-nav-item>

      <nly-nav-dropdown text="Lang" menu-direction="right" dropdown-toggle>
        <nly-dropdown-item href="#">EN</nly-dropdown-item>
        <nly-dropdown-item href="#">ES</nly-dropdown-item>
        <nly-dropdown-item href="#">RU</nly-dropdown-item>
        <nly-dropdown-item href="#">FA</nly-dropdown-item>
      </nly-nav-dropdown>

      <nly-nav-dropdown menu-direction="right" dropdown-toggle>
        <template v-slot:linkcontent>
          <em>User</em>
        </template>
        <template v-slot:menucontent>
          <nly-dropdown-item href="#">Profile</nly-dropdown-item>
          <nly-dropdown-item href="#">Sign Out</nly-dropdown-item>
        </template>
      </nly-nav-dropdown>
    </nly-navbar-nav>
  </nly-navbar>
</div>

<!-- nly-nav-dropdown.name -->
<!-- nly-navbar.vue -->
```

### `nly-navbar-form`

```html
<div>
  <nly-navbar variant="light">
    <nly-nav-form>
      <nly-form-input class="mr-sm-2" placeholder="Search"></nly-form-input>
      <nly-button variant="outlineSuccess" class="my-2 my-sm-0" type="submit"
        >Search</nly-button
      >
    </nly-nav-form>
  </nly-navbar>
</div>

<!-- nly-nav-dropdown.name -->
<!-- nly-navbar.vue -->
```

### `nly-form-input` 和 `nly-button` prop `is-navbar`

```html
<div>
  <nly-navbar variant="info">
    <nly-nav-form>
      <nly-input-group size="sm">
        <nly-form-input placeholder="Search" is-navbar></nly-form-input>
        <nly-input-group-append>
          <nly-button variant="outlineSuccess" type="submit" is-navbar>
            <nly-icon icon="fas fa-search" />
          </nly-button>
        </nly-input-group-append>
      </nly-input-group>
    </nly-nav-form>
  </nly-navbar>
</div>

<!-- nly-nav-dropdown.name -->
<!-- nly-navbar.vue -->
```

### `nly-navbar-toggle` 和 `nly-collapse is-nav`

导航栏在默认情况下并不是响应的，我们可以使用 `nly-navbar-toggle` 和 `nly-collapse is-nav` 使得导航栏变成响应的

`<nly-collapse is-nav id='demo'>` 和 `<nly-nav-toggle target='demo>` 配合使用需要 `nly-nav-toggle` 设置 prop `target` 且值为对应的 `nly-collapse` 的 id。

注意 `nly-collapse` 需要设置 prop `is-nav`

将 `nly-navbar` 的 prop expand 设置为 `xl`, `lg`, `md`, `sm`, `no` 可以在对应的断点上自动收起， 设置为 `no` 则会一直保持水平布局而不是响应式

```html
<template>
  <nly-navbar expand="no" variant="dark">
    <nly-navbar-brand href="#">NavBar</nly-navbar-brand>

    <nly-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <nly-icon
          v-if="expanded"
          icon="nlyfont nly-icon-arrow-bottom"
        ></nly-icon>
        <nly-icon v-else icon="nlyfont nly-icon-arrow-top"></nly-icon>
      </template>
    </nly-navbar-toggle>

    <nly-collapse id="navbar-toggle-collapse" is-nav>
      <nly-navbar-nav class="ml-auto">
        <nly-nav-item href="#">Link 1</nly-nav-item>
        <nly-nav-item href="#">Link 2</nly-nav-item>
        <nly-nav-item href="#" disabled>Disabled</nly-nav-item>
      </nly-navbar-nav>
    </nly-collapse>
  </nly-navbar>
</template>

<!-- nly-nav-dropdown.name -->
<!-- nly-navbar.vue -->
```
