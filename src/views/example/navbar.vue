<template>
  <div>
    <nly-container style="margin-bottom: 1rem">
      <nly-navbar variant="lightlight" navbar-class="xxx" expand="md">
        <nly-navbar-brand>
          <nly-navbar-brandimg :src="logo" elevation circle />
          <nly-navbar-brandtext>
            测试
          </nly-navbar-brandtext>
        </nly-navbar-brand>
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
    </nly-container>

    <nly-container style="margin-bottom: 1rem">
      <nly-navbar variant="info" navbar-class="xxx" expand="md">
        <nly-navbar-brand>
          <nly-navbar-brandimg :src="logo" elevation circle />
          <nly-navbar-brandtext>
            测试
          </nly-navbar-brandtext>
        </nly-navbar-brand>
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
    </nly-container>

    <nly-container style="margin-bottom: 1rem">
      <nly-navbar variant="warning" navbar-class="xxx" expand="lg">
        <nly-navbar-brand>
          <nly-navbar-brandimg :src="logo" elevation circle />
          <nly-navbar-brandtext>
            测试
          </nly-navbar-brandtext>
        </nly-navbar-brand>
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
    </nly-container>

    <nly-container style="margin-bottom: 1rem">
      <nly-navbar variant="danger" navbar-class="xxx" expand="lg" size="sm">
        <nly-navbar-brand>
          <nly-navbar-brandimg :src="logo" elevation circle />
          <nly-navbar-brandtext>
            测试
          </nly-navbar-brandtext>
        </nly-navbar-brand>
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
    </nly-container>

    <nly-container style="margin-bottom: 1rem">
      <nly-navbar
        :variant="variant"
        navbar-class="xxx"
        expand="lg"
        :size="size"
      >
        <nly-navbar-brand>
          <nly-navbar-brandimg :src="logo" elevation circle />
          <nly-navbar-brandtext>
            测试
          </nly-navbar-brandtext>
        </nly-navbar-brand>
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
    </nly-container>

    <nly-container style="margin-bottom: 1rem">
      <label for="color">颜色</label>
      <select id="color" v-model="variant">
        <option
          v-for="(item, index) in variantOpitons"
          :key="index"
          :value="index"
        >
          {{ index }}
        </option>
      </select>

      <label for="size">字体</label>
      <select id="size" v-model="size">
        <option
          v-for="(item, index) in sizeOptions"
          :key="index"
          :value="index"
        >
          {{ index }}
        </option>
      </select>
    </nly-container>
  </div>
</template>

<script>
import logo from "../../assets/img/AdminLTELogo.png";
export default {
  data() {
    return {
      logo,
      variant: "lightlight",
      size: "",
      variantOpitons: {
        orange: "navbar-light navbar-orange",
        warning: "navbar-light navbar-warning",
        lightlight: "navbar-light",
        graygray: "navbar-dark navbar-gray",
        graydark: "navbar-dark navbar-gray-dark",
        darkdark: "navbar-dark",
        cyan: "navbar-dark navbar-cyan",
        teal: "navbar-dark navbar-teal",
        lightblue: "navbar-dark navbar-lightblue",
        navy: "navbar-dark navbar-navy",
        pink: "navbar-dark navbar-pink",
        purple: "navbar-dark navbar-purple",
        indigo: "navbar-dark navbar-indigo",
        danger: "navbar-dark navbar-danger",
        success: "navbar-dark navbar-success",
        info: "navbar-dark navbar-info",
        secondary: "navbar-dark navbar-secondary",
        primary: "navbar-dark navbar-primary",
        white: "navbar-light navbar-white"
      },
      sizeOptions: {
        lg: "text-lg",
        sm: "text-sm"
      }
    };
  }
};
</script>
