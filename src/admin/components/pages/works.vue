<template lang="pug">
  transition(name="fade" mode="out-in")
    div
      HeadTitle(
        headTitle='Блок «Работы»'
      )
      div(
        :class="{'works-load': isLoading}"        
      )
        transition(name="bounceIn")
          workForm(
            v-if="showFormWork"
            @hideFormWork="cancelEditWork"
            )
        section.admin-works
          ul.admin-works__list
            li.admin-works__item.admin-block(v-if="!showFormWork")
              button(type="button" @click.prevent="showFormWork = !showFormWork").admin-add.admin-add_bigest
                .admin-add__icon
                | Добавить работу
            
            worksList(
              v-for="work in works"
              :key="work.id"
              :work="work"
              @editWork="editWork"
            )
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      showFormWork: false
    };
  },
  components: {
    HeadTitle: () => import("../Head-title.vue"),
    workForm: () => import("../works/work-form.vue"),
    worksList: () => import("../works/works-list.vue")
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    ...mapState("works", {
      isLoading: state => state.isLoading
    })
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    ...mapMutations("works", ["SET_EDITED_WORK"]),
    editWork(work) {
      //console.log(work);
      this.SET_EDITED_WORK(work);
      this.showFormWork = true;
    },
    cancelEditWork() {
      this.showFormWork = false;
      this.SET_EDITED_WORK({});
    }
  },
  async created() {
    try {
      await this.fetchWorks();
    } catch (error) {
      alert(error);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.admin-works {
  margin-bottom: 50px;
}
.admin-works__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 31px;
  .admin-block,
  .admin-block__header {
    padding: 0;
  }
  .admin-block__header {
    border-bottom: none;
  }
  .admin-block__content {
    padding: 30px 30px 40px 30px;
    margin-bottom: 0;
    @include phones {
      padding: 24px 0 28px 20px;
    }
  }
  @include tablets {
    grid-template-columns: repeat(2, 1fr);
  }
  @include phones {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 10px;
  }
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
.works-load {
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    background: rgba(#ccc, 0.5)
      center no-repeat;
  }
}
</style>