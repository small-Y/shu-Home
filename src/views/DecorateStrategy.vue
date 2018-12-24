<template>
    <div class="strategy">
        <div class="strategytitle">优莱首页 > 企业寄语</div>
        <div class="case">
            <p>纵观当今世界，人力资源行业作为推动世界经济发展的不竭动力，已经成为发达国家的重要支柱产业。而在中国，人力资源服务产业在改革开放的浪潮中迅速崛起，经过30年的探索和发展，也成为了令人瞩目的“朝阳产业”，为中国国民经济的发展增添了光彩，带来了新的机遇！</p>
            <p>凭借专业和热忱的服务，凭借创新和进取的精神，苏州厚道在为客户创造价值的同时，也与客户一同成长，壮大，成为中国人力资源行业中的新生力量。为此，我要向我们尊贵的客户致以衷心的感谢与崇高的敬意。感谢你们多年来对厚道的“厚”爱；感谢你们给予我们机会去铺展一个为客户提供优质服务的舞台。</p>
            <p>苏州厚道人力资源服务有限公司拥有高效专业的服务团队, 拥有蓬勃的朝气和活力，我们众志成城，蓄势待发；我们立志站在新的起点，实现新的跨越，发挥厚道的雄厚实力和人力资源服务的丰富经验，竭诚与广大客户同舟同济，互惠互利，实现双赢！我们真心的付出，期盼能获得您一如既往的信任与支持！</p>
            <p>“老牛明智夕阳短，不需扬鞭自奋蹄”，我们将不断为客户创造价值，为人力资源产业再造辉煌！</p>
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
.strategytitle {
    margin-left: 210px;
    font-size: .8rem;
}
.case{
    width: 75%;
    margin:10px auto 30px auto;
    background-color: #fff;
    padding: 20px 20px;
    min-height: 40vh; 
}
.case h4 {
    margin: 10px;
}
.case p{
    margin: 5px;
    font-size: 1.5rem;
    text-indent: 2em;
}
</style>