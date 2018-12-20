<template>
    <div class="decorate">
        <img class="taocan1" src="../imgs/taocan1.jpg" alt="">
        <div class="taocan2">
            <img class="imgpack" src="../imgs/taocan2.jpg" alt="">
            <img class="imgpack" src="../imgs/taocan3.jpg" alt="">
        </div>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'decorate',
        components: {
            FootCont
        }
    }
</script>
<style>
    .decorate {
        margin-top: -40px;
    }
    .taocan1{
        width: 100%;
        height: 500px;
    }
    .taocan2 {
        width: 80%;
        margin: 20px auto;
    }
    .imgpack {
        margin: 10px 0 30px 0;
    }
</style>