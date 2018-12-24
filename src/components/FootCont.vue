<template>
    <div class="footnav">
        <hr>
        <div class="footHead">
            <div>
                <img src='../imgs/licon1.png' alt="">
                <div class="h5cont">
                    <h5>专业服务</h5>
                    <h5 class='orange'>服务保障</h5>
                </div>
            </div>
            <div>
                <img src='../imgs/licon2.png' alt="">
                <div class="h5cont">
                    <h5>自有员工</h5>
                    <h5 class='orange'>绝不转包</h5>
                </div>
            </div>
            <div>
                <img src='../imgs/licon3.png' alt="">
                <div class="h5cont">
                    <h5>品质服务</h5>
                    <h5 class='orange'>品质保障</h5>
                </div>
            </div>
            <div>
                <img src='../imgs/licon4.png' alt="">
                <div class="h5cont">
                    <h5>按时服务</h5>
                    <h5 class='orange'>时间保障</h5>
                </div>
            </div>
            <div>
                <img src='../imgs/licon5.png' alt="">
                <div class="h5cont">
                    <h5>专职设计</h5>
                    <h5 class='orange'>全程跟单</h5>
                </div>
            </div>
        </div>
        <div class="footbody">
            <div class="bodyleft">
                <el-tag type="info">联系我们</el-tag>
                <p>咨询热线: 185 5053 7762</p>
                <p>所在地区:  江苏省苏州市苏州工业园区苏州工业园区直属镇 &nbsp;&nbsp;&nbsp; 电话：185 5053 7762 &nbsp; </p>
                <p>详细地址: 凤里街336号苏州人力资源服务产业园 &nbsp;&nbsp;电话：185 5053 7762 &nbsp; </p>
                <p>公司QQ: 2604707686 &nbsp;  &nbsp;&nbsp; 公司邮箱: 2604707686@qq.com</p>
            </div>
            <div class="bodyright">
                <p><el-tag type="info">关注我们</el-tag></p>
                <img src="../imgs/weixin.jpg" alt="">
                <p>微信公众平台</p>
            </div>
        </div>
        <div class="footfoot">
            	Copyright © 2018 www.meiranzs.com All Rights Reserved 苏州厚道 版权所有 冀ICP备16014871号 网站统计
        </div>
    </div>
</template>
<script>
    export default {
        name: 'footnav',
        data() {
            return {
                
            }
        }
    }
</script>
<style>
.footnav {
    background-color: #fff;
    border-bottom: 1px solid #333;
}
.footHead {
    height: 60px;
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.footHead div {
    width: calc(70% / 5);
} 
.footHead div img{
    float:left;
    border: 2px solid #8a8a8a;
    border-radius: 20%;
}
.footHead div div.h5cont {
    width: 50%;
    float: right;
}
.footbody {
    background-color: #333;
    clear: both;
    height: 230px;
    display: flex;
    color: white;
    font-size: 0.9rem;
}
.bodyleft {
    padding: 30px 0 30px 60px;
    height: 230px;
    width: 80%;
} 
.bodyleft .el-tag {
    font-size: 1rem;
}
.bodyleft p {
    margin-top: 10px;
}
.bodyright {
    width: 10%;
    padding-top: 20px;
}
.bodyright .el-tag {
    font-size: 1rem;
}
.bodyright p {
    margin: 10px 0 10px 0;
    padding-left: 20px;
}
.bodyright img{
    width: 150px;
    height: 120px;
}
.footfoot {
    height: 40px;
    line-height: 40px;
    background-color: rgb(24, 20, 20);
    text-align: center;
    font-size: .9rem;
}
</style>