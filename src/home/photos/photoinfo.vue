<template>
    <div class="dong">
        <div class="topinfo">
            <h4>{{photoinfo.title}}</h4>
            <p>{{photoinfo.add_time |  datefmt("YYYY-MM-DD HH:mm:ss")}}</p>
            <hr/>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 "
                    v-for="(item,index ) in photoimg" >
                    <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, photoimg)">
                </li>

            </ul>
            <p v-html="photoinfo.content"></p>
        </div>
        <div class="bottom">
            <comment :id="id">

            </comment>
        </div>
    </div>
</template>

<script>
    import comment from "../newsinfo/post.vue";
    import allApi from "../../allApi.js";
    import { Toast } from 'mint-ui';

    export default{
        components:{
            comment
        },
        data: function () {
            return {
                id:0,
                photoinfo:{},
                photoimg:[]
            }
        },
        methods: {
            //获取内容数据
            getphoto: function () {
                console.log(this.id);
                var url =allApi.allApi+"/api/getimageInfo/"+this.id;
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast("data.message")
                        return;
                    }
                    this.photoinfo = data.message[0];
                })
            },

            getimg: function () {
                var url =allApi.allApi+"/api/getthumimages/"+this.id;
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast("data.message")
                        return;
                    }
                    data.message.forEach(function (item) {
                        item.h = 300;
                        item.w = 300;
                    });
                    this.photoimg = data.message;

                })
            }
        },
        created: function () {
            //然后在通过this.$route.params.id绑定
            //这里的id是和路由中定义的一样
            this.id = this.$route.params.id;

            this.getphoto();
            this.getimg()
        }
    }
</script>

<style scoped>
    .topinfo h4{
        color: #0062cc;
    }
    .topinfo p{
        color: rgba(0,0,0,.5);
    }
    .topinfo ul li img{
        width: 80px;
        height: 80px;
        display: block;
    }
</style>