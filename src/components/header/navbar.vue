<template>
  <!-- ##### Header Area Start ##### -->
  <nav
    class="navbar navbar-expand-lg p-relative navbar-white fixed-top"
    id="banner"
  >
    <div class="container relative">
      <!-- Brand -->
      <router-link class="navbar-brand" to="/"
        ><span> <img src="@/assets/img/core-img/logo.png" alt="logo" /></span>
        Dolatrix
      </router-link>

      <!-- Toggler/collapsibe Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbardrop"
              data-toggle="dropdown"
              >Home</span
            >
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="index-demo-1"
                >Home style 1</router-link
              >
              <router-link class="dropdown-item" to="index-demo-2"
                >Home style 2</router-link
              >
              <router-link class="dropdown-item" to="index-demo-3"
                >Home style 3</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/about-us"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq">FAQ</router-link>
          </li>
          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbardrop"
              data-toggle="dropdown"
              >Blog</span
            >
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/blog-posts"
                >Blog Posts</router-link
              >
              <router-link class="dropdown-item" to="/slidebar-blog"
                >Sidebar Blog
              </router-link>
              <router-link class="dropdown-item" to="/blog-details"
                >Blog Details</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us">Contact</router-link>
          </li>
          <li class="lh-55px nav-item pt-0 pb-0">
            <router-link to="#" class="btn login-btn">Login!</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- ##### Header Area End ##### -->
</template>

<style lang="scss" scoped>
@import "@/assets/_Rules.scss";
/* ##### 2.0 Header Area CSS ##### */

.navbar {
  transition: all 0.5s ease-in;
  .nav-link {
    cursor: pointer;
  }
  // @include maxScreen(lg) {
  //   .collapse {
  //     position: absolute;
  //     top: 100%;
  //     width: 100%;
  //     padding: 0;
  //     border-top: 2px solid var(--mainColor);
  //     .nav-item {
  //       padding: 0;
  //       &:hover:not(:last-child) {
  //         background: var(--mainColor);
  //         .nav-link {
  //           color: #fff;
  //         }
  //       }
  //     }
  //     button {
  //       display: block;
  //       margin: auto;
  //     }
  //   }
  // }
}
.navbar-brand {
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
}
.lh-55px {
  line-height: 55px;
}
.navbar-nav .nav-item .nav-link {
  padding: 20px 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
}
.navbar-nav .nav-item .nav-link:hover {
  color: #fed136;
}
.navbar-expand-md .navbar-nav .dropdown-menu {
  border-top: 3px solid #fed136;
}
.dropdown-item:hover {
  background-color: #fed136;
  color: #fff;
}
nav {
  -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
  -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
  transition: padding-top 0.3s, padding-bottom 0.3s;
  border: none;
}

.shrink {
  animation: 0.3s ease-in-out;
  animation-name: fadeInDown;
  background-color: rgb(215, 223, 239);
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.navbar-white .navbar-brand:hover {
  color: #fff;
}
.navbar-dark .navbar-brand:hover {
  color: #333;
}

/* mobile view */
@media (max-width: 500px) {
  .navbar {
    background: rgb(215, 223, 239);
  }
  .navbar-nav {
    border-top: 1px solid #fed136;
    color: #fff;
    z-index: 1;
    margin-top: 5px;
  }
  .navbar-nav .nav-item .nav-link {
    padding: 0.7em 1em !important;
    font-size: 100%;
    font-weight: 500;
  }
}
.navbar-dark .navbar-toggler,
.navbar-white .navbar-toggler,
.navbar-cyan .navbar-toggler {
  background: #086bfe;
  border-color: #333;
}
.navbar-white .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
@media (max-width: 992px) {
  .shrink {
    animation: none;
  }
  .login-btn {
    margin-left: 15px !important;
    margin-top: 15px !important;
  }
  .navbar-collapse .navbar-nav .nav-item .nav-link {
    padding: 5px 12px;
    color: #333;
  }
  .navbar-expand-lg.navbar-dark {
    background: rgb(215, 223, 239);
  }
  .navbar-collapse {
    padding-top: 20px;
    background: rgb(215, 223, 239);
  }
}
.navbar-white.shrink .navbar-brand,
.shrink .navbar-nav .nav-item .nav-link {
  color: #333;
}

.navbar-dark .navbar-brand,
.navbar-dark .navbar-nav .nav-item .nav-link {
  color: #333;
}

.navbar-cyan .navbar-brand,
.navbar-cyan .navbar-nav .nav-item .nav-link {
  color: #04d0ff;
}
</style>

<script>
const $ = require("jquery");
window.$ = $;

export default {
  mounted() {
    $(".collapse a").click(function () {
      $(".collapse").removeClass("show");
    });
  },
};
</script>
