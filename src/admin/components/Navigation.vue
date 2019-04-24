<template lang="pug">
  nav.menu
    .container.menu__container
      ul.menu__list
        li(
          :class="{'menu__item_active': $route.name=='about'}"
        ).menu__item
          router-link(
            :to="{name:'about'}",
          ).menu__link Обо мне
        li(
          :class="{'menu__item_active': $route.name=='works'}"
        ).menu__item
          router-link(
            :to="{name:'works'}",
          ).menu__link Работы
        li(
          :class="{'menu__item_active': $route.name=='reviews'}"
        ).menu__item
          router-link(
            :to="{name:'reviews'}",
          ).menu__link Отзывы
</template>


<script>
export default {};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.menu {
  background: #fff;
}

.menu__list {
  list-style-type: none;
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 0.1fr;
  grid-template-rows: 1fr;

  @include phones {
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: 0 auto;
  }
}

.menu__item {
  border-bottom: 3px solid transparent;
  text-align: center;
  transition: border-color 0.3s;
  margin-right: 5px;
  
  &:last-child {
    margin-right: 0;
  }

  &_active, &:hover {
    border-color: #383bcf;
    transition: border-color 0.3s;

    .menu__link {
      color:  #383bcf;
      transition: color 0.3s;
    }
  }
}

.menu__link {
  display: inline-block;
  text-decoration: none;
  color: #414c63;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  padding: 30px 0;
  transition: color 0.3s;
}
</style>
