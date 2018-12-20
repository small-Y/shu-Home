<template>
    <div class="youlai">
        <el-card class="box-card">
            <p class="ylTitle">关于优莱</p>
            <div class="text">
                <p>优莱建筑装饰有限公司是一家集室内外设计和施工于一体的专业化装饰公司，公司于2012年4月正式成立，发展至今以优质的装修品质和良好的售后服务得到了广大客户的信赖，目前为保定装饰协会会员单位，涿州邮政储蓄银行综合消费贷款合作伙伴，涿州论坛合作商户，装饰网推荐品牌，自成立至今，已为1000余户业主提供装修服务，2017年7月，优莱装饰商标在国家工商行政管理总局注册成功，标志着优莱装饰走上了品牌化道路。</p>   
                <p>2015年公司在高碑店注册成立高碑店分公司，目前已承接高碑店天阔三期、高碑店万和城、林语国际、公园大道、香林漫城、玫瑰园等100余户，在定兴承接了多个项目，得到了广大业主好评。</p>
                <p>公司现有经验丰富的专职设计师8名，其中有两名行业获奖设计师，可以根据客户的不同需求进行量身设计，同时对施工过程进行全程跟单服务，确保施工成品与设计一致。</p>
                <p>为确保质量和服务符合客户要求，优莱装饰摒弃了行业内惯用的以工程承包为特点的工长模式，实行自有工人，直接管理，目前有施工人员40余名，工种齐全。施工人员手艺精湛，做事踏实，工程质量验收执行北京市地方标准（《居住建筑装修装饰工程质量验收规范》）。</p>
                <p>为降低客户的装修成本，优莱装饰独家代理了固诺家居、宏浪卫浴、金牌卫浴、金牌集成吊顶，与新中源磁砖、惠达卫浴、品格集成吊顶、多乐士涂料、金德水管、日丰管、绿灯行电缆等十多个一线建材品牌建立了稳固的战略合作关系，公司有1000平米主材展厅，真正实现一站式装修服务。</p>    
                <p>公司合同参照北京市标准文本制定，权责清晰，公司秉承“诚信做人，认真做事”的经营理念，凭借创新和装饰设计、精良的施工工艺，优质的全程服务，真诚的为每一位顾客，量身定制优雅舒适的居家生活和优美的商业空间。</p>
            </div>
        </el-card>
        <el-card class="box-card">
            <p class="ylTitle">联系方式</p>
            <div class="ylwx">
               <img src='../imgs/weixin.jpg' alt=""> 
               <h5>扫描二维码关注优莱微信公众号</h5>
            </div>
            <div class="yldh">
                <h1 class="orange">4008-072750</h1>
                <p>北京总部地址：北京市大兴区地盛北街一号院31号楼五层（软件园）</p>
                <p>电话：032-3933092&nbsp;&nbsp;15123544244</p>
                <p>分部地址：迎宾东路农业发展银行对面（宜家旺阳光商厦东行500米路北）</p>
                <p>电话：0312-2991998&nbsp;&nbsp;18103223313</p>
                <p>客服QQ：2857814823&nbsp;&nbsp;　592907756　&nbsp;&nbsp;1014233596</p>
                <p>投诉邮箱：mrzs2012@sina.com</p>
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