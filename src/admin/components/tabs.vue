<template lang="pug">
  .menu__container
    .container
      ul.menu__list
        li.menu__item(v-for="tab in tabs")
          router-link(
            :data-text="tab.title" 
            :to="tab.href"
            exact-active-class="active"
          ).menu__link

</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    };
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.menu__container {
  background: #fff;
}
.menu__list {
  display: grid;
  grid-template-columns: .1fr .1fr .1fr;
  grid-template-rows: 1fr;

  @include phones {
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: 0 auto;
  }
}
.menu__item {
  text-align: center;
}
.menu__link {
  display: inline-block;
  text-decoration: none;
  color: #414c63;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  padding: 30px 0;
  transition: color .3s;
  width: 125px;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  @include phones {
    width: 100px;
  }
  &:before {
    content: attr(data-text);
  }
  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}
</style>