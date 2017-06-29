<style>
.hd{
	width:1200px;
	margin:0 auto;
	padding-top:55px;
}
.conduct{
	height:428px;
	position: relative;
	margin-bottom: 15px;
}
.conduct .text{
	position: absolute;
	right:35px;
	top:11px;
	font-size:26px;
	font-family: "宋体";
	color:#fff;
}
.ul{
	width:100%;
}
.ul li{
	float:left;
	margin-bottom: 20px;
}
.ul .show{
	display: block;
}
.ul li:nth-of-type(odd){
	margin-right:20px;
}
.btn{
	clear: both;
	width:260px;
	height:60px;
	line-height: 48px;
	color:#ff9f22;
	border:1px solid #ff9f22;
	text-align: center;
	font-weight: 400;
	font-size:24px;
	margin:0 auto 45px auto;
	display: block;
}
.btn:hover{
	color:#fff;
	background:#ff9f22;
}
.kong-2{
	clear: both;
	width:100%;
	height:80px;
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
	 					<router-link to="/union" @click.native="flushCom"><li>云之道COP</li></router-link>
	 					<router-link to="/activ" @click.native="flushCom"><li class="active">活动中心</li></router-link>
	 					<router-link to="/helpcj" @click.native="flushCom"><li>帮助中心</li></router-link>
	 					<router-link to="/about" @click.native="flushCom"><li>关于我们</li></router-link>
	 					<!--<router-link to="/"><li>App下载</li></router-link>-->
	 			</ul>
 			</nav>
		</header>
		<!----banner---->
		<banner></banner>
		<!----banner---->
		
		<!----活动开始----->
		<div class="hd">
			<div class="conduct">
				<img src="../../assets/hd-1.jpg" alt="" class="jx"/>
				<span class="text">进行中</span>
			</div>
				<ul class="ul">
					<li class="show"><img src="../../assets/hd-2.jpg"></li>
					<li class="show"><img src="../../assets/hd-3.jpg"></li>
					<li v-if="willShow"><img src="../../assets/hd-2.jpg"></li>
					<li v-if="willShow"><img src="../../assets/hd-3.jpg"></li>
					<li v-if="willShow"><img src="../../assets/hd-3.jpg"></li>
					<li v-if="willShow"><img src="../../assets/hd-3.jpg"></li>
					<li v-if="willShow"><img src="../../assets/hd-3.jpg"></li>
				</ul>
				<div class="kong-2"></div>
				<div class="btn" @click="fn">{{text}}</div>
					
			
			
		</div>
		<!----活动结束----->
		<div class="clear"></div>
		<!----底部开始---->
		<footr></footr>
		<!----底部结束---->
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
	willShow:false,
	text:'查看更多往期活动'
    }
  },components:{Banner,Footr},
  methods:{
  	fn:function(){
  		 if(this.willShow==true){
            this.willShow=false;
          }else{
            this.willShow=true;
          }
  	},
  	flushCom:function(){
  		this.$router.go(0); 	
  		}
  }
}

</script>

