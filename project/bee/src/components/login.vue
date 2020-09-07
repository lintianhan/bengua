<template>
  <div class="tu1">
    <div class="tu">
      <img src="../assets/tu.png" />
    </div>
    <div class="denglu">
      <div class="yuyan">
        <button class="yvyan">语言</button>
      </div>
      <div class="kuang">
        <!-- <form @submit.prevent="save"> -->
          <form>
          <p>
            <b>登录</b>
          </p>
          <a-form-model ref="ruleForm" :model="entity" :rules="rules" >
             <a-form-model-item has-feedback label="用户名" prop="loginName" ref="vehicleModel">
              <a-input v-model="entity.loginName" type="text" autocomplete="off" />
            </a-form-model-item>
            <a-form-model-item has-feedback label="密码" prop="password" ref="vehicleModel">
              <a-input-password placeholder="input password" v-model="entity.password"  autocomplete="off" />
            </a-form-model-item>
            
            <button class="btn btn-success" type="submit"  @click="save">登录</button>
          </a-form-model>
          <!-- <p class="p1">用户名</p>
          <input type="text" name="name" v-model="entity.loginName" />
          <br />
          <p class="p1">密码</p>
          <input type="password" name="password" v-model="entity.password" />
          <br />
          <button id="anniu" class="btn btn-success" type="submit">登录</button> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../api/api";
export default {
  name: "Login",
  data() {
    return {
      rules: {
        loginName: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "change",
          },
          {
            min: 3,
            max: 24,
            message: "Length should be 3 to 24",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input Activity password",
            trigger: "change",
          },
          {
            min: 6,
            max: 8,
            message: "Length should be 6 to 8",
            trigger: "change",
          },
        ],
      },
      // layout: {
      //   labelCol: { span: 4 },
      //   wrapperCol: { span: 14 },
      // },
      entity: {
        loginName: "",
        password: "",
      },
    };
  },
  methods: {
    error(obj) {
      this.$message.error(obj);
    },
    save() {
      login(this.entity).then((res) => {
        if (res.data.status == 0) {
          const response = res.data;
          console.log("okkk");
          localStorage.setItem("token", response.data.token);
          // this.$store.commit('set_name', response.data.userInfoExtendVO.loginName);
          this.$store.commit('set_name', response.data.userInfoExtendVO.loginName);
          sessionStorage.setItem("id1",response.data.userInfoExtendVO.loginName);//
          // this.$store.state.username = response.userInfoExtendVO.loginName;
          this.$router.push("/bujv");
        } else {
          this.error(res.data.message);
        }
      });
    },
  },
};
</script>

<style scoped>
.tu {
  float: left;
  width: 40%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.tu1 {
  width: 100%;
  height: 100%;
}
.kuang {
  /* margin:0 auto; */
  /* text-align:center; */
  width: 290px;
  height: 96px;
  position: relative;
  top: 20%;
  left: 50%;
  margin-left: -145px;
}
.denglu {
  float: right;
  width: 60%;
  height: 100%;
  /* background: green; */
}
#anniu {
  margin-top: 40px;
  width: 290px;
  height: 40px;
}
input {
  width: 290px;
  height: 40px;
}
p {
  font-size: 26px;
}
.p1 {
  font-size: 14px;
  line-height: 40px;
}
.yvyan {
  position: relative;
  right: 33px;
  text-align: center;
  line-height: 32px;
  width: 76px;
  height: 32px;
  border-style: solid;
  border-width: 1px;
  background-color: rgb(251, 251, 251);
}
.yuyan {
  position: relative;
  width: 76px;
  float: right;
  top: 33px;
  font-size: 14px;
}


</style>