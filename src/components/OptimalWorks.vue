<template>
    <div class="works">
        <h1>厚道服务作品</h1>
        <p><span>更多>></span></p>
        <div class="worksContainer">
            <div v-for="(item,i) in worksList" :key='i'>
                <img :src='"../imgs/img"+(i+1)+".jpg"' alt="">
                <h4>{{item.title}}</h4>
                <p><b>设计师：</b> {{item.designer}}</p>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
    export default {
        name: 'works',
        data() {
            return {
                worksList: [
                    {
                        title: '南湖小区装修效果图',
                        designer: '包红军',
                        num: 1,
                    },
                    {
                        title: '朝华园小区装修效果图',
                        designer: '包红军',
                        num: 1,
                    },
                    {
                        title: '金玉门装修效果图',
                        designer: '包红军',
                        num: 1,
                    },
                    {
                        title: '御景小区装修效果图',
                        designer: '包红军',
                        num: 1,
                    },
                    {
                        title: '北京南湖校区装修效果图',
                        designer: '包红军',
                        num: 1,
                    },
                    {
                        title: '钻石广场装修效果图',
                        designer: '琴心',
                        num: 2,
                    },
                    {
                        title: '街心广场装修效果图',
                        designer: '琴心',
                        num: 2,
                    },
                    {
                        title: '香山别墅装修效果图',
                        designer: '琴心',
                        num: 2,
                    },
                    {
                        title: '莽山别墅装修效果图',
                        designer: '琴心',
                        num: 2,
                    }
                ]
            }
        }
    }
</script>
<style>
.works {
    margin-top: 20px;
}
.works h1 {
    text-align: center;
    color: orange;
    font-size: 2rem;
    padding: 5px;
    border-radius: 10px;
}
.works p {
    width: 75%;
    margin: 0 auto;
    padding-bottom: 10px;
}
.works p span {
    float: right;
}
.worksContainer {
    width: 75%;
    /* height: 700px; */
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #fff;
    padding-top: 20px;
}
.worksContainer div {
    padding: 10px 25px;
    text-align: center;
}
.worksContainer div img {
    width: 320px;
    height: 150px;
}
.worksContainer div h4{
    color: black;
} 
</style>