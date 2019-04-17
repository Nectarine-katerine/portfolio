<template lang="pug">
  header.header
    .container.container_admin.admin-header__container
      .avatar.avatar__w45.admin-avatar
        img(src="../../images/content/me.jpeg")
      .admin-header__name Исмиляева Екатерина
      .admin-header__title Панель администрирования
      .admin-header__controls
        a(@click.prevent="exit").admin-header__link Выйти
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
      ...mapActions('auth', ['logout']),
      ...mapMutations('errors', ['SET_ERROR']),
      async exit() {
        try {
          await this.logout(); 
          window.location = '/';
        } catch (error) {
          this.setError({
            message: error,
            type: 'error'
          });        
        }
      }
    }
};
</script>

<style lang="postcss" scoped>

@import "../../styles/mixins.pcss";
@import "../../styles/admin/avatar-admin.pcss";

.header {
  grid-area: header;
  background-color: #3e3e59;
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  padding: 16px 0;
  color: #fff;
}

.admin-header__container {
  display: grid;
  grid-template: "avatar name title controls" 1fr / 65px 1fr 1fr 1fr;
  align-items: center;

  @include phones{
    grid-template-columns: 45px 1fr;
    grid-template-rows: 22.5px 22.5px;
    grid-column-gap: 11px;
  }
}

.admin-header__controls {
  text-align: right;

  @include phones {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    text-align: left;
  }
}

.admin-header__name {
  font-size: 18px;
  font-weight: 600;

  @include phones {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
}

.admin-header__title {
  opacity: 0.5;
  font-size: 14px;

  @include phones {
    display: none;
  }
}

.admin-header__link {
  font-size: 16px;
  opacity: 0.7;
  text-decoration: underline;
  &:hover {
    opacity: 1;
  }
}
</style>
