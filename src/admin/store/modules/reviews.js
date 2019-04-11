export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEWS: (state, reviews) => {
      state.reviews = reviews;
    },
    LOAD_REVIEWS: (state, reviews) => {
      state.reviews = reviews;
    }
  },
  actions: {
    async createReview({commit}, review) {
      try {
        const formData = new FormData();
        formData.append('photo', review.photo);
        formData.append('author', review.title);
        formData.append('occ', review.occ);
        formData.append('text', review.text);

        const response = await this.$axios.post('/reviews', formData);
        commit("SET_REVIEWS", response.data);
        return response;
      } catch (error) {
        alert('Ошибка при создании отзыва');
      }
    },
      async fetchReviews({commit}, review) {
        try {
          const response = await this.$axios.get('/reviews/118', review);
          commit('LOAD_REVIEWS', response.data);
          return response;  
        } catch (error) {
          alert('Ошибка при загрузки отзывов');
        }            
    },
  }
};