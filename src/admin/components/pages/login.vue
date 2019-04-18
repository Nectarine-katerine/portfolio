<template lang="pug">
  .login
    form(@submit.prevent="validationLogin").login__form
      .login__title Авторизация
      .form__row
        .form__col
          .form__group(v-bind:class="{ form__group_error: errors.has('login') }")
            label.form__label Логин
            .form__input-container
              input(type="text" 
              name="login"
              v-validate="'required'"
              v-model="user.name"
              ).form__input
              // +icon('user', 'form__input-icon')  
            .form__error(v-show="errors.has('login')") {{ errors.first('login') }}
      .form__row
        .form__col
          .form__group(v-bind:class="{ form__group_error: errors.has('password') }")
            label.form__label Пароль
            .form__input-container
              input(type="password" 
              name="password"
              v-validate="'required'"
              v-model="user.password").form__input
              // +icon('envelope', 'form__input-icon')  
            .form__error(v-show="errors.has('password')") {{ errors.first('password') }}
      .form__row
        button(
          type="submit"
          :class="{btn_load: load}"
          :disabled="load"
          ).btn Отправить
      a(href="/").login__close

</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      load: false,
      user: {
        name: "Nectarine",
        password: "Haveanice"
      }
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    ...mapActions('errors', ['setError']),
    ...mapMutations('errors', ['SET_ERROR', 'CLOSE_ERROR']),
    async auth() {
      this.load = true;
      try {
        await this.login(this.user); 
        this.user.name = '';
        this.user.password = '';
        this.$validator.reset();  
        this.load = false;
        this.$router.push('/');
      } catch (error) {
        this.load = false;
        this.setError({
          message: error,
          type: 'error'
        });
      }
    },
    validationLogin() {
      this.CLOSE_ERROR();
      this.$validator.validate().then(valid => {
        if (valid) {
          this.auth();
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>

.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2d3c4e;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__form {
  position: relative;
  padding: 60px 75px;
  background-color: #ffffff;
}

.login__title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 34px;
}

.login__close {
  width: 20px;
  height: 20px;
  background: svg-load('remove.svg', fill=#414c63, width=100%, height=100%);
  position: absolute;
  right: 5%;
  top: 5%;
}
</style>
