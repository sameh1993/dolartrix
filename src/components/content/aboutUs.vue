<template>
  <div id="about" class="about-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 col-xs-12">
          <h5>CONTACT US NOW IF YOU HAVE ANY QUESTION</h5>
          <h3 class="mt-4">Get in Touch with us so Easy.</h3>
          <p>
            Lorem ipsum dolor sit amet, adipisicing elit. Ratione provident
            omnis iusto, veniam libero accusamus esse ab, enim temporibus.
          </p>
          <form class="form">
            <div class="col-7 mr-4 form-group mb-0">
              <i class="fa fa-home"></i>
              <input class="" type="email" placeholder="Enter your Email" />
            </div>
            <button class="col-4 btn">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../GlobalRules/scss/mainRules.scss";

.about-us {
  background: url("../../assets/img/bg-img/hero-bg.png") no-repeat center;
  overflow: hidden;
  padding: 70px 0;
  h5 {
    color: #00ffff;
    font-weight: 600;
    font-size: 15px;
  }
  h3 {
    font-weight: 600;
    text-transform: capitalize;
    color: #fff;
    letter-spacing: 1px;
  }
  p {
    color: #d0cece;
  }
  form {
    padding: 20px 25px;
    border: 1px solid #a1a1a1;
    display: flex;
    border-radius: 54px;
    background-color: #fff;
    margin-top: 25px;
    @include maxScreen(md) {
      padding: 10px 20px;
      .form-group {
        height: 40px;
        padding: 6px 8px !important;
      }
      .btn {
        height: 40px !important;
      }
    }

    .form-group {
      border: 1px solid #a1a1a1;
      border-radius: 25px;
      padding: 10px;
      position: relative;
      input {
        border: 0;
        outline: 0;
        margin-left: 35px;
        font-size: 16px;
        @include maxScreen(md) {
          font-size: 13px;
        }
      }
      I {
        padding: 2px 7px;
        color: #ff4137;
        font-size: 20px;
        position: absolute;
      }
    }
    .btn {
      padding: 11px 22px;
      border: 1px solid #c1c1c1;
      height: 47px;
      border-radius: 25px;
      font-weight: 600;
      background-image: linear-gradient(
        to right,
        #ff4137 0,
        #fca336 51%,
        #ff4137 100%
      );
      @include maxScreen(md) {
        font-size: 13px;
      }
    }
  }
}
</style>

<script>
export default {};
</script>