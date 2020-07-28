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

      <nly-row class="mt-3">
        <nly-col>
          <nly-search-select
            variant="pink"
            :options="options2"
            multiple
            v-model="ddd"
          />
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-button @click="addTag">add</nly-button>
        </nly-col>
      </nly-row>

      <nly-row class="mt-3">
        <nly-col>
          <portal to="destination">
            <p>
              This slot content will be rendered wherever the 'portal-target'
              with name 'destination' is located.
            </p>
          </portal>

          <portal-target name="destination">
            <!--
  This component can be located anywhere in your App.
  The slot content of the above portal component will be rendered here.
  -->
          </portal-target>
        </nly-col>
      </nly-row>

      <!-- <nly-row class="mt-3">
        <nly-col>
          <nly-search-select
            variant="pink"
            :options="options2"
            disabled
            v-model="ddd"
          />
        </nly-col>
      </nly-row> -->
    </nly-content>
  </nly-wrapper-content>
</template>

<script>
export default {
  data() {
    return {
      value: ["我是", "你爹", "我是", "你爷爷"],
      // options: [
      //   { value: null, text: "Please select an option" },
      //   { value: "a", text: "This is First option" },
      //   { value: "b", text: "Selected Option", disabled: true },
      //   { value: { C: "3PO" }, text: "Please select an option" },
      //   { value: "a", text: "This is First option" },
      //   { value: "b", text: "Selected Option", disabled: true },
      //   {
      //     label: "Grouped options",
      //     options: [
      //       { value: { C: "4PO" }, text: "Option with object value" },
      //       { value: { R: "2D2" }, text: "Another option with object value" }
      //     ]
      //   }
      // ],
      options1: ["我是", "你爹", "我是", "你爷爷"],
      options2: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
        { value: "c", text: "This is First option ccc" },
        { value: { C: "3PO" }, text: "Selected Option ddd" },
        {
          label: "Grouped options",
          options: [
            { value: { C: "4PO" }, text: "Option with object value" },
            { value: { R: "2D2" }, text: "Another option with object value" },
            { value: "e", text: "eeeeeeeeeeeeeeeeeeeeeeeeeee" }
          ]
        }
      ],
      open: false,
      inputValue: null,
      addValue: undefined,
      ddd: null
    };
  },
  watch: {
    value: {
      handler(newValue, oldValue) {
        console.log(111, newValue, oldValue);
      },
      deep: true
    }
  },
  methods: {
    addTag() {
      this.ddd.push("vvv");
    },
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
    },
    inputFunction(evt) {
      this.inputValue = evt;
    }
  },
  mounted() {
    // const z = this.$refs.newConBox.getBoundingClientRect().top;
    // console.log(z);
    // const zzz = this.getElementToPageTop(z);
    // console.log(zzz);
  }
};
</script>
