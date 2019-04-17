<template lang="pug">
  nav.admin-nav
    .container.container_admin
      ul.admin-nav__list
        li(
          :class="{'admin-nav__item_active': $route.name=='about'}"
        ).admin-nav__item
          router-link(
            :to="{name:'about'}",
          ).admin-nav__link Обо мне
        li(
          :class="{'admin-nav__item_active': $route.name=='works'}"
        ).admin-nav__item
          router-link(
            :to="{name:'works'}",
          ).admin-nav__link Работы
        li(
          :class="{'admin-nav__item_active': $route.name=='reviews'}"
        ).admin-nav__item
          router-link(
            :to="{name:'reviews'}",
          ).admin-nav__link Отзывы
</template>


<script>
export default {};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.admin-nav {
  grid-area: nav;
  background-color: #ffffff;
}

.admin-nav__list {
  display: flex;
  align-items: center;
  height: 100%;
}

.admin-nav__item {
  height: 100%;
  padding: 30px;
  &_active {
    border-bottom: 3px solid #383bcf;
    .admin-nav__link {
      color: #383bcf;
      font-weight: 600;
    }
  }
  
  @include phones {
    padding: 25px 18px 0 18px;
  }
}

.admin-nav__link {
  color: #414c63;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    text-shadow: 0px 1px 1px;
  }
  
  @include phones {
    font-size: 14px;
  }
}
</style>
