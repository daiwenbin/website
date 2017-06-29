<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'

}
import $ from './public/jquery'

</script>

<style>
*{
	padding:0;
	margin:0;
	color:#000;
}
html,body{
	min-width: 1200px;
	overflow-x: hidden;
}
a{
	text-decoration: none;
}
ul li, ol li{
	list-style: none;
}

/*****公共top**********/
.top{
	width:100%;
	height:30px;
	background:#1171dd;
}
.top > p{
	width:1200px;
	margin:0 auto;
	text-align: right;
	line-height: 30px;
	color:#fff;
	font-size:16px;
	font-family: "微软雅黑";
}
.logo{
	margin:20.5px 0;
}
/*****公共header******/
.header{
	width:100%;
	height:90px;
	background:#fff;
	float:left;
}
nav{
		width:1200px;
		height:90px;
		margin:0 auto;
		background:#fff;
	}
nav > .nav-right{
	float:right;
}
nav > .nav-right li{
	width:125px;
	margin:25px 5px;
	padding:4px 0;
	text-align: center;
	float:left;
	font-size:22px;
	color:#333;
}
nav > .nav-right .active{
	color:#fff;
	border-radius: 8px;
	background:#ff9f22;
}
/*****公共header******/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
