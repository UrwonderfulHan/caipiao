<template>
<div >
    <header>{{title}}</header>
</div>
</template>

<script>
export default {
    name:'Header',
    data() {
          return {
            title:'',
          }
        },
}
</script>

<style  scoped>
header{
    font-size: 0.18rem;
    height:0.45rem;
    line-height: 0.45rem;
    text-align: center;
    background: #993333;
    color: #ffffff
  }
</style>