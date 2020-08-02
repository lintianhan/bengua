<template>
<div id="right">
    <p>{{msg}}产品管理页面的内容</p>
      <loading></loading>
    </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'product'
    }
  }
}
</script>
<style scoped>
#right {
  float: right;
  margin-top:-300px;
   margin-right:60px;
  text-align: center;
  font-size: 22px;
  width: 1200px;
  height: 200px;
  background: rgba(250, 246, 246, 0.548);
}
</style>
