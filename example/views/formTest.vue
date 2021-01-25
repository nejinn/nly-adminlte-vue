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
        <nly-col xs="6"
          ><nly-tree :options="options" show-check visible appear
        /></nly-col>
        <nly-col>
          <ul class="ml-4">
            <nly-tree-item-tree
              label="tree 测试"
              target="www"
              id="wwwq"
              show-check
              :value="true"
              editor
              add
              visible
              indeterminate
              accordion="111"
            >
              <nly-tree-item-tree
                label="tree 测试"
                target="www1111"
                id="wwwq1111"
                show-check
                :value="true"
                editor
                add
                visible
                accordion="1121"
              >
                <nly-tree-item
                  show-check
                  :id="122"
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
                  :id="222"
                  label="测试"
                  :value="true"
                  db-editor
                  asyn
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
                delete
                @labelChange="change"
                @inputChange="inputChange"
                @valueChange="valueChange"
              />
              <nly-tree-item
                show-check
                :id="2"
                label="测试"
                :value="true"
                db-editor
                asyn
                @labelChange="change"
                @inputChange="inputChange"
                @valueChange="valueChange"
              />
              <nly-tree-item-tree
                label="tree 测试"
                target="www111"
                id="wwwq111"
                show-check
                :value="true"
                editor
                add
                visible
                accordion="112"
              >
                <nly-tree-item
                  show-check
                  :id="12"
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
                  :id="22"
                  label="测试"
                  :value="true"
                  db-editor
                  asyn
                  @labelChange="change"
                  @inputChange="inputChange"
                  @valueChange="valueChange"
                />
              </nly-tree-item-tree>
            </nly-tree-item-tree>
            <nly-tree-item-tree
              label="tree 测试1"
              target="www1"
              id="wwwq1"
              show-check
              value="true"
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
          </ul>
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
      test1Label: "dddd",
      options: [
        {
          id: 1002,
          label: "测试2",
          indeterminate: false,
          children: [
            {
              id: 1005,
              label: "测试5"
            },
            {
              id: 1006,
              label: "测试6"
            },
            {
              id: 1007,
              label: "测试7",
              children: [
                {
                  id: 1008,
                  label: "测试8"
                },
                {
                  id: 1009,
                  label: "测试9"
                },
                {
                  id: 10010,
                  label: "测试10"
                }
              ]
            }
          ]
        },
        {
          id: 1003,
          label: "测试3",
          indeterminate: true,
          children: [
            {
              id: 1004,
              label: "测试4"
            }
          ]
        },
        {
          id: 1000,
          label: "测试0"
        },
        {
          id: 1001,
          label: "测试1"
        }
      ]
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
