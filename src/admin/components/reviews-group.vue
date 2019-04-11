<template lang="pug">
  li.section__item
    .section__wrapper.reviews__wrapper(v-if="openEditMode == true")
      .author
        .author__top
          .section__photo.author__photo
            img(:src="`https://webdev-api.loftschool.com/${rev.photo}`" alt="").section__pic.author__pic
          .author__data
            .author__name {{rev.author}}
            .autor__position {{rev.occ}}Преподаватель
      .section__data.reviews__data
        .section__desc
          p {{rev.text}}
        .section__btns
          button(type="button" @click.prevent="openEditMode = false").button-iconed.section__btn Править
            svg.pencil__icon.pencil__icon_blue.section__icon
              use(xlink:href="sprite.svg#pencil")
          button(type="button" @click.prevent="deletedReviews").button-iconed.section__btn  Удалить  
            svg.cross__icon.section__icon
              use(xlink:href="sprite.svg#cross")

    .section__wrapper.reviews__wrapper(v-else)
      .author
        .author__top
          .section__photo.author__photo
            img(:src="`https://webdev-api.loftschool.com/${rev.photo}`" alt="").section__pic.author__pic
          .author__data
            input(type="text" v-model="rev.author").author__name
            input(type="text" v-model="rev.occ").autor__position
      .section__data.reviews__data
        textarea(v-model="rev.text").section__desc
        .section__btns
          button(type="button" @click.prevent="saveReviews").button-iconed.section__btn Отмена
          button(type="button" @click.prevent="openEditMode = true").button-iconed.section__btn  Сохранить  
    
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      rendedPhotoUrl: "",
      openEditMode: true,
      groupReviews: {...this.rev}
    }
  },
  props: {
    rev: Object
  },
  methods: {
    ...mapActions('reviews', ['removeReviews', 'editReviews']),
    async deletedReviews(){
      try {
        await this.removeReviews(this.rev.id)
      } catch (error) {
        alert('Проблема с удалением отзыва');
      }
    },
    async saveReviews() {
      try {
        await this.editReviews(this.rev);
        this.openEditMode = true;
      } catch (error) {
        alert(error);
      }
    } 
  }    
}
</script>
