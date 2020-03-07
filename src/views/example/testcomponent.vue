<template>
  <nly-content-wrapper>
    <nly-container>
      <nly-row>
        <nly-col>
          <test-component v-model="test" />
          {{ test }}
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-card header-variant="info" header-outline>
          <nly-card-header>
            初始值true
          </nly-card-header>
          <nly-card-body>
            <nly-col xs="6">
              <NlyBootstrapSwitch v-model="nlyswitch" size="xs" />
              {{ nlyswitch }}
            </nly-col>
            <nly-col xs="6">
              <NlyBootstrapSwitch v-model="nlyswitchFalse" size="xs" />
            </nly-col>
          </nly-card-body>
        </nly-card>
      </nly-row>

      <nly-row>
        <nly-col xs="6">
          <NlyBootstrapSwitch v-model="nlyswitch" size="sm" />
        </nly-col>
        <nly-col xs="6">
          <NlyBootstrapSwitch v-model="nlyswitchFalse" size="sm" />
          {{ nlyswitchFalse }}
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="6">
          <NlyBootstrapSwitch v-model="nlyswitch" />
        </nly-col>
        <nly-col xs="6">
          <NlyBootstrapSwitch v-model="nlyswitchFalse" />
          {{ nlyswitchFalse }}
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="3">
          <NlyBootstrapSwitch v-model="nlyswitchFalse" size="sx" />
          {{ nlyswitchFalse }}
        </nly-col>

        <nly-col xs="3">
          <NlyBootstrapSwitch v-model="nlyswitch" size="sm" />
        </nly-col>
        <nly-col xs="3">
          <NlyBootstrapSwitch v-model="nlyswitchFalse" />
        </nly-col>
        <nly-col xs="3">
          <NlyBootstrapSwitch v-model="nlyswitchFalse" size="lg" />
        </nly-col>
      </nly-row>
    </nly-container>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      test: "zzz",
      nlyswitch: true,
      nlyswitchFalse: false
    };
  }
};
</script>
