<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-button</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-container>
            <div style="margin: 1rem;">
              <nly-button block variant="info">
                button block variant="info"
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button block variant="outlineInfo">
                button block variant="outlineInfo"
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button variant="warning">
                <nly-icon icon="nlyfont nly-icon-logo-angular" />
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button variant="warning" size="sm">
                button variant="warning" size="sm"
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button variant="warning" size="lg">
                button variant="warning" size="sm"
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button variant="warning" shape="roundedLg">
                button variant="warning" shape='roundedLg'
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button variant="warning" shape="roundedFlat">
                button variant="warning" shape='roundedFlat'
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button variant="warning" shape="roundedPill">
                button variant="warning" shape='roundedPill'
              </nly-button>
            </div>

            <div style="margin: 1rem;">
              <nly-button variant="warning" shape="roundedCircle">
                Circle
              </nly-button>
            </div>

            <div>
              按钮组
            </div>

            <div style="margin: 1rem;">
              无
              <nly-button-group>
                <nly-button variant="warning">
                  button variant="warning"
                </nly-button>
                <nly-button variant="danger">
                  button variant="warning"
                </nly-button>

                <nly-button bg-gradient="success">
                  button bg-gradient="success"
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              icon
              <nly-button-group>
                <nly-button variant="warning">
                  <nly-icon icon="nlyfont nly-icon-bonfire" />
                </nly-button>
                <nly-button variant="danger">
                  <nly-icon icon="nlyfont nly-icon-bonfire" />
                </nly-button>

                <nly-button variant="info">
                  <nly-icon icon="nlyfont nly-icon-bonfire" />
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              vertical
              <nly-button-group vertical>
                <nly-button variant="warning">
                  button variant="warning"
                </nly-button>
                <nly-button variant="danger">
                  button variant="warning"
                </nly-button>

                <nly-button bg-gradient="success">
                  button bg-gradient="success"
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              vertical icon
              <nly-button-group vertical>
                <nly-button variant="warning">
                  <nly-icon icon="nlyfont nly-icon-bonfire" />
                </nly-button>
                <nly-button variant="danger">
                  <nly-icon icon="nlyfont nly-icon-bonfire" />
                </nly-button>

                <nly-button variant="info">
                  <nly-icon icon="nlyfont nly-icon-bonfire" />
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              size="sm"
              <nly-button-group size="sm">
                <nly-button variant="warning">
                  button variant="warning"
                </nly-button>
                <nly-button variant="danger">
                  button variant="warning"
                </nly-button>

                <nly-button bg-gradient="success">
                  button bg-gradient="success"
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              size="sm"
              <nly-button-group size="sm">
                <nly-button variant="warning" disabled>
                  button variant="warning"
                </nly-button>
                <nly-button variant="danger" @click="showalter">
                  button variant="warning"
                </nly-button>

                <nly-button bg-gradient="success" @click="showalter" disabled>
                  button bg-gradient="success"
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              size="lg"
              <nly-button-group size="lg">
                <nly-button variant="warning">
                  button variant="warning"
                </nly-button>
                <nly-button variant="danger">
                  button variant="warning"
                </nly-button>

                <nly-button bg-gradient="success">
                  button bg-gradient="success"
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              <nly-button-group size="sm" tag="ul">
                <nly-button variant="warning">
                  button variant="warning"
                </nly-button>
                <nly-button variant="danger">
                  button variant="warning"
                </nly-button>

                <nly-button bg-gradient="success">
                  button bg-gradient="success"
                </nly-button>
              </nly-button-group>
            </div>

            <div style="margin: 1rem;">
              <nly-dropdown
                vertical
                dropdown-size="sm"
                dropdown-toggle
                text="dropdown"
                data-show="dropdown-test1"
                variant="danger"
              >
                <nly-button variant="warning">
                  vertical dropdown-size="sm" dropdown-toggle text="dropdown"
                  data-show="dropdown-test1"
                </nly-button>
              </nly-dropdown>
              <nly-dropdown-menu id="dropdown-test1">
                sss
              </nly-dropdown-menu>
            </div>

            <div style="margin: 1rem;">
              <nly-dropdown
                text="dropdown"
                data-show="dropdown-test2"
                variant="danger"
              >
                <nly-button variant="warning">
                  text="dropdown"
                </nly-button>
              </nly-dropdown>
              <nly-dropdown-menu id="dropdown-test2">
                sss
              </nly-dropdown-menu>
            </div>
          </nly-container>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  methods: {
    showalter() {
      alert(1);
    }
  }
};
</script>
