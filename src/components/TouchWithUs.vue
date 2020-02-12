<template>
  <div class="touchUs">
    <div class="container">
      <div class="head">
        <h2 class="pb-3">
          get in
          <strong>touch with us</strong>
        </h2>
      </div>
      <div class="row">
        <div class="address col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <h3 class="text-capitalize mb-3">Content Address</h3>
          <ul class="list-unstyled">
            <li>
              <i class="fa fa-map-amrker"></i>
              2130 Fulton Street, San Diego, CA 94117-1080 USA
            </li>
            <li>
              <i class="fa fa-phone"></i>
              1-600-1234-567
            </li>
            <li>
              <i class="fa fa-phone"></i>
              1-600-1234-567
            </li>
            <li>
              <i class="fa fa-envelope"></i>
              info@example.com
            </li>
          </ul>

          <div class="follow">
            <h4 class="text-capitalize mb-3">follow us</h4>
            <p>Sed mattis hendrerit dolor sed rhoncus. Praesent arcu quam, sodales ac varius.</p>

            <div class="social mt-3">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-google-plus"></i>
              <i class="fa fa-linkedin"></i>
            </div>
          </div>
        </div>

        <div class="contact-form col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <h3 class="text-capitalize">contact form</h3>
          <form class="form text-capitalize">
            <div class="form-group mt-3">
              <label for="#username">Name</label>
              <input
                id="username"
                @blur="$v.dataMsg.userName.$touch()"
                v-model="dataMsg.userName"
                :class=" {'valid': !$v.dataMsg.userName.$invalid, 'error': $v.dataMsg.userName.$error }"
                type="text"
                placeholder=" Enter Name"
                class="form-control"
              />
              <p class="" v-if="!$v.dataMsg.userName.required">this field dont must be empty</p>
            </div>
            <div class="form-group mt-3">
              <label for="#useremail">Email</label>
              <input
                id="useremail"
                @blur="$v.dataMsg.email.$touch()"
                v-model="dataMsg.email"
                :class=" {'valid': !$v.dataMsg.email.$invalid, 'error': $v.dataMsg.email.$error }"
                type="email"
                placeholder=" Enter Email"
                class="form-control"
              />
              <p class="" v-if="!$v.dataMsg.email.required">this field dont must be empty</p>
              <p class="" v-if="!$v.dataMsg.email.email">please, enter a valid email address</p>
            </div>

            <div class="form-group mt-3">
              <label for="#username">How can we help?</label>
              <textarea
                placeholder="Enter Your Message Here"
                @blur="$v.dataMsg.msg.$touch()"
                v-model="dataMsg.msg"
                :class=" {'valid': !$v.dataMsg.msg.$invalid, 'error': $v.dataMsg.msg.$error }"
                class="form-control"
              ></textarea>
              <p class="" v-if="!$v.dataMsg.msg.required">this field dont must be empty</p>
              <p v-if="!$v.dataMsg.msg.minLen || !$v.dataMsg.msg.minLen"> this field must be between 5 to 20 char  </p>
            </div>

            <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </form>
        </div>

        <div class="t-relative col-lg-4 col-md-6 col-sm-12 col-xs-12 map">
          <h3 class="text-capitalize pb-4">contact Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41266661.933523476!2d-61.79051155799838!3d50.854921697796925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z2YPZhtiv2Kc!5e0!3m2!1sar!2seg!4v1570803436217!5m2!1sar!2seg"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.touchUs {
  padding: 5em 0;
  h3 {
    font-size: 27px;
  }
  .list-unstyled {
    li {
      margin-top: 8px;
    }
  }
  .follow {
    margin-top: 15px;
    h4 {
      letter-spacing: 2px;
      text-transform: capitalize;
    }
    p {
      text-transform: capitalize;
      letter-spacing: 1px;
      margin-top: 10px;
    }
    i {
      width: 37px;
      height: 37px;
      line-height: 37px;
      text-align: center;
      margin-right: 5px;
      color: #fff;
      &.fa-facebook {
        background-color: #3b5999;
      }
      &.fa-instagram {
        background-color: #e4405f;
      }
      &.fa-google-plus {
        background-color: #dd4b39;
      }
      &.fa-linkedin {
        background-color: #0077b5;
      }
    }
  }
  iframe {
    width: 100%;
  }
  input {
    padding: 12px 10px;
  }
  .btn-primary {
    font-weight: 600;
    padding: 8px 27px;
    border-radius: 3px;
  }
  .mt-3 {
    margin-top: 24px;
  }
}
</style>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      dataMsg: {
        userName: null,
        email: null,
        msg: null
      }
    };
  },
  validations: {
    dataMsg: {
      userName: {
        required,
        minLen: minLength(10)
      },
      email: {
        required,
        email
      },
      msg: {
        required,
        maxLen: maxLength(20),
        minLen: minLength(5)
      }
    }
  }
};
</script>