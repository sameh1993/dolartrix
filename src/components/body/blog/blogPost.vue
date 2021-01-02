<template>
  <!-- ##### Blog Area Start ##### -->
  <section class="blog-area section-padding-100-0">
    <div class="container">
      <div class="row">
        <!-- Single Blog Post -->
        <div
          class="col-12 col-sm-6"
          v-for="(item, index) in BlogPosts"
          :key="index"
        >
          <div class="single-blog-area wow fadeInUp" data-wow-delay="0.3s">
            <!-- Post Thumbnail -->
            <div class="blog_thumbnail">
              <img :src="item.img" alt="" />
            </div>
            <!-- Post Content -->
            <div class="blog-content">
              <div class="post-meta">
                <p>
                  By <a href="#" class="post-author">Admin</a>
                  <a href="#">Apr 10, 2020</a>
                  <a href="#" class="post-comments">7 comments</a>
                </p>
              </div>
              <a href="index-single-blog.html" class="post-title">
                <h4>{{ item.title }}</h4>
              </a>
              <p>
                {{ item.para }}
              </p>
              <router-link :to="item.link" class="btn more-btn mt-15"
                >Read Details</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 section-padding-0-100">
          <div class="info-pagination wow fadeInUp" data-wow-delay="0.2s">
            <nav>
              <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item"><a class="page-link" href="#">7</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Blog Area End ##### -->
</template>


<script>
export default {
  data() {
    return {
      BlogPosts: [
        {
          img: require("@/assets/img/blog-img/1.jpg"),
          title: "How to become a successful businessman.",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          link: "#",
        },
        {
          img: require("@/assets/img/blog-img/2.jpg"),
          title: "How to become a successful businessman.",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          link: "#",
        },
        {
          img: require("@/assets/img/blog-img/3.jpg"),
          title: "How to become a successful businessman.",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          link: "#",
        },
        {
          img: require("@/assets/img/blog-img/1.jpg"),
          title: "How to become a successful businessman.",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          link: "#",
        },
        {
          img: require("@/assets/img/blog-img/2.jpg"),
          title: "How to become a successful businessman.",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          link: "#",
        },
        {
          img: require("@/assets/img/blog-img/3.jpg"),
          title: "How to become a successful businessman.",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.",
          link: "#",
        },
      ],
    };
  },
};
</script>