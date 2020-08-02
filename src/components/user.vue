<template>
<div id="right">
    <p>{{msg}}用户管理页面的内容</p>
    </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'Welcome to USER'
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
