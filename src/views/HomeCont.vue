<template>
    <div class="homecont">
        <home-lunbo></home-lunbo>
        <brand-advantage></brand-advantage>
        <!-- <optimal-works></optimal-works> -->
        <service-process></service-process>
        <best-youlai></best-youlai>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import HomeLunbo from '@/components/HomeLunbo.vue'
    import BrandAdvantage from '@/components/BrandAdvantage.vue'
    import OptimalWorks from '@/components/OptimalWorks.vue'
    import ServiceProcess from '@/components/ServiceProcess.vue'
    import BestYoulai from'@/components/BestYoulai.vue'
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'homecont',
        components: {
            HomeLunbo,BrandAdvantage,OptimalWorks,ServiceProcess,BestYoulai,FootCont
        },
        data() {
            return {

            }
        },

    }
</script>
<style>
    .homecont {
        margin-top: -40px;
    }
</style>