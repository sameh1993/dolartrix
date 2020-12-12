<template>
  <div class="agency">
    <div class="row">

      <div v-for="(card, index) in agencSection" :key="index" class="card col-md-6 col-lg-4 col-xs-12 col-sm-12">
        <img :src="card.img" />
        <h4> {{card.title}} </h4>
        <p> {{card.para}} </p>
        <ul class="list-unstyled">
          <li v-for="(item, index) in card.playList" :key="index">
            <i class="fa fa-check check-mark-icon-font"></i>
            {{item}}
          </li>
          <!--
          <li>
            <i class="fa fa-check check-mark-icon-font"></i>
            All PHP Apps Supported
          </li>
          <li>
            <i class="fa fa-check check-mark-icon-font"></i>
            All PHP Apps Supported
          </li>
          -->
        </ul>
      </div>

<!--
      <div class="card col-md-6 col-lg-4 col-xs-12 col-sm-12">
        <img src="../../assets/img/features/1.png" />
        <h4>Simplicity And Choice</h4>
        <p>Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit.</p>
        <ul class="list-unstyled">
          <li>
            <i class="fa fa-check check-mark-icon-font"></i>
            All PHP Apps Supported
          </li>
          <li>
            <i class="fa fa-check check-mark-icon-font"></i>
            Innovative Control Panel
          </li>
          <li>
            <i class="fa fa-check check-mark-icon-font"></i>
            Unlimited Applications
          </li>
        </ul>
      </div>

      // <div class="card col-md-6 col-lg-4 col-xs-12 col-sm-12">
      //   <img src="../../assets/img/features/1.png" />
      //   <h4>Simplicity And Choice</h4>
      //   <p>Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit.</p>
      //   <ul class="list-unstyled">
      //     <li>
      //       <i class="fa fa-check check-mark-icon-font"></i>
      //       All PHP Apps Supported
      //     </li>
      //     <li>
      //       <i class="fa fa-check check-mark-icon-font"></i>
      //       Unlimited Applications
      //     </li>
      //     <li>
      //       <i class="fa fa-check check-mark-icon-font"></i>
      //       Innovative Control Panel
      //     </li>
      //   </ul>
      // </div>

      -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.agency {
  padding: 30px 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2),
    -10px -10px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-130px);
  background: #fff;
  .card {
    position: relative;
    padding-left: 92px;
    border: 0;
    line-height: 1.8;
    font-size: 14px;
    margin-top: 25px;
    border-radius: 6px;

    img {
      position: absolute;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      left: 5px;
    }
    h4 {
      font-size: 19px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    p {
      line-height: 1.6;
      color: #888;
    }
    ul {
      li {
        font-weight: 600;
        margin-top: 3px;
        i {
          color: #18d7a5;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      agencSection: [
        {
          img: `~/assets/img/feature/1.png`,
          title: "Simplicity And Choice",
          para: "All PHP Apps Supported",
          playList: [
              "All PHP Apps Supported",
              "Unlimited Applications",
              "Unlimited Applications"
          ]
        },
        {
          img: `~/assets/img/feature/2.png`,
          title: "Simplicity And Choice",
          para: "All PHP Apps Supported",
          playList: [
              "All PHP Apps Supported",
              "Innovative Control Panel",
              "Unlimited Applications"
          ]
        },
        {
          img: `~/assets/img/feature/3.png`,
          title: "Simplicity And Choice",
          para: "All PHP Apps Supported",
          playList: [
              "All PHP Apps Supported",
              "Unlimited Applications",
              "Innovative Control Panel"
          ]
        }
      ],
    };
  },
};
</script>