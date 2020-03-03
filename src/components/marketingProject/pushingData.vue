<template>
  <div class="pushing">
    <form class="marketForm form" @submit.prevent="onPushingData">
      <div class="form-group">
        <input
          type="text"
          required
          placeholder="Enter font-awesome Ex: fa fa-instagram"
          class="form-control"
          v-model="newItem.myIcon"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="newItem.title"
          required
          placeholder="Enter your title"
          class="form-control"
        />
      </div>
      <input type="submit" value="Send" class="btn btn-primary mt-3" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.edit {
  .form {
    padding: 42px 61px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    input::placeholder {
      color: #b6b6b6;
    }
    input[type="submit"] {
      padding: 8px 40px;
      margin-top: 9px;
    }
  }
}
</style>

<script>
import db from "../../firebaseInit.js";

export default {
  data() {
    return {
      newItem: {
        title: null,
        myIcon: null
      },
      statePushing: this.statePush
    }
  },
  props:["statePush", "DataEditItem"],
  methods:{
    onPushingData(){
      if (this.statePush === 'add') {
        db.collection("marketingProduct").add(this.newItem)
        .then(() => {
          this.$emit("pushNewItem", this.newItem)
          alert("The Addition is Done")
        })
        .catch(error => {
          console.log(error)
        })
      } else if (this.statePush === 'update') {
        db.collection("marketingProduct").doc(this.DataEditItem).update(this.newItem)
        .then(() => {
          this.$emit("pushNewItem", this.newItem)
          alert("The Addition is Done")
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>