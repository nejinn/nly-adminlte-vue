<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-popover</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <div class="text-center my-3">
            <nly-button
              v-nly-popover.hover.top="'指令popover!'"
              title="Popover 标题"
            >
              悬浮一下鼠标
            </nly-button>

            <nly-button id="popover-target-1">
              悬浮一下鼠标
            </nly-button>
            <nly-popover
              target="popover-target-1"
              triggers="hover"
              placement="top"
            >
              <template v-slot:title>Popover 标题</template>
              popover <b>component</b> 主体内容!
            </nly-popover>
          </div>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col>
          <div class="d-flex flex-column text-md-center">
            <div class="p-2">
              <nly-button id="popover-manual-1" variant="primary" ref="button"
                >Unreliable</nly-button
              >

              <nly-popover
                target="popover-manual-1"
                :show.sync="pop1"
                triggers="click"
              >
                I can be stubborn sometimes.
              </nly-popover>
            </div>

            <div class="p-2">
              <nly-button
                id="popover-manual-2"
                variant="primary"
                ref="button"
                @click="pop2 = !pop2"
              >
                Comfortably Numb
              </nly-button>

              <nly-popover
                target="popover-manual-2"
                :show.sync="pop2"
                triggers=""
              >
                I do believe it's working, good.
              </nly-popover>
            </div>

            <div class="p-2">
              <nly-button class="px-1" @click="popOpen">Open</nly-button>
              <nly-button class="px-1" @click="popClose">Close</nly-button>
              <nly-button class="px-1" @click="popToggle">Toggle</nly-button>
              <nly-button class="px-1" @click="popRoot">Toggle</nly-button>
            </div>
          </div>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      pop1: false,
      pop2: false
    };
  },
  methods: {
    popOpen() {
      this.pop1 = this.pop2 = true;
    },
    popClose() {
      this.pop1 = this.pop2 = false;
    },
    popToggle() {
      this.pop1 = !this.pop1;
      this.pop2 = !this.pop2;
    },
    popRoot() {
      this.$root.$emit("nlya::hide::popover");
    }
  }
};
</script>
