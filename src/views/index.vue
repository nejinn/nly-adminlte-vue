<template>
  <nly-container-wrapper
    :side-mini="sideMini"
    :layout="layout"
    :navbar-fixed="navbarFixed"
    :footer-fixed="footerFixed"
    :top-nav="topNav"
    wrapper-class="XXXX"
    container-class="zzz"
  >
    <nly-navbar variant="info" navbar-class="xxx" expand="md" header>
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
      </nly-sidebar>
    </nly-sidebar-container>
    <nly-collapse-main>
      <input type="checkbox" v-model="sideMini" />sideMini
      {{ sideMini }}

      <input type="text" v-model="layout" />layout
      {{ layout }}

      <input type="checkbox" v-model="navbarFixed" />navbarFixed
      {{ navbarFixed }}

      <input type="checkbox" v-model="footerFixed" />footerFixed
      {{ footerFixed }}

      <input type="checkbox" v-model="topNav" />topNav
      {{ topNav }}

      <label for="color">颜色</label>
      <select id="color" v-model="variant">
        <option value="info"> info</option>
        <option value="warning"> warning</option>
        <option value="danger"> danger</option>
      </select>

      <nly-button-group size="lg" tag="li">
        <nly-button block pressed gradient="danger" size="sm">111</nly-button>
        <nly-button pressed gradient="danger">222</nly-button>
        <nly-button
          pressed
          gradient="danger"
          button-class="dropdown-toggle dropdown-icon"
        ></nly-button>
      </nly-button-group>
      <div style="height:200px"></div>
      <nly-dropdown
        gradient="warning"
        dropdown-size="lg"
        dropdown-tag="div"
        dropdown-toggle
        dropdown-icon
        dropdown-class="xxx"
        text="测试"
        toggle-text="2222"
        data-show="test"
      >
        <nly-dropdown-menu id="test">
          <header class="dropdown-header">Action</header>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/sss">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
          <div class="dropdown-divider"></div>
          <footer class="dropdown-footer">Separated link</footer>
        </nly-dropdown-menu>
      </nly-dropdown>

      <div style="height:200px"></div>
      <div class="btn-group">
        <button type="button" class="btn btn-info">Action</button>
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
        >
          <span class="sr-only">Toggle Dropdown</span>
          <div class="dropdown-menu" role="menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </button>
      </div>
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

    <div id="sidebar-overlay"></div>
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
