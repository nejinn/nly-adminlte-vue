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
        <ul>
          <li style="display:flex">
            <nly-checkbox
              :indeterminate.sync="test1Indeterminate"
              v-model="test1"
              @change="test1Change"
            />
            <label
              class="m-0 font-weight-normal"
              @dblclick="test1DbClick"
              v-show="!test1Editor"
              >{{ test1Label }}</label
            >
            <div>
              <nly-input-group size="sm" v-show="test1Editor">
                <nly-form-input v-model="test1Label"></nly-form-input>
                <nly-input-group-append>
                  <nly-button @click="subTest1Eaditor">Button</nly-button>
                </nly-input-group-append>
              </nly-input-group>
            </div>
            <nly-button @click="subTest1Eaditor" v-show="test1Editor" size="sm"
              >提交</nly-button
            >
          </li>
          <li></li>
        </ul>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-tree-item
            show-check
            :id="1"
            label="测试"
            :value="true"
            editor
            @labelChange="change"
            @inputChange="inputChange"
            @valueChange="valueChange"
          />
          <nly-tree-item
            show-check
            :id="4"
            label="测试1"
            :value="true"
            db-editor
            delete
            delete-variant="info"
            @labelChange="change"
            @inputChange="inputChange"
            @valueChange="valueChange"
          />
          <nly-tree-item
            show-check
            :id="4"
            label="测试1"
            :value="true"
            editor
            asyn
            @asynAddChildren="asynChange()"
            @labelChange="change"
            @inputChange="inputChange"
            @valueChange="valueChange"
          />
          <nly-tree-item
            show-check
            :id="2"
            label-html="<del>sss</del>"
            :value="true"
          />
          <nly-tree-item show-check :id="3" :value="true" editor>
            <template v-slot:label>
              <h1>3333</h1>
            </template>
          </nly-tree-item>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      test1Indeterminate: false,
      test1: false,
      test1Editor: false,
      test1Label: "dddd"
    };
  },
  methods: {
    test1Change() {},
    test1DbClick() {
      console.log(1);
      this.test1Editor = !this.test1Editor;
    },
    subTest1Eaditor() {
      if (this.test1Editor) {
        this.test1Editor = !this.test1Editor;
      }
    },
    change(id, label, value) {
      console.log(id, label, value);
    },
    inputChange(id, label, value) {
      console.log(id, label, value);
    },
    valueChange(id, label, value) {
      console.log(id, label, value);
    },
    asynChange(id, label, value) {
      console.log(id, label, value);
      value = false;
      console.log(id, label, value);
    }
  },
  mounted() {
    this.$root.$on("nlya::tree::value::checked", (nlyaEvent, modalId) => {
      console.log("Modal is about to be shown", nlyaEvent, modalId);
    });
    this.$root.$on("nlya::tree::delete", (nlyaEvent, modalId) => {
      console.log("Modal is about to be shown", nlyaEvent, modalId);
    });
  }
};
</script>

<style lang="scss"></style>
