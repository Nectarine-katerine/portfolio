<template lang="pug">
  .edit
    .container
      h2.edit__title Новый отзыв
      .edit__content.reviews__content
        label.load.load__reviews
          .load__photo(v-model="review.photo"
            :class="{'filled' : this.rendedPhotoUrl.length}"
            :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
          )  
            svg.load__icon
              use(xlink:href="sprite.svg#avatar")
          .load__btn.load__button_reviews Добавить фото
          input(type="file" name="file" @change="appendFileAndRenderPhoto").load__photo-input
        form.safe.safe_reviews
          .safe__row.safe__row_reviews
            .safe__row_two-col
              label(for="author").safe__row-title Имя автора
              input(type="text" name="name" v-model="review.title" placeholder="" required).safe__row-input.section__input
            .safe__row_two-col
              label(for="position").safe__row-title Титул автора
              input(type="text" name="occ" v-model="review.occ" placeholder="" required).safe__row-input.section__input
          .safe__row
            label(for="review").safe__row-title Отзыв
            textarea(type="textarea" name="text" v-model="review.text" placeholder="" required).safe__textarea.safe__row-input.section__input Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .safe__row.safe__btns
            button(type="button" @click.prevent="showReviewsAdding = false").safe__reset Отмена
            button(type="button" @click.prevent="saveDataNewReviews").button Сохранить
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    showReviewsAdding: Boolean
  },
  data() {
    return {
    rendedPhotoUrl: "",
    review: {
      photo: "",
      title: "",
      occ: "",
      text: ""
      }
    }
  },
  methods: {  
    ...mapActions("reviews", ["createReview"]),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      const reader = new FileReader();
        
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
        };
      } catch (error) {
          alert("sh*t happens :(");
      }
    },
    async saveDataNewReviews(){
      try {
        await this.createReview(this.review);
                      
      } catch (error) {
        alert('ЧТО ТО ЯВНО ИДЕТ НЕ ТАК!!!');
      }
    }
  }
}
</script>
