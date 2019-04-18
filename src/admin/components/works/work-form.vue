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
                            ).form__input
                        .form__error(v-show="errors.has('techs')") {{ errors.first('techs') }}
                      .new-work__skills
                        ul.works__skills-list
                          li.works__skills-item(
                            v-for="(tag,index) in tags"
                          ) {{tag}}
                            button(type="button"
                              @click.prevent="removeTag(index)"
                            ).works__skills-close 
                  .form__row.new-work__controls
                    .form__col
                      button(type="button" @click.prevent="$emit('hideFormWork')").admin-btn.admin-btn_empty Отмена
                      button(type="button" @click.prevent="validateForm").admin-btn Сохранить                  
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
    ...mapState("works", {
      work: state => state.editedWork
    }),
    renderedPhoto: {
      get() {
        if (this.work.id && !this.dataRenderedPhoto)
          return `https://webdev-api.loftschool.com/${this.work.photo}`;
        else {
          return this.dataRenderedPhoto;
        }
      },
      set(photo) {
        this.dataRenderedPhoto = photo;
      }
    },
    tags() {
      if (this.work.techs)
        return this.work.techs.split(",").filter(item => item !== "");
      else return [];
    }
  },
  methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    ...mapMutations("works", ["SET_EDITED_WORK"]),
    ...mapActions("errors", ["setError"]),
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
            this.setError({
              message: error,
              type: "error"
            });
          }
        }
      });
    },
    validateForm() {
      if (this.work.id && this.work.photo) {
        this.$validator.detach("photo");
      }
      this.$validator.validate().then(valid => {
        if (valid) {
          this.saveWork();
        }
      });
    },
    async saveWork() {
      try {
        if (this.work.id) {
          this.editWork(this.work);
        } else {
          await this.addWork(this.work);
        }
        this.setError({
          message: this.work.id ? `Работа изменена` : `Работа добавлена`,
          type: "success"
        });
        this.SET_EDITED_WORK({});
        this.renderedPhoto = "";
        this.$validator.reset();
        this.$emit("hideFormWork");
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });
      }
    },
    removeTag(index) {
      let newTagsArr = this.tags.filter((item, i) => i !== index);
      this.work.techs = newTagsArr.join(",");
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "../../../styles/blocks/works.pcss";
.new-work {
  position: relative;
  margin-bottom: 32px;
  .admin-block {
    padding-left: 0;
    padding-right: 0;
  }
  @include phones {
    margin-bottom: 8px;
  }
}
.new-work__title {
  font-size: 18px;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 10px;
  @include phones {
    font-size: 16px;
    //padding-top: 0;
  }
}
.new-work__left {
  @include tablets {
    margin-bottom: 95px;
  }
  @include phones {
    margin-bottom: 70px;
  }
}
.new-work__form-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  @include tablets {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
  @include phones {
    display: block;
  }
}
.new-work__admin-block__content {
  padding: 48px 10px 0 10px;
  margin: 0;
  @include tablets {
    padding: 25px 13% 0 13%;
  }
  @include phones {
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
    @include phones {
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
    border-bottom: 2px solid #414c63;
    line-height: 24px;
    @include phones {
      font-size: 14px;
      padding-bottom: 15px;
    }
  }
  .form__row {
    margin-bottom: 25px;
    &:nth-last-child(2) {
      margin-bottom: 5px;
      @include tablets {
        margin-bottom: 27px;
      }
      @include phones {
        margin-bottom: 20px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .form__col {
    @include phones {
      margin-bottom: 0;
    }
  }
  .form__input_text {
    border: 1px solid rgba(#414c63, 0.2);
    line-height: 30px;
    padding: 20px 80px 20px 20px;
    height: 146px;
    @include phones {
      height: 204px;
    }
  }
}
.new-work__skills {
  padding-top: 19px;
  .works__skills-item {
    opacity: 0.7;
    color: #283340;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 35px 10px 10px;
    text-transform: none;
  }
}
.new-work__controls {
  .form__col {
    display: flex;
    justify-content: flex-end;
    @include tablets {
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
.works {
  display: flex;
  align-items: flex-start;

  @include tablets {
    flex-direction: column;
  }
}

.works__slider {
  width: 66%;
  height: 549px;
  margin-right: 160px;

  @include desktop {
    height: 354px;
    margin-right: 109px;
    width: 58%;
  }

  @include tablets {
    margin-right: 0;
    width: 91%;
    margin-bottom: 100px;
  }

  @include phones {
    // width: 113%;
    // margin-left: -7%;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-height: 186px;
    margin-bottom: 58px;
  }

  @include phones {
    // width: 124%;
    // margin-left: -12%;    
  }
}

.works__name {
  font-size: 30px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 28px;

  @include tablets {
    margin-bottom: 15px;
    text-align: center;
  }

  @include phones {
    font-size: 24px;
    line-height: 30px;
    text-align: left;
  }
}

.works__desc {
  opacity: 0.7;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 34px;

  @include tablets {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    padding: 0 10%;
    margin-bottom: 23px;
  }

  @include phones {
    padding: 0;
    text-align: left;
  }
}

.works__link-site {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.works__link-text {
  color: #4b6fd7;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }

  @include tablets {
    font-size: 14px;
  }
}

.works__link-icon {
  width: 15px;
  height: 15px;
  fill: #4b6fd7;
  margin-right: 20px;
}

.works__skills-list {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @include tablets {
    margin-bottom: 0;
  }
}

.works__skills-item {
  position: relative;
  padding: 13px 18px;
  border-radius: 23px;
  background-color: rgba(#7aa0c5, 0.1);
  opacity: 0.7;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 15px;
  margin-bottom: 15px;

  &:last-child {
    margin-right: 0;
  }

  @include phones {
    font-size: 13px;
    margin-right: 12px;
  }
}

.works__content {
  width: 23%;

  @include desktop {
    width: 32%;
  }

  @include tablets {
    width: 100%;
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @include phones {
    padding: 0;
    align-items: flex-start;
  }
}

.works__skills-close {
  position: absolute;
  display: block;
  width: 11px;
  height: 11px;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  background: svg-load('remove.svg') center center no-repeat;
}
</style>