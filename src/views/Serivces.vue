<template>
  <div class="serivces">
    <!-- start serivces comp -->
    <Serivces></Serivces>

    <!-- start our team  form aboutus page -->
    <our-team></our-team>

    <!-- start fun facts from about page -->
    <our-fun-facts></our-fun-facts>

    <!-- start testimonails from about page -->
    <testimonial></testimonial>
  </div>
</template>


<script>
import OurFunFacts from "@/components/body/aboutus/our-fun-facts.vue";
import Serivces from "@/components/body/serivces/serivces.vue";
import OurTeam from "../components/body/aboutus/our-team.vue";
import testimonial from "../components/body/aboutus/testimonails";

export default {
  components: {
    OurFunFacts,
    Serivces,
    OurTeam,
    testimonial,
  },
};
</script>