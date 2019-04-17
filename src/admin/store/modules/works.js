const works = {
  namespaced: true,
  state: {
    works: [],
  },
  mutations: {
    ADD_WORK: (state, work) => {
      state.works.unshift(work);
    },
    SET_WORKS: (state, works) => {
      state.works = works
    },
    REMOVE_WORK: (state, workID) => {
      state.works = state.works.filter(work => {
        return work.id !== workID;
      });
    },
    EDIT_WORK: (state, editedWork) => {
      state.works = state.works.map(work => {
        return editedWork.id === work.id ? editedWork : work;
      });
    }
  },
  getters: {
  },
  actions: {
    async addWork({commit}, work){
      const formData = new FormData();
      Object.keys(work).map(function(key) {
        formData.append(key, work[key]);
      });
      try {
        const response = await this.$axios.post('/works', formData);
        commit('ADD_WORK', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchWorks({commit}) {
      try {
        const response = await this.$axios.get('/works/114');
        commit('SET_WORKS', response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeWork({commit}, workID) {
      try {
        const response = await this.$axios.delete(`/works/${workID}`);
        commit('REMOVE_WORK', workID);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editWork({commit}, work) {
      const formData = new FormData();
      Object.keys(work).map(function(key) {
        formData.append(key, work[key]);
      });
      try {
        const response = await this.$axios.post(`/works/${work.id}`, formData);
        commit('EDIT_WORK', response.data.work);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}

export default works;
