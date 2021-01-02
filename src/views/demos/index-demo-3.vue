<template>
  <div class="demo-3">
    <!-- start about comp from about us page -->
    <aboutCompAboutUsPage></aboutCompAboutUsPage>
    <!-- start what we do comp from faq page -->
    <WhatWeDoFAqpage></WhatWeDoFAqpage>
    <!-- start our fun facts from aboutus page -->
    <OurFunFactsAboutUsPage></OurFunFactsAboutUsPage>

    <!-- feature from about us page -->
    <FeatureAboutUsPage class="mt-5 bub-right"></FeatureAboutUsPage>

    <div class="double-bg-2">
      <!-- start serivces Comp from serivces page -->
      <servicesCompSerivcesPage></servicesCompSerivcesPage>
      <!-- start our team from about us page -->
      <OurTeamCompAboutusPage></OurTeamCompAboutusPage>
    </div>

    <!-- start frequestly from faq page -->
    <FrequentlyCompFAQPage></FrequentlyCompFAQPage>

    <!-- start testimonail comp from aboutpage -->
    <TestimonailsAboutPage></TestimonailsAboutPage>

    <!-- start blog component from FAQ Page -->
    <BlogCompFaqPage></BlogCompFaqPage>

    <!-- start contact touch -->
    <ContactTouch></ContactTouch>
  </div>
</template>

<script>
import WhatWeDoFAqpage from "@/components/body/faq/what-we-do.vue";
import OurFunFactsAboutUsPage from "@/components/body/aboutus/our-fun-facts.vue";
import aboutCompAboutUsPage from "@/components/body/aboutus/about.vue";
import FeatureAboutUsPage from "@/components/body/aboutus/feature.vue";
import servicesCompSerivcesPage from "@/components/body/serivces/serivces.vue";
import OurTeamCompAboutusPage from "@/components/body/aboutus/our-team.vue";
import FrequentlyCompFAQPage from "@/components/body/faq/Frequently-Questions.vue";
import TestimonailsAboutPage from "@/components/body/aboutus/testimonails.vue";
import BlogCompFaqPage from "@/components/body/faq/blog.vue";
import ContactTouch from "@/components/body/demo-1/contact-touch.vue";

export default {
  components: {
    WhatWeDoFAqpage,
    OurFunFactsAboutUsPage,
    aboutCompAboutUsPage,
    FeatureAboutUsPage,
    servicesCompSerivcesPage,
    OurTeamCompAboutusPage,
    FrequentlyCompFAQPage,
    TestimonailsAboutPage,
    BlogCompFaqPage,
    ContactTouch,
  },
};
</script>