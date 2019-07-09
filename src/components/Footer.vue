<template>
<div >
    <van-tabbar 
      v-model="active"
      fixed
      active-color="#ff6666"
      inactive-color="#000"
    >
        <van-tabbar-item icon="home-o" to="/home" >彩票大厅</van-tabbar-item>
        <van-tabbar-item icon="balance-o" to="lottery">开奖结果</van-tabbar-item>
        <van-tabbar-item icon="service-o" to="service">客服</van-tabbar-item>
        <van-tabbar-item icon="contact" to="my">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
    name:'Footer',
    data() {
        return {
            active: 0,
        };
    },
}
</script>
<style  scoped>

</style>