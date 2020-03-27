<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-log</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-log>
            <nly-log-header title="job log">
              <nly-log-tools>
                <nly-button variant="outlineInfo" size="sm">
                  刷新
                </nly-button>
              </nly-log-tools>
            </nly-log-header>
            <nly-log-body>
              <nly-log-line
                v-for="(item, index) in items"
                :key="index"
                :line="index"
                :duration="item.duration"
                :text="item.text"
                :title="item.title"
              />
            </nly-log-body>
          </nly-log>
        </nly-col>
      </nly-row>
      <nly-button @click="test" variant="info" />
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          duration: "20s",
          title: "info",
          text:
            "$ git clone --depth=50 --branch=[secure] https://github.com/[secure]/nly-adminlte-vue.git [secure]/nly-adminlte-vue"
        }
      ]
    };
  },
  methods: {
    test() {
      this.items.push({
        duration: "20s",
        title: "info",
        text:
          "$ git clone --depth=50 --branch=[secure] https://github.com/[secure]/nly-adminlte-vue.git [secure]/nly-adminlte-vue"
      });
    }
  }
};
</script>
