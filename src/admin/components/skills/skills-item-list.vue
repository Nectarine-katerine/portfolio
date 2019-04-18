<template lang="pug">
  transition(name="fade" mode="out-in")
    tr(v-if="!editMode")
      td.admin-about__td-name {{skill.title}}
      td.admin-about__td-percent {{skill.percent}} %
      td.admin-about__td-controls
        .controls.controls_justify
          ul.controls__list
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="editMode = true"
              )
                div(class=`controls__icon controls__icon_pencil`)          
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="removeThisSkill"
              )
                div(class=`controls__icon controls__icon_trash`)          
    tr(v-else)
      td.admin-about__td-name 
        .form__input-container.admin-about__form.admin-about__form_intable
          input(type="text" v-model="editedSkill.title").form__input
      td.admin-about__td-percent 
        .form__input-container.admin-about__form
          input(type="text" v-model="editedSkill.percent").form__input
      td.admin-about__td-controls
        .controls.controls_justify
          ul.controls__list
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="saveSkill"
              )
                div(class=`controls__icon controls__icon_tick`)          
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="editMode = false"
              )
                div(class=`controls__icon controls__icon_cross`)          
</template>


<script>

import { mapActions } from "vuex";
export default {
  data() {
    return {
      editMode: false,
      editedSkill: {...this.skill}
    }
  },
  props: {
    skill: Object
  },
  methods: {
    ...mapActions('skills', ['removeSkill', 'editSkill']),
    ...mapActions("errors", ["setError"]),
    async removeThisSkill() {
      try {
        await this.removeSkill(this.skill.id);     
        this.setError({
          message: 'Скилл удален',
          type: "success"
        });
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });
      }
    },
    async saveSkill() {
      try {
        console.log(this.editedSkill)
        await this.editSkill(this.editedSkill);
        this.editMode = false;
        this.setError({
          message: 'Скилл сохранен',
          type: "success"
        });
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "../../../styles/layout/base.pcss";

.admin-about__td-name {
  width: 51%;
  padding: 9px 0 9px 10px;
  
  @include tablets{
    width: 29%;
  }
  
  @include phones{
    width: 32%;
  }
}

.admin-about__td-percent{
  width: 15%;
  padding-left: 17px;
}

.admin-about__td-controls{
  width: 17.5%;
}

.admin-about__tr_edit{
  .form__input{
    font-weight: 400;
    padding: 0;
    font-size: 16px;
  }
  .admin-about__td-percent{
    .form__input{
      padding-left: 10px;
    }
  }
  td{
    padding: 0 0 0 10px;
    
    @include tablets{
      padding: 9px 0 9px 10px;
    }
  }
}
</style>
