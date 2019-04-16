<template lang="pug">
  section.section.reviews
    .container.reviews__container
      .section__top
        .title Блок "Отзывы"
      reviews-add(v-if="showFormReview"
      @hideFormReview="cancelEditReview"
    )
      ul.section__list
        li.section__item.section__item_add-new(v-if="!showFormReview")
          .add-new
            button.add-new__btn(type="button" @click.prevent="showFormReview = !showFormReview") +
            .add-new__text Добавить отзыв
        
        reviews-group(
          v-for="review in reviews"
          :key="review.id"
          :review="review"
          @editReview="editReview"
        )
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      showFormReview: false,
    };
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  components: {
    reviewsAdd: () => import("../reviews/reviews-add.vue"),
    reviewsGroup: () => import("../reviews/reviews-group.vue")
  },
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),
    ...mapMutations('reviews', ['SET_EDITED_REVIEW']),
    editReview(review){
      this.SET_EDITED_REVIEW(review);
      this.showFormReview = true;
    },
    cancelEditReview(){
      this.showFormReview = false;
      this.SET_EDITED_REVIEW({});
    }
  },
  async created() {
    try {
      await this.fetchReviews();
    } catch (error) {
      alert(error);
    }
  }
}
</script>