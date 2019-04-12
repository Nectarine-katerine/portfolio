<template lang="pug">
  li.skill__item(v-if="!editMode")
    .skill__name {{skill.title}}
    .skill__percentage {{skill.percent}} %
    .skill__btn
      button.button-iconed(type="button"
        @click.prevent="editMode = true"
      )
        svg.pencil__icon.skill__icon
          use(xlink:href="sprite.svg#pencil")
      button.button-iconed(type="button"
        @click.prevent="removeThisSkill"
      )
        svg.trash__icon.skill__icon
          use(xlink:href="sprite.svg#trash")      
  li.skill__item(v-else)
    .skill__name
      input(type="text" v-model="editedSkill.title").skill__input
    .skill__percentage
      input(type="text" v-model="editedSkill.percent").skill__input
    .skill__btn
      button.button-iconed(type="button"
        @click.prevent="saveSkill"
      )
        svg.tick__icon.skill__icon
          use(xlink:href="sprite.svg#tick")
      button.button__iconed(type="button"
        @click.prevent="editMode = false"
      )
        svg.cross__icon.skill__icon
          use(xlink:href="sprite.svg#cross")         
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
    async removeThisSkill() {
      try {
        await this.removeSkill(this.skill.id);        
      } catch (error) {
        alert(error);
      }
    },
    async saveSkill() {
      try {
        console.log(this.editedSkill)
        await this.editSkill(this.editedSkill);
        this.editMode = false;
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>