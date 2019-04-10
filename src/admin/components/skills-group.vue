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
      ul.skill__list
        li.skill__item(
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
    skillsItem: () => import("components/skills-item.vue")
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

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.skills__inner {
  width: 95%;
  padding: 30px 0;
  margin: 0 auto;
  height: 100%;
  @include phones {
    width: 90%;
  }
}
.group {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.group__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr;
}
.group__row_border-bottom {
  border-bottom: 1px solid rgba(#1f232d, .15);
  padding: 15px 15px 15px 0;
}
.group__row_three-col {
    display: flex;
    justify-content: flex-end;
}
.group__col_end {
  justify-self: end;
  .pencil__icon {
    display: none;
  }
  .tick__icon, .cross__icon {
      display: inline-block;
    }
  @include tablets {
    .pencil__icon {
      display: inline-block;
    }
    .tick__icon, .cross__icon {
      display: none;
    }
  }
}

.group__icon {
  width: 15px;
  height: 12px;
  margin-right: 20px;
  fill: #00d70a;
}

.group__name_padding {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(#1f232d, .5);
  margin-right: 20px;
  width: 20%;
  @include phones {
    width: 28%;
  }
}

.group__name_new {
  width: 45%;
  @include phones {
    width: 49%;
  }
}

.group__add {
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 100%;
  padding: 3px 12px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}

.section__input {
  border: none;
  background: transparent;
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #000;
  width: 100%;
  outline: none;
  color: #414c63;
  font-size: 1rem;
  font-weight: 600;
}
.blocked {
  opacity: .5;
  pointer-events: none;
  user-select: none;
}

.button-iconed {
  padding: 0;
  color: rgba(#414c63, .5);
  font-size: 16px;
  font-weight: 600;
}

.skill__icon {
  width: 16px;
  height: 15px;
  fill: #414c63;
}

.trash__icon {
  justify-self: end;
}

.pencil__icon {
  @include tablets {
    fill: rgba(#414c63, .5);
    margin-right: 0;
  }
}

.cross__icon {
  margin-right: 0;
  fill: #bf2929;
}

.cross__icon_gray {
  fill: $text-color;
}

.work__icon {
  width: 17px;
  height: 17px;
  margin-left: 15px;
}

.pencil__icon_blue {
  fill: #383bcf;
}

.skill__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
    color: $text-color;
}
.skill__item {
  display: grid;
  grid-template-columns: 2fr .5fr .5fr .2fr .2fr;
  grid-template-rows: 1.5fr;
  .cross__icon, .tick__icon {
    display: none;
  }
}
.skill__item_active {
  .skill__name, .skill__amount, .skill__percentage {
    border-bottom: 1px solid #000;
  }
  .pencil__icon, .trash__icon  {
    display: none;
  }
  .cross__icon, .tick__icon {
    display: inline;
  }
  .group__icon {
    margin-right: 0;
  }
}
</style>