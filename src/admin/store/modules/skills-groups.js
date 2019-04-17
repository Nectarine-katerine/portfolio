export default {
  namespaced: true,
  state: {
    groups: [],
    isLoading: false
  },
  mutations: {
    ADD_GROUP: (state, group) => {
      state.groups.unshift(group);
    },
    SET_GROUPS: (state, groups) => {
      state.groups = groups;
    },
    EDIT_GROUP: (state, editGroup) => {
      state.groups = state.groups.map(group => {
        return editGroup.id === group.id ? editGroup : group;
      });
    },
    REMOVE_GROUP: (state, groupID) => {
      state.groups = state.groups.filter(group =>{
        return group.id !== groupID;
      });
    },
    UPDATE_LOADING: (state, val) => {
      state.isLoading = val;
    }
  },
  actions: {
    async addNewSkillGroup({commit}, groupName) {
      commit('UPDATE_LOADING', true);
      try {
        const response = await this.$axios.post('/categories',{
          title: groupName
        });
        commit('ADD_GROUP', response.data);
        commit('UPDATE_LOADING', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchGroups({commit}) {
      commit('UPDATE_LOADING', true);
      try {
        const response = await this.$axios.get('/categories');
        commit('SET_GROUPS', response.data);
        commit('UPDATE_LOADING', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editGroup({commit}, group) {
      commit('UPDATE_LOADING', true);
      try {
        const response = await this.$axios.post(`/categories/${group.id}`, group);
        commit('EDIT_GROUP', response.data.category);
        commit('UPDATE_LOADING', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeGroup({commit}, groupID) {
      commit('UPDATE_LOADING', true);
      try {
        const response = await this.$axios.delete(`/categories/${groupID}`);
        commit('REMOVE_GROUP', groupID);
        commit('UPDATE_LOADING', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
  }
}
