<template>
  <div>
    <!-- start slider blog -->
    <div class="slidebar-blog">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-12">
            <!-- blog posts -->
            <BlogPost></BlogPost>
          </div>
          <div class="col-md-3 col-12">
            <!-- start slide bar blog -->
            <slidebar-blog class="section-padding-100-0"></slidebar-blog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../../components/body/blog/blogPost.vue";
import SlidebarBlog from "@/components/body/blog/slidebar-blog.vue";

export default {
  components: {
    BlogPost,
    SlidebarBlog,
  },
};
</script>

