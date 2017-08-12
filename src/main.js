// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';


// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

//路由
import VueResource from "vue-resource";
Vue.use(VueResource)

//引入home
import home from "../src/home/home.vue";                     //首页
import newslist from "../src/home/news/newslist.vue";	     //新闻
import newsinfo from "../src/home/newsinfo/newsinfo.vue";	 //新闻信息



import chat from "../src/chat/chat.vue";
import contact from "../src/contact/contact.vue";
import map from "../src/map/map.vue";


// 3.0.2 定义路由规则
var router = new vueRouter({
	linkActiveClass:"mui-active",
	routes:[
		{path:'/home',component:home},                         //首页
		{path:'/news/newslist',component:newslist},            //新闻
		{path:'/news/newsinfo/:id',component:newsinfo},        //新闻信息
		{path:'/news/newsinfo/:id',component:newsinfo},        //新闻信息



		{path:'/tabbar-with-chat',component:chat},             //消息
		{path:'/tabbar-with-contact',component:contact},
		{path:'/tabbar-with-map',component:map},               //购物车
		]
	});





// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);





// 注册mui的css样式
import '../statics/mui/css/mui.css';
import "../statics/css/site.css";




//定义过滤器的实际日期
import moment from "moment";
                            //a是| 左边的数据   b 是传入的参数格式
Vue.filter("datefmt", function (a, b) {
	//      a 按照  b的格式输出
	return moment(a).format(b)
})




//  利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});