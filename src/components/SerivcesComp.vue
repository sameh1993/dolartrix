<template>
  <div class="serivces p-head">
    <div class="container">
      <div class="head">
        <h2>
          Serivces
          <strong>we provide</strong>
        </h2>
      </div>

      <div class="row">
        <div class="first col-md-4 col-sm-12 col-xs-12 mt-3 mt-4">
          <div class="row mb-4" :key="index" v-for="(item, index) in serivces" v-show="index <= 2">
            <div class="col-9">
              <h4 class="text-capitalize">{{item.title}}</h4>
              <p>{{item.para}}</p>
            </div>
            <div class="col-3 pt-2 text-center">
              <i :class="item.myIcon" :style="'color:' + item.myColor"></i>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 col-xs-12 mt-4">
          <img src="../assets/images/serv.jpg" class="img-fluid w-100" />
        </div>

        <div class="first col-md-4 col-sm-12 col-xs-12 mt-4">
          <div class="row" :key="index" v-for="(item, index) in serivces" v-show="index > 2">
            <div class="col-3 pt-2 text-center">
              <i :class="item.myIcon" :style="'color:' + item.myColor"></i>
            </div>
            <div class="col-9 pt-2">
              <h4>{{item.title}}</h4>
              <p>{{item.para}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules.scss";

.serivces {
  @include minScreen(xs) {
    .head {
      h2 {
        margin-bottom: 20px;
      }
    }
  }
  .first {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;

    h4 {
      text-transform: capitalize;
      letter-spacing: 2px;
      font-weight: 600;
    }
    p {
      margin-top: 10px;
      text-transform: capitalize;
      line-height: 1.8;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      serivces: [
        {
          myIcon: "fa fa-fort-awesome fa-2x",
          title: "colud computing",
          para: "Vestibulum ante ipsum primis in faucibus orci luctus ipsum",
          myColor: "var(--blue)"
        },
        {
          myIcon: "fa fa-print fa-2x",
          title: "colud computing",
          para: "Vestibulum ante ipsum primis in faucibus orci luctus ipsum",
          myColor: "var(--blue)"
        },
        {
          myIcon: "fa fa-handshake-o fa-2x",
          title: "colud computing",
          para: "Vestibulum ante ipsum primis in faucibus orci luctus ipsum",
          myColor: "var(--danger)"
        },
        {
          myIcon: "fa fa-desktop fa-2x",
          title: "colud computing",
          para: "Vestibulum ante ipsum primis in faucibus orci luctus ipsum",
          myColor: "var(--primary)"
        },
        {
          myIcon: "fa fa-briefcase fa-2x",
          title: "colud computing",
          para: "Vestibulum ante ipsum primis in faucibus orci luctus ipsum.",
          myColor: "var(--success)"
        },
        {
          myIcon: "fa fa-headphones fa-2x",
          title: "colud computing",
          para: "Vestibulum ante ipsum primis in faucibus orci luctus ipsum.",
          myColor: "var(--info)"
        }
      ]
    };
  }
};
</script>