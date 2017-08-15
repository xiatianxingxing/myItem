<template>
    <div class="dong">
        <div>
            <a href="javascript:history.go(-1);" class="back">返回</a>
            <mt-header fixed title="红茶"></mt-header>
        </div>
       <div class="title">
           <h3 v-text="list.title"></h3>
           <p><span>{{list.add_time | datefmt("YYYY-MM-DD")}}</span> {{list.click}}次浏览</p>
       </div>
        <div class="content" v-html="list.content">

        </div>
        <comment :id="id">
        <!--插入模板-->
        </comment>
    </div>
</template>

<script>
    //便于后期维护
    import allApi from "../../allApi.js";

    //引入模板
    import comment from "./post.vue";
    export default{

        components:{
            //调用模板
            comment
        },

        data: function () {
            return {
                id: 0,
                list:{}
            }
        },
        methods: {
            gitinfo: function () {
                //便于后期维护
                var url = allApi.allApi+"/api/getnew/"+this.id;
                this.$http.get(url)
                        .then(function (response) {
                            var data = response.body;
                            if(data.status != 0){
                                alert("cuol")
                                return;
                            }
                            this.list = data.message[0]


                        })
            }
        },
        created: function () {
            this.id = this.$route.params.id;
            this.gitinfo()
        }
    };

</script>

<style scoped>
    .back{
        font-size:16px ;
        color: #fff;
        position: absolute;
        top: 10px;left: 10px;
        z-index: 10;

    }
    .title{
        padding: 10px;
    }
    .title h3{
        font-size: 16px;
        color: #007AFF;
    }
    .title p{
        font-size: 12px;
        color: #aaa;
    }
    .content{
        padding: 10px;
    }
</style>