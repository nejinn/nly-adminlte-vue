# Sidebar

> 一个可以收缩，展开，悬浮，支持多级子菜单的左侧导航栏

- 左侧导航栏容器， 收起成只有 icon 的导航栏，需要 body 中有 class='sidebar-mini sidebar-collapse'，如果只有 sidebar-collapse，则会将左侧导航栏滑到左侧区域外，不可见。sidebar-collapse 用来控制左侧导航栏展开收缩。sidebar-mini 允许左侧导航栏收起到只有图标的状态

- 下拉菜单元素，默认所有下拉菜单为手风琴模式，如需关闭，请给每个下拉菜单设置 accordion=null

- 如果需要分组手风琴，请给同一组的菜单设置相同的 accordion

- 请保证 target 唯一，这是控制手风琴的唯一标识。多个相同，会导致一起展开收起。

- 如果有多个 target 相同，请勿设置 visible=true，会导致浏览器崩溃

- 如果有三级子菜单，请给同一级别的子菜单 tree 设置手风琴分组

- menu 如果需要自动开启路由匹配模式， 给 每一个 item 元素 设置 exact: true, 请不要给设置元素设置 visible 属性， 也不要给元素设置 active 属性

```html
<template>
  <div>
    <div>
      <nly-button block @click="showSidebar" variant="info"
        >点击显示左侧菜单栏</nly-button
      >
      <nly-button
        block
        v-nly-sidebar-collapse.navitem
        class="navItem"
        :disabled="!show"
        bg-variant="pink"
        >点击收起左侧菜单栏</nly-button
      >
    </div>
    <nly-sidebar-container
      hover
      style="margin-top:66px"
      side-mini
      layout="fixed"
      v-if="show"
    >
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
