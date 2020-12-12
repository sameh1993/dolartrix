import Vue from "vue";
import Router from "vue-router";


// import HomePage
import HomePage from "./views/Home.vue";
import aboutPage from "./views/about.vue";
import serivcesPage from "./views/serivces.vue";
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
      name: "about",
      path: "/about",
      component: aboutPage
    },
    {
      name: "serivces",
      path: "/serivces",
      component: serivcesPage
    },
    {
      name: "Home",
      path: "/our-team",
      component: teamPage
    }
  ]
});
