<template>
  <div class="root">
    <!-- start header -->

    <header class="header">
      <!-- start navigation bar -->
      <navbar />
      <!-- end navigation bar -->

      <!-- start slider -->
      <slider />
      <!-- end slider -->
    </header>

    <!--end header -->

    <!-- start content page -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- end content page -->

    <!-- start footer -->
    <footerApp />
  </div>
</template>

<style lang="scss">
@import "./GlobalRules/scss/mainRules.scss";

.header {
  min-height: 100vh;
  background-color: var(--mainColor);
}

.fa-angle-up {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 30;
  color: #fff;
  font-size: 30px !important;
  width: 40px;
  height: 40px;
  background: var(--mainColor);
  font-weight: 600;
  text-align: center;
}
</style>

<script>
// import header components
import navbar from "./components/header/navbar";
import slider from "./components/header/slide";
import footerApp from "./components/content/contacts";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

export default {
  name: "App",
  components: {
    navbar,
    slider,
    footerApp,
  },
  mounted() {
    // to show and hiddeb scroll angle
    $(".fa-angle-up").fadeOut(700);
    $(window).scroll(function () {
      if ($("html, body").scrollTop() >= 120) {
        $(".fa-angle-up").fadeIn(700);
      } else {
        $(".fa-angle-up").fadeOut(700);
      }
    });

    $(".fa-angle-up").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });

    $(window).resize(function () {
      console.log($(window).width());
    });

    $(".custom .btn, .nav-item").click(function () {
      $(".navbar-collapse").removeClass("show");
    });
  },
  data() {
    return {
      view: "home",
    };
  },
  beforeMount() {
    $(".fixed").fadeOut(700, function () {
      $(this).remove();
    });
  },
};
</script>
