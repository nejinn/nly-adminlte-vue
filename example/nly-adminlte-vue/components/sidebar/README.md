# Sidebar

> 一个可以收缩，展开，悬浮，支持多级子菜单的左侧导航栏

> 请注意， 本页的所有演示代码， 在打开之前，请关闭其他所有激活的示例， 不然会导致 bug。 `NlyAdminlteVue` 只允许一个 `sidebar` 存在，因为本页是文档演示， 使用 `v-if` 渲染多个 `sidebar`， 请保证本页同时只有一个 `sidebar` 被激活

- 左侧导航栏容器， 收起成只有 `icon` 的导航栏，需要 `body` 中有 `class='sidebar-mini sidebar-collapse'`，如果只有 `sidebar-collapse`，则会将左侧导航栏滑到左侧区域外，不可见。`sidebar-collapse` 用来控制左侧导航栏展开收缩。`sidebar-mini` 允许左侧导航栏收起到只有图标的状态

- `nly-sidebar-menu` 和 `nly-sidebar-container` 的收起和展开是由指令 `v-nly-sidebar-collapse` 来实现的，单独使用并无效果。

- `nly-sidebar-menu` 和 `nly-sidebar-container` 的差别在于使用 `nly-sidebar-menu` 可以传入一个数组来渲染菜单， 而 `nly-sidebar-container` 则需要使用嵌套组件一个一个写入。 当然也可以使用 `nly-render-function` 组件来传入数组渲染，详情请查看 [数组渲染页面组件](/docs/components/render-function)

- 下拉菜单元素组件 `nly-sidebar-nav-tree`，默认所有下拉菜单为手风琴模式，如需关闭，请给每个 `nly-sidebar-nav-tree` 设置 `accordion=null`

- 如果需要分组手风琴，请给同一组的 `nly-sidebar-nav-tree` 设置相同的 `accordion`

- 请保证 `nly-sidebar-nav-tree` 的 `target` 唯一, `nly-sidebar-nav-tree` 是通过 `target` 来控制对应元素收起展开的。 且 `target` 并没有设置默认值，多个相同，会导致一起展开收起。

- 如果有多个 `nly-sidebar-nav-tree` 的 `target` 相同，请勿设置 `visible=true`，会导致浏览器崩溃

- 如果有多级导航栏， 需要手风琴模式，请给同一级别的导航元素设置相同的 `accordion`, 不同级别导航 `accordion` 请设置唯一值

- `nly-sidebar-menu` 如果需要自动开启路由匹配模式， 给每一个 `nly-sidebar-nav-tree` 和 `nly-sidebar-nav-item` 传入 `exact: true`, 请不要给设置元素设置 `visible` 属性

- `sidebar` 需要布局容器 `nly-wrapper` 来配合布局， 请设置 `nly-wrappper`， 并使用其四个布局之一，具体请查看 [wrapper 布局](/docs/components/wrapper)

**示例：**

