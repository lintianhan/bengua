const mutations = {
  increment: state => {
    state.count++;
  },
  asnyAdd: state => {
    state.number++;
  },
  changePassword: (state, payload) => {
    state.password = payload.password;
  },
  changeNickname: (state, payload) => {
    state.nickname = payload.nickname;
  },
  set_name(state, name) {

    // sessionStorage.uesrname = JSON.stringify(name); 
    // sessionStorage.setItem("username", JSON.stringify(name))
    sessionStorage.setItem("username", name);
    state.username = name;
    // sessionStorage.setItem("id2",name);
  },
  del_name(state) {
    state.username = ''
    sessionStorage.removeItem('username') 
  }

};

export default mutations;