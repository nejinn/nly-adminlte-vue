<template>
  <nly-container fluid>
    <nly-navbar variant="lightlight" navbar-class="xxx" expand="md">
      <nly-navbar-brand>
        <nly-navbar-brandimg :src="logo" elevation circle />
        <nly-navbar-brandtext>
          测试
        </nly-navbar-brandtext>
      </nly-navbar-brand>
      <nly-navbar-toggle target="aaa" navbar-class="xxx" />

      <nly-collapse is-nav id="aaa" collapse-class="xxxx" appear>
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
    </nly-navbar>
  </nly-container>
</template>

<script>
import logo from "../../assets/img/AdminLTELogo.png";
export default {
  data() {
    return {
      logo
    };
  }
};
</script>
