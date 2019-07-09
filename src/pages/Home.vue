<template>
  <div class="wrapper" >
    <!-- header --> 
    <header>{{title}}</header>

<section>
    <!-- banner -->
    <van-swipe :autoplay="3000" indicator-color="white" style="height:2rem;" class="banner">
      <van-swipe-item><img src="../../static/imgs/banner1.png"></van-swipe-item>
      <van-swipe-item><img src="../../static/imgs/banner3.jpg"></van-swipe-item>
      <van-swipe-item><img src="../../static/imgs/banner1.png"></van-swipe-item>
      <van-swipe-item><img src="../../static/imgs/banner3.jpg"></van-swipe-item>
    </van-swipe>

    <!-- Notify 消息通知 -->
    <van-notice-bar class="notify"
      text="通知内容:德国时时彩，五分彩，十分彩，幸运飞艇上线了，现在开玩，免费送1000元！！！"
      left-icon="volume-o"
      background="#fff"
      color="#333"
      :scrollable="true"
    />

    <!-- main -->
    <div class="main">
        <van-row class="box">
          <van-col span="16" class="box1" >
            <p>德国彩票</p>
            <span>极简操作  一站式资讯平台</span>
          </van-col>
          <van-col span="8" class="box2">
            <img src="../../static/imgs/haha.png" alt="">
          </van-col>
        </van-row>

    <!-- 彩票列表 -->
      <div class="lottery_list">
        <div>
          <img src="../../static/imgs/shishicai.png">
          <span>德国时时彩</span>
        </div>
        <div>
          <img src="../../static/imgs/shifencai.png">
          <span>十分彩</span>
        </div>
        <div>
          <img src="../../static/imgs/wufencai.png">
          <span>五分彩</span>
        </div>
        <div>
          <img src="../../static/imgs/xingyunfeiting.png">
          <span>幸运飞艇</span>
        </div>
        <div>
          <img src="../../static/imgs/caipiao5.png">
          <span>竞足单关</span>
        </div>
        <div>
          <img src="../../static/imgs/caipiao6.png">
          <span>竞足篮球</span>
        </div>
        <div>
          <img src="../../static/imgs/caipiao7.png">
          <span>足球单场</span>
        </div>
        <div>
          <img src="../../static/imgs/caipiao8.png">
          <span>大乐透</span>
        </div>
        <div>
          <img src="../../static/imgs/caipiao9.png">
          <span>更多彩种</span>
        </div>
      </div>
    </div>

</section>

</div>
</template>

<script>
  //import Header from '@/components/Header'

  export default {
    name:'Home',
    components: {
    // Header
    },
    data() {
          return {
            title:'德国彩票',
          }
        },
        methods: {
          
      }
    }

</script>
<style scoped>
   header{
    font-size: 0.18rem;
    height:0.45rem;
    line-height: 0.45rem;
    text-align: center;
    background: #993333;
    color: #ffffff
  }
 .banner img{
 		height: 100%;
 		width: 100%;
 }
  
  .notify
  {
  height: 0.5rem;
  }
  .box{
    font-size: 0.18rem;
    background:#fff;
    height: 1.2rem;
    padding-left: 0.1rem;
  }
  .box p{
  font-weight: bold
  }
  .box span{
    color: #999
  }
  .box img{
    height: 0.8rem;
    width: 1rem
  }
  .main{
    background:#f4f4f4;
    padding: 0.12rem 0;
  }
  .box1{
    margin: 0.1rem 0
  }
  .box2{
    margin-top: 0.2rem
  }
  .lottery_list{
    margin-top: 0.12rem;
    margin-bottom: 0.7rem
  }
  .lottery_list div{
    width: 33.3vw;
    float: left;
  }
  .lottery_list div img{
    width:100%;
    display: block
  }
  .lottery_list div span{
    width:100%;
    display: block;
    height: 0.35rem;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.35rem;
    background: #fff
  }
  section{
    margin-bottom: 3rem
  }
</style>



