<template>
  <div>
    <!-- start what we do -->
    <what-we-do></what-we-do>

    <!-- start Frequently Questions -->
    <Frequently-Questions></Frequently-Questions>

    <!-- start blog -->
    <blog></blog>
  </div>
</template>

<script>
import WhatWeDo from "@/components/body/faq/what-we-do.vue";
import FrequentlyQuestions from "@/components/body/faq/Frequently-Questions.vue";
import blog from "@/components/body/faq/blog.vue";

export default {
  components: {
    WhatWeDo,
    FrequentlyQuestions,
    blog,
  },
};
</script>
