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
                  input(id="password" type="password" name="password" placeholder="•••••••••••••••••••••").login__input-area
            button(type="submit").login__button Отправить
    header.header
      .container.header__container
        .header__photo
          img(src="../images/content/me.jpeg" alt="Личное фото Екатерины Исмиляевой").header__pic
        .header__name Екатерина Исмиляева
        h3.header__title Панель администрирования
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

    section.section.skills
      .container
        .section__top.skills__top
          .title.skills__title Блок "Обо мне"
          button(type="button").skills__add Добавить группу
        ul.skills__list
          li.skills__item.skills__item_new-group
            .skills__inner
              form.group
                .group__row.group__row_border-bottom
                  .group__col
                    input(type="text" placeholder="Название новой группы").group__name.section__input
                  .group__col.group__col_end
                    button(type="button").button-iconed
                      svg.tick__icon.group__icon
                        use(xlink:href="sprite.svg#tick")
                    button(type="button").button-iconed    
                      svg.cross__icon.group__icon
                        use(xlink:href="sprite.svg#cross")
                .group__row.group__row_three-col
                  input(type="text" placeholder="Новый навык").group__name.group__name_padding.group__name_new.section__input
                  input(type="text" placeholder="100 %").group__name.group__name_padding.section__input
                  button(type="button").group__add.group__add_no-padding +

          li.skills__item.skills__item_workflow
            .skills__inner
              form.group
                .group__row.group__row_border-bottom
                  .group__col
                    input(type="text" value="Workflow").group__name.section__input
                  .group__col.group__col_end
                    button(type="button").button-iconed
                      svg.tick__icon.group__icon
                        use(xlink:href="sprite.svg#tick")
                    button(type="button").button-iconed    
                      svg.cross__icon.group__icon
                        use(xlink:href="sprite.svg#cross")
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                ul.skill__list
                  li.skill__item
                    .skill__name Git
                    .skill__amount 100
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                    
                  li.skill__item
                    .skill__name Terminal
                    .skill__amount 90
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                    
                  li.skill__item
                    .skill__name Gulp
                    .skill__amount 80
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                  li.skill__item
                    .skill__name Webpack
                    .skill__amount 85
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                .group__row.group__row_three-col
                  input(type="text" placeholder="Новый навык").group__name.group__name_padding.group__name_new.section__input
                  input(type="text" placeholder="100 %").group__name.group__name_padding.section__input
                  button(type="button").group__add.group__add_no-padding +
          li.skills__item.skills__item_frontend
            .skills__inner
              form.group
                .group__row.group__row_border-bottom
                  .group__col
                    input(type="text" value="Frontend").group__name.section__input
                  .group__col.group__col_end
                    button(type="button").button-iconed
                      svg.tick__icon.group__icon
                        use(xlink:href="sprite.svg#tick")
                    button(type="button").button-iconed    
                      svg.cross__icon.group__icon
                        use(xlink:href="sprite.svg#cross")
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                ul.skill__list
                  li.skill__item
                    .skill__name Html5
                    .skill__amount 100
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                      svg.tick__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                  li.skill__item.skill__item_active
                    .skill__name CSS3
                    .skill__amount 90
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                      svg.tick__icon.group__icon
                        use(xlink:href="sprite.svg#tick")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                      svg.cross__icon.group__icon
                        use(xlink:href="sprite.svg#cross")
                    
                  li.skill__item
                    .skill__name JavaScript
                    .skill__amount 80
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                  li.skill__item
                    .skill__name Jquery и Vue.js
                    .skill__amount 85
                    .skill__percentage %
                    button(type="button").button-iconed
                      svg.pencil__icon.skill__icon
                        use(xlink:href="sprite.svg#pencil")
                    button(type="button").iconed-button
                      svg.trash__icon.skill__icon
                        use(xlink:href="sprite.svg#trash")
                .group__row.group__row_three-col
                  input(type="text" placeholder="Новый навык").group__name.group__name_padding.group__name_new.section__input
                  input(type="text" placeholder="100 %").group__name.group__name_padding.section__input
                  button(type="button").group__add.group__add_no-padding +
    section.section.works
      .container
        .section__top
          .title Блок "Работы"
        .edit
          .container
            h2.edit__title Редактирование работы
            .edit__content.edit__content_works
              .load
                .load__text Перетащите или загрузите для загрузки изображения
                .load__btn
                  button(type="button").button.load__button Загрузить
              .load__tablets
                .section__photo
                  img(src="../images/content/slider-1.jpg").section__pic
                button(type="button").load__btn_tablets.safe__reset Изменить превью
              form.safe.safe_works
                .safe__row
                  label(for="calling").safe__row-title Название
                  input(type="text" id="calling" value="Дизайн сайта для авто салона Porsche").safe__row-input.section__input
                .safe__row
                  label(for="link").safe__row-title Ссылка
                  input(type="text" id="link" value="https://www.porsche-pulkovo.ru").safe__row-input.section__input
                .safe__row
                  label(for="description").safe__row-title Описание
                  textarea(type="textarea" id="description").safe__textarea.safe__row-input.section__input Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                .safe__row
                  label(for="tags").safe__row-title Добавлегие тега
                  input(type="text" id="tags" value="Jquery, Vue.js, HTML5").safe__row-input.section__input
                .safe__row
                  ul.tags
                    li.tags__item
                      .tags__name HTML
                      button(type="button").button-iconed    
                        svg.cross__icon.cross__icon_gray.group__icon
                          use(xlink:href="sprite.svg#cross")
                    li.tags__item
                      .tags__name CSS
                      button(type="button").button-iconed    
                        svg.cross__icon.cross__icon_gray.group__icon
                          use(xlink:href="sprite.svg#cross")
                    li.tags__item
                      .tags__name JavaScript
                      button(type="button").button-iconed    
                        svg.cross__icon.cross__icon_gray.group__icon
                          use(xlink:href="sprite.svg#cross")
                .safe__row.safe__btns
                  button(type="button").safe__reset Отмена
                  button(type="button").button Сохранить

        ul.section__list
          li.section__item.section__item_add-new
            .add-new
              button.add-new__btn(type="button") +
              .add-new__text Добавить работу
          li.section__item_added.section__item
            .section__photo
              img(src="../images/content/slider-1.jpg").section__pic
            .section__wrapper.works__wrapper
              .section__data
                .section__data-title Сайт школы образования
                .section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .section__btns
                  button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                  button(type="button").button-iconed.section__btn  Удалить  
                    svg.cross__icon.section__icon
                      use(xlink:href="sprite.svg#cross")
          li.section__item
            .section__photo
              img(src="../images/content/slider-2.jpg").section__pic
            .section__wrapper.works__wrapper
              .section__data
                .section__data-title Сайт школы образования
                .section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .section__btns
                  button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                  button(type="button").button-iconed.section__btn  Удалить  
                    svg.cross__icon.section__icon
                      use(xlink:href="sprite.svg#cross")
          li.section__item
            .section__photo
              img(src="../images/content/slider-3.jpg").section__pic
            .section__wrapper.works__wrapper
              .section__data
                .section__data-title Сайт школы образования
                .section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .section__btns
                  button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                  button(type="button").button-iconed.section__btn  Удалить  
                    svg.cross__icon.section__icon
                      use(xlink:href="sprite.svg#cross")
          li.section__item
            .section__photo
              img(src="../images/content/slider-4.jpg").section__pic
            .section__wrapper.works__wrapper
              .section__data
                .section__data-title Сайт школы образования
                .section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").works__link http://loftschool.ru
              .section__btns
                button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                button(type="button").button-iconed.section__btn  Удалить  
                  svg.cross__icon.section__icon
                    use(xlink:href="sprite.svg#cross")
    section.section.reviews
      .container.reviews__container
        .section__top
          .title Блок "Отзывы"
        .edit
          .container
            h2.edit__title Новый отзыв
            .edit__content.reviews__content
              .load.load__reviews
                .load__photo
                  svg.load__icon
                    use(xlink:href="sprite.svg#avatar")
                .load__btn
                  button(type="button").load__button_reviews Добавить фото
              form.safe.safe_reviews
                .safe__row.safe__row_reviews
                  .safe__row_two-col
                    label(for="author").safe__row-title Имя автора
                    input(type="text" id="author" value="Ковальчук Дмитрий").safe__row-input.section__input
                  .safe__row_two-col
                    label(for="position").safe__row-title Титул автора
                    input(type="text" id="position" value="Основатель LoftSchool").safe__row-input.section__input
                .safe__row
                  label(for="review").safe__row-title Отзыв
                  textarea(type="textarea" id="review").safe__textarea.safe__row-input.section__input Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .safe__row.safe__btns
                  button(type="button").safe__reset Отмена
                  button(type="button").button Сохранить


        ul.section__list
          li.section__item.section__item_add-new
            .add-new
              button.add-new__btn(type="button") +
              .add-new__text Добавить отзыв
          li.section__item
            .section__wrapper.reviews__wrapper
              .author
                .author__top
                  .section__photo.author__photo
                    img(src="../images/content/vova.png").section__pic.author__pic
                  .author__data
                    .author__name Владимир Сабанцев
                    .autor__position Преподаватель
              .section__data.reviews__data
                .section__desc
                  p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .section__btns
                  button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                  button(type="button").button-iconed.section__btn  Удалить  
                    svg.cross__icon.section__icon
                      use(xlink:href="sprite.svg#cross")
          li.section__item
            .section__wrapper.reviews__wrapper
              .author
                .author__top
                  .section__photo.author__photo
                    img(src="../images/content/dima.png").section__pic.author__pic
                  .author__data
                    .author__name Ковальчук Дмитрий
                    .autor__position Основатель Loftschool
              .section__data.reviews__data
                .section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .section__btns
                  button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                  button(type="button").button-iconed.section__btn  Удалить  
                    svg.cross__icon.section__icon
                      use(xlink:href="sprite.svg#cross")
          li.section__item
            .section__wrapper.reviews__wrapper
              .author
                .author__top
                  .section__photo.author__photo
                    img(src="../images/content/vova.png").section__pic.author__pic
                  .author__data
                    .author__name Владимир Сабанцев
                    .autor__position Преподаватель
              .section__data.reviews__data
                .section__desc
                  p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .section__btns
                  button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                  button(type="button").button-iconed.section__btn  Удалить  
                    svg.cross__icon.section__icon
                      use(xlink:href="sprite.svg#cross")
          li.section__item
            .section__wrapper.reviews__wrapper
              .author
                .author__top
                  .section__photo.author__photo
                    img(src="../images/content/dima.png").section__pic.author__pic
                  .author__data
                    .author__name Ковальчук Дмитрий
                    .autor__position Основатель Loftschool
              .section__data.reviews__data
                .section__desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .section__btns
                  button(type="button").button-iconed.section__btn Править
                    svg.pencil__icon.pencil__icon_blue.section__icon
                      use(xlink:href="sprite.svg#pencil")
                  button(type="button").button-iconed.section__btn  Удалить  
                    svg.cross__icon.section__icon
                      use(xlink:href="sprite.svg#cross")

</template>

<style lang=postcss>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800&subset=cyrillic');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  @import "../styles/admin/base-admin.pcss"; //Общие стили админ страниц

  @import "../styles/admin/login.pcss";
  @import "../styles/admin/section.pcss";
  @import "../styles/admin/header.pcss";
  @import "../styles/admin/menu.pcss";
  @import "../styles/admin/skills.pcss";
  @import "../styles/admin/works.pcss";
  @import "../styles/admin/load.pcss";
  @import "../styles/admin/edit.pcss";
  @import "../styles/admin/safe.pcss";
  @import "../styles/admin/add-new.pcss";
  @import "../styles/admin/author.pcss";
  @import "../styles/admin/group.pcss";
  @import "../styles/admin/skill.pcss";
  @import "../styles/admin/tags.pcss";
   @import "../styles/admin/reviews.pcss";
  @import "../styles/admin/icons.pcss";
  
</style>