```html
<template>
  <div>
    <div>
      <nly-button block @click="showSidebar" variant="info"
        >点击渲染左侧菜单栏</nly-button
      >
      <nly-button
        block
        v-nly-sidebar-collapse.sidebar-collapse
        class="navItem"
        :disabled="!show"
        bg-variant="pink"
        >点击收起左侧菜单栏</nly-button
      >
    </div>
    <nly-wrapper layout="fixed" v-if="show">
      <nly-sidebar-container hover style="margin-top:66px" side-mini>
        <nly-sidebar-brand to="#-">
          <nly-sidebar-brandimg
            src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
            elevation
            circle
          />
          <nly-sidebar-brandtext>NLY Adminlte Vue</nly-sidebar-brandtext>
        </nly-sidebar-brand>

        <nly-sidebar>
          <nly-sidebar-userpanel class="mt-3 pb-3 mb-3 d-flex">
            <nly-sidebar-userpanel-img
              src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
              class="SSS"
            />
            <nly-sidebar-userpanel-info to="#-"
              >Nejinn lerity</nly-sidebar-userpanel-info
            >
          </nly-sidebar-userpanel>
          <nly-sidebar-nav class="mt-2">
            <nly-sidebar-nav-header>仪表盘</nly-sidebar-nav-header>
            <nly-sidebar-nav-item
              to="/"
              icon="nav-icon fas nlyfont nly-icon-dashboard"
              exact
            >
              首页
              <nly-badge bg-variant="teal" badge-class="right">NEW</nly-badge>
            </nly-sidebar-nav-item>

            <nly-sidebar-nav-header>
              组件
              <nly-badge bg-variant="maroon" badge-class="float-sm-right"
                >15</nly-badge
              >
            </nly-sidebar-nav-header>

            <nly-sidebar-nav-tree
              target="components-one"
              visible
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="菜单树"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-logo-chrome"
                exact
                >菜单1</nly-sidebar-nav-item
              >

              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-nav-tool"
                exact
                >菜单2</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>

            <nly-sidebar-nav-tree
              target="components-two"
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="菜单树2"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                exact
                >菜单3</nly-sidebar-nav-item
              >
              <nly-sidebar-nav-tree
                target="components-three"
                accordion="components-three"
                icon="nav-icon fas nlyfont nly-icon-logo-polymer"
                text="菜单树3"
              >
                <nly-sidebar-nav-item
                  to="/"
                  icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                  exact
                  >菜单4</nly-sidebar-nav-item
                >
              </nly-sidebar-nav-tree>
              <nly-sidebar-nav-tree
                target="components-for"
                accordion="components-three"
                icon="nav-icon fas nlyfont nly-icon-logo-polymer"
                text="菜单树4"
              >
                <nly-sidebar-nav-item
                  to="/"
                  icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                  exact
                  >菜单5</nly-sidebar-nav-item
                >
              </nly-sidebar-nav-tree>
            </nly-sidebar-nav-tree>
          </nly-sidebar-nav>
        </nly-sidebar>
      </nly-sidebar-container>
      <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
    </nly-wrapper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {
      showSidebar() {
        if (this.show) {
          this.show = false;
          // 写这个是为了这里文档演示效果，清除掉 body 的 class， 因为 NlyAdminlteVue 是用 body 来控制菜单栏的
          const bodyClassName = (document.body.className = "");
        } else {
          this.show = true;
        }
      }
    }
  };
</script>
<!-- sidebar.name -->
<!-- sidebar.vue -->
```

## 路由跳转

点击 `nly-sidebar-nav-item` 和 `nly-sidebar-nav-tree` 可以跳转到对应的路由。

设置 `to` prop 可以给组件传入对应的路由，可以是 `String` 或者 `key=value Object`。 比如 `/sidebar` 或者 `{name: sidebar}` 。 设置 `to` 的时候， 路由跳转是 `router-link router.push()`

设置 `replace` 为 `true` 会使路由跳转变成 `router-link router.replace()`

设置 `append` 为 `true` 会把 `to` 指向的路由添加到当前路由后面，再进行跳转

设置 `active` 为 `true`， 或使得`nly-sidebar-nav-item` 和 `nly-sidebar-nav-tree` 处于激活状态

设置 `active-class` 可以自定义路由激活状态的 css 类

设置 `exact` 为 `true` 会开启路由匹配模式， 如果当前路由与 `to` 指向的路由是相同的，则会使得 `nly-sidebar-nav-item` 和 `nly-sidebar-nav-tree` 处于激活状态

设置 `exact-active-class` 可以自定义路由匹配激活状态的 css 类

## 手风琴模式

`nly-sidebar-nav-tree` 可以设置手风琴模式， prop `accordion` 可以用来控制手风琴分组。 默认值是 `nly-sidebar-accordion`。 如果不需要手风琴模式，请设置 `accordion` 为 `null`。

如果需要给不同级别的 `nly-sidebar-nav-tree` 开启手风琴模式， 请给不同级别的 tree 设置不同的 `accordion` 值， 且给同一级别的 tree 设置 相同的 `accordion` 值。

`target` prop 是必传参数， 请保证 `nly-sidebar-nav-tree` 的 `target` 唯一, `nly-sidebar-nav-tree` 是通过 `target` 来控制对应元素收起展开的。 且 `target` 并没有设置默认值，多个相同，会导致一起展开收起。

