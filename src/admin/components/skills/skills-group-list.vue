<template lang="pug">
  li.skills__item
    .skills__inner(v-if="!editMode")
      form.group
        .group__row.group__row_border-bottom
          .group__col
            .group__name.section__input {{group.category}}
          .group__col.group__col_end
            button.button-iconed(type="button"
              @click.prevent="editMode = true"
            )
              svg.pencil__icon.skill__icon.group__icon
                use(xlink:href="sprite.svg#pencil")
            button.button-iconed(type="button"
              @click.prevent="removeThisGroup"
            )
              svg.trash__icon.skill__icon
                use(xlink:href="sprite.svg#trash")
        ul.skill__list
          skillsItemList(
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
          )
        
        skillItemAdd(
          :group="group"
        )
    .skills__inner(v-else)
      form.group
        .group__row.group__row_border-bottom
          .group__col
            .group__name.section__input
              input(
                type="text" 
                name="groupName"
                placeholder="Название новой группы" 
                v-model="editedGroup.category"
              ).section__input_border
          .group__col.group__col_end
            button.button-iconed(type="button"
            @click.prevent="saveGroup")
              svg.tick__icon.group__icon
                use(xlink:href="sprite.svg#tick")
            button.button-iconed(type="button"
              @click.prevent="editMode = false"
            )
              svg.cross__icon.group__icon
                use(xlink:href="sprite.svg#cross")
        ul.skill__list
          skillsItemList(
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
          )
        
        skillItemAdd(
          :group="group"
        )
</template>

<script>
import { mapActions } from "vuex";
import skillItemAdd from "../skills/skill-item-add";
import skillsItemList from "../skills/skills-item-list";
export default {
  data() {
    return {
      editMode: false,
      editedGroup: {...this.group}
    }
  },
  props: {
    group: Object,
    skills: Array
  },
  components: {
    skillItemAdd,
    skillsItemList
  },
  methods: {
    ...mapActions('skillsGroup', ['editGroup', 'removeGroup']),
    async saveGroup() {
      this.editedGroup.title = this.editedGroup.category;
      try {
        await this.editGroup(this.editedGroup);
        this.editMode = false;
      } catch (error) {
        alert(error);
      }
    },
    async removeThisGroup() {
      try {
        await this.removeGroup(this.group.id);
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>