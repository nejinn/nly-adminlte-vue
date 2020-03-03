<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>card</h1>
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
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
import logo from "../../assets/img/AdminLTELogo.png";
export default {
  data() {
    return {
      logo
    };
  }
};
</script>
