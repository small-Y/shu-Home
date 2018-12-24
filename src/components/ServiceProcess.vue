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
                        title: '咨询签约',
                        content: '专属客服一对一咨询'
                    },
                    {
                        title: '支付定金',
                        content:'预付费签订合同'
                    },
                    {
                        title: '提交材料',
                        content:'提交相关材料'
                    },
                    {
                        title: '申请办理',
                        content:'公司进行业务办理'
                    },
                    {
                        title: '办理成功',
                        content:'结束用户办理业务'
                    },
                    {
                        title: '结清尾款',
                        content:'付清业务剩余金额'
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