<template>
    <div class="">

        <!-- start About section -->
        <About />

        <!-- serivces section  -->
        <serivcesComp />
    </div>
</template>

<script>
import About from '../components/content/about.vue';
import serivcesComp from "../components/content/serivces";

export default {
    components:{
        serivcesComp,
        About
    }
       
}
</script>