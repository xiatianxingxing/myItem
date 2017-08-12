<template>
    <div class="">
        <div>
            <a href="javascript:history.go(-1);" class="back">返回</a>
            <mt-header fixed title="123"></mt-header>
        </div>
        <ul class="mui-table-view">
            <li v-for="item in list" class="mui-table-view-cell mui-media">
                <router-link v-bind="{to:'newsinfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis' v-text="item.zhaiyao"></p>
                        <div class="foodcon">
                            <span>发表时间：{{item.add_time | datefmt("YYYY-MM-DD HH:mm:ss")}}</span>
                            <span class="click">点击数：{{item.click}}</span>
                        </div>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    //便于后期维护
    import allApi from "../../allApi.js";
    export default{
        data: function () {
            return{
                list:[]
            }
        },
        methods:{
            gitnewslist: function () {
                //便于后期维护
                this.$http.get(allApi.allApi+"/api/getnewslist")
                        .then(function (response) {
                            var data = response.body;
                            if(data.status != 0){
                                alert("你错了");
                                return;
                            }
                            this.list = data.message;
                        })
            }
        },
        created:function(){
            this.gitnewslist()
        }
    }
</script>

<style scoped>
    .back{
        font-size:16px ;
        color: #fff;
        position: absolute;
        top: 10px;left: 10px;
        z-index: 10;

    }

    .mui-media-body{
        font-size: 14px;
    }
    .mui-ellipsis{
        color: #959595;
    }
    .mui-table-view-cell img{
        width: 80px;
        height: 80px;
    }
    .mui-table-view .mui-media-object{
        line-height: 80px;
        max-width: 80px;
    }
    .foodcon{
        margin-top: 1.5em;
        font-size: 12px;
        color: #3332ff;
    }
    .foodcon .click{
        margin-left: 40px;
    }
</style>