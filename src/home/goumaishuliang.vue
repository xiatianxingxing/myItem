<template>
    <div class="hehe">
        <div @click = "jian">-</div>
        <div v-text = "num"></div>
        <div @click = "jia">+</div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
                num:1,
            }
        },
        methods: {
            jian: function () {
                this.num--;
                if(this.num <1){
                    this.num = 1;
                }
                this.chuangzhi()
            },
            jia: function () {
                this.num++;
                this.chuangzhi()
            },
            chuangzhi: function () {
                this.$emit("data",this.num)
            }

        },
        created: function () {

        }
    }
</script>

<style scoped>
    .hehe div {
        width: 40px;
        height: 25px;
        font-size: 14px;
        line-height: 25px;
        text-align: center;
        border: 1px solid #333;
        border-radius: 3px;
        display: inline-block;
    }
    .hehe{
        position: absolute;
        left: 100px;
        top: 5px;
    }

</style>