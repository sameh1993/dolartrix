<template>
  <section class="what-we-do circle-m section-padding-100">
    <div class="container">
      <div class="section-heading text-center">
        <div
          class="more-dots justify-content-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <span class="gradient-text blue">Great Features</span>
        </div>
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Our Main Features</h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>

      <div class="clearfix"></div>

      <div class="outer">
        <!--Logo-->
        <div class="inner-circle">
          <a href="#"
            ><img
              class="phone"
              src="@/assets/img/core-img/avatar.png"
              alt="image"
          /></a>
          <div class="bottom-bar">
            <div class="exp-wrapper d-flex">
              <div class="exp-years">
                <h3 class="years gradient-text cyan">25</h3>
              </div>
              <div class="">
                <p class="w-text">Years of IT & cyber security Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row clearfix">
          <!--Left Column-->
          <div class="left-column col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <!--Service Box-->
            <div
              v-for="(item, index) in getFirstItem"
              :key="index"
              class="service-box-three"
            >
              <div class="inner-box">
                <div class="icon-box">
                  <img :src="item.img" alt="" />
                </div>
                <h3>
                  <router-link :to="item.link"> {{ item.title }} </router-link>
                </h3>
                <div class="text">
                  {{ item.para }}
                </div>
              </div>
            </div>
          </div>

          <!--Right Column-->
          <div class="right-column col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <!--Service Box-->
            <div
              v-for="(item, index) in getLastItem"
              :key="index"
              class="service-box-four"
            >
              <div class="inner-box">
                <div class="icon-box">
                  <img :src="item.img" alt="" />
                </div>
                <h3>
                  <router-link :to="item.link">
                    {{ item.title }}
                  </router-link>
                </h3>
                <div class="text">
                  {{ item.para }}
                </div>
              </div>
            </div>
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
      mainFeature: [
        {
          img: require("@/assets/img/icons/feature-1.png"),
          link: "/service-single1",
          title: "Security Solutions",
          para: `Iterative approaches to corporate strategy foster collaborative thinkin`,
        },
        {
          img: require("@/assets/img/icons/feature-2.png"),
          link: "/service-single2",
          title: "Strong Firewalls",
          para: `Iterative approaches to corporate strategy foster collaborative thinkin`,
        },
        {
          img: require("@/assets/img/icons/feature-3.png"),
          link: "/service-single3",
          title: "Managed IT Servers",
          para: `Iterative approaches to corporate strategy foster collaborative thinkin`,
        },
        {
          img: require("@/assets/img/icons/feature-4.png"),
          link: "/service-single4",
          title: "Websites Security",
          para: `Iterative approaches to corporate strategy foster collaborative thinkin`,
        },
        {
          img: require("@/assets/img/icons/feature-5.png"),
          link: "/service-single5",
          title: "Latest Equipment",
          para: `Iterative approaches to corporate strategy foster collaborative thinkin`,
        },
        {
          img: require("@/assets/img/icons/feature-6.png"),
          link: "/service-single6",
          title: "Cloud Computing",
          para: `Iterative approaches to corporate strategy foster collaborative thinkin`,
        },
      ],
    };
  },
  computed: {
    getFirstItem() {
      return this.mainFeature.slice(0, 3);
    },
    getLastItem() {
      return this.mainFeature.slice(-4, -1);
    },
  },
};
</script>
