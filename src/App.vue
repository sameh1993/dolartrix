<template>
  <div class="root">
    <!-- start header -->

    <header :class="$route.name != 'home' ? 'h-50': '' ">
      <!--- start  navigation bar -->
      <div v-if="$route.name!='home' " class="overlay"></div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            <i class="fa fa-line-chart fa-1x"></i>
            Domand
          </router-link>
          <button
            class="navbar-toggler" 
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <button class="nav-item" @click="view='home' ">
                <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
              </button>
              <button class="nav-item" @click="view='About Us' ">
                <router-link to="/aboutUs" class="nav-link" active-class="active">About Us</router-link>
              </button>

              <button class="nav-item" @click="view='Services' ">
                <router-link to="/serives" class="nav-link" active-class="active">Services</router-link>
              </button>

              <button class="nav-item" @click="view='Blog' ">
                <router-link to="/blog" class="nav-link" active-class="active">Blog</router-link>
              </button>

              <button class="nav-item" @click="view='Contact' ">
                <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
              </button>

              <div class="custom">
                <button v-if="!idToken" class="btn btn-primary">
                  <router-link to="/register">Git started</router-link>
                </button>
                <button v-if="idToken" class="btn btn-primary">
                  <router-link to="/dashboard">Dashboard</router-link>
                </button>
                <button v-if="idToken" @click="clearLogin" class="btn btn-primary ml-2">
                  <router-link to="/">Logout</router-link>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <!--- end navigation bar -->

      <!--- start slide -->
      <div
        v-if="$route.name == 'home' "
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="overlay">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="parent row">
                  <div class="content">
                    <h2>
                      Corporate
                      <span style="color:var(--blue)">Business</span>
                    </h2>
                    <h4>Best Technology Demand</h4>
                    <p>Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubiliacurae, Curabitur Quis Luctus Lectus. Morbi At Dui Nisl.</p>
                    <button>Read More</button>
                    <button>Get Started</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="parent row">
                  <div class="content">
                    <h2>
                      Corporate
                      <span style="color:var(--blue)">Business</span>
                    </h2>
                    <h4>Best Technology Demand</h4>
                    <p>Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubiliacurae, Curabitur Quis Luctus Lectus. Morbi At Dui Nisl.</p>
                    <button>Read More</button>
                    <button>Get Started</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="parent row">
                  <div class="content">
                    <h2>
                      Corporate
                      <span style="color:var(--blue)">Business</span>
                    </h2>
                    <h4>Best Technology Demand</h4>
                    <p>Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubiliacurae, Curabitur Quis Luctus Lectus. Morbi At Dui Nisl.</p>
                    <button>Read More</button>
                    <button>Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <!--- end slide --->

      <div class="title-line" v-if="$route.name != 'home' ">
        <div class="container">
          <ul class="list-unstyled row">
            <li>Home</li>/
            <li>{{ $route.name }}</li>
          </ul>
        </div>
      </div>
    </header>
    <!--end header -->

    <transition name="fade">
      <!-- start content  ---->
      <router-view></router-view>
      <!--- end content --->
    </transition>

    <!--- start footer -->
    <footers />
    <!--- end footer --->
  </div>
</template>

<style lang="scss">

@media (max-width: 576px) {
  .container {
    max-width: auto !important;
  }
}

