<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mnly-2">
          <nly-col sm="6">
            <h1>nly-input-group</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-input-group prepend="$" append=".00">
            <nly-form-input> </nly-form-input>
          </nly-input-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-input-group class="mt-3">
            <template v-slot:append>
              <nly-input-group-text
                ><strong class="text-danger">!</strong></nly-input-group-text
              >
            </template>
            <nly-form-input></nly-form-input>
          </nly-input-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-input-group prepend="Username" class="mt-3">
            <nly-form-input></nly-form-input>
            <nly-input-group-append>
              <nly-button variant="outlineSuccess">Button</nly-button>
              <nly-button variant="info">Button</nly-button>
            </nly-input-group-append>
          </nly-input-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-input-group prepend="0" append="100" class="mt-3">
            <nly-form-input type="range" min="0" max="100"></nly-form-input>
          </nly-input-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <div>
            <nly-input-group
              :invalid-feedback="invalid"
              :valid="valid"
              text-variant="pink"
              inline
              text-tag="small"
            >
              <nly-input-group-prepend is-text>
                <nly-icon icon="fas fa-envelope" />
              </nly-input-group-prepend>
              <nly-form-input :valid="valid"></nly-form-input>
              <nly-input-group-append>
                <nly-button size="sm" text="Button" variant="success"
                  >Button</nly-button
                >
              </nly-input-group-append>
            </nly-input-group>
            <nly-form-group
              label="valid 表单状态"
              label-cols-xs="auto"
              class="mt-2"
            >
              <nly-form-select v-model="valid" :options="validOptinos" />
            </nly-form-group>
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
      valid: "novalid",
      validOptinos: [
        { value: null, text: "Please select an option", disabled: true },
        { value: "novalid", text: "不显示 feedback" },
        { value: "invalid", text: "显示invalid feedback" },
        { value: "valid", text: "显示 valid feedback" },
        { value: "warning", text: "显示 warning feedback" }
      ]
    };
  },
  computed: {
    invalid() {
      return this.valid == "invalid" ? "222222" : "";
    }
  }
};
</script>
