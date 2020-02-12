<template>
  <div class="marketing p-head">
    <div class="container">
      <div class="head">
        <h2 class="text-capitalize">
          our  
          <strong>marketing Product</strong>
        </h2>
      </div>
      <div class="row">
       
          <div class="text-center col-md-3 col-sm-12 col-xs-12 mt-4" v-for="(item, index) in myMarket" :key="index + 1">
            <i :class="item.myIcon" class="pt-2 pb-2" style="'color:' + item.mycolor"></i>
            <h3> {{item.title}} </h3>
          </div>
       

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marketing {
  .text-center {
    padding: 30px 20px;
    background-color: #f6f6f6;
    transform:scaleX(.95);
    h3 {
      text-transform: capitalize;
      letter-spacing: 1px;
      margin-top:10px;
    }
  }
  .row > div {
    box-shadow: 3px 3px 8px #d4d3d3;

  }
}
</style>

<script>
export default {
  data() {
    return {
      myMarket: [
        {title: "consulting", myIcon: "fa fa-print fa-2x", mycolor: "var(--info)" },
        {title: "marketing", myIcon: "fa fa-newspaper-o fa-2x", mycolor: "var(--blue)"},
        {title: "it software", myIcon: "fa fa-unlock fa-2x", mycolor: "var(--primary)" },
        {title: "cloud tochnology", myIcon: "fa fa-product-hunt fa-2x", mycolor: "var(--success)" }
      ]
    };
  }
};
</script>


