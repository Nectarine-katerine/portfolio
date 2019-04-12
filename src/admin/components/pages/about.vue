<template lang="pug">
  section.section.skills
    .container
      .section__top.skills__top
        .title.skills__title Блок "Обо мне"
        button.skills__add(
          type="button" 
          @click="showAddForm = true" 
          v-if="showAddForm === false"
        ) Добавить группу
      ul.skills__list
        skillAdd(
          v-if="showAddForm"
          @handleAddForm="showAddForm = !showAddForm"
          )
        skillsGroupList(
          v-for="group in groups"
          :key="group.id"
          :group="group"
          :skills="filterSkillsByGroup(group.id)"
        )
</template>

<script>
import { mapActions, mapState } from "vuex"

import skillAdd from "../skills/skill-add";
import skillsGroupList from "../skills/skills-group-list";
export default {
  components:{
    skillAdd,
    skillsGroupList
  },
  data() {
    return {
      showAddForm: false
    }
  },
  computed: {
    ...mapState('skillsGroup', {
      groups: state => state.groups
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions('skillsGroup', ['fetchGroups']),
    ...mapActions('skills', ['fetchSkills']),
    filterSkillsByGroup(groupId) {
      return this.skills.filter(skill => skill.category === groupId);
    }
  },
  async created() {
    try {
      await this.fetchGroups();
    } catch (error) {
      alert(error);
    }
    try {
      await this.fetchSkills();
    } catch (error) {
      alert(error);
    }
  }
};
</script>