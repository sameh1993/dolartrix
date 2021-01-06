import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// import Main Components
import HomeComponent from "./views/Home.vue";
// demos
import DemoOneComponent from "./views/demos/index-demo-1.vue";
import DemoTwoComponent from "./views/demos/index-demo-2.vue";
import DemoThreeComponent from "./views/demos/index-demo-3.vue";

import AboutComponent from "@/views/about-us.vue";
import SerivcesCompoenent from "./views/Serivces.vue";
import FAQComponent from "./views/FAQ.vue";

// blog pages
import BlogPosts from "./views/blog/blog-posts.vue";
import SlidebarBlog from "./views/blog/slidebar-blog.vue";
import BlogDetails from "./views/blog/blog-details.vue";

import contactUs from "./views/contactUs.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeComponent,
    },
    {
      name: "demo-1",
      path: "/index-demo-1",
      component: DemoOneComponent,
    },
    {
      name: "demo-2",
      path: "/index-demo-2",
      component: DemoTwoComponent,
    },
    {
      name: "demo-3",
      path: "/index-demo-3",
      component: DemoThreeComponent,
    },
    {
      name: "About Us",
      path: "/about-us",
      component: AboutComponent,
    },
    {
      path: "/services",
      name: "Serivces",
      component: SerivcesCompoenent,
    },
    {
      name: "FAQ",
      path: "/FAQ",
      component: FAQComponent,
    },
    // blog pages
    {
      name: "Blog Posts", // first page for blog
      path: "/blog-posts",
      component: BlogPosts,
    },

    {
      name: "Slidebar Blog", // secong page for blog
      path: "/slidebar-blog",
      component: SlidebarBlog,
    },

    {
      name: "Blog Details", // three page for blog
      path: "/blog-details",
      component: BlogDetails,
    },
    {
      name: "Contact Us",
      path: "/contact-us",
      component: contactUs,
    },
  ],
});
