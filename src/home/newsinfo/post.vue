<template>
    <div class="postcomment">

        <h3>提交信息</h3>
        <hr/>
        <textarea v-model="content"></textarea>
        <mt-button type="primary" size="large" @click = "postcomment">提交</mt-button>
        <h3>评论信息</h3>
        <hr/>
        <div v-for="(item,index) in list">
            <div class="title">
                <span>第{{index+1}}楼</span>
                <span>用户:{{item.user_name}}</span>
                <span>上传时间：{{item.add_time | datefmt("YYYY-MM-DD  HH:mm:ss")}}</span>
            </div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-text="item.content"></li>
            </ul>
        </div>
        <mt-button type="default" size="large" plain @click = "getmore">加载更多...</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import allApi from "../../allApi.js";
    export default{
        props:["id"],


        data: function () {
            return {
                content:"",
                page:1,
                list:[]
            }
        },
        methods: {
            //加载更多
            getmore: function () {
                this.page++;
                this.getContent(this.page)
            },

            //提交信息
            postcomment: function () {
                if(this.content.trim().length <=0 ){
                    Toast("请填写信息");
                }else{
                    var url = allApi.allApi + '/api/postcomment/'+this.id;

                    this.$http.post(url,{content:this.content},{emulateJSON:true})
                            .then(function (responese) {
                                console.log(132);
                                Toast(responese.body.message)

                                //追加到页面中
                                this.list = [{
                                        user_name: "匿名用户",
                                        add_time: "new Date()",
                                        content: this.content
                                }].concat(this.list)


                                //清空文本框
                                this.content = "";
                            })
                }

            },
            //获取信息
            getContent: function (page) {
                page = page ||1;
                var url  = allApi.allApi + '/api/getcomments/'+this.id+'?pageindex='+page;

                this.$http.get(url).then(function (res) {
                    var data = res.body
                    if(data.status!=0){
                        Toast(data.message)
                    }
                    this.list =this.list.concat(data.message)
                })
            }
        },
        created: function () {
            this.getContent(this.page)
        },

    }
</script>

<style scoped>
    .postcomment{
        padding: 10px;
    }

    .title{
        color:#444;
        background-color: rgba(0,0,0,0.2);
    }
   

</style>