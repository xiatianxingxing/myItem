<template>
    <div class="dong">
        <!--<mt-swipe :auto="4000">-->
            <!--<mt-swipe-item v-for="item in list">-->
                <!--<img :src="item.img" />-->
            <!--</mt-swipe-item>-->
        <!--</mt-swipe>-->
        <lunbo :img="list"></lunbo>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/newslist">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/photo/photolist">
                <span class="mui-icon mui-icon-email"></span>
                <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/goods/goodslist">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/feedback">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/video">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/callme">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    //便于后期维护
    import allApi from "../allApi.js";
    //轮播图
    import lunbo from "./lunbo.vue"
    import { Toast } from 'mint-ui';

    export default{  // es6语法
        components:{
          lunbo
        },
        data: function ()
        {
            return {
                list:[]
                }

        },
        methods:{
            gitLunbo: function () {
                //便于后期维护
                var url = allApi.allApi+"/api/getlunbo"
                this.$http.get(url)
                        .then(function (response) {
                            var data = response.body;
                            //提示错误信息
                            if(data.status != 0){
                                Toast(
                                   data.message
                                );
                                return
                            };
                            this.list = data.message;

                        })
            }
        },
        created: function () {
            this.gitLunbo()
        }
    }

</script>

<style scoped>
    .dong .back{
        font-size:16px ;
        color: rgba(1,5,4,0);
        position: absolute;
        top: 10px;left: 10px;
        z-index: 10;

    }


    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before,
    .mui-icon-chatbubble:before{
        content: "";
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }

    .mui-icon-home:before{
        background-image: url("../../statics/imgs/1.png");
    }
    .mui-icon-email:before{
        background-image: url("../../statics/imgs/2.png");
    }
    .mui-icon-chatbubble:before{
        background-image: url("../../statics/imgs/3.png");
    }
    .mui-icon-location:before{
        background-image: url("../../statics/imgs/4.png");
    }
    .mui-icon-search:before{
        background-image: url("../../statics/imgs/5.png");
    }
    .mui-icon-phone:before{
        background-image: url("../../statics/imgs/6.png");
    }


</style>