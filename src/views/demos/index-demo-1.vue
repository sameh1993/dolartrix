<template>
  <div class="demo-1">
    <!-- start about us demo one -->
    <aboutusDemo class="mb-2"></aboutusDemo>

    <!-- feature from about us page -->
    <FeatureAboutUsPage class="mt-5"></FeatureAboutUsPage>

    <!-- start about comp from about us page -->
    <aboutCompAboutUsPage></aboutCompAboutUsPage>

    <!-- start our fun facts from aboutus page -->
    <OurFunFactsAboutUsPage></OurFunFactsAboutUsPage>

    <!-- start what we do comp from faq page -->
    <WhatWeDoFAqpage></WhatWeDoFAqpage>

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
import aboutusDemo from "../../components/body/demo-1/aboutus.vue";
import FeatureAboutUsPage from "@/components/body/aboutus/feature.vue";
import aboutCompAboutUsPage from "@/components/body/aboutus/about.vue";
import OurFunFactsAboutUsPage from "@/components/body/aboutus/our-fun-facts.vue";
import WhatWeDoFAqpage from "@/components/body/faq/what-we-do.vue";
import servicesCompSerivcesPage from "@/components/body/serivces/serivces.vue";
import OurTeamCompAboutusPage from "@/components/body/aboutus/our-team.vue";
import FrequentlyCompFAQPage from "@/components/body/faq/Frequently-Questions.vue";
import TestimonailsAboutPage from "@/components/body/aboutus/testimonails.vue";
import BlogCompFaqPage from "@/components/body/faq/blog.vue";
import ContactTouch from "@/components/body/demo-1/contact-touch.vue";

export default {
  components: {
    aboutusDemo,
    FeatureAboutUsPage,
    aboutCompAboutUsPage,
    OurFunFactsAboutUsPage,
    WhatWeDoFAqpage,
    servicesCompSerivcesPage,
    OurTeamCompAboutusPage,
    FrequentlyCompFAQPage,
    TestimonailsAboutPage,
    BlogCompFaqPage,
    ContactTouch,
  },
};
</script>