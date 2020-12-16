<template>
  <div class="row">
    <div
      v-for="(item, index) in content"
      :key="index"
      class="col-lg-4 col-md-6 col-sm-12 shadow"
    >
      <img :src="item.imgUrl" />
      <div class="info">
        <h4>{{ item.title }}</h4>
        <p>
          {{ item.para }}
        </p>
      </div>
      <span></span>
      <i class="fa fa-long-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style lang="scss" scoped>
.shadow {
  padding: 35px 15px 20px;
  transform: scalex(0.95);
  margin-top: 20px;
  img {
    width: 35px;
    height: 35px;
    position: absolute;
    margin: 10px;
  }
  .info {
    margin-left: 75px;
    h4 {
      font-size: 21px;
      text-transform: capitalize;
    }
    p {
      color: #999;
    }
  }
  span {
    position: absolute;
    bottom: 0;
    right: 0;
    border-left: 90px solid transparent;
    border-bottom: 80px solid #2ec8a6;
  }
  i {
    position: absolute;
    right: 14px;
    bottom: 10px;
    color: #fff;
    font-size: 22px;
  }
}
</style>