`nly-sidebar-nav-tree` 中嵌入了一个 `nly-link` 组件， 关于 `to`, `repalce`, `active` 等 prop 跟 `nly-link` 用法是一样的， 具体请查看 [`nly-link`](/docs/components/link)

可以设置 `visible` prop 为 `true` 来使得 `nly-sidebar-nav-tree` 默认展开, 如果是手风琴模式， 请不要同时设置多个 `visible` prop 为 `true`，请保证只有 `visible` prop 为 `true`。

可以设置 `appear` prop 来设置初始渲染动画

avtive prop 可以设置当前 `nly-sidebar-nav-tree` 的激活状态

### 非手风琴模式

如果不需要手风琴模式，请设置 `accordion` 为 `null` 或者为不同的值

```html
<template>
  <div>
    <div>
      <nly-button block @click="showSidebar" variant="info"
        >点击渲染左侧菜单栏</nly-button
      >
      <nly-button
        block
        v-nly-sidebar-collapse.sidebar-collapse
        class="navItem"
        :disabled="!show"
        bg-variant="pink"
        >点击收起左侧菜单栏</nly-button
      >
    </div>
    <nly-wrapper layout="fixed" v-if="show">
      <nly-sidebar-container hover style="margin-top:66px" side-mini>
        <nly-sidebar-brand to="#-">
          <nly-sidebar-brandimg
            src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
            elevation
            circle
          />
          <nly-sidebar-brandtext>NLY Adminlte Vue</nly-sidebar-brandtext>
        </nly-sidebar-brand>

        <nly-sidebar>
          <nly-sidebar-userpanel class="mt-3 pb-3 mb-3 d-flex">
            <nly-sidebar-userpanel-img
              src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
              class="SSS"
            />
            <nly-sidebar-userpanel-info to="#-"
              >Nejinn lerity</nly-sidebar-userpanel-info
            >
          </nly-sidebar-userpanel>
          <nly-sidebar-nav class="mt-2">
            <nly-sidebar-nav-tree
              target="components-one"
              visible
              active
              accordion="components-one"
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="非手风琴1"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-logo-chrome"
                exact
                >菜单1</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>
            <nly-sidebar-nav-tree
              target="components-two"
              accordion="components-two"
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="非手风琴2"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                exact
                >菜单5</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>
          </nly-sidebar-nav>
        </nly-sidebar>
      </nly-sidebar-container>
      <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
    </nly-wrapper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {
      showSidebar() {
        if (this.show) {
          this.show = false;
          // 写这个是为了这里文档演示效果，清除掉 body 的 class， 因为 NlyAdminlteVue 是用 body 来控制菜单栏的
          const bodyClassName = (document.body.className = "");
        } else {
          this.show = true;
        }
      }
    }
  };
</script>
<!-- sidebar.name -->
<!-- sidebar.vue -->
```

### 手风琴模式

默认手风琴模式：

```html
<template>
  <div>
    <div>
      <nly-button block @click="showSidebar" variant="info"
        >点击渲染左侧菜单栏</nly-button
      >
      <nly-button
        block
        v-nly-sidebar-collapse.sidebar-collapse
        class="navItem"
        :disabled="!show"
        bg-variant="pink"
        >点击收起左侧菜单栏</nly-button
      >
    </div>
    <nly-wrapper layout="fixed" v-if="show">
      <nly-sidebar-container hover style="margin-top:66px" side-mini>
        <nly-sidebar-brand to="#-">
          <nly-sidebar-brandimg
            src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
            elevation
            circle
          />
          <nly-sidebar-brandtext>NLY Adminlte Vue</nly-sidebar-brandtext>
        </nly-sidebar-brand>

        <nly-sidebar>
          <nly-sidebar-userpanel class="mt-3 pb-3 mb-3 d-flex">
            <nly-sidebar-userpanel-img
              src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
              class="SSS"
            />
            <nly-sidebar-userpanel-info to="#-"
              >Nejinn lerity</nly-sidebar-userpanel-info
            >
          </nly-sidebar-userpanel>
          <nly-sidebar-nav class="mt-2">
            <nly-sidebar-nav-tree
              target="components-one"
              visible
              active
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="手风琴1"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-logo-chrome"
                exact
                >菜单1</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>
            <nly-sidebar-nav-tree
              target="components-two"
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="手风琴2"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                exact
                >菜单5</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>
          </nly-sidebar-nav>
        </nly-sidebar>
      </nly-sidebar-container>
      <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
    </nly-wrapper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {
      showSidebar() {
        if (this.show) {
          this.show = false;
          // 写这个是为了这里文档演示效果，清除掉 body 的 class， 因为 NlyAdminlteVue 是用 body 来控制菜单栏的
          const bodyClassName = (document.body.className = "");
        } else {
          this.show = true;
        }
      }
    }
  };
</script>
<!-- sidebar.name -->
<!-- sidebar.vue -->
```

