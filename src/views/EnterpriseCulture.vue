<template>
    <div class="culture">
        <div class="culturetitle">厚道首页 > 企业文化</div>
        <div class="culcont">
            <p>苏州厚道在企业发展过程中，高度重视企业文化“软实力”建设，坚持一手抓经营管理，一手抓企业文化建设，形成了包括使命、愿景、核心价值观、
            客户服务理念等在内的较为系统的企业文化体系，增强了企业核心竞争能力，促进了企业可持续发展。</p>
            <h4>1、使命：汇聚人力资本 助力中外企业 服务职场员工</h4>
            <h4>2、愿景:成为中国人力资源服务行业的领导者</h4>
            <h4>3、核心价值观:  诚信、专业、真情、合作、责任</h4>
            <h4>4、客户服务理念</h4>
            <h5>（1）无限汇聚人力资本</h5>
            <p>资本的概念源于三个方面：厚道立足于10年服务经验的潜心积淀；汇聚整合了政府、高校、奥组委、志愿者协会、广大三资企业，国营企业、民营企业、非公经济组织，以及厚道全国各地的各类渠道；并运筹着近万名外派员工的精良群体--形成了雄厚的资源协调把控力以及服务全国的眼界与胸襟，在人力资源服务领域更加游刃有余。</p>
            <h5>（2）竭诚助力中外企业</h5>
            <p>凭借这种无可比拟的巨大优势，厚道为广大不同性质的中外企业提供着量身定做的人力资源服务，使厚道专业服务商的身份与作用更加显著，无论是广大三资企业，还是国营企业、民营企业乃至政府机关、非公经济组织皆能够更加专注于自身核心竞争力的提升与发展。 </p>
            <h5>（3）贴心服务职场员工  </h5>
            <p>“贴心服务”的经营理念与企业文化作为厚道大力倡导的核心价值与恒久不变的追求，将在广大厚道人今后的工作于服务中得到进一步的弘扬与诠释。厚道将以更加充满人性化的员工服务与关怀确保近万名外派员工在工作中享受到最贴心的福利保障以及职业生涯规划。</p>
        </div>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'culture',
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
    .culturetitle{
        margin-left: 210px;
        font-size: .8rem;
    }
    .culcont {
        width: 75%;
        margin:10px auto 30px auto;
        background-color: #fff;
        padding: 30px 20px;
    }
    .culcont h4 {
        margin: 10px;
    }
    .culcont p{
        margin: 5px;
        font-size: .9rem;
        text-indent: 2em;
    }
</style>