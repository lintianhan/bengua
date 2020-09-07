
const getters = {
    message: state => {
      return '用户名为：' + state.username;
    },
    msg: state => {
      return `昵称为：${state.nickname}`;
      // 等价于  return '昵称为：' + state.nickname;
      // `${}` 是ES6中的模版字符串语法
    },
    getName(state){
      state.username = sessionStorage.getItem("username")
      return state.username
    },
    getName1(state){
      state.username = sessionStorage.getItem("id2")
      return state.username
    },
  };
   
  export default getters;