<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-link</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>无</p>
              <nly-link>
                nly-link
              </nly-link>
            </div>
          </div>
          \
        </nly-col>

        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>@click</p>
              <nly-link @click="show">
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>

        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>@click to="collapse"</p>
              <nly-link @click="show1" to="collapse">
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>

        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>active</p>
              <nly-link active active-class="xxx">
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>disabled</p>
              <nly-link disabled>
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>

        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>active disabled</p>
              <nly-link active disabled>
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>

        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>to="collapse"</p>
              <nly-link to="collapse">
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>

        <nly-col col-xs="3">
          <div class="demo">
            <div class="title">
              <p>to="collapse" append</p>
              <nly-link to="collapse" append>
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col col-xs="4">
          <div class="demo">
            <div class="title">
              <p>href="collapse"</p>
              <nly-link href="collapse">
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>

        <nly-col col-xs="4">
          <div class="demo">
            <div class="title">
              <p>href="collapse" target="_blank"</p>
              <nly-link href="collapse" target="_blank">
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>

        <nly-col col-xs="4">
          <div class="demo">
            <div class="title">
              <p>href="collapse" target="_blank"</p>
              <nly-link class="nav-link dropdown-toggle">
                nly-link
              </nly-link>
            </div>
          </div>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 1rem 0 1rem 0;
  background-color: rgba(86, 61, 124, 0.15);
  p {
    background-color: antiquewhite;
  }
}

.active {
  color: #000;
}

.disabled {
  color: rgba(0, 0, 0, 0.3);
  pointer-events: none;
  cursor: default;
}
</style>

<script>
export default {
  methods: {
    show() {
      alert("click");
    },
    show1() {
      alert("click1");
    }
  }
};
</script>
