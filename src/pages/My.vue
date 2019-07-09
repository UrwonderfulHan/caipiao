<template>
	<div>
		<div class="head">
			<div class="imgbox">
				<span><img src="../../static/imgs/pic2 .jpg"/></span>
			</div>
			<div class="first">
				<span>昵称~</span>
				<span>ID：412546</span>
			</div>
			<div class="last">
				<span>余额：2658</span>
			</div>
		</div>

		<div class="box">
			<span class="span1"><img src="../../static/imgs/chongzhi.png"/> 充值</span>
			<span class="span2"><img src="../../static/imgs/tixian.png"/>  提现</span>
		</div>

		
			<span class="mylist">
				<van-icon name="manager" color="#ff6666" size="30px"/>
			个人资料
			</span>

			<span class="mylist">
				<van-icon name="label" color="#ffcc33" size="30px"/>
			报表管理
			</span>
		
			<span class="mylist">
				<van-icon name="umbrella-circle" color="#3399ff" size="30px"/>
			安全中心
			</span>
		
			<span class="mylist">
				<van-icon name="volume" color="#33cc99" size="30px"/>
			站内公告
			</span>
		
		<van-button type="default" class="btn">退出登录</van-button>
		
		
	</div>
</template>

<script>
	export default{
		name:'Service',
		data(){
			return{
				
			}
		},
		mounted(){
		
		}
	}
</script>

<style scoped="scoped">
.head{
background: #993333;
height: 25vh;
width: 100vw;
}
.imgbox{
	width: 30vw;
	height: 100%;

	float: left
}
.imgbox img{
	display: block;
	width: 0.6rem;
	height: 0.6em;
	border-radius: 0.3rem;
	margin: 0.3rem;	
}
.first{
	width: 40vw;
	float: left;
	height: 100%;
	margin-top: 0.4rem;
	
}
.first span{
	display: block;
	color: #fff;
	height: 0.3rem;
	font-size: 0.16rem
}
.first span:last-child{
	
	font-size: 0.12rem
}
.last{
	width: 30vw;
	float: left;
	height: 100%;
}
.last span{
	font-size: 0.16rem;
	display: block;
	background: #fff;
	height: 0.3rem;
	text-align: center;
	line-height: 0.3rem;
	margin-top: 0.45rem;
	border-top-left-radius: 0.2rem;
	border-bottom-left-radius: 0.2rem;
}
.box{
	height: 0.8rem;
	width: 90vw;
	margin: auto;
	background: #fff;
	 margin-top:-0.4rem ; 
	border-radius: 0.1rem;
	box-shadow: 0 0 0.2rem #888888;
	position: relative;
}
.box .span1{
	font-size: 0.14rem;
	position: absolute;
	left: 0.5rem;
	top: 0.2rem

}
.box .span2{
	font-size: 0.14rem;
	position: absolute;
	left: 2rem;
	top: 0.2rem;
	line-height: 0.4rem

}
.box span img{
	height: 0.3rem;
	width: 0.4rem;
	
}
.mylist{
	height: 0.5rem;
	margin-left: 0.2rem;

	font-size: 0.2rem;
	display: block;
	line-height: 0.5rem;
	margin-bottom: 0.2rem

}
.van-icon-manager{
	line-height: 0.5rem
}
.btn{
	width: 80vw;
	margin: auto;
	margin-left: 10vw
}
</style>