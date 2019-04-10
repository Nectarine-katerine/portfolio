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

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.skills__top {
  display: flex;
  @include phones {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 40px 0;
  }
}
.skills__add {
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  background: transparent;
  margin-left: 60px;
  display: flex;
  align-items: center;
  &:before {
    margin-right: 13px;
    content: '+';
    font-size: 15px;
    color: #fff;
    padding: 6px 12px;
    border-radius: 100%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
  @include tablets {
    font-size: 14px;
  }
  @include phones {
    margin-left: 0;
    text-align: left;
    padding: 0;
  }
}
.skills__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @include tablets {
    grid-template-areas: "frontend workflow"
  }
  @include phones {
    grid-template-columns: 1fr;

    grid-template-areas: 
    "frontend"
    "workflow";
  }
}
.skills__item {
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff; 
  height: 380px; 
}
.skills__item_workflow {
   @include tablets {
    grid-area: workflow;
  }
}

.skills__item_frontend {
   @include tablets {
    grid-area: frontend;
  }
}

.skills__add {
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  background: transparent;
  margin-left: 60px;
  display: flex;
  align-items: center;
  &:before {
    margin-right: 13px;
    content: '+';
    font-size: 15px;
    color: #fff;
    padding: 6px 12px;
    border-radius: 100%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
  @include tablets {
    font-size: 14px;
  }
  @include phones {
    margin-left: 0;
    text-align: left;
    padding: 0;
  }
}
.skills__inner {
  width: 95%;
  padding: 30px 0;
  margin: 0 auto;
  height: 100%;
  @include phones {
    width: 90%;
  }
}

.skills__item_new-group {
  @include tablets {
    display: none;
  }
}
 /* .skill-container {
  border: 1px solid black;
  padding: 10px;
}
.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
} */
</style>