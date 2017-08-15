<template>
    <div>
        <post :id="id"></post>
    </div>
</template>

<script>
    //这个 评论组件写home/newsinfo/post里了
    import post from "../newsinfo/post.vue";

    export default{
        components:{
            post
        },
        data: function () {
            return {
                id:0,
            }
        },
        methods: {},
        created: function () {
            this.id = this.$route.params.id
        }
    }
</script>

<style scoped>

</style>