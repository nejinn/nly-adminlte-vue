<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-switch</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">nly-switch</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <form role="form">
                <nly-switch
                  id="switch-test"
                  off-variant="info"
                  on-variant="danger"
                >
                  id="switch-test" off-variant="info" on-variant="danger"
                </nly-switch>

                <nly-switch>
                  默认
                </nly-switch>

                <nly-switch disabled>
                  disabled
                </nly-switch>

                <nly-switch
                  off-variant="warning"
                  on-variant="pink"
                  v-model="switchString"
                >
                  {{ switchString }} 初始值为字符串
                </nly-switch>

                <nly-switch
                  off-variant="primary"
                  on-variant="dark"
                  v-model="switchEmpty"
                >
                  {{ switchEmpty }} 初始值为空
                </nly-switch>

                <nly-switch
                  off-variant="success"
                  on-variant="indigo"
                  v-model="switchFalse"
                >
                  {{ switchFalse }} 初始值为false
                </nly-switch>

                <nly-switch
                  off-variant="cyan"
                  on-variant="maroon"
                  v-model="switchNull"
                >
                  {{ switchNull }} 初始值为null
                </nly-switch>

                <nly-switch size="sm" off-variant="cyan" on-variant="maroon">
                  sm
                </nly-switch>

                <nly-switch size="lg">
                  lg
                </nly-switch>

                <nly-switch flat off-variant="warning" on-variant="pink">
                  flat
                </nly-switch>

                <nly-switch
                  size="sm"
                  flat
                  off-variant="primary"
                  on-variant="dark"
                >
                  sm flat
                </nly-switch>

                <nly-switch
                  size="lg"
                  flat
                  off-variant="success"
                  on-variant="indigo"
                  checked
                >
                  lg falt checked
                </nly-switch>

                <nly-switch
                  size="lg"
                  flat
                  off-variant="success"
                  on-variant="indigo"
                  checked
                  v-model="switchChecked"
                >
                  {{ switchChecked }} lg falt checked
                </nly-switch>
              </form>
            </div>
            <!-- /.card-body -->
          </div>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">nly-bootstrap-switch</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <nly-row>
                <nly-col xs="3">
                  <nly-card header-variant="info" header-outline>
                    <nly-card-header>
                      初始值{{ bootstrapSwitch }}
                    </nly-card-header>
                    <nly-card-body>
                      <nly-row>
                        <nly-col>
                          size="xs"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            size="xs"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="sm"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            size="sm"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          nothing
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch v-model="bootstrapSwitch" />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="lg"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            size="lg"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          width="80"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            width="80"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-text='是'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            on-text="是"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          off-text='否'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            off-text="否"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          label-text='哈哈'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            label-text="哈哈"
                          />
                        </nly-col>
                      </nly-row>
                    </nly-card-body>
                  </nly-card>
                </nly-col>

                <nly-col xs="3">
                  <nly-card header-variant="info" header-outline>
                    <nly-card-header>
                      inverse
                    </nly-card-header>
                    <nly-card-body>
                      <nly-row>
                        <nly-col>
                          size="xs"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            size="xs"
                            inverse
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="sm"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            size="sm"
                            inverse
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          nothing
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            inverse
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="lg"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            size="lg"
                            inverse
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          width="80"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            width="80"
                            inverse
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-text='是'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            on-text="是"
                            inverse
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          off-text='否'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            off-text="否"
                            inverse
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          label-text='哈哈'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitch"
                            label-text="哈哈"
                            inverse
                          />
                        </nly-col>
                      </nly-row>
                    </nly-card-body>
                  </nly-card>
                </nly-col>

                <nly-col xs="3">
                  <nly-card header-variant="info" header-outline>
                    <nly-card-header>
                      disabled
                    </nly-card-header>
                    <nly-card-body>
                      <nly-row>
                        <nly-col>
                          size="xs"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="xs"
                            disabled
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="sm"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="sm"
                            disabled
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          nothing
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            disabled
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="lg"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="lg"
                            disabled
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          width="80"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            width="80"
                            disabled
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-text='是'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            on-text="是"
                            disabled
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          off-text='否'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            :checked="true"
                            off-text="否"
                            disabled
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          label-text='哈哈'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            label-text="哈哈"
                            disabled
                          />
                        </nly-col>
                      </nly-row>
                    </nly-card-body>
                  </nly-card>
                </nly-col>

                <nly-col xs="3">
                  <nly-card header-variant="info" header-outline>
                    <nly-card-header>
                      readonly
                    </nly-card-header>
                    <nly-card-body>
                      <nly-row>
                        <nly-col>
                          size="xs"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="xs"
                            readonly
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="sm"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="sm"
                            readonly
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          nothing
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            readonly
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          size="lg"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="lg"
                            readonly
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          width="80"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            width="80"
                            readonly
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-text='是'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            on-text="是"
                            readonly
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          off-text='否'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            :checked="true"
                            off-text="否"
                            readonly
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          label-text='哈哈'
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            label-text="哈哈"
                            readonly
                          />
                        </nly-col>
                      </nly-row>
                    </nly-card-body>
                  </nly-card>
                </nly-col>
              </nly-row>

              <nly-row>
                <nly-col xs="6">
                  <nly-card header-variant="info" header-outline>
                    <nly-card-header>
                      on-variant off-variant
                    </nly-card-header>
                    <nly-card-body>
                      <nly-row>
                        <nly-col>
                          no animate
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="xs"
                            :animate="false"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="info" off-variant="primary"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="sm"
                            on-variant="info"
                            off-variant="primary"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="info" off-variant="secondary"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            on-variant="info"
                            off-variant="secondary"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="info" off-variant="success"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="lg"
                            on-variant="info"
                            off-variant="success"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="info" off-variant="warning"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            width="80"
                            on-variant="info"
                            off-variant="warning"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-variant="info" off-variant="danger"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            on-text="是"
                            on-variant="info"
                            off-variant="danger"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-variant="info" off-variant="light"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            :checked="true"
                            off-text="否"
                            on-variant="info"
                            off-variant="light"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-variant="info" off-variant="dark"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            label-text="哈哈"
                            on-variant="info"
                            off-variant="dark"
                          />
                        </nly-col>
                      </nly-row>
                    </nly-card-body>
                  </nly-card>
                </nly-col>

                <nly-col xs="6">
                  <nly-card header-variant="info" header-outline>
                    <nly-card-header>
                      on-variant off-variant
                    </nly-card-header>
                    <nly-card-body>
                      <nly-row>
                        <nly-col>
                          on-variant='lightblue' off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="xs"
                            on-variant="lightblue"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="navy" off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="sm"
                            on-variant="navy"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="olive" off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            on-variant="olive"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="lime" off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            size="lg"
                            on-variant="lime"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          on-variant="fuchsia" off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            width="80"
                            on-variant="fuchsia"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-variant="maroon" off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            on-text="是"
                            on-variant="maroon"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-variant="blue" off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            :checked="true"
                            off-text="否"
                            on-variant="blue"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>

                      <nly-row>
                        <nly-col>
                          on-variant="indigo" off-variant="pink"
                        </nly-col>
                      </nly-row>
                      <nly-row>
                        <nly-col>
                          <nly-bootstrap-switch
                            v-model="bootstrapSwitchFalse"
                            label-text="哈哈"
                            on-variant="indigo"
                            off-variant="pink"
                          />
                        </nly-col>
                      </nly-row>
                    </nly-card-body>
                  </nly-card>
                </nly-col>
              </nly-row>
            </div>
          </div>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      switchString: "switchString",
      switchEmpty: "",
      switchFalse: false,
      switchNull: null,
      switchChecked: false,
      bootstrapSwitch: true,
      bootstrapSwitchFalse: false
    };
  }
};
</script>
