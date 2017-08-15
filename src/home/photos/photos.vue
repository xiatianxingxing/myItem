<template>
    <div class="dong">
        <div class="topshop">
            <ul v-bind="{style:'width='+'width'+'px'}">
                <li @click = "getimg(0)">全部</li>
                <li v-for="item in listtxt" @click = "getimg(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <div class="listimg">
            <ul>
                <li v-for="item in list">
                    <!--          通过绑定 来传id        -->
                    <router-link v-bind ="{to:'/photo/photoinfo/'+item.id}">
                        <img v-lazy="item.img_url">
                        <div class="info">
                            <h5>{{item.title}}</h5>
                            <p>{{item.zhaiyao}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import allApi from "../../allApi.js";
    import { Toast } from 'mint-ui';
    export default{
        data: function () {
            return {
                listtxt:[],
                width:0,
                list:[],
            }
        },
        methods: {
            getshop: function () {
                var url = allApi.allApi+"/api/getimgcategory";
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast("data.message")
                        return;
                    }
                    this.listtxt = data.message;
                    var a = 70;
                    var b = data.message.length +1;
                    this.width= a*b
                })
            },
            //获取图片信息
            getimg: function (cateid) {
                cateid = cateid || 0 ;
                var url = allApi.allApi+"/api/getimages/"+cateid;
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast("data.message")
                        return;
                    }
                    this.list = data.message;
                })
            }

        },
        created: function () {
            this.getshop(),
            this.getimg(this.cateid)
        }
    }
</script>

<style scoped>
    .topshop{
        width: 100%;
        overflow-x: auto;
    }
    .topshop ul{
        width: 10000px;
        padding-left: 10px;
    }
    .topshop ul li{
        font-size: 14px;
        color: #ff0f1d;
        line-height: 40px;
        margin-right: 15px;
        padding-bottom: 6px;
        float: left;
        cursor: pointer;
    }
    .listimg ul li img{
        width: 100%;
    }
    .listimg ul li{
        position: relative;
        margin: 10px;
    }

    .info{
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        left: 0;
        bottom: 2px;
    }
    .info h5{
        color: #fff;
        font-weight: 700;
    }
    .info p{
        color: #fff;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

</style>