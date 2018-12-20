<template>
    <div class="ben">
        <div class="bentitle">优莱首页 > 十大禁令</div>
        <div class="tenben">
            <p>1.严禁怠慢业主或与业主发生冲突，不管是任何理由，业主是我们的衣食父母，我们的任何言行都代表了公司的管理素养。</p>
            <p>2.严禁降低质量和材料标准，我们承诺了就要做到，这是诚实的表现，而诚实是做人的基本素质。</p>
            <p>3.严禁任何人向业主吃拿卡要，公司已经付给了员工合理的报酬，为业主服务是每一名员工的责任，贪婪是一种恶习。</p>
            <p>4.严禁收受供应商的财物及劳务，供应商不会做亏本的买卖，当他大方地馈赠你时，一定想从你这里得到什么，切忌不要被糖衣炮弹打倒。</p>
            <p>5.严禁在办公室及与不吸烟的客户洽谈时吸烟，在不吸烟的人眼中，吸烟并不优雅，而是令人厌恶。</p>
            <p>6.严禁工作时间衣冠不整、不修边幅，那是缺乏严谨态度的表现，业主不会放心把自己的新家交给有这种员工的公司去装修。</p>
            <p>7.严禁蔑视、污辱、讥讽同事，公司每个岗位都有其存在的价值，都应该得到应有的尊重，个人英雄主义最后的结局都是悲剧。</p>
            <p>8.严禁工作时间做工作以外的事情，公司为每一位员工按工作时间支付报酬，不认真工作就形同偷盗。</p>
            <p>9.严禁诋毁公司，如果您觉得公司有问题，那适当的方式应该向公司反馈，这才能体现你的能力和价值，诋毁公司只能自损形象。</p>
            <p>10.严禁私自接单，转单，干私活，对公司不忠诚的结果只有走人。</p>
        </div>
        <foot-cont></foot-cont>>
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
}
.tenben p{
    margin: 5px;
    line-height: 25px;
    font-size: .9rem;
}
</style>
