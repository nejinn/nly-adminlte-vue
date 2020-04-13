<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-list-group</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" md="6" lg="4">
          <nly-card>
            <nly-card-header>
              list-group
            </nly-card-header>
            <nly-card-body>
              <nly-list-group>
                <nly-list-group-item>测试1</nly-list-group-item>
                <nly-list-group-item>测试2</nly-list-group-item>
                <nly-list-group-item>测试3</nly-list-group-item>
                <nly-list-group-item>测试4</nly-list-group-item>
                <nly-list-group-item>测试5</nly-list-group-item>
              </nly-list-group>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6" lg="4">
          <nly-card>
            <nly-card-header>
              list-group Active
            </nly-card-header>
            <nly-card-body>
              <nly-list-group>
                <nly-list-group-item>测试1</nly-list-group-item>
                <nly-list-group-item active>测试2</nly-list-group-item>
                <nly-list-group-item>测试3</nly-list-group-item>
                <nly-list-group-item>测试4</nly-list-group-item>
                <nly-list-group-item>测试5</nly-list-group-item>
              </nly-list-group>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6" lg="4">
          <nly-card>
            <nly-card-header>
              list-group Disabled
            </nly-card-header>
            <nly-card-body>
              <nly-list-group>
                <nly-list-group-item>测试1</nly-list-group-item>
                <nly-list-group-item disabled>测试2</nly-list-group-item>
                <nly-list-group-item>测试3</nly-list-group-item>
                <nly-list-group-item>测试4</nly-list-group-item>
                <nly-list-group-item>测试5</nly-list-group-item>
              </nly-list-group>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6" lg="4">
          <nly-card>
            <nly-card-header>
              list-group action
            </nly-card-header>
            <nly-card-body>
              <nly-list-group>
                <nly-list-group-item to="/table" active>
                  测试1</nly-list-group-item
                >
                <nly-list-group-item to="/table" disabled
                  >测试2</nly-list-group-item
                >
                <nly-list-group-item href="/table" target="_blank"
                  >测试3</nly-list-group-item
                >
                <nly-list-group-item>测试4</nly-list-group-item>
                <nly-list-group-item>测试5</nly-list-group-item>
              </nly-list-group>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6" lg="4">
          <nly-card>
            <nly-card-header>
              list-group button
            </nly-card-header>
            <nly-card-body>
              <nly-list-group>
                <nly-list-group-item button>测试1</nly-list-group-item>
                <nly-list-group-item button disabled>测试2</nly-list-group-item>
                <nly-list-group-item button actvie>测试3</nly-list-group-item>
                <nly-list-group-item>测试4</nly-list-group-item>
                <nly-list-group-item>测试5</nly-list-group-item>
              </nly-list-group>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6" lg="4">
          <nly-card>
            <nly-card-header>
              list-group button
            </nly-card-header>
            <nly-card-body>
              <nly-list-group>
                <nly-list-group-item>Default</nly-list-group-item>
                <nly-list-group-item variant="primary"
                  >Primary</nly-list-group-item
                >
                <nly-list-group-item variant="secondary"
                  >Secondary</nly-list-group-item
                >
                <nly-list-group-item variant="success"
                  >Success</nly-list-group-item
                >
                <nly-list-group-item variant="danger"
                  >Danger</nly-list-group-item
                >
                <nly-list-group-item variant="warning"
                  >Warning</nly-list-group-item
                >
                <nly-list-group-item variant="info">Info</nly-list-group-item>
                <nly-list-group-item variant="light">Light</nly-list-group-item>
                <nly-list-group-item variant="dark">Dark</nly-list-group-item>
              </nly-list-group>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-col xs="12" md="6" lg="4">
        <nly-card>
          <nly-card-header>
            list-group button
          </nly-card-header>
          <nly-card-body>
            <nly-list-group>
              <nly-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                Cras justo odio
                <nly-badge variant="primary" pill>14</nly-badge>
              </nly-list-group-item>

              <nly-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                Dapibus ac facilisis in
                <nly-badge variant="primary" pill>2</nly-badge>
              </nly-list-group-item>

              <nly-list-group-item
                class="d-flex justify-content-between align-items-center"
              >
                Morbi leo risus
                <nly-badge variant="primary" pill>1</nly-badge>
              </nly-list-group-item>
            </nly-list-group>
          </nly-card-body>
        </nly-card>
      </nly-col>
    </nly-content>
  </nly-content-wrapper>
</template>
