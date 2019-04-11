<template lang="pug">
  section.section.skills
    .container
      .section__top.skills__top
        .title.skills__title Блок "Обо мне"
        button.skills__add(
          type="button" 
          @click="showAddingForm = true" 
          v-if="showAddingForm === false"
        ) Добавить группу
      ul.skills__list
        li.skills__item.skills__item_new-group(v-if="showAddingForm")
          skills-add()
        li.skills__item(
          v-for="category in categories"
          :key="category.id"
        )
          skills-group(
            :category="category"
            :skills="filterSkillsByCategoryId(category.id)"
          )
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsAdd: () => import('components/skills-add.vue'),
    skillsGroup: () => import('components/skills-group.vue')
  },
  data() {
    return {
      showAddingForm: false 
    }
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions('categories', ['fetchCategories']),
    ...mapActions('skills', ['fetchSkills']),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  async created() {
    try {
      await this.fetchCategories(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке категорий') 
    }
    try {
      await this.fetchSkills(); 
    } catch (error) {
      alert('Произошла ошибка при загрузке скиллов') 
    }
  }
};
</script>