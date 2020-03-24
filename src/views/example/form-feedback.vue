<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-from-input</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" md="6">
          <nly-card header-variant="info">
            <nly-card-header>
              form-feedback
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                feedback state:valid,invalid,warning
              </nly-card-text>
              <nly-form-input valid="valid" />
              <nly-form-feedback> 我是valid</nly-form-feedback>
              <nly-form-input valid="invalid" />
              <nly-form-feedback state="invalid">
                我是invalid</nly-form-feedback
              >
              <nly-form-input valid="warning" />
              <nly-form-feedback state="warning">
                我是warning
              </nly-form-feedback>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6">
          <nly-card header-variant="info">
            <nly-card-header>
              form-feedback
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                feedback text
              </nly-card-text>
              <nly-form-input v-model="text" />
              <nly-form-input valid="valid" />
              <nly-form-feedback :text="text" />
              <nly-form-input valid="invalid" />
              <nly-form-feedback state="invalid" :text="text" />
              <nly-form-input valid="warning" />
              <nly-form-feedback state="warning" :text="text" />
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      text: "text"
    };
  }
};
</script>
