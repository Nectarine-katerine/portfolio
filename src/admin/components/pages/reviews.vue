<template lang="pug">
  transition(name="fade" mode="out-in")
    div
      HeadTitle(
        headTitle='Блок «Отзывы»'
      )
      div(
        :class="{'reviews-load': isLoading}"
      )
        transition(name="bounceIn")
          reviewsForm(
            v-if="showFormReview"
            @hideFormReview="cancelEditReview"
          )
        section.admin-reviews
        ul.admin-reviews__list
          li(v-if="!showFormReview").admin-reviews__item.admin-block.admin-reviews__item_button
            button(
              @click.prevent="showFormReview = !showFormReview"
            ).admin-add.admin-add_bigest.admin-add_middle
              .admin-add__icon
              | Добавить работу
          reviewsList(
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
      showFormReview: false
    };
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    }),
    ...mapState("reviews", {
      isLoading: state => state.isLoading
    })
  },
  components: {
    HeadTitle: () => import("../Head-title.vue"),
    reviewsForm: () => import("../reviews/reviews-form.vue"),
    reviewsList: () => import("../reviews/reviews-list.vue")
  },
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),
    ...mapMutations("reviews", ["SET_EDITED_REVIEW"]),
    editReview(review) {
      this.SET_EDITED_REVIEW(review);
      this.showFormReview = true;
    },
    cancelEditReview() {
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
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.admin-reviews {
  margin-bottom: 45px;
}

.admin-reviews__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 31px;
  grid-row-gap: 30px;

  @include w_850 {
    grid-template-columns: repeat(2, 1fr);
  }

  @include w_650 {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 0;
  }
}

.admin-reviews__item {
  padding: 30px 20px;
  min-height: 380px;

  @include w_500 {
    min-height: 111px;
  }

  &_button {
    padding: 0;
  }
  .admin-block__header {
    padding-left: 15px;
    padding-top: 0;
    padding-bottom: 20px;

    @include w_500 {
      padding-left: 0;
      padding-bottom: 30px;
      padding-right: 0;
    }
  }
  .admin-block__content {
    padding-top: 23px;
    padding-left: 11px;
    padding-right: 25px;

    @include w_500 {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .admin-block__footer {
    padding-left: 15px;
  }
}
.admin-reviews__text {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;

  @include w_500 {
    font-size: 14px;
    line-height: 24px;
  }
}

.admin-reviews__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reviews-load {
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    background: rgba(#ccc, 0.5)
      svg-load("loader.svg", fill=#414c63, width=80px, height=80px) center
      center no-repeat;
  }
}
</style>
