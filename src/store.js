import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    demosList: [
      { img: require("@/assets/img/demos/demo-1.png"), to: "/index-demo-1" },
      { img: require("@/assets/img/demos/demo-2.png"), to: "/index-demo-2" },
      { img: require("@/assets/img/demos/demo-3.png"), to: "/index-demo-3" },
      { img: require("@/assets/img/demos/demo-4.png"), to: "/About-us" },
      { img: require("@/assets/img/demos/demo-5.png"), to: "/services" },
      { img: require("@/assets/img/demos/demo-6.png"), to: "/FAQ" },
      { img: require("@/assets/img/demos/demo-7.png"), to: "/blog-posts" },
      { img: require("@/assets/img/demos/demo-8.png"), to: "/blog-details" },
      { img: require("@/assets/img/demos/demo-9.png"), to: "/contact-us" },
    ],
  },
});
