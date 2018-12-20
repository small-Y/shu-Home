<template>
    <div class="infomation">
        <p v-if='isTrue' style="color:rgb(185, 193, 201)">对不起哦，目前还没有相关装修日记呦！请耐心等待！</p>
        <div v-if='hasDate'>
            <div class="dynews" v-for="(item,i) in infoData" :key="i">
                <h4>{{item.title}}</h4>
                <p>{{item.time}}</p>
                <p>{{item.context}}</p>
                <p>
                    <i class="el-icon-star-on">赞&nbsp;{{item.zan}}</i>
                    <i class="el-icon-view">浏览&nbsp;{{item.see}}</i>
                </p>
                <p>___________________________________________________________________________________________________________________________________</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'infomation',
        data() {
            return {
                isTrue: false,
                hasDate: true,
                infoData: []
            }
        },
        mounted () {
            this.getDate();
        },
        methods: {
            getDate() {
                this.$http.get('/user/message/info').then(res=>{
                    if (res.data.data.length > 0) {
                        this.infoData = res.data.data;
                    } else {
                        this.isTrue = true;
                        this.hasDate = false;
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style scoped>
.dyncont {
    width: 75%;
    margin:10px auto 30px auto;
    background-color: #fff;
    padding: 30px 20px;
}
.dynews {
    margin: 15px 15px 25px 15px;
}
.dynews h4 {
    font-weight: 400;
}
.dynews p {
    color: rgb(134, 139, 139);
    font-size: .9rem;
    padding: 5px;
}
</style>