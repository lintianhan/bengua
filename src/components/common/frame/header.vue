<template>
  <div>
    <form>
      账号：
      <input type="text" name="name" v-model="entity.username" />
      <br />密码：
      <input type="password" name="password" v-model="entity.password" />
      <br />
      <button @click="submit">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Header",
  data() {
    return {
      entity: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post("http://221.215.103.126:9099/m/loginForApp", this.entity)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
