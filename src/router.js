import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import AboutUs from "./views/About";
import Serivces from "./views/Serivces";
import Blog from "./views/Blog";
import ContactUs from "./views/contactUs";
import Dashboard from "./views/Dashboard.vue";


import Registeration from "./views/Registeration.vue";
/* ============================== */
import SignUp from "./components/Register/SignUp.vue";
import SignIn from "./components/Register/SignIn.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/aboutUs",
      name: "ِِِِِِِِِِِAbout Us",
      component: AboutUs
    },
    {
      path: "/serives",
      name: "serivces",
      component: Serivces
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: ContactUs
    },
    {
      path:"/register",
      component:  Registeration,
      children: [
        {path: "", name:"Sign Up",  component: SignUp},
        {path: "signin", name:"Sign In", component: SignIn}
      ]
    },
    {
      path: "/dashboard",
      name:"Dashboard",
      component: Dashboard
    }
  ]
});
