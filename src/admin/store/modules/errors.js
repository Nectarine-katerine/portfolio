const errors = {
  namespaced: true,
  state: {
    errors: 'Ошибка',
    visibleMessage: false,
    type: 'success'
  },
  mutations: {
    SET_ERROR: (state, error) => {
      state.errors = error.message;
      state.type = error.type;
      state.visibleMessage = true;
    },
    CLOSE_ERROR: (state) => {
      state.errors = '';
      state.visibleMessage = false;
    },
  },
  actions: {
    setError({commit}, error) {
      commit('SET_ERROR', error);
      setTimeout(()=>{
        commit('CLOSE_ERROR');
      }, 5000);
    }
  }
}

export default errors;
