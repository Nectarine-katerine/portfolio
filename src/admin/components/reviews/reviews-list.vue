<template lang="pug">
  li.admin-reviews__item.admin-block(
    :class="{edited: editedReview.id === review.id}"
  )
    .admin-block__header
      .reviews__author
        .avatar.avatar__w50.reviews__avatar
          img(
            :src="`https://webdev-api.loftschool.com/${review.photo}`"
          ).avatar__img
        .reviews__author-data
          .reviews__name {{review.author}}
          .reviews__post {{review.occ}}
    .admin-block__content
      .admin-reviews__text
        p {{review.text}}
    .admin-block__footer
      .controls
        ul.controls__list.admin-reviews__controls
          li.controls__item
            button.controls__btn(type="button"
              @click.prevent="editThisReview(review)"
            )
              span.controls__text Править
              div(class=`controls__icon controls__icon_pencil`)
          li.controls__item
            button.controls__btn(type="button"
              @click.prevent="deleteReview(review.id)"
            )
              span.controls__text Удалить
              div(class=`controls__icon controls__icon_cross`)
</template>

<script>

import { mapActions, mapState } from "vuex";
export default {
  props: {
    review: Object
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("reviews", ["removeReview"]),
    ...mapActions("errors", ["setError"]),
    async deleteReview(reviewID) {
      try {
        await this.removeReview(reviewID);
        this.setError({
          message: `Отзыв удален`,
          type: "success"
        });
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });
      }
    },
    editThisReview(review) {
      this.$emit("editReview", review);
    }
  },
  computed: {
    ...mapState("reviews", {
      editedReview: state => state.editedReview
    })
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "../../../styles/admin/avatar-admin.pcss";
@import "../../../styles/admin/reviews-admin.pcss";

.admin-reviews {
  margin-bottom: 45px;
}

.admin-reviews__item {
  padding: 30px 20px;
  min-height: 380px;

  @include phones {
    min-height: 111px;
  }

  &_button {
    padding: 0;
  }
  .admin-block__header {
    padding-left: 15px;
    padding-top: 0;
    padding-bottom: 20px;

    @include phones {
      padding-left: 0;
      padding-bottom: 30px;
      padding-right: 0;
    }
  }
  
  .admin-block__content {
    padding-top: 23px;
    padding-left: 11px;
    padding-right: 25px;

    @include phones {
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

  @include phones {
    font-size: 14px;
    line-height: 24px;
  }
}

.admin-reviews__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  @include tablets {
    width: 172px;
    height: 172px;
  }

  &_empty {
    position: relative;
    background-color: #dee4ed;
    &::before {
      content: "";
      position: absolute;
      width: 85px;
      height: 113px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: svg-load('user.svg', fill=#fff) center center no-repeat;
    }
  }
}

.avatar__img {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
}

.avatar__small {
  width: 75px;
  height: 75px;
  min-width: 75px;
  min-height: 75px;

  @include phones {
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
  }
}

.avatar__w45 {
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
}

.avatar__w50 {
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
}

.reviews__author {
  display: flex;
}

</style>
