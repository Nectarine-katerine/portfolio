<template lang="pug">
  transition(name="fade" mode="out-in")
    div
      HeadTitle(
        headTitle='Блок «Обо мне»',
        :showAddButton = "!showAddForm",
        @handleAddForm="showAddForm = !showAddForm"
      )
      section(
        :class="{'admin-about_load': isLoading || isLoadingGroup}"
      ).admin-about
        ul.admin-about__list
          transition(name="bounceIn")
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

import { mapActions, mapState } from "vuex";

export default {
  components: {
    HeadTitle: () => import("../Head-title.vue"),
    skillAdd: () => import("../skills/skill-add.vue"),
    skillsGroupList: () => import("../skills/skills-group-list.vue")
  },
  data() {
    return {
      showAddForm: false
    };
  },
  computed: {
    ...mapState("skillsGroup", {
      groups: state => state.groups,
      isLoadingGroup: state => state.isLoading
    }),
    ...mapState("skills", {
      skills: state => state.skills,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    ...mapActions("skillsGroup", ["fetchGroups"]),
    ...mapActions("skills", ["fetchSkills"]),
    ...mapActions('errors', ['setError']),
    filterSkillsByGroup(groupId) {
      return this.skills.filter(skill => skill.category === groupId);
    }
  },
  async created() {
    try {
      await this.fetchGroups();
    } catch (error) {
      this.setError({
        message: error,
        type: 'error'
      });   
    }

    try {
      await this.fetchSkills();
    } catch (error) {
      this.setError({
        message: error,
        type: 'error'
      });  
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.admin-about {
  position: relative;
  &_load {
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      user-select: none;
    }
  }
}

.admin-about__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  
  @include phones {
    grid-template-columns: repeat(1, 100%);
    grid-row-gap: 10px;
    grid-column-gap: 0;
  }
}

.admin-about__table {
  width: 100%;
  font-size: 16px;
}

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

.admin-about__td-percent {
  width: 15%;
  padding-left: 17px;
}

.admin-about__td-controls {
  width: 17.5%;
}

.admin-about__name {
  width: 59%;
  color: $text-color;
}

.admin-about__name-text {
  color: red;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 0;
  color: $text-color;
}

.admin-about__form {
  .form__input {
    padding: 10px 0px 6px 1px;
    border-bottom: 1px solid #000;
    font-weight: 600;
    
    @include placeholder {
      font-size: 18px;
      opacity: 0.51;
      font-weight: 600;
    }
  }
}

.admin-about__new {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .form__input{
    padding-left: 8%;
    padding-bottom: 6px;
    border-bottom: 1px solid #1f232d;
    
    @include placeholder {
      opacity: 0.5;
      color: #373e42;
      font-size: 16px;
    }
  }
  
  @include phones {
    justify-content: flex-start;
  }
}

.admin-about__new-name {
  width: 45%;
  margin-right: 10px;
  
   @include tablets {
     width: 48%;
   }
   
   @include phones {
     width: 55%;
   }
}

.admin-about__new-percent {
  width: 15%;
  margin-right: 29px;
  
  @include tablets {
    width: 21%;
  }
}

.admin-about__new-add {
  margin-right: 10px;
  
  @include phones {
    margin-right: 0;
  }
}

.admin-about__tr_edit {
  .form__input {
    font-weight: 400;
    padding: 0;
    font-size: 16px;
  }
  .admin-about__td-percent {
    .form__input {
      padding-left: 10px;
    }
  }
  td {
    padding: 0 0 0 10px;
    
    @include tablets {
      padding: 9px 0 9px 10px;
    }
  }
}
</style>
