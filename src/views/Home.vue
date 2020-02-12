<template>
  <div class="home">
    <!--- start BannerButton -->
    <BannerButtom />
    <!--- end BannerButton --->

    

    <!--- start About Us -->
    <AboutUs @Advant="passData"/>
    <!-- end About -->

    <!-- start Information -->
    <information />
    <!-- end Information -->

    <!-- start marketProduct --->
    <Product />
    <!-- end marketProduct --->

  

    <!-- start Statistical -->
    <Statistical />
    <!-- end Statistical -->

    <!-- start footer top -->
    <footerTop />
    <!-- end footer top -->
  </div>
</template>

<script>
// @ is an alias to /src
import BannerButtom from "../components/BannerButtom.vue";
import AboutUs from "../components/AboutUs.vue";
import Information from "../components/Information.vue";
import Product from "../components/MarketingProduct.vue";
import Statistical from "../components/Statistical.vue";
import FooterTop from "../components/FooterTop.vue";

export default {
  data: function() {
    return {
      ShareAdvant: [],
      sharIcon: ""
    };
  },
  methods: {
    // this is funtion receive sharing data in shareAdvant
    passData: function(newVal) {
      this.ShareAdvant = newVal;
    }
  },
  components: {
    BannerButtom,
    AboutUs,
    Information,
    Product,
    Statistical,
    FooterTop
  }
};
</script>
