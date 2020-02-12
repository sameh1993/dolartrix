<template>
    <div class="info p-head">
        <div class="container">
            <div class="row">
                <div class="head">
                    <h2 class="mt-2">Latest <strong>Statistical Information</strong></h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-xs-12 mt-4">
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere Curae Integer ullati mcorper metus et urna maximus, ac maximus estlen blandit. Nam pretium tempor mi, a sed fringilla leo imperdiet intre. Integer lacinia et ultricies turpis. non euismod lectus tincidunt vitae. Quisqe non facilisis ante.</p>
                        <button class="btn btn-primary"> Read More </button>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 mt-4">
                        <img src="../assets/images/stats1.jpg" class="img-fluid w-100" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 mt-4">
                        <div class="progress-inner" v-for="(item, index) in progress" :key="index">
                            <label class=""> {{item.label}} </label>
                            <div class="progress mb-4">
                                <span class="progress-bar" :style=" 'width:' + item.prog + '; background: '+ item.color "></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.info {
    background-color: #222;
    padding: 4em 0;
    color: #b6b6b6;
    p{
        text-transform: capitalize;
        line-height: 2;
    }
    .btn {
        padding: 10px 25px;
        background-color: transparent;
        border: 1px solid #fff;
        margin-top: 20px;
    }
    .progress-inner {
        label {
            font-size: 16px;
            text-transform:uppercase;
        }
        .progress {
            height: 10px;
        }
    }
}
</style>


<script>
export default {
    methods : {
        Sharing : function () {
            this.$emit("sameh", this.progress)
        }
    },
    data() {
        return {
            progress :[
                {label:"Online marketing", prog: "75%", color: "var(--blue)"},
                {label:"FINANCIAL CONSULTING", prog: "90%", color: "var(--info)"},
                {label:" CREATIVE PROJECTS", prog: "65%", color: "var(--warning)"},
                {label:"FUTURE ENHANCEMENT", prog: "80%", color: "var(--primary)"},
                {label:"24/7 SUPPORT", prog: "88%", color: "var(--success)"},
            ]
        }
    }
}
</script>