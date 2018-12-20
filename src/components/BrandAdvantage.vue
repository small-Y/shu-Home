<template>
    <div class="brand">
        <div class="brandhead">
            <h1>品牌优势</h1>
            <p>优莱饰家成立10年来，为千余户业主提供家装等装修服务</p>
            <div class="brandbody">
                <div v-for="(item,i) in brandList">
                    <img :src='"../imgs/brand"+(i+1)+".jpg"' alt="">
                    <h4>{{item.title}}</h4>
                    <p>{{item.content1}}</p>
                    <p>{{item.content2}}</p>
                    <p>{{item.content3}}</p>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
    export default {
        name: 'brand',
        data() {
            return {
                brandList: [
                    {
                        title: '80道工艺标准  严格质检',
                        content1: '标准化的施工工序，严格的检验标准,',
                        content2: '按要求时时质检，自检互检相结合,',
                        content3: '环环相扣，不留死角...',
                        img: 'brand1'
                    },
                    {
                        title: '100%自有工人 绝不分包',
                        content1: '优莱装饰负责施工的工人100%是自有',
                        content2: '工人，经验丰富，爱岗敬业',
                        content3: '。我们拥有严格的工人选拔及奖惩制度...',
                        img: 'brand2'
                    },
                    {
                        title: '五星服务 放心无忧',
                        content1: '装修全程为您提供全天候的服务，',
                        content2: '我们配备了专属的服务团队， 及时沟通、',
                        content3: '快速解决您装修中遇到的一切问题...',
                        img: 'brand3'
                    },
                    {
                        title: '15大一线品牌 底价直供',
                        content1: '优莱装饰使用的主材，',
                        content2: '均来自市场一线品牌，质量有保证，',
                        content3: '以最低价直供客户...',
                        img: 'brand4'
                    },
                    {
                        title: '优莱家具，高配中价',
                        content1: '优莱橱柜、衣柜， ',
                        content2: '专为城市精英阶层打造的',
                        content3: '高配中价的定制家具...',
                        img: 'brand5'
                    }
                ]
            }
        }
    }
</script>
<style>
.brandhead {
    width: 75%;
    height: 350px;
    margin: 45px auto;
    text-align: center;
}
.brandhead  h1,h4{
    color: orange;
}
.brandbody {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
.brandbody img{
    border-radius: 50%;
    margin-bottom: 10px;
}
.brandbody h4 {
    margin: 5px 0 10px 0;
}
.brandhead p{
    margin-top: 5px;
    font-size: 0.8rem;
}
</style>