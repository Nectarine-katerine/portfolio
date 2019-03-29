<template lang="pug">
  .main
    .login
      .login__overlay
        .login__container
          form.login__form
            .login__close
            h1.login__title Авторизация
            .login__form-row
              .log-in.login__form-block
                label(for="log-in").login__form-block-title Логин
                .login__input
                  svg.login__input-icon
                    use(xlink:href="sprite.svg#avatar")
                  input(id="log-in" type="text" name="log-in" placeholder="Terminator_2000").login__input-area
            .login__form-row
              .password.login__form-block
                label(for="password").login__form-block-title Пароль
                .login__input
                  svg.login__input-icon
                    use(xlink:href="sprite.svg#key")
                  input(id="password" type="password" name="password" placeholder="***********").login__input-area
            button(type="submit").login__button Отправить
    .page.page__skills
      header.header
        .container.header__container
          .header__col.header__col_grid
            .header__photo
              img(src="../images/content/me.jpeg" alt="Личное фото Екатерины Исмиляевой").header__pic
            .header__name Екатерина Исмиляева
            h3.header__title Панель администрирования
          .header__col.header__col_end
            button(type="button").header__exit-btn Выйти

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
          .skills__top
            .title.skills__title Блок "Обо мне"
            button(type="button").skills__add Добавить группу
          ul.skills__list
            li.skills__item
              .skills__inner
                form.skills__form.skills__group
                  .skills__form-row
                    .skills__form-col
                      input(type="text" placeholder="Название новой группы").skills__name
                    .skills__form-col.skills__form-col_end
                      svg.skills__form-icon
                        use(xlink:href="sprite.svg#tick")
                      svg.skills__form-icon.skills__form-icon_cross
                        use(xlink:href="sprite.svg#cross")
                  .skills__form-row.skills__form-row_three-col
                    input(type="text" placeholder="Новый навык").skills__name
                    input(type="text" placeholder="100%").skills__name
                    button(type="button").skill__add.skill__add_no-padding +

            li.skills__item
              .skills__inner
                form.skills__form.skills__group
                  .skills__form-row
                    .skills__form-col
                      input(type="text" placeholder="Workflow").skills__name
                    .skills__form-col.skills__form-col_end
                      svg.skills__form-icon
                        use(xlink:href="sprite.svg#tick")
                      svg.skills__form-icon.skills__form-icon_cross
                        use(xlink:href="sprite.svg#cross")
                  ul.skill__list
                    li.skill__item
                      .skill__name Git
                      .skill__amount 100
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Terminal
                      .skill__amount 90
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Gulp
                      .skill__amount 80
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Webpack
                      .skill__amount 85
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                  .skills__form-row.skills__form-row_three-col
                    input(type="text" placeholder="Новый навык").skills__name.skill__new
                    input(type="text" placeholder="100%").skills__name.skill__percent
                    button(type="button").skill__add.skill__add_no-padding +
            li.skills__item
              .skills__inner
                form.skills__form.skills__group
                  .skills__form-row
                    .skills__form-col
                      input(type="text" placeholder="Frontend").skills__name
                    .skills__form-col.skills__form-col_end
                      svg.skills__form-icon
                        use(xlink:href="sprite.svg#tick")
                      svg.skills__form-icon.skills__form-icon_cross
                        use(xlink:href="sprite.svg#cross")
                  ul.skill__list
                    li.skill__item
                      .skill__name Html5
                      .skill__amount 100
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name CSS3
                      .skill__amount 90
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name JavaScript
                      .skill__amount 80
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Jquery и Vue.js
                      .skill__amount 85
                      .skill__percentage %
                      .skill__pencil
                        svg.skill__icon.skill_pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      .skill__delete
                        svg.skill__icon.skill_delete-icon
                          use(xlink:href="sprite.svg#trash")
                  .skills__form-row.skills__form-row_three-col
                    input(type="text" placeholder="Новый навык").skills__name.skill__new
                    input(type="text" placeholder="100%").skills__name.skill__percent
                    button(type="button").skill__add.skill__add_no-padding +
    .page.page__works
      header.header
        .container.header__container
          .header__col.header__col_grid
            .header__photo
              img(src="../images/content/me.jpeg" alt="Личное фото Екатерины Исмиляевой").header__pic
            .header__name Екатерина Исмиляева
            h3.header__title Панель администрирования
          .header__col.header__col_end
            button(type="button").header__exit-btn Выйти
      nav.menu
        .container.menu__container
          ul.menu__list
            li.menu__item
              a.menu__link(href="#") Обо мне
            li.menu__item.menu__item_active
              a.menu__link(href="#") Работы
            li.menu__item
              a.menu__link(href="#") Отзывы
      main.works
        .container.works__container
          .works__top
            .title.works__title Блок "Обо мне"
          .works__edit
            .container.edit__container
              h2.works__edit-title Редактирование работы
              .works__content
                .load
                  .load__text Перетащите или загрузите для загрузки изображения
                  .load__btn
                    button(type="button").button.load__button Загрузить
                .safe
                  form.safe__form
                    .safe__form-row
                      .safe__form-row-title
                      label(for="calling")
                      input(type="text").safe__form-row-input
                    .safe__form-row
                      .safe__form-row-title
                      label(for="calling")
                      input(type="text").safe__form-row-input
                    .safe__form-row
                      .safe__form-row-title
                      label(for="calling")
                      input(type="text").safe__form-row-input
                    .safe__form-row
                      .safe__form-row-title
                      label(for="calling")
                      input(type="text").safe__form-row-input
                    .safe__form-row
                      .safe__form-row-title
                      label(for="calling")
                      input(type="text").safe__form-row-input
                    .safe__form-row
                      .safe__form-row-title
                      label(for="calling")
                      input(type="text").safe__form-row-input


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
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
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
  .login__form {
    width: 80%;
    margin: 60px auto;
  }
  .login__close {
    display: block;
    outline: none;
    background-color: transparent;
    position: absolute;
    top: 6%;
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
  .login__form-row {
    margin-bottom: 40px;
  }
  .login__title {
    text-align: center;
    margin-bottom: 34px;
    color: #414c63;
    font-size: 36px;
    font-weight: 600;
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
    outline: none;
    padding: 20px 0;
    width: 100%;
    &::-webkit-input-placeholder {
      color: #414c63;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .login__input {
    display: flex;
    align-items: center;
  }
  .login__input-icon {
    width: 28px;
    height: 30px;
    fill: rgba(#414c63, .3);
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
  .container {
    width: 95%;
    margin: 0 auto;

  }
  .page {
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

  .header__photo {
  width: 45px;
  height: 45px;
}

.header__pic {
  border-radius: 50%;
  object-fit: cover;
   object-position: center;
   max-width: 100%;
   max-height: 100%;
   display: block;
}

.header__name {
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

.header__exit-btn {
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

.skills__top {
  display: flex;
  padding: 60px 0;
}
.title {
  color: #414c63;
  font-size: 21px;
  font-weight: 700;
  padding: 60px 0;
}

.skills__title {
  padding: 0;
  margin-right: 60px;
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
  padding: 30px 0;
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
.skills__name {
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
.skill__add {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 100%;
  padding: 5px 14px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}
.skill__item {
  display: grid;
  grid-template-columns: 2fr .5fr .5fr .5fr .5fr .5fr;
  grid-template-rows: 1fr;
}
.skill__icon {
  width: 16px;
  height: 15px;
  fill: #414c63;
}

.works__inner {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
.works__edit {
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
.works__edit-title {
  color: #414c63;
  font-size: 18px;
  font-weight: 700;
  padding: 25px 0;
  border-bottom: 1px solid rgba(#1f232d, .15);
  margin-bottom: 45px;
}
.works__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
}
.load {
  border: 1px solid #a1a1a1;
  background-color: #dee4ed;
  padding: 90px 130px;
  text-align: center;
}
.load__text {
  color: rgba(#414c63, .5);
  font-size: 16px;
  font-weight: 600;
  padding: 0 50px;
  margin-bottom: 30px;
}

.button
</style>