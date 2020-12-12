<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="row">
        <div class="card col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <h3><img src="../../assets/img/core-img/logo.png" /> testice</h3>
          <p class="mt-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            ducimus voluptatibus neque illo id repellat quisquam? Autem expedita
            earum quae laborum ipsum ad.
          </p>
          <div class="social row">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-google-plus"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>

        <div class="card col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <h3>PRIVACY & TOS</h3>

          <ul class="list-unstyled">
            <li><a href="#"> Advertiser Agreement </a></li>
            <li><a href="#"> Privacy Policy </a></li>
            <li><a href="#"> Acceptable Use Policy </a></li>
            <li><a href="#"> Technology Privacy </a></li>
            <li><a href="#"> Developer Agreement </a></li>
          </ul>
        </div>

        <div class="card col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <h3>navigate</h3>

          <ul class="list-unstyled">
            <li><a href="#"> Advertisers </a></li>
            <li><a href="#"> Developers </a></li>
            <li><a href="#"> Resources </a></li>
            <li><a href="#"> Company </a></li>
            <li><a href="#"> contact </a></li>
          </ul>
        </div>

        <div class="card col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <h3>contacts us</h3>

          <ul class="list-unstyled">
            <li><a href="#"> Mailing Address:xx00 E. Union Ave </a></li>
            <li><a href="#">Suite 1100. Denver, CO 80237</a></li>
            <li><a href="#">+999 90932 627 </a></li>
            <li><a href="#"> support@yourdomain.com </a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background: var(--mainColor);
  .row > div {
    padding: 30px 20px 20px;
    border: 0;
    background: transparent;
    h3 {
      font-size: 17px;
      margin-bottom: 8px;
      font-weight: 600;
      color: #fff;
      text-transform: capitalize;
      letter-spacing: 1px;
      img {
          width:50px;
      }
    }
    p {
      color: #e7e7e7;
    }
    ul li {
        margin-top:4px;
        transition:all .4s;
        &:hover {
            color: #fff;
            a {
                color: #fff !important;
            }
        }
      a {
        text-decoration: none;
        color: #fff;
        
      }
    }
    .social {
        padding-left:12px;
        color: #fff;
        i {
            border-radius:50%;
            text-align:center;
            margin-right: 6px;
            padding:7px 10px;
        }
    }
  }
}
</style>