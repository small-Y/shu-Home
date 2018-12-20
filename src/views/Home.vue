<template>
    <div class="home">
        <div id="topnav">
            <div class="head-top">
                <div style="margin-left:50px;"></div>
                <div style="margin-right:50px;">
                欢迎来到优莱饰家建筑装饰有限公司&nbsp;&nbsp;咨询热线：4008-072575
                </div>
            </div>
            <div class="headMenu">
                <img src="../imgs/timg.jpg" alt="">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1"><router-link to="/">首页 </router-link></el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">关于优莱</template>
                        <el-menu-item index="2-1"><router-link to="/youlai">公司简介</router-link></el-menu-item>
                        <el-menu-item index="2-2"><router-link to="/honor">企业荣誉</router-link></el-menu-item>
                        <el-menu-item index="2-3"><router-link to="/ben">十大禁令</router-link></el-menu-item>
                        <el-menu-item index="2-4"><router-link to="/culture">企业文化</router-link></el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3"> <router-link to="/dynamic">公司动态</router-link></el-menu-item>
                    <el-menu-item index="4"><router-link to="/pack">装修套餐</router-link></el-menu-item>
                    <el-menu-item index="5"><router-link to="/case">家装案例</router-link></el-menu-item>
                    <el-menu-item index="6"><router-link to="/strategy">装修攻略</router-link></el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="mainview">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'home',
        data() {
            return {
                falg: false,
                islogin: true,
                username: '',
                activeIndex: '1',
            }
        }
    }
</script>
<style>
.home {
    margin-top: 30px;
}
#topnav{
  position: fixed;
  top: 0;
  width:100%;
  z-index: 100;
  box-shadow: 0 3px 15px rgb(99, 83, 83);
}
.head-top {
  line-height: 30px;
  font-size: 0.8rem;
  height: 30px;
  display: flex;
  color: #455a6e;
  background-color: #f3f3ee;
  justify-content: space-between;
}
.headMenu{
  display: flex;
  height: 80px;
  width:100%;
  background-color: #fff;
  box-shadow: 0 3px 15px rgb(99, 83, 83);
}
.headMenu img {
  width: 15%;
  height: 80px;
  margin-left: 3%;
  margin-right: 10%;
}
.el-menu-item,.el-submenu{
  padding-top: 10px;
  font-size: 1.1rem;
}
.el-submenu__title{
  font-size: 1.1rem;
}
.mainview {
    margin-top: 150px;
}
</style>