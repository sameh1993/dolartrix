<template>
  <section
    class="hos-features section-padding-0-0"
    style="padding-bottom: 70px"
  >
    <div class="section-heading text-center">
      <div
        class="more-dots justify-content-center fadeInUp"
        data-wow-delay="0.2s"
      >
        <span class="gradient-text blue">our features</span>
      </div>
      <h2 class="wow fadeInUp" data-wow-delay="0.3s">Why Choose us</h2>
      <p class="wow fadeInUp" data-wow-delay="0.4s">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(item, index) in featureList"
          :key="index"
        >
          <!-- Content -->
          <div
            class="feature_single_content text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="icon_wrapper">
              <img :src="item.icon" alt="" />
            </div>
            <!-- Icon -->
            <div class="service_img">
              <img :src="item.img" class="" alt="" />
            </div>
            <h6 class="feature-info">{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      featureList: [
        {
          img: require("@/assets/img/features/feature-1.jpg"),
          icon: require("@/assets/img/icons/i1.png"),
          title: "Dedicated Team",
        },
        {
          img: require("@/assets/img/features/feature-2.jpg"),
          icon: require("@/assets/img/icons/i2.png"),
          title: "Qualified IT Experts",
        },
        {
          img: require("@/assets/img/features/feature-3.jpg"),
          icon: require("@/assets/img/icons/i3.png"),
          title: "Creative IT solutions",
        },
      ],
    };
  },
};
</script>