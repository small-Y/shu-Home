<template>
    <div class="ben">
        <div class="bentitle">厚道首页 > 工作原则</div>
        <div class="tenben">
            <p>1.保护客户权益    </p>
            <p>有责任加强被推荐人和客户之间的沟通</p>
            <p>使被推荐的人才工作稳定且发挥最大效益。</p>
            <p>2.保守客户机密    </p>
            <p>对客户委托项目信息及商业秘密保密。</p>
            <p>  维护候选人的职业安全。</p>
            <p>3.严守职业准则    </p>
            <p>不把同一位候选人的资料同时向多家客户推荐。</p>
            <p>  不挖合作客户现有人才。</p>
            <p>  不接没有一定把握的项目，不接客户管理现状很差而且难以改善的项目。</p>
        </div>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'ben',
        components: {
            FootCont  
        }
    }
</script>
<style>
.bentitle{
    margin-left: 210px;
    font-size: .8rem;
}
.tenben {
    width: 75%;
    background-color: #fff;
    margin:10px auto 30px auto;
    padding: 40px 20px;
    min-height: 40vh;
}
.tenben p{
    margin: 5px;
    line-height: 25px;
    font-size: .9rem;
}
</style>