多级手风琴模式：

```html
<template>
  <div>
    <div>
      <nly-button block @click="showSidebar" variant="info"
        >点击渲染左侧菜单栏</nly-button
      >
      <nly-button
        block
        v-nly-sidebar-collapse.sidebar-collapse
        class="navItem"
        :disabled="!show"
        bg-variant="pink"
        >点击收起左侧菜单栏</nly-button
      >
    </div>
    <nly-wrapper layout="fixed" v-if="show">
      <nly-sidebar-container hover style="margin-top:66px" side-mini>
        <nly-sidebar-brand to="#-">
          <nly-sidebar-brandimg
            src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
            elevation
            circle
          />
          <nly-sidebar-brandtext>NLY Adminlte Vue</nly-sidebar-brandtext>
        </nly-sidebar-brand>

        <nly-sidebar>
          <nly-sidebar-userpanel class="mt-3 pb-3 mb-3 d-flex">
            <nly-sidebar-userpanel-img
              src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
              class="SSS"
            />
            <nly-sidebar-userpanel-info to="#-"
              >Nejinn lerity</nly-sidebar-userpanel-info
            >
          </nly-sidebar-userpanel>
          <nly-sidebar-nav class="mt-2">
            <nly-sidebar-nav-tree
              target="components-one"
              visible
              active
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="手风琴1"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-logo-chrome"
                exact
                >菜单1</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>
            <nly-sidebar-nav-tree
              target="components-two"
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="手风琴2"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                exact
                >菜单5</nly-sidebar-nav-item
              >
              <nly-sidebar-nav-tree
                target="components-three"
                appear
                accordion="level-2"
                icon="nav-icon fas nlyfont nly-icon-logo-polymer"
                text="手风琴3"
              >
                <nly-sidebar-nav-item
                  to="/"
                  icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                  exact
                  >菜单5</nly-sidebar-nav-item
                >
              </nly-sidebar-nav-tree>
              <nly-sidebar-nav-tree
                target="components-four"
                appear
                accordion="level-2"
                icon="nav-icon fas nlyfont nly-icon-logo-polymer"
                text="手风琴4"
              >
                <nly-sidebar-nav-item
                  to="/"
                  icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                  exact
                  >菜单5</nly-sidebar-nav-item
                >
              </nly-sidebar-nav-tree>
            </nly-sidebar-nav-tree>
          </nly-sidebar-nav>
        </nly-sidebar>
      </nly-sidebar-container>
      <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
    </nly-wrapper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {
      showSidebar() {
        if (this.show) {
          this.show = false;
          // 写这个是为了这里文档演示效果，清除掉 body 的 class， 因为 NlyAdminlteVue 是用 body 来控制菜单栏的
          const bodyClassName = (document.body.className = "");
        } else {
          this.show = true;
        }
      }
    }
  };
</script>
<!-- sidebar.name -->
<!-- sidebar.vue -->
```

## 菜单标题

可以使用 `nly-sidebar-nav-header` 设置菜单 title 来给菜单进行分组

