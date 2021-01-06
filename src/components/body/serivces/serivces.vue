<template>
  <!-- ##### Our Services Area Start ##### -->
  <section
    class="our_services_area section-padding-100-0 clearfix"
    id="services"
  >
    <div class="container">
      <div class="section-heading text-center">
        <div
          class="more-dots justify-content-center fadeInUp"
          data-wow-delay="0.2s"
        >
          <span class="gradient-text blue">Our Services</span>
        </div>
        <h3 class="wow fadeInUp w-text" data-wow-delay="0.3s">
          What we speciaized in
        </h3>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4"
          :key="index"
          v-for="(item, index) in serivcesList"
        >
          <!-- Content -->
          <div
            class="service_single_content text-center mb-100 fadeInUp"
            data-wow-delay="0.7s"
          >
            <!-- Icon -->
            <div class="service_icon">
              <img :src="item.img" alt="" class="width-90" />
            </div>
            <h6>{{ item.title }}</h6>
            <p>
              {{ item.para }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.our_services_area .section-heading p {
  color: #ccc;
}
</style>


<script>
export default {
  data() {
    return {
      serivcesList: [
        {
          img: require("@/assets/img/icons/s1.png"),
          title: "Networking and Security",
          para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam,
              maximus ut accumsan.`,
        },
        {
          img: require("@/assets/img/icons/s2.png"),
          title: "Cyber Security Solutions",
          para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam,
              maximus ut accumsan.`,
        },
        {
          img: require("@/assets/img/icons/s3.png"),
          title: "IT Disaster Planning",
          para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam,
              maximus ut accumsan.`,
        },

        {
          img: require("@/assets/img/icons/s4.png"),
          title: "Managed Web Application",
          para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam,
              maximus ut accumsan.`,
        },
        {
          img: require("@/assets/img/icons/s5.png"),
          title: "Diployment and Migration",
          para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam,
              maximus ut accumsan.`,
        },
        {
          img: require("@/assets/img/icons/s6.png"),
          title: "IT & Cloud Managment",
          para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam,
              maximus ut accumsan.`,
        },
      ],
    };
  },
};
</script>