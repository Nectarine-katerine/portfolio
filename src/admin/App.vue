<template lang="pug">
  .main
    .login
      .login__overlay
        .login__container
          form.form
            .close__form
            h1.title.form__title Авторизация
            .form__row
              .log-in.form__block
                label(for="log-in").form__block-title Логин
                .input
                  input(id="log-in" type="text" name="log-in" placeholder="Terminator_2000").form__block-input
            .form__row
              .password.form__block
                label(for="password").form__block-title Пароль
                .input
                  input(id="password" type="password" name="password").form__block-input
            button(type="submit").button Отправить
    header.header
      .header__container
        .header__col.header__col_flex
          .user
            .user__photo
              img(src="../images/content/me.jpeg" alt="Личное фото Екатерины Исмиляевой").user__pic
            .user__name Екатерина Исмиляева
          h2.header__title Панель администрирования
        .header__col
          button(type="button") Выйти


</template>

<style lang=postcss>
  * {
    margin: 0;
    padding: 0;
  }
  .login {
    background: url(../images/content/train.png) center center / cover no-repeat;
    height: 100vh;
  }
  .login__overlay {
    height: 100vh;
    background-color: rgba(#2d3c4e, .7);
    position: relative;
  }
  .login__container {
    width: 563px;
    height: 517px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .form {
    width: 80%;
    margin: 60px auto;
  }
  .close__form {
    display: block;
    outline: none;
    background-color: transparent;
    position: absolute;
    top: 1%;
    right: 10%;
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:before,
    &::after {
      position: absolute;
      left: 50%;
      content: '';
      height: 25px;
      width: 5px;
      background-color: $text-color;
    }
    &:before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
  .form__row {
    margin-bottom: 40px;
  }
  .form__title {
    text-align: center;
    margin-bottom: 34px;
    color: #414c63;
    font-family: Open Sans;
    font-size: 36px;
    font-weight: 600;
  }
  .form__block {
    width: 100%;
    border-bottom: 2px solid #414c63;
  }
  .form__block-title {
    opacity: 0.3;
    color: #414c63;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 25px;
    display: block;
  }

  .form__block-input {
    background: transparent;
    border: none;
    color: #414c63;
    outline: none;
    padding: 20px 0;
    width: 100%;
    &::-webkit-input-placeholder {
      color: #414c63;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .button {
    display: block;
    padding: 25px 99.2px;
    outline: none;
    background-image: linear-gradient(to right, #ea7400 0%, #f29400 100%);  
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    border: none;
    margin: 0 auto;
    &:hover {
      background-image: linear-gradient(to right, #ff7f00 0%, #ff9d00 100%);
    }
  }
  .header {
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  }

  .header__container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .header__col_flex {
    display: flex;
  }
  .user {
    display: flex;
  }
  .user__photo {
  width: 45px;
  height: 45px;
}

.user__pic {
  border-radius: 50%;
  object-fit: cover;
   object-position: center;
   max-width: 100%;
   max-height: 100%;
   display: block;
}
</style>