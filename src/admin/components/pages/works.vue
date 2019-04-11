<template lang="pug">
  section.section.works
    .container
      .section__top
        .title Блок "Работы"
      works-add(v-if="showWorksAdding" 
      :showWorksAdding="showWorksAdding")
      ul.section__list
        li.section__item.section__item_add-new(@click="showWorksAdding = true")
          .add-new
            button.add-new__btn(type="button") +
            .add-new__text Добавить работу
        works-group(
          v-for="wo in works" 
          :key="wo.id" 
          :wo="wo"
        )
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    worksAdd: () => import('components/works-add.vue'),
    worksGroup: () => import('components/works-group.vue')
  },
  data() {
    return {
      showWorksAdding: false
    }
  },
  computed: {
    ...mapState('works', {
      works: state => state.works
    })
    },
  methods: {
    ...mapActions('works', ['fetchWorks']),
  },
  async created() {
    try {
      await this.fetchWorks();
    } catch (error) {
      alert('Ошибка при загрузки работ');
    };
  }
}
</script>