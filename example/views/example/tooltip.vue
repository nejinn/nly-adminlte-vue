<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-table</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" sm="6" md="4">
          <nly-card>
            <nly-card-header>
              指令和组件tooltip
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                指令
              </nly-card-text>
              <div class="text-center my-3">
                <nly-button
                  v-nly-tooltip.hover
                  title="指令tooltip"
                  variant="info"
                >
                  移上来
                </nly-button>
              </div>

              <nly-card-text>
                组件
              </nly-card-text>
              <div class="text-center my-3">
                <nly-button id="tooltip-target-1" variant="info">
                  移上来
                </nly-button>
                <nly-tooltip target="tooltip-target-1" show>
                  组件tooltip
                </nly-tooltip>
              </div>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" sm="6" md="4">
          <nly-card>
            <nly-card-header>
              focus
            </nly-card-header>
            <nly-card-body>
              <div class="text-center my-3">
                <nly-button
                  href="#"
                  tabindex="0"
                  v-nly-tooltip.focus
                  title="Tooltip title"
                  variant="info"
                >
                  Link button with tooltip directive
                </nly-button>

                <nly-button
                  id="link-button"
                  href="#"
                  tabindex="0"
                  variant="info"
                >
                  Link button with tooltip component
                </nly-button>
                <nly-tooltip
                  target="link-button"
                  title="Tooltip title"
                  triggers="focus"
                >
                  Tooltip title
                </nly-tooltip>
              </div>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" sm="6" md="4">
          <nly-card>
            <nly-card-header>
              disabled元素
            </nly-card-header>
            <nly-card-body>
              <div class="text-center my-3">
                <span id="disabled-wrapper" class="d-inline-block" tabindex="0">
                  <nly-button
                    variant="primary"
                    style="pointer-events: none;"
                    disabled
                    >Disabled button</nly-button
                  >
                </span>
                <nly-tooltip target="disabled-wrapper"
                  >Disabled tooltip</nly-tooltip
                >
              </div>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>
