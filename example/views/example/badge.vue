<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-badge</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" md="4">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with bg-variant=*
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge bg-variant="secondary">
                secondary
              </nly-badge>
              <nly-badge bg-variant="primary">
                primary
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="success">
                success
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="info">
                info
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="warning">
                warning
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="danger">
                danger
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with variant=*
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge variant="primary">
                primary
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge>
                secondary
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="success">
                success
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="info">
                info
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="warning">
                warning
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="danger">
                danger
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with variant=*
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge variant="primary" outline dashed>
                primary
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="secondary" outline>
                secondary
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="success" outline dashed>
                success
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="info" out-line>
                info
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="warning" outline>
                warning
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge variant="danger" outline dashed>
                danger
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with pill
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge bg-variant="primary" pill>
                primary
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="secondary" pill>
                secondary
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="success" pill>
                success
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="info" pill>
                info
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="warning" pill>
                warning
              </nly-badge>
            </nly-card-body>
            <nly-card-body>
              <nly-badge bg-variant="danger" pill>
                danger
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with size=*
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge bg-variant="primary" size="xs">
                xs
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" size="sm">
                sm
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" size="md">
                md
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" size="lg">
                lg
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" size="xl">
                xl
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with size=*
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge bg-variant="primary" pill size="xs">
                xs
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" pill size="sm">
                sm
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" pill size="md">
                md
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" pill size="lg">
                lg
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" pill size="xl">
                xl
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="4">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with tag='a' bg-variant=*
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge bg-variant="primary" pill tag="a" size="lg">
                a
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge bg-variant="primary" tag="a" size="lg">
                a
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="4">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              <nly-card-title class="text-sm">
                badge with tag='a' variant=*
              </nly-card-title>
            </nly-card-header>
            <nly-card-body>
              <nly-badge variant="primary" pill tag="a" size="lg">
                a
              </nly-badge>
            </nly-card-body>

            <nly-card-body>
              <nly-badge variant="info" tag="a" size="lg">
                a
              </nly-badge>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <div style="margin-bottom:1rem">
            <nly-badge variant="info" pill size="lg" tag="a">
              variant="info" pill size='lg'
            </nly-badge>
          </div>

          <div style="margin-bottom:1rem">
            <nly-badge bg-variant="info">
              info
            </nly-badge>
          </div>

          <div style="margin-bottom:1rem">
            <nly-badge bg-variant="warning" pill>
              pill
            </nly-badge>
          </div>
          <div style="margin-bottom:1rem">
            <nly-badge bg-variant="teal" pill size="sm">
              bg
            </nly-badge>
          </div>
          <div style="margin-bottom:1rem">
            <nly-badge bg-variant="pink" pill size="lg">
              size
            </nly-badge>
          </div>

          <div style="margin-bottom:1rem">
            <nly-badge variant="info" pill size="lg" tag="a">
              info
            </nly-badge>
          </div>

          <div style="margin-bottom:1rem">
            <nly-badge bg-variant="info" pill size="lg" tag="a">
              info
            </nly-badge>
          </div>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>
