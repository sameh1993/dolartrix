<template>
  <div v-if="$route.name === 'Home'" class="slide">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h5 class="text-capitalize">
            <span></span> Business grow strategy is our mission
          </h5>
          <h2 class="text-capitalize">
            Let’s Create Something new and awesome Togeather
          </h2>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            soluta, dignissimos aut, assumenda dolore totam natus qui cum vel
            omnis voluptates.
          </p>
          <button class="btn btn-primary">contact us</button>

          <button class="btn btn-primary">read more</button>
        </div>
        <div class="img col-lg-6">
          <img class="img-fluid" src="../../assets/img/core-img/about-5.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../GlobalRules/scss/mainRules.scss";

.slide {
  background-color: var(--mainColor);
  overflow: hidden;
  .row {
    justify-content: center;
    height: 100vh !important;
    color: #fff;
    align-items: center !important;
    @include maxScreen(md) {
      height:100vh !important;
      padding-top: 45px;
      div:first-child {
        justify-items: center;
        h5 {
          font-size: 13px;
        }
        p{
          margin: 10px 0; 
        }
        .btn {
          font-size: 13px;
          padding: 8px 25px;
        }
      }
      img {
        display:none
      }
    }
    h5 {
      color: #0cc8ed;
      margin-bottom: 14px;
      span {
        height: 2px;
        width: 35px;
        margin-right:13px;
        display:inline-block;
        background-color: #fff;
        margin-bottom:5px;

      }
    }
    h2 {
      font-size: 40px;
      @include maxScreen(md) {
        font-size: 23px;
      }
    }
    p {
      font-size: 15px;
      margin: 25px 0;
    }
    button {
      border: 1px solid #ccc;
      padding: 11px 30px;
      background-image: linear-gradient(
        to right,
        #21d397 0%,
        #7450fe 50%,
        #21d397 100%
      );
      border-radius: 35px;
      margin-right: 10px;
      text-transform: uppercase;
      display: inline-block;
      &:hover {
        background-image: linear-gradient(
          to right,
          #21d397 100%,
          #7450fe 50%,
          #21d397 0%
        );
      }
      @include maxScreen(md) {
        padding: 7px 13px;
        display:inline-block;
        margin-right: 6px;
      }
    }
  }
}
</style>