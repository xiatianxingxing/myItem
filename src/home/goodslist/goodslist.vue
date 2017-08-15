<template>
    <div class="dong">
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list">
                <router-link v-bind="{to:'/goods/goodsinfo/'+item.id}">
                    <img class="mui-media-object" :src="item.img_url">
                    <div class="mui-media-body">{{item.zhaiyao}}</div>
                </router-link>
                <div class="val">
                    <p>
                        <span class="red">${{item.sell_price}}</span>
                        <s class="fr">${{item.market_price}}</s>
                    <p>
                        <span>{{item.stock_quantity}}</span>
                        <span class="fr">点击量：{{item.click}}</span>
                    </p>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    import allApi from "../../allApi.js";
    import { Toast } from 'mint-ui';

    export default{
        data: function () {
            return {
                list:[]
            }
        },
        methods: {
            getimg: function () {
                var url = allApi.allApi+"/api/getgoods?pageindex=1";
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast("data.message")
                        return;
                    };
                    this.list = data.message;

                })
            }
        },
        created: function () {
            this.getimg()
        }
    }
</script>

<style scoped>
    .mui-table-view.mui-grid-view{
        padding: 0;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell{
        box-shadow: 0 0 5px #333;
        box-sizing: border-box;
        margin: 0px;
        padding:5px ;
    }
    .mui-table-view-cell > a:not(.mui-btn){
        padding: 10px;

    }
    ul .val {
        background-color: rgba(0, 0, 0, 0.1);

    }
    ul .val p {
        text-align: left;
        color: rgba(0,0,0,.5);
    }
    ul .val .red{
        color: red;
    }
    ul .val .fr{
        float: right;
    }

</style>