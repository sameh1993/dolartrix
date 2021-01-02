import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

window.$ = window.jQuery = require("jquery");

// include font-awesome
import "../node_modules/font-awesome/css/font-awesome.min.css";

// import vue minified
import "./../node_modules/vue/dist/vue.runtime.common.prod";

// import global css files
import "./assets/css/responsive.css";
import "./assets/css/style.css";

Vue.use({
  install: function (Vue) {
    Vue.prototype.$jQuery = require("jquery"); // you'll have this.$jQuery anywhere in your vue project
  },
});

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "@/assets/css/animate.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
