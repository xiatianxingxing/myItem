<!--轮播图组件-->
<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in img">
                <img :src="item.img" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        props:["img"],
        data: function () {
            return {}
        },
        methods: {},
        created: function () {

        }
    }
</script>

<style scoped>
    .mint-swipe{
        width: 100%;
        height: 160px;
    }
    .mint-swipe-item{
        width: 100%;
        background-color: red;
    }
    .mint-swipe-item img{
        width: 100%;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
    }
</style>