<template>
  <section id="team" class="team">
    <div class="container">
      <div class="head">
        <h5>our creative team</h5>
        <h3>our awesome team</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>
      <div class="row">

        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 card parent shadow">
          <img src="../../assets/img/team-img/member1.png" />
          <h5>rady crishen</h5>
          <p>Company CEO</p>
          <div class="social row">
            <a href="#" class="fa fa-facebook"></a>
            <a href="" class="fa fa-instagram"></a>
            <a href="" class="fa fa-linkedin"></a>
          </div>
        </div>

         <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 card parent shadow">
          <img src="../../assets/img/team-img/member2.png" />
          <h5>rady crishen</h5>
          <p>Company CEO</p>
          <div class="social row">
            <a href="#" class="fa fa-facebook"></a>
            <a href="" class="fa fa-instagram"></a>
            <a href="" class="fa fa-linkedin"></a>
          </div>
        </div>

         <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 card parent shadow">
          <img src="../../assets/img/team-img/member3.png" />
          <h5>rady crishen</h5>
          <p>Company CEO</p>
          <div class="social row">
            <a href="#" class="fa fa-facebook"></a>
            <a href="" class="fa fa-instagram"></a>
            <a href="" class="fa fa-linkedin"></a>
          </div>
        </div>

         <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 card parent shadow">
          <img src="../../assets/img/team-img/member4.png" />
          <h5>rady crishen</h5>
          <p>Company CEO</p>
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

<style lang="scss" scoped>
.team {
  background: url("../../assets/img/svg/striples-bg.svg") no-repeat center
    center;
  background-size: cover;
  .card {
    text-align: center;
    overflow:hidden;
    padding-bottom:8px;
    margin-top: 25px;
    transform: scaleX(.95);
    &:hover {
        .social {
            transform:translateY(0) !important;
        }
        h5:after {
            width:45%;
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
      margin-bottom:0;
      font-size: 18px;
      &:after {
        display: block;
        content: "";
        margin: 13px auto;
        background-color: var(--mainColor);
        height: 1px;
        width: 30%;
        transition:all .4s;
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
    p{
        margin-top: 0;
    }
    .social {
        position:absolute;
        padding:12px;
        right:45px;
        top:0;
        background-color: #FF6699;
        display:flex;
        flex-direction: column;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px; 
        transform:translateY(-128px);
        transition: all .5s;
        a{
            color: #fff;
            margin-bottom:18px;
        }
    }
  }
}
</style>