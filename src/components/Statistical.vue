<template>
  <div class="statis p-head bg-info">
    <div class="container">
      <div class="head">
        <h2>
          Our
          <strong>Statistical Growth</strong>
        </h2>
      </div>
      <div class="content row">
        <div class="col-lg-8 col-sm-12 col-xs-12">
          <div class="row">
            <div class="contentStats col-md-3 col-sm-6 col-xs-12 mt-4" :key="index" v-for="(item, index) in stats">
              <i class="mt-4 mb-3" :class="item.myIcon"></i>
              <h2 class="mb-2">{{item.counter}}</h2>
              <p class="text-capitalize">{{item.para}}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-xs-12 mt-4">
          <p
            class="lead"
          >Vestibulum ante ipsum int primis faucibus orci luctus et ultrices posue elit</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules.scss";
.statis {
  .head {
    @include minScreen(xs) {
      h2 {
        font-size: 25px;
        text-align :center;
        strong {
          font-size: 35px;

        }
      }
    }
  }
  .content {
    .contentStats {
      @include minScreen(xs){
        text-align:center;

      }
    }
    p {
      font-weight: 600;
      letter-spacing: 1px;
    }
    .lead {
      text-align: center;
      display: flex;
      align-content: center;
      padding: 34px 10px;
      border: 7px solid #888;
    }
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      stats: [
        { myIcon: "fa fa-credit-card fa-2x", counter: 1685, para: "Partners" },
        { myIcon: "fa fa-users fa-2x", counter: 1952, para: "customers" },
        { myIcon: "fa fa-dollar fa-2x", counter: 1400, para: "projects" },
        { myIcon: "fa fa-users fa-2x", counter: 400, para: "employees" }
      ]
    };
  }
};
</script>