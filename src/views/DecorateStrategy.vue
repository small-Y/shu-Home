<template>
    <div class="strategy">
        <div class="strategytitle">优莱首页 > {{strategyName}}</div>
        
        <div class="case">
            <el-tabs v-model="activeName"  @tab-click="handleClick">
                <el-tab-pane label="装修日记" name="first">
                    <decorate-diary></decorate-diary>
                </el-tab-pane>
                <el-tab-pane label="装修资讯" name="second">
                    <decorate-info></decorate-info>
                </el-tab-pane>
                <el-tab-pane label="装修问答" name="third">
                    <que-ans></que-ans>
                </el-tab-pane>
            </el-tabs>
        </div>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import DecorateDiary from '@/components/DecorateDiary.vue'
    import DecorateInfo from '@/components/DecorateInfo.vue'
    import QueAns from '@/components/QueAns.vue'
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'case',
        components: {
            FootCont,DecorateDiary,DecorateInfo, QueAns
        },
        data() {
            return {
                activeName: 'first',
                strategyName: '装修日记',
            }
        },
        methods: {
            handleClick(tab,) {
                this.strategyName = tab.label;
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
</style>