<style>
.text-tel{
	width:1200px;
	margin:0 auto;
}
.text-tel>p{
	text-align: center;
	font-size:20px;
	color:#6a6a6a;
	line-height: 33px;
	font-weight: 0;
	padding:0;
	margin:50px 0 60px 0;
	font-family: "微软雅黑";
}
.jiuzhou{
	clear: both;
	width:100%;
	background:#f6faff;
}
.jz-cen{
	width:1200px;
	margin:0 auto;
	height:530px;
	background:#f6faff;
}
.jz-cen>h5{
	font-size:36px;
	color:#1a1a1a;
	font-family: "宋体";
	text-align: center;
	padding-top:55px;
}
.jz-cen>span{
	display: block;
	margin:0 auto;
	width:80px;
	height:2px;
	background:#ff9f22;
}
.jz-cen>h6{
	text-align: center;
	font-size:24px;
	color:#1a1a1a;
	font-family:"times new roman";
}
.ul-t{
	width:990px;
	margin:0 auto;
}
.ul-t li{
	margin-top:50px;
	float:left;
	width:400px;
	height:110px;
	background:#fff;
	line-height: 110px;
}
.ul-t li>img{
	margin:0 24px 0 34px; 
}
.ul-t li>span{
	color:#1a1a1a;
	font-size:24px;
	font-family: "微软雅黑";
}
.ul-t li:nth-of-type(odd){
	margin-right:180px;
}
.share{
	width:1200px;
	margin: 0 auto;
}
.share>h5{
	padding-top:80px;
	text-align: center;
	font-size:36px;
	color:#1a1a1a;
	font-family:"微软雅黑";
	/*font-weight: 00;*/
}
.share>span{
	display:block;
	margin:0 auto; 
	width:80px;
	height:2px;
	background:#ff9f22;
}
.share>h6{
	font-size:26px;
	text-align: center;
	color:#1a1a1a;
	font-family:"宋体";
	padding-bottom: 50px;
}
.list{
	width:100%;
	height:auto;
}
.list li{
	width: 360px;
	height:210px;
	border:1px solid #f1f1f1;
	text-align: center;
	font-family: "微软雅黑";
	margin:0 60px 65px 0;
	float:left;
}
.list li>img{
	margin:15px 0 20px 0;
}
.list li>h4{
	font-size:24px;
	color:#lalala;
	padding:0;
	margin-bottom: 5px;
}
.list li>p{
	color:#6a6a6a;
	font-size:20px;
}
.list .active-hide{
	margin-right:0;
}
.clear{
	clear: both;
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
	 					<router-link to="/union" @click.native="flushCom"><li class="active">云之道COP</li></router-link>
	 					<router-link to="/activ" @click.native="flushCom"><li>活动中心</li></router-link>
	 					<router-link to="/helpcj" @click.native="flushCom"><li>帮助中心</li></router-link>
	 					<router-link to="/about" @click.native="flushCom"><li>关于我们</li></router-link>
	 					<!--<router-link to="/"><li>App下载</li></router-link>-->
	 			</ul>
 			</nav>
		</header>
		<!----banner---->
		<banner></banner>
		<!----banner---->
		<div class="text-tel">
			<p>云之道COP系统是系统、工具和资本的运营，是实现财富倍增和裂变的实际应用工具。<br />
				该系统包含天创九洲和九洲共享两大平台，具体是通过财富加速系统来实现，最终又由合伙人、创投合伙商和联盟商三大系统组成。<br />
				助力您的财富加速增值
			</p>
		</div>
		<div class="jiuzhou">
			<div class="jz-cen">
				<h5>天创九州</h5>
				<span></span>
				<h6>Day at jiuzhou</h6>
				<ul class="ul-t">
					<li>
						<img src="../../assets/y-1.jpg" />
						<span>平台、项目</span>
					</li><li>
						<img src="../../assets/y-2.jpg" />
						<span>金融供应链</span>
					</li>
					<li>
						<img src="../../assets/y-3.jpg" />
						<span>供应链并购</span>
					</li>
					<li>
						<img src="../../assets/y-4.jpg" />
						<span>并购上市转化股票</span>
					</li>
				</ul>
			</div>
		</div>
 		<div class="share">
 			<h5>九洲共享平台</h5>
 			<span></span>
 			<h6>Jiuzhou shared platform</h6>
 			<ul class="list">
 				<li>
 					<img src="../../assets/list-1.jpg" alt="" />
 					<h4>商学院</h4>
 					<p>专业的团队<br />为您提供更加专业的指导</p>
 				</li>
 				<li>
 					<img src="../../assets/list-2.jpg" alt="" />
 					<h4>可持续发展研究院</h4>
 					<p>全球专家  智库系统<br />制定规则  标准  系统  流程</p>
 				</li>  
 				<li class="active-hide">
 					<img src="../../assets/list-3.jpg" alt="" />
 					<h4>股权投资基金</h4>
 					<p>市场定位，产品结构的设计<br />金融和资本，帮助走入资本市场</p>
 				</li>
 				<li>
 					<img src="../../assets/list-4.jpg" alt="" />
 					<h4>家族传承基金</h4>
 					<p>构建并完善家族传承生态系统<br />创造一种新的生活方式 </p>
 				</li>
 				<li>  
 					<img src="../../assets/list-5.jpg" alt="" />
 					<h4>人文慈善基金</h4>
 					<p>重点帮助两类人群<br />家庭变故和农村特困孩子 </p>
 				</li>
 				<li class="active-hide">
 					<img src="../../assets/list-6.jpg" alt="" />
 					<h4>社会公益基金 </h4>
 					<p>现有的基金做无缝对接<br />与使之实现更有效的社会应用</p>
 				</li>
 			</ul>
 		</div>
 		<div class="clear"></div>
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

