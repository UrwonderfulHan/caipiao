<template>
  <div  >

    
  <!-- 容器加载子组件 -->
  <section class="container">
     <keep-alive>
				<router-view></router-view>
      </keep-alive>
	</section>
  <!-- 底部标签 -->
  <footer><Footer/></footer>

</div>
</template>

<script>
  import Footer from '@/components/Footer'
  export default {
    name:'Index',
    components: {
      Footer
    },
    data() {
          return {
            title:"",
            active: 0,
          }
        }
    }

</script>
<style scoped>

</style>



