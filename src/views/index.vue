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
    <nly-navbar header expand>
      <nly-navbar-nav>
        <nly-navbar-brand navbar-brand-class="xxx">
          <nly-navbar-brandimg
            :src="logo"
            circle
            elevation
            navbarBrandimgClass="xxx"
          />
          <nly-navbar-brandtext>
            AdminLTE
          </nly-navbar-brandtext>
        </nly-navbar-brand>

        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="index3.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </nly-navbar-nav>

      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input
            class="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-comments"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item">
              <div class="media">
                <img
                  src="dist/img/user1-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 mr-3 img-circle"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger"
                      ><i class="fas fa-star"></i
                    ></span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <div class="media">
                <img
                  src="dist/img/user8-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 img-circle mr-3"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted"
                      ><i class="fas fa-star"></i
                    ></span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <div class="media">
                <img
                  src="dist/img/user3-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 img-circle mr-3"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning"
                      ><i class="fas fa-star"></i
                    ></span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer"
              >See All Messages</a
            >
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer"
              >See All Notifications</a
            >
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            ><i class="fas fa-th-large"></i
          ></a>
        </li>
      </ul>
    </nly-navbar>

    <nly-collapse-side variants="light-indigo"> </nly-collapse-side>
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
      <nly-button-group vertical>
        <nly-button block pressed size="lg" gradient="danger">111</nly-button>
        <nly-button pressed size="lg" gradient="danger">222</nly-button>
        <nly-button
          pressed
          size="lg"
          gradient="danger"
          button-class="dropdown-toggle dropdown-icon"
        ></nly-button>
      </nly-button-group>

      <div style="height:200px"></div>
      <div class="btn-group">
        <button type="button" class="btn btn-info">Action</button>
        <button
          type="button"
          class="btn btn-info dropdown-toggle dropdown-hover dropdown-icon"
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
      logo
    };
  }
};
</script>
