<template>
    <div class="youlai">
        <el-card class="box-card">
            <p class="ylTitle">关于厚道</p>
            <div class="text">
                <p>苏州厚道人力资源服务有限公司（以下简称：厚道苏州公司）成立于2018年，注册资金1000万元人民币， 厚道苏州公司秉承苏州人力资源服务有限公司“本土化的服务，国际化的标准”之使命及“诚信，专业，真情，合作，责任”的价值观，致力于为苏南地区企业客户和员工提供高品质、高效率、专业化的人力资源服务。近年来，随着业务的蓬勃发展，厚道苏州公司的规模快速扩张，服务体系也日益成熟。</p>   
                <p>为了更好地为客户提供本土化的优质服务，公司入住苏州园区人力资源核心产业园近千平方米的写字楼。随着近年来持续、快速的发展，苏州厚道员工已增至100人，并在苏南多地开设分公司，逐步建成了一个规模庞大的专业化人力资源服务网络。</p>
                <p>2018年，厚道苏州公司有幸延续厚道对苏州“千人人才战略”的优质服务，被成功选定为苏州人才市场指定人力资源服务商，为苏州近百家企业的工作人员提供贴心的人力资源服务。</p>
                <p>作为苏州人力资源服务优秀供应商之一的苏州厚道，充分利用全国广阔的网络优势和良好的政府背景优势，实行一业为主、多业并举的战略方针，形成以人力资源外包服务为主体，贯穿人事服务（人事代理、劳务派遣）、业务流程外包（BPO)、猎头&招聘、专业人才背调、员工福利外包、签证及注册代理、人力资源咨询及培训、员工健康服务（员工中高医疗、体检、企业EAP）、员工活动策划、法律咨询、财务外包、人资选HR SaaS系统及其他相关服务等多个领域，以人力资源伙伴为企业提供全方位专业服务的人力资源服务提供方。</p>
                
            </div>
        </el-card>
        <el-card class="box-card">
            <p class="ylTitle">联系方式</p>
            <div class="ylwx">
               <img src='../imgs/weixin.jpg' alt=""> 
               <h5>扫描二维码关注厚道微信公众号</h5>
            </div>
            <div class="yldh">
                <h1 class="orange">4008-357027</h1>
                <p>所在地区: 江苏省苏州市苏州工业园区苏州工业园区直属镇</p>
                <p>详细地址: 凤里街336号苏州人力资源服务产业园</p>
                <p>电话：王志慧 &nbsp;&nbsp;185 5053 7762</p>
                <p>QQ：2604707686&nbsp;&nbsp;</p>
                <p>公司邮箱：2604707686@qq.com</p>
            </div>
        </el-card>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'youlai',
        components: {
            FootCont
        },
        data() {
            return {

            }
        }
    }
</script>
<style>
.box-card {
    margin: 20px auto;
    width: 75%;
}
.ylTitle {
    text-align: center;
    font-size: 1.3rem;
}
.text {
    font-size: 14px;
    margin-bottom: 18px;
}
.text p{
    font-size: 1rem;
    line-height: 25px;
    width: 95%;
    padding-left: 35px;
    text-indent: 2em;
    padding-top: 10px;
}
.ylwx {
    float: left;
    padding-left: 80px;
}
.ylwx img{
    margin-top: 30px;
    width: 260px;
    height: 260px;
}
.ylwx h5{
    text-align: center;
    padding-bottom: 30px;
}
.yldh {
    float: right;
    text-align: center;
    padding-right: 80px;
}
.yldh h1 {
    font-size: 3.5rem;
    margin: 10px 0;
}
.yldh p {
    line-height: 25px;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 5px;
}
</style>