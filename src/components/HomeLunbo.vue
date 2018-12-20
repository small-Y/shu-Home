<template>
    <el-carousel :interval="4000" arrow="always">
        <el-carousel-item v-for="item in 6" :key="item">
            <img :src='"../imgs/lunbo"+item+".jpg"' alt="">
        </el-carousel-item>
    </el-carousel>
</template>
<style>
.home-lunbo .el-carousel,.el-carousel__container {
    height: 580px;
}
.el-carousel img{
    width: 100%;
    height: 100%;
}
</style>