```html
<template>
  <div>
    <div>
      <nly-button block @click="showSidebar" variant="info"
        >点击渲染左侧菜单栏</nly-button
      >
      <nly-button
        block
        v-nly-sidebar-collapse.sidebar-collapse
        class="navItem"
        :disabled="!show"
        bg-variant="pink"
        >点击收起左侧菜单栏</nly-button
      >
    </div>
    <nly-wrapper layout="fixed" v-if="show">
      <nly-sidebar-container hover style="margin-top:66px" side-mini>
        <nly-sidebar-brand to="#-">
          <nly-sidebar-brandimg
            src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
            elevation
            circle
          />
          <nly-sidebar-brandtext>NLY Adminlte Vue</nly-sidebar-brandtext>
        </nly-sidebar-brand>

        <nly-sidebar>
          <nly-sidebar-userpanel class="mt-3 pb-3 mb-3 d-flex">
            <nly-sidebar-userpanel-img
              src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
              class="SSS"
            />
            <nly-sidebar-userpanel-info to="#-"
              >Nejinn lerity</nly-sidebar-userpanel-info
            >
          </nly-sidebar-userpanel>
          <nly-sidebar-nav class="mt-2">
            <nly-sidebar-nav-header>分组0 </nly-sidebar-nav-header>
            <nly-sidebar-nav-item
              to="/"
              icon="nav-icon far nlyfont nly-icon-logo-chrome"
              exact
              >首页</nly-sidebar-nav-item
            >
            <nly-sidebar-nav-header>分组1 </nly-sidebar-nav-header>
            <nly-sidebar-nav-tree
              target="components-one"
              visible
              active
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="分组1"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-logo-chrome"
                exact
                >菜单1</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>
            <nly-sidebar-nav-header>分组2 </nly-sidebar-nav-header>
            <nly-sidebar-nav-tree
              target="components-two"
              appear
              icon="nav-icon fas nlyfont nly-icon-logo-polymer"
              text="分组2"
            >
              <nly-sidebar-nav-item
                to="/"
                icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
                exact
                >菜单5</nly-sidebar-nav-item
              >
            </nly-sidebar-nav-tree>
          </nly-sidebar-nav>
        </nly-sidebar>
      </nly-sidebar-container>
      <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
    </nly-wrapper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {
      showSidebar() {
        if (this.show) {
          this.show = false;
          // 写这个是为了这里文档演示效果，清除掉 body 的 class， 因为 NlyAdminlteVue 是用 body 来控制菜单栏的
          const bodyClassName = (document.body.className = "");
        } else {
          this.show = true;
        }
      }
    }
  };
</script>
<!-- sidebar.name -->
<!-- sidebar.vue -->
```

## 数组渲染 sidebar

`nly-sidebar-menu` 是一个接受数组，渲染 `sidebar` 的组件。

`sidebarList` 是接收渲染数组的 prop。通常格式如下：

