<template>
  <div class="signin">
    <div class="content-w3ls">
      <div class="agileits-grid">
        <div class="content-top-agile">
          <h2>Sign In Your Account</h2>
        </div>
        <div class="content-bottom">
          <form>
            <i class="fa fa-line-chart fa-1x"></i>
            <div class="field_w3ls">
              <div class="field-group">
                <input
                  name="password"
                  id="password"
                  v-model="resetPass.password"
                  @blur="$v.resetPass.password.$touch()"
                  type="password"
                  placeholder="password"
                  :class=" {'valid': !$v.resetPass.password.$invalid, 'error': $v.resetPass.password.$error }"
                />
                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                <p v-if="!$v.resetPass.password.required">the field dont must be empty</p>
                <p v-if="!$v.resetPass.password.minLen || !$v.resetPass.password.maxLen"> this field must be between 5 to 20 char </p>
              </div>

              <div class="field-group">
                <input
                  name="confirmPass"
                  v-model="resetPass.confirmPass"
                  @blur="$v.resetPass.confirmPass.$touch()"
                  type="email"
                  placeholder="Email"
                  :class=" {'valid': !$v.resetPass.confirmPass.$invalid, 'error': $v.resetPass.confirmPass.$error }"
                />
                <p v-if="!$v.resetPass.confirmPass.required">the field dont must be empty</p>
                <p v-if="!$v.resetPass.confirmPass.email">please, Enter a valid email address</p>
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
            <router-link to>forget password</router-link>or
            <router-link to>create new account</router-link>
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
import {
  required,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
  data() {
    return {
      resetPass: {
        password: null,
        confirmPass: null
      }
    };
  },
  validations: {
    resetPass: {
      password: {
        required,
        minLen: minLength(5),
        maxLen: minLength(20)
      },
      password: {
        required,
        sameAs: sameAs("password")
      }
    }
  },
  mounted() {
    let eyeIcon = $(".fa-fw");
    eyeIcon.click(function() {
      eyeIcon.toggleClass("active");

      if (eyeIcon.hasClass("active")) {
        $("#password").attr("type", "text");
      } else {
        $("#password").attr("type", "password");
      }
    });
  }
};
</script>