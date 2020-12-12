<template>
  <section class="about">
    <!-- start agency -->
    <div class="container">


      <!-- start about -->
      <div class="row about">
        <div class="col-lg-6 col-sm-12 col-xs-12 mt-5">
          <img class="w-100" :src="aboutSection.img"/>
        </div>
        <div class="art col-lg-6 col-sm-12 col-xs-12 mt-5">
          <h5 class="mb-2">{{aboutSection.subTitle}}</h5>
          <h3>
            {{aboutSection.title}}
          </h3>
          <p>
           {{aboutSection.para}}
          </p>
          <ul class="list-unstyled row">
            <li v-for="(item, index) in aboutSection.playList" :key="index" class="col-md-6 col-sm-12 col-xs-12">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
              {{item}}
            </li>
            <!--
            // <li class="col-md-6 col-sm-12 col-xs-12">
            //   <i class="fa fa-check-square-o" aria-hidden="true"></i>
            //   Advanced Caching
            // </li>
            // <li class="col-md-6 col-sm-12 col-xs-12">
            //   <i class="fa fa-check-square-o" aria-hidden="true"></i>
            //   24/7 Expert Support
            // </li>
            // <li class="col-md-6 col-sm-12 col-xs-12">
            //   <i class="fa fa-check-square-o" aria-hidden="true"></i>
            //   Managed Sucre Backups
            // </li>
            // <li class="col-md-6 col-sm-12 col-xs-12">
            //   <i class="fa fa-check-square-o" aria-hidden="true"></i>
            //   Managed Sucre Backups
            // </li>
            // <li class="col-md-6 col-sm-12 col-xs-12">
            //   <i class="fa fa-check-square-o" aria-hidden="true"></i>
            //   Optimized Stack
            // </li>
            -->
          </ul>
        </div>
      </div>
      <!--end about -->
    </div>

    <!-- end agency -->
  </section>
</template>


<style lang="scss" scoped>




@import "../../GlobalRules/scss/mainRules.scss";



.about {
  padding: 2em 0;
  .art {
    h5 {
      font-weight: bold;
      display: inline-block;
      background-image: linear-gradient(135deg, #846ff4 0%, #f17674 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-image: linear-gradient(35deg, #17ead9 0%, #6078ea 100%);
      font-size: 15px;
      letter-spacing: 1px;
    }
    h3 {
      font-size: 24px;
      font-weight: 600;
      margin: 14px 0;
      color: #000;
      font-family: var(--mainFont);
    }
    p {
      color: #888;
    }
    ul {
      li {
          margin-top: 7px;
          font-weight: 600;
        i {
          margin-right: 5px;
          margin-top: 9px;
          color: var(--mainColor);
          font-size: 17px;
        }
      }
      @include maxScreen(md) {
        li {
          margin-bottom: 7px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data(){
    return {
      aboutSection:{
        img: require('@/assets/img/core-img/digital-4.png'),
        subTile:"WORKING COSELY TOGEATHE",
        title: "Our platform takes away the hard process of creating your website",
        para:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Suscipit Eum Illum Tempora? Ducimus Eum Culpa Voluptates Dolorem Dolorum Et Sit Nisi, Mollitia Animi Porro Fuga Sequi, Molestias Repellat Excepturi Nobis Eum Culpa Voluptates Dolorem Dolorum Et.",
        playList:[
          " Managed Sucre Backups",
          "Advanced Caching",
          "24/7 Expert Support",
          "Managed Sucre Backups",
          "Optimized Stack",
          "Managed Sucre Backups"
        ]
      }
    }
  }
}
</script>