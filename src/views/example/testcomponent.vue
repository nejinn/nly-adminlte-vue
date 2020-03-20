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
        <span role="status" class="spinner-border text-primary"
          ><span class="sr-only">Spinning</span></span
        >
      </nly-row>
      <nly-row>
        <nly-col>
          <NlyFormInput v-model="sss" :type="type" list="url_list" />
          <datalist id="url_list">
            <option label="W3Schools" value="http://www.w3schools.com" />
            <option label="Google" value="http://www.google.com" />
            <option label="Microsoft" value="http://www.microsoft.com" />
          </datalist>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <NlyFormInput v-model="sss" :type="type" valid="valid" />
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <NlyFormInput v-model="sss" :type="type" valid="invalid" />
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <NlyFormInput v-model="sss" :type="type" valid="warning" />
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <NlyFormInput v-model="sss" :type="type" plaintext />
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <NlyFormInput v-model="sss" :type="type" />
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
          {{ type }}
          {{ sss }}
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
//import { testComponent } from "../../nly-adminlte-vue/components/testcomponent/testcomponent";
export default {
  data() {
    return {
      sss: "",
      text: "1",
      number: 1,
      type: "text"
    };
  },
  // components: {
  //   testComponent
  // },
  methods: {
    s() {
      console.log(this.sss);
    }
  }
};
</script>
