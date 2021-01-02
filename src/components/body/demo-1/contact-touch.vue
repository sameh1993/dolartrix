<template>
  <!-- ##### Contact Area Start ##### -->
  <div
    class="contact_us_area section-padding-100-0 footer-area bg-img"
    id="contact"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <div
              class="more-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span class="gradient-text blue">get in touch</span>
            </div>
            <h2 class="fadeInUp" data-wow-delay="0.3s">Contact With Us</h2>
            <p class="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="contact_form green">
            <form action="#" method="post" id="main_contact_form" novalidate>
              <div class="row">
                <div class="col-12">
                  <div id="success_fail_info"></div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="group fadeInUp" data-wow-delay="0.2s">
                    <input type="text" name="name" id="name" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label class="w-text">Name</label>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="group fadeInUp" data-wow-delay="0.3s">
                    <input type="text" name="email" id="email" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label class="w-text">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="group fadeInUp" data-wow-delay="0.4s">
                    <input type="text" name="subject" id="subject" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label class="w-text">Subject</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="group fadeInUp" data-wow-delay="0.5s">
                    <textarea name="message" id="message" required></textarea>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label class="w-text">Message</label>
                  </div>
                </div>
                <div class="col-12 text-center fadeInUp" data-wow-delay="0.6s">
                  <button type="submit" class="btn more-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-s">
          <img src="@/assets/img/core-img/about2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

