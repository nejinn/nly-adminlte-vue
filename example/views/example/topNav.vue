<template>
  <nly-wrapper top-nav>
    <nly-wrapper-header nav variant="lightlight" navbar-class="xxx" expand="md">
      <nly-container>
        <nly-navbar-brand>
          <nly-navbar-brandimg
            src="http://nly-adminlte-vue-demo.nejinn.com/img/NLYLOGO.b43761e2.png"
            elevation
            circle
          />
          <nly-navbar-brandtext>
            测试
          </nly-navbar-brandtext>
        </nly-navbar-brand>
        <nly-navbar-toggle target="aaa" navbar-class="order-1" />

        <nly-collapse is-nav id="aaa" collapse-class="order-3" appear>
          <nly-navbar-nav class="xxxxx">
            <nly-nav-item active class="xxx">
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
                <nly-nav-item :nav-item="false" dropdown-item>
                  我是nav-item="false"
                </nly-nav-item>
                <nly-nav-item :nav-item="false" dropdown-item>
                  dropdown-item
                </nly-nav-item>

                <nly-nav-item :nav-item="false" dropdown-item disabled>
                  我是disabled
                </nly-nav-item>
                <nly-nav-item :nav-item="false" dropdown-item append>
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
                    <nly-nav-item :nav-item="false" dropdown-item>
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
                        <nly-nav-item :nav-item="false" dropdown-item>
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
                <nly-nav-item :nav-item="false" dropdown-item>
                  我是nav-item="false"
                </nly-nav-item>
                <nly-nav-item :nav-item="false" dropdown-item>
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
              <nly-nav-item :nav-item="false" dropdown-item>
                我是nav-item="false"
              </nly-nav-item>
              <nly-nav-item :nav-item="false" dropdown-item>
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
              <nly-nav-item :nav-item="false" dropdown-item>
                我是nav-item="false"
              </nly-nav-item>
              <nly-nav-item :nav-item="false" dropdown-item>
                dropdown-item
              </nly-nav-item>
            </template>
          </nly-nav-dropdown>

          <nly-nav-item>
            <i class="fas fa-th-large"></i>
          </nly-nav-item>
        </nly-navbar-nav>
      </nly-container>
    </nly-wrapper-header>
    <nly-wrapper-content style="min-height: calc(100vh - 119px);">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">
                Top Navigation <small>Example 3.0</small>
              </h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Layout</a></li>
                <li class="breadcrumb-item active">Top Navigation</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>

                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>

              <div class="card card-primary card-outline">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>

                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col-md-6 -->
            <div class="col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title m-0">Featured</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title">Special title treatment</h6>

                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h5 class="card-title m-0">Featured</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title">Special title treatment</h6>

                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <!-- /.col-md-6 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
    </nly-wrapper-content>
    <nly-wrapper-footer bg-variant="info">
      <strong
        >Copyright © 2020
        <a href="https://github.com/nejinn/nly-adminlte-vue">nly-adminlte-vue</a
        >.</strong
      >
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 0.1.9
      </div>
    </nly-wrapper-footer>
  </nly-wrapper>
</template>
