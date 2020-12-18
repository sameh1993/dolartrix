<template>
    <div class="pricing">

        <!-- Serivces section  -->
        <SerivcesComp />

        <!-- Pricing Section  -->
        <pricingComp />

    </div>
</template>

<script>
import SerivcesComp from "../components/content/serivces";
import pricingComp from "../components/content/pricing-plans";

export default {
    components:{
        SerivcesComp,
        pricingComp
    }
}
</script>>