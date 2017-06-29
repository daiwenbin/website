<style>
.content{
	width:1200px;
	height: 260px;
	margin:50px auto 70px auto;
	
}
.content .text{
	width:720px;
	float:left;
	height:260px;
}
.content .text p{
	text-align:justify;
	font-size:16px;
	color:#6a6a6a;
	line-height: 25px;
	font-family: "微软雅黑";
}
.content .img{
	float:right;
}
.footer{
	width:1200px;
	height:220px;
	margin:0 auto;
}
.dibu{
	width:335px;
	height:218px;
	border:1px solid #f1f1f1;
	text-align: center;
	padding-top:43px;
	box-sizing: border-box;
	float:left;
}
.dibu>h5{
	color:#ff9f22;
	font-size:22px;
	font-family: "微软雅黑";
	font-weight: normal;
	padding:10px 0 5px 0;
	box-sizing: border-box;
}
.dibu>span{
	width:22px;
	height:2px;
	background:#ff9f22;
	display: inline-block;
	padding:0;
	margin:0;
}
.dibu>p{
	font-size:18px;
	color:#7e7e7e;
	padding-top: 20px;	
}
.acrive-cen{
	margin:0 95px;
}
.kong-p{
	height:60px;
	width:100%;
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
	 					<router-link to="/" @click.native="flushCom"><li>首页</li></router-link>
	 					<router-link to="/sytem" @click.native="flushCom"><li>商家入驻</li></router-link>
	 					<router-link to="/union" @click.native="flushCom"><li>云之道COP</li></router-link>	
	 					<router-link to="/activ" @click.native="flushCom"><li>活动中心</li></router-link>
	 					<router-link to="/helpcj" @click.native="flushCom"><li>帮助中心</li></router-link>
	 					<router-link to="/about" @click.native="flushCom"><li class="active">关于我们</li></router-link>
	 					<!--<router-link to="/"><li>App下载</li></router-link>-->
	 			</ul>
 			</nav>
		</header>
		<!----banner---->
		<banner></banner>
		<!----banner---->
		<div class="content">
			<div class="text">
				<p> 
					云之道是一个多平台融合性生态系统，我们通过COP生态系统模型，
					做通了资本封闭循环再消费的流<br />程，让资金在流动中产生价值，把交易逐步转换成交换,
					让价值在交换中通过金融和资本产生倍增和裂<br />变的经济效应。<br />
					<br />
					从实业到资本运营，只有实业没有资本运营，就没有造血功能;只有资本运营没有实业,
					也没办法持续<br />发展和增长，资产也没办法产生倍增和裂变。只有让两者有效的结合，
					才能让实业插上资本的翅膀，让资本落地在实业当中。<br />
					<br />
					由此，我们建立三大板块:五大系统、五大基金、五大行业，构建一个新人类社会的文明生态系统，
					协<br />助现有的商业业态，实现生态化，实现人类梦想的过程中，实现我们的梦想。
				</p>
			</div>
			<div class="img">
				<img src="../../assets/about-1.jpg" width="453" height="260" alt="" />
			</div>
		</div>
		<footer class="footer">
			<div class="dibu">
				<img src="../../assets/about-2.jpg">
				<h5>公司地址</h5>
				<span></span>
				<p>深圳市南山区大冲商务中心C座</p>
			</div>
			<div class="dibu acrive-cen">
				<img src="../../assets/about-3.jpg">
				<h5>联系方式</h5>
				<span></span>
				<p>0755-26603212</p>
			</div>
			<div class="dibu">
				<img src="../../assets/about-4.jpg">
				<h5>公众号</h5>
				<span></span>
				<p>云之道网络科技</p>
			</div>
		</footer>
		<div class="kong-p"></div>
		<!--公共底部-->
		<footr></footr>
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
    }
  },components:{Banner,Footr},
  methods:{
  	flushCom:function(){
  		this.$router.go(0); 	
  		}
  }

}
</script>
