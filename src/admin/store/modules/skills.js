export default {
  namespaced: true,
  state: {
    skills: [],
    isLoading: false
  },
  mutations: {
    SET_SKILLS: (state, skills) => {
      state.skills = skills
    },
    ADD_SKILL: (state, skill) => {
      state.skills.push(skill);
    },
    REMOVE_SKILL: (state, skillID) => {
      state.skills = state.skills.filter(skill => {
        return skill.id !== skillID;
      });
    },
    EDIT_SKILL: (state, editedSkill) => {
      state.skills = state.skills.map(skill => {
        return editedSkill.id === skill.id ? editedSkill : skill;
      });
    },
    UPDATE_LOADING_SKILLS: (state, val) => {
      state.isLoading = val;
    }
  },
  actions: {
    async addSkill({commit}, skill) {
      commit('UPDATE_LOADING_SKILLS', true);
      try {
        const response = await this.$axios.post('/skills', skill);
        commit('ADD_SKILL', response.data);
        commit('UPDATE_LOADING_SKILLS', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING_SKILLS', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchSkills({commit}) {
      commit('UPDATE_LOADING_SKILLS', true);
      try {
        const response = await this.$axios.get('/skills/114');
        commit('SET_SKILLS', response.data);
        commit('UPDATE_LOADING_SKILLS', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING_SKILLS', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeSkill({commit}, skillID) {
      commit('UPDATE_LOADING_SKILLS', true);
      try {
        const response = await this.$axios.delete(`/skills/${skillID}`);
        commit('REMOVE_SKILL', skillID);
        commit('UPDATE_LOADING_SKILLS', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING_SKILLS', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editSkill({commit}, skill) {
      commit('UPDATE_LOADING_SKILLS', true);
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('EDIT_SKILL', response.data.skill);
        commit('UPDATE_LOADING_SKILLS', false);
        return response;
      } catch (error) {
        commit('UPDATE_LOADING_SKILLS', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}
