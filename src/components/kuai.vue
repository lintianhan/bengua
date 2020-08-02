<template>
<div id="right">
      <router-link to="/frist">首页</router-link><br>
      <router-link to="/user">用户管理</router-link><br>
      <router-link to="/product">产品管理</router-link><br>
      <router-link to="/order">订单管理</router-link>
      </div>
</template>

<script>
export default {
  name: 'kuai'
}
</script>
<style scoped>
#right {
   float: right;
  margin-top:-300px;
   margin-right:60px;
  text-align: center;
  font-size: 22px;
  width: 1400px;
  height: 200px;
  background: rgba(240, 237, 237, 0.548);
}
</style>
