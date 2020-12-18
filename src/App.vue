<template>
  <div class="root">
    <!-- start header -->
    <header :class="$route.name !== 'Home' ? 'h-50' : ''" class="header">
      <!-- start navigation bar -->
      <navbar />
      <!-- end navigation bar -->

      <!-- start slider -->
      <slider />
      <!-- end slider -->

      <div v-if="$route.name !== 'Home'" class="bar">
        <span> Home </span> |  <span> {{$route.name}} </span>
      </div>
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
  background-color: var(--mainColor);
  height:100vh;
  position: relative;

  .bar {
    position: absolute;
    bottom: 0 ;
    left:0;
    right:0;
    text-align: center;
    color: #fff;
    padding: 25px 0;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
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

    console.log(this.$route.name)

    $(window).resize(function () {
      console.log($(window).width());
    });

    $(".custom .btn, .nav-item").click(function () {
      $(".navbar-collapse").removeClass("show");
    });
  },
  data() {
    return {
      view: "home"
    };
  },
  beforeMount() {
    $(".fixed").fadeOut(700, function () {
      $(this).remove();
    });
  },

};
</script>
