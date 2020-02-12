<template>
    <div class="ser">

        <!--- start serivces -->
        <Serivces />
        <!-- end serivces -->

        <!--- start a wide range -->
        <AwideRange />
        <!--- end a wide range --->

        <!-- start marketing pro -->
        <MarketingPro />
        <!-- end marketing pro --->


    </div>
</template>

<script>
import Serivces from "../components/SerivcesComp.vue";
import AwideRange from "../components/AwideRange.vue";
import MarketingPro from "../components/MarketingProduct.vue";


export default {
    name: "serivces",
    components: {
        Serivces,
        AwideRange,
        MarketingPro
    }
}
</script>