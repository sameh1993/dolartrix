<template>
  <div class="customer">
    <div class="container">
      <div class="head">
        <h2>
          our
          <strong>customer feedback</strong>
        </h2>
      </div>
      <div class="row">
        <div
          class="parent col-md-4 col-sm-12 col-xs-12 mt-4"
          :key="index - 1"
          v-for="(item, index) in customFeed"
        >
          <div class="row">
            <div class="img col-4 text-center">
              <img v-bind:src="item.myImg" class="img-fliud w-100" />
            </div>
            <div class="col-8">
              <h3 class="text-capitalize mt-3">{{item.cusName}}</h3>
              <p class="mt-1 text-capitalize">{{item.type}}</p>
            </div>
          </div>
          <p class="mt-3">{{ item.para }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customer {
  padding: 5em 0;
  background-color: #f8f8f8;
  .parent {
    img {
      border-radius: 50%;
    }
    h3 {
      font-weight: 600;
      letter-spacing: 1px;
    }
    p {
      line-height: 2;
      font-size: 15px;
      letter-spacing: 1px;
    }
  }
}
</style>

<script>
export default {
  methods: {
    dataShar: function() {
      this.$emit("sharing", this.customFeed);
    }
  },
  data() {
    return {
      customFeed: [
        {
          myImg: require("../assets/images/team1.jpg"),
          cusName: "johnson",
          type: "customer",
          para:
            "Consequat sapien ute leo cursus sed rhoncus. Nullam dui mi, vulputate ac metus semper. Nullam dui mi"
        },
        {
          myImg: require("../assets/images/team2.jpg"),
          cusName: "johnson",
          type: "customer",
          para:
            "Consequat sapien ute leo cursus sed rhoncus. Nullam dui mi, vulputate ac metus semper. Nullam dui mi"
        },
        {
          myImg: require("../assets/images/team3.jpg"),
          cusName: "johnson",
          type: "customer",
          para:
            "Consequat sapien ute leo cursus sed rhoncus. Nullam dui mi, vulputate ac metus semper. Nullam dui mi"
        }
      ]
    };
  }
};
</script>