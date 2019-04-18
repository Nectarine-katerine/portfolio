<template lang="pug">
  section.admin-head
    .admin-head__title
      h2.admin-title {{headTitle}}
    .admin-head__controls
      button.admin-add(
        v-if="showAddButton"
        @click.prevent="$emit('handleAddForm')"
        )
        .admin-add__icon
        | Добавить группу
</template>

<script>
export default {
  props:{
    headTitle: String,
    showAddButton: Boolean
  },
  data(){
    return{
    
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.admin-head {
  padding: 54px 0;
  display: flex;
  align-items: center;
  
  @include tablets {
    padding: 45px 0;
  }
  
  @include phones {
    padding: 30px 0;
    flex-direction: column;
    align-items: flex-start;
  }
}

.admin-head__title{
  margin-right: 54px;
  
  @include phones {
    margin-right: 0;
    margin-bottom: 30px;
  }
}
</style>
