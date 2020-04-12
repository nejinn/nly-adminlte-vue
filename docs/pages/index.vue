<template>
  <main id="content" role="main">
    <section class="bd-masthead pt-3 pt-sm-5 pb-2">
      <nly-container tag="article">
        <nly-row align-v="center" no-gutters class="mb-2 mb-md-3 mb-lg-4">
          <!-- eslint-disable-next-line vue/max-attributes-per-line -->
          <nly-col
            tag="aside"
            xs="12"
            md="4"
            order-md="2"
            class="logo-aside mb-4 mb-md-0"
          >
            <svg
              v-if="showLogo"
              class="bv-logo"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1024 1024"
              style="enable-background:new 0 0 1024 1024;"
              xml:space="preserve"
              shape-rendering="geometricPrecision"
              fill-rule="evenodd"
              clip-rule="evenodd"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              focusable="false"
            >
              <title>NlyAdminlteVue</title>
              <defs>
                <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                <filter
                  id="logo-shadow"
                  filterUnits="objectBoundingBox"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feOffset in="SourceAlpha" dx="-10" dy="25" result="ALPHA1" />
                  <feMorphology
                    in="ALPHA1"
                    operator="dilate"
                    radius="15"
                    result="ALPHA"
                  />
                  <feGaussianBlur in="ALPHA" stdDeviation="20" result="DROP" />
                  <feFlood in="DROP" flood-color="#333" result="SOLID" />
                  <feComposite
                    in="DROP"
                    in2="SOLID"
                    operator="in"
                    result="SHADOW1"
                  />
                  <feComponentTransfer in="SHADOW1" result="SHADOW">
                    <feFuncA type="linear" slope="0.55" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="SHADOW" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <style type="text/css">
                .st0 {
                  display: none;
                  fill: #a67c52;
                }

                .st1 {
                  display: none;
                  fill: url(#SVGID_1_);
                }

                .st2 {
                  fill: url(#SVGID_2_);
                }

                .st3 {
                  fill: url(#SVGID_3_);
                }

                .st4 {
                  fill: url(#SVGID_4_);
                }

                .st5 {
                  fill: url(#SVGID_5_);
                }

                .st6 {
                  fill: url(#SVGID_6_);
                }

                .st7 {
                  fill: url(#SVGID_7_);
                }

                .st8 {
                  fill: url(#SVGID_8_);
                }

                .st9 {
                  fill: #3e2723;
                }
              </style>
              <g :filter="isIE ? 'url(#logo-shadow)' : null">
                <g
                  class="logo-green-v"
                  :filter="isIE ? null : 'url(#logo-shadow)'"
                >
                  <path
                    class="st0"
                    d="M0,0c31.74,31.74,512.28,639.96,512.28,639.96L1024,0H0z"
                  />
                  <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="512"
                    y1="1024"
                    x2="512"
                    y2="-9.094947e-13"
                  >
                    <stop offset="6.393348e-08" style="stop-color:#7E57C2" />
                    <stop offset="0.1857" style="stop-color:#755FBE" />
                    <stop offset="0.4884" style="stop-color:#5D75B3" />
                    <stop offset="0.8684" style="stop-color:#3598A1" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <circle class="st1" cx="512" cy="512" r="512" />
                  <linearGradient
                    id="SVGID_2_"
                    gradientUnits="userSpaceOnUse"
                    x1="513.6884"
                    y1="893.2545"
                    x2="513.6884"
                    y2="191.4898"
                  >
                    <stop offset="6.393348e-08" style="stop-color:#F4511E" />
                    <stop offset="0.0993" style="stop-color:#EB5523" />
                    <stop offset="0.2614" style="stop-color:#D35F32" />
                    <stop offset="0.466" style="stop-color:#AB6F4A" />
                    <stop offset="0.7052" style="stop-color:#74866B" />
                    <stop offset="0.9707" style="stop-color:#2EA395" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <polygon
                    class="st2"
                    points="1023.8,191.49 513.87,829.22 3.38,191.49 3.38,255.21 512.92,893.25 1024,255.49 "
                  />
                  <linearGradient
                    id="SVGID_3_"
                    gradientUnits="userSpaceOnUse"
                    x1="513.5892"
                    y1="829.2203"
                    x2="513.5892"
                    y2="191.4898"
                  >
                    <stop offset="0" style="stop-color:#1976D2" />
                    <stop offset="0.2516" style="stop-color:#1B7DCA" />
                    <stop offset="0.6435" style="stop-color:#2090B4" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <polygon
                    class="st3"
                    points="972.53,191.77 512.92,765.5 54.29,191.49 3.38,191.49 513.87,829.22 1023.8,191.49 "
                  />
                </g>
                <g
                  class="logo-dark-v"
                  :filter="isIE ? null : 'url(#logo-shadow)'"
                >
                  <linearGradient
                    id="SVGID_4_"
                    gradientUnits="userSpaceOnUse"
                    x1="513.6884"
                    y1="765.4971"
                    x2="513.6884"
                    y2="127.6696"
                  >
                    <stop offset="6.393348e-08" style="stop-color:#8E24AA" />
                    <stop offset="0.1393" style="stop-color:#872DA9" />
                    <stop offset="0.3666" style="stop-color:#7345A6" />
                    <stop offset="0.6534" style="stop-color:#546DA1" />
                    <stop offset="0.9858" style="stop-color:#28A49A" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <polygon
                    class="st4"
                    points="972.85,127.67 513.87,701.68 54.39,127.67 3.38,127.67 512.92,765.5 1024,127.67 "
                  />
                </g>
                <g
                  class="logo-purple-v"
                  :filter="isIE ? null : 'url(#logo-shadow)'"
                >
                  <linearGradient
                    id="SVGID_5_"
                    gradientUnits="userSpaceOnUse"
                    x1="513.5892"
                    y1="701.6769"
                    x2="513.5892"
                    y2="63.9465"
                  >
                    <stop offset="6.393348e-08" style="stop-color:#7E57C2" />
                    <stop offset="0.1857" style="stop-color:#755FBE" />
                    <stop offset="0.4884" style="stop-color:#5D75B3" />
                    <stop offset="0.8684" style="stop-color:#3598A1" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <path
                    class="st5"
                    d="M3.38,63.95l510.5,637.73L1023.8,63.95H3.38z M448.57,369.39h-59.61l-70.19-108.57v108.57h-63.95V141.1h61.37l68.43,106.88V141.1h63.95V369.39z M646.43,369.39H507.19V141.1h64.19V308h75.05V369.39z M770.46,369.39h-64.31v-83.91L633.23,141.1h72.7l33.53,68.67l34.98-68.67h70.98L770.46,285V369.39z"
                  />
                  <linearGradient
                    id="SVGID_6_"
                    gradientUnits="userSpaceOnUse"
                    x1="739.3273"
                    y1="141.1039"
                    x2="739.3273"
                    y2="369.3911"
                  >
                    <stop offset="6.393348e-08" style="stop-color:#7E57C2" />
                    <stop offset="0.1857" style="stop-color:#755FBE" />
                    <stop offset="0.4884" style="stop-color:#5D75B3" />
                    <stop offset="0.8684" style="stop-color:#3598A1" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <polygon
                    class="st6"
                    points="774.45,141.1 739.46,209.77 705.93,141.1 633.23,141.1 706.15,285.48 706.15,369.39 770.46,369.39 770.46,285 845.42,141.1 "
                  />
                  <linearGradient
                    id="SVGID_7_"
                    gradientUnits="userSpaceOnUse"
                    x1="576.8116"
                    y1="141.1039"
                    x2="576.8116"
                    y2="369.3911"
                  >
                    <stop offset="6.393348e-08" style="stop-color:#7E57C2" />
                    <stop offset="0.1857" style="stop-color:#755FBE" />
                    <stop offset="0.4884" style="stop-color:#5D75B3" />
                    <stop offset="0.8684" style="stop-color:#3598A1" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <polygon
                    class="st7"
                    points="571.38,141.1 507.19,141.1 507.19,369.39 646.43,369.39 646.43,308 571.38,308 "
                  />
                  <linearGradient
                    id="SVGID_8_"
                    gradientUnits="userSpaceOnUse"
                    x1="351.6969"
                    y1="141.1039"
                    x2="351.6969"
                    y2="369.3911"
                  >
                    <stop offset="6.393348e-08" style="stop-color:#7E57C2" />
                    <stop offset="0.1857" style="stop-color:#755FBE" />
                    <stop offset="0.4884" style="stop-color:#5D75B3" />
                    <stop offset="0.8684" style="stop-color:#3598A1" />
                    <stop offset="1" style="stop-color:#26A69A" />
                  </linearGradient>
                  <polygon
                    class="st8"
                    points="384.62,247.99 316.19,141.1 254.83,141.1 254.83,369.39 318.77,369.39 318.77,260.82 388.96,369.39 448.57,369.39 448.57,141.1 384.62,141.1 "
                  />
                  <path
                    class="st9"
                    d="M404.55,290.59c0,12.98,0.4,22.14,1.22,27.49h-0.49c-0.81-1.86-3.41-6.2-7.79-13.02l-92.21-144.03h-30.53v188.43h24.09V216.99c0-13.38-0.33-22.18-0.97-26.4h0.73c1.62,4.06,3.77,8.15,6.45,12.29l94.76,146.58h28.83V161.03h-24.09V290.59z"
                  />
                  <polygon
                    class="st9"
                    points="551.45,161.03 527.12,161.03 527.12,349.46 626.5,349.46 626.5,327.93 551.45,327.93 "
                  />
                  <path
                    class="st9"
                    d="M786.66,161.03l-42.58,83.57c-2.35,4.54-4.01,8.52-4.99,11.92h-0.36c-2.92-7.95-4.42-11.96-4.5-12.04l-40.75-83.45h-27.86l60.46,119.7v68.73h24.45v-69.34l62.04-119.09H786.66z"
                  />
                </g>
              </g>
            </svg>
          </nly-col>

          <nly-col tag="header" cols="12" md="8" order-md="1">
            <h1 class="mb-3 text-center text-md-left text-pink">
              NlyAdminlte<span class="text-vue-green">Vue</span>
            </h1>

            <p class="lead">
              欢迎访问
              <span class="font-weight-bold text-pink">NlyadminlteVue</span>
              文档！
            </p>

            <p class="lead">
              <span class="font-weight-bold text-pink">NlyadminlteVue</span>
              是基于但不局限于
              <span class="font-weight-bold text-orange">AdminLte</span>
              <span class="font-weight-bold text-lightblue">v3</span>
              的一个完全响应式的
              <span class="font-weight-bold text-vue-green">Vue</span>
              <span class="font-weight-bold text-vue-green"
                >v{{ vueVersionMinor }}</span
              >
              组件库，在
              <span class="font-weight-bold text-orange">AdminLte</span>
              <span class="font-weight-bold text-lightblue">v3</span>
              的基础上新增了多个组件。
            </p>

            <div class="media my-3">
              <div class="d-flex align-self-center">
                <img
                  :src="AdminLTELogo"
                  alt="User Avatar"
                  class="img-size-32 img-circle"
                />
              </div>
              <div class="media-body ml-3 text-muted align-self-center">
                <a
                  href="https://github.com/ColorlibHQ/AdminLTE"
                  target="_blank"
                >
                  <span class="font-weight-bold text-orange">AdminLte</span>
                  <span class="font-weight-bold text-lightblue">v3</span>
                </a>
                是一个完全响应式的管理模板，高度定制易于使用，适配移动端，PC端各种不同分辨率
              </div>
            </div>

            <div class="media mb-4">
              <div class="d-flex align-self-center">
                <img
                  :src="VueLogo"
                  alt="User Avatar"
                  class="img-size-32 img-circle"
                />
              </div>
              <div class="media-body ml-3 text-muted align-self-center">
                <a
                  data-v-4192c68c=""
                  href="https://cn.vuejs.org/"
                  target="_blank"
                  ><span class="font-weight-bold text-vue-green"
                    >Vue.js</span
                  ></a
                >
                一个渐进式 JavaScript 框架
              </div>
            </div>
          </nly-col>
        </nly-row>

        <p class="mb-0 text-muted text-center mb-n4 mb-md-n5">
          最新版本<br />
          <nly-link to="/docs/misc/changelog" class="small">
            <p class="text-pink">v{{ version }}</p>
          </nly-link>
        </p>
      </nly-container>
    </section>

    <section class="bv-section bv-gray-color">
      <nly-container tag="article">
        <div class="d-flex flex-column">
          <div class="order-2 order-md-1">
            <h2 class="h4 text-center bd-text-purple-bright">
              简介
            </h2>
            <nly-row class="mb-4">
              <nly-col lg="10" offset-lg="1">
                <p class="text-lg-center">
                  超过
                  <span class="font-weight-bold text-lightblue">80</span>
                  个组件,不少于
                  <span class="font-weight-bold text-lightblue">50</span>
                  个插件，将近
                  <span class="font-weight-bold text-lightblue">30</span>
                  个指令，多于
                  <span class="font-weight-bold text-lightblue"
                    >10000+ icon</span
                  >
                  的组件库，完美兼容
                  <nly-link
                    href="https://www.iconfont.cn/home/index"
                    target="_blank"
                  >
                    <abbr title="阿里巴巴矢量图标库，世界上最大的矢量图标库">
                      <span class="font-weight-bold text-info">iconfont</span>
                    </abbr>
                  </nly-link>
                  矢量图标库。
                </p>
                <p class="text-lg-center">
                  <span class="font-weight-bold text-pink">NlyadminlteVue</span>
                  为
                  <span class="font-weight-bold text-vue-green">
                    Vue.js v{{ vueVersionMinor }}
                  </span>
                  和
                  <span class="font-weight-bold text-orange">AdminLte v3</span>
                  提供了类似于
                  <nly-link
                    href="https://www.iconfont.cn/home/index"
                    target="_blank"
                  >
                    <abbr title="boostrap v4 目前并不支持row宽距">
                      <span class="font-weight-bold text-primary"
                        >Bootstrap v4</span
                      >
                    </abbr>
                  </nly-link>
                  一样强大的网格布局系统，甚至支持row宽距。
                  <span class="font-weight-bold text-pink">NlyadminlteVue</span>
                  在
                  <span class="font-weight-bold text-orange">AdminLte v3</span>
                  的基础上新增了多个插件。
                  <span class="font-weight-bold text-danger">
                    但是目前仍旧有许多插件还在开发中，欢迎贡献代码。
                  </span>
                </p>
              </nly-col>
            </nly-row>

            <nly-row class="justify-content-lg-center">
              <nly-col md="4" lg="3">
                <nly-button
                  to="/docs"
                  variant="outlineSecondary"
                  size="lg"
                  class="mb-3 mb-md-0"
                  block
                >
                  开始
                </nly-button>
              </nly-col>
              <nly-col md="4" lg="3">
                <nly-button
                  to="/play"
                  variant="outlineSecondary"
                  size="lg"
                  class="mb-3 mb-md-0"
                  block
                >
                  在线测试代码
                </nly-button>
              </nly-col>
              <nly-col md="4" lg="3">
                <nly-button
                  href="https://github.com/nejinn/nly-adminlte-vue/"
                  variant="outlineSecondary"
                  size="lg"
                  target="_blank"
                  block
                >
                  GitHub
                </nly-button>
              </nly-col>
            </nly-row>
          </div>
        </div>
      </nly-container>
    </section>

    <section class="bv-section bv-white"></section>

    <div class="bv-section bv-gray bv-p-reset" aria-hidden="true"></div>
  </main>
</template>

<style lang="scss" scoped>
.contributor {
  width: 55px;
}
.contributor .contributor-thumbnail {
  width: 100%;
  height: 55px;
}
.contributor a:hover .contributor-thumbnail {
  background-color: rgba(108, 117, 125, 0.25098);
}
.contributor .contributor-name {
  font-size: 80%;
  font-weight: 400;
}
.backers .contributor {
  width: 70px;
}
.backers .contributor .contributor-name {
  font-size: 60%;
}
.backers .contributor .contributor-thumbnail {
  height: 70px;
}
.bronze-sponsors .contributor {
  width: 90px;
}
.bronze-sponsors .contributor .contributor-thumbnail {
  height: 90px;
}
.silver-sponsors .contributor {
  width: 100px;
}
.silver-sponsors .contributor .contributor-name {
  font-size: 90%;
  font-weight: bold;
}
.silver-sponsors .contributor .contributor-thumbnail {
  height: 100px;
}
.gold-sponsors .contributor {
  width: 120px;
}
.gold-sponsors .contributor .contributor-name {
  font-size: 90%;
  font-weight: bold;
}
.gold-sponsors .contributor .contributor-thumbnail {
  height: 120px;
}
.platinum-sponsors .contributor {
  width: 140px;
}
.platinum-sponsors .contributor .contributor-name {
  font-size: 100%;
  font-weight: bold;
}
.platinum-sponsors .contributor .contributor-thumbnail {
  height: 140px;
}

.bd-masthead {
  color: #f8f9fa;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background-color: #343a40;
}
.bd-masthead .text-muted {
  color: #a6adb5 !important;
}
.bd-masthead a[href] {
  color: #007bff;
  font-weight: bold;
}
.bd-masthead a[href]:active,
.bd-masthead a[href]:visited {
  color: #007bff;
}
.bd-masthead a[href]:hover {
  color: #3f9bff;
  text-decoration: underline;
}
.bd-masthead .media svg {
  -webkit-filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.94118));
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.94118));
}
.text-vue-green {
  color: #42b883;
}
.bv-section {
  background-size: 100% 4rem;
  background-position: center top;
  background-repeat: no-repeat;
  padding-top: calc(4rem + 3rem);
  padding-bottom: 3rem;
  margin-top: -1px;
}
.bv-section.bv-white {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27826 3336' preserveAspectRatio='none' version='1.1'%3E%3Cg%3E%3Cpolygon fill='%23eee' points='13913,3336 0,0 27826,0' /%3E%3C/g%3E%3C/svg%3E");
  background-color: #fff;
}
.bv-section.bv-gray {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27826 3336' preserveAspectRatio='none' version='1.1'%3E%3Cg%3E%3Cpolygon fill='%23fff' points='13913,3336 0,0 27826,0'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #eee;
}
.bv-section.bv-gray-color {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27826 3450' preserveAspectRatio='none'%3E%3Cdefs%3E%3Cfilter id='a' filterUnits='objectBoundingBox' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeOffset in='SourceGraphic' result='b' dy='20'/%3E%3CfeGaussianBlur in='b' stdDeviation='25'/%3E%3C/filter%3E%3C/defs%3E%3Cpath filter='url(%23a)' d='M13943 3336L5092 1668 0 708V0h27826v719l-5032 949z'/%3E%3Cpath fill='%2342B883' d='M13943 3336L5092 1668 0 708V0h27826v719l-5032 949z'/%3E%3Cpath filter='url(%23a)' d='M0 0h27826v371l-5067 955-8851 1668-8850-1668L0 373z'/%3E%3Cpath fill='%237952B3' d='M0 0h27826v371l-5067 955-8851 1668-8850-1668L0 373z'/%3E%3Cpath filter='url(%23a)' d='M0 0h27826l-5065 954-8851 1668L5059 954 0 1z'/%3E%3Cpath fill='%23343a40' d='M0 0h27826l-5065 954-8851 1668L5059 954 0 1z'/%3E%3C/svg%3E");
  background-size: 175% 9rem;
  background-position-y: -2.75rem;
  background-color: #eee;
  padding-top: 9rem;
}
.bv-section.bv-p-reset {
  padding-top: 4rem;
  padding-bottom: 0;
}
@media (min-width: 768px) {
  .bv-section {
    padding-bottom: 2rem;
    padding-top: calc(8rem + 6rem);
  }
  .bv-section.bv-white,
  .bv-section.bv-gray {
    background-size: 100% 8rem;
  }
  .bv-section.bv-gray-color {
    background-size: 100% 12rem;
    background-position-y: top;
    padding-top: 16rem;
  }
  .bv-section.bv-p-reset {
    padding-top: 8rem;
    padding-bottom: 0;
  }
}
.bv-logo {
  display: block;
  width: 240px;
  height: 240px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  will-change: opacity;
  -webkit-animation: logo-splash-alpha-data-v-5862ef01 0.15s 1 ease-in-out;
  animation: logo-splash-alpha-data-v-5862ef01 0.15s 1 ease-in-out;
  overflow: visible;
}
.logo-aside {
  min-height: 240px;
}
.bv-logo .logo-dark-v,
.bv-logo .logo-purple-v,
.bv-logo .logo-green-v {
  will-change: transform;
  -webkit-transition: -webkit-transform 0.15s ease-in-out;
  transition: -webkit-transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
}
.bv-logo .logo-dark-v {
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-animation: logo-splash-dark 1.25s ease-in-out 1;
  animation: logo-splash-dark 1.25s ease-in-out 1;
}
.bv-logo .logo-purple-v {
  -webkit-animation: logo-splash-purple 1.25s ease-in-out 1;
  animation: logo-splash-purple 1.25s ease-in-out 1;
}
.bv-logo .logo-green-v {
  -webkit-animation: logo-splash-green 1.25s ease-in-out 1;
  animation: logo-splash-green 1.25s ease-in-out 1;
}
.bv-logo:hover .logo-dark-v {
  -webkit-transform: translateY(-6%) scale(1.15);
  transform: translateY(-6%) scale(1.15);
}
.bv-logo:hover .logo-purple-v {
  -webkit-transform: translateY(-12%);
  transform: translateY(-12%);
}
.bv-logo:hover .logo-green-v {
  -webkit-transform: translateY(12%);
  transform: translateY(12%);
}
.bv-logo,
.bv-logo .logo-dark-v,
.bv-logo .logo-purple-v,
.bv-logo .logo-green-v {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
@media (prefers-reduced-motion: reduce) {
  .bv-logo,
  .bv-logo .logo-dark-v,
  .bv-logo .logo-purple-v,
  .bv-logo .logo-green-v {
    -webkit-transition: none;
    transition: none;
    -webkit-animation: none;
    animation: none;
  }
}
@media (min-width: 768px) {
  .bv-logo {
    width: 230px;
    height: 230px;
  }
  .logo-aside {
    min-height: 230px;
  }
}
@media (min-width: 992px) {
  .bv-logo {
    width: 309px;
    height: 309px;
  }
  .logo-aside {
    min-height: 309px;
  }
}
@media (min-width: 1200px) {
  .bv-logo {
    width: 370px;
    height: 370px;
  }
  .logo-aside {
    min-height: 370px;
  }
}
@-webkit-keyframes logo-splash-alpha-data-v-5862ef01 {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes logo-splash-alpha-data-v-5862ef01 {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes logo-splash-dark {
  0% {
    -webkit-transform: translateY(-6%) scale(1.15);
    transform: translateY(-6%) scale(1.15);
  }
  45% {
    -webkit-transform: translateY(-6%) scale(1.15);
    transform: translateY(-6%) scale(1.15);
  }
  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
}
@keyframes logo-splash-dark {
  0% {
    -webkit-transform: translateY(-6%) scale(1.15);
    transform: translateY(-6%) scale(1.15);
  }
  45% {
    -webkit-transform: translateY(-6%) scale(1.15);
    transform: translateY(-6%) scale(1.15);
  }
  100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
  }
}
@-webkit-keyframes logo-splash-purple {
  0% {
    -webkit-transform: translateY(-12%);
    transform: translateY(-12%);
  }
  45% {
    -webkit-transform: translateY(-12%);
    transform: translateY(-12%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes logo-splash-purple {
  0% {
    -webkit-transform: translateY(-12%);
    transform: translateY(-12%);
  }
  45% {
    -webkit-transform: translateY(-12%);
    transform: translateY(-12%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes logo-splash-green {
  0% {
    -webkit-transform: translateY(12%);
    transform: translateY(12%);
  }
  45% {
    -webkit-transform: translateY(12%);
    transform: translateY(12%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes logo-splash-green {
  0% {
    -webkit-transform: translateY(12%);
    transform: translateY(12%);
  }
  45% {
    -webkit-transform: translateY(12%);
    transform: translateY(12%);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>

<script>
import { version, vueVersion } from "~/content";
import AdminLTELogo from "../assets/img/AdminLTELogo.png";
import VueLogo from "../assets/img/VueLogo.png";

export default {
  data() {
    return {
      isIE: false,
      showLogo: false,
      AdminLTELogo,
      VueLogo
    };
  },
  computed: {
    version: () => version,
    vueVersionMinor: () => vueVersion.replace(/\.\d+$/, "")
  },
  mounted() {
    this.$nextTick(() => {
      this.isIE = /msie|trident/i.test(window.navigator.userAgent || "");
      this.showLogo = true;
    });
  }
};
</script>
