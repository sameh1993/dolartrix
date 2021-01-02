<template>
  <section
    class="section-padding-0-0 relative clearfix"
    style="margin-top: -50px"
  >
    <div class="container">
      <div class="has-shadow agency-sec">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-sm-12"
            v-for="(item, index) in aboutus"
            :key="index"
          >
            <div class="services-block-four v2">
              <div class="inner-box">
                <div class="icon-img-box">
                  <img :src="item.img" alt="" />
                </div>
                <h3>
                  <router-link href="#"> {{ item.title }}</router-link>
                </h3>
                <div class="text">
                  {{ item.para }}
                </div>
                <div
                  class="side-feature-list-item v2"
                  v-for="(item, index) in item.options"
                  :key="index"
                >
                  <i
                    class="fa fa-check check-mark-icon-font"
                    aria-hidden="true"
                  ></i>
                  <div class="foot-c-info">{{ item }}</div>
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
      aboutus: [
        {
          img: require('@/assets/img/icons/icon1.png'),
          title: "Managed IT Services",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit.",
          options: [
            "Expansions or Consolidations",
            "Networking & Security Solutions",
            "Security & Detailed Results",
          ],
        },
        {
          img: require('@/assets/img/icons/icon2.png'),
          title: "Networking Solutions",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit.",
          options: [
            "Expansions or Consolidations",
            "Networking & Security Solutions",
            "Security & Detailed Results",
          ],
        },
        {
          img: require('@/assets/img/icons/icon3.png'),
          title: "Security Solutions",
          para:
            "Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit.",
          options: [
            "Expansions or Consolidations",
            "Networking & Security Solutions",
            "Security & Detailed Results",
          ],
        },
      ],
    };
  },
};
</script>

