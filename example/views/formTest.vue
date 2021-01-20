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
          <nly-tree-item-tree
            tree-label="tree 测试"
            target="www"
            tree-id="wwwq"
            tree-show-check
            :tree-value="true"
            tree-editor
            tree-add
            visible
          >
            <nly-tree-item
              show-check
              :id="1"
              label="测试"
              :value="true"
              editor
              delete
              @labelChange="change"
              @inputChange="inputChange"
              @valueChange="valueChange"
            />
            <nly-tree-item
              show-check
              :id="1"
              label="测试"
              :value="true"
              db-editor
              asyn
              @labelChange="change"
              @inputChange="inputChange"
              @valueChange="valueChange"
            />
          </nly-tree-item-tree>
          <nly-tree-item-tree
            tree-label="tree 测试1"
            target="www1"
            tree-id="wwwq1"
            tree-show-check
            :tree-value="true"
          >
            <nly-tree-item
              show-check
              id="wwwq11"
              label="测试"
              :value="true"
              editor
              @labelChange="change"
              @inputChange="inputChange"
              @valueChange="valueChange"
            />
          </nly-tree-item-tree>
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
            :id="5"
            label="测试1"
            :value="true"
            editor
            asyn
            ref="111"
            loading-variant="pink"
            @asynChange="asynChange"
            @labelChange="change"
            @inputChange="inputChange"
            @valueChange="valueChange"
          />
          <nly-tree-item
            show-check
            :id="2"
            :value="true"
            add
            label="eeee"
            @addChange="addChange"
            ref="222"
          />
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
    async asynChange() {
      let pro = await new Promise(resolve => {
        setTimeout(resolve, 2000, [{ id: 6, label: "asyn" }]);
      });
      this.$refs["111"].asynAddNode(pro);
    },
    addChange() {
      const val = [{ id: 6, label: "asyn" }];
      this.$refs["222"].asynAddNode(val);
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
