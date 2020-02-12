<template>
  <div class="about p-head">
    <div class="container">
      <div class="top row">
        <div class="left col-lg-6 col-sm-12 col-xs-12">
          <img src="../assets/images/about.jpg" class="img-fluid w-100" />
        </div>
        <div class="right col-lg-6 col-sm-12 col-xs-12">
          <h4
            class="pt-3 pb-2"
          >Nullam Varius, Est Eu Vulputate Elementum, Tortor Leo Elementum Justo, Ac Viverra Ex.</h4>
          <p
            class="pt-2 text-capitalize"
          >Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere et Curae Integer ullamcorper metus et urna maximus, ac maximus es blandit. Nam pretium tempor mi, a fringilla leo imperdiet intre. Integer lacini dolor ultricies turpis. non euismod lectus tincidunt vitae. Quisqe non facilis ante. Duis luctus id ex eget volutpat. Aliquam iaculis ante urn luctus viverra</p>
        </div>
      </div>
      <div class="advant row pt-4 pb-2">
        <div
          class="col-lg-3 col-sm-6 col-xs-12 mt-3"
          v-for="(item, index) in advant"
          v-bind:key="index"
        >
          <i :class="item.myIcon" class="pt-3 pb-3" :style=" 'color:' + item.myColor"></i>
          <h4 class="pb-2">{{ item.title }}</h4>
          <p>{{ item.myPara }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  .top {
    .right {
      p {
        text-transform: capitalize;
        line-height: 2;
        color: #555;
        margin-top: 12px;
        font-size: 17px;
      }
    }
  }
  .advant {
    padding: 10px 0;
    & > div {
      padding: 15px;
      text-transform: capitalize;
      text-align: center;
      background-color: #f9f9f9;
      transform: scaleX(0.96);
      color: #333;
      h4 {
        text-transform: capitalize;
        letter-spacing: 3px;
        font-size: 21px;
        color: #333;
      }
      p {
        padding: 4px 22px;
        color: #a7a7a7;
        font-size: 15px;
      }
    }
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      myImg: "../assets/images/banner.jpg",
      advant: [
        {
          myIcon: "fa fa-print fa-2x",
          title: "statistics",
          myColor: "var(--info)",
          myPara:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
        },
        {
          myIcon: "fa fa-newspaper-o fa-2x",
          title: "security",
          myColor: "var(--primary)",
          myPara:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
        },
        {
          myIcon: "fa fa-unlock fa-2x",
          title: "presentation",
          myColor: "var(--success)",
          myPara:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
        },
        {
          myIcon: "fa fa-product-hunt  fa-2x",
          title: "presentation",
          myColor: "var(--info)",
          myPara:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
        }
      ]
    };
  },
  created() {
    // sharing data to another components
    this.$emit("Advant", this.advant);
  }
};
</script>
