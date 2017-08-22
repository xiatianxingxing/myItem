<template>
    <div class="hehe">
        <div @click = "jian">-</div>
        <div v-text = "num"></div>
        <div @click = "jia">+</div>
    </div>
</template>

<script>
    export default{
        props:["initCount","goodsid"],

        data: function () {
            return {
                num:1,
                resObj:{goodsid:0,type:"jia"}
            }
        },
        methods: {
            jian: function () {
                this.num--;
                if(this.num <1){
                    this.num = 1;
                    return;
                }
                this.chuangzhi("jian")
            },
            jia: function () {
                this.num++;
                this.chuangzhi("jia")
            },
            chuangzhi: function (type) {
                this.resObj.type = type;

                                   // 对应上父传的值
                this.resObj.goodsid = this.goodsid;
                this.$emit("data",this.resObj)
            }

        },
        created: function () {
            this.num = this.initCount;
        }
    }
</script>

<style scoped>
    .hehe div {
        width: 22px;
        height: 18px;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        border: 1px solid #333;
        border-radius: 3px;
        display: inline-block;
    }



</style>