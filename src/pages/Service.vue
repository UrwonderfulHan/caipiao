<template>
	<div>
		<header>{{title}}</header>
		<img src="../../static/imgs/kefupic.png" alt="">
		<div class="box">
			<div class="lianxi">
				<b>联系客服</b>
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     QQ:2258856     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     微信：22584156</span>
			</div>
		</div>
	</div>
</template>

<script>
  import Header from '@/components/Header'

	export default{
		name:'Search',
		components: {
     	Header
    	},
		data(){
			return{
				title:'联系客服'
			}
		}
	}
</script>

<style scoped="scoped">
  header{
    font-size: 0.18rem;
    height:0.45rem;
    line-height: 0.45rem;
    text-align: center;
    background: #993333;
    color: #ffffff
  }
  img{
	  height: 3rem;
	  width: 100vw;
	  display: block
  }
  .box{
	  background: #ff3333;
	  height: 2.2rem;
	  width: 100vw;
	  padding-top: 0.5rem
  }
  .lianxi{
	  width: 90vw;
	  height: 1.4rem ;
	  margin: auto;
	  background: #ffffff;
	  border-radius: 0.1rem
	  

  }
  .lianxi b{
	  font-size: 0.16rem;
	  display: block;
	  width: 90%;
	  margin:auto;
	  height: 0.4rem;
	  line-height: 0.4rem;
	  text-align:center;
	  color:#ff3333;
	  border-bottom:0.01rem solid #ff3333;
	  font-weight: 100

  }
  .lianxi span{
	  font-size: 0.14rem;
	  display: block;
	  width: 90%;
	  margin:auto;
	  height: 0.8rem;
	  line-height: 0.8rem
	  

  }
</style>