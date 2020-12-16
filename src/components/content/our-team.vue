<template>
  <section id="team" class="team">
    <div class="container">

      <!-- start section heading -->
      <div class="head">
        <h5>{{ ourTeam.subTitle }}</h5>
        <h3>{{ ourTeam.title }}</h3>
        <p>
          {{ ourTeam.para }}
        </p>
      </div>

      <!-- start section body -->
      <div class="row">
        <div
          v-for="(item, index) in ourTeam.content"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-12 col-xs-12 card parent shadow"
        >
          <img :src="item.imgUrl" />
          <h5>{{ item.namePerson }}</h5>
          <p>{{ item.jobTitle }}</p>
          <div class="social row">
            <a href="#" class="fa fa-facebook"></a>
            <a href="" class="fa fa-instagram"></a>
            <a href="" class="fa fa-linkedin"></a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      ourTeam: {
        subTitle: "our team",
        title: "Our Awesome Team",
        para:
          "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Quis Accumsan Nisi Ut Ut Felis Congue Nisl Hendrerit Commodo.",
        content: [
          {
            imgUrl: require("../../assets/img/team-img/member1.png"),
            namePerson: "Investment Advise",
            jobTitle: "Company CEO",
          },
          {
            imgUrl: require("../../assets/img/team-img/member2.png"),
            title: "Investment Advise",
            jobTitle: "Company CEO",
          },
          {
            imgUrl: require("../../assets/img/team-img/member3.png"),
            title: "Investment Advise",
            jobTitle: "Company CEO",
          },
          {
            imgUrl: require("../../assets/img/team-img/member4.png"),
            title: "Investment Advise",
            jobTitle: "Company CEO",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.team {
  background: url("../../assets/img/svg/striples-bg.svg") no-repeat center
    center;
  background-size: cover;
  .card {
    text-align: center;
    overflow: hidden;
    padding-bottom: 8px;
    margin-top: 25px;
    transform: scaleX(0.95);
    &:hover {
      .social {
        transform: translateY(0) !important;
      }
      h5:after {
        width: 45%;
      }
    }
    img {
      border-radius: 50%;
      margin: 35px auto 20px;
      width: 80%;
    }
    h5 {
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: capitalize;
      position: relative;
      text-align: center;
      margin-bottom: 0;
      font-size: 18px;
      &:after {
        display: block;
        content: "";
        margin: 13px auto;
        background-color: var(--mainColor);
        height: 1px;
        width: 30%;
        transition: all 0.4s;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 4px;
        border-radius: 50%;
        background-color: var(--mainColor);
        width: 19px;
        height: 19px;
        border: 7px solid #fff;
        left: 46%;
      }
    }
    p {
      margin-top: 0;
    }
    .social {
      position: absolute;
      padding: 12px;
      right: 45px;
      top: 0;
      background-color: #ff6699;
      display: flex;
      flex-direction: column;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      transform: translateY(-128px);
      transition: all 0.5s;
      a {
        color: #fff;
        margin-bottom: 18px;
      }
    }
  }
}
</style>