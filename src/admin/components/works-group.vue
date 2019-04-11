<template lang="pug">
  li.section__item_added.section__item
    .section__photo
      img(src="../../images/content/slider-1.jpg").section__pic
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
