<template>
  <nly-container-wrapper
    side-mini
    layout="fixed"
    wrapper-class="XXXX"
    container-class="zzz"
  >
    <nly-navbar
      :variant="navbar.variant"
      navbar-class="xxx"
      header
      :border="navbar.border"
      :size="navbar.size"
    >
      <nly-navbar-nav class="xxxxx">
        <nly-nav-item v-nly-sidebar-collapse.navitem>
          <nly-icon icon="nlyfont nly-logo-windows" />
        </nly-nav-item>
        <nly-nav-item
          active
          class="d-none d-sm-inline-block"
          :to="{ name: 'collapse' }"
        >
          home
        </nly-nav-item>

        <nly-nav-item disabled class="d-none d-sm-inline-block">
          home
        </nly-nav-item>

        <nly-nav-item class="d-none d-sm-inline-block">
          home
        </nly-nav-item>

        <nly-nav-dropdown
          id="menudropdon1"
          :popup="true"
          :dropdown-toggle="true"
          menu-class="border-0"
          size="xl"
          class="d-none d-sm-inline-block"
        >
          <template slot="linkcontent">
            测试
            <nly-icon icon="nlyfont nly-notification-fill" />
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
          item-class="d-none d-sm-inline-block"
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
      <nly-navbar-nav class="ml-auto">
        <nly-nav-dropdown
          :popup="true"
          menu-class="border-0"
          size="lg"
          menu-direction="right"
        >
          <template slot="linkcontent">
            <nly-icon icon="nlyfont nly-notification-fill" />
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
            <nly-icon icon="nlyfont nly-mail-fill" />
            <nly-badge bg-variant="fuchsia" badge-class="navbar-badge">
              12
            </nly-badge>
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

        <nly-nav-item v-nly-control-sidebar-collapse>
          <nly-icon icon="nlyfont nlyfont nly-settings" />
        </nly-nav-item>
      </nly-navbar-nav>
    </nly-navbar>

    <nly-sidebar-container :hover="sidebar.hover">
      <nly-sidebar-brand to="collapse" :variant="sidebar.brand.variant">
        <nly-sidebar-brandimg :src="logo" elevation circle />
        <nly-sidebar-brandtext>AdminLTE 3</nly-sidebar-brandtext>
      </nly-sidebar-brand>

      <nly-sidebar>
        <nly-sidebar-userpanel class="mt-3 pb-3 mb-3 d-flex">
          <nly-sidebar-userpanel-img :src="logo" class="SSS" />
          <nly-sidebar-userpanel-info to="collapse">
            Alexander Pierce
          </nly-sidebar-userpanel-info>
        </nly-sidebar-userpanel>
        <nly-sidebar-nav
          class="mt-2"
          :flat="sidebar.sidebarShape.flat"
          :pill="sidebar.sidebarShape.pill"
          :compact="sidebar.sidebarShape.compact"
          :legacy="sidebar.sidebarShape.legacy"
          :child-indent="sidebar.sidebarShape.childIndent"
          sidebar-nav-class="zzz"
        >
          <nly-sidebar-nav-header>
            EXAMPLE
          </nly-sidebar-nav-header>
          <nly-sidebar-nav-item
            to="/"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon fas nlyfont nly-color-palette"
            exact
          >
            home
            <nly-badge bg-variant="teal" badge-class="right">
              NEW
            </nly-badge>
          </nly-sidebar-nav-item>

          <nly-sidebar-nav-tree
            target="collapse"
            visible
            icon="nav-icon fas nlyfont nly-logo-aperture"
            link-class="linkclass"
            menu-class="menuClass"
          >
            <template slot="link">
              collapse
            </template>
            <template slot="linktool">
              <nly-badge variant="primary" badge-class="right" pill>
                12
              </nly-badge>
            </template>

            <nly-sidebar-nav-item
              to="/collapse"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-logo-chrome"
              exact
            >
              collapse
              <nly-badge bg-variant="fuchsia" badge-class="right" size="sm">
                NEW
              </nly-badge>
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="navbar"
            icon="nav-icon fas nlyfont nly-nav-fill"
          >
            <template slot="link">
              navbar
            </template>
            <nly-sidebar-nav-item
              to="/navbar"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-nav-tool"
              exact
            >
              navbar
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="nav"
            icon="nav-icon fas nlyfont nly-magic-cube"
          >
            <template slot="link">
              nav
            </template>
            <nly-sidebar-nav-item
              to="/nav"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-keypad"
              exact
            >
              nav
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="container"
            icon="nav-icon fas nlyfont nly-contaier-wrapper"
          >
            <template slot="link">
              container
            </template>
            <nly-sidebar-nav-item
              to="/container"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-container"
              exact
            >
              container
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="grid"
            icon="nav-icon fas nlyfont nly-grid"
          >
            <template slot="link">
              grid
            </template>
            <nly-sidebar-nav-item
              to="/grid"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-layout"
              exact
            >
              grid
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="link"
            icon="nav-icon fas nlyfont nly-analytics"
          >
            <template slot="link">
              link
            </template>
            <nly-sidebar-nav-item
              to="/link"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-router-link"
              exact
            >
              link
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="button"
            icon="nav-icon fas nlyfont nly-button"
          >
            <template slot="link">
              button
            </template>
            <nly-sidebar-nav-item
              to="/button"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-logo-ionic"
              exact
            >
              button
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="switch"
            icon="nav-icon fas nlyfont nly-switch-fill"
          >
            <template slot="link">
              switch
            </template>
            <nly-sidebar-nav-item
              to="/switch"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-switch"
              exact
            >
              switch
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-item
            to="/card"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon far nlyfont nly-filing"
            exact
          >
            card
          </nly-sidebar-nav-item>
          <nly-sidebar-nav-item
            to="/badge"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon far nlyfont nly-badge-small"
            exact
          >
            badge
          </nly-sidebar-nav-item>

          <nly-sidebar-nav-item
            to="/toast"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon far nlyfont nly-toaster"
            exact
          >
            toast
          </nly-sidebar-nav-item>

          <nly-sidebar-nav-item
            to="/spinner"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon far nlyfont nly-logo-pinterest"
            exact
          >
            spinner
          </nly-sidebar-nav-item>

          <nly-sidebar-nav-item
            to="/progress"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon far nlyfont nly-cog"
            exact
          >
            progress
          </nly-sidebar-nav-item>
        </nly-sidebar-nav>
      </nly-sidebar>
    </nly-sidebar-container>
    <router-view />
    <nly-collapse-footer :size="footerSizeSm">
      <strong
        >Copyright © 2014-2019
        <a href="http://adminlte.io">AdminLTE.io</a>.</strong
      >
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.2-pre
      </div>
    </nly-collapse-footer>
    <nly-control-sidebar-container :size="controlSidebarSizeSm">
      <!-- Control sidebar content goes here -->
      <nly-control-sidebar class="p-3">
        <h5>Customize AdminLTE</h5>
        <hr class="mb-2" />
        <div class="mb-1">
          <nly-switch
            off-variant="info"
            on-variant="danger"
            v-model="controlSidebar.size"
          >
            <span>controlSidebar小字体</span>
          </nly-switch>
        </div>
        <div class="mb-1">
          <nly-switch
            off-variant="info"
            on-variant="danger"
            v-model="navbar.border"
          >
            <span>navbar开启底部边框</span>
          </nly-switch>
        </div>
        <div class="mb-1">
          <div class="mb-1">
            <nly-switch
              off-variant="info"
              on-variant="warning"
              v-model="body.sizeSm"
            >
              <span>页面小号字体</span>
            </nly-switch>
          </div>
        </div>
        <div class="mb-1">
          <nly-switch
            off-variant="info"
            on-variant="pink"
            v-model="navbar.sizeSm"
          >
            <span>navbar小号字体</span>
          </nly-switch>
        </div>
        <div class="mb-1">
          <nly-switch
            off-variant="primary"
            on-variant="teal"
            v-model="sidebar.sidebarShape.flat"
          >
            <span>左侧菜单flat形状</span>
          </nly-switch>
        </div>
        <div class="mb-1">
          <nly-switch
            off-variant="lightblue"
            on-variant="success"
            v-model="sidebar.sidebarShape.pill"
          >
            <span>左侧菜单pill形状</span>
          </nly-switch>
        </div>

        <div class="mb-1">
          <nly-switch
            off-variant="olive"
            on-variant="lime"
            v-model="sidebar.sidebarShape.compact"
          >
            <span>左侧菜单compact形状</span>
          </nly-switch>
        </div>
        <div class="mb-1">
          <nly-switch
            off-variant="fuchsia"
            on-variant="maroon"
            v-model="sidebar.sidebarShape.legacy"
          >
            <span>左侧菜单legacy形状</span>
          </nly-switch>
        </div>

        <div class="mb-1">
          <nly-switch
            off-variant="indigo"
            on-variant="orange"
            v-model="sidebar.sidebarShape.childIndent"
          >
            <span>左侧菜单栏子级缩进</span>
          </nly-switch>
        </div>

        <div class="mb-1">
          <nly-switch
            off-variant="lime"
            on-variant="purple"
            v-model="sidebar.hover"
          >
            <span>启用左侧导航栏鼠标悬浮展开</span>
          </nly-switch>
        </div>

        <div class="mb-1">
          <nly-switch
            off-variant="indigo"
            on-variant="orange"
            v-model="footer.size"
          >
            <span>footer小字体</span>
          </nly-switch>
        </div>

        <h6>Navbar Variants</h6>

        <h6>Accent Color Variants</h6>
        <div class="d-flex"></div>

        <h6>Dark Sidebar Variants</h6>
        <div class="d-flex"></div>

        <h6>Light Sidebar Variants</h6>
        <div class="d-flex"></div>

        <h6>Brand Logo Variants</h6>
        <div class="d-flex"></div>
      </nly-control-sidebar>
    </nly-control-sidebar-container>
    <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
  </nly-container-wrapper>
