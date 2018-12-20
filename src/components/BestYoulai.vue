<template>
    <div class="bestyou">
        <hr>
        <h1>口碑见证品质</h1>
        <div class="kblb">
            <el-carousel :interval="3000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <img :src='"../imgs/koubei"+item+".jpg"' alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="youlaiCont">
            <div class="gsdt" >
                <h3>
                    <span class="h-left">公司动态</span>
                    <span class="h-right" @click="toDynamic">more+</span>
                </h3>
                <p>
                    <span class="p-left">优莱装饰2018年度工作会议在涿州诚信大厦顺利召开</span>
                    <span class="p-right">2018-02-06</span>
                </p>
                <p>
                    <span class="p-left">优莱装饰质量服务月圆满结束</span>
                    <span class="p-right">2018-02-01</span>
                </p>
                <p>
                    <span class="p-left">优莱装饰与固诺家居达成合作协议，在整体家装的道路上</span>
                    <span class="p-right">2018-01-11</span>
                </p>
                <p>
                    <span class="p-left">优莱装饰装修质量服务月启动</span>
                    <span class="p-right">2018-01-01</span>
                </p>
                <p>
                    <span class="p-left">秦心设计师获艾舍奖新锐设计师称号</span>
                    <span class="p-right">2018-01-01</span>
                </p>
                <p>
                    <span class="p-left">蒙娜丽莎磁砖进驻优莱装饰</span>
                    <span class="p-right">2017-11-07</span>
                </p>
                <p>
                    <span class="p-left">优莱装饰十月装修盛惠进行中</span>
                    <span class="p-right">2017-10-05</span>
                </p>
            </div>
            <div class="zxrx">
                <h3><span class="h-left">全国咨询热线：</span></h3>
                <img src="../imgs/tel.jpg" alt="">
                <h4><span class="h-left">总部地址：</span></h4>
                <p class="h-left">北京市大兴区地盛北街一号院31号楼5层</p>
                <h4><span class="h-left">分公司地址：</span></h4>
                <p class="h-left">北京市朝阳区科学楼东路北行800米路西</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'bestyoulai',
        methods: {
            toDynamic() {
                this.$router.push('/dynamic');
            }
        }
    }
</script>
<style>
.bestyou {
    height: 660px;
    width: 75%;
    margin: 20px auto;
}
.bestyou h1{
    text-align: center;
    color: orange;
    margin: 30px auto;
}
.kblb {
    width: 90%;
    margin: 20px auto;
}
.kblb .el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.kblb .el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.youlaiCont{
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
}
.gsdt,.zxrx {
    width: 49%;
    background-color: white;
    border: 1px solid rgb(238, 206, 206);
}
.gsdt h3{
    background-color: orange;
    color: #fff;
    line-height: 40px;
    margin-bottom: 10px;
}
.h-left {
    padding-left: 30px;
}
.h-right {
    float: right;
    cursor: pointer;
    padding-right: 30px;
}
.gsdt p {
    padding: 5px 0 ;
    font-size: .9rem;
}
.p-left{
    display: inline-block;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 10px;
}
.p-right{
    float: right;
    padding-right: 10px;
}
.zxrx img {
    width: 90%;
}
.zxrx h3 {
    margin-top: 8px;
}
.zxrx h4 {
    color: black;
    margin-top: 10px;
}
.zxrx p{
    font-size: .9rem;
    margin-top: 5px;
}
</style>