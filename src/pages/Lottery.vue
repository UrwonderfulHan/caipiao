<template>
	<div>
		
	</div>
</template>

<script>
 import Footer from '@/components/Footer'
	export default{
		name:'Search',
		data(){
			return{
				
			}
		},
		components:{
			Footer
		},
		mounted(){
			this.$emit('toTitle',this.title)
		}
	}
</script>

<style scoped="scoped">
 /* header{
    font-size: 0.18rem;
    height:0.45rem;
    line-height: 0.45rem;
    text-align: center;
    background: #993333;
    color: #ffffff
  } */
</style>