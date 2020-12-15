<template>
  <footer :class="['bd-footer', 'text-muted', { 'docs-border': isDocs }]">
    <nly-container>
      <nly-row class="justify-content-center">
        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="1"
          order-sm="4"
          class="text-center d-sm-block d-none"
        >
          <svg
            v-if="showLogo"
            class="docs-footer-logo"
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

        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="1"
          order-sm="4"
          class="text-center m-3 docs-border-bottom d-sm-none d-block mt-3"
        >
          <svg
            v-if="showLogo"
            class="docs-footer-logo"
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

        <nly-col
          xs="12"
          sm="6"
          lg="3"
          md="6"
          order-xs="2"
          order-sm="1"
          class="text-center docs-border-right d-none d-sm-block"
        >
          <h5 class="bd-text-purple-bright mb-1">文档</h5>
          <ul class="list-unstyled">
            <li>
              <nly-link to="/" exact>首页</nly-link>
            </li>
            <li>
              <nly-link to="/docs" exact>开始</nly-link>
            </li>
            <li>
              <nly-link to="/docs/components" exact>组件</nly-link>
            </li>
            <li>
              <nly-link to="/docs/directives" exact>指令</nly-link>
            </li>
            <li>
              <nly-link to="/docs/icons" exact>图标</nly-link>
            </li>
            <li>
              <nly-link to="/play" exact>在线体验</nly-link>
            </li>
          </ul>
        </nly-col>

        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="2"
          order-sm="1"
          class="text-center docs-border-bottom d-sm-none d-block mt-3"
        >
          <h5 class="bd-text-purple-bright mb-1">文档</h5>
          <ul class="list-unstyled">
            <li>
              <nly-link to="/" exact>首页</nly-link>
            </li>
            <li>
              <nly-link to="/docs" exact>开始</nly-link>
            </li>
            <li>
              <nly-link to="/docs/components" exact>组件</nly-link>
            </li>
            <li>
              <nly-link to="/docs/directives" exact>指令</nly-link>
            </li>
            <li>
              <nly-link to="/docs/icons" exact>图标</nly-link>
            </li>
            <li>
              <nly-link to="/play" exact>在线体验</nly-link>
            </li>
          </ul>
        </nly-col>

        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="3"
          order-sm="2"
          class="text-center docs-border-right d-md-none d-none d-lg-block"
        >
          <h5 class="bd-text-purple-bright mb-1">加油站</h5>
          <ul class="list-unstyled">
            <li>
              <a
                href="https://github.com/nejinn/nly-adminlte-vue"
                target="_blank"
                >GitHub</a
              >
            </li>
            <li>
              <a
                href="https://github.com/nejinn/nly-adminlte-vue/issues"
                target="_blank"
                >Issues</a
              >
            </li>
            <li>
              <a
                href="https://nejinn.github.io/nly-adminlte-vue-demo"
                target="_blank"
                >Demo</a
              >
            </li>
            <li>
              <a href="https:///" target="_blank">打赏</a>
            </li>
          </ul>
          <!-- <h5 class="bd-text-purple-bright mnly-1 mt-3">更新日志</h5>
          <ul class="list-unstyled ml-3">
            <li>
              <nly-link to="/docs/misc/changelog" exact>更新日志</nly-link>
            </li>
          </ul> -->
        </nly-col>

        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="3"
          order-sm="2"
          class="text-center d-none d-sm-block d-lg-none"
        >
          <h5 class="bd-text-purple-bright mb-1">加油站</h5>
          <ul class="list-unstyled">
            <li>
              <a
                href="https://github.com/nejinn/nly-adminlte-vue"
                target="_blank"
                >GitHub</a
              >
            </li>
            <li>
              <a
                href="https://github.com/nejinn/nly-adminlte-vue/issues"
                target="_blank"
                >Issues</a
              >
            </li>
            <li>
              <a
                href="https://nejinn.github.io/nly-adminlte-vue-demo"
                target="_blank"
                >Demo</a
              >
            </li>
            <li>
              <a href="https:///" target="_blank">打赏</a>
            </li>
          </ul>
          <!-- <h5 class="bd-text-purple-bright mnly-1 mt-3">更新日志</h5>
          <ul class="list-unstyled ml-3">
            <li>
              <nly-link to="/docs/misc/changelog" exact>更新日志</nly-link>
            </li>
          </ul> -->
        </nly-col>

        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="3"
          order-sm="2"
          class="text-center docs-border-bottom d-sm-none d-block mt-3"
        >
          <h5 class="bd-text-purple-bright mb-1">加油站</h5>
          <ul class="list-unstyled">
            <li>
              <a
                href="https://github.com/nejinn/nly-adminlte-vue"
                target="_blank"
                >GitHub</a
              >
            </li>
            <li>
              <a
                href="https://github.com/nejinn/nly-adminlte-vue/issues"
                target="_blank"
                >Issues</a
              >
            </li>
            <li>
              <a
                href="https://nejinn.github.io/nly-adminlte-vue-demo"
                target="_blank"
                >Demo</a
              >
            </li>
            <li>
              <a href="https:///" target="_blank">打赏</a>
            </li>
          </ul>
          <!-- <h5 class="bd-text-purple-bright mnly-1 mt-3">更新日志</h5>
          <ul class="list-unstyled ml-3">
            <li>
              <nly-link to="/docs/misc/changelog" exact>更新日志</nly-link>
            </li>
          </ul> -->
        </nly-col>

        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="4"
          order-sm="3"
          class="text-center docs-border-right d-sm-block d-none"
        >
          <h5 class="bd-text-purple-bright mb-1">联系作者</h5>
          <ul class="list-unstyled">
            <li>
              <a>QQ: 871966163</a>
            </li>
            <li>
              <a>E-mail: admin@nejinn.com</a>
            </li>
          </ul>
        </nly-col>

        <nly-col
          xs="12"
          lg="3"
          md="6"
          sm="6"
          order-xs="4"
          order-sm="3"
          class="text-center d-sm-none d-block mt-3"
        >
          <h5 class="bd-text-purple-bright mb-1">联系作者</h5>
          <ul class="list-unstyled">
            <li>
              <a>QQ: 871966163</a>
            </li>
            <li>
              <a>E-mail: admin@nejinn.com</a>
            </li>
          </ul>
        </nly-col>
      </nly-row>
      <hr />

      <nly-row>
        <nly-col xs="12">
          <b>友情连接</b>
        </nly-col>
        <nly-col xs="12" sm="5" md="4" lg="3">
          <ul class="list-unstyled">
            <li>
              <nly-link href="http://shi.lycecho.com/" class="text-indigo"
                >古诗词网-百万唐诗宋词鉴赏</nly-link
              >
            </li>
          </ul>
        </nly-col>

        <nly-col xs="12" sm="5" md="4" lg="3">
          <ul class="list-unstyled">
            <li>
              <nly-link href="http://www.lycecho.com/" class="text-indigo"
                >程序员笔记-专业教程笔记</nly-link
              >
            </li>
          </ul>
        </nly-col>
      </nly-row>
      <hr />
      <p>
        Currently v{{ version }}. Code licensed
        <a
          href="https://github.com/nejinn/nly-adminlte-vue/blob/master/LICENSE"
          target="_blank"
          >MIT</a
        >. Docs generated with
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
        <template v-if="isNetlify">
          and proudly hosted on
          <a href="https://www.netlify.com" target="_blank"
            >Netlify</a
          ></template
        >.
      </p>
      <p>
        Nejinn Lerity 版权所有
        <a href="http://www.beian.miit.gov.cn/" target="_blank"
          >湘ICP备19026885号</a
        >
      </p>
    </nly-container>
  </footer>
