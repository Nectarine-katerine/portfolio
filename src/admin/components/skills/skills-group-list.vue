<template lang="pug">
  transition(name="bounceOut")
    li.admin-about__item.admin-block
      .admin-block__header(v-if="!editMode")
        .admin-about__name
          .admin-about__name-text {{group.category}}
        .controls
          ul.controls__list
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="editMode = true"
              )
                div(class=`controls__icon controls__icon_pencil`)          
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="removeThisGroup"
              )
                div(class=`controls__icon controls__icon_trash`)          
      .admin-block__header(v-else)
        .admin-about__name
          .form__input-container.admin-about__form
            .form__group(v-bind:class="{ form__group_error: errors.has('groupName') }")
              input(
                type="text" 
                name="groupName"
                placeholder="Название новой группы" 
                v-model="editedGroup.category"
                v-validate="'required|max:25'"
                v-on:keyup.enter="editGroupValidate"
              ).form__input
            .form__error(v-show="errors.has('groupName')") {{ errors.first('groupName') }}
        .controls
          ul.controls__list
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="editGroupValidate"
              )
                div(class=`controls__icon controls__icon_tick`)          
            li.controls__item
              button.controls__btn(type="button"
                @click.prevent="editMode = false"
              )
                div(class=`controls__icon controls__icon_cross`)          
      .admin-block__content
        table.admin-about__table
          skillsItemList(
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
          )
      .admin-block__footer.disabled
        skillItemAdd(
          :group="group"
        )
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editMode: false,
      editedGroup: {...this.group}
    }
  },
  props: {
    group: Object,
    skills: Array
  },
  components: {
    skillItemAdd: () => import('../skills/skill-item-add.vue'),
    skillsItemList: () => import('../skills/skills-item-list.vue')
  },
  methods: {
    ...mapActions('skillsGroup', ['editGroup', 'removeGroup']),
    ...mapActions("errors", ["setError"]),
    editGroupValidate() {
      this.$validator.validate().then(valid => {
        if(valid) {
          this.saveGroup();
        }
      });
    },
    async saveGroup() {
      this.editedGroup.title = this.editedGroup.category;
      try {
        await this.editGroup(this.editedGroup);
        this.editMode = false;
        this.setError({
          message: `Группа "${this.group.category}" обновлена`,
          type: "success"
        });
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });                
      }
    },
    async removeThisGroup() {
      try {
        await this.removeGroup(this.group.id);
        this.setError({
          message: `Группа "${this.group.category}" удалена`,
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
.admin-about__table{
  width: 100%;
  font-size: 16px;
}

.admin-about__name{
  width: 59%;
}

.admin-about__name-text{
  font-size: 18px;
  font-weight: 600;
  padding: 14px 0;
}
</style>
