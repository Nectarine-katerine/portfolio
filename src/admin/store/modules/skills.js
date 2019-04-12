export default {
  namespaced: true,
  state:{
    skills: []
  },
  mutations:{
    SET_SKILLS: (state, skills) =>{
      state.skills = skills
    },
    ADD_SKILL: (state, skill) =>{
      state.skills.push(skill);
    },
    REMOVE_SKILL: (state, skillID) =>{
      state.skills = state.skills.filter(skill =>{
        return skill.id !== skillID;
      });
    },
    EDIT_SKILL: (state, editedSkill) =>{
      state.skills = state.skills.map(skill => {
        return editedSkill.id === skill.id ? editedSkill : skill;
      });
    }
  },
  actions:{
    async addSkill({commit}, skill){
      try {
        const response = await this.$axios.post('/skills', skill);
        commit('ADD_SKILL', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchSkills({commit}){
      try {
        const response = await this.$axios.get('/skills/114');
        commit('SET_SKILLS', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeSkill({commit}, skillID){
      try {
        const response = await this.$axios.delete(`/skills/${skillID}`);
        commit('REMOVE_SKILL', skillID);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editSkill({commit}, skill){
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('EDIT_SKILL', response.data.skill);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}