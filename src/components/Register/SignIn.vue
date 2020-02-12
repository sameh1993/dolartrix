<template>
  <div class="signin">
    <div class="content-w3ls">
      <div class="agileits-grid">
        <div class="content-top-agile">
          <h2>Sign In Your Account</h2>
        </div>
        <div class="content-bottom">
          <form @submit.prevent="onSignin" >
            <i class="fa fa-line-chart fa-1x"></i>
            <div class="field_w3ls">
              <div class="field-group">
                <input
                  name="email"
                  id="email"
                  v-model="signIn.email"
                  @blur="$v.signIn.email.$touch()"
                  type="email"
                  placeholder="Email"
                  :class=" {'valid': !$v.signIn.email.$invalid, 'error': $v.signIn.email.$error }"
                />
                <p v-if="!$v.signIn.email.required">the field dont must be empty</p>
                <p v-if="!$v.signIn.email.email">please, Enter a valid email address</p>
              </div>

              <div class="field-group">
                <input
                  name="password"
                  id="password"
                  v-model="signIn.password"
                  @blur="$v.signIn.password.$touch()"
                  type="password"
                  placeholder="password"
                  :class=" {'valid': !$v.signIn.email.$invalid, 'error': $v.signIn.email.$error }"
                />
                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                <p v-if="!$v.signIn.password.required">the field dont must be empty</p>
              </div>
            </div>
            <div class="wthree-field">
              <input
                id="saveForm"
                name="saveForm"
                :disabled="$v.$invalid"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
          <div class="footer text-center pt-3 text-capitalize">
            <router-link to=""> forget password </router-link> or 
            <router-link to="/register"> create new account </router-link>
          </div>
        </div>
        <!-- //content bottom -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/style.css";
.signin {
  background-color: #ccc;
  .content-w3ls {
    margin: auto;
    justify-content: center;
    padding: 6em 0 !important;

    .agileits-grid {
      position: relative;
      background-color: #fff;
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
        font-size: 34px;
        line-height: 72px;
        background: #ff4f81;
        color: #fff;
      }
    }
  }
  .footer {
    router-link {
      padding: 0 4px;
      &:hover {
      color: #00f;
      font-weight: 600;
    }
    }
  }
}
</style>

<script>
import { required, email } from "vuelidate/lib/validators";

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  data() {
    return {
      signIn: {
        email: null,
        password: null
      }
    };
  },
  methods:{
    onSignin(){
      return this.$store.dispatch("signin", this.signIn)
    }
  },
  validations: {
    signIn: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  mounted() {
    let eyeIcon = $(".fa-fw");
      eyeIcon.click(function () {
          eyeIcon.toggleClass("active");

          if (eyeIcon.hasClass("active")) {
              $("#password").attr("type", "text");
          } else {
              $("#password").attr("type", "password");
          }
      })
  }
};
</script>