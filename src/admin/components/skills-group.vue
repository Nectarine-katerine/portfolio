<template lang="pug">
  .skills__inner
    form.group
      .group__row.group__row_border-bottom
        .group__col
          .group__name.section__input {{category.category}}
        .group__col.group__col_end
          button(type="button").button-iconed
            svg.tick__icon.group__icon
              use(xlink:href="sprite.svg#tick")
          button(type="button").button-iconed    
            svg.cross__icon.group__icon
              use(xlink:href="sprite.svg#cross")
          button(type="button").button-iconed
            svg.pencil__icon.skill__icon
              use(xlink:href="sprite.svg#pencil")
      .skill__list
        skills__item(
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
        )
      .group__row.group__row_three-col.blocked
        input(type="text" placeholder="Новый навык").group__name.group__name_padding.group__name_new.section__input
        input(type="text" placeholder="100 %").group__name.group__name_padding.section__input
        button(type="button").group__add.group__add_no-padding +
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    category: Object,
    skills: Array,
  },
  data() {
    return {
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },
  components: {
    skillsItem: () => import("components/skill-item.vue")
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill() {
      try {
        await this.addSkill(this.skill);
      } catch (error) {
        // error 
      }
    }
  }
};
</script>