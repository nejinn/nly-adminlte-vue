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
                          icon: "nav-icon fas nlyfont nly-icon-logo-pinterest",
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
