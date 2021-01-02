<template>
  <!-- ##### FAQ & Timeline Area Start ##### -->
  <div class="hos-sec-1 section-padding-100-85" id="faq">
    <div class="container">
      <div class="section-heading text-center">
        <div
          class="more-dots justify-content-center fadeInUp"
          data-wow-delay="0.2s"
        >
          <span class="gradient-text cyan">Frequently asked</span>
        </div>
        <h2 class="w-text fadeInUp" data-wow-delay="0.3s">
          Frequently Questions
        </h2>
        <p class="g-text fadeInUp" data-wow-delay="0.4s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
          <img
            src="@/assets/img/core-img/about3.png"
            alt=""
            class="center-block img-responsive"
          />
        </div>
        <div class="col-12 col-lg-6 col-md-12">
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    - Who has access to my Security Records
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                  - We are always carefull to Our Clients and service
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                  - We are always carefull to Our Clients and service
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    - how many Security sessions I need?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hos-sec-1 {
  .card {
    margin-top: 20px;
    background: transparent;
    .card-header {
      padding: 0;
      background-image: linear-gradient(to right, #21d397 0%, #7450fe 100%);
      border-top: 1px solid #f2f4f8;
      border-radius: 35px;
      button {
        padding: 12px 25px;
        font-weight: 600;
        color: #fff;
        display: block;
        width: 100%;
        text-decoration: none;
        text-align: left;
        text-transform:capitalize;
      }
    }
    .card-body {
      background-color: #fff;
      width: 87%;
      margin: 0 auto;
    }
  }
}
</style>