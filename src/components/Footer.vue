<template>
  <div class="footer p-head">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <h3>content info</h3>
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
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <h3>our plaltform</h3>
          <ul class="list-unstyled">
            <li>digital trade marketing</li>
            <li>soft developerment</li>
            <li>cluod marketing</li>
            <li>business integlligenece</li>
            <li>mobile technology</li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
          <h3>media center</h3>
          <ul class="list-unstyled">
            <li>press release</li>
            <li>vision & values</li>
            <li>press release</li>
            <li>vision & values</li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
          <h3>content info</h3>
          <ul class="list-unstyled">
            <li>24/7 Help Line</li>
            <li>Nearest Branch</li>
            <li>Guidance</li>
            <li>Download</li>
            <li>Mobile App</li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
          <h3>content info</h3>
          <ul class="list-unstyled">
            <li>24/7 Help Line</li>
            <li>Nearest Branch</li>
            <li>Guidance</li>
            <li>Download</li>
            <li>Mobile App</li>
          </ul>
        </div>
      </div>

      <!--- start footer-bottom --->

      <div class="footer-buttom text-center">
        <div class="container">
          © 2019 Demand. All rights reserved | Design by
          <a href="#">sameh Madi</a>
        </div>
      </div>

      <!--- end footer buttom -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../GlobalRules/scss/mainRules.scss";

.footer {
  background-color: #222;
  color: #b6b6b6;
  padding-bottom: 25px;
  h3 {
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 15px 0 10px;
  }
  .row > div {
    &:not(first-chilf) {
      li:hover {
        color: rgba(#fff, 0.8);
        font-weight: 600;
      }
    }
  }
  .list-unstyled {
    li {
      padding: 5px 0;
      text-transform: capitalize;
      transition: all 0.3s linear;
      i {
        margin-right: 5px;
      }
    }
  }
  .footer-buttom {
    padding: 20px 0;
    text-transform: capitalize;
    font-weight: 600;
    color: #b6b6b6;
    a {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 1px;
      margin-left: 5px;
    }
  }
}
</style>


<script>
export default {
  data() {
    return {};
  }
};
</script>