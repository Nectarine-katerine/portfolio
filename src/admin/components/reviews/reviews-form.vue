<template lang="pug">
  section.new-reviews
    .admin-block
      .admin-block__header
        h2.new-reviews__title Новый отзыв
      .admin-block__content
        .new-reviews__form
          form
            .new-reviews__form-content
              .new-reviews__left
                .avatar.avatar_empty.new-reviews__avatar(
                  :class="{'filled': this.renderedPhoto.length}",
                  :style="{'backgroundImage': `url(${this.renderedPhoto})`}"
                )
                .form__input-container
                  label.admin-add 
                    input(
                      type="file"
                      name="photo"
                      v-validate="'required|image|size:1500'"
                      @change="appendFile($event)"
                      ).form__file-input
                    | Добавить фото
                  .form__error(v-show="errors.has('photo')") {{ errors.first('photo') }}
              .new-reviews__right
                .form__row
                  .form__col
                    .form__group(v-bind:class="{ form__group_error: errors.has('author') }")
                      label.form__label Имя автора
                      .form__input-container
                        input(
                          name="author"
                          v-validate="'required|max:100'"
                          v-model="review.author"
                          type="text").form__input    
                      .form__error(v-show="errors.has('author')") {{ errors.first('author') }}
                  .form__col
                    .form__group(v-bind:class="{ form__group_error: errors.has('occ') }")
                      label.form__label Титул автора
                      .form__input-container
                        input(
                          name="occ"
                          v-validate="'required|max:50'"
                          v-model="review.occ"
                          type="text").form__input  
                      .form__error(v-show="errors.has('occ')") {{ errors.first('occ') }}
                .form__row
                  .form__col
                    .form__group(v-bind:class="{ form__group_error: errors.has('text') }")
                      label.form__label Отзыв
                      .form__input-container
                        textarea(
                          name="text"
                          v-validate="'required'"
                          v-model="review.text"
                        ).form__input.form__input_text
                      .form__error(v-show="errors.has('text')") {{ errors.first('text') }}
                .form__row
                  .form__col.new-reviews__controls
                    button(
                      type="button"
                      @click.prevent="$emit('hideFormReview')"
                      ).admin-btn.admin-btn_empty Отмена
                    button(
                      @click.prevent="validateForm"
                      type="button"
                      ).admin-btn Сохранить

</template>

<script>

import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dataRenderedPhoto: ""
    };
  },
  computed: {
    ...mapState("reviews", {
      review: state => state.editedReview
    }),
    renderedPhoto: {
      get() {
        if (this.review.id && !this.dataRenderedPhoto)
          return `https://webdev-api.loftschool.com/${this.review.photo}`;
        else {
          return this.dataRenderedPhoto;
        }
      },
      set(photo) {
        this.dataRenderedPhoto = photo;
      }
    }
  },
  methods: {
    ...mapActions("reviews", ["addReview", "editReview"]),
    ...mapMutations("reviews", ["SET_EDITED_REVIEW"]),
    ...mapActions("errors", ["setError"]),
    appendFile(e) {
      this.$validator.validate("photo").then(valid => {
        const file = e.target.files[0];
        const reader = new FileReader();
        this.review.photo = file;
        if (valid) {
          try {
            reader.readAsDataURL(file);
            reader.onload = () => {
              this.renderedPhoto = reader.result;
            };
          } catch (error) {
            this.setError({
              message: error,
              type: "error"
            });
          }
        }
      });
    },
    validateForm() {
      if (this.review.id && this.review.photo) {
        this.$validator.detach("photo");
      }
      this.$validator.validate().then(valid => {
        if (valid) {
          this.saveReview();
        }
      });
    },
    async saveReview() {
      try {
        if (this.review.id) {
          this.editReview(this.review);
        } else {
          await this.addReview(this.review);
        }
        this.setError({
          message: this.review.id ? `Отзыв изменен` : `Отзыв добавлен`,
          type: 'success'
        });      
        this.SET_EDITED_REVIEW({});
        this.renderedPhoto = "";
        this.$validator.reset();
        this.$emit("hideFormReview");
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>

@import "../../../styles/mixins.pcss";
@import "../../../styles/admin/avatar-admin.pcss";

.new-reviews {
  margin-bottom: 30px;
  .admin-block__content {
    margin-bottom: 0;

    @include w_500 {
      padding-right: 10px;
    }
  }
  .admin-block {
    padding-bottom: 17px;
  }
  .admin-block__header {

    @include w_500 {
      padding-left: 0;
    }
  }

  @include w_500 {
    margin-bottom: 11px;
  }
}

.new-reviews__title {
  color: $title-color;
  font-size: 18px;
  font-weight: 700;
  padding-top: 19px;
  padding-bottom: 10px;
}

.new-reviews__left {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include w_500 {
    margin-bottom: 45px;
  }
}

.new-reviews__form-content {
  display: grid;
  grid-template-columns: 200px .81fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;

  @include w_850 {
    grid-template-columns: 200px 1fr;
  }

  @include w_500 {
    grid-template-columns: 1fr;
  }
  .form__label {
    padding-left: 0;
    font-size: 16px;
    margin-bottom: 0;
    font-weight: 600;
    opacity: .7;

    @include w_850 {
      margin-bottom: 5px;
    }

    @include w_500 {
      font-size: 14px;
      margin-bottom: 13px;
    }
  }
  .form__input {
    font-size: 16px;
    font-weight: 600;
    padding-left: 0;

    @include w_850 {
      width: 68%;
    }

    @include w_500 {
      width: 100%;
      font-size: 14px;
    }
  }
  .form__input_text {
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    margin-top: 15px;
    height: 116px;
    border-bottom: 0;
    border: 1px solid rgba(#414c63, .2);
    line-height: 30px;

    @include w_850 {
      width: 100%;
      height: 148px;
    }

    @include w_500 {
      font-size: 14px;
      line-height: 24px;
      margin-top: 0;
    }
  }
  .form__col {
    margin-right: 30px;

    @include w_850 {
      margin-bottom: 40px;
      margin-right: 0;
      &:last-child {
        margin-bottom: 0;
      }
    }

    @include w_500 {
      margin-bottom: 24px;
    }
  }
  .form__row {
    margin-bottom: 35px;
    &:nth-last-child(2) {
      margin-bottom: 25px;

      @include w_500 {
        margin-bottom: 30px;
      }
    }

    @include w_850 {
      display: flex;
      flex-direction: column;
      &:last-child {
        margin-bottom: 13px;
      }
    }

    @include w_500 {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 17px;
      }
    }
  }
}

.new-reviews__form {
  padding-top: 34px;
  padding-left: 12px;

  @include w_500 {
    padding-top: 12px;
    padding-left: 0;
  }
}

.new-reviews__avatar {
  margin-bottom: 25px;

  @include tablets {
    width: 200px;
    height: 200px;
  }
}

.new-reviews__controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.filled {
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    background: none;
  }
}
</style>
