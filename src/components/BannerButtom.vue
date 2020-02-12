<template>
  <div class="banner p-head">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" :key="index" v-for="(item, index) in bannerBottom">
            <i :class="item.myIcon" class="pt-2 pb-2 mt-4"></i>
            <h3 class="text-capitalize"> {{item.title}} </h3>
            <p class="mt-2">Vestibulum ante ipsum primis in faucibus orci luctus eted ultrices posuere Curae primis in faucibus luctus eted.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
    h3{
        font-size: 25px;
        letter-spacing: 2px;
    }
    p{
        line-height: 2;
        text-transform : capitalize;
    }
}
</style>

<script>
export default {
  data() {
    return {
      bannerBottom: [
        { myIcon: "fa fa-fort-awesome fa-2x", title: "statistics"},
        { myIcon: "fa fa-key fa-2x", title: "security"},
        { myIcon: "fa fa-tasks fa-2x", title: "presentation"},
      ]
    }
  }
};
</script>