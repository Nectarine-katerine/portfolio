<template lang="pug">
  .skills__inner
    form.group
      .group__row.group__row_border-bottom
        .group__col
          input(type="text" v-model="skillTitle" placeholder="Название новой группы").group__name.section__input
        .group__col.group__col_end
          button(type="button" @click="addSkillGroup").button-iconed
            svg.tick__icon.group__icon
              use(xlink:href="sprite.svg#tick")
          button(type="button" @click.prevent = "showAddingForm = false").button-iconed    
            svg.cross__icon.group__icon
              use(xlink:href="sprite.svg#cross")
      .group__row.group__row_three-col.blocked
        input(type="text" placeholder="Новый навык").group__name.group__name_padding.group__name_new.section__input
        input(type="text" placeholder="100 %").group__name.group__name_padding.section__input
        button(type="button").group__add.group__add_no-padding +

</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      skillTitle: ""
    };
  },
  methods: {
    ...mapActions("categories", ["addNewSkillGroup"]),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>