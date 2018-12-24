<template>
    <div class="brand">
        <div class="brandhead">
            <h1>品牌优势</h1>
            <p>厚道成立以来，为千余用户提供人力资源服务</p>
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
                        title: '资源汇聚  人力充足',
                        content1: '标准化的审核程序，严格的检验标准,',
                        content2: '与世界接轨的眼界，服务全国的胸襟,',
                        content3: '环环相扣，不留死角...',
                        img: 'brand1'
                    },
                    {
                        title: '助力中外企业 业务广泛',
                        content1: '厚道提供量身定做的人力资源服务',
                        content2: '经验丰富，鼎力相助',
                        content3: '。我们拥有严格的审核和服务制度...',
                        img: 'brand2'
                    },
                    {
                        title: '贴心服务员工 放心无忧',
                        content1: '“贴心服务”是我们的追求',
                        content2: '我们配备了专属的服务团队， 及时沟通、',
                        content3: '快速解决员工遇到的一切问题...',
                        img: 'brand3'
                    },
                    {
                        title: '诚心诚意 底价服务',
                        content1: '厚道提供的服务，',
                        content2: '均优于市场，质量有保证，',
                        content3: '以最低价直供客户...',
                        img: 'brand4'
                    },
                    {
                        title: '厚道服务，优服中价',
                        content1: '厚道服务，价格 ',
                        content2: '专为每一个用户打造的',
                        content3: '优服中价的定制服务...',
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