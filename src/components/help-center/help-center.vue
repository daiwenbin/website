<style>
.cj-cen{
	display: none;
}
.problem{
	width:1200px;
	margin:30px auto;
}
.problem .center{
	text-align: center;
	margin-bottom: 20px;
}
.problem .center span{
	width:200px;
	height:60px;
	border:1px solid #6a6a6a;
	display: inline-block;
	line-height: 60px;
	text-align: center;
	font-size:30px;
	font-family: "宋体";
	border-radius: 10px;
	cursor: pointer;
}
.problem .center .active{
	background:#ff9f22;
	color:#fff;
	border:0;
}
.span-1{
	margin:0 50px;
}
.cj{
	padding:40px 0 22px 0;
	border-bottom: 1px dashed #a5a5a5;
}
.cj:last-child{
	border-bottom:0;
}
.cj>b{
	display: block;
	width:80px;
	height:80px;
	border:1px solid #ff9f22;
	text-align: center;
	line-height: 80px;
	color:#6a6a6a;
	font-size:40px;
	font-family: "微软雅黑";
	font-weight:normal;
	float:left;
	margin-right:30px;
}
.cj>h5{
	font-size:26px;
	color:#6a6a6a;
	font-weight: normal;
	padding-top:3px;
	display: inline-block;
	width:90%;
	font-family: "微软雅黑";
}
.cj>h6{
	font-size:20px;
	color:#b1b1b1;
	font-weight: normal;
	display: inline-block;
	padding:0;
	margin:0;
	font-family: "微软雅黑";
}
.cj>.h5-zf{
	padding-top: 10px;
	padding-bottom: 17px;
}
.cj>p{
	font-size:20px;
	color:#lalala;
	color:#6a6a6a;
	line-height: 30px;
	font-family: "微软雅黑";
	padding-bottom: 220px;
}
</style>
<template>
	<div>
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
	 					<router-link to="/helpcj" @click.native="flushCom"><li class="active">帮助中心</li></router-link>
	 					<router-link to="/about" @click.native="flushCom"><li>关于我们</li></router-link>
	 					<!--<router-link to="/"><li>App下载</li></router-link>-->
	 			</ul>
 			</nav>
		</header>
		<!----banner---->
		<banner></banner>
		<!----banner---->
		<div class="problem">
			<div class="center">
				<span class="active">常见问题</span>
				<span class="span-1">支付问题</span>
				<span>版本公告</span>
			</div>
			<div class="conat">
				<!--常见问题-->
				<div class="cj-cen">
					<div class="cj">
						<b>01</b>
						<h5>云豆提现到账时间？ </h5>
						<h6>T+2。即两天后，三天内。</h6>
					</div>
					<div class="cj">
						<b>02</b>
						<h5>提现标准？ </h5> 
						<h6>保底500可用云豆，提现金额大于200，手续费13%，大云豆大于726即可提出提现申请。</h6>
					</div>
					<div class="cj">
					<b>03</b> 
					<h5>定制云豆未到账的原因？ </h5>
					<h6>请确认银行捐款是否成功.如果扣款成功但定制未到账,请联系人工客 服,请进情况申诉。</h6>
				</div>
				</div>
				<!--支付问题-->
				<div class="cj-cen">
					<div class="cj">
						<b>01</b>
						<h5 class="h5-zf">确保支付的银行卡或网络和支付账户余额充足 </h5>
					</div>
					<div class="cj">
						<b>02</b>
						<h5 class="h5-zf">支付过程中请保护您的手机信号良好,或留在已接入WIFI的有效区域内。 </h5>
					</div>
					<div class="cj">
						<b>03</b>
						<h5>支付过程中请不要退出云知道APP或支付时调用的浏览器,以免造成反馈信息不成功,然后重复支付同一笔订单。</h5>
					</div>
				</div>
				<!--版本问题-->
				<div class="cj-cen">
						<div class="cj">
							<p>为了给您提供更加优质、高效的服务。届时，云知道app将以全新的面貌与冠达用户见面，敬请期待！<br />
								<br />
								云知道因您而更精彩，我们将继续以客户为中心，不断提升用户体验与服务，感谢您的支持与信任！如有任何疑问，请联系在线客服或直接拨打客服热线400-6168666！
							</p>
						</div>
				</div>
			</div>
		</div>
		<footr></footr>
	</div>
</template>

<script>
import jquery from './jquery'
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
$(function(){
	$('.cj-cen').eq(0).show();
	$('.center span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		let index = $(this).index();
		$('.conat .cj-cen').eq(index).show().siblings().hide();
	})
})
</script>

