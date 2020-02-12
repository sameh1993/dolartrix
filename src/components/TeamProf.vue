<template>
    <div class="team p-head">
        <div class="container">
            <div class="head">
                <h2> our <strong> team professionals </strong> </h2>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12 mt-4">
                    <h3> {{ teamProf.titleName }} </h3>
                    <p> {{ teamProf.myPara }} </p>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12 mt-4">
                    <div class="row">
                        <div class="img col-md-4 text-center" v-for="(item, index) in teamProf.myImgs" :key="index = 1">
                            <div class="img">
                                <img v-bind:src="item.Img" class="img-fluid w-100"/>
                            </div>   
                            <h4 class="text-capitalize mt-3 mb-2"> {{ item.title }} </h4>                   
                            <p class="text-capitalize mb-2"> {{ item.para }} </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teamProf: {
                titleName: "Vestibulum ante ipsum primis vulputate ac metus semper.",
                myPara : "onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper. sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi. Vestibulum ante ipsum primis.",
                myImgs: [
                   {Img: require("../assets/images/team1.jpg"), title:"Elizabeth lisa", para:"Managing Director"},
                   {Img: require("../assets/images/team2.jpg"), title:"Mariza edisa", para:"Chief executive officer"},
                   {Img: require("../assets/images/team3.jpg"), title:"Elizabeth lisa", para:"Managing Director"},
                   {Img: require("../assets/images/team4.jpg"), title:"Elizabeth lisa", para:"Chief executive officer"},
                   {Img: require("../assets/images/team5.jpg"), title:"John thomson", para:"Managing Director"},
                   {Img: require("../assets/images/team6.jpg"), title:"Eliza smith", para:"Chief executive officer"},




                ]
            }
        }
    }
}
</script>