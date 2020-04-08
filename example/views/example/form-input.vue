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
              form-input
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
              <nly-form-feedback> 我是valid</nly-form-feedback>
              <nly-form-input valid="invalid" />
              <nly-form-feedback state="invalid">
                我是invalid</nly-form-feedback
              >
              <nly-form-input valid="warning" />
              <nly-form-feedback state="warning">
                我是warning</nly-form-feedback
              >
            </nly-card-body>
          </nly-card>
        </nly-col>

        <nly-col xs="6">
          <nly-card header-variant="info">
            <nly-card-header>
              form
            </nly-card-header>
            <nly-card-body>
              variant
              <nly-form-input type="range" variant="danger" />
              <nly-form-input
                type="range"
                :variant="variant"
                v-model="variantNum"
              />
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
      <nly-row>
        <nly-col>
          <nly-card variant="info">
            <nly-card-header>
              col offset order
            </nly-card-header>
            <nly-card-body>
              <nly-card-text>
                col 每个input等宽或者填充满剩下的宽度
              </nly-card-text>
              col
              <nly-row>
                <nly-form-input xs="5" placeholder="xs='5'" />
                <nly-form-input xs="2" placeholder="xs='2'" />
                <nly-form-input col placeholder="col" />
              </nly-row>
              <nly-row>
                <nly-form-input :type="colType" col />
                <nly-form-input :type="colType" col />
                <nly-form-input :type="colType" col />
              </nly-row>
              <select class="form-control" v-model="colType">
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
              xs sm md lg lx
              <nly-row>
                <nly-form-input
                  xs="5"
                  sm="4"
                  md="3"
                  placeholder="xs='5' sm='4' md='3'"
                />
                <nly-form-input
                  xs="4"
                  sm="3"
                  md="5"
                  placeholder="xs='4' sm='3' md='5' "
                />
                <nly-form-input
                  xs="3"
                  sm="5"
                  md="4"
                  placeholder="xs='3' sm='5' md='4'"
                />
              </nly-row>
              order-xs order-sm order-md order-lg order-lx
              <nly-row>
                <nly-form-input
                  order-xs="5"
                  order-sm="4"
                  order-md="3"
                  col
                  placeholder="order-xs='5' order-sm='4' order-md='3'"
                />
                <nly-form-input
                  col
                  order-xs="4"
                  order-sm="3"
                  order-md="5"
                  placeholder="order-xs='4' order-sm='3' order-md='5' "
                />
                <nly-form-input
                  col
                  order-xs="3"
                  order-sm="5"
                  order-md="4"
                  placeholder="order-xs='3' order-sm='5' order-md='4'"
                />
              </nly-row>
              offset-xs offset-sm offset-md offset-lg offset-lx
              <nly-row>
                <nly-form-input
                  offset-xs="5"
                  offset-sm="4"
                  offset-md="3"
                  col
                  placeholder="offset-xs='5' offset-sm='4' offset-md='3'"
                />
              </nly-row>
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
      lazyformatterValue: "",
      colType: "text",
      variantNum: 10
    };
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
    }
  },
  computed: {
    variant() {
      return this.variantNum >= 0 && this.variantNum < 10
        ? "secondary"
        : this.variantNum >= 10 && this.variantNum < 20
        ? "success"
        : this.variantNum >= 10 && this.variantNum < 20
        ? "info"
        : this.variantNum >= 20 && this.variantNum < 30
        ? "warning"
        : this.variantNum >= 30 && this.variantNum < 40
        ? "danger"
        : this.variantNum >= 40 && this.variantNum < 50
        ? "dark"
        : this.variantNum >= 50 && this.variantNum < 60
        ? "lightblue"
        : this.variantNum >= 60 && this.variantNum < 70
        ? "navy"
        : this.variantNum >= 70 && this.variantNum < 80
        ? "olive"
        : this.variantNum >= 80 && this.variantNum < 90
        ? "fuchsia"
        : this.variantNum >= 90 && this.variantNum < 100
        ? "maroon"
        : "indigo";
    }
  }
};
</script>
