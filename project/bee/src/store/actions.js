const actions = {
    asnyAdd: context => {
      context.commit('asnyAdd');
    },
    set_namea({state}, name) {
      state.username = name;
      // sessionStorage.token = token 
    },
    changeNickname ({commit}, payload) {
      commit('changeNickname', payload);
    }
  };
   
  export default actions;