```js
sidebarList: [
  {
    _type: "nly-sidebar-nav",
    _class: "mt-2",
    dataGroup: "zero",
    _key: "one",
    exact: true,
    _children: [
      {
        _type: "nly-sidebar-nav-item",
        _name: "一级菜单 item 1",
        icon: "nav-icon fas nlyfont nly-icon-dashboard",
        exact: true,
        exactActiveClass: "active",
        dataGroup: "one",
        _key: "two",
        to: { name: "SidebarMenuExact1" }
      },
      {
        _type: "nly-sidebar-nav-tree",
        target: "components-two",
        icon: "nav-icon fas nlyfont nly-icon-dashboard",
        text: "一级菜单 tree 1",
        dataGroup: "one",
        _key: "three",
        exact: true,
        _children: [
          {
            _type: "nly-sidebar-nav-item",
            _name: "二级菜单 item 1",
            icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
            exact: true,
            exactActiveClass: "active",
            dataGroup: "three",
            _key: "five",
            to: { name: "SidebarMenuExact2" }
          }
        ]
      },
      {
        _type: "nly-sidebar-nav-tree",
        target: "components-three",
        icon: "nav-icon fas nlyfont nly-icon-dashboard",
        text: "一级菜单 tree 2",
        dataGroup: "one",
        _key: "four",
        exact: true,
        _children: [
          {
            _type: "nly-sidebar-nav-item",
            _name: "二级菜单 item 2",
            icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
            exact: true,
            exactActiveClass: "active",
            to: { name: "SidebarMenuExact3" },
            dataGroup: "four",
            _key: "six"
          },
          {
            _type: "nly-sidebar-nav-item",
            _name: "二级菜单 item 3",
            icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
            exact: true,
            exactActiveClass: "active",
            to: { name: "SidebarMenuExact4" },
            dataGroup: "four",
            _key: "seven"
          },
          {
            _type: "nly-sidebar-nav-tree",
            target: "components-four",
            accordion: "sss",
            icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
            text: "二级菜单 tree 1",
            dataGroup: "four",
            _key: "eight",
            exact: true,
            _children: [
              {
                _type: "nly-sidebar-nav-item",
                _name: "三级菜单 item 1",
                icon: "nav-icon fas nlyfont nly-icon-logo-aperture",
                exact: true,
                exactActiveClass: "active",
                to: { name: "SidebarMenuExact5" },
                dataGroup: "eight",
                _key: "nine"
              }
            ]
          },
          {
            _type: "nly-sidebar-nav-tree",
            target: "components-five",
            accordion: "sss",
            icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
            text: "二级菜单 tree 2",
            dataGroup: "four",
            _key: "ten",
            exact: true,
            _children: [
              {
                _type: "nly-sidebar-nav-item",
                _name: "三级菜单 item 2",
                icon: "nav-icon fas nlyfont nly-icon-logo-aperture",
                exact: true,
                exactActiveClass: "active",
                to: { name: "SidebarMenuExact6" },
                dataGroup: "ten",
                _key: "11"
              },
              {
                _type: "nly-sidebar-nav-tree",
                target: "components-six",
                accordion: "ssss",
                icon: "nav-icon fas nlyfont nly-icon-logo-aperture",
                text: "三级菜单 tree 1",
                dataGroup: "ten",
                _key: "12",
                exact: true,
                _children: [
                  {
                    _type: "nly-sidebar-nav-item",
                    _name: "四级菜单",
                    icon: "nav-icon fas nlyfont nly-icon-logo-pinterest",
                    exact: true,
                    exactActiveClass: "active",
                    to: { name: "SidebarMenuExact7" },
                    dataGroup: "12",
                    _key: "13"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
```

`sidebarList` 支持的属性如下：

- `_type`, 组件名称或者 html 标签字符串

- `_name`, 插入到组件默认插槽的文本

- `attrs`, attrs 属性

- `directives`, 指令，但并不是所有的指令都支持，只支持 jsx 支持的指令

- `on`, 函数事件

- `nativeOn`, 原生函数事件

- `class`, css 类名

- `style`, 式样对象

- `domProps`, dom 参数

- `scopedSlots`, 作用于插槽

- `slot`, 插槽

- `key`, `vue :key`

- `ref`, `ref` 属性

- `refInFor`,

- `id`, dom 的 id

- `prop` name, 组件 prop， 比如上列中的 `to` prop, `exact` prop

其中 `_type` 为 `nly-sidebar-nav-tree` 的时候额外支持属性：

- `dataGroup`, 父组件的 `vue :key` 值

`nly-sidebar-menu` 支持全路由自动匹配激活模式， 配置该模式， `nly-sidebar-nav-item` 节点会自动激活，且此节点的父元素如果是 `nly-sidebar-nav-tree` 会自动激活且展开。

- 开启自动匹配激活模式的时候， 需要给 `nly-sidebar-nav-tree`, `nly-sidebar-nav-item` 传入属性`dataGroup`。

