<template lang="pug">
transition(name="bounceOut")
  li.admin-works__item.admin-block()
    .admin-block__header
      .admin-works__img-container
        img(
          :src="`https://webdev-api.loftschool.com/${work.photo}`"
        ).admin-works__img
        .admin-works__skills
          ul.works__skills-list
            li.works__skills-item(v-for="tag in mapTags(work.techs)") {{tag}}
    .admin-block__content
      .admin-works__title {{work.title}}
      .admin-works__text
        p {{work.description}}
      a(:href="work.link" target="__blank").admin-works__link {{work.link}}
    .admin-block__footer
      .controls
        ul.controls__list.admin-works__controls
          li.controls__item
            button.controls__btn(
              @click.prevent="editThisWork(work)"
            )
              span.controls__text Править
              div(class=`controls__icon controls__icon_pencil`)
          li.controls__item
            button.controls__btn(
              @click.prevent="deleteWork(work.id)"
            )
              span.controls__text Удалить
              div(class=`controls__icon controls__icon_cross`)
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    work: Object
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    ...mapActions("errors", ["setError"]),
    async deleteWork(workID) {
      try {
        await this.removeWork(workID);
        this.setError({
          message: `Работа удален`,
          type: "success"
        });
      } catch (error) {
        this.setError({
          message: error,
          type: "error"
        });
      }
    },
    editThisWork(work) {
      this.$emit("editWork", work);
    },
    mapTags(tags) {
      return tags.split(",").filter(item => item !== "");
    }
  },
  computed: {
    ...mapState("works", {
      editedWork: state => state.editedWork
    })
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "../../../styles/blocks/works.pcss";
.admin-block,
.admin-block__header {
  padding: 0;
}
.admin-block__header {
  border-bottom: none;
}
.admin-block__footer {
  padding: 30px 20px;
}
.admin-works__item {
  position: relative;
  &_edit {
    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(#fff, 0.7);
      z-index: 10;
    }
  }
}
.admin-works__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 17px;
  @include w_650 {
    margin-bottom: 10px;
  }
}
.admin-works__text {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 17px;
  @include w_650 {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}
.admin-works__link {
  display: block;
  color: #383bcf;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 45px;
  &:hover {
    text-decoration: underline;
  }
  @include w_650 {
    margin-bottom: 30px;
  }
}
.admin-works__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.admin-works__img-container {
  position: relative;
  width: 100%;
  height: 190px;
}
.admin-works__img {
  width: 100%;
}
.admin-works__skills {
  position: absolute;
  bottom: 0;
  right: 4%;
  .works__skills-item {
    background-color: #fff;
    opacity: 1;
    padding: 10px;
    text-transform: none;
    font-size: 13px;
    font-weight: 600;
  }
  .works__skills-list {
    margin-bottom: 0;
  }
}
.admin-block__content {
  padding: 30px 30px 40px 30px;
  margin-bottom: 0;
  @include w_650 {
    padding: 24px 0 28px 20px;
  }
}
</style>
