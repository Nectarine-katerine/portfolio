const reviews = {
  namespaced: true,
  state:{
    reviews: [],
    editedReview: {},
    isLoading: false
  },
  mutations:{
    ADD_REVIEW: (state, review) =>{
      state.reviews.unshift(review);
    },
    SET_REVIEWS: (state, reviews) =>{
      state.reviews = reviews
    },
    REMOVE_REVIEW: (state, reviewID) =>{
      state.reviews = state.reviews.filter(review =>{
        return review.id !== reviewID;
      });
    },
    EDIT_REVIEW: (state, editedReview) =>{
      state.reviews = state.reviews.map(review => {
        return editedReview.id === review.id ? editedReview : review;
      });
    },
    SET_EDITED_REVIEW: (state, review) => {
      state.editedReview = {...review};
    },
    SET_LOAD_REVIEW: (state, val) => {
      state.isLoading = val;
    }
  },
  actions:{
    async addReview({commit}, review){
      commit('SET_LOAD_REVIEW', true);
      const formData = new FormData();
      Object.keys(review).map(function(key) {
        formData.append(key, review[key]);
      });
      try {
        const response = await this.$axios.post('/reviews', formData);
        commit('ADD_REVIEW', response.data);
        commit('SET_LOAD_REVIEW', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_REVIEW', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchReviews({commit}){
      commit('SET_LOAD_REVIEW', true);
      try {
        const response = await this.$axios.get('/reviews/114');
        commit('SET_REVIEWS', response.data.reverse());
        commit('SET_LOAD_REVIEW', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_REVIEW', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeReview({commit}, reviewID){
      commit('SET_LOAD_REVIEW', true);
      try {
        const response = await this.$axios.delete(`/reviews/${reviewID}`);
        commit('REMOVE_REVIEW', reviewID);
        commit('SET_LOAD_REVIEW', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_REVIEW', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editReview({commit}, review){
      commit('SET_LOAD_REVIEW', true);
      const formData = new FormData();
      Object.keys(review).map(function(key) {
        formData.append(key, review[key]);
      });
      try {
        const response = await this.$axios.post(`/reviews/${review.id}`, formData);
        commit('EDIT_REVIEW', response.data.review);
        commit('SET_LOAD_REVIEW', false);
        return response;
      } catch (error) {
        commit('SET_LOAD_REVIEW', false);
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}

export default reviews;
