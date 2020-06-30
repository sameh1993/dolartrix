<template>
  <div class="footer-top p-head">
    <div class="container">
      <div class="row">
        <div class="content col-lg-3 col-sm-6 col-xs-12" :key="index" v-for="(item, index) in serivces">
          <div class="title row mt-2 mb-3 xs-text-center">
            <i :class="item.myIcon" class="mr-3 ml-3"></i>
            <h4>{{item.heading}}</h4>
          </div>
          <p class="">{{item.para}}</p>
        </div>
      </div>
    </div>


   
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules";
.footer-top {
    .row {    

         @include minScreen(xs){
            & > div {
              h4 {
                font-size: 18px;
                font-weight: 600;
              }
               i {
                 font-size: 20px;
               }
            }
        }
    }
    .content {
       
        h4{
            text-transform: capitalize;
            letter-spacing: 2px;
            font-weight: 500;
            font-size: 18px;
            margin-top:3px;
        }
        p{
            padding: 0 3px;
            line-height: 1.8;
            text-transform: capitalize;
            font-size: 15px;
            letter-spacing: 1px;
        }
    }
    
}
</style>

<script>
export default {
   data() {
       return {
           serivces : [
            { myIcon:"fa fa-mobile fa-2x", heading:"mobile apps", para:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices" },
               { myIcon:"fa fa-shield fa-2x", heading:"Security Tips", para:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices" },
               { myIcon:"fa fa-globe fa-2x", heading:"Various Branches", para:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices" },
            { myIcon:"fa fa-phone fa-2x", heading:"24/7 Support", para:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices" },

           ]
       }
   }
}
</script>