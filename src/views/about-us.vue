<template>
  <div>
    <!-- start about us -->
    <about></about>

    <!-- start feature -->
    <Feature></Feature>

    <!-- start our fun facts -->
    <our-fun-facts></our-fun-facts>

    <!-- start our team -->
    <our-team></our-team>

    <!-- start testimonail -->
    <test></test>
  </div>
</template>


<script>
import About from "@/components/body/aboutus/about.vue";
import Feature from "@/components/body/aboutus/feature.vue";
import OurFunFacts from "@/components/body/aboutus/our-fun-facts.vue";
import OurTeam from "@/components/body/aboutus/our-team.vue";
import test from "../components/body/aboutus/testimonails";

export default {
  components: {
    About,
    Feature,
    OurFunFacts,
    OurTeam,
    test,
  },
};
</script>