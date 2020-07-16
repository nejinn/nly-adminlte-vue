<template>
  <nly-wrapper-content>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-tab</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <div style="height:300px" />
      <nly-row>
        <nly-col>
          <div class="form-group">
            <label>Multiple (.select2-purple)</label>
            <nly-search-select-item :options="options" variant="info" />

            <NlySearchSelectSingleContainer
              onwer="demo"
              @click="openSingle"
              :open="open"
            />
          </div>
        </nly-col>
      </nly-row>
      <nly-row class="mt-3">
        <nly-col>
          <div class="form-group">
            <label>Multiple (.select2-purple)</label>
            <div class="select2-purple" data-select2-id="29">
              <nly-search-select-item :options="options" variant="info" />
              <NlySearchSelectMultipleContainer
                onwer="demo1"
                ref="newConBox"
                :value="['您']"
              />
            </div>
          </div>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-wrapper-content>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
        {
          label: "Grouped options",
          options: [
            { value: { C: "3PO" }, text: "Option with object value" },
            { value: { R: "2D2" }, text: "Another option with object value" }
          ]
        }
      ],
      options1: ["我是", "你爹", "我是", "你爷爷"],
      open: false
    };
  },
  methods: {
    openSingle() {
      console.log(111);
      this.open = this.open ? false : true;
    },
    zzz() {
      console.log("zzz");
    },
    getElementToPageTop(el) {
      if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop;
      }
      return el.offsetTop;
    }
  },
  mounted() {
    const z = this.$refs.newConBox.getBoundingClientRect().top;
    console.log(z);
    // const zzz = this.getElementToPageTop(z);
    // console.log(zzz);
  }
};
</script>
