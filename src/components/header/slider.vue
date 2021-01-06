<template>
  <!-- ##### Welcome Area Start ##### -->
  <div class="hero-section hos-bg-1 relative section-padding" id="home">
    <div class="hero-section-content">
      <div class="container h-100">
        <div class="row h-100 mb-50 align-items-center">
          <!-- Welcome Content -->
          <div class="col-12 col-lg-8 offset-lg-2 col-md-12 text-white">
            <div class="welcome-content text-center">
              <div class="promo-section">
                <h3 class="special-head gradient-text cyan">
                  Much More a IT & Cyber Security Template
                </h3>
              </div>
              <h1 class="w-text wow fadeInUp" data-wow-delay="0.2s">
                Dolatrix - Cyber Security & IT Solutions Template
              </h1>
              <p class="g-text fadeInUp" data-wow-delay="0.3s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                soluta, dignissimos aut, assumenda dolore totam natus qui cum
                vel omnis voluptates.
              </p>
              <div class="more-btn-group wow fadeInUp" data-wow-delay="0.4s">
                <a href="#" class="btn more-btn">Choose Demo</a>
                <a href="#" class="btn more-btn"> Purchase now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ##### Welcome Area End ##### -->
</template>

<style scoped>
@import "../../assets/css/animate.css";
/* ##### 3.0 Wellcome Area CSS ##### */
.hero-section {
  position: relative;
  min-height: 750px;
  background: url(../../assets/img/bg-img/banner2.jpg) no-repeat bottom center;
  /* background: url("../../assets/img/bg-img/banner1.jpg") no-repeat bottom center; */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-section.app img {
  width: 100%;
}

.hero-section.curved-section:before {
  content: "";
  position: absolute;
  width: 103%;
  height: 100%;
  left: 0px;
  right: 0px;
  bottom: -3px;
  /* background: url("../../assets/img/svg/curve.svg") no-repeat bottom; */
  /* background: url('../../assets/img/svg/') no-repeat bottom; */
  z-index: 0;
}
.hero-section.curved-section .welcome-content {
  margin-top: 0;
}
.hero-section.app2 {
  position: relative;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.creamy {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 10%;
  right: 50%;
  -webkit-animation: floating3 7s infinite;
  -o-animation: floating3 7s infinite;
  animation: floating3 7s infinite;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(90deg, #5f36ff 0, #b719f6 100%);
}
@keyframes floating3 {
  0% {
    -webkit-transform: rotateX(0deg) translateY(0px);
    -moz-transform: rotateX(0deg) translateY(0px);
    -ms-transform: rotateX(0deg) translateY(0px);
    -o-transform: rotateX(0deg) translateY(0px);
    transform: rotateX(0deg) translate(0px, 0px) scale(1);
  }
  25% {
    transform: rotateX(0deg) translate(10px, 190px) scale(1.3);
  }
  50% {
    transform: rotateX(0deg) translate(190px, 230px) scale(1);
  }
  75% {
    transform: rotateX(0deg) translate(170px, 190px) scale(1.3);
  }
  100% {
    -webkit-transform: rotateX(0deg) translateY(0px);
    -moz-transform: rotateX(0deg) translateY(0px);
    -ms-transform: rotateX(0deg) translateY(0px);
    -o-transform: rotateX(0deg) translateY(0px);
    transform: rotateX(0deg) translate(0px, 0px) scale(1);
  }
}

@media (max-width: 991px) {
  .hero-section.fullwidth-header {
    padding-bottom: 285px;
    background-position: 50% 100%;
    background-size: 753px;
  }
  .special-pb {
    padding-bottom: 100px;
  }
}
@media (max-width: 991px) {
  .hero-section.fullwidth-header {
    background-position: 50% 100%;
    background-size: 897px;
  }
}
.hero-section.gradient {
  overflow: visible;
  background-image: linear-gradient(106deg, #d787f5, #3634bb);
}

@media (min-width: 767px) {
  .hero-section.curved-section {
    padding-top: 150px;
  }
}
@media (min-width: 992px) {
  .hero-section.curved-section {
    padding-top: 100px;
  }
}
@media (max-width: 767px) {
  .hero-section.curved-section img.curved {
    display: none;
  }
}
.hero-section.curved-section .special-head {
  padding-left: 0;
}
.hero-section.curved-section .special-head:before {
  display: none;
}
.welcome_area {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 900px !important;
}

.hero-content {
  width: 100%;
  height: 100%;
  background: rgba(72, 52, 212, 0.95);
  background: -webkit-linear-gradient(
    to right,
    rgba(72, 52, 212, 0.95),
    rgba(52, 31, 151, 0.95)
  );
  background: -webkit-linear-gradient(
    left,
    rgba(72, 52, 212, 0.95),
    rgba(52, 31, 151, 0.95)
  );
  background: linear-gradient(
    to right,
    rgba(72, 52, 212, 0.95),
    rgba(52, 31, 151, 0.95)
  );
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 10;
}
.hero-content.globe {
  background: linear-gradient(
    to right,
    rgba(72, 52, 212, 0.95),
    rgba(52, 31, 151, 0.75)
  );
}
.special-head {
  color: #28cc8b;
  padding-left: 40px;
  font-size: 18px;
  position: relative;
}
.special-head:before {
  content: "";
  background: #3964f9;
  position: absolute;
  top: 50%;
  left: 0;
  width: 30px;
  height: 2px;
}
.special-head.dark {
  color: #f8f517;
  font-weight: bold;
}
.special-head.dark:before {
  background: #fff;
}
.promo-section {
  margin-bottom: 30px;
}
.promo-section.bg {
  background: #ff966a;
  padding: 10px 20px;
  display: inline-block;
}
.promo-section.bg2 {
  background: #cb202d;
  padding: 10px 20px;
  display: inline-block;
}

.promo-section.bg .special-head {
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  margin-bottom: 0;
  letter-spacing: 1px;
}

@media (min-width: 1200px) {
  .main-ilustration {
    min-width: 650px;
  }
  .hos-bg-1 .welcome-content {
    margin-top: 40px;
  }
}

.welcome-content h2 {
  font-size: 52px;
  font-weight: 500;
  margin-bottom: 20px;
}
.welcome-content h1 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
}

.gradient-text {
  font-weight: bold;
  display: inline-block;
  background-image: linear-gradient(135deg, #846ff4 0%, #f17674 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.gradient-text.blue {
  background-image: linear-gradient(35deg, #17ead9 0%, #6078ea 100%);
}
.gradient-text.cyan {
  background-image: linear-gradient(135deg, cyan 0%, cyan 100%) !important;
}

@media (min-width: 1200px) {
  .hos-img-header {
    max-width: 170%;
    margin-top: 120px;
  }
  .hos-bg-1 h1 {
    font-weight: 700 !important;
    font-size: 55px !important;
  }
}
</style>