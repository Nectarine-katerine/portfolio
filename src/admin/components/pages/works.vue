<template lang="pug">
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
                img(src="../../../images/content/slider-1.jpg").section__pic
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
            img(src="../../../images/content/slider-1.jpg").section__pic
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
            img(src="../../../images/content/slider-2.jpg").section__pic
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
            img(src="../../../images/content/slider-3.jpg").section__pic
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
            img(src="../../../images/content/slider-4.jpg").section__pic
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
</template>