<template>
  <div class="home">
    <!-- start welcome comp -->
    <welcome-comp></welcome-comp>

    <!-- start inner page -->
    <inner-page></inner-page>
  </div>
</template>

<script>
import InnerPage from "../components/body/home/inner-page.vue";
import welcomeComp from "../components/body/home/welcome-comp.vue";

export default {
  data() {
    return {};
  },
  components: {
    welcomeComp,
    InnerPage,
  },
};
</script>
