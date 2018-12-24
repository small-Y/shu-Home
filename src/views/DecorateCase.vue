<template>
    <div class="decoratecase">
        <div class="casetitle">优莱首页 > 政策法规</div>
        <div class="case">
            <p>全面推开营改增试点迎来首个周年之际，我国近日亮出简并增值税税率等减税降费新举措。权威专家指出，此举对外释放出更坚定为实体经济降成本的信号，也将我国借力财税体制改革助推经济转型升级的大棋局更清晰地展现给世界。</p>
            <h4>引领全球增值税改革浪潮</h4>
            <p></p>
            <h4>减负方案提振实体经济信心</h4>
            <p></p>
            <h4>要让企业减负“更有感”</h4>
            <p></p>
        </div>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'case',
        components: {
          FootCont  
        },
        data() {
            return {
                
            }
        }
    }
</script>
<style scoped>
    .casetitle {
        margin-left: 210px;
        font-size: .8rem;
    }
    .case {
        width: 75%;
        margin:10px auto 30px auto;
        background-color: #fff;
        padding: 30px 20px;
        min-height: 40vh;
    }
    .case h4 {
        margin: 10px;
    }
    .case p{
        margin: 5px;
        font-size: .9rem;
        text-indent: 2em;
    }
</style>