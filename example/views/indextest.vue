<template>
  <nly-wrapper
    side-mini
    layout="fixed"
    wrapper-class="XXXX"
    container-class="zzz"
  >
    <nly-wrapper-header style="height:57px">header</nly-wrapper-header>
    <nly-sidebar-menu :sidebarList="sidebarList" />
    <nly-wrapper-content style="height:calc(100vh - 116px)"
      >main</nly-wrapper-content
    >
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
          childIndent: true,
          _class: "mt-2",
          _children: [
            {
              _type: "nly-sidebar-nav-item",
              _name: "菜单1",
              icon: "nav-icon fas nlyfont nly-icon-dashboard",
              exact: true,
              exactActiveClass: "active",
              to: "/sidebar"
            }
          ]
        }
      ]
    };
  }
};
</script>