</template>

<style>
.docs-border {
  border-top: 3px solid #dee2e6;
}

@media (min-width: 1200px) {
  .bd-footer > .container {
    max-width: 960px;
  }
}
</style>

<script>
import { version } from "../content";
const name = "NlyDocsFooter";
export default {
  name: name,
  props: {
    isDocs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { version, showLogo: false, isIE: false };
  },
  computed: {
    isNetlify() {
      return Boolean(process.env.NETLIFY);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.isIE = /msie|trident/i.test(window.navigator.userAgent || "");
      this.showLogo = true;
    });
  }
};
</script>

<style lang="scss" scoped>
.docs-footer-logo {
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
.docs-footer-logo .logo-dark-v,
.docs-footer-logo .logo-purple-v,
.docs-footer-logo .logo-green-v {
  will-change: transform;
  -webkit-transition: -webkit-transform 0.15s ease-in-out;
  transition: -webkit-transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
}
.docs-footer-logo .logo-dark-v {
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-animation: logo-splash-dark 1.25s ease-in-out 1;
  animation: logo-splash-dark 1.25s ease-in-out 1;
}
.docs-footer-logo .logo-purple-v {
  -webkit-animation: logo-splash-purple 1.25s ease-in-out 1;
  animation: logo-splash-purple 1.25s ease-in-out 1;
}
.docs-footer-logo .logo-green-v {
  -webkit-animation: logo-splash-green 1.25s ease-in-out 1;
  animation: logo-splash-green 1.25s ease-in-out 1;
}
.docs-footer-logo:hover .logo-dark-v {
  -webkit-transform: translateY(-6%) scale(1.15);
  transform: translateY(-6%) scale(1.15);
}
.docs-footer-logo:hover .logo-purple-v {
  -webkit-transform: translateY(-12%);
  transform: translateY(-12%);
}
.docs-footer-logo:hover .logo-green-v {
  -webkit-transform: translateY(12%);
  transform: translateY(12%);
}
.docs-footer-logo,
.docs-footer-logo .logo-dark-v,
.docs-footer-logo .logo-purple-v,
.docs-footer-logo .logo-green-v {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
@media (prefers-reduced-motion: reduce) {
  .docs-footer-logo,
  .docs-footer-logo .logo-dark-v,
  .docs-footer-logo .logo-purple-v,
  .docs-footer-logo .logo-green-v {
    -webkit-transition: none;
    transition: none;
    -webkit-animation: none;
    animation: none;
  }
}

@media (min-width: 0px) {
  .docs-footer-logo {
    width: 120px;
    height: 120px;
  }
}

@media (min-width: 768px) {
  .docs-footer-logo {
    width: 120px;
    height: 120px;
  }
}
@media (min-width: 992px) {
  .docs-footer-logo {
    width: 150px;
    height: 150px;
  }
}
@media (min-width: 1200px) {
  .docs-footer-logo {
    width: 200px;
    height: 200px;
  }
}
</style>
