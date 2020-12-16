<template>
  <div class="feature">
    <div class="container">
    <!-- start header section -->
      <div class="head text-center">
        <h5 class="text-uppercase"> {{featureSec.subTitle}} </h5>
        <h3 class="text-capitalize"> {{featureSec.title}} </h3>
        <p class="lead">
          {{featureSec.para}}
        </p>
      </div>

      <!-- start content section -->
      <div class="row">

        <div v-for="(item, index) in featureSec.content" :key="index" class="shadow part col-md-6 col-lg-4 mt-4">
          <img :src="item.imgUrl" />
          <h4> {{item.title}} </h4>
          <p>
            {{item.para}}
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

          <div class="shadow mt-3">
            <span> 2 </span>
            <div class="info">
              <h3>Register / Login To Our Platform</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda beatae nonic.
              </p>
            </div>
          </div>

          <div class="shadow mt-3">
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

<script>
export default {
  data(){
    return {
      featureSec: {
        subTitle: "our features",
        title: "Why Choose Us",
        para:
          "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Quis Accumsan Nisi Ut Ut Felis Congue Nisl Hendrerit Commodo.",
        content: [
          {
            imgUrl: require('../../assets/img/icons/corporate/1.svg'),
            title: "Technica Support",
            para:
              "Lorem Ipsum Dolor Sit Amet, Conse Ctetur Dolor Adipisicing Elit Ipsum Dolor Sit Amet.",
          },
          {
            imgUrl: require('../../assets/img/icons/corporate/2.svg'),
            title: "Technica Support",
            para:
              "Lorem Ipsum Dolor Sit Amet, Conse Ctetur Dolor Adipisicing Elit Ipsum Dolor Sit Amet.",
          },
          {
            imgUrl: require('../../assets/img/icons/corporate/3.svg'),
            title: "Marketing Base",
            para:
              "Lorem Ipsum Dolor Sit Amet, Conse Ctetur Dolor Adipisicing Elit Ipsum Dolor Sit Amet.",
          }
        
        ],
      },
    }
  }
}
</script>

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