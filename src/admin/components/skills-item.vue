<template lang="pug">
  li.skill__item
    .skill__name Git
    .skill__amount 100
    .skill__percentage %
    button(type="button").button-iconed
      svg.pencil__icon.skill__icon
        use(xlink:href="sprite.svg#pencil")
    button(type="button").iconed-button
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

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.skill__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
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
</style>