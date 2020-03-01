<template>
  <div class="card card-secondary">
    <div class="card-header">
      <h3 class="card-title">Custom Elements</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <form role="form">
        <nly-switch id="switch-test" off-variant="info" on-variant="danger">
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

        <nly-switch off-variant="cyan" on-variant="maroon" v-model="switchNull">
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

        <nly-switch size="sm" flat off-variant="primary" on-variant="dark">
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
</template>

<script>
export default {
  data() {
    return {
      switchString: "switchString",
      switchEmpty: "",
      switchFalse: false,
      switchNull: null,
      switchChecked: false
    };
  }
};
</script>
