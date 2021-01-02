<template>
  <!-- ##### Welcome Area Start ##### -->
  <section class="hero-section banner1-bg relative section-padding" id="home">
    <div class="hero-section-content">
      <div class="container h-100">
        <div class="row h-100 mb-50 relative align-items-center">
          <!-- Welcome Content -->
          <div class="col-12 col-lg-6 col-md-12">
            <div class="welcome-content">
              <div class="promo-section">
                <h3 class="special-head gradient-text cyan">
                  Creative Managed IT Solutions Agency
                </h3>
              </div>
              <h1 class="w-text animated fadeInUp" data-wow-delay="0.2s">
                Your IT Security is our top priority with Our Creative
                <span class="gradient-text cyan"
                  >Cyber Security Solutions.</span
                >
              </h1>
              <p class="g-text animated fadeInUp" data-wow-delay="0.3s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                soluta, dignissimos aut, assumenda dolore totam natus qui cum
                vel omnis voluptates.
              </p>
              <div class="more-btn-group fadeInUp" data-wow-delay="0.4s">
                <a href="#" class="btn more-btn mr-3">contact us</a>
                <a href="#" class="btn more-btn"> Learn more</a>
              </div>
            </div>
          </div>
          <div class="img col-lg-6 col-md-12">
            <div class="hos-img-header">
              <img
                src="@/assets/img/bg-img/banner-img.png"
                class="animated wow fadeInRight"
                data-wow-delay="0.9s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Welcome Area End ##### -->
</template>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";

.hero-section {
  @include maxScreen(lg) {
    height: 100vh;
    .row > div {
      // position: absolute;
      // top: 0;
      // bottom: 0;
      // right: 0;
      // left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      &:first-child {
        z-index: 2;
      }
      &:last-child {
        z-index: 1;
      }
      h3 {
        font-size: 17px;
      }
      h1 {
        font-size: 20px;
      }
    }
    .img {
      display: none !important;
    }
  }
}
</style>