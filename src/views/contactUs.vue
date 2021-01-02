<template>
  <!-- ##### Contact Area Start ##### -->
  <section class="section-padding-100 contact_us_area" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <div
              class="more-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span class="gradient-text blue">Book Appointment Now!</span>
            </div>
            <h2 class="wow fadeInUp d-blue" data-wow-delay="0.3s">
              Contact With Us
            </h2>
            <p class="wow fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <div class="contact_form">
            <form action="#" method="post" id="main_contact_form" novalidate>
              <div class="row">
                <div class="col-12">
                  <div id="success_fail_info"></div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="group wow fadeInUp" data-wow-delay="0.2s">
                    <input type="text" name="name" id="name" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name</label>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="group wow fadeInUp" data-wow-delay="0.3s">
                    <input type="text" name="email" id="email" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="group wow fadeInUp" data-wow-delay="0.4s">
                    <input type="text" name="subject" id="subject" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Subject</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="group wow fadeInUp" data-wow-delay="0.5s">
                    <textarea name="message" id="message" required></textarea>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Message</label>
                  </div>
                </div>
                <div
                  class="col-12 text-center wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <button type="submit" class="btn more-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Contact Area End ##### -->
</template>