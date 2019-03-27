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
                  svg.form__block-icon
                    use(xlink:href="sprite.svg#avatar")
                  input(id="log-in" type="text" name="log-in" placeholder="Terminator_2000").form__block-input
            .form__row
              .password.form__block
                label(for="password").form__block-title Пароль
                .input
                  svg.form__block-icon
                    use(xlink:href="sprite.svg#key")
                  input(id="password" type="password" name="password" placeholder="***********").form__block-input
            button(type="submit").button Отправить
    .page.page__about
      header.header
        .container.header__container
          .header__col.header__col_grid
            .user__photo
              img(src="../images/content/me.jpeg" alt="Личное фото Екатерины Исмиляевой").user__pic
            .user__name Екатерина Исмиляева
            h3.header__title Панель администрирования
          .header__col.header__col_end
            button(type="button").exit__btn Выйти

      nav.menu
        .container.menu__container
          ul.menu__list
            li.menu__item.menu__item_active
              a.menu__link(href="#") Обо мне
            li.menu__item
              a.menu__link(href="#") Работы
            li.menu__item
              a.menu__link(href="#") Отзывы
      main.skills
        .container.skills__container
          button(type="button").skills__add Добавить группу
          ul.skills__list
            li.skills__item
              .skills__inner
                form.skills__form.skills__group
                  .skills__form-row
                    .skills__form-col
                      input(type="text" placeholder="Название новой группы").group__name
                    .skills__form-col.skills__form-col_end
                      svg.skills__form-icon
                        use(xlink:href="sprite.svg#tick")
                      svg.skills__form-icon.skills__form-icon_cross
                        use(xlink:href="sprite.svg#cross")
                  .skills__form-row.skills__form-row_three-col
                    input(type="text" placeholder="Новый навык").skill__new
                    input(type="text" placeholder="100%").skill__percent
                    button(type="button").skill__add +

            li.skills__item
              .skills__inner
            li.skills__item
              .skills__inner
</template>

<style lang=postcss>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .main {
    font-family: 'Open Sans';
  }
  .login {
    background: url(../images/content/admin_bg.png) center center / cover no-repeat;
    height: 100vh;
  }

  .login__overlay {
    height: 100vh;
    background-color: rgba(#2d3c4e, .9);
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
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-left: 46px;
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
  .input {
    display: flex;
    align-items: center;
  }
  .form__block-icon {
    width: 28px;
    height: 28px;
    fill: rgba(#414c63, .3);
    padding-right: 18px;
  }
  .button {
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
  .container {
    width: 95%;
    margin: 0 auto;

  }
  .header {
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  }

  .header__container {
    padding: 12px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .header__col_grid {
    display: grid;
    grid-template-columns: 0.4fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
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

.user__name {
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
}

.header__title {
  color: rgba(#fff, .5);
  font-size: 14px;
}

.header__col {
  align-self: center;
}

.header__col_end{
  justify-self: end;
  align-self: center;

}

.exit__btn {
  display: block;
  outline: none;
  background: transparent;
  text-decoration: underline;
  border: none;
  color:rgba(#fff, .7);
  font-family: "Open Sans";
  font-size: 14px;
  cursor: pointer;
}
.menu {
  background: #fff;
}
.menu__list {
  list-style-type: none;
  display: grid;
  grid-template-columns: .1fr .1fr .1fr;
  grid-template-rows: 1fr;

}
.menu__item {
  border-bottom: 3px solid transparent;
  text-align: center;

  &_active {
    border-color: #383bcf;
    .menu__link {
    color:  #383bcf;
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
}
.page__about {
    background: url(../images/content/admin_bg.png) center center / cover no-repeat;
    position: relative;
    z-index: -2;
    &::before {
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(#fff, .8);
      z-index: -1;
    }
}
.skills__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}
.skills__item {
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff; 
  height: 250px; 
}

.skills__add {
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  background: transparent;
  padding: 60px 200px;
  &:before {
    margin-right: 13px;
    content: '+';
    font-size: 15px;
    color: #fff;
    padding: 4px 8px;
    border-radius: 100%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
}
.skills__inner {
  width: 95%;
  margin: 0 auto;
  height: 100%;
}
.skills__form {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.skills__form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr;
}
.skills__form-row_three-col {
    grid-template-columns: 1fr .5fr .2fr;
    justify-items: end;
    grid-gap: 30px;
}
.skills__form-col_end {
  justify-self: end;
}
.group__name {
  border: none;
  background: transparent;
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #000;
}
.skills__form-icon {
  width: 15px;
  height: 12px;
  margin-right: 20px;
  fill: #00d70a;
}
.skills__form-icon_cross {
  margin-right: 0;
  fill: #bf2929;
}
</style>