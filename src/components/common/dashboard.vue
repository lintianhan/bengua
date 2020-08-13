<template>
  <div>
    <div>fretr</div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  // data() {
  //   return {
  //     entity: {
  //       username: "",
  //       password: "",
  //     },
  //   };
  // },
  // methods: {
  //   submit() {
  //     axios
  //       .post("http://221.215.103.126:9099/m/loginForApp", this.entity)
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   },
  // },
};
</script>
