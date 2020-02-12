<template>
  <div class="signup">
    <div class="content-w3ls">
      <div class="agileits-grid">
        <div class="content-top-agile">
          <h2>Register Your Account</h2>
        </div>
        <div class="content-bottom">
          <form @submit.prevent="onSignup">
            <i class="fa fa-line-chart fa-1x"></i>
            <div class="field_w3ls">
              <div class="field-group">
                <input
                  name="text1"
                  id="text1"
                  v-model="dataUser.userName"
                  @blur="$v.dataUser.userName.$touch()"
                  type="text"
                  value
                  placeholder="Username"
                  :class=" {'valid': !$v.dataUser.userName.$invalid, 'error': $v.dataUser.userName.$error }"
                />
                <p v-if="!$v.dataUser.userName.required">the field dont must be empty</p>
              </div>
              <div class="field-group">
                <input
                  name="email"
                  id="email"
                  v-model="dataUser.email"
                  @blur="$v.dataUser.email.$touch()"
                  type="email"
                  placeholder="Email"
                  :class=" {'valid': !$v.dataUser.email.$invalid, 'error': $v.dataUser.email.$error }"
                />
                <p v-show="!$v.dataUser.email.required">the field dont must be empty</p>
                <p v-if="!$v.dataUser.email.email">please, Enter a valid email address</p>
              </div>
              <div class="field-group">
                <input
                  name="password"
                  id="password"
                  v-model="dataUser.password"
                  @blur="$v.dataUser.password.$touch()"
                  type="password"
                  placeholder="password"
                  :class=" {'valid': !$v.dataUser.password.$invalid, 'error': $v.dataUser.password.$error }"
                />
                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                <p v-if="!$v.dataUser.password.required">the field dont must be empty</p>
                <p v-if="!$v.dataUser.password.minLen">the field dont must al least 10 char</p>
              </div>

                <div class="field-group">
                <input
                  name="password"
                  id="password2"
                  v-model="dataUser.confirmPass"
                  @blur="$v.dataUser.confirmPass.$touch()"
                  type="password"
                  placeholder="password"
                  :class=" {'valid': !$v.dataUser.confirmPass.$invalid, 'error': $v.dataUser.confirmPass.$error }"
                />
                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                <p v-if="!$v.dataUser.confirmPass.required">the field dont must be empty</p>
                <p v-if="!$v.dataUser.confirmPass.sameAs">the field must be Equel password field</p>
              </div>


            </div>  
            <div class="wthree-field">
              <input id="saveForm" name="saveForm" :disabled="$v.$invalid" type="submit" value="Get Started" />
            </div>
          </form>
          <button class="btn btn-primary signin mt-2">
            <router-link to="register/signin"> Sign In </router-link>
          </button>
        </div>
        <!-- //content bottom -->  
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/style.css";

.signup {
  background:#f5f5f5;
  .fa-fw {
    margin-right: 8px;
  }
  input {
    color: #333 !important;
    &[type="submit"]:hover {
      color: #fff;
    }
  }
}

.content-w3ls {
  margin: auto;
  justify-content: center;
  padding: 6em 0 !important;
  .agileits-grid {
    position: relative;
    .field-group {
      display: block;
    }
    h2 {
      padding: 10px 0;
    }
    .fa-line-chart {
      position: absolute;
      top: -42px;
      left: 43%;
      width: 85px;
      height: 85px;
      border-radius: 50%;
      font-size: 33px;
      line-height: 72px;
      background: #ff4f81;
      color: #fff;
    }
  }
}

.signin {
  width: 100%;
  padding: 15px 0;
  text-align:center;
  a {
    color: #fff;
  font-weight:600;
    margin-top: 20px;
  }
}
</style>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

// include jquery
import jquery from "jquery";
const $ = jquery;
window.$ = $

export default {
  data() {
    return {
      dataUser: {
        userName: null,
        email: null,
        password: null,
        confirmPass: null
      }
    };
  },
  validations: {
    dataUser: {
      userName: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLen: minLength(10)
      },
      confirmPass:{
        required,
        sameAs : sameAs("password")
      }
    }
  },
  methods:{
    onSignup(){
      return this.$store.dispatch("signup", this.dataUser)
    }
  },
  mounted() {
    let eyeIcon = $(".fa-fw");
      eyeIcon.click(function () {
          eyeIcon.toggleClass("active");

          if (eyeIcon.hasClass("active")) {
              $(this).siblings("input").attr("type", "text")
          } else {
              $(this).siblings("input").attr("type", "pas sword")
          }
      })
    
        document.getElementById("text1").style.color = "#0ff";
  }
};
</script>