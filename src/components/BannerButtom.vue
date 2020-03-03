<template>
  <div class="banner p-head">
    <div class="container">
      <div class="row text-center">
        <div
          class="parent col-md-4 col-lg-4 col-sm-12 col-xs-12"
          :key="index"
          v-for="(item, index) in bannerBottom"
        >
          <div class="control" v-if="$route.name === 'Dashboard'">
            <i @click="deleteItem(index, item)" class="fa fa-close mb-1"></i>
            <i @click="clickme(item, index)" class="fa fa-edit"></i>
          </div>
          <i :class="item.myIcon" class="pt-2 pb-2 mt-4"></i>
          <h3 class="text-capitalize">{{item.title}}</h3>
          <p class="mt-2">{{item.para}}</p>
        </div>
      </div>
      <div class="edit" v-if="$route.name === 'Dashboard'">
        <!-- add a new item  -->
        <button @click="onClick" class="btn add">Add Item</button>
        <form class="form add" id="add" @submit.prevent="onAddItem">
          <div class="form-group">
            <input
              class="form-control mt-0"
              type="text"
              placeholder="Enter font-aweome ex: fa fa-instagram"
              @blur="$v.addItem.myIcon.$touch()"
              v-model="addItem.myIcon"
              :class="{ 'valid': !$v.addItem.myIcon.$invalid, 'error': $v.addItem.myIcon.$error } "
            />
            <p
              v-if="!$v.addItem.myIcon.required"
              class="text-capitalize"
            >this field dont must be empty</p>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              @blur="$v.addItem.title.$touch()"
              :class="{ 'valid': !$v.addItem.title.$invalid, 'error': $v.addItem.title.$error } "
              placeholder="Enter Title"
              v-model="addItem.title"
            />
            <p
              v-if="!$v.addItem.title.required"
              class="text-capitalize"
            >this field dont must be empty</p>
          </div>
          <div class="form-group">
            <textarea
              @blur="$v.addItem.para.$touch()"
              :class="{ 'valid': !$v.addItem.para.$invalid, 'error': $v.addItem.para.$error } "
              placeholder="type a new Paragraph"
              class="form-control"
              v-model="addItem.para"
            ></textarea>
            <p
              v-if="!$v.addItem.para.required"
              class="text-capitalize"
            >this field dont must be empty</p>
          </div>
          <button :disabled="$v.addItem.$invalid" class="btn btn-primary" type="submit">Add Item</button>
        </form>

        <!-- update item  -->
        <form @submit.prevent="onUpdateItem" id="update" class="form">
          <div class="form-group">
            <input
              v-model="updateItem.myIcon"
              @blur="$v.updateItem.myIcon.$touch()"
              type="text"
              class="form-control"
              placeholder="font-awesome Ex:fa fa-exp..."
              :class=" {'valid': !$v.updateItem.myIcon.$invalid, 'error': $v.updateItem.myIcon.$error }"
            />
            <p v-if="!$v.updateItem.myIcon.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <input
              v-model="updateItem.title"
              @blur="$v.updateItem.title.$touch()"
              class="form-control"
              type="text"
              placeholder="Enter Title"
              :class=" {'valid': !$v.updateItem.title.$invalid, 'error': $v.updateItem.title.$error }"
            />
            <p v-if="!$v.updateItem.title.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <textarea
              v-model="updateItem.para"
              @blur="$v.updateItem.para.$touch()"
              :class=" {'valid': !$v.updateItem.para.$invalid, 'error': $v.updateItem.para.$error }"
              class="form-control"
            ></textarea>
            <p v-if="!$v.updateItem.para.required">this field dont must be empty</p>
          </div>
          <div class="form-group">
            <input
              class="btn btn-primary"
              type="submit"
              :disabled="$v.updateItem.$invalid"
              value="Update Item"
            />

          </div>
        </form>
      </div>
    </div>
    <transition name="fade">
      <div
      id="alert"
        v-if="currentMsg"
        class="fixed alert"
        :class="this.currentMsg === this.Message.conflict? 'alert-warning': 'alert-success'"
      >{{currentMsg}}</div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 10px;
  width: 40%;
  margin: auto;
  z-index: 90;
  left: 32%;
  text-align: center;
  text-transform: capitalize;
}

