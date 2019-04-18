<template lang="pug">
.admin-about__new
  .admin-about__new-name
    .form__row
      .form__col
        .form__group(v-bind:class="{ form__group_error: errors.has('skillTitle') }")
          .form__input-container
            input(type="text"
            v-model="skill.title"
            name="skillTitle"
            v-validate="'required|max:50'"
            placeholder="Новый навык").form__input
          .form__error(v-show="errors.has('skillTitle')") {{ errors.first('skillTitle') }}
  .admin-about__new-percent
    .form__col
      .form__group(v-bind:class="{ form__group_error: errors.has('skillPercent') }")
        .form__input-container
          input(type="text"
          v-model="skill.percent"
          name="skillPercent"
          v-validate="'required|numeric|min_value:0|max_value:110'"
          v-on:keyup.enter="validateNewSkill"
          placeholder="100 %").form__input
        .form__error(v-show="errors.has('skillPercent')") {{ errors.first('skillPercent') }}
  .admin-about__new-add
    .form__col
      .form__group
        button.admin-add.admin-add_big(type="button"
          @click.prevent="validateNewSkill"
        )
          .admin-add__icon
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    group: Object
  },
  data() {
    return {
      skill: {
        title: "",
        percent: ""
      }
    };
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    ...mapActions("errors", ["setError"]),
    validateNewSkill() {
      this.$validator.validate().then(valid => {
        if(valid) {
          this.addItemSkills();
        }
      });
    },
    async addItemSkills() {
      this.skill.category = this.group.id;
      try {
        await this.addSkill(this.skill);
        this.skill.title = '';
        this.skill.percent = '';
        this.$validator.reset();
        this.setError({
          message: 'Новый скилл добавлен',
          type: "success"
        });
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.admin-about__new {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .form__input {
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

  @include tablets{
    width: 21%;
  }
}

.admin-about__new-add {
  margin-right: 10px;

  @include phones{
    margin-right: 0;
  }
}
</style>
