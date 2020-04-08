<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-progress</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="6">
          <nly-card>
            <nly-card-header>
              progress
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                value=34.35 label-value-percent
              </nly-card-text>
              <nly-progress value="34.35" label-value-percent> </nly-progress>

              <nly-card-text>
                value=34.35 label-value-percent precision='2'
              </nly-card-text>
              <nly-progress value="34.35" label-value-percent precision="2">
              </nly-progress>

              <nly-card-text>
                value=72.478 label-value
              </nly-card-text>
              <nly-progress value="72.478" label-value> </nly-progress>

              <nly-card-text>
                value=72.478 label-value precision="2"
              </nly-card-text>
              <nly-progress value="72.478" label-value precision="2">
              </nly-progress>

              <nly-card-text>
                value=72.478 label-value precision="3"
              </nly-card-text>
              <nly-progress value="72.478" label-value precision="3">
              </nly-progress>

              <nly-card-text>
                value=50 striped
              </nly-card-text>
              <nly-progress value="50" striped> </nly-progress>

              <nly-card-text>
                value=50 striped animated
              </nly-card-text>
              <nly-progress value="50" striped animated> </nly-progress>

              <nly-card-text>
                max=240 value=80 striped animated label-value
              </nly-card-text>
              <nly-progress max="240" value="80" striped animated label-value>
              </nly-progress>

              <nly-card-text>
                max=240 value=80 striped animated label-value-percent
              </nly-card-text>
              <nly-progress
                max="240"
                value="80"
                striped
                animated
                label-value-percent
              >
              </nly-progress>

              <nly-card-text>
                nly-progress>nly-progress-bar
              </nly-card-text>
              <nly-progress
                max="240"
                value="80"
                striped
                animated
                label-value
                variant="danger"
              >
                <nly-progress-bar value="80"> </nly-progress-bar>
                <nly-progress-bar
                  value="40"
                  label-value-percent
                  variant="info"
                  :animated="false"
                >
                </nly-progress-bar>

                <nly-progress-bar value="90" label-value variant="dark">
                </nly-progress-bar>
              </nly-progress>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="6">
          <nly-card>
            <nly-card-header>
              progress
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                vertical
              </nly-card-text>
              <nly-progress
                max="240"
                value="80"
                striped
                animated
                label-value
                variant="danger"
                vertical
              >
              </nly-progress>

              <nly-progress
                max="140"
                value="80"
                label-value-percent
                variant="info"
                vertical
              >
              </nly-progress>

              <nly-progress
                max="140"
                value="80"
                label-value-percent
                variant="info"
                vertical
                precision="1"
              >
              </nly-progress>

              <nly-progress max="190" value="80" variant="info" vertical>
              </nly-progress>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="6">
          <nly-card>
            <nly-card-header>
              progress variant
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                primary && null
              </nly-card-text>
              <nly-progress value="30" variant="primary"> </nly-progress>

              <nly-card-text>
                secondary
              </nly-card-text>
              <nly-progress variant="secondary" value="30"> </nly-progress>

              <nly-card-text>
                success
              </nly-card-text>
              <nly-progress variant="success" value="30"> </nly-progress>

              <nly-card-text>
                info
              </nly-card-text>
              <nly-progress variant="info" value="30"> </nly-progress>

              <nly-card-text>
                warning
              </nly-card-text>
              <nly-progress variant="warning" value="30"> </nly-progress>

              <nly-card-text>
                danger
              </nly-card-text>
              <nly-progress variant="danger" value="30"> </nly-progress>

              <nly-card-text>
                light
              </nly-card-text>
              <nly-progress variant="light" value="30"> </nly-progress>

              <nly-card-text>
                dark
              </nly-card-text>
              <nly-progress variant="dark" value="30"> </nly-progress>

              <nly-card-text>
                lightblue
              </nly-card-text>
              <nly-progress variant="lightblue" value="30"> </nly-progress>

              <nly-card-text>
                pink
              </nly-card-text>
              <nly-progress variant="pink" value="30"> </nly-progress>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="6">
          <nly-card>
            <nly-card-header>
              size
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                xxs
              </nly-card-text>
              <nly-progress
                max="240"
                value="80"
                striped
                animated
                variant="danger"
                size="xxs"
              >
              </nly-progress>

              <nly-card-text>
                xs
              </nly-card-text>
              <nly-progress max="140" value="80" variant="info" size="xs">
              </nly-progress>

              <nly-card-text>
                sm
              </nly-card-text>
              <nly-progress max="140" value="80" variant="info" size="sm">
              </nly-progress>

              <nly-card-text>
                sm
              </nly-card-text>
              <nly-progress max="140" variant="info" size="sm">
                <nly-progress-bar value="30"> </nly-progress-bar>
                <nly-progress-bar value="30" variant="lime"> </nly-progress-bar>
                <nly-progress-bar value="30" variant="teal"> </nly-progress-bar>
              </nly-progress>

              <nly-card-text>
                default
              </nly-card-text>
              <nly-progress max="140" value="80" variant="info"> </nly-progress>

              <nly-card-text>
                vertical defalut sm xs xxs
              </nly-card-text>
              <nly-progress max="140" value="80" variant="info" vertical>
              </nly-progress>

              <nly-progress
                max="190"
                value="80"
                variant="info"
                vertical
                size="sm"
              >
              </nly-progress>

              <nly-progress
                max="190"
                value="80"
                variant="info"
                vertical
                size="xs"
              >
              </nly-progress>

              <nly-progress
                max="190"
                value="80"
                variant="info"
                vertical
                size="xxs"
              >
              </nly-progress>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>
    </nly-content> </nly-content-wrapper
></template>
