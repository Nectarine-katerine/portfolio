<template lang="pug">
  .group__row.group__row_three-col.blocked
    input(type="text"
    v-model="skill.title"
    name="skillTitle"
    placeholder="Новый навык").group__name.group__name_padding.group__name_new.section__input
    input(type="text"
    v-model="skill.percent"
    name="skillPercent"
    placeholder="100 %").group__name.group__name_padding.section__input
    button(type="button" @click.prevent="addItemSkills").group__add.group__add_no-padding +
</template>

<script>
import { mapActions } from "vuex";
export default {
  props:{
    я: Object
  },
  data() {
    return {
      skill: {
        title: "",
        percent: ""
      }
    };
  },
  methods:{
    ...mapActions('skills', ['addSkill']),
    async addItemSkills(){
      this.skill.category = this.group.id;
      try {
        await this.addSkill(this.skill);
        this.skill.title = '';
        this.skill.percent = '';
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
};
</script>