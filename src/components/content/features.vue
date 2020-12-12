<template>
  <div class="feature">
    <div class="container">
      <div class="head text-center">
        <h5 class="text-uppercase">our features</h5>
        <h3 class="text-capitalize">why choose us</h3>
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>
      <div class="row">
        <div class="shadow part col-md-6 col-lg-4 mt-4">
          <img src="../../assets/img/icons/corporate/1.svg" />
          <h4>Go Live in Minutes</h4>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi
            ut ac cu msan ut, posuere sit Lorem ipsum qu.
          </p>
        </div>
        <div class="shadow part col-md-6 col-lg-4 mt-4">
          <img src="../../assets/img/icons/corporate/2.svg" />
          <h4>Go Live in Minutes</h4>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi
            ut ac cu msan ut, posuere sit Lorem ipsum qu.
          </p>
        </div>

        <div class="shadow part col-md-6 col-lg-4 mt-4">
          <img src="../../assets/img/icons/corporate/3.svg" />
          <h4>Go Live in Minutes</h4>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi
            ut ac cu msan ut, posuere sit Lorem ipsum qu.
          </p>
        </div>
      </div>

      <div class="row feat-column">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="shadow mt-2">
            <span> 1 </span>
            <div class="info">
              <h3>Register / Login To Our Platform</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda beatae nonic.
              </p>
            </div>
          </div>

          <div class="shadow mt-2">
            <span> 2 </span>
            <div class="info">
              <h3>Register / Login To Our Platform</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda beatae nonic.
              </p>
            </div>
          </div>

          <div class="shadow mt-2">
            <span> 3 </span>
            <div class="info">
              <h3>Register / Login To Our Platform</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda beatae nonic.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <img
            src="../../assets/img/core-img/digital-4.png"
            class="img-fuild"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../GlobalRules/scss/mainRules.scss";

.feature {
  background: url("../../assets/img/svg/ico-about-bg.svg") no-repeat center
    center;
  background-size: cover;
  padding: 60px 0;
  background-color: #f9f9f9;
  .head {
    h5 {
      font-size: 18px;
      font-family: var(--mainFont);
      background-clip: text;
      background-image: var(--mainBgColor);
    }
    h3 {
      letter-spacing: 1px;
      margin: 14px 0;
    }
  }
  .part {
    padding: 40px 30px 25px;
    transform: scaleX(0.96);
    background-color: #fff;
    img {
      padding: 0 !important;
      margin-bottom: 20px;
    }
    h4 {
      font-size: 21px;
      text-transform: capitalize;
    }
  }
  .feat-column {
    padding: 35px 25px 25px;
    @include maxScreen(xs) {
      padding: 35px 0 25px;
    }
    .shadow {
      padding: 25px;
      position: relative;
      background-color: #fff;
      margin-top:25px;
      .info {
        margin-left: 70px;
        h3 {
          font-size: 22px;
        }
        P{
          margin-top:13px;
          line-height:1.9;

        }
      }
      span {
        border-radius: 50%;
        background-color: var(--mainColor);
        display: inline-block;
        width: 50px;
        color: #fff;
        overflow: hidden;
        text-align: center;
        line-height: 50px;
        height: 50px;
        position: absolute;
        left: 27px;
        top: 27px;
      }
    }
  }
}
</style>