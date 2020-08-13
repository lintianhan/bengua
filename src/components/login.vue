<template>
  <div>
    <form @submit.prevent="save">
      账号：
      <input type="text" name="name" v-model="entity.username" />
      <br />密码：
      <input type="password" name="password" v-model="entity.password" />
      <br />
      <button class="btn btn-success" type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import { login } from "../api/api";
export default {
  name: "Login",
  data() {
    return {
      entity: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    save() {
      //   this.$axios({
      //     url: "http://221.215.103.126:9099/m/loginForApp",
      //     method: "post",
      //     data: this.entity,
      //     // headers: {
      //     //   "Content-Type": "application/json",
      //     // },
      //   })
      //     .then((response) => {
      //       if (response.data.success) {
      //         this.$router.push("/home");
      //       }
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });

      login(this.entity).then((res) => {
        if (res.data.success) {
          const response=res.data;
          localStorage.setItem('token',response.data.authToken);
          this.$router.push("/home");
        }
      });
    },
  },
};
</script>
