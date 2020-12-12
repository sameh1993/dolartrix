<template>
  <section id="quest" class="quest">
    <div class="container">
      <div class="head">
        <h5>REPEATED QUESTIONS</h5>
        <h3>Frequently Questions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>
      <div class="row content">
        <div class="img col-md-6 col-sm-12 col-xs-12 mt-3">
          <img
            class="img-fluid"
            src="../../assets/img/core-img/digital-3.png"
          />
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 mt-3">
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
                    What are the business advisory company?
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus
                  enim necessitatibus est fugiat, assumenda dolorem, deleniti
                  corrupti cupiditate ipsum, dolorum voluptatum esse error?
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
                    What are the business advisory company?
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus
                  enim necessitatibus est fugiat, assumenda dolorem, deleniti
                  corrupti cupiditate ipsum, dolorum voluptatum esse error?
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
                    What are the business advisory company?
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus
                  enim necessitatibus est fugiat, assumenda dolorem, deleniti
                  corrupti cupiditate ipsum, dolorum voluptatum esse error?
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
                    What are the business advisory company?
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus
                  enim necessitatibus est fugiat, assumenda dolorem, deleniti
                  corrupti cupiditate ipsum, dolorum voluptatum esse error?
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quest {
  .card {
    background: transparent;
    border: 0;
    margin-top: 8px;
    .card-header {
      padding: 0;
      border-radius: 25px;
      h5 {
        padding: 0;
        border-radius: 25px;
        overflow: hidden;
        button {
          padding: 10px;
          width: 100%;
          background-image: var(--mainBgColor);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          text-align: left;
          padding: 13px 27px;
        }
      }
    }
  }
}
</style>>