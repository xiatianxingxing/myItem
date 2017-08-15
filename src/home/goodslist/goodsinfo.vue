<template>
    <div class="dong" id="dong">
        <div class="lunbotu">
            <lunbo :img="list"></lunbo>
        </div>
        <div class="shangpin">
            <h4>{{info.title}}</h4>
            <hr/>
            <ul>
                <li>
                    市场价：<s>￥{{info.market_price}}</s> 销售价<span>￥{{info.sell_price}}</span>
                </li>
                <li class="goumai">
                    购买数量：<goumai v-on:data="getnum"></goumai>
                </li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger">加入购物车</mt-button>
                </li>
            </ul>

        </div>
        <div class="kucun">
            <h4>商品参数</h4>
            <hr/>
            <ul>
                <li>商品库存：{{info.goods_no}}</li>
                <li>商品数量：{{info.stock_quantity}}</li>
                <li>库存时间：{{info.add_time}}</li>
            </ul>
        </div>
        <div>
            <router-link v-bind="{to:'/goods/goodsdescribe/'+info.id}">
                <mt-button class="btn" type="primary" size="large">图文介绍</mt-button>
            </router-link>
            <router-link v-bind="{to:'/goods/goodspinglun/'+info.id}">
                <mt-button class="btn" type="danger" size="large">商品评论</mt-button>
            </router-link>
        </div>
    </div>
</template>

<script>

    import goumai from "../goumaishuliang.vue"
    //便于后期维护
    import allApi from "../../allApi.js";
    //轮播图
    import lunbo from "../lunbo.vue";
    import { Toast } from 'mint-ui';

    export default{
        components:{
          lunbo,
            goumai
        },
        data: function () {
            return {
                list:[],
                id:0,
                info:{},
                num:1,//默认是一个值
            }
        },
        methods: {
            //获取子组件传的值
            //             num 是接收值的
            getnum: function (num) {
                console.log(num);
                this.num = num
            },


            //获得当页的信息
            getinfo: function () {
                var url = allApi.allApi+"/api/goods/getinfo/"+this.id;
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast(
                                data.message
                        );
                        return
                    };
                    this.info=data.message[0];

                })
            },


            //轮播图的图片
            getimg: function () {
                var url = allApi.allApi+"/api/getthumimages/"+this.id;
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast(
                                data.message
                        );
                        return
                    };
                    this.list=data.message;

                })
            }
        },
        created: function () {
            this.id = this.$route.params.id
            this.getimg();
            this.getinfo();

        }
    }
</script>

<style scoped>

    .dong .lunbotu .mint-swipe{
        width: 100%;
        height: 300px;
    }
    .dong{
        padding: 10px;
    }
    .lunbotu{
        border: 1px solid #333;
        border-radius: 5px;
    }
    .shangpin{
        padding: 10px;
        border: 1px solid #333;
        border-radius: 5px;
        margin: 10px 0;
    }
    .shangpin h4{
        color: #0062cc;
    }
    .shangpin  ul li{
        padding: 8px;
    }
    .kucun{
        padding: 10px;
        border: 1px solid #333;
        border-radius: 5px;
    }
    .kucun h4{
        color: #666;
    }
    .kucun ul li{
        padding: 5px;
    }
    .btn{
        margin: 10px;
    }
    .goumai{
        position: relative;
    }



</style>