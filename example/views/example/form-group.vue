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
        <nly-col>
          <nly-form-group
            valid="invalid"
            label="eweww"
            validated
            disabled
            label-class="eee"
          >
            <nly-form-input />
          </nly-form-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-form-group
            valid="invalid"
            label="eweww"
            validated
            label-class="eee"
          >
            <nly-form-input />
          </nly-form-group>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-form-group
            valid="invalid"
            label="eweww"
            validated
            disabled
            label-align-xs="right"
            label-align-sm="center"
            label-align-md="right"
            label-align-lg="center"
            label-align-xl="right"
          >
            <nly-form-input />
          </nly-form-group>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-form-group
            valid="invalid"
            label="eweww"
            validated
            disabled
            label-align-xs="right"
            label-align-sm="center"
            label-align-md="right"
            label-align-lg="center"
            label-align-xl="right"
            label-cols-sm="3"
          >
            <nly-form-input xs="3" />
          </nly-form-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-form-group
            valid="invalid"
            label="eweww"
            validated
            disabled
            label-align-xs="right"
            label-align-sm="center"
            label-align-md="right"
            label-align-lg="center"
            label-align-xl="right"
            label-cols-sm="3"
            label-size="sm"
          >
            <nly-form-input xs="3" />
          </nly-form-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-form-group
            valid="invalid"
            label="eweww"
            validated
            disabled
            label-align-xs="right"
            label-align-sm="center"
            label-align-md="right"
            label-align-lg="center"
            label-align-xl="right"
            label-cols-sm="3"
            label-size="lg"
            label-for="wwww"
          >
            <nly-form-input xs="3" id="www" />
          </nly-form-group>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-form-group
            valid="invalid"
            validated
            disabled
            label-align-xs="right"
            label-align-sm="center"
            label-align-md="right"
            label-align-lg="center"
            label-align-xl="right"
            label-cols-sm="3"
            label-size="lg"
            label-for="wwww"
          >
            <nly-form-input xs="3" id="www" />
          </nly-form-group>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <nly-form-group
            id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :warning-feedback="warningFeedback"
            :valid="state"
          >
            <nly-form-input
              id="input-1"
              v-model="name"
              :valid="state"
              trim
            ></nly-form-input>
          </nly-form-group>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  computed: {
    state() {
      return this.name.length >= 8
        ? "valid"
        : this.name.length < 4
        ? "invalid"
        : "warning";
    },
    invalidFeedback() {
      if (this.name.length > 4) {
        return "";
      } else if (this.name.length > 0) {
        return "Enter at least 4 characters";
      } else {
        return "Please enter something";
      }
    },
    validFeedback() {
      return this.state === "valid" ? "Thank you" : "";
    },
    warningFeedback() {
      return this.state === "warning" ? "还是差一点点" : "";
    }
  },
  data() {
    return {
      name: ""
    };
  }
};
</script>
