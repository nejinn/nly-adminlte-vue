<template>
  <nly-wrapper>
    <nly-wrapper-header style="height:57px">header</nly-wrapper-header>
    <nly-sidebar-menu
      :sidebarList="sidebarList"
      side-mini
      layout="fixed"
      exact
    />
    <router-view />
    <nly-wrapper-footer style="height:57px">footer</nly-wrapper-footer>
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
          _children: [
            {
              _type: "nly-sidebar-nav-item",
              _name: "菜单1",
              icon: "nav-icon fas nlyfont nly-icon-dashboard",
              exact: true,
              exactActiveClass: "active",
              dataGroup: "one",
              _key: "two",
              to: { name: "sidebar" }
            },
            {
              _type: "nly-sidebar-nav-tree",
              target: "components-two",
              icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
              text: "菜单2",
              dataGroup: "one",
              _key: "three",
              exact: true,
              _children: [
                {
                  _type: "nly-sidebar-nav-item",
                  _name: "菜单3",
                  icon: "nav-icon fas nlyfont nly-icon-dashboard",
                  exact: true,
                  exactActiveClass: "active",
                  dataGroup: "three",
                  _key: "five",
                  to: { name: "test1" }
                }
              ]
            },
            {
              _type: "nly-sidebar-nav-tree",
              target: "components-three",
              icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
              text: "菜单树4",
              dataGroup: "one",
              _key: "four",
              exact: true,
              _children: [
                {
                  _type: "nly-sidebar-nav-item",
                  _name: "菜单5",
                  icon: "nav-icon fas nlyfont nly-icon-dashboard",
                  exact: true,
                  exactActiveClass: "active",
                  to: { name: "test2" },
                  dataGroup: "four",
                  _key: "six"
                },
                {
                  _type: "nly-sidebar-nav-item",
                  _name: "菜单6",
                  icon: "nav-icon fas nlyfont nly-icon-dashboard",
                  exact: true,
                  exactActiveClass: "active",
                  to: { name: "test3" },
                  dataGroup: "four",
                  _key: "seven"
                },
                {
                  _type: "nly-sidebar-nav-tree",
                  target: "components-four",
                  accordion: "sss",
                  icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                  text: "菜单树7",
                  dataGroup: "four",
                  _key: "eight",
                  exact: true,
                  _children: [
                    {
                      _type: "nly-sidebar-nav-item",
                      _name: "菜单8",
                      icon: "nav-icon fas nlyfont nly-icon-dashboard",
                      exact: true,
                      exactActiveClass: "active",
                      to: { name: "test4" },
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
                  text: "菜单树9",
                  dataGroup: "four",
                  _key: "ten",
                  exact: true,
                  _children: [
                    {
                      _type: "nly-sidebar-nav-item",
                      _name: "菜单10",
                      icon: "nav-icon fas nlyfont nly-icon-dashboard",
                      exact: true,
                      exactActiveClass: "active",
                      to: { name: "test5" },
                      dataGroup: "ten",
                      _key: "11"
                    },
                    {
                      _type: "nly-sidebar-nav-tree",
                      target: "components-six",
                      accordion: "ssss",
                      icon: "nav-icon fas nlyfont nly-icon-logo-polymer",
                      text: "菜单树11",
                      dataGroup: "ten",
                      _key: "12",
                      exact: true,
                      _children: [
                        {
                          _type: "nly-sidebar-nav-item",
                          _name: "菜单12",
                          icon: "nav-icon fas nlyfont nly-icon-dashboard",
                          exact: true,
                          exactActiveClass: "active",
                          to: { name: "test6" },
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
      ]
    };
  }
};
</script>
