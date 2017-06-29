<style>
.settled{
	width:100%;
}
.settled .settled-cen{
	width:1200px;
	margin:0 auto;
	padding:75px 0 0 0;
}
.settled-L,
.settled-C,
.settled-R{
	width:33%;
	float:left;
}
.settled-L>img,
.settled-C>img,
.settled-R>img{
	display: block;
	margin:0 auto;
}
.settled-L>h4,h6,p,
.settled-C>h4,
.settled-R>h4{
	text-align: center;
	font-family: "微软雅黑";	
	padding:0;
	margin:0;
}
.settled-L>h4,
.settled-C>h4,
.settled-R>h4{
	font-size:24px;
	color:#6a6a6a;
	padding:30px 0 20px 0; 
}
.settled-L>h6,
.settled-C>h6,
.settled-R>h6{
	color:#b1b1b1;
	font-size:20px;
	font-family: "宋体";
	padding-bottom: 30px;
}
.settled-L>p,
.settled-C>p,
.settled-R>p{
	/*width:100%;
	padding:0 5%;*/
	box-sizing: border-box;
	font-size:20px;
	color:#6a6a6a;
}
.padding{
	clear: both;
	width:100%;
	height:95px;
}
.containre{
	width:100%;
	background:#f6faff;
}
.contrast{
	width:1200px;
	height:535px;
	padding-top:110px;
	margin:0 auto;
	background:#f6faff;
}
.contrast-q,
.contrast-h{
	width:50%;
	height: auto;
	float:left;
}
.contrast-q p{
	border-right:1px solid #f1f1f1;
}
.titel,
.titel-1{
	height:80px;
	line-height: 80px;
	text-align: center;
	color:#fff;
	font-size:30px;
}
.titel{
	background:#5b9de7;
	font-family: "微软雅黑";	
	-moz-border-radius-topleft: 10px;
	border-top-left-radius: 10px;
	-webkit-border-top-left-radius: 10px;
}
.titel-1{
	background:#2d82e3;
	font-family: "微软雅黑";
	-moz-border-radius-topright: 10px;
	border-top-right-radius: 10px;
	-webkit-border-top-right-radius: 10px;
}
.contrast p{
	height: 80px;
	background:#fff;
	line-height: 80px;
	text-align: center;
	font-family: "微软雅黑";
	font-size:20px;
	color:#6a6a6a;
	border-bottom: 1px solid #f1f1f1;
}
.contrast p:last-child{
	border-bottom: 0;
}
/****入驻支持*****/
.support{
	width:100%;
}
.support-cen{
	width:1200px;
	margin:0 auto;
}
.support-cen>h5{
	font-size:36px;
	font-family: "宋体";
	color:#1a1a1a;
	text-align: center;
	padding-top:100px;
}
.support-cen .border-b{
	width:80px;
	height:2px;
	background:#ffa022;
	display: block;
	margin:10px auto;
}
.support-cen>h6{
	font-size:24px;
	color:#1a1a1a;
	text-align: center;
	font-family: "宋体";
}
.introduce{
	width:100%;
	clear: both;
	padding-top:65px;
}
.introduce .introduce-L,
.introduce-R{
	width:50%;
	float:left;
	text-align: center;
}
.div{
	width:365px;
	margin:0 auto;
}
.div>img{
	float:left;
	margin:20px 45px 20px 0;
}
.div>span{
	width:250px;
	font-size:24px;
	color:#000;
	float: left;
	text-align: left;
}
.div>p{
	width:250px;
	float:left;
	text-align: left;
	font-size:20px;
	color:#6a6a6a;
}
.kong{
	clear: both;
	width:100%;
	height:130px;
}
.kong-1{
	clear: both;
	width:100%;
	height:100px;
}
</style>
<template>
	<div class="index">
		<div class="top">
  			<p>全国客服电话：400-6168666</p>
  		</div>
		<header class="header">
			<nav>
 				<img src="../../assets/logo.jpg" alt=""  class="logo" />
 				<ul class="nav-right">
 					<router-link to="/" @click.native="flushCom"><li>首页</li></router-link>
 					<router-link to="/sytem" @click.native="flushCom"><li class="active">商家入驻</li></router-link>
 					<router-link to="/union" @click.native="flushCom"><li>云之道COP</li></router-link>
 					<router-link to="/activ" @click.native="flushCom"><li>活动中心</li></router-link>
 					<router-link to="/helpcj" @click.native="flushCom"><li>帮助中心</li></router-link>
 					<router-link to="/about" @click.native="flushCom"><li>关于我们</li></router-link>
 					<!--<router-link to="/"><li>App下载</li></router-link>-->
	 			</ul>
 			</nav>
		</header>
		<banner></banner>
		<!---内容开始---->
		<div class="settled">
			<div class="settled-cen">
				<div class="settled-L">
					<img src="../../assets/rz-1.jpg" width="162" alt="" />
					<h4>入驻条件</h4>
					<h6>ln condition of</h6>
					<p>成功注册云之道任何一级合伙人<br />即可入驻联盟商户</p>
				</div>
				<div class="settled-C">
					<img src="../../assets/rz-2.jpg" width="162" alt="" />
					<h4>平台共享</h4>
					<h6>Sharing platform</h6>
					<p>建立互联网自然生态,
						让一切消<br />费行为有序,
						而又能形成大自然<br />般地进行循环动作
					</p>
				</div>
				<div class="settled-R">
					<img src="../../assets/rz-3.jpg" width="162" alt="" />
					<h4>倍增收益</h4>
					<h6>Double income </h6>
					<p>通过刺激消费,
						增强平台的可延<br />展性,
						达到大数据时代的混合资<br />金增值效益
					</p>
				</div>
				<div class="padding"></div>
			</div>
			<!--入驻前后 开始-->
			<div class="containre">
				<div class="contrast">
					<div class="contrast-q">
						<div class="titel">入驻前</div>
						<p>有投资有收益,无投资无收益</p>
						<p>推广渠道单一，没有品牌宣传功能</p>
						<p>消费群体不能保障，商家质量参差不齐</p>
					</div>
					<div class="contrast-h">
						<div class="titel-1">入驻后</div>
						<p>一次投入，多年获益</p>
						<p>多重营销：广告、促销应有尽有</p>
						<p>庞大的消费群体，仔细甄选商家，提供优质服务</p>
					</div>
				</div>
			</div>
			
			<!--入驻前后 结束-->
			
			<div class="support">
				<div class="support-cen">
					<h5>入驻支持</h5>
					<span class="border-b"></span>
					<h6>In support of </h6>
					<div class="introduce">
						<div class="introduce-L">
							<div class="div">
								<img src="../../assets/rz-4.jpg" width="62" alt="" />
								<span>广告支持</span>
								<p>有专门的广告板块，让更多 <br />客户了解到您的产品 </p>
							</div>
						</div>
						<div class="introduce-R">
							<div class="div">
								<img src="../../assets/rz-5.jpg" width="62" alt="" />
								<span>技术支持</span>
								<p>实时技术咨询，多种方式为 <br />您解决技术问题 </p>
							</div>
						</div>
						<div class="kong"></div>
						<div class="introduce-L">
							<div class="div">
								<img src="../../assets/rz-6.jpg" width="62" alt="" />
								<span>运营支持</span>
								<p>系统的培训方案，帮助您了<br />解更多  </p>
							</div>
						</div>
						<div class="introduce-R">
							<div class="div">
								<img src="../../assets/rz-7.jpg" width="62" alt="" />
								<span>售后支持</span> 
								<p>遇到问题，总部有专业工作<br />人员进行协助处理  </p>
							</div>
						</div>
						<div class="kong-1"></div>
					</div>
				</div>
			</div>
		</div>
		<!---内容结束---->
		
		<!---底部开始---->
		<footr></footr>
		<!---底部结束---->
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
      msg: 'Welcome to Your Vue.js App'
    }
},components:{Banner,Footr},
methods:{
  	flushCom:function(){
  		this.$router.go(0); 	
  		}
  }
}

</script>
