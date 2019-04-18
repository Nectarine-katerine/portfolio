const works = {
  namespaced: true,
  state:{
    works: [],
    editedWork: {},
    isLoading: false
  },
  mutations:{
    ADD_WORK: (state, work) =>{
      state.works.unshift(work);
    },
    SET_WORKS: (state, works) =>{
      state.works = works
    },
    REMOVE_WORK: (state, workID) =>{
      state.works = state.works.filter(work =>{
        return work.id !== workID;
      });
    },
    EDIT_WORK: (state, editedWork) =>{
      state.works = state.works.map(work => {
        return editedWork.id === work.id ? editedWork : work;
      });
    },
    SET_EDITED_WORK: (state, work) => {
      state.editedWork = {...work};
    },
    SET_LOAD_WORK: (state, val) => {
      state.isLoading = val;
    }
  },
  getters:{
  },
  actions:{
    async addWork({commit}, work){
      commit('SET_LOAD_WORK', true);
      const formData = new FormData();
      Object.keys(work).map(function(key) {
        formData.append(key, work[key]);
      });
      try {
        const response = await this.$axios.post('/works', formData);
        commit('ADD_WORK', response.data);
        commit('SET_LOAD_WORK', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_WORK', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );        
      }
    },
    async fetchWorks({commit}){
      commit('SET_LOAD_WORK', true);
      try {
        const response = await this.$axios.get('/works/114');
        commit('SET_WORKS', response.data.reverse());
        commit('SET_LOAD_WORK', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_WORK', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );        
      }
    },
    async removeWork({commit}, workID){
      commit('SET_LOAD_WORK', true);
      try {
        const response = await this.$axios.delete(`/works/${workID}`);
        commit('REMOVE_WORK', workID);
        commit('SET_LOAD_WORK', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_WORK', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );        
      }
    },
    async editWork({commit}, work){
      commit('SET_LOAD_WORK', true);
      const formData = new FormData();
      Object.keys(work).map(function(key) {
        formData.append(key, work[key]);
      });
      try {
        const response = await this.$axios.post(`/works/${work.id}`, formData);
        commit('EDIT_WORK', response.data.work);
        commit('SET_LOAD_WORK', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_WORK', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );        
      }
    } 
  }
}

export default works;