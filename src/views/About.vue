<template>
    <div class="">

     <!-- start about section -->
    <aboutComp />
    <!-- end about section -->

    <!-- start about us -->
    <about-us />
    <!-- end about us --->

    <!-- start our team -->
    <our-team></our-team>

    
    </div>
</template>

<script>
import aboutComp from "../components/content/about";
import aboutUs from "../components/content/aboutUs";
import ourTeam from "../components/content/our-team";
export default {
    components:{
        aboutComp,
        aboutUs,
        ourTeam,
    }
}
</script>