<template>
    <div class="ans">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="问题描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提问</el-button>
        </el-form>
        <div class="diarCont">
            <div class="leaMess" v-for='(item,i) in queList' :key='i'>
                <h4>{{item.username}}</h4>
                <p>{{item.question}}</p>
                <p class="timed">
                    <span>{{item.time}}</span>
                    <el-button @click='getAnswers(item.question)'>查看回答</el-button>
                    <el-button @click='addAnswer(item.question)'>回复</el-button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    import { formatTime } from '@/script/validate.js'
    export default {
        name: 'queans',
        data() {
            return {
                answerStr: '',
                ansList: [],
                queList: [],
                question: '',
                ruleForm: {
                    username: '',
                    desc: '',
                    time: new Date()
                },
                rules: {
                    desc: [
                        {required:true,message:'请填写内容',trigger:'blur'}
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
                this.$http.get('/user/message/getQuestion').then(res=>{
                    if (res.data.data.length > 0) {
                        for (let index = res.data.data.length-1; index > -1; index--) {
                            this.queList.push(res.data.data[index])
                        }
                    } 
                }).catch(err=>{
                    console.log(err);
                })
            },
            submitForm(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                if (valid && this.ruleForm.username) {
                    this.$http.post("/user/message/addQuestion",qs.stringify({
                        'username': this.ruleForm.username,
                        'question': this.ruleForm.desc,
                        'time': formatTime(this.ruleForm.time)
                    }),{
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        }
                    }).then(res=>{
                        if (res.data.code == 1) {
                            this.queList = res.data.data;
                        } else {
                            alert('提问失败，请重试！')
                        }
                        location.reload()
                    }).catch(err=>{
                        console.log(err);
                    })
                } else {
                    alert('未登录亦或其他错误！')
                    return false;
                }
                });
            },
            getAnswers(v) {
                this.$http.post("/user/message/getAnswer",qs.stringify({'question': v,}),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    }
                }).then(res=>{
                    if (res.data.code == 1) {
                        if (res.data.data.length > 0) {
                            var num = res.data.data.length-1;
                            this.ansList = res.data.data;
                            for (let q = num; q >-1; q--) {
                                this.answerStr += '用户：'+res.data.data[q].username +'--回复：' + res.data.data[q].answer + '[--回复时间：' + res.data.data[q].time+ '--]';
                            }
                            this.$alert(this.answerStr, v, {
                                confirmButtonText: '确定',
                                callback: action => {
                                   location.reload()
                                }
                            });
                        } else {
                            this.$alert('暂时还没有回复哦！', v, {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$router.push('/strategy')
                                }
                            });
                        }
                        
                    } 
                }).catch(err=>{
                    console.log(err);
                })

            },
            addAnswer(v) {
                if (this.ruleForm.username) {
                    this.$prompt(v, '回复', {
                    confirmButtonText: '确定',
                    inputPattern: /\w*/,
                    }).then(({ value }) => {
                        this.$http.post("/user/message/addAnswer",qs.stringify({
                            'question': v,
                            'username': this.ruleForm.username,
                            'answer': value,
                            'time': formatTime(this.ruleForm.time)
                        }),{
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                            }
                        }).then(res=>{
                            if (res.data.code == 1) {
                                this.ansList = res.data.data;
                            } else {
                                alert('回复失败，请重试！')
                            }
                        }).catch(err=>{
                            console.log(err);
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消回复'
                        });       
                    });
                } else {
                    alert('请登录后进行回复！')
                    this.$router.push('/login')
                }
                
            }
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
        margin-left: 50%;
    }
    p.timed span {
        padding-right: 20px;
    }
    p.timed button {
        margin-right: 20px;
    }
    .answers {
        margin-top: 5px;
        padding: 10px 10px 10px 80px;;
        border: 1px dashed antiquewhite;
        border-radius: 10px;
    }
    .decAns {
        padding: 5px 5px 5px 30px;
        border: 1px dashed rgb(204, 195, 182);
        border-radius: 10px;
    }
</style>