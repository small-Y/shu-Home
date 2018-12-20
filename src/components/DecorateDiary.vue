<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="日记留言" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">添加日记</el-button>
        </el-form>
        <div class="diarCont">
            <div class="leaMess" v-for='(item,i) in diarList' :key='i'>
                <h4>{{item.username}}</h4>
                <p>{{item.message}}</p>
                <p class="timed">{{item.time}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    import { formatTime } from '@/script/validate.js'
    export default {
        name: 'diary',
        data() {
            return {
                diarList: [],
                ruleForm: {
                    username: '',
                    desc: '',
                    time: new Date()
                },
                rules: {
                    desc: [
                        {required:true,message:'请填写日记内容',trigger:'blur'}
                    ]
                }
            }
        },
        mounted () {
            this.getDate();
        },
        methods: {
            getDate() {
                this.ruleForm.username = document.cookie.split(";")[0].split('=')[1];
                this.$http.get('/user/message/getDiary').then(res=>{
                    if (res.data.data.length > 0) {
                        for (let index = res.data.data.length-1; index > -1; index--) {
                            this.diarList.push(res.data.data[index])
                        }
                    }
                }).catch(err=>{
                    console.log(err);
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid && this.ruleForm.username) {
                    this.$http.post("/user/message/addDiary",qs.stringify({
                        'username': this.ruleForm.username,
                        'message': this.ruleForm.desc,
                        'time': formatTime(this.ruleForm.time)
                    }),{
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        }
                    }).then(res=>{
                        console.log(res.data);
                        if (res.data.code == 1) {
                            this.diarList = res.data.data;
                        } else {
                            alert('留言失败，请重试！')
                        }
                        location.reload()
                        // this.$router.push('/strategy')
                    }).catch(err=>{
                        console.log(err);
                    })
                } else {
                    alert('未登录亦或其他错误！')
                    return false;
                }
                });
            },
        }
    }
</script>
<style scoped>
.diarCont {
    margin-top: 10px;
}
.leaMess {
    margin: 5px auto 10px auto;
    border: 1px dashed rgb(233, 229, 229);
    border-radius: 5px;
    padding: 8px;
}
.leaMess h4 {
    color: rgb(212, 149, 66);
}
.leaMess p {
    font-size: .8rem;
    color: rgb(92, 87, 87);
    padding: 10px 0 5px 20px;
}
p.timed {
    margin-left: 70%;
}
</style>