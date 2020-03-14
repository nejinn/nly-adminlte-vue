<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-card</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" md="6">
          <nly-card loading loading-content="加载中" loading-content-tag="a">
            <nly-card-header> header</nly-card-header>
            <nly-card-body>body </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="6">
          <nly-card loading>
            <nly-card-header tag="header"> tag="header" header</nly-card-header>
            <nly-card-body>body</nly-card-body>
            <nly-card-footer tag="footer"> tag="footer" footer</nly-card-footer>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="3">
          <nly-card header-variant="info" loading dark>
            <nly-card-header> header-variant="info"</nly-card-header>
            <nly-card-body>body </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card header-variant="info" header-outline>
            <nly-card-header>
              header-variant="info" header-outline</nly-card-header
            >
            <nly-card-body>body </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card text-variant="pink">
            <nly-card-header> text-variant="pink"</nly-card-header>
            <nly-card-body>body </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card card-tabs card-outline-tabs header-variant="info">
            <nly-card-header> <a> card-outline-tabs</a> </nly-card-header>
            <nly-card-body>主要用于nav，详情情况nav </nly-card-body>
            <nly-card-footer>card-tabs</nly-card-footer>
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="3">
          <nly-card bg-variant="info">
            <nly-card-header> heade</nly-card-header>
            <nly-card-body>bg-variant="info" </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card bg-gradient-variant="info">
            <nly-card-header> bg-gradient-variant </nly-card-header>
            <nly-card-body>body </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card bg-variant="info">
            <nly-card-header bg-variant="danger">
              bg-variant="danger"</nly-card-header
            >
            <nly-card-body> card bg-variant="info" </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card>
            <nly-card-header bg-gradient-variant="warning">
              bg-gradient-variant="warning"
            </nly-card-header>
            <nly-card-body bg-variant="pink">bg-variant="pink"</nly-card-body>
            <nly-card-footer bg-variant="teal"
              >bg-variant="teal"</nly-card-footer
            >
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="3">
          <nly-card header-variant="info">
            <nly-card-header>
              header
            </nly-card-header>
            <nly-card-body>
              <nly-card-title>
                card-title
              </nly-card-title>
              <Nly-card-subtitle>
                ssss
              </Nly-card-subtitle>
            </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card bg-gradient-variant="info">
            <nly-card-header> bg-gradient-variant </nly-card-header>
            <nly-card-body>body </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card bg-variant="info">
            <nly-card-header bg-variant="danger">
              bg-variant="danger"</nly-card-header
            >
            <nly-card-body> card bg-variant="info" </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="12" md="3">
          <nly-card>
            <nly-card-header bg-gradient-variant="warning">
              bg-gradient-variant="warning"
            </nly-card-header>
            <nly-card-body bg-variant="pink">bg-variant="pink"</nly-card-body>
            <nly-card-footer bg-variant="teal"
              >bg-variant="teal"</nly-card-footer
            >
          </nly-card>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="3">
          <nly-card header-variant="info" id="cardmaximzed">
            <nly-card-header>
              maximized-card
              <nly-card-tool>
                <nly-button
                  tool
                  v-nly-card-maximized.cardmaximzed="{
                    afterIcon: 'fas fa-compress',
                    beforeIcon: 'fas fa-expand',
                    order: 1
                  }"
                >
                  <nly-icon icon="fas fa-expand" />
                </nly-button>
              </nly-card-tool>
            </nly-card-header>
            <nly-card-body>
              <nly-card-title>
                card-title
              </nly-card-title>
              <Nly-card-subtitle>
                ssss
              </Nly-card-subtitle>

              <nly-button gradient="purple" @click.native="popToast()"
                >显示Toast</nly-button
              >
              <nly-button @click.native="popToast(true)" gradient="olive"
                >显示 Toast (appended)</nly-button
              >
            </nly-card-body>
            <nly-card-footer>footer</nly-card-footer>
          </nly-card>
        </nly-col>

        <nly-col xs="3">
          <nly-card header-variant="info" ref="cardcollpase">
            <nly-card-header>
              maximized-card
              <nly-card-tool>
                <nly-button tool v-nly-card-collapse.cardcollpase>
                  <nly-icon icon="fas fa-minus" />
                </nly-button>
              </nly-card-tool>
            </nly-card-header>
            <nly-card-body id="goodjob">
              <nly-card-title>
                card-title
              </nly-card-title>
              <Nly-card-subtitle>
                ssss
              </Nly-card-subtitle>
            </nly-card-body>
          </nly-card>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
import logo from "../../assets/nly-adminlte-vue/img/NLYLOGO.png";
export default {
  data() {
    return {
      logo,
      num: 0
    };
  },
  methods: {
    popToast(append = false) {
      this.num++;
      this.$nlyaToast.toast(`This is toast number ${this.num}`, {
        title: "NlyadminlteVue Toast",
        // autoHideDelay: 3000,
        noAutoHide: true,
        appendToast: append
      });
    }
  }
};
</script>
