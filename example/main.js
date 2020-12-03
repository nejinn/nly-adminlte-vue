import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PortalVue from "portal-vue";
Vue.use(PortalVue);

Vue.config.productionTip = false;

// import "./assets/adminlte/css/adminlte.min.css";
// import "./assets/adminlte/css/select2.css";
import "./assets/nly-adminlte-vue/nly-adminlte-vue.css";
import "./assets/adminlte/css/adminlte.css";
import "./assets/adminlte/fontawesome-free/css/all.css";
import "./assets/font/font.css";
import "./assets/nly-adminlte-vue/icon/iconfont.css";

import { NlyAdminlteVue, NlyAdminlteVueIcons } from "./nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
Vue.use(NlyAdminlteVueIcons);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
