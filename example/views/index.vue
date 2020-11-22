<template>
  <nly-wrapper>
    <nly-navbar
      :variant="navbar.variant"
      navbar-class="xxx"
      header
      :border="navbar.border"
      :size="navbar.size"
      :dark="navbar.dark"
    >
      <nly-navbar-nav class="xxxxx">
        <nly-nav-item v-nly-sidebar-collapse.navitem>
          <nly-icon icon="nlyfont nly-icon-logo-windows" />
        </nly-nav-item>
        <nly-nav-item
          active
          class="d-none d-sm-inline-block"
          :to="{ name: 'collapse' }"
          >home</nly-nav-item
        >

        <nly-nav-item disabled class="d-none d-sm-inline-block"
          >home</nly-nav-item
        >

        <nly-nav-item class="d-none d-sm-inline-block">home</nly-nav-item>

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
            <nly-icon icon="nlyfont nly-icon-notification-fill" />
          </template>
          <template slot="menucontent">
            <nly-nav-item :nav-item="false" dropdown-item to="/"
              >我是nav-item="false"</nly-nav-item
            >
            <nly-nav-item :nav-item="false" dropdown-item to="nav"
              >dropdown-item</nly-nav-item
            >

            <nly-nav-item :nav-item="false" dropdown-item to="/" disabled
              >我是disabled</nly-nav-item
            >
            <nly-nav-item :nav-item="false" dropdown-item to="nav" append
              >我是append</nly-nav-item
            >

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
              <template slot="linkcontent">我是悬浮菜单</template>
              <template slot="menucontent">
                <nly-nav-item
                  :nav-item="false"
                  dropdown-item
                  :to="{ name: 'button' }"
                  >我是nav-item="false"</nly-nav-item
                >
                <nly-nav-item :nav-item="false" dropdown-item
                  >dropdown-item</nly-nav-item
                >

                <nly-nav-dropdown
                  :nav-item="false"
                  submenu
                  :nav-link="false"
                  dropdown-item
                  dropdown-toggle
                  direction="none"
                  id="menudropdon3"
                >
                  <template slot="linkcontent">我是三级</template>
                  <template slot="menucontent">
                    <nly-nav-item
                      :nav-item="false"
                      dropdown-item
                      :to="{ name: 'button' }"
                      >我是nav-item="false"</nly-nav-item
                    >
                    <nly-nav-item :nav-item="false" dropdown-item
                      >dropdown-item</nly-nav-item
                    >
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
          <template slot="linkcontent">我是悬浮菜单</template>
          <template slot="menucontent">
            <nly-nav-item :nav-item="false" dropdown-item to="/"
              >我是nav-item="false"</nly-nav-item
            >
            <nly-nav-item :nav-item="false" dropdown-item to="nav"
              >dropdown-item</nly-nav-item
            >
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
            <nly-icon icon="nlyfont nly-icon-notification-fill" />
          </template>
          <template slot="menucontent">
            <nly-nav-item :nav-item="false" dropdown-item to="/"
              >我是nav-item="false"</nly-nav-item
            >
            <nly-nav-item :nav-item="false" dropdown-item to="nav"
              >dropdown-item</nly-nav-item
            >
          </template>
        </nly-nav-dropdown>

        <nly-nav-dropdown
          :popup="true"
          menu-class="border-0"
          size="lg"
          menu-direction="right"
        >
          <template slot="linkcontent">
            <nly-icon icon="nlyfont nly-icon-mail-fill" />
            <nly-badge bg-variant="fuchsia" badge-class="navbar-badge"
              >12</nly-badge
            >
          </template>
          <template slot="menucontent">
            <nly-nav-item :nav-item="false" dropdown-item to="/"
              >我是nav-item="false"</nly-nav-item
            >
            <nly-nav-item :nav-item="false" dropdown-item to="nav"
              >dropdown-item</nly-nav-item
            >
          </template>
        </nly-nav-dropdown>

        <nly-nav-item v-nly-control-sidebar-collapse>
          <nly-icon icon="nlyfont nly-icon-setting-fill" />
        </nly-nav-item>
      </nly-navbar-nav>
    </nly-navbar>

    <nly-sidebar-container
      :hover="sidebar.hover"
      :variant="sidebar.variant"
      side-mini
      layout="fixed"
    >
      <nly-sidebar-brand to="collapse" :variant="sidebar.brand.variant">
        <nly-sidebar-brandimg :src="logo" elevation circle />
        <nly-sidebar-brandtext>NLY Adminlte Vue</nly-sidebar-brandtext>
      </nly-sidebar-brand>

      <nly-sidebar>
        <nly-sidebar-userpanel class="mt-3 pb-3 mb-3 d-flex">
          <nly-sidebar-userpanel-img :src="logo" class="SSS" />
          <nly-sidebar-userpanel-info to="collapse"
            >Nejinn lerity</nly-sidebar-userpanel-info
          >
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
          <nly-sidebar-nav-header>Dashboard</nly-sidebar-nav-header>
          <nly-sidebar-nav-item
            to="/"
            link-class="xxx zzz"
            class="sss"
            icon="nav-icon fas nlyfont nly-icon-dashboard"
            exact
          >
            home
            <nly-badge bg-variant="teal" badge-class="right">NEW</nly-badge>
          </nly-sidebar-nav-item>

          <nly-sidebar-nav-header>
            components
            <nly-badge bg-variant="maroon" badge-class="float-sm-right"
              >15</nly-badge
            >
          </nly-sidebar-nav-header>

          <nly-sidebar-nav-tree
            target="components-one"
            visible
            icon="nav-icon fas nlyfont nly-icon-logo-polymer"
            text="components-one"
          >
            <nly-sidebar-nav-item
              to="/collapse"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-logo-chrome"
              exact
              >collapse</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/navbar"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-nav-tool"
              exact
              >navbar</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/nav"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >nav</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/container"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >container</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/grid"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >grid</nly-sidebar-nav-item
            >
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="components-two"
            icon="nav-icon fas nlyfont nly-icon-logo-polymer"
            text="components-two"
          >
            <nly-sidebar-nav-item
              to="/link"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >link</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/button"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-logo-ionic"
              exact
              >button</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/switch"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >switch</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/card"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >card</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/badge"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >badge</nly-sidebar-nav-item
            >
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="components-three"
            icon="nav-icon fas nlyfont nly-icon-logo-polymer"
            text="components-three"
          >
            <template slot="linktool">
              <nly-badge variant="info" badge-class="right">5</nly-badge>
            </template>
            <nly-sidebar-nav-item
              to="/toast"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >toast</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/spinner"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-logo-pinterest"
              exact
              >spinner</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/progress"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >progress</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/timeline"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-logo-ionitron"
              exact
              >timeline</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/breadcrumb"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-breadcrumb-fill"
              exact
            >
              breadcrumb
              <nly-badge bg-variant="fuchsia" badge-class="right" size="sm"
                >NEW</nly-badge
              >
            </nly-sidebar-nav-item>
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="components-four"
            icon="nav-icon fas nlyfont nly-icon-logo-polymer"
            text="components-four"
          >
            <nly-sidebar-nav-item
              to="/infobox"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >infobox</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/table"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >table</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/tooltip"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >tooltip</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/pagination"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >pagination</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/log"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >log</nly-sidebar-nav-item
            >
          </nly-sidebar-nav-tree>

          <nly-sidebar-nav-tree
            target="components-five"
            icon="nav-icon fas nlyfont nly-icon-logo-polymer"
            text="components-form"
          >
            <nly-sidebar-nav-item
              to="/forminput"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >form-input</nly-sidebar-nav-item
            >
            <nly-sidebar-nav-item
              to="/formfeedback"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >form-feedback</nly-sidebar-nav-item
            >
            <nly-sidebar-nav-item
              to="/daterangepicker"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >daterangepicker</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/formgroup"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >formgroup</nly-sidebar-nav-item
            >
            <nly-sidebar-nav-item
              to="/inputgroup"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >inputgroup</nly-sidebar-nav-item
            >
            <nly-sidebar-nav-item
              to="/formselect"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >formselect</nly-sidebar-nav-item
            >
          </nly-sidebar-nav-tree>
          <nly-sidebar-nav-tree
            target="components-six"
            icon="nav-icon fas nlyfont nly-icon-logo-polymer"
            text="components-form"
          >
            <nly-sidebar-nav-item
              to="/dropdown"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >dropdown</nly-sidebar-nav-item
            >
            <nly-sidebar-nav-item
              to="/listgroup"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >listgroup</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/modal"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >modal</nly-sidebar-nav-item
            >

            <nly-sidebar-nav-item
              to="/tabs"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >tabs</nly-sidebar-nav-item
            >
            <nly-sidebar-nav-item
              to="/popover"
              link-class="xxx zzz"
              class="sss"
              icon="nav-icon far nlyfont nly-icon-sr-chanxueyanhezuo-fill"
              exact
              >popover</nly-sidebar-nav-item
            >
          </nly-sidebar-nav-tree>
        </nly-sidebar-nav>
      </nly-sidebar>
    </nly-sidebar-container>
    <router-view />
    <nly-wrapper-footer :size="footerSizeSm" bg-variant="info">
      <strong>
        Copyright © 2020
        <a href="https://github.com/nejinn/nly-adminlte-vue">nly-adminlte-vue</a
        >.
      </strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b>
        {{ version }}
      </div>
    </nly-wrapper-footer>
    <nly-wrapper-control-sidebar
      :size="controlSidebarSizeSm"
      bg-variant="info"
      bg-gradient-variant="pink"
    >
      <!-- Control sidebar content goes here -->
      <nly-control-sidebar-container class="p-3">
        <h5>主题设置</h5>
        <hr class="mb-2 bg-light" />
        <div class="mb-1">
          <nly-switch
            off-variant="info"
            on-variant="danger"
            v-model="controlSidebar.size"
          >
            <span>右侧菜单栏小字体</span>
          </nly-switch>
        </div>
        <div class="mb-1">
          <nly-switch
            off-variant="info"
            on-variant="danger"
            v-model="navbar.border"
          >
            <span>顶部导航栏开启底部边框</span>
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
            <span>底部小字体</span>
          </nly-switch>
        </div>

        <hr class="mb-2 bg-light" />

        <h6>顶部导航栏背景颜色</h6>

        <hr class="mb-2 bg-light" />
        <div class="mb-1">
          <nly-switch
            off-variant="light"
            on-variant="dark"
            v-model="navbar.dark"
          >
            <span>navbar dark</span>
          </nly-switch>
        </div>
        <div class="d-flex">
          <div class="d-flex flex-wrap mb-3">
            <nly-control-sidebar-button
              v-for="(item, index) in navbar.variantOption"
              :key="index"
              :id="index + 'navbarVariantOption'"
              :bg-variant="item"
              @click="changeNavbarVariant(item)"
            />
          </div>
        </div>

        <hr class="mb-2 bg-light" />

        <h6>左侧导航栏dark背景色</h6>

        <hr class="mb-2 bg-light" />
        <div class="d-flex">
          <div class="d-flex flex-wrap mb-3">
            <nly-control-sidebar-button
              v-for="(item, index) in sidebar.darkVariantOption"
              :key="index"
              :id="index + 'sidebarDarkVariantOption'"
              :bg-variant="item.b"
              @click="changeSidebarVariant(item.a)"
            />
          </div>
        </div>

        <h6>左侧导航栏light背景色</h6>

        <hr class="mb-2 bg-light" />
        <div class="d-flex">
          <div class="d-flex flex-wrap mb-3">
            <nly-control-sidebar-button
              v-for="(item, index) in sidebar.lightVariantOption"
              :key="index"
              :id="index + 'sidebarLightVariantOption'"
              :bg-variant="item.b"
              @click="changeSidebarVariant(item.a)"
            />
          </div>
        </div>

        <h6>brand背景色</h6>

        <hr class="mb-2 bg-light" />
        <div class="d-flex">
          <div class="d-flex flex-wrap mb-3">
            <nly-control-sidebar-button
              v-for="(item, index) in sidebar.brand.variantOption"
              :key="index"
              :id="index + 'brandeVariantOption'"
              :bg-variant="item"
              @click="changeSidebarBrandVariant(item)"
            />
          </div>
        </div>
      </nly-control-sidebar-container>
    </nly-wrapper-control-sidebar>
    <nly-overlay v-nly-sidebar-collapse.overlay sidebar />
  </nly-wrapper>
