import Vue from "vue";
import App from "../app.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "../router";
import axios from "../plugins/axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    render: (h) => h(App),
    router,
  }).$mount();
  document.body.appendChild(app.$el);
});