.banner {
  .parent {
    h3 {
      font-size: 19px;
      font-weight: 600;
      letter-spacing: 2px;
      padding: 15px 0 8px;
    }
    & > i {
      font-size: 2em;
    }
    .control {
      position: absolute;
      right: 0;
      top: 0;
      padding: 13px;
      display: flex;
      flex-direction: column;
      i {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: #ccc;
      }
    }
  }
  .edit {
    position: relative;
    width: 48%;
    margin: auto;
    & > .btn {
      padding: 14px;
      margin: auto;
      background-color: #333;
      width: 300px;
      font-weight: 600;
      color: #fff;
      margin-top: 25px;
      display: block;
    }
    .form {
      padding: 55px;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
      margin-top: 25px;
      display: none;
      .form-control {
        height: 43px;
        display: block;
        width: 100%;
        margin-top: 18px;
        &::placeholder {
          color: #999;
          text-transform: capitalize;
        }
      }
      .btn-primary {
        margin: auto;
        display: block;
        padding: 8px 55px;
        margin-top: 29px;
      }
    }
  }
}
</style>

<script>
import db from "../firebaseInit.js";

import { required } from "vuelidate/lib/validators";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

export default {
  data() {
    return {
      bannerBottom: [
        // { myIcon: "fa fa-fort-awesome fa-2x", title: "statistics", para:"Vestibulum ante ipsum primis in faucibus orci luctus eted ultrices posuere Curae primis in faucibus luctus eted."},
        // { myIcon: "fa fa-key fa-2x", title: "security", para:"  "},
        // { myIcon: "fa fa-tasks fa-2x", title: "presentation", para:"Vestibulum ante ipsum primis in faucibus orci luctus eted ultrices posuere Curae primis in faucibus luctus eted."},
      ],
      addItem: {
        myIcon: null,
        title: null,
        para: null
      },
      updateItem: {
        myIcon: "",
        title: "",
        para: ""
      },
      toUpdate: {
        itemId: null,
        Mindex: null
      },
      Message: {
        addItem: "the addition is Done",
        update: "the updation is Done",
        delete: "you deleted it",
        conflict: "happened conflict . please try again"
      },
      currentMsg: null
    };
  },
  validations: {
    addItem: {
      myIcon: {
        required
      },
      title: {
        required
      },
      para: {
        required
      }
    },
    updateItem: {
      myIcon: {
        required
      },
      title: {
        required
      },
      para: {
        required
      }
    }
  },
  methods: {
    deleteItem(index, item) {
      db.collection("bannerBtn")
        .doc(item.id)
        .delete()
        .then(() => {
          this.bannerBottom.splice(index, 1);
          this.currentMsg = this.Message.delete;
          this.changed()
        })
        .catch(error => {
          console.log(error);
          this.currentMsg = this.Message.conflict;
          this.changed();
        });
    },
    onAddItem() {
      db.collection("bannerBtn")
        .add(this.addItem)
        .then(() => {
          this.bannerBottom.push(this.addItem);
          this.currentMsg = this.Message.addItem;
          this.changed()
        })
        .catch(error => {
          console.log(error.response);
          this.currentMsg = this.Message.conflict;
          this.changed();
        });
    },
    clickme(item, index) {
      console.log("welcome");
      $("#update").slideToggle();
      $("html, body").animate(
        {
          scrollTop: $("#update").offset().top
        },
        1000
      );
      this.toUpdate.itemId = item.id;
      this.toUpdate.Mindex = index;
      console.log(this.toUpdate.Mindex);
      console.log(this.toUpdate.itemId);
    },
    onUpdateItem() {
      db.collection("bannerBtn")
        .doc(this.toUpdate.itemId)
        .update(this.updateItem)
        .then(() => {
          this.bannerBottom.splice(this.toUpdate.Mindex, 1, this.updateItem);
          this.currentMsg = this.Message.update;
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClick() {
      $("#add").slideToggle();
    },
    changed() {
      alert("fire changed method")
      // let mydiv = document.querySelector("#alert");
      $("#alert").delay(1000).fadeOut(700)
    }
  },
  mounted() {
    db.collection("bannerBtn")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let items = doc.data();
          items.id = doc.id;
          // console.log(items.id)
          this.bannerBottom.push(items);
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>