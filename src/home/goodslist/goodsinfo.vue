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
                    <transition
                              @before-enter="beforeEnter"
                              @enter="Enter"
                              @after-enter="afterEnter"
                            >
                        <div  v-if ="isshow" class="ball"></div>
                    </transition>
                </li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click = "gouwuche">加入购物车</mt-button>
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


    import {val,NUM} from "../../val.js"


    import {setitem,valueObj} from "../../local.js"


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
                isshow:false
            }
        },
        methods: {

            //钩子函数
            beforeEnter:function(el){
                el.style.transform = "translate(0,0)";
            },
            // 表示在动画执行过程中要触发，设定三个步骤：
            // 1、设定当前动画的每一帧刷新
            // 2、设定当前元素的结束位置
            // 3、手动调用动画结束的方法 done()
            Enter:function(el,done){
                // 1、设定当前动画的每一帧刷新
                el.offsetWidth;
                // 2、设定当前元素的结束位置
                el.style.transform = "translate(30px,430px)";
                // 3、手动调用动画结束的方法 done()
                done();
            },
            // 动画结束以后，将动画元素的v-if中的变量值重置会初始值
            afterEnter:function(el){
                this.isshow = !this.isshow;
            },




//          购物车
            gouwuche: function () {

                this.isshow = !this.isshow


                val.$emit(NUM,this.num);

                //添加数据
                valueObj.goodsid = this.id;
                valueObj.num = this.num;
                setitem(valueObj)
            },


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
        margin: 10px 0;
    }
    .goumai{
        position: relative;
    }

    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 0px;
        left: 150px;
        transition: all 0.5s ease;
        z-index: 10;
    }


</style>