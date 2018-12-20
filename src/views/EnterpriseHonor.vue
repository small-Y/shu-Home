<template>
    <div class="honor">
        <div class="honortitle">优莱首页 > 企业荣誉</div>
        <div class="honorcont">
            <img class="img1" src="../imgs/honor1.jpg" alt="">
            <img class="img2" src="../imgs/honor2.jpg" alt="">
            <img class="img1" src="../imgs/honor3.jpg" alt="">
            <img class="img1" src="../imgs/honor4.jpg" alt="">
        </div>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'honor',
        components: {
            FootCont  
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
.honortitle{
    margin-left: 210px;
    font-size: .8rem;
}
.honorcont{
    width: 75%;
    margin:10px auto 30px auto;
    background-color: #fff;
    padding: 30px 20px;
}
.honorcont .img1{
    width: 100%;
}
.honorcont .img2{
    width: 60%;
    height: 450px;
    margin-left: 200px;
}
</style>