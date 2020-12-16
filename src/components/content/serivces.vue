<template>
  <div id="serivces" class="serivces">
    <div class="container shadow format">
      <!-- start heading -->
      <div class="head text-center mb-5">
        <h5 class="text-uppercase text-small">{{ serivceSec.subTitle }}</h5>
        <h2>{{ serivceSec.title }}</h2>
        <p>{{ serivceSec.para }}</p>
      </div>

      <!-- start section content  -->
      <div class="content">
        <!--
      
        // <div class="col-lg-4 col-md-6 col-sm-12 shadow">
        //   <img src="../../assets/img/icons/1.png" />
        //   <div class="info">
        //     <h4>Investment Advise</h4>
        //     <p>
        //       Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit
        //       ipsum dolor sit amet.
        //     </p>
        //   </div>
        //   <span></span>
        //   <i class="fa fa-long-arrow-right"></i>
        // </div>

        // <div class="col-lg-4 col-md-6 col-sm-12 shadow">
        //   <img src="../../assets/img/icons/1.png" />
        //   <div class="info">
        //     <h4>Investment Advise</h4>
        //     <p>
        //       Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit
        //       ipsum dolor sit amet.
        //     </p>
        //   </div>
        //   <span></span>
        //   <i class="fa fa-long-arrow-right"></i>
        // </div>

        // <div class="col-lg-4 col-md-6 col-sm-12 shadow">
        //   <img src="../../assets/img/icons/1.png" />
        //   <div class="info">
        //     <h4>Investment Advise</h4>
        //     <p>
        //       Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit
        //       ipsum dolor sit amet.
        //     </p>
        //   </div>
        //   <span></span>
        //   <i class="fa fa-long-arrow-right"></i>
        // </div>

        // <div class="col-lg-4 col-md-6 col-sm-12 shadow">
        //   <img src="../../assets/img/icons/1.png" />
        //   <div class="info">
        //     <h4>Investment Advise</h4>
        //     <p>
        //       Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit
        //       ipsum dolor sit amet.
        //     </p>
        //   </div>
        //   <span></span>
        //   <i class="fa fa-long-arrow-right"></i>
        // </div>

        // <div class="col-lg-4 col-md-6 col-sm-12 shadow">
        //   <img src="../../assets/img/icons/1.png" />
        //   <div class="info">
        //     <h4>Investment Advise</h4>
        //     <p>
        //       Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit
        //       ipsum dolor sit amet.
        //     </p>
        //   </div>
        //   <span></span>
        //   <i class="fa fa-long-arrow-right"></i>
        // </div>

        // <div class="col-lg-4 col-md-6 col-sm-12 shadow">
        //   <img src="../../assets/img/icons/1.png" />
        //   <div class="info">
        //     <h4>Investment Advise</h4>
        //     <p>
        //       Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit
        //       ipsum dolor sit amet.
        //     </p>
        //   </div>
        //   <span></span>
        //   <i class="fa fa-long-arrow-right"></i>
        // </div>
        -->

        <serivceitem
          :content="serivceSec.content"
        ></serivceitem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.serivces {
  padding: 90px 30px;
  background: #fff;
  .format {
    padding: 60px 30px 30px;
    .head {
      h5 {
        background-image: var(--subBgColor);
        font-weight: bold;
        font-size: 15px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>


<script>
import serivceitem from "../parts/serivce-item.vue";

export default {
  components: {
    serivceitem,
  },
  data() {
    return {
      
    };
  },
};
</script>