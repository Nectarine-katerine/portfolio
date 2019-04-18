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
              button.controls__btn(type="button"
                @click.prevent="editThisWork(work)"
              )
                span.controls__text Править
                div(class=`controls__icon controls__icon_pencil`)          
            li.controls__item
              button.controls__btn(type="button"
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
  @include phones {
    margin-bottom: 10px;
  }
}
.admin-works__text {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 17px;
  @include phones {
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
  @include phones {
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
  @include phones {
    padding: 24px 0 28px 20px;
  }
}
.works {
  display: flex;
  align-items: flex-start;

  @include tablets {
    flex-direction: column;
  }
}

.works__slider {
  width: 66%;
  height: 549px;
  margin-right: 160px;

  @include desktop {
    height: 354px;
    margin-right: 109px;
    width: 58%;
  }

  @include tablets {
    margin-right: 0;
    width: 91%;
    margin-bottom: 100px;
  }

  @include phones {
    // width: 113%;
    // margin-left: -7%;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-height: 186px;
    margin-bottom: 58px;
  }

  @include phones {
    // width: 124%;
    // margin-left: -12%;    
  }
}

.works__name {
  font-size: 30px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 28px;

  @include tablets {
    margin-bottom: 15px;
    text-align: center;
  }

  @include phones {
    font-size: 24px;
    line-height: 30px;
    text-align: left;
  }
}

.works__desc {
  opacity: 0.7;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 34px;

  @include tablets {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    padding: 0 10%;
    margin-bottom: 23px;
  }

  @include phones {
    padding: 0;
    text-align: left;
  }
}

.works__link-site {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.works__link-text {
  color: #4b6fd7;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }

  @include tablets {
    font-size: 14px;
  }
}

.works__link-icon {
  width: 15px;
  height: 15px;
  fill: #4b6fd7;
  margin-right: 20px;
}

.works__skills-list {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @include tablets {
    margin-bottom: 0;
  }
}

.works__skills-item {
  position: relative;
  padding: 13px 18px;
  border-radius: 23px;
  background-color: rgba(#7aa0c5, 0.1);
  opacity: 0.7;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 15px;
  margin-bottom: 15px;

  &:last-child {
    margin-right: 0;
  }

  @include phones {
    font-size: 13px;
    margin-right: 12px;
  }
}

.works__content {
  width: 23%;

  @include desktop {
    width: 32%;
  }

  @include tablets {
    width: 100%;
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @include phones {
    padding: 0;
    align-items: flex-start;
  }
}

.works__skills-close {
  position: absolute;
  display: block;
  width: 11px;
  height: 11px;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  background: svg-load('remove.svg') center center no-repeat;
}
</style>