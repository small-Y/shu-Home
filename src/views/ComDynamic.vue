<template>
    <div class="company">
        <div class="dynamictitle">优莱首页 > 公司动态</div>
        <div class="dyncont">
            <div class="dynews" v-for="(item,i) in dyData" :key="i">
                <h4>{{item.title}}</h4>
                <p>{{item.time}}</p>
                <p>{{item.context}}</p>
                <p>
                    <i class="el-icon-star-on">赞&nbsp;{{item.zan}}</i>
                    <i class="el-icon-view">浏览&nbsp;{{item.see}}</i>
                </p>
                <p>___________________________________________________________________________________________________________________________________</p>
            </div>
            <el-pagination class="pagination" @size-change="handleSizeChange"  @current-change="handleCurrentChange"
                  :page-sizes="[10,15,20,50]" layout="total, sizes, prev, pager, next" :total="total"></el-pagination>
        </div>
        <foot-cont></foot-cont>
    </div>
</template>
<script>
    import { split_array } from '@/script/validate.js'
    import FootCont from '@/components/FootCont.vue'
    export default {
        name: 'company',
        components: {
          FootCont  
        },
        data() {
            return {
                allData: [],
                dyData: [],
                /* 当前页显示数据的条数 */
                pageSize: '10',
                /* 当前页面索引 */
                pageIndex: '',
                /* 请求得到所有表格数据的长度 */
                totalNum: '',
            }
        },
        computed: {
            // 当前数据长度
            total(){
                return Math.floor(this.totalNum);
            },
        },
        created () {
            this.getMessage()
        },
        methods: {
            getMessage(){
                this.$http.get('/user/message/dynamic').then(res=>{
                    this.totalNum = res.data.data.length;
                    this.allData = res.data.data;
                    this.dyData = split_array(this.allData,0,this.pageSize);
                }).catch(err=>{
                    console.log(err);
                })
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.dyData = split_array(this.allData,0,val*this.pageSize);
            },
            handleCurrentChange(value) {  
                this.pageIndex = value;
                this.dyData = split_array(this.allData,(value-1)*this.pageSize,value*this.pageSize);
                
            },
        }
    }
</script>
<style scoped>
.dynamictitle{
    margin-left: 210px;
    font-size: .8rem;
}
.dyncont {
    width: 75%;
    margin:10px auto 30px auto;
    background-color: #fff;
    padding: 30px 20px;
    min-height: 40vh;
}
.dynews {
    margin: 15px 15px 25px 15px;
}
.dyncont h4 {
    font-weight: 400;
}
.dyncont p {
    color: rgb(134, 139, 139);
    font-size: .9rem;
    padding: 5px;
}
</style>