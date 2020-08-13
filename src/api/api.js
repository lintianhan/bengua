
import instance from '../api/axios'
export function login(obj) {
    return instance.post(`m/loginForApp`, obj)
}
export function logout() {
    return instance.get(`m/logut`)
}


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