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
          ><nly-tree
            :options="options"
            show-check
            visible
            appear
            show-delete
            add
            asyn
            accordion
            v-model="value"
            @addNode="addNode"
            @asynAddNode="asynAddNode"
            ref="test_tree"
        /></nly-col>
        <nly-col>
          <nly-button @click="addAncestorsNode">11</nly-button>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      value: [10013, 10015, 1009],
      test1Indeterminate: false,
      test1: false,
      test1Editor: false,
      test1Label: "dddd",
      options: [
        {
          id: 1002,
          label: "测试2",
          // indeterminate: false,
          editor: true,
          showDelete: true,
          children: [
            {
              id: 1007,
              label: "测试55555"
            },
            {
              id: 1005,
              label: "测试6",
              value: true,
              editor: true
            },
            {
              id: 1006,
              label: "测试7",
              children: [
                {
                  id: 1008,
                  label: "测试8"
                },
                {
                  id: 1009,
                  label: "测试9",
                  dbEditor: true
                },
                {
                  id: 10010,
                  label: "测试10",
                  children: [
                    {
                      id: 100011,
                      label: "测试11"
                    }
                  ]
                }
              ]
            },
            {
              id: 10012,
              label: "测试12",
              value: true,
              children: [
                {
                  id: 10013,
                  label: "测试13"
                },
                {
                  id: 10015,
                  label: "测试15"
                },
                {
                  id: 10016,
                  label: "测试16",
                  children: [
                    {
                      id: 100017,
                      label: "测试17"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1003,
          label: "测试3",
          children: [
            {
              id: 1004,
              label: "测试4",
              value: true
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
    // eslint-disable-next-line no-unused-vars
    addNode(evtId) {
      const val = [{ id: Math.random() * 50, label: "asyn" }];
      this.$refs["test_tree"].addNode(evtId, val);
    },
    async addAncestorsNode() {
      let pro = await new Promise(resolve => {
        setTimeout(resolve, 2000, [{ id: Math.random() * 50, label: "asyn" }]);
      });
      this.$refs["test_tree"].addAncestorsNode(pro);
    },
    async asynAddNode(evtId) {
      let pro = await new Promise(resolve => {
        setTimeout(resolve, 2000, [{ id: Math.random() * 50, label: "asyn" }]);
      });
      this.$refs["test_tree"].asynAddNode(evtId, pro);
    }
  },
  mounted() {
    this.$root.$on("nlya::tree::value::change", (nlyaEvent, modalId) => {
      console.log("Modal is about to be shown", nlyaEvent, modalId);
    });
    this.$root.$on("nlya::tree::delete", (nlyaEvent, modalId) => {
      console.log("Modal is about to be shown", nlyaEvent, modalId);
    });
  }
};
</script>

<style lang="scss"></style>
