<template>
    <div class="footnav">
        <hr>
        <div class="footHead">
            <div>
                <img src='../imgs/licon1.png' alt="">
                <div class="h5cont">
                    <h5>水电防水</h5>
                    <h5 class='orange'>保修五年</h5>
                </div>
            </div>
            <div>
                <img src='../imgs/licon2.png' alt="">
                <div class="h5cont">
                    <h5>自有工人</h5>
                    <h5 class='orange'>绝不转包</h5>
                </div>
            </div>
            <div>
                <img src='../imgs/licon3.png' alt="">
                <div class="h5cont">
                    <h5>2小时水电</h5>
                    <h5 class='orange'>抢修服务</h5>
                </div>
            </div>
            <div>
                <img src='../imgs/licon4.png' alt="">
                <div class="h5cont">
                    <h5>60天工期</h5>
                    <h5 class='orange'>绝不拖延</h5>
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
                <p>全国咨询热线: 4008-072750</p>
                <p>总部地址: 北京市大兴区地盛北街一号院31号楼5层 &nbsp;&nbsp;&nbsp; 电话：0000-3827122 &nbsp; 13306668888</p>
                <p>分公司地址: 北京市朝阳取科学楼东路北行800米路西(松榆路农业银行分行斜对面) &nbsp;&nbsp;电话：0000-3854124 &nbsp; 13306245688</p>
                <p>客服QQ: 959234234 &nbsp; 1094829744&nbsp; 827391231 &nbsp;&nbsp; 投诉邮箱: kftsyx@sas.com</p>
                <p>友情链接:
                    <a href="#">西安装修公司</a>
                    <a href="#">优莱网</a>
                    <a href="#">北京房产网</a>
                    <a href="#">北京装饰公司</a>
                </p>
            </div>
            <div class="bodyright">
                <p><el-tag type="info">关注我们</el-tag></p>
                <img src="../imgs/weixin.jpg" alt="">
                <p>微信公众平台</p>
            </div>
        </div>
        <div class="footfoot">
            	Copyright © 2018 www.meiranzs.com All Rights Reserved 北京优莱装饰 版权所有 冀ICP备16014871号 网站统计
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
.footfoot {
    height: 40px;
    line-height: 40px;
    background-color: rgb(24, 20, 20);
    text-align: center;
    font-size: .9rem;
}
</style>