<template>
  <nly-container-wrapper
    side-mini
    layout="fixed"
    wrapper-class="XXXX"
    container-class="zzz"
  >
    <nly-navbar variant="info" navbar-class="xxx" header>
      <nly-navbar-nav class="xxxxx">
        <nly-nav-item v-nly-sidebar-collapse.navitem>
          <i class="fas fa-bars"></i>
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

    <nly-sidebar-container>
      <nly-sidebar-brand to="collapse" :variant="variant">
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

        <nly-sidebar-nav class="mt-2" shape="flat" sidebar-nav-class="zzz">
          <nly-sidebar-nav-header>
            EXAMPLE
          </nly-sidebar-nav-header>
          <nly-sidebar-nav-item
            to="/"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon far fa-image"
            exact
          >
            home
          </nly-sidebar-nav-item>

          <nly-sidebar-nav-tree
            target="collapse"
            visible
            active
            icon="nav-icon fas fa-th"
            link-class="linkclass"
            menu-class="menuClass"
          >
            <template slot="link">
              collapse
            </template>
            <nly-sidebar-nav-item
              to="/collapse"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far fa-image"
              exact
            >
              collapse
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree target="navbar" icon="nav-icon fas fa-th">
            <template slot="link">
              navbar
            </template>
            <nly-sidebar-nav-item
              to="/navbar"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far fa-image"
              exact
            >
              navbar
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree target="nav" icon="nav-icon fas fa-th">
            <template slot="link">
              nav
            </template>
            <nly-sidebar-nav-item
              to="/nav"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far fa-image"
              exact
            >
              nav
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree target="container" icon="nav-icon fas fa-th">
            <template slot="link">
              container
            </template>
            <nly-sidebar-nav-item
              to="/container"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far fa-image"
              exact
            >
              container
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree target="grid" icon="nav-icon fas fa-th">
            <template slot="link">
              grid
            </template>
            <nly-sidebar-nav-item
              to="/grid"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far fa-image"
              exact
            >
              grid
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree target="link" icon="nav-icon fas fa-th">
            <template slot="link">
              link
            </template>
            <nly-sidebar-nav-item
              to="/link"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far fa-image"
              exact
            >
              link
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree target="button" icon="nav-icon fas fa-th">
            <template slot="link">
              button
            </template>
            <nly-sidebar-nav-item
              to="/button"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far fa-image"
              exact
            >
              button
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>
        </nly-sidebar-nav>
      </nly-sidebar>
    </nly-sidebar-container>
    <nly-collapse-main>
      <router-view />
    </nly-collapse-main>
    <nly-collapse-footer size>
      <strong
        >Copyright © 2014-2019
        <a href="http://adminlte.io">AdminLTE.io</a>.</strong
      >
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.2-pre
      </div>
    </nly-collapse-footer>
    <nly-sidebar-overlay v-nly-sidebar-collapse.overlay />
  </nly-container-wrapper>
</template>

<script>
import logo from "../assets/img/AdminLTELogo.png";
export default {
  data() {
    return {
      sideMini: true,
      layout: "boxed",
      navbarFixed: false,
      footerFixed: false,
      topNav: false,
      logo,
      variant: ""
    };
  }
};
</script>
