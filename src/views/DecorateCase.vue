<template>
    <div class="decoratecase">
        <div class="casetitle">优莱首页 > {{casestyle}}</div>
        <div class="case">
            <div class="type">
                <div class="classNav">
                    <strong>家装风格分类：</strong>
                    <li @click='changeImg(item)' v-for='(item,i) in TypeList' :key="i">{{item.text}}</li>
                </div>
            </div>
            <div class="caseCont">
                <div v-for="(item,i) in imgList" :key='i'>
                    <img :src='"../imgs/"+item.img_url + ".png"' alt="">
                </div>
            </div>
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
                casestyle: '现代简约',
                initV: {
                    text: '现代简约',
                    type: 'modern'
                },
                TypeList: [
                    {
                        text: '现代简约',
                        type: 'modern'
                    },
                    {
                        text: '中式风格',
                        type: 'chinese'
                    },
                    {
                        text: '欧式风格',
                        type: 'ou'
                    },
                    {
                        text: '美式风格',
                        type: 'us'
                    },
                    {
                        text: '乡村田园',
                        type: 'rural'
                    },
                    {
                        text: '地中海',
                        type: 'mediter'
                    },
                    {
                        text: '北欧',
                        type: 'nodic'
                    },
                    {
                        text: '新中式',
                        type: 'newChinese'
                    },
                    {
                        text: '混搭',
                        type: 'mix'
                    }
                ],
                imgList: [],
            }
        },
        created () {
            this.changeImg(this.initV)
        },
        methods: {
            changeImg(v) {
                this.casestyle = v.text;
                var url = '/user/message/img?type=' + v.type;
                this.$http.get(url).then(res=>{
                    this.imgList = res.data.data;
                }).catch(err=>{
                    console.log(err);
                })
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
    .type div {
        display: flex;
        font-size: .9rem;
    }
    .type div strong {
        margin-right: 15px;
        color: rgb(70, 66, 66);
    }
    .type div li {
        list-style: none;
        padding: 0 10px;
        cursor: pointer;
    }
    .classNav {
        margin: 0 auto 10px auto;
    }
    .caseCont {
        margin: 10px auto 5px auto;
        padding: 15px;
    }
    .caseCont div {
        margin: 8px;
        display: inline-block;
    }
    .caseCont div img {
        width: 330px;
        height: 240px;
    }
</style>