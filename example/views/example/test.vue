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
          <nly-search-select variant="pink" multiple :options="options2" />
        </nly-col>
      </nly-row>

      <nly-row class="mt-3">
        <nly-col>
          <nly-search-select variant="pink" :options="options2" />
        </nly-col>
      </nly-row>

      <nly-row class="mt-3">
        <nly-col>
          <nly-search-select variant="pink" :options="options2" disabled />
        </nly-col>
      </nly-row>

      <span class="select2-results"
        ><ul
          class="select2-results__options"
          role="listbox"
          id="select2-g4bk-results"
          aria-expanded="true"
          aria-hidden="false"
        >
          <li
            class="select2-results__option select2-results__option--group"
            role="group"
            aria-label="Alaskan/Hawaiian Time Zone"
            data-select2-id="select2-data-125-ou7a"
          >
            <strong class="select2-results__group"
              >Alaskan/Hawaiian Time Zone</strong
            >
            <ul
              class="select2-results__options select2-results__options--nested"
            >
              <li
                class="select2-results__option select2-results__option--selectable select2-results__option--selected"
                id="select2-g4bk-result-hvx3-AK"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-hvx3-AK"
                aria-selected="false"
              >
                Alaska
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-mgwt-HI"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-mgwt-HI"
                aria-selected="false"
              >
                Hawaii
              </li>
            </ul>
          </li>
          <li
            class="select2-results__option select2-results__option--group"
            role="group"
            aria-label="Pacific Time Zone"
            data-select2-id="select2-data-126-ytne"
          >
            <strong class="select2-results__group">Pacific Time Zone</strong>
            <ul
              class="select2-results__options select2-results__options--nested"
            >
              <li
                class="select2-results__option select2-results__option--selectable select2-results__option--highlighted"
                id="select2-g4bk-result-npu8-CA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-npu8-CA"
                aria-selected="true"
              >
                California
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-sj2k-NV"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-sj2k-NV"
                aria-selected="false"
              >
                Nevada
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-mvco-OR"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-mvco-OR"
                aria-selected="false"
              >
                Oregon
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-ghok-WA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-ghok-WA"
                aria-selected="false"
              >
                Washington
              </li>
            </ul>
          </li>
          <li
            class="select2-results__option select2-results__option--group"
            role="group"
            aria-label="Mountain Time Zone"
            data-select2-id="select2-data-127-56il"
          >
            <strong class="select2-results__group">Mountain Time Zone</strong>
            <ul
              class="select2-results__options select2-results__options--nested"
            >
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-sv4m-AZ"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-sv4m-AZ"
                aria-selected="false"
              >
                Arizona
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-x2cr-CO"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-x2cr-CO"
                aria-selected="false"
              >
                Colorado
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-b9rw-ID"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-b9rw-ID"
                aria-selected="false"
              >
                Idaho
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-meg5-MT"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-meg5-MT"
                aria-selected="false"
              >
                Montana
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-ewep-NE"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-ewep-NE"
                aria-selected="false"
              >
                Nebraska
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-ydzq-NM"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-ydzq-NM"
                aria-selected="false"
              >
                New Mexico
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-786k-ND"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-786k-ND"
                aria-selected="false"
              >
                North Dakota
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-onsj-UT"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-onsj-UT"
                aria-selected="false"
              >
                Utah
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-zljf-WY"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-zljf-WY"
                aria-selected="false"
              >
                Wyoming
              </li>
            </ul>
          </li>
          <li
            class="select2-results__option select2-results__option--group"
            role="group"
            aria-label="Central Time Zone"
            data-select2-id="select2-data-128-syeo"
          >
            <strong class="select2-results__group">Central Time Zone</strong>
            <ul
              class="select2-results__options select2-results__options--nested"
            >
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-4axz-AL"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-4axz-AL"
                aria-selected="false"
              >
                Alabama
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-l78y-AR"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-l78y-AR"
                aria-selected="false"
              >
                Arkansas
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-ttwi-IL"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-ttwi-IL"
                aria-selected="false"
              >
                Illinois
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-szoy-IA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-szoy-IA"
                aria-selected="false"
              >
                Iowa
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-pcqt-KS"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-pcqt-KS"
                aria-selected="false"
              >
                Kansas
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-gvj4-KY"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-gvj4-KY"
                aria-selected="false"
              >
                Kentucky
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-gx2p-LA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-gx2p-LA"
                aria-selected="false"
              >
                Louisiana
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-v7m6-MN"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-v7m6-MN"
                aria-selected="false"
              >
                Minnesota
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-tybs-MS"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-tybs-MS"
                aria-selected="false"
              >
                Mississippi
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-1hol-MO"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-1hol-MO"
                aria-selected="false"
              >
                Missouri
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-jmvh-OK"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-jmvh-OK"
                aria-selected="false"
              >
                Oklahoma
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-qpiu-SD"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-qpiu-SD"
                aria-selected="false"
              >
                South Dakota
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-a03r-TX"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-a03r-TX"
                aria-selected="false"
              >
                Texas
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-wqqa-TN"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-wqqa-TN"
                aria-selected="false"
              >
                Tennessee
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-xruw-WI"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-xruw-WI"
                aria-selected="false"
              >
                Wisconsin
              </li>
            </ul>
          </li>
          <li
            class="select2-results__option select2-results__option--group"
            role="group"
            aria-label="Eastern Time Zone"
            data-select2-id="select2-data-129-bh91"
          >
            <strong class="select2-results__group">Eastern Time Zone</strong>
            <ul
              class="select2-results__options select2-results__options--nested"
            >
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-jbie-CT"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-jbie-CT"
                aria-selected="false"
              >
                Connecticut
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-vbvd-DE"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-vbvd-DE"
                aria-selected="false"
              >
                Delaware
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-1flw-FL"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-1flw-FL"
                aria-selected="false"
              >
                Florida
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-wdck-GA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-wdck-GA"
                aria-selected="false"
              >
                Georgia
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-rnw0-IN"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-rnw0-IN"
                aria-selected="false"
              >
                Indiana
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-aw6j-ME"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-aw6j-ME"
                aria-selected="false"
              >
                Maine
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-v3cb-MD"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-v3cb-MD"
                aria-selected="false"
              >
                Maryland
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-i9u7-MA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-i9u7-MA"
                aria-selected="false"
              >
                Massachusetts
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-uz74-MI"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-uz74-MI"
                aria-selected="false"
              >
                Michigan
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-jq1p-NH"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-jq1p-NH"
                aria-selected="false"
              >
                New Hampshire
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-kg5e-NJ"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-kg5e-NJ"
                aria-selected="false"
              >
                New Jersey
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-fcj8-NY"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-fcj8-NY"
                aria-selected="false"
              >
                New York
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-0o93-NC"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-0o93-NC"
                aria-selected="false"
              >
                North Carolina
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-pxh8-OH"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-pxh8-OH"
                aria-selected="false"
              >
                Ohio
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-tmda-PA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-tmda-PA"
                aria-selected="false"
              >
                Pennsylvania
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-sheg-RI"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-sheg-RI"
                aria-selected="false"
              >
                Rhode Island
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-v7e3-SC"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-v7e3-SC"
                aria-selected="false"
              >
                South Carolina
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-ae6z-VT"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-ae6z-VT"
                aria-selected="false"
              >
                Vermont
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-b4am-VA"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-b4am-VA"
                aria-selected="false"
              >
                Virginia
              </li>
              <li
                class="select2-results__option select2-results__option--selectable"
                id="select2-g4bk-result-lpjq-WV"
                role="option"
                data-select2-id="select2-data-select2-g4bk-result-lpjq-WV"
                aria-selected="false"
              >
                West Virginia
              </li>
            </ul>
          </li>
        </ul></span
      >
    </nly-content>
  </nly-wrapper-content>
</template>

<script>
export default {
  data() {
    return {
      value: ["我是", "你爹", "我是", "你爷爷"],
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
      options2: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: "c", text: "This is First option ccc" },
        { value: "d", text: "Selected Option ddd" },
        {
          label: "Grouped options",
          options: [
            { value: { C: "3PO" }, text: "Option with object value" },
            { value: { R: "2D2" }, text: "Another option with object value" }
          ]
        }
      ],
      open: false,
      inputValue: null,
      addValue: undefined
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
      this.options1.push(this.addValue);
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
