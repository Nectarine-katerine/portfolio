<template lang="pug">
  li.skill__item
    .skill__name GIT
    .skill__percentage 100%
    button(type="button" @click="editmode = true").button-iconed
      svg.pencil__icon.skill__icon
        use(xlink:href="sprite.svg#pencil")
    button(type="button" @click="removeExistedSkill").iconed-button
      svg.trash__icon.skill__icon
        use(xlink:href="sprite.svg#trash")
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editmode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {}
    },
    async save() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {
        
      }
    }
  }
};
</script>