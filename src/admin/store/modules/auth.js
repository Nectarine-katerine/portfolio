import errors from "../../helpers/errors";

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('loftToken') || '',
    expiredToken: localStorage.getItem('loftExpiredToken') || 0
  },
  getters: {
    token: state => state.token,
    expiredToken: state => state.expiredToken,
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    },
    setExpiredToken(state, time){
      state.expired = time;
    }
  },
  actions: {
    async login({commit}, userData){
      try {
        const response = await this.$axios.post('login', userData);

        localStorage.setItem('loftToken', response.data.token);

        let seconds = Math.round(new Date()/1000) + response.data.ttl;
        localStorage.setItem('loftExpiredToken', seconds);

        commit('setToken', response.data.token);
        commit('setExpiredToken', seconds);

        this.$axios.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
        return response;
      } catch (error) {
        errors(error);
      }
    },
    async logout({commit}){
      try {
        const response = await this.$axios.post('logout');

        localStorage.removeItem('loftToken');
        localStorage.removeItem('loftExpiredToken');

        commit('setToken', '');
        commit('setExpiredToken', 0);

        this.$axios.defaults.headers['Authorization'] = '';

        return response;
      } catch (error) {
        errors(error);
      }
    }
  }
}

export default auth;
