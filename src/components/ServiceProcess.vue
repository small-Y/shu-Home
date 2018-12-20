<template>
    <div class="process">
        <h1>服务流程</h1>
        <p>一站式体验 标准化服务为您省心省力 品质保证高端体验</p>
        <div class="processbody">
            <div class="processCont" v-for="(item,i) in processList">
                <img :src='"../imgs/process"+(i+1)+".png"' alt="">
                <h4>{{item.title}}</h4>
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'process',
        data() {
            return {
                processList: [
                    {
                        title: '在线预约',
                        content: '专属客服一对一回访'
                    },
                    {
                        title: '邀请到店',
                        content:'参观线下实景样板间'
                    },
                    {
                        title: '确定方案',
                        content:'设计师免费上门量房'
                    },
                    {
                        title: '签订合同',
                        content:'签订合同及交付装修款'
                    },
                    {
                        title: '装修施工',
                        content:'严格按照标准化施工'
                    },
                    {
                        title: '竣工验收',
                        content:'验收通过全屋装修指标'
                    },
                    {
                        title: '装修保障',
                        content:'享受国家标准质保'
                    }
                ]
            }
        }
    }
</script>
<style>
.process {
    width: 75%;
    margin: 40px auto;
}
.process h1{
    text-align: center;
    color: orange;
    font-size: 2rem;
    padding: 5px;
    border-radius: 10px;
}
.process p{
    text-align: center;
    margin-top: 5px;
    font-size: 0.8rem;
}
.processbody {
    display: flex;
    justify-content: space-around;
    margin: 50px 0 30px 0;
}
.processCont {
    width: calc(70% / 7);
    margin: 5px 20px;
} 
.processCont img {
    width: 110px;
    height: 110px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}
.processCont h4 {
    text-align: center;
}
</style>