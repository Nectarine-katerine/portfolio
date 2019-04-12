export default {
  namespaced: true,
  state:{
    groups: []
  },
  mutations:{
    ADD_GROUP: (state, group) => {
      state.groups.unshift(group);
    },
    SET_GROUPS: (state, groups) =>{
      state.groups = groups;
    },
    EDIT_GROUP: (state, editGroup) => {
      state.groups = state.groups.map(group => {
        return editGroup.id === group.id ? editGroup : group;
      });
    },
    REMOVE_GROUP: (state, groupID) =>{
      state.groups = state.groups.filter(group =>{
        return group.id !== groupID;
      });
    },
  },
  actions: {
    async addNewSkillGroup({commit}, groupName){
      try {
        const response = await this.$axios.post('/categories',{
          title: groupName
        });  
        commit('ADD_GROUP', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchGroups({commit}){
      try {
        const response = await this.$axios.get('/categories');  
        commit('SET_GROUPS', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editGroup({commit}, group){
      try {
        const response = await this.$axios.post(`/categories/${group.id}`, group);  
        commit('EDIT_GROUP', response.data.category);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeGroup({commit}, groupID){
      try {
        const response = await this.$axios.delete(`/categories/${groupID}`);  
        commit('REMOVE_GROUP', groupID);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
  }
}