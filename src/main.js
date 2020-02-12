import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;


// include font-awesome
import "../node_modules/font-awesome/css/font-awesome.min.css";



// include jquery
window.$ = window.jQuery = require('jquery');

// include bootstrap
import "bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// include customsation
import "./GlobalRules/scss/mainRules.scss";


// include vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate); 


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
