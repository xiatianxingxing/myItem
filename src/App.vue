<!-- 以后项目的根组件 -->
<template>
	<div class="dong">

		<!-- header-->
		<a href="javascript:history.go(-1);" class="back">返回</a>
		<mt-header fixed title="啦啦啦啦啦啦"></mt-header>


		<!-- 路由占位符 -->
		<router-view></router-view>

		<!-- footer-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item  " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">

				</span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-contact">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>

	</div>
</template>

<script>
	// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
	// function add(x,y){console.log(x+y)}	
	// module.exports = {  //es5的导出对象的写法
	export default{  // es6的导出对象的写法
		data:function(){  //等价于 es5的 data:function(){
			return{}
		},
		methods:{
		},
		created:function(){
		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
.back{
	font-size:16px ;
	color: #fff;
	position: absolute;
	top: 10px;left: 10px;
	z-index: 10;

}
</style>