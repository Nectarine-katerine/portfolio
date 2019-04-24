<template lang="pug">
  .login
    form(@submit.prevent="validationLogin").login__form
      h1.login__title Авторизация
      .login__form-row
        .log-in.login__form-block
          .form__group(v-bind:class="{ form__group_error: errors.has('login') }")
            label(for="log-in").login__form-block-title Логин
            .login__input
              svg.login__input-icon
                use(xlink:href="sprite.svg#avatar")
              input(type="text"
              id="log-in" 
              name="login"
              v-validate="'required'"
              v-model="user.name"
              ).login__input-area
            .form__error(v-show="errors.has('login')") {{ errors.first('login') }}
      .login__form-row
        .password.login__form-block
          .form__group(v-bind:class="{ form__group_error: errors.has('password') }")
            label(for="password").login__form-block-title Пароль
            .login__input
              svg.login__input-icon
                use(xlink:href="sprite.svg#key")
              input(type="password"
              id="password" 
              name="password"
              v-validate="'required'"
              v-model="user.password").login__input-area
            .form__error(v-show="errors.has('password')") {{ errors.first('password') }}
      .login__form-row
        button(
          type="submit"
          :class="{btn_load: load}"
          :disabled="load"
          ).login__button Отправить
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
@import "../../../styles/mixins.pcss";
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
  
  @include phones {
    opacity: 1;
  }
}

.login__form {
  position: relative;
  padding: 60px 75px;
  background-color: #ffffff;
  
  @include phones {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
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

.login__form-row {
  margin-bottom: 40px;
}

.login__form-block {
  width: 100%;
  border-bottom: 2px solid #414c63;
}

.login__form-block-title {
  opacity: 0.3;
  color: #414c63;
  font-size: 16px;
  font-weight: 600;
  display: block;
  margin-left: 46px;
}

.login__input-area {
  background: transparent;
  border: none;
  color: #414c63;
  font-weight: 700;
  outline: none;
  padding: 20px 0;
  width: 100%;
}

.login__input {
  display: flex;
  align-items: center;
}

.login__input-icon {
  width: 28px;
  height: 30px;
  fill: rgba(#414c63, 0.3);
  margin-right: 18px;
}

.login__button {
  display: block;
  padding: 25px 99.2px;
  outline: none;
  background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);  
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-top: 20px;
  border: none;
  border-radius: 40px 5px;
  margin: 0 auto;
  cursor: pointer;
  
  &:hover {
    background-image: linear-gradient(to right, #ad00ed 50%, #5500f2 100%);
  }
}
</style>
