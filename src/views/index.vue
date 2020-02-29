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
            icon="nav-icon fas nlyfont nly-color-palette"
            exact
          >
            home
          </nly-sidebar-nav-item>

          <nly-sidebar-nav-tree
            target="collapse"
            visible
            active
            icon="nav-icon fas nlyfont nly-logo-aperture"
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
              icon="nav-icon far nlyfont nly-logo-chrome"
              exact
            >
              collapse
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
    <nly-control-sidebar-container>
      <!-- Control sidebar content goes here -->
      <nly-control-sidebar class="p-3">
        <h5>Customize AdminLTE</h5>
        <hr class="mb-2" />
        <div class="mb-1">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitchnly"
            />
            <label class="custom-control-label" for="customSwitchnly"
              >Toggle this custom switch element</label
            >
          </div>
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Body small text</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Navbar small text</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Sidebar nav small text</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Footer small text</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Sidebar nav flat style</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Sidebar nav legacy style</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Sidebar nav compact</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Sidebar nav child indent</span
          >
        </div>
        <div class="mb-1">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Main Sidebar disable hover/focus auto expand</span
          >
        </div>
        <div class="mb-4">
          <input type="checkbox" value="1" class="mr-1" /><span
            >Brand small text</span
          >
        </div>
        <h6>Navbar Variants</h6>
        <div class="d-flex">
          <div class="d-flex flex-wrap mb-3">
            <div
              class="bg-primary elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-secondary elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-info elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-success elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-danger elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-indigo elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-purple elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-pink elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-navy elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-lightblue elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-teal elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-cyan elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-dark elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-gray-dark elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-gray elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-light elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-warning elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-white elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
            <div
              class="bg-orange elevation-2"
              style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
            ></div>
          </div>
        </div>
        <h6>Accent Color Variants</h6>
        <div class="d-flex"></div>
        <div class="d-flex flex-wrap mb-3">
          <div
            class="bg-primary elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-warning elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-info elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-danger elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-success elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-indigo elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-lightblue elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-navy elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-purple elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-fuchsia elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-pink elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-maroon elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-orange elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-lime elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-teal elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-olive elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
        </div>
        <h6>Dark Sidebar Variants</h6>
        <div class="d-flex"></div>
        <div class="d-flex flex-wrap mb-3">
          <div
            class="bg-primary elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-warning elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-info elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-danger elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-success elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-indigo elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-lightblue elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-navy elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-purple elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-fuchsia elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-pink elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-maroon elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-orange elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-lime elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-teal elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-olive elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
        </div>
        <h6>Light Sidebar Variants</h6>
        <div class="d-flex"></div>
        <div class="d-flex flex-wrap mb-3">
          <div
            class="bg-primary elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-warning elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-info elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-danger elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-success elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-indigo elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-lightblue elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-navy elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-purple elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-fuchsia elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-pink elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-maroon elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-orange elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-lime elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-teal elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-olive elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
        </div>
        <h6>Brand Logo Variants</h6>
        <div class="d-flex"></div>
        <div class="d-flex flex-wrap mb-3">
          <div
            class="bg-primary elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-secondary elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-info elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-success elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-danger elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-indigo elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-purple elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-pink elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-navy elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-lightblue elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-teal elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-cyan elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-dark elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-gray-dark elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-gray elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-light elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-warning elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-white elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <div
            class="bg-orange elevation-2"
            style="width: 40px; height: 20px; border-radius: 25px; margin-right: 10px; margin-bottom: 10px; opacity: 0.8; cursor: pointer;"
          ></div>
          <a href="javascript:void(0)">clear</a>
        </div>
      </nly-control-sidebar>
    </nly-control-sidebar-container>
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
