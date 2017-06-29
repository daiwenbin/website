<template>
	<div id="container">
        <ul class="pic">
            <li style="display: block;"><img src="../../assets/banner.png" alt="pic1" /></li>
            <li><img src="../../assets/banner-2.jpg" alt="pic2" /></li>
            <li><img src="../../assets/banner-3.png" alt="pic3" /></li>
        </ul>
        <ul id="position">
            <li class="cur"></li>
            <li class=""></li>
            <li class=""></li>
        </ul>
        <a href="javascript:;" id="prev" class="arrow"></a>
        <a href="javascript:;" id="next" class="arrow"></a>
   </div>
</template>
<script>
import jquery from '../jquery'
import flexble from '../flexble'
export default {
name: 'index',
data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
} 
}
$(function(){
            //第一张显示
            $(".pic li").eq(0).show();
            //鼠标滑过手动切换，淡入淡出
            $("#position li").mouseover(function() {
                $(this).addClass('cur').siblings().removeClass("cur");
                var index = $(this).index();
                i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
                // $(".pic li").eq(index).show().siblings().hide();
                $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
            });
            //自动轮播
            var i=0;
            var timer=setInterval(play,2000);
            	setInterval(play(),2000);
			//向右切换
             function play(){
                i++;
                i = i > 3 ? 0 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(800).siblings().fadeOut(800);
            }
            //向左切换
            var playLeft=function(){
                i--;
                i = i < 0 ? 2 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            }
            
            //鼠标移入移出效果
            $("#container").hover(function() {
                clearTimeout(timer);
            }, function() {
                timer=setInterval(play,2000);
            });
            //左右点击切换
            $("#prev").click(function(){
                playLeft();
            })
            $("#next").click(function(){
                play();
            })
        })
</script>
<style>
#container{
    position: relative;
    width: 100%;
    margin:0 auto;
    clear: both;
    height: 3.2rem;
}
.pic{
	
    
}
.pic li {
	position: absolute;
    top: 0;
    left: 0;
    display: none;
}
.pic li img {
    width: 100%;
    height:100%;
    /*max-height: 350px;*/
}
#position{
    position: absolute;
    top:2.85rem;
    right:0;
    opacity: 0.4;
    width: 100%;
    text-align: center;
}
#position li{
    width: 15px;
    height: 15px;
    margin:0 2px;
    display: inline-block;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: #fff;
}
#position .cur{
    background-color: #1171dd;
}
 .arrow { 
     cursor: pointer;
      display: none; 
      line-height: 39px; 
      text-align: center; 
      font-size: 36px; 
      font-weight: bold; 
      width: 40px; 
      height: 40px;  
      position: absolute; 
      z-index: 2; 
      top: 50%;
      margin-top: -20px; /*width的一半*/
      /*background-color: RGBA(0,0,0,.3);*/ 
      color: #fff;
  }
.arrow:hover { 
    background-color: RGBA(0,0,0,.7);
}
#container:hover .arrow { 
    display: block;
}
#prev{ 
    left: 10%;
    background:url(../../assets/left.png) no-repeat center;
}
#next { 
    right: 10%;
    background:url(../../assets/right.png) no-repeat center;
}
</style>