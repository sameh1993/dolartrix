<template>
  <div class="marketing p-head">
    <div class="container">
      <div class="head">
        <h2 class="text-capitalize">
          our
          <strong>marketing Product</strong>
        </h2>
      </div>
      <div class="row">
        <div
          class="text-center col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4"
          v-for="(item, index) in myMarket"
          :key="index + 1"
        >
          <div class="control" v-if="$route.name == 'Dashboard' ">
            <i @click="deleteItem(index, item)" class="fa fa-close"></i>
            <i class="fa fa-edit" @click="clickEdit(index, item)" ></i>
          </div>
          <i :class="item.myIcon" class="pt-2 pb-2 icons" :style="'color:' +  item.myColor "></i>
          <h3>{{item.title}}</h3>
        </div>
      </div>
      <div class="edit" v-if="$route.name == 'Dashboard' ">
        <button @click="clickme" class="btn btn-info mt-5 text-capitalize">add new Item</button>

        <transition name="fade">
          <marketingProject @pushNewItem="getNewItem" :DataEditItem="dataItem.myItemid" :statePush="pushState" class="mt-4" />
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marketing {
  position: relative;
  .control {
    position: absolute;
    top: 6px;
    right: 7px;
    i {
      display: block;
      padding: 7px 10px;
      border: 1px solid #333;
      transform: scale(0.8);
      font-weight: 600;
      background: #333;
      color: #f6f6f6;
      transition: all .3s ease-in-out;
      border-radius:2px;
      &:hover {
        background-color: #007BFF;
      }
    }
  }
  .text-center {
    padding: 30px 20px;
    background-color: #f6f6f6;
    transform: scaleX(0.95);
    h3 {
      text-transform: capitalize;
      letter-spacing: 1px;
      margin-top: 10px;
      font-size: 19px;
      letter-spacing: 3px;
      font-weight: 300;
    }
    .icons{
      font-size: 30px;
      font-weight: 300;
    }
  }
  .row > div {
    box-shadow: 3px 3px 8px #d4d3d3;
    
  }
  .edit {
    width: 45%;
    margin: auto;
    .btn-info {
      margin: auto;
      width: 150px;
      display: block;
    }
  }
}
</style>

<script>
import db from "../firebaseInit.js";

import marketingProject from "./marketingProject/pushingData.vue";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

export default {
  components: {
    marketingProject
  },
  data() {
    return {
      myMarket: [
        // {title: "consulting", myIcon: "fa fa-print fa-2x", mycolor: "var(--info)" },
        // {title: "marketing", myIcon: "fa fa-newspaper-o fa-2x", mycolor: "var(--blue)"},
        // {title: "it software", myIcon: "fa fa-unlock fa-2x", mycolor: "var(--primary)" },
        // {title: "cloud tochnology", myIcon: "fa fa-product-hunt fa-2x", mycolor: "var(--success)" }
      ],
      pushState: null,
      dataItem:{
        myIndex: null,
        myItemid: null,
      }
    };
  },
  methods: {
    deleteItem(index, item) {
      db.collection("marketingProduct")
        .doc(item.id)
        .delete()
        .then(() => {
          this.myMarket.splice(index, 1);
          // this.currentMsg = this.Message.delete;
          // this.changed();
        })
        .catch(error => {
          console.log(error);
          // this.currentMsg = this.Message.conflict;
          // this.changed();
        });
    },
    clickme(){
      this.pushState = "add";
      $(".marketForm").fadeToggle()
    },
    clickEdit(index, item) {
      this.dataItem.myIndex = index;
      this.dataItem.myItemid = item.id;
      this.pushState = "update";
      $(".marketForm").fadeToggle()
    },
    getNewItem(getData){
      if(this.pushState === 'add') {
        this.myMarket.push(getData)
      } else if(this.pushState === 'update') {
        console.log(this.dataItem.myIndex)
        this.myMarket.splice(this.dataItem.myIndex, 1, getData);
      }
    }
  },
  mounted() {
    db.collection("marketingProduct")
      .get()
      .then(spanshot => {
        spanshot.forEach(doc => {
          const items = doc.data();
          items.id = doc.id;
          this.myMarket.push(items);
          console.log(items);
        });
      })
      .catch(error => {
        console.log(error);
      });


      $(".marketForm").fadeOut()
  }
};
</script>


