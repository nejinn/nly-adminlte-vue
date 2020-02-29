<template>
  <div class="card card-secondary">
    <div class="card-header">
      <h3 class="card-title">Custom Elements</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      {{ z }}
      <form role="form">
        <nly-switch
          id="switch-test"
          off-variant="info"
          on-variant="danger"
          v-model="z"
        >
          id="switch-test" off-variant="info" on-variant="danger"
        </nly-switch>

        <nly-switch>
          无
        </nly-switch>

        <nly-switch disabled>
          disabled
        </nly-switch>

        <div class="form-group ">
          <div
            class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
          >
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"
              >Toggle this custom switch element with custom colors
              danger/success</label
            >
          </div>
        </div>
        <div class="form-group">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              disabled=""
              id="customSwitch2"
            />
            <label class="custom-control-label" for="customSwitch2"
              >Disabled custom switch element</label
            >
          </div>
        </div>
        <div class="form-group"></div>
      </form>
    </div>
    <!-- /.card-body -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      z: "zzz"
    };
  }
};
</script>
