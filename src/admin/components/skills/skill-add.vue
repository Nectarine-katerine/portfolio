<template lang="pug">
  li.admin-about__item.admin-block
    .admin-block__header
      .admin-about__name
        .form__input-container.admin-about__form
          .form__group(v-bind:class="{ form__group_error: errors.has('groupName') }")
            input(
              type="text" 
              name="groupName"
              placeholder="Название новой группы" 
              v-model="groupTitle"
              v-validate="'required|max:25'"
              v-on:keyup.enter="abbGroupValidate"
            ).form__input
          .form__error(v-show="errors.has('groupName')") {{ errors.first('groupName') }}
      ul.controls__list
        li.controls__item
          button.controls__btn(type="button"
            @click.prevent="abbGroupValidate"
          )
            div(class=`controls__icon controls__icon_tick`)          
        li.controls__item
          button.controls__btn(type="button"
            @click.prevent="$emit('handleAddForm')"
          )
            div(class=`controls__icon controls__icon_cross`)          
    .admin-block__content
    .admin-block__footer.disabled
      skillItemAdd
</template>

<script>

import { mapActions } from "vuex";

export default {
  data() {
    return{
      groupTitle: ""
    }
  },
  components: {
    skillItemAdd: () => import('../skills/skill-item-add.vue')
  },
  methods: {
    ...mapActions('skillsGroup', ['addNewSkillGroup']),
    abbGroupValidate() {
      this.$validator.validate().then(valid => {
        if(valid) {
          this.addSkillGroup();
        }
      });
    },
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.groupTitle);
        this.groupTitle = '';
        this.$emit('handleAddForm');
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.admin-block__footer {
  position: relative;
  
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  }
}

.admin-about__form {
  .form__input {
    padding: 0;
    border-bottom: 1px solid #000;
    font-weight: 600;

    @include placeholder{
      font-size: 18px;
      opacity: 0.51;
      font-weight: 600;
    }
  }
}
</style>
