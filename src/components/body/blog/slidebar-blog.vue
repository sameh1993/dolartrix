<template>
  <div class="sidebar-area">
    <!-- Search Widget -->
    <div class="search-widget-area mb-50 wow fadeInUp" data-wow-delay="0.2s">
      <form action="#" method="post">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <button type="submit" class="btn"><i class="fa fa-search"></i></button>
      </form>
    </div>

    <!-- Don't Miss Widget -->
    <div class="donnot-miss-widget mb-50">
      <div class="widget-title wow fadeInUp" data-wow-delay="0.3s">
        <h5>Don't miss</h5>
      </div>
      <!-- Single Don't Miss Post -->
      <div
        class="single-dont-miss-post mb-30 wow fadeInUp"
        data-wow-delay="0.4s"
      >
        <div class="dont-miss-post-thumb">
          <img src="img/blog-img/1.jpg" alt="" />
        </div>
        <div class="dont-miss-post-content">
          <a href="#">EU council reunites</a>
          <span>Nov 29, 2020</span>
        </div>
      </div>
      <!-- Single Don't Miss Post -->
      <div
        class="single-dont-miss-post mb-30 wow fadeInUp"
        data-wow-delay="0.5s"
      >
        <div class="dont-miss-post-thumb">
          <img src="img/blog-img/2.jpg" alt="" />
        </div>
        <div class="dont-miss-post-content">
          <a href="#">A new way to travel the world</a>
          <span>March 29, 2020</span>
        </div>
      </div>
      <!-- Single Don't Miss Post -->
      <div class="single-dont-miss-post wow fadeInUp" data-wow-delay="0.6s">
        <div class="dont-miss-post-thumb">
          <img src="img/blog-img/3.jpg" alt="" />
        </div>
        <div class="dont-miss-post-content">
          <a href="#">Why choose a bank?</a>
          <span>March 29, 2020</span>
        </div>
      </div>
    </div>

    <!-- Subscribe Widget -->
    <div class="subscribe-widget mb-50">
      <div class="widget-title wow fadeInUp" data-wow-delay="0.9s">
        <h5>subscribe</h5>
      </div>
      <div class="subscribe-form wow fadeInUp" data-wow-delay="1s">
        <form action="#">
          <input
            type="email"
            name="email"
            id="subs_email"
            placeholder="Your Email"
          />
          <button type="submit" class="btn more-btn">subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>
