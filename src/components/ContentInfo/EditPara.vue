<template>
  <div class="editInfo child">
    <i class="fa fa-edit"></i>
    <form class="form" @submit="onUpdatePara">
      <div class="form-group" >
        <label class="text-capitalize" for="para">type a new paragraph</label>
        <textarea
          @blue="newPara.$touch()"
          @keyup="sharingPara"
          id="para"
          rows="5"
          v-model="newPara"
          v-text="infoPara"
          required
          class="form-control"
        ></textarea>
        <input type="submit" value="Edit" class="btn btn-primary" :disabled="$v.$invalid">
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .child {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 15px;
    z-index: 20;
    .form {
      label {
        margin-top: 25px;
        color: #fff;
      }
      .btn-primary {
        padding: 5px 55px;
        margin-top: 19px
      }
      textarea {
        color: #252525;
        display:block;
        width:100%;
      } 
      .btn {
        margin-top: 19px !important; 
      }
    }
  }
  .fa-edit {
    text-align: right;
    float: right;
    margin-bottom: 10px;
    background-color: #ccc;
    padding: 7px;
    border-radius: 2px;
    color: #333;
    font-weight: 600;
  }
</style>


<script>
import db from "../../firebaseInit";

import { required } from "vuelidate/lib/validators";

import jquery from "jquery";
const $ = jquery;
window.$ = $;


export default {
  data() {
    return {
      newPara: this.infoPara
    };
  },
  props: ["infoPara"],
  methods: {
    onUpdatePara() {
      db.collection("information")
        .doc("2oEVElMQ5FJPW0UcqLRJ")
        .update({
          para: this.newPara
        })
        .then(() => {
          alert("the updatetion is Done");
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    sharingPara(){
      this.$emit("sharePara", this.newPara)
    }
  },
  mounted(){

  },
  validations: {
    newPara: {
      required
    }
  }
};
</script>