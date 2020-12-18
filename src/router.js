import Vue from "vue";
import Router from "vue-router";


// import HomePage
import HomePage from "./views/Home.vue";
import aboutPage from "./views/about.vue";
import serivcesPage from "./views/serivces.vue";
import PricingPage from "./views/pricing.vue";
import teamPage from "./views/our_team.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomePage
    },
    {
      name: "About Us",
      path: "/about",
      component: aboutPage
    },
    {
      name: "Serivces",
      path: "/serivce",
      component: serivcesPage
    },
    {
      name: "pricing",
      path: "/pricing",
      component: PricingPage
    },
    {
      name: "Our Team",
      path: "/our0team",
      component: teamPage
    }
  ]
});
