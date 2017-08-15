<template>
    <div class="dong">
        <h4>{{list.title}}</h4>
        <hr/>
        <div v-html="list.content" class="content">

        </div>
    </div>
</template>

<script>

    //便于后期维护
    import allApi from "../../allApi.js";
    import { Toast } from 'mint-ui';

    export default{
        data: function () {
            return {
                id:0,
                list:{}
            }
        },
        methods: {
            getinfo: function () {
                var url = allApi.allApi +"/api/goods/getdesc/"+this.id;
                this.$http.get(url).then(function (response) {
                    var data = response.body;
                    if(data.status != 0){
                        Toast(
                                data.message
                        );
                        return
                    };
                    this.list=data.message[0];
                })
            }
        },
        created: function () {
            this.id = this.$route.params.id;
            this.getinfo()
        }
    }
</script>

<style scoped>
    .dong{
        padding: 10px;
    }
    .dong h4{
        color: #0062cc;
    }
    .content{
        width: 100%;
    }


</style>