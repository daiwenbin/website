<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.one{
	width:1200px;
	margin:43px auto 50px auto;
	height:95px;
	-webkit-box-shadow:0px 5px 2px rgba(0, 204, 204, .1);  
	-moz-box-shadow:0px 5px 2px rgba(0, 204, 204, .1);  
	box-shadow:0px 5px 2px  rgba(0,0,0,0.1);
	clear: both;
}
.one .h-left, .l-cen, .c-right{
	width:30%;
	height:55px;
	float:left;
	border-right:1px solid #ccc;
}
.one .c-right{border:0;}
.one .h-left,
	.l-cen,
	.c-right{
	padding-left:80px;
	box-sizing: border-box;
}
.one .h-left>img,
	.l-cen>img,
	.c-right>img{
	float:left;
	margin-right:20px;
}
.one .h-left>span,
	.l-cen>span,
	.c-right>span{
	float:left;
	width:200px;
	color:#1a1a1a;
	font-weight:400;
	font-size:18px;
	font-family: "微软雅黑";
}
.one .h-left>p,
	.l-cen>p,
	.c-right>p{
	float:left;
	color:#989898;
	font-size:16px;
}

.about{
	width:100%;
	background:#f6faff;
	margin-bottom: 60px;
}
.about>.center{
	width:1200px;
	margin:0 auto; 
	background:#f6faff;
}
.about>.center>h5{
	font-size:36px;
	font-family: "宋体";
	padding-top:40px;
	padding-bottom: 5px;
	text-align: center;
}
.about>.center>.border-b{
	width:80px;
	height:2px;
	background:#ff9f22;
	display: block;
	margin:0 auto;
}
.about>.center>h6{
	text-align: center;
	font-size:24px;
	font-family: "宋体";
	padding-bottom: 34px;
	color:#lalala;
}
.about>.center>p{
	text-align: justify;
	font-size:20px;
	color:#6a6a6a;
	line-height: 30px;
	font-family: "宋体";
	font-weight: normal;
	padding-bottom: 10px;
}
.container{
	width:100%;
	background:#f6faff;
	margin-bottom: 60px;
}
.container>.tuandui{
	width:1200px;
	margin:0 auto;
}
.container>.tuandui>h5{
	font-size:36px;
	font-family: "宋体";
	padding-top:40px;
	padding-bottom: 5px;
	text-align: center;
}
.container>.tuandui>.border-b{
	width:80px;
	height:2px;
	background:#ff9f22;
	display: block;
	margin:0 auto;
}
.container>.tuandui>h6{
	text-align: center;
	font-size:24px;
	font-family: "宋体";
	padding-bottom: 34px;
}
.container>.tuandui>.td-1{
	padding-bottom: 30px;
}
.container>.tuandui>.td-2{
	float:left;
}
.container>.tuandui>.td-3,.td-4{
	float:right;
}
.container>.tuandui>.td-4{
	margin-top:10px;
}
.container>.tuandui>.empty{
	width:100%;
	height:45px;
	clear: both;
}
.active1{
	background:red;
}
</style>

<template>
  <div class="index">
  	<div class="top">
  		<p>全国客服电话：400-6168666</p>
  	</div>
	<header class="header">
		<nav>
			<img src="../../assets/logo.jpg" alt="" title="" class="logo" />
			<ul class="nav-right">
				<router-link to="/"><li class="active">首页</li></router-link>
				<router-link to="/sytem" @click.native="flushCom"><li>商家入驻</li></router-link>
				<router-link to="/union" @click.native="flushCom"><li>云之道COP</li></router-link>		
				<router-link to="/activ" @click.native="flushCom"><li>活动中心</li></router-link>	
				<router-link to="/helpcj" @click.native="flushCom"><li>帮助中心</li></router-link>
				<router-link to="/about" @click.native="flushCom"><li>关于我们</li></router-link>
			</ul>
		</nav>
	</header>
	<banner></banner>
	<div style="clear: both;"></div>
	<!--列表开始-->
	<div class="one" style="clear: both;">
		<div class="h-left">
			<img src="../../assets/huoren.jpg" />
			<span>合伙人</span>
			<p>微小投资,巨大回馈</p>
		</div>
		<div class="l-cen">
			<img src="../../assets/cen.gif" />
			<span>联盟商</span>
			<p>抢占时机,占领商机</p>
		</div>
		<div class="c-right">
			<img src="../../assets/right.gif" />
			<span>合伙商</span>
			<p>一箭双雕,两方兼顾</p>
		</div>
	</div>
	<!--列表结束-->
	<!--公司介绍开始-->
	<div class="about">
		<div class="center">
			<h5>公司介绍</h5>
			<span class="border-b"></span>
			<h6>Company introduction </h6>
			<p>
				云之道（深圳）网络科技有限公司，成立于2016年深港澳大湾区，位于国家五大中心城市之一，
				地理位置优越，是继美国纽约湾区、美国旧金山湾区、日本东京湾区之后，世界第四大湾区，
				是国家建设世界级城市群和参与全球竞争的重要空间载体。<br />
				<br />
				2017年3月5日召开的十二届全国人大五次会议上，国务院总理李克强在政府工作报告中提出，
				要推动内地与港澳深化合作，研究制定粤港澳大湾区城市群发展规划，发挥港澳独特优势，
				提升在国家经济发展和对外开放中的地位与功能。<br />
				<br />
				互联网时代颠覆了工业革命时代的商业规则，既可以让小企业一夜成名，也可以让一个巨无霸企业一夜之间消失，毋庸置疑，我们必须站在信息技术时代的前沿，赶上风口浪尖，做时代的弄潮儿。
			</p>
				<img src="../../assets/abput_1.jpg" width="100%" alt="" />
				<br />
				<br />
				<br />
			</p>
		</div>
	</div>
	<!--公司介绍结束-->
	<div class="container">
		<div class="tuandui">
			<h5>我们的团队</h5>
			<span class="border-b"></span>
			<h6>Our team</h6>
			<img src="../../assets/td-1.jpg" width="100%" alt="" class="td-1" />
			<img src="../../assets/td-2.jpg" width="621" alt="" class="td-2" />
			<img src="../../assets/td-3.jpg" width="543" alt="" class="td-3" />
			<img src="../../assets/td-4.jpg" width="543" alt="" class="td-4" />
			<div class="empty"></div>
		</div>
	</div>
	<!--底部开始-->
	<footr></footr>
	<!--底部结束-->
  </div>
</template>

<script>
import jquery from '../../public/jquery'
import Banner from '../../public/shuffing/index'
import Footr from '../../public/footer/footer'
export default {
  name: 'index',
  data () {
    return {
//    msg: 'Welcome to Your Vue.js App'
    }
  },components:{Banner,Footr},
  methods:{
  	flushCom:function(){
  		this.$router.go(0); 
  		
  	}
  }
}
</script>





