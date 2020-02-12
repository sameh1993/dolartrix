<template>
  <div class="about">

    <!-- start About us -->
      <AboutUs @sameh="getData()" />
    <!-- end About  us -->


    <!-- start customer feedback -->
    <customerFeed v-on:sharing="getData = $event" />
    <!-- end customer feedback -->

    {{name}}

    <!--start team prof -->
    <teamProf />
    <!-- end team prof -->

    <!--- start news letter -->
      <NewsLetter />
    <!--- end news letter -->


  </div>
</template>


<script>
import AboutUs from "../components/AboutUs.vue";
import customerFeed from "../components/Customer.vue";
import teamProf from "../components/TeamProf.vue";
import NewsLetter from "../components/NewsLetter.vue";


export default {
  data(){
    return {
      name: [],
    }
  },
  methods: {
    getData : function (newVal) {
      return this.name = newVal;
    }
  },
  components: {
    AboutUs,
    customerFeed,
    teamProf,
    NewsLetter
  }
}
</script>
