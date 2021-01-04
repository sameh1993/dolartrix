<template>
  <div class="root">
    <!-- start header -->
    <header class="h-75">
      <!-- navigation bar-->
      <NavbarApp />

      <!-- start slider -->
      <SliderApp v-if="$route.name == 'Home'" />

      <!-- start slide demo one -->
      <slideDemoOne v-if="$route.name == 'demo-1' "></slideDemoOne>

      <slideDemoTwo class="" v-if="$route.name == 'demo-2' "></slideDemoTwo>

      <slideDemoThree v-if="$route.name == 'demo-3' "></slideDemoThree>

      

      <!-- start welcome area -->
      <transition name="fade">
      <welcome-area v-if="$route.name != 'Home' && $route.name != 'demo-1' && $route.name != 'demo-2' && $route.name != 'demo-3' "></welcome-area>
      </transition>
    </header>

    <!-- start body -->
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <!-- start contacts us -->
    <CommentsUs v-if="$route.name != 'Home'"></CommentsUs>

     <!-- ##### Footer Area Start ##### -->
    <footer v-if="$route.name == 'Home' " class="copy-rights mb-3 pt-2">
        <div class="text-center">
            <p class="mb-0"> All Rights Reserved &copy; 2020</p>
        </div>
    </footer>
    <!-- ##### Footer Area End ##### -->





  </div>
</template>

<style>

header {
  background-color: var(--mainColor);
  transition: all 1s !important;
}

</style>

<script>
import NavbarApp from "./components/header/navbar.vue";
import  SliderApp from './components/header/slider.vue';
import WelcomeArea from "./components/header/welcomearea.vue";
import CommentsUs from "./components/footer/contacts.vue";
import slideDemoOne from "./components/header/demos/slide-demo-1.vue";
import slideDemoTwo from "./components/header/demos/slide-demo-2.vue";
import slideDemoThree from "./components/header/demos/slide-demo-3.vue";


import jquery from 'jquery';
const $ = jquery;
window.$ = $;




export default {
  components: {
    NavbarApp,
    SliderApp,
    slideDemoOne,
    WelcomeArea,
    CommentsUs,
    slideDemoTwo,
    slideDemoThree
  },
  mounted() {
    
    $(window).scroll(function () {
      if($(window).scrollTop() >= 100) {
        $(".navbar").addClass("shrink")
        $("#scrollUp").fadeIn(800)
      } else {
        $(".navbar").removeClass("shrink")
        $("#scrollUp").fadeOut(800)
      }
    })

    $("#scrollUp").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1000)
    })

    
  },
  beforeMount() {
    $("#preloader").delay(1000).fadeOut(700, function () {
          $("#preloader").remove()
        })
  },
};
</script>
