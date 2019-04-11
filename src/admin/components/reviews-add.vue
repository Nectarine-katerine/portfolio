<template lang="pug">
  .edit
    .container
      h2.edit__title Новый отзыв
      .edit__content.reviews__content
        .load.load__reviews
          .load__photo(
            :class="{'filled' : this.rendedPhotoUrl.length}"
            :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
          )  
            svg.load__icon
              use(xlink:href="sprite.svg#avatar")
          .load__btn Добавить фото
            input(type="file" @click="appendFileAndRenderPhoto").load__button_reviews
        form.safe.safe_reviews
          .safe__row.safe__row_reviews
            .safe__row_two-col
              label(for="author").safe__row-title Имя автора
              input(type="text" id="author" v-model="review.title" placeholder="" required).safe__row-input.section__input
            .safe__row_two-col
              label(for="position").safe__row-title Титул автора
              input(type="text" id="position" v-model="review.occ" placeholder="" required).safe__row-input.section__input
          .safe__row
            label(for="review").safe__row-title Отзыв
            textarea(type="textarea" id="review" v-model="review.text" placeholder="" required).safe__textarea.safe__row-input.section__input Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
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
      console.log(file);
        
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
          console.log(this.review.photo);
        };
      } catch (error) {
          alert("sh*t happens :(");
      }
    },
    async saveDataNewReviews(){
      try {
        await this.createReview(this.rewiev);
        alert('ВОТ ЭТО ТЫ ДАЕШЬ МЭН!!!');                
      } catch (error) {
        alert('ЧТО ТО ЯВНО ИДЕТ НЕ ТАК!!!');
      }
    }
  }
}
</script>
