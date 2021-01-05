<template>
  <!-- ##### Welcome Area End ##### -->

  <section class="demo section-padding-100-70" id="demo">
    <div class="container">
      <div class="section-heading text-center">
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Choose a demo</h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          Our Template will be a perfect platform for presenting You future
          Template. This Landing Page comes in clean design
        </p>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="(item, index) in getDemo"
          :key="index"
        >
          <div class="demo-item">
            <router-link :to="item.to" target="_blank"
              ><img :src="item.img" alt="demo" class="img-fluid"
            /></router-link>
            <div class="preview-btn-wrapper text-center">
              <router-link :to="item.to" class="preview-demo" target="_blank">
                View demo <i class="fa fa-long-arrow-right"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.demo {
  background-color: #fff;
}
</style>


<script>
export default {
  data() {
    return {
      demosList: this.$store.state.demosList,
    };
  },
  computed: {
    getDemo() {
      return this.demosList.slice(0, 3);
    },
  },
};
</script>