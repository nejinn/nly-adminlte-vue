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
        <nly-col xs="6">
          <nly-card header-variant="info">
            <nly-card-header>
              form
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                default form-input >>{{ defaultInput }}
              </nly-card-text>
              <nly-form-input v-model="defaultInput" placeholder="default" />
              <nly-card-text>
                form-input with list
              </nly-card-text>
              <nly-form-input type="text" list="url_list" />
              <datalist id="url_list">
                <option label="W3Schools" value="http://www.w3schools.com" />
                <option label="Google" value="http://www.google.com" />
                <option label="Microsoft" value="http://www.microsoft.com" />
              </datalist>
              <nly-card-text>
                form-input with valid
              </nly-card-text>
              <div class="form-group">
                <label>valid</label>
                <select class="custom-select" v-model="validData">
                  <option>novalid</option>
                  <option>valid</option>
                  <option>invalid</option>
                  <option>warning</option>
                </select>
              </div>
              <nly-form-input id="111" :valid="validData" />
              <nly-card-text>
                valid with feedback
              </nly-card-text>
              <nly-form-input valid="valid" />
              <span class="valid-feedback">invalid-feedback</span>
              <nly-form-input valid="invalid" />
              <span class="invalid-feedback">invalid-feedback</span>
              <nly-form-input id="tooltip-target-1" valid="warning" />
              <span class="warning-feedback">invalid-feedback</span>
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="6">
          <nly-card header-variant="info">
            <nly-card-header>
              form
            </nly-card-header>
            <nly-card-body>
              placeholder
              <nly-form-input placeholder="default" />
              size sm lg
              <nly-form-input size="sm" placeholder="sm" />
              <nly-form-input />
              <nly-form-input size="lg" placeholder="lg" />

              plaintext
              <nly-form-input plaintext placeholder="plaintext" />

              disabled
              <nly-form-input placeholder="default" disabled />

              readonly
              <nly-form-input placeholder="default" readonly />

              formatter >>>{{ formatterValue }}
              <nly-form-input
                placeholder="default"
                :formatter="formatter"
                v-model="formatterValue"
              />

              lazy-formatter >>>{{ lazyformatterValue }}
              <nly-form-input
                placeholder="default"
                lazy-formatter
                :formatter="formatter"
                v-model="lazyformatterValue"
              />

              type >> {{ type }}---{{ value }}
              <nly-form-input v-model="value" :type="type" />
              <select class="form-control" v-model="type">
                <option>text</option>
                <option>password</option>
                <option>email</option>
                <option>number</option>
                <option>url</option>
                <option>tel</option>
                <option>search</option>
                <option>range</option>
                <option>color</option>
                <option>date</option>
                <option>time</option>
                <option>datetime</option>
                <option>datetime-local</option>
                <option>month</option>
                <option>week</option>
              </select>
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
      defaultInput: "",
      validData: "novalid",
      value: "",
      type: "text",
      formatterValue: "",
      lazyformatterValue: ""
    };
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    }
  }
};
</script>
