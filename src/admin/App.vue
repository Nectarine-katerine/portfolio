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

    .page.page__content
      main.skills
        .container.skills__container
          .skills__top
            .title.skills__title Блок "Обо мне"
            button(type="button").skills__add Добавить группу
          ul.skills__list
            li.skills__item
              .skills__inner
                form.form.skills__group
                  .form__row
                    .form__col
                      input(type="text" placeholder="Название новой группы").skills__name
                    .form__col.form__col_end
                      button(type="button").tick__btn
                        svg.tick__btn-icon.form__icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross__btn-icon.form__icon
                          use(xlink:href="sprite.svg#cross")
                  .form__row.form__row_three-col
                    input(type="text" placeholder="Новый навык").skills__name.skills__name_padding.skills__name_new
                    input(type="text" placeholder="100 %").skills__name.skills__name_padding
                    button(type="button").skill__add.skill__add_no-padding +

            li.skills__item
              .skills__inner
                form.form.skills__group
                  .form__row
                    .form__col
                      input(type="text" value="Workflow").skills__name
                    .form__col.form__col_end
                      button(type="button").tick__btn
                        svg.tick__btn-icon.form__icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross__btn-icon.form__icon
                          use(xlink:href="sprite.svg#cross")
                  ul.skill__list
                    li.skill__item
                      .skill__name Git
                      .skill__amount 100
                      .skill__percentage %
                      button(type="button").skill__pencil.pencil__btn
                        svg.skill__icon.pencil__btn-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").skill__delete.trash__btn
                        svg.skill__icon.trash__btn-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Terminal
                      .skill__amount 90
                      .skill__percentage %
                      button(type="button").skill__pencil.pencil__btn
                        svg.skill__icon.pencil__btn-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").skill__delete.trash__btn
                        svg.skill__icon.trash__btn-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Gulp
                      .skill__amount 80
                      .skill__percentage %
                      button(type="button").skill__pencil.pencil__btn
                        svg.skill__icon.pencil__btn-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").skill__delete.trash__btn
                        svg.skill__icon.trash__btn-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Webpack
                      .skill__amount 85
                      .skill__percentage %
                      button(type="button").skill__pencil.pencil__btn
                        svg.skill__icon.pencil__btn-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").skill__delete.trash__btn
                        svg.skill__icon.trash__btn-icon
                          use(xlink:href="sprite.svg#trash")
                  .form__row.form__row_three-col
                    input(type="text" placeholder="Новый навык").skills__name.skills__name_padding.skills__name_new
                    input(type="text" placeholder="100 %").skills__name.skills__name_padding
                    button(type="button").skill__add.skill__add_no-padding +
            li.skills__item
              .skills__inner
                form.form.skills__group
                  .form__row
                    .form__col
                      input(type="text" value="Frontend").skills__name
                    .form__col.form__col_end
                      button(type="button").tick__btn
                        svg.tick__btn-icon.form__icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross__btn-icon.form__icon
                          use(xlink:href="sprite.svg#cross")
                  ul.skill__list
                    li.skill__item
                      .skill__name HTML
                      .skill__amount 100
                      .skill__percentage %
                      button(type="button").skill__pencil.pencil__btn
                        svg.skill__icon.pencil__btn-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").skill__delete.trash__btn
                        svg.skill__icon.trash__btn-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item.skill__item_active
                      .skill__name CSS
                      .skill__amount 90
                      .skill__percentage %
                      button(type="button").tick__btn
                        svg.tick__btn-icon.form__icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross__btn-icon.form__icon
                          use(xlink:href="sprite.svg#cross")
                    li.skill__item
                      .skill__name Gulp
                      .skill__amount 80
                      .skill__percentage %
                      button(type="button").skill__pencil.pencil__btn
                        svg.skill__icon.pencil__btn-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").skill__delete.trash__btn
                        svg.skill__icon.trash__btn-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill__item
                      .skill__name Webpack
                      .skill__amount 85
                      .skill__percentage %
                      button(type="button").skill__pencil.pencil__btn
                        svg.skill__icon.pencil__btn-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").skill__delete.trash__btn
                        svg.skill__icon.trash__btn-icon
                          use(xlink:href="sprite.svg#trash")
                  .form__row.form__row_three-col
                    input(type="text" placeholder="Новый навык").skills__name.skills__name_padding.skills__name_new
                    input(type="text" placeholder="100 %").skills__name.skills__name_padding
                    button(type="button").skill__add.skill__add_no-padding +
    .page.page__works
      main.works.section
        .container.works__container.section__container
          .works__top.section__top
            .title.works__title.section__title Блок "Обо мне"
          .works__edit.section__edit
            .container.edit__container
              h2.works__edit-title.section__edit-title Редактирование работы
              .works__content.section__content
                .load
                  .load__text Перетащите или загрузите для загрузки изображения
                  .load__btn
                    button(type="button").button.load__button Загрузить
                .safe
                  form.safe__form
                    .safe__form-row
                      .safe__form-row-title Название
                      label(for="calling")
                      input(type="text" id="calling" value="Дизайн сайта для авто салона Porsche").safe__form-row-input.skills__name
                    .safe__form-row
                      .safe__form-row-title Ссылка
                      label(for="link")
                      input(type="text" id="link" value="https://www.porsche-pulkovo.ru").safe__form-row-input.skills__name
                    .safe__form-row
                      .safe__form-row-title Описание
                      label(for="description")
                      textarea(type="textarea" id="description").textarea.safe__form-row-input.skills__name Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                    .safe__form-row
                      .safe__form-row-title Добавлегие тега
                      label(for="tags")
                      input(type="text" id="tags" value="Jquery, Vue.js, HTML5").safe__form-row-input.skills__name
                    .safe__form-row
                      ul.works-edit__tags
                        li.works-edit__tags-item
                          .tag__name HTML
                          button(type="button").cross__btn  
                           svg.cross__btn-icon.form__icon.cross__btn-icon_works
                            use(xlink:href="sprite.svg#cross")
                        li.works-edit__tags-item
                          .tag__name CSS
                          button(type="button").cross__btn  
                           svg.cross__btn-icon.form__icon.cross__btn-icon_works
                            use(xlink:href="sprite.svg#cross")
                        li.works-edit__tags-item
                          .tag__name JavaScript
                          button(type="button").cross__btn  
                           svg.cross__btn-icon.form__icon.cross__btn-icon_works
                            use(xlink:href="sprite.svg#cross")
                    .safe__form-row.safe__btns
                      button(type="button").safe__btns-reset Отмена
                      button(type="button").button.safe__btns-safe Сохранить

          ul.works__list.section__list
           li.works__item.works__item_flex.section__item.section__item_flex
            .add
              button.add__work(type="button") +
              .add__text Добавить работу
           li.works__item.works__item_added.section__item
            .works__photo
              img(src="../images/content/slider-1.jpg").works__pic
            .works__wrapper.section__wrapper
              .works__data.section__data
                .works__data-title Сайт школы образования
                .works__desc.section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .works__btns.section__btns
                button(type="button").pencil__btn.work__btn.section__btn Править
                  svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                    use(xlink:href="sprite.svg#pencil")
                button(type="button").cross__btn.work__btn.section__btn Удалить 
                  svg.cross__btn-icon.work__icon.section__icon
                    use(xlink:href="sprite.svg#cross")
           li.works__item.section__item
            .works__photo
              img(src="../images/content/slider-1.jpg").works__pic
            .works__wrapper.section__wrapper
              .works__data.section__data
                .works__data-title Сайт школы образования
                .works__desc.section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .works__btns.section__btns
                button(type="button").pencil__btn.work__btn.section__btn Править
                  svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                    use(xlink:href="sprite.svg#pencil")
                button(type="button").cross__btn.work__btn.section__btn Удалить 
                  svg.cross__btn-icon.work__icon.section__icon
                    use(xlink:href="sprite.svg#cross")
           li.works__item.section__item
            .works__photo
              img(src="../images/content/slider-1.jpg").works__pic
            .works__wrapper.section__wrapper
              .works__data.section__data
                .works__data-title Сайт школы образования
                .works__desc.section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .works__btns.section__btns
                button(type="button").pencil__btn.work__btn.section__btn Править
                  svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                    use(xlink:href="sprite.svg#pencil")
                button(type="button").cross__btn.work__btn.section__btn Удалить 
                  svg.cross__btn-icon.work__icon.section__icon
                    use(xlink:href="sprite.svg#cross")
           li.works__item.section__item
            .works__photo
              img(src="../images/content/slider-1.jpg").works__pic
            .works__wrapper.section__wrapper
              .works__data.section__data
                .works__data-title Сайт школы образования
                .works__desc.section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .works__btns.section__btns
                button(type="button").pencil__btn.work__btn.section__btn Править
                  svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                    use(xlink:href="sprite.svg#pencil")
                button(type="button").cross__btn.work__btn.section__btn Удалить 
                  svg.cross__btn-icon.work__icon.section__icon
                    use(xlink:href="sprite.svg#cross")
    .page.page__works
      main.works.section
        .container.works__container.section__container
          .works__top.section__top
            .title.works__title.section__title Блок "Отзывы"
          .works__edit.section__edit
            .container.edit__container
              h2.works__edit-title.section__edit-title Новый отзыв
              .works__content.section__content
                .load
                  .load__photo
                    svg.login__input-icon
                      use(xlink:href="sprite.svg#avatar")
                  .load__btn
                    button(type="button").button.load__button Добавить фото
                .safe
                  form.safe__form
                    .safe__form-row
                      .safe__form-row-title Имя автора
                      label(for="calling")
                      input(type="text" id="calling" value="Ковальчук Дмитрий").safe__form-row-input.skills__name
                    .safe__form-row
                      .safe__form-row-title Титул автора
                      label(for="link")
                      input(type="text" id="link" value="Основатель Loftschool").safe__form-row-input.skills__name
                    .safe__form-row
                      .safe__form-row-title Отзыв
                      label(for="description")
                      textarea(type="textarea" id="description").textarea.safe__form-row-input.skills__name Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .safe__form-row.safe__btns
                      button(type="button").safe__btns-reset Отмена
                      button(type="button").button.safe__btns-safe Сохранить

          ul.works__list.section__list
            li.works__item.works__item_flex.section__item.section__item_flex
              .add
                button.add__work(type="button") +
                .add__text Добавить отзыв
            li.works__item.section__item
              .works__wrapper.section__wrapper
                .author
                  .works__photo.author__photo
                    img(src="../images/content/dima.png").works__pic.author__pic
                  .author__data
                    .author__name Владимир Сабанцев
                    .autor__position Преподаватель
                .works__data.section__data
                  .works__desc.section__desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .works__btns.section__btns
                    button(type="button").pencil__btn.work__btn.section__btn Править
                      svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").cross__btn.work__btn.section__btn Удалить 
                      svg.cross__btn-icon.work__icon.section__icon
                        use(xlink:href="sprite.svg#cross")
            li.works__item.section__item
              .works__wrapper.section__wrapper
                .author
                  .works__photo.author__photo
                    img(src="../images/content/dima.png").works__pic.author__pic
                  .author__data
                    .author__name Владимир Сабанцев
                    .autor__position Преподаватель
                .works__data.section__data
                  .works__desc.section__desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .works__btns.section__btns
                    button(type="button").pencil__btn.work__btn.section__btn Править
                      svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").cross__btn.work__btn.section__btn Удалить 
                      svg.cross__btn-icon.work__icon.section__icon
                        use(xlink:href="sprite.svg#cross")
            li.works__item.section__item
              .works__wrapper.section__wrapper
                .author
                  .works__photo.author__photo
                    img(src="../images/content/dima.png").works__pic.author__pic
                  .author__data
                    .author__name Владимир Сабанцев
                    .autor__position Преподаватель
                .works__data.section__data
                  .works__desc.section__desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .works__btns.section__btns
                    button(type="button").pencil__btn.work__btn.section__btn Править
                      svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").cross__btn.work__btn.section__btn Удалить 
                      svg.cross__btn-icon.work__icon.section__icon
                        use(xlink:href="sprite.svg#cross")
            li.works__item.section__item
              .works__wrapper.section__wrapper
                .author
                  .works__photo.author__photo
                    img(src="../images/content/dima.png").works__pic.author__pic
                  .author__data
                    .author__name Владимир Сабанцев
                    .autor__position Преподаватель
                .works__data.section__data
                  .works__desc.section__desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                  .works__btns.section__btns
                    button(type="button").pencil__btn.work__btn.section__btn Править
                      svg.work__icon.pencil__btn-icon.pencil__btn-icon-blue.section__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").cross__btn.work__btn.section__btn Удалить 
                      svg.cross__btn-icon.work__icon.section__icon
                        use(xlink:href="sprite.svg#cross")

</template>

<style lang=postcss>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800&subset=cyrillic');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  @import "../styles/admin/base-admin.pcss"; //Общие стили админ страниц

  @import "../styles/admin/login.pcss";
  @import "../styles/admin/page.pcss";
  @import "../styles/admin/header.pcss";
  @import "../styles/admin/menu.pcss";
  @import "../styles/admin/skills.pcss";
  @import "../styles/admin/works.pcss";
  @import "../styles/admin/load.pcss";
  @import "../styles/admin/cross.pcss";
  @import "../styles/admin/works-edit.pcss";
  
  
</style>