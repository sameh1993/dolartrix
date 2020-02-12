<template>
  <div class="news p-head">
    <div class="container">
      <div class="head">
        <h2>
          our latest
          <strong>news blog</strong>
        </h2>
      </div>
      <div class="row">
        <div
          class="content col-md-6 col-sm-12 col-xs-12 mt-4"
          v-for="(item, index) in blogItems"
          :key="index - 1"
        >
          <div class="row">
            <div class="col-md-3 col-col-sm-12 col-xs-12 text-right pb-2">
              <div class="row">

                <div class="calender xs-text-center text-right col-md-12 col-sm-4 col-xs-4">
                  <i class="fa fa-calendar d-block mt-3"></i>
                  <span class="mt-1">{{item.calender}}</span>
                </div>

                <div class="comment text-right xs-text-center col-md-12 col-sm-4 col-xs-4">
                  <i class="fa fa-comment d-block mt-3"></i>
                  <span class="mt-1">{{item.countComment}} comments</span>
                </div>

                <div class="calender text-right xs-text-center col-md-12 col-sm-4 col-xs-4">
                  <i class="fa fa-thumbs-up d-block mt-3"></i>
                  <span class="mt-1">{{item.likes}}</span>
                </div>
              </div>
            </div>
            <div class="col-md-9 col-col-sm-12 col-xs-12">
              <div class="img">
                <img src="../assets/images/s2.jpg" class="img-fluid w-100" />
              </div>
              <div class="info">
                <h4 class="text-capitalize mb-1 mt-2">{{item.title}}</h4>
                <p>{{item.para}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  .content {
    i {
      color: var(--info);
      margin-bottom: 6px;
    }
    span {
      padding: 7px;
      margin-bottom: 10px; 
      font-size: 15px;
      font-weight: 600;
      color: #444;
      text-transform: capitalize;
      position: relative;
      &:after {
        position: absolute;
        display:inline-block;
        height: 1px;
        width: 50px;
        background:#444;
        content: "";
        bottom: 0;
        right:0px;
      }

    }
    .info {
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      blogItems: [
        {
          calender: "march 8",
          countComment: "3",
          likes: "3452",
          myImg: "../assets/images/s1.jpg",
          title: "Pellentesque Habitant Morbi Sed Tristique Senectus Et",
          para:
            "Donec justo ante, maximus et aliquam et ac purus, elementum. Nam eget ante ac velit laoreet sodale vel nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed quam nibh. In sed nisi"
        },
        {
          calender: "march 4",
          countComment: "s",
          likes: "3452",
          myImg: "../assets/images/s2.jpg",
          title: "Pellentesque Habitant Morbi Sed Tristique Senectus Et",
          para:
            "Donec justo ante, maximus et aliquam et ac purus, elementum. Nam eget ante ac velit laoreet sodale vel nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed quam nibh. In sed nisi"
        },
        {
          calender: "march 6",
          countComment: "6",
          likes: "3452",
          myImg: "../assets/images/s3.jpg",
          title: "Pellentesque Habitant Morbi Sed Tristique Senectus Et",
          para:
            "Donec justo ante, maximus et aliquam et ac purus, elementum. Nam eget ante ac velit laoreet sodale vel nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed quam nibh. In sed nisi"
        },
        {
          calender: "march 3",
          countComment: "9",
          likes: "3452",
          myImg: "../assets/images/s4.jpg",
          title: "Pellentesque Habitant Morbi Sed Tristique Senectus Et",
          para:
            "Donec justo ante, maximus et aliquam et ac purus, elementum. Nam eget ante ac velit laoreet sodale vel nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed quam nibh. In sed nisi"
        }
      ]
    };
  }
};
</script>