</template>

<script>
import logo from "../assets/nly-adminlte-vue/img/NLYLOGO.png";
import version from "../../package.json";
export default {
  data() {
    return {
      version: version.version,
      logo,
      navbar: {
        border: true,
        variant: "white",
        size: null,
        sizeSm: false,
        dark: false,
        variantOption: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "danger",
          "lightblue",
          "navy",
          "olive",
          "lime",
          "fuchsia",
          "maroon",
          "blue",
          "indigo",
          "purple",
          "pink",
          "red",
          "bg-red",
          "orange",
          "yellow",
          "green",
          "teal",
          "cyan",
          "white",
          "gray",
          "graydark"
        ]
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
          variant: "dark",
          variantOption: [
            "primary",
            "secondary",
            "success",
            "info",
            "warning",
            "danger",
            "lightblue",
            "light",
            "dark",
            "navy",
            "olive",
            "lime",
            "fuchsia",
            "maroon",
            "blue",
            "indigo",
            "purple",
            "pink",
            "red",
            "bg-red",
            "orange",
            "yellow",
            "green",
            "teal",
            "cyan",
            "white",
            "gray",
            "graydark"
          ]
        },
        hover: true,
        variant: "darkPink",
        darkVariantOption: [
          { a: "darkPrimary", b: "primary" },
          { a: "darkWarning", b: "warning" },
          { a: "darkInfo", b: "info" },
          { a: "darkDanger", b: "danger" },
          { a: "darkSuccess", b: "success" },
          { a: "darkIndigo", b: "indigo" },
          { a: "darkLightblue", b: "lightblue" },
          { a: "darkNavy", b: "navy" },
          { a: "darkPurple", b: "purple" },
          { a: "darkFuchsia", b: "fuchsia" },
          { a: "darkPink", b: "pink" },
          { a: "darkMaroon", b: "maroon" },
          { a: "darkOrange", b: "orange" },
          { a: "darkLime", b: "lime" },
          { a: "darkTeal", b: "teal" },
          { a: "darkOlive", b: "olive" }
        ],
        lightVariantOption: [
          { a: "lightPrimary", b: "primary" },
          { a: "lightWarning", b: "warning" },
          { a: "lightInfo", b: "info" },
          { a: "lightDanger", b: "danger" },
          { a: "lightSuccess", b: "success" },
          { a: "lightIndigo", b: "indigo" },
          { a: "lightLightblue", b: "lightblue" },
          { a: "lightNavy", b: "navy" },
          { a: "lightPurple", b: "purple" },
          { a: "lightFuchsia", b: "fuchsia" },
          { a: "lightPink", b: "pink" },
          { a: "lightMaroon", b: "maroon" },
          { a: "lightOrange", b: "orange" },
          { a: "lightLime", b: "lime" },
          { a: "lightTeal", b: "teal" },
          { a: "lightOlive", b: "olive" }
        ]
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
  },
  methods: {
    changeNavbarVariant(variant) {
      this.navbar.variant = variant;
    },
    changeSidebarVariant(variant) {
      this.sidebar.variant = variant;
    },
    changeSidebarBrandVariant(variant) {
      this.sidebar.brand.variant = variant;
    }
  }
};
</script>