</template>

<script>
import logo from "../assets/img/AdminLTELogo.png";
export default {
  data() {
    return {
      logo,
      navbar: {
        border: true,
        variant: "white",
        size: null,
        sizeSm: false
      },
      sidebar: {
        sidebarShape: {
          flat: false,
          pil: false,
          compact: false,
          legacy: false,
          childIndent: false
        },
        brand: {
          variant: "dark"
        },
        hover: true
      },
      body: {
        sizeSm: false
      },
      controlSidebar: {
        size: false,
        sizeSm: null
      },
      footer: {
        size: false,
        sizeSm: null
      }
    };
  },
  computed: {
    navbarSizeSm() {
      return this.navbar.sizeSm;
    },
    bodySizeSm() {
      return this.body.sizeSm;
    },
    controlSidebarSizeSm() {
      return this.controlSidebar.size ? "sm" : null;
    },
    footerSizeSm() {
      return this.footer.size ? "sm" : null;
    }
  },
  watch: {
    bodySizeSm: function(newval, oldval) {
      if (newval !== oldval) {
        if (newval) {
          const bodyClass = document.body.className;
          if (bodyClass.indexOf("text-sm") == -1) {
            document.body.classList.add("text-sm");
          }
        } else {
          document.body.classList.remove("text-sm");
        }
      }
    },
    navbarSizeSm: function() {
      this.navbar.size = this.navbar.sizeSm ? "sm" : null;
    }
  }
};
</script>
