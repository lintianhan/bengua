<template >
  <div class="kuang">
    <div class="aa">
      <div class="logo">logo</div>
      <div>{{menu}}</div>
      <button v-on:click="count">点击</button>
    </div>
  </div>
</template>


<style scoped>
/* .kuang {
  width: 100%;
  height: 100%;
} */
.aa {
  float: left;
  width: 20%;
  margin: 0;
  height: 100%;
  background: green;
  text-align: center;
}
.logo {
  width: 100%;
  height: 10%;
  background: red;
}
</style>