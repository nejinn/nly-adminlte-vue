import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// import "./assets/adminlte/css/adminlte.min.css";
import "./assets/adminlte/css/adminlte.css";
import "./assets/adminlte/fontawesome-free/css/all.css";
import "./assets/nly-adminlte-vue/nyladminltevue.css";
import "./assets/font/font.css";

import { NlyAdminlteVue } from "./nly-adminlte-vue";
Vue.use(NlyAdminlteVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
