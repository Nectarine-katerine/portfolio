<template lang="pug">
  section.section.reviews
    .container.reviews__container
      .section__top
        .title Блок "Отзывы"
      reviews-add(v-if="showReviewsAdding" 
      :showReviewsAdding="showReviewsAdding")
      ul.section__list
        li.section__item.section__item_add-new(@click="showReviewsAdding = true")
          .add-new
            button.add-new__btn(type="button") +
            .add-new__text Добавить отзыв
        
        reviews-group(
          v-for="rev in reviews" 
          :key="rev.id" 
          :rev="rev"
        )
</template>

<script>

import { mapActions, mapState } from 'vuex';
export default {
    components: {
        reviewsAdd: () => import('components/reviews-add.vue'),
        reviewsGroup: () => import('components/reviews-group.vue')
    },
    data() {
      return {
        showReviewsAdding: false
      }
    },
    computed: {
      ...mapState('reviews', {
        reviews: state => state.reviews
      })
    },
    methods: {
      ...mapActions('reviews', ['fetchReviews'])   
    },
    async created() {
      try {
        await this.fetchReviews();
      } catch (error) {
        alert('Ошибка при загрузки Отзывов');
      };
    }
}
</script>