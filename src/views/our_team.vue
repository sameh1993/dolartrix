<template>
    <div class="">

        <!-- We Choose Us section  -->
        <WeChooseUs />
        
        <!-- start Our team section -->
        <our-team></our-team>
    </div>
</template>

<script>
import ourTeam from "../components/content/our-team";
import WeChooseUs from "../components/content/features";

export default {
    components:{
        ourTeam,
        WeChooseUs
    }
}
</script>