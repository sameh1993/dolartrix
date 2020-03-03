<template>
    <div class="dash">

        <!-- start banner button -->
        <BannerButton />
        <!-- enf banner button --->

        <!-- startr information section -->
        <information />
        <!-- end information section -->

        <!-- start marketing products -->
        <markrtingPro />
        <!-- end marketing products -->

        
    </div>
</template>


<script>
import BannerButton from '../components/BannerButtom.vue';
import information from '../components/Information';
import markrtingPro from "../components/MarketingProduct.vue";


export default {
    data(){
        return {

        }
    },
    components:{
       BannerButton,
       information,
       markrtingPro
    }
}
</script>