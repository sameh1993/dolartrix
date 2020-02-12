<template>
    <div class="newsletter p-head">
        <div class="container">
            <div class="head">
                <h2> subscribe newsletter </h2>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <form for="form">
                        <div class="form-group row">
                            <input type="email" class="form-control">
                            <i class="fa fa-paper-plane fa-1x"></i>
                        </div>
                    </form>
                    <p>We'll never share your email with anyone else.</p>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                      <p class="lead"> Sign up for our Newsletter, and get the latest marketing and technology related news and updates </p>
                </div>
            </div>

            

        </div>
    </div>
</template>

<style lang="scss" scoped>
.newsletter {
    background-color: #f7f7f7;
    form {
        
        .form-group {
            position: relative;
            display:flex;
            width: 80%;
            margin: 15px auto;
            border: 1px solid #c7c7c7;
            margin-left: 0;
            background-color: #f7f7f7;
            .form-control {
                background-color:#f7f7f7;
            }
            i{
                position: absolute;
                right: 0;
                padding: 11px 14px;
            }
        }
    }
}
</style>