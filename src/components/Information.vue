<template>
  <div class="info p-head">
    <div class="container">
      <div class>
        <div class="head">
          <h2 class="mt-2">
            Latest
            <strong>Statistical Information</strong>
          </h2>
        </div>
        <div class="row">
          <div class="parent col-lg-4 col-md-12 col-xs-12 mt-4">
            <div class="content">
              <p>{{information.para}}</p>
              <button class="btn btn-primary mt-3">Read More</button>
            </div>
            <!-- edit para comp -->
            <transition name="fade">
              <EditParagrapg
                v-if="$route.name == 'Dashboard' "
                @sharePara="getPara"
                :infoPara="information.para"
              />
            </transition>
          </div>
          <div class="parent col-lg-4 col-md-6 col-xs-12 mt-4">
            <div class="content">
              <img :src="information.myImg" class="img-fluid w-100" />
            </div>
            <!-- THIS IS EDIT IMAGE COMPONENT  -->
            <transition name="fade">
              <EditImage v-if="$route.name == 'Dashboard' " @pashingUrl="getUrl" />
            </transition>
          </div>

          <div class="parent col-lg-4 col-md-6 col-xs-12 mt-4">
            <div class="content">
              <div
                class="progress-inner"
                v-for="(item, index) in information.progress"
                :key="index"
                :class="$route.name === 'Dashboard'? 'progr-innner': ''"
              >
                <label class>{{item.label}}</label>
                <div class="progress mb-4">
                  <span
                    class="progress-bar"
                    :style=" 'width:' + item.prog + '; background: '+ item.color "
                  ></span>
                </div>
              </div>
            </div>

            <progressBar v-if="$route.name == 'Dashboard' " @pushData="getData" />
          </div>
        </div>

        <!-- <EditImage /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  background-color: #222;
  padding: 4em 0;
  color: #b6b6b6;
  .content {
    position: relative;
    height: 100%;
  }
  img {
    height: 100% !important;
    width: 100%;
  }
  .progr-innner {
    margin-top: 13px;
  }

  .opacity-2 {
    opacity: 0.5;
  }
  p {
    text-transform: capitalize;
    line-height: 2;
  }
  .btn {
    padding: 5px 30px;
    background-color: transparent;
    border: 1px solid #fff;
  }
  .progress-inner {
    label {
      font-size: 16px;
      text-transform: uppercase;
    }
    .progress {
      height: 10px;
    }
    &:not(:first-child) {
      margin-top: 29px;
    }
  }
  .opacity {
    opacity: 0.2;
    transition: opacity 0.4s ease-in-out;
  }
}
</style>


<script>
import db from "../firebaseInit.js";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

import EditParagrapg from "./ContentInfo/EditPara.vue";
import EditImage from "./ContentInfo/UploadImg.vue";
import progressBar from "./ContentInfo/ProgressBar.vue";

export default {
  methods: {
    Sharing() {
      this.$emit("sameh", this.progress);
    },
    getUrl(url) {
      this.information.myImg = url;
    },
    getPara(newPara) {
      this.information.para = newPara;
    },
    getData(newProg) {
      this.information.progress = newProg;
    }
  },
  data() {
    return {
      information: {
        // para:
        //   "Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Curae Integer Ullati Mcorper Metus Et Urna Maximus, Ac Maximus Estlen Blandit. Nam Pretium Tempor Mi, A Sed Fringilla Leo Imperdiet Intre. Integer Lacinia Et Ultricies Turpis. Non Euismod Lectus Tincidunt Vitae. Quisqe Non Facilisis Ante.",
        // myImg: require("../assets/images/stats1.jpg"),
        // progress: [
        //   { label: "Online marketing", prog: "75%", color: "var(--blue)" },
        //   { label: "FINANCIAL CONSULTING", prog: "90%", color: "var(--info)" },
        //   { label: " CREATIVE PROJECTS", prog: "65%", color: "var(--warning)" },
        //   { label: "FUTURE ENHANCEMENT", prog: "80%", color: "var(--primary)" },
        //   { label: "24/7 SUPPORT", prog: "88%", color: "var(--success)" }
        // ]
      }
    };
  },
  mounted() {
    db.collection("information")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data();
          // console.log(item);
          this.information = item;
        });
      });
    $(".fa-edit")
      .siblings(".form")
      .slideToggle(700);
    $(".fa-edit").click(function() {
      $(this)
        .siblings("form")
        .slideToggle(700);

      $(this).toggleClass("active");

      $(this)
        .parents(".parent")
        .find(".content")
        .toggleClass("opacity-2");

      // if ($(this).hasClass("active")) {
      //   $(this)
      //     .parents(".parent")
      //     .find(".content")
      //     .css("opacity", ".2");
      // }
    });
  },
  components: {
    EditParagrapg,
    EditImage,
    progressBar
  }
};
</script>