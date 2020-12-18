<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="#">
        <img src="../../assets/img/core-img/logo.png" /> testice
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="navigation"
      >
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
      </button>

      <div class="collapse navbar-collapse" id="">
        <ul class="navbar-nav ml-auto pr-0">
          <li
            class="nav-item active"
            v-for="(item, index) in navBarList"
            :key="index"
          >
            <router-link class="nav-link text-white" :to="item.to">
              {{ item.title }}
            </router-link>
          </li>
        </ul>

        <i class="fa fa-times" aria-hidden="true"></i>

        <button class="text-uppercase btn btn-outline-success my-2 my-sm-0">
          free try
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../GlobalRules/scss/mainRules.scss";

.navbar {
  color: #fff;
  @include maxScreen(md) {
    background-color: #d7dfef !important;
    .addColor {
      background-color: var(--mainColor) !important;
    }

    .apper {
      transform: translatex(0) !important;
    }
  }

  .navbar-brand {
    text-transform: capitalize;
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .navbar-toggler {
    width: 47px;
    height: 32px;
    outline: 0;
    padding: 5px;
    padding-top: 7px;

    span {
      width: 100%;
      height: 2px;
      background: #222;
      display: block;
      margin-bottom: 8px;
      transform: scale(1.2);
    }
  }
  .collapse {
    .fa-times {
      display: none;
    }

    @include maxScreen(md) {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      border-right: 1px solid #fff;
      padding: 0;
      padding-top: 59px;
      background-color: #192a56;
      transform: translatex(-298px);
      transition-duration: 1s;
      display: block;
      .fa-times {
        display: block;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 24px;
        font-weight: 300;
      }
      .nav-link {
        padding: 10px;
        width: 290px;
        padding-left: 25px;
        border-bottom: 1px dotted #ccc;
        color: #222;
      }
      .btn {
        margin-top: 20px !important;
        margin-left: 20px !important;
      }
    }
    .navbar-nav {
      padding-right: 10px;
      .nav-item {
        padding: 0 4px;
        .nav-link {
          text-transform: uppercase;
          font-size: 14px;
          color: #fff;
          letter-spacing: 1px;
          font-weight: 600;
        }
      }
    }
    .btn {
      background-color: rgb(253, 138, 54);
      width: 120px;
      border: 0;
      &:hover {
        background: var(--mainColor);
      }
    }
  }

  .btn-outline-success {
    background-color: rgb(253, 138, 54);
    color: #fff;
    border: 1px solid #fff;
    font-weight: 600;
  }
}
</style>

<script>
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

export default {
  data() {
    return {
      navBarList: [
        { title: "Home", to: "/" },
        { title: "About", to: "/about" },
        { title: "Serivces", to: "/serivce" },
        { title: "FAQ", to: "/Pricing" },
        { title: "Team", to: "/our0team" },
      ],
    };
  },
  mounted() {
    $(".navbar-toggler, .navbar .nav-link").click(function () {
      $(".collapse").toggleClass("apper");
    });

    // when windows scroll
    $(window).scroll(function () {
      // console.log($(window).scrollTop())
      if ($(window).scrollTop() >= 100) {
        $(".navbar").css("background-color", "#d7dfef");
      } else {
        $(".navbar").css("background-color", "transparent");
      }
    });

    // hidden navbar menu when click
    $(".navbar .collapse .fa-times, .navbar .nav-link").click(function () {
      $(".collapse").removeClass("apper");
    });
  },
};
</script>

