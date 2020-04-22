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
              <nly-form-feedback state="valid"> 我是valid</nly-form-feedback>
              <nly-form-input valid="invalid" />
              <nly-form-feedback state="invalid">
                我是invalid</nly-form-feedback
              >
              <nly-form-input valid="warning" />
              <nly-form-feedback state="warning">
                我是warning
              </nly-form-feedback>
              <p>input</p>
              <div>
                <nly-form-input :valid="inputValid" v-model="inputValidModel" />
                <nly-form-feedback state="valid">我是valid</nly-form-feedback>
                <nly-form-feedback state="invalid"
                  >我是invalid</nly-form-feedback
                >
              </div>

              <p>input</p>
              <div>
                <nly-form-input type="email" />
                <nly-form-feedback state="valid">我是valid</nly-form-feedback>
                <nly-form-feedback state="invalid"
                  >我是invalid</nly-form-feedback
                >
              </div>
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
      text: "text",
      inputValidModel: ""
    };
  },
  computed: {
    inputValid() {
      return this.inputValidModel.length < 10 &&
        this.inputValidModel.length >= 5
        ? "valid"
        : "invalid";
    }
  }
};
</script>
