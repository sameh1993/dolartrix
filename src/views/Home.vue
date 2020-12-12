<template>
  <div class="home">
    <!-- start about section -->
    <aboutSec />
    <!-- end about section -->

    <!-- start about us -->
    <about-us />
    <!-- end about us --->

    <!-- start serivces -->
    <serivces id="serivces" />
    <!-- end serivces -->

    <!-- start features -->
    <feature-comp />
    <!-- start features -->

    <Questions />

    <!-- start pricing plans -->
    <pricing-plans></pricing-plans>
    <!-- end pricing plans -->

    <!-- start our team -->
    <our-team></our-team>
    <!-- end our team -->

    <!-- start our partners -->
    <our-partners></our-partners>
    <!-- end our partners -->
  </div>
</template>

<script>
import aboutSec from "../components/content/about";
import aboutUs from "../components/content/aboutUs";
import serivces from "../components/content/serivces";
import featureComp from "../components/content/features";
import Questions from "../components/content/questions";
import pricingPlans from "../components/content/pricing-plans";
import ourTeam from "../components/content/our-team";
import ourPartners from "../components/content/our-partners";

export default {
  components: {
    aboutSec,
    aboutUs,
    featureComp,
    serivces,
    Questions,
    pricingPlans,
    ourTeam,
    ourPartners
  },
};
</script>