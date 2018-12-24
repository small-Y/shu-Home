<template>
    <div class="decorate">
        <div class="decoratetitle">厚道首页 > 核心服务</div>
        <div class="decoratecon">
            <h4>一、高端猎头测评</h4>
            <h5>1.高端人才招聘</h5>
            <p>近年来随着经济的转型升级，人才智力成为经济增长的重要驱动因素，企业对高级人才的需求越来越多。</p>
            <p>应不少客户公司的要求，同时结合自身的一些行业资源优势，苏州厚道公司决定成立猎头事业部，开展高端人才猎聘业务。</p>
            <p>2018年6月份苏州厚道公司的猎头项目应时而生，目前，厚道猎头团队主要成员有6个人，均有5年以上猎头从业经验，厚道公司的猎头项目开始扬帆起航！</p>
            <h5>2.人才测评</h5>
            <h4>二、人力资源外包</h4>
            <h5>1.人事代理</h5>
            <h5>2.劳务派遣</h5>
            <h5>3.灵活用工</h5>
            <h4>三、生产作业外包</h4>
            <h5>1.岗位外包</h5>
            <h5>2.生产外包</h5>
            <h5>3.项目外包</h5>
            <h4>四、档案整理外包</h4>
            <h5>1.档案整理</h5>
            <h5>2.档案数字化</h5>
            <h5>3.档案寄存</h5>
            <h4>五、管理咨询培训</h4>
            <h5>1.hr管理咨询</h5>
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
    .decoratetitle{
        margin-left: 210px;
        font-size: .8rem;
    }
    .decoratecon {
        width: 75%;
        margin:10px auto 30px auto;
        background-color: #fff;
        padding: 30px 20px;
        min-height: 40vh;
    }
    .decoratecon h4 {
        margin: 10px;
    }
    .decoratecon p{
        margin: 5px;
        font-size: .9rem;
        text-indent: 2em;
    }
</style>