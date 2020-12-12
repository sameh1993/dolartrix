<template>
    <section class="partner">
        <div class="container">
            <div class="head">
                <h5> our main partners </h5>
                <h3> our powerful paerners </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. </p>
            </div>
            <div class="row content" >
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/1.png">
                </div>

                 <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/2.png">
                </div>

                 <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/3.png">
                </div>

                 <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/4.png">
                </div>

                 <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/3.png">
                </div>

                 <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/4.png">
                </div>

                  <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/1.png">
                </div>

                 <div class="col-md-3 col-sm-6 col-xs-12">
                    <img src="../../assets/img/partners/2.png">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.partner {
    background:url("../../assets/img/svg/striples-bg.svg") no-repeat center center;
    background-size: cover;
    .content {
        &>div {
            border:1px solid #ccc;
            margin-bottom:20px;
            transform:scaleX(.95);
            transition: all .4s;
            &:hover {
                border: 1px solid #777;
            }
            img {
                width:100%;
                transform:scale(.65);
            }
        }
    }
}
</style>

