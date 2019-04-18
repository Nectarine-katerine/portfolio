<template lang="pug">
  section.new-work
    .admin-block
      .container.container_admin
        .admin-block__header
          h2.new-work__title Редактирование работы
        .admin-block__content.new-work__admin-block__content
          .new-work__form
            form
              .new-work__form-content
                .new-work__left
                  .form__input-container
                    .form__group(v-bind:class="{ form__group_error: errors.has('photo') }")
                      label.form__file-input-container(
                        :class="{'filled': this.renderedPhoto.length}",
                        :style="{'backgroundImage': `url(${this.renderedPhoto})`}"
                      )
                        input(
                          type="file",
                          class="form__file-input"
                          name="photo"
                          v-validate="'required|image|size:1500'"
                          @change="appendFile($event)"
                          )
                        .form__file-input-controls
                          .form__file-input-text Перетащите или загрузите для загрузки изображения
                          button(type="button").admin-btn ЗАГРУЗИТЬ
                    .form__error(v-show="errors.has('photo')") {{ errors.first('photo') }}
                .new-work__right
                  .form__row
                    .form__col
                      .form__group(v-bind:class="{ form__group_error: errors.has('title') }")
                        label.form__label Название
                        .form__input-container
                          input(
                            type="text"
                            placeholder="Дизайн сайта для автосалона Porsche"
                            name="title"
                            v-validate="'required|max:50'"
                            v-model="work.title"
                            ).form__input
                        .form__error(v-show="errors.has('title')") {{ errors.first('title') }}
                  .form__row
                    .form__col
                      .form__group(v-bind:class="{ form__group_error: errors.has('link') }")
                        label.form__label Ссылка
                        .form__input-container
                          input(
                            type="text"
                            placeholder="https://porsche-pulkovo.ru"
                            name="link"
                            v-validate="'required|url:{require_protocol:true}'"
                            v-model="work.link"
                            ).form__input
                        .form__error(v-show="errors.has('link')") {{ errors.first('link') }}
                  .form__row
                    .form__col
                      .form__group(v-bind:class="{ form__group_error: errors.has('description') }")
                        label.form__label Описание
                        .form__input-container
                          textarea(
                            name="description"
                            v-validate="'required'"
                            v-model="work.description"
                            placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей"
                          ).form__input.form__input_text
                        .form__error(v-show="errors.has('description')") {{ errors.first('description') }}
                  .form__row
                    .form__col
                      .form__group(v-bind:class="{ form__group_error: errors.has('techs') }")
                        label.form__label Добавление тэга
                        .form__input-container
                          input(
                            type="text"
                            name="techs"
                            v-validate="'required'"
                            v-model="work.techs"
                            placeholder="jQuery, Vue.js, HTML5"
                            ).form__input
                        .form__error(v-show="errors.has('techs')") {{ errors.first('techs') }}
                      .new-work__skills
                        ul.works__skills-list
                          li.works__skills-item(
                            v-for="(tag,index) in tags"
                          ) {{tag}}
                            button(
                              @click.prevent="removeTag(index)"
                            ).works__skills-close
                  .form__row.new-work__controls
                    .form__col
                      button(type="button" @click.prevent="cancelViewForm").admin-btn.admin-btn_empty Отмена
                      button(type="button" @click.prevent="validateForm").admin-btn Сохранить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props:{
    editedWork: Object
  },
  data() {
    return {
      renderedPhoto: this.editedWork.photo ? `https://webdev-api.loftschool.com/${this.editedWork.photo}` : '',
      work: {
        id: this.editedWork.id ? this.editedWork.id : null,
        title: this.editedWork.title ? this.editedWork.title : '',
        techs: this.editedWork.techs ? this.editedWork.techs : '',
        photo: '',
        link: this.editedWork.link ? this.editedWork.link : '',
        description: this.editedWork.description ? this.editedWork.description : '',
      }
    };
  },
  computed:{
    tags(){
      return this.work.techs.split(',').filter(item=>item!=='');
    }
  },
  methods: {
    ...mapActions('works', ['addWork', 'editWork']),
    appendFile(e) {
      this.$validator.validate("photo").then(valid => {
        const file = e.target.files[0];
        const reader = new FileReader();
        this.work.photo = file;
        if (valid) {
          try {
            reader.readAsDataURL(file);
            reader.onload = () => {
              this.renderedPhoto = reader.result;
            };
          } catch (error) {
            alert(error);
          }
        }
      });
    },
    validateForm() {
      if(this.work.id && !this.work.photo){
        this.$validator.detach('photo');
      }
      this.$validator.validate().then(valid => {
        if (valid) {
          this.saveWork();
        }
      });
    },
    async saveWork(){
      try {
        if(this.work.id){
          this.editWork(this.work);
        }else{
          await this.addWork(this.work);
        }
        this.work = {};
        this.renderedPhoto = '';
        this.$validator.reset();
        this.$emit('cancelEditForm');
      } catch (error) {
        alert(error);
      }
    },
    removeTag(index){
      let newTagsArr = this.tags.filter((item,i)=> i!==index);
      this.work.techs = newTagsArr.join(',');
    },
    cancelViewForm(){
        this.work = {};
        this.renderedPhoto = '';
        this.$validator.reset();
        this.$emit('cancelEditForm');
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.new-work {
  margin-bottom: 32px;
  .admin-block {
    padding-left: 0;
    padding-right: 0;
  }
  @include w_650 {
    margin-bottom: 8px;
  }
}
.new-work__title {
  color: $title-color;
  font-size: 18px;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 10px;
  @include w_650 {
    font-size: 16px;
  }
}
.new-work__left {
  @include w_850 {
    margin-bottom: 95px;
  }
  @include w_650 {
    margin-bottom: 70px;
  }
}
.new-work__form-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  @include w_850 {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
  @include w_650 {
    display: block;
  }
}
.new-work__admin-block__content {
  padding: 48px 10px 0 10px;
  margin: 0;
  @include w_850 {
    padding: 25px 13% 0 13%;
  }
  @include w_650 {
    padding: 0;
    padding-top: 30px;
  }
}
.new-work__form-content {
  .form__label {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-left: 0;
    margin-bottom: 5px;
    @include w_650 {
      font-size: 14px;
      margin-bottom: 13px;
    }
  }
  .form__input {
    padding-left: 0;
    padding-bottom: 18px;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #414c63;
    line-height: 24px;
    @include w_650 {
      font-size: 14px;
      padding-bottom: 15px;
    }
  }
  .form__row {
    margin-bottom: 25px;
    &:nth-last-child(2) {
      margin-bottom: 5px;
      @include w_850 {
        margin-bottom: 27px;
      }
      @include w_650 {
        margin-bottom: 20px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .form__col {
    @include w_650 {
      margin-bottom: 0;
    }
  }
  .form__input_text {
    border: 1px solid rgba(#414c63, 0.2);
    line-height: 30px;
    padding: 20px 80px 20px 20px;
    height: 146px;
    @include w_650 {
      height: 204px;
    }
  }
}
.new-work__skills {
  padding-top: 19px;
  .works__skills-item {
    border-radius: 23px;
    background-color: rgba(122,160,197,.1);
    opacity: 0.7;
    color: black;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 14px 10px 10px;
    text-transform: none;
  }
}
.works__skills-list {
  display: flex;
}
.works__skills-close {
  background: svg-load('remove.svg', width=100%, height=100%);
  width: 10px;
  height: 10px;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: 10px;
}
.new-work__controls {
  .form__col {
    display: flex;
    justify-content: flex-end;
    @include w_850 {
      justify-content: center;
    }
  }
}
.form__file-input-container {
  &.filled {
    background: center center no-repeat;
    background-size: cover;
    .form__file-input-controls {
      display: none;
    }
  }
}
.form__file-input-text {
  text-align: center;
}
</style>