@import "./GlobalRules/scss/mainRules.scss";
@import "./assets/spinner.css";
header {
  position: relative;
  height: 100vh;
  background-image: url("./assets/images/banner.jpg");
  background-size: cover;
  .navbar-brand {
    font-weight: 600;
    font-size: 32px;
    color: #fff !important;
  }
  @include maxScreen(md) {
    .navbar-nav {
      background-color: rgba(0, 0, 0, 0.7);
      text-align: center;
      padding: 10px 0;
      .nav-item:hover {
        background-color:rgba(0,0,0,.9);
      }
    }
  }
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
  }
  .navbar-toggler {
    border: 1px solid #ccc;
    span {
      color: #333;
    }
  }
  .navbar {
    padding: 10px 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    @include minScreen(xs) {
      padding-left: 20px;
      padding-right: 20px;
    }
    .navbar-toggler {
      @include minScreen(xs) {
        border: 1px solid #ccc;
        span {
          color: #fff;
        }
      }
    }
    .nav-item {
      background-color: transparent;
      border: 0;
      color: #fff;
      .nav-link {
        color: #fff;
        margin: 0 5px;
        font-size: 15px;
        &.active,
        &:hover {
          color: var(--blue);
        }
      }
    }
    .custom {
      .btn {
        padding: 7px 18px;
        background-color: rgba(#fff, 0.2);
        color: #fff;
        text-transform: capitalize;
        font-weight: 600;
        border: 1px solid #ccc;
        transition: all 0.3s linear;
        &:hover {
         background-color: $mainColor;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
  .carousel {
    height: 100%;
    .overlay {
      height: 100%;
      color: #fff;
      .carousel-inner {
        height: 100%;
        .carousel-item {
          height: 100%;
          .parent {
            align-items: center;
            display: flex;
            height: 100vh !important;
            padding-left: 25px;
            h2,
            h4 {
              text-transform: capitalize;
              letter-spacing: 3px;
              font-size: 45px;
              font-weight: 600;
              @include minScreen(xs) {
                font-size: 25px;
                letter-spacing: 2px;
              }
            }
            h4 {
              font-weight: 100;
            }
            p {
              width: 70%;
              letter-spacing: 1px;
              text-transform: capitalize;
              line-height: 2;
              margin-top: 15px;
              margin-bottom: 15px;
              @include minScreen(xs) {
                font-size: 14px;
                width: 90%;
              }
            }
            button {
              padding: 10px 28px;
              background-color: rgba(#fff, 0.1);
              border: 1px solid #ccc;
              border-radius: 5px;
              margin-right: 10px;
              text-transform: capitalize;
              color: #fff;
              transition: 0.1s all linear !important;
              &:last-child {
                background-color: var(--blue);
                border: 1px solid var(--blue);
              }
              &:hover {
                transform: scale(0.95);
              }
            }
          }
        }
      }
    }
  }
  .title-line {
    background-color: #f9f9f9;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;
    text-transform: capitalize;
    letter-spacing: 1px;
    .row {
      margin: 0;
      padding: 10px 0;
    }
    li {
      padding: 0 10px;
      font-size: 18px;
      font-weight: 600;
      &:last-child {
        color: $mainColor;
      }
    }
  }
}
.fa-angle-up {
  position: fixed;
  bottom: 22px;
  right: 22px;
  width: 37px;
  height: 37px;
  background-color: $mainColor;
  font-weight: 600;
  line-height: 37px !important;
  z-index: 30;
  text-align: center;
  font-size: 24px !important;
  color: #fff;
}
.fixed {
  position:fixed;
  top:0; left:0;
  right: 0; bottom:0;
  background-color: #007BFF;
  z-index:12;
  display:flex;
  justify-content: center;
  align-items: center;  
}
</style>

<script>
import footers from "./components/Footer.vue";

import jquery from "jquery";
const $ = jquery;
window.$ = $;

// import fb from "./firebaseInit";

export default {
  name: "App",
  props: ["mySmsm"],
  components: {
    footers
  },
  mounted() {
    // to keep login
    this.$store.dispatch("tryAutoLogin");

    // to show and hiddeb scroll angle
    $(".fa-angle-up").fadeOut(700);
    $(window).scroll(function() {
      if ($("html, body").scrollTop() >= 120) {
        $(".fa-angle-up").fadeIn(700);
      } else {
        $(".fa-angle-up").fadeOut(700);
      }
    });

    $(window).resize(function() {
      console.log($(window).width());
    });

    $(".custom .btn, .nav-item").click(function() {
      $(".navbar-collapse").removeClass("show");
    });
  },
  data() {
    return {
      view: "home"
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    }
  },
  methods: {
    clearLogin() {
      return this.$store.dispatch("logout");
    }
  },
  beforeMount() {
    $(".fixed").fadeOut(700, function () {
      $(this).remove();
    })
  }
};
</script>
