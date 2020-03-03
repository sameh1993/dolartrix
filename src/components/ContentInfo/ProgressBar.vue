<template>
  <div class="progress child form">
      <i class="fa fa-edit d-block"></i>
    <form class="form">
      <div class="prog" v-for="(nProg, index) in newProg" :key="index">
        <div class="row mt-2">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <input type="text" @keyup="pushingData" v-model="nProg.label" class="form-control" />
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <input type="text" @keyup="pushingData"  class="form-control"  v-model="nProg.prog" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 110%;;
  padding: 15px 18px;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
  .fa-edit {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 17px;
  }
  form {
    .prog {
      margin-top: 30px;
      input {
        height: 25px;
        margin-top: 15px;
        padding-left: 10px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      newProg: [
        { label: "Online marketing", prog: "75%" },
        { label: "FINANCIAL CONSULTING", prog: "90%" },
        { label: "CREATIVE PROJECTS", prog: "65%" },
        { label: "FUTURE ENHANCEMENT", prog: "80%" },
        { label: "24/7 SUPPORT", prog: "88%" }
      ]
    };
  },
methods:{
    pushingData(){
        this.$emit("pushData", this.newProg)
    }
}
};
</script>