<template>
  <section class="our_blog_area clearfix section-padding-100-0" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <div
              class="more-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span class="gradient-text blue">Blog Posts</span>
            </div>
            <h2 class="fadeInUp" data-wow-delay="0.3s">Latest News</h2>
            <p class="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <!-- Single Blog Post -->
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(item, index) in blog"
          :key="index"
        >
          <div class="single-blog-area fadeInUp" data-wow-delay="0.2s">
            <!-- Post Thumbnail -->
            <div class="blog_thumbnail">
              <img :src="item.img" alt="" />
            </div>
            <!-- Post Content -->
            <div class="blog-content">
              <div class="post-meta mt-20">
                <p>
                  By <a href="#" class="post-author">ADMIN</a>
                  <a href="#">Apr 10, 2018</a>
                  <a href="#" class="post-comments">7 comments</a>
                </p>
              </div>
              <a href="#" class="post-title">
                <h4>{{ item.title }}</h4>
              </a>
              <p>
                {{ item.para }}
              </p>
              <a href="index-blog-with-sidebar.html" class="more-info"
                >Read More <i class="fa fa-long-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style >
a {
  text-decoration: none;
}
</style>


<script>
export default {
  data() {
    return {
      blog: [
        {
          img: require("@/assets/img/blog-img/1.jpg"),
          title: "Complete IT Managed Services Experts",
          para:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
        },
        {
          img: require("@/assets/img/blog-img/2.jpg"),
          title: "Latest Cyber Security & Cloud Solutions",
          para:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
        },
        {
          img: require("@/assets/img/blog-img/3.jpg"),
          title: "How to keep yourself secured on the internet",
          para:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
        },
      ],
    };
  },
};
</script>