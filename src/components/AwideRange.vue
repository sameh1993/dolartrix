<template>
  <div class="range p-head">
    <div class="container">
      <div class="head">
        <h2 class="mb-4">
          A wide Range
          <strong>of Our Serivces</strong>
        </h2>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-12 col-xs-12" :key="index" v-for="(item, index) in rangeSer">
          <div class="img">
            <img :src="item.myImg" class="img-fluid w-100" />
          </div>
          <div class="info">
            <h4 class="text-capitalize mt-2 mt-3">{{item.title}}</h4>
            <p>{{item.para}}</p>
            <button class="btn btn-primary mb-3">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.range {
    .row > div {
        box-shadow: 3px 3px 10px #d4d3d3;
        transform:scalex(.93);
        padding: 0;
    }
    .info {
        padding: 20px 30px;
        background-color: #f8f8f8;
        h4 {
            margin: 7px 0 15px;
            font-weight: 600;
            letter-spacing: 2px;
        }
        p{
            font-size: 15px;
            letter-spacing: 1px;
            text-transform: capitalize;
            margin-bottom: 10px;
            line-height: 2;
        }
    }
}
</style>

<script>
export default {
  data() {
    return {
      rangeSer: [
        {
          myImg: require("../assets/images/s1.jpg"),
          title: "personal business",
          para: "Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui"
        },
        {
          myImg: require("../assets/images/s2.jpg"),
          title: "Trade Marketing",
          para: "Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui"
        },
        {
          myImg: require("../assets/images/s3.jpg"),
          title: "IT Management",
          para: "Onec consequat sapien ut amet leo cursus rhoncus. Nullam dui"
        }
      ]
    };
  }
};
</script>