点击查看 [`demo`](http://nly-adminlte-vue-demo.nejinn.com/#/sidebar-menu-exact), demo 代码如下：

```html
<template>
  <nly-wrapper layout="fixed">
    <nly-wrapper-header style="height:57px">
      <nly-button v-nly-sidebar-collapse.sidebar-collapse>点击收起</nly-button>
    </nly-wrapper-header>
    <nly-sidebar-menu :sidebarList="sidebarList" side-mini exact />
    <router-view />
    <nly-wrapper-footer style="height:57px">footer</nly-wrapper-footer>
    <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
  </nly-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        sidebarList: [
          {
            _type: "nly-sidebar-nav",
            _class: "mt-2",
            dataGroup: "zero",
            _key: "one",
            exact: true,
            "child-indent": true,
            _children: [
              {
                _type: "nly-sidebar-nav-item",
                _name: "一级菜单 item 1",
                icon: "nav-icon fas nlyfont nly-icon-dashboard",
                exact: true,
                exactActiveClass: "active",
                dataGroup: "one",
                _key: "two",
                to: { name: "SidebarMenuExact1" }
              },
              {
                _type: "nly-sidebar-nav-tree",
                target: "components-two",
                icon: "nav-icon fas nlyfont nly-icon-dashboard",
                text: "一级菜单 tree 1",
                dataGroup: "one",
                _key: "three",
                exact: true,
                _children: [
                  {
                    _type: "template",
                    _slot: "linktool",
                    _children: [
                      {
                        _name: `1`,
                        _type: "nly-badge",
                        variant: "info",
                        badgeClass: "right"
                      }
                    ]
                  },
                  {
                    _type: "nly-sidebar-nav-item",
                    _name: "二级菜单 item 1",
                    icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                    exact: true,
                    exactActiveClass: "active",
                    dataGroup: "three",
                    _key: "five",
                    to: { name: "SidebarMenuExact2" }
                  }
                ]
              },
              {
                _type: "nly-sidebar-nav-tree",
                target: "components-three",
                icon: "nav-icon fas nlyfont nly-icon-dashboard",
                text: "一级菜单 tree 2",
                dataGroup: "one",
                _key: "four",
                exact: true,
                _children: [
                  {
                    _type: "nly-sidebar-nav-item",
                    _name: "二级菜单 item 2",
                    icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                    exact: true,
                    exactActiveClass: "active",
                    to: { name: "SidebarMenuExact3" },
                    dataGroup: "four",
                    _key: "six"
                  },
                  {
                    _type: "nly-sidebar-nav-item",
                    _name: "二级菜单 item 3",
                    icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                    exact: true,
                    exactActiveClass: "active",
                    to: { name: "SidebarMenuExact4" },
                    dataGroup: "four",
                    _key: "seven"
                  },
                  {
                    _type: "nly-sidebar-nav-tree",
                    target: "components-four",
                    accordion: "sss",
                    icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                    text: "二级菜单 tree 1",
                    dataGroup: "four",
                    _key: "eight",
                    exact: true,
                    _children: [
                      {
                        _type: "nly-sidebar-nav-item",
                        _name: "三级菜单 item 1",
                        icon: "nav-icon fas nlyfont nly-icon-logo-aperture",
                        exact: true,
                        exactActiveClass: "active",
                        to: { name: "SidebarMenuExact5" },
                        dataGroup: "eight",
                        _key: "nine"
                      }
                    ]
                  },
                  {
                    _type: "nly-sidebar-nav-tree",
                    target: "components-five",
                    accordion: "sss",
                    icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                    text: "二级菜单 tree 2",
                    dataGroup: "four",
                    _key: "ten",
                    exact: true,
                    _children: [
                      {
                        _type: "nly-sidebar-nav-item",
                        _name: "三级菜单 item 2",
                        icon: "nav-icon fas nlyfont nly-icon-logo-aperture",
                        exact: true,
                        exactActiveClass: "active",
                        to: { name: "SidebarMenuExact6" },
                        dataGroup: "ten",
                        _key: "oneone"
                      },
                      {
                        _type: "nly-sidebar-nav-tree",
                        target: "components-six",
                        accordion: "ssss",
                        icon: "nav-icon fas nlyfont nly-icon-logo-aperture",
                        text: "三级菜单 tree 1",
                        dataGroup: "ten",
                        _key: "onetwo",
                        exact: true,
                        _children: [
                          {
                            _type: "nly-sidebar-nav-item",
                            _name: "四级菜单",
                            icon:
                              "nav-icon fas nlyfont nly-icon-logo-pinterest",
                            exact: true,
                            exactActiveClass: "active",
                            to: { name: "SidebarMenuExact7" },
                            dataGroup: "onetwo",
                            _key: "onethree"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  };
</script>
```
