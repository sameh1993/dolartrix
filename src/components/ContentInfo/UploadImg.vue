<template>
  <div class="upload child">
    <i class="fa fa-edit"></i>
    <form class="form" @submit.prevent="editImage">

      <div class="form-group">
        <label class="mt-4" for="Image text-capitalize">choose a new image</label>
        <input id="Image" class="" type="file" @change.prevent="uploadFile($event)" />
        
      </div>

      <button class="btn btn-primary"> Send </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  .child {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 15px;

    .form {
      padding: 17px;
      label {
        margin-top: 25px;
        color: #fff;
        text-transform:capitalize;
      }
      input {
        color: #fff;
        text-transform:capitalize
      }
      .btn-primary {
        padding: 5px 55px;
        margin-top: 19px;
      }
      textarea {
        color: #252525;
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
    margin-right: 12px;
  }
}
</style>

<script>
import db from "../../firebaseInit";

import fb from "firebase";

export default {
  data() {
    return {
      urlImg: null
    };
  },
  methods:{
    uploadFile(e) {
    let file = e.target.files[0];
    console.log(file.name)
    fb.storage()
      .ref(file.name)
      .put(file);

    fb.storage()
      .ref()
      .child(file.name)
      .getDownloadURL()
      .then(url => {
        // document.getElementById("image").src = url
        this.urlImg = url;
        console.log(this.urlImg);
        this.$emit("pashingUrl", this.urlImg)
      })
      .catch(error => {
        console.log(error);
      });
  },
  editImage() {
    db.collection("information")
      .doc("2oEVElMQ5FJPW0UcqLRJ")
        .update({
          myImg : this.urlImg
        })
        .then(() => {
          alert("the updatetion is Done");
        })
        .catch(error => {
          console.log(error);
        });
  }
  }
};
</script>