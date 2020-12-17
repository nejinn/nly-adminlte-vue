<template>
  <nly-wrapper layout="fixed">
    <nly-wrapper-header style="height:57px">
      <nly-button v-nly-sidebar-collapse.sidebar-collapse>点击收起</nly-button>
    </nly-wrapper-header>
    <nly-sidebar-menu
      :sidebarList="sidebarList"
      side-mini
      exact
      container-hover
      brand-to="/"
      :brand-img-src="logo"
      brand-img-circle
      brand-img-elevation
      brand-text="NLY Adminlte Vue"
      :user-src="logo"
      info-text="dddd"
    />
    <router-view />
    <nly-wrapper-footer style="height:57px">footer</nly-wrapper-footer>
    <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
  </nly-wrapper>
</template>

<script>
export default {
  data() {
    return {
      logo: undefined,
      sidebarList: [
        {
          _type: "nly-sidebar-nav",
          _class: "mt-2",
          dataGroup: "zero",
          _key: 0,
          exact: true,
          "child-indent": true,
          _children: [
            {
              _type: "nly-sidebar-nav-item",
              _name: "一级菜单 item 1",
              icon: "nav-icon fas nlyfont nly-icon-dashboard",
              exact: true,
              exactActiveClass: "active",
              dataGroup: 0,
              _key: 1,
              to: { name: "SidebarMenuExact1" }
            },
            {
              _type: "nly-sidebar-nav-tree",
              target: "components-two",
              icon: "nav-icon fas nlyfont nly-icon-dashboard",
              text: "一级菜单 tree 1",
              dataGroup: 0,
              _key: 2,
              exact: true,
              _children: [
                {
                  _type: "nly-sidebar-nav-item",
                  _name: "二级菜单 item 1",
                  icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                  exact: true,
                  exactActiveClass: "active",
                  dataGroup: 2,
                  _key: 3,
                  to: { name: "SidebarMenuExact2" }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  created() {
    this.logo = require("../../assets/nly-adminlte-vue/img/NLYLOGO.png");
  }
};
</script>
