<template lang="pug">
  li.skills__item.skills__item_new-group
    .skills__inner
      form.group
        .group__row.group__row_border-bottom
          .group__col
            input(
              type="text"
              name="groupName"
              placeholder="Название новой группы"
              v-model="groupTitle"
              v-on:keyup.enter="abbGroupValidate"
            ).group__name.section__input
          .group__col.group__col_end
            button.button-iconed(type="button"
              @click.prevent="addSkillGroup"
            )
              svg.tick__icon.group__icon
                use(xlink:href="sprite.svg#tick")
            button.button-iconed(type="button"
              @click.prevent="$emit('handleAddForm')"
            )
              svg.cross__icon.group__icon
                use(xlink:href="sprite.svg#cross")
        skillItemAdd
</template>

<script>
import { mapActions } from "vuex";
import skillItemAdd from "../skills/skill-item-add";
export default {
  data(){
    return{
      groupTitle: ""
    }
  },
  components:{
    skillItemAdd
  },
  methods:{
    ...mapActions('skillsGroup', ['addNewSkillGroup']),
    abbGroupValidate(){
      this.$validator.validate().then(valid=>{
        if(valid){
          this.addSkillGroup();
        }
      });
    },
    async addSkillGroup(){
      try {
        await this.addNewSkillGroup(this.groupTitle);
        this.groupTitle = '';
        this.$emit('handleAddForm');
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.admin-block__footer {
  position: relative;
  
  &.disabled{
    opacity: .5;
    pointer-events: none;
    user-select: none;
  }
}
.admin-about__form {
  .form__input {
    padding: 0;
    border-bottom: 1px solid #000;
    font-weight: 600;
    @include placeholder{
      font-size: 18px;
      opacity: 0.51;
      font-weight: 600;
    }
  }
}
</style>