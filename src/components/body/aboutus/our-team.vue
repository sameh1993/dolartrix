<template>
  <!-- ##### Team Area Start ##### -->
  <section class="our_team_area section-padding-100-0 clearfix" id="team">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <div
              class="more-dots justify-content-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span class="gradient-text blue"> Our Team</span>
            </div>
            <h2 class="fadeInUp" data-wow-delay="0.3s">Awesome Team</h2>
            <p class="fadeInUp" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Single Team Member -->
        <div
          class="col-12 col-sm-6 col-lg-3"
          v-for="(item, index) in ourTeamList"
          :key="index"
        >
          <div class="single-team-member hos fadeInUp" data-wow-delay="0.5s">
            <!-- Image -->
            <div class="team-member-thumb hos">
              <img :src="item.img" class="center-block" alt="" />
            </div>
            <!-- Team Info -->
            <div class="team-infos">
              <h5 class="w-text">{{ item.name }}</h5>
              <p class="g-text">{{ item.jobTitle }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <a :href="item.linkedIn"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.single-team-member p {
  color: #ccc;
}
.team-infos {
  background-color: var(--mainColor) !important;
  padding: 20px 0 10px;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      ourTeamList: [
        {
          img: require("@/assets/img/team-img/1.png"),
          name: "DR. JOMAN HELAL",
          jobTitle: "Head of Security",
          linkedIn: "#",
        },
        {
          img: require("@/assets/img/team-img/2.png"),
          name: "DR. SLANS ALONS",
          jobTitle: "Head of Security",
          linkedIn: "#",
        },
        {
          img: require("@/assets/img/team-img/3.png"),
          name: "DR. JOSHA MICHAL",
          jobTitle: "Head of Security",
          linkedIn: "#",
        },
        {
          img: require("@/assets/img/team-img/4.png"),
          name: "DR. JOHAN WRIGHT",
          jobTitle: "Head of Security",
          linkedIn: "#",
        },
      ],
    };
  },
};
</script>