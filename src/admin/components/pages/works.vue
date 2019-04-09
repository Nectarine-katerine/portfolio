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

<style lang="pcss">
 @import "../../../styles/mixins.pcss";

  .section {
    background: url(../../../images/content/admin_bg.png) center center / cover no-repeat;
    height: 100%;
}

.section__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @include tablets {
    grid-template-columns: repeat(2, 1fr);
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}

.section__item {
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  &:first-child {
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
}

.section__item_add-new {
  display: flex;
  justify-content: center;
  align-items: center;
  @include tablets {
    padding: 30px 0;
  }
}

.section__wrapper {
  width: 80%;
  margin: 0 auto;
}

.section__pic {
  object-fit: cover;
  margin-bottom: 40px;
}

.section__item_added {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#ffffff, .7);
  }
}

.section__data-title {
  color: #414c63;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 26px;
}
.section__desc {
  color: rgba(#414c63, .7);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 1.82em;
  padding: 0 36px 0 0;
}

.section__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.section__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(#414c63, .5);
  font-size: 16px;
  font-weight: 600;
  padding: 0;
}

.section__input {
  border: none;
  background: transparent;
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #000;
  width: 100%;
  outline: none;
  color: #414c63;
  font-size: 1rem;
  font-weight: 600;
}

.section__icon {
  width: 17px;
  height: 17px;
  margin-left: 11px;
}
.works__inner {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}

.works__link {
  display: block;
  text-decoration: none;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 45px;
}

.works__wrapper {
  @include phones {
    width: 90%;
    margin: 0 auto;
  }
}
.edit {
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  margin-bottom: 30px;
  padding-bottom: 30px;
}
.edit__title {
  color: #414c63;
  font-size: 18px;
  font-weight: 700;
  padding: 25px 0;
  border-bottom: 1px solid rgba(#1f232d, .15);
  margin-bottom: 45px;
  @include phones {
   padding-left: 5%;
   padding-right: 5%; 
  }
}
.edit__content {
  display: flex;

  @include phones {
   width: 95%;
   margin: 0 auto;
    flex-direction: column;
  }
}
.main {
  font-family: 'Open Sans';
  color:  #414c63;
  height: 100%;
}

.container {
    width: 95%;
    margin: 0 auto;
    display: block;
    @include phones {
    width: 100%;
  }
}

.title {
  color: #414c63;
  font-size: 21px;
  font-weight: 700;
  padding: 60px 0;
  @include phones {
    padding: 40px 0;
    width: 90%;
    margin: 0 auto;
  }
}

.button {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  padding: 19px 45px;
  border-radius: 25px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}


button[type="button"] {
  cursor: pointer;
  background-color: transparent;
  outline: none;
}
.load {
  border: 1px solid #a1a1a1;
  background-color: #dee4ed;
  padding: 90px 130px;
  text-align: center;
  height: 50%;
  display: block;
  @include tablets {
    display: none;
  }
}
.load__tablets {
  display: none;
  @include tablets {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    .section__photo {
      width: 80%;
      margin: 0 auto;
      @include phones {
        width: 95%;
      }
    }
  }
}

.load__photo {
  border: none;
  padding: 44px 65px;
  text-align: center;
  height: 50%;
  border-radius: 100%;
  background-color: #dee4ed;
  margin-bottom: 27px;
}

.load__text {
  color: rgba(#414c63, .5);
  font-size: 16px;
  font-weight: 600;
  padding: 0 50px;
  margin-bottom: 30px;
}

.load__icon {
  width: 85px;
  height: 113px;
  fill: #fff;
}
.load__button_reviews {
  text-align: center;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  background: none;
  border: none;
  outline: none;
  text-transform: none;
  padding: 0;
}

.load__reviews {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 0;
  text-align: center;
  height: 50%;
  @include tablets {
    margin-bottom: 30px;
  }
}
.safe {
  width: 55%;
  margin-left: 30px; 
}

.safe_works {
@include tablets {
    width: 80%;
    margin: 0 auto; 
  }
  @include phones {
    width: 95%;
  }
}

.safe__row-title {
  color: rgba(#414c63, .5);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  display: block;

  @include phones {
    margin-bottom: 5px;
  }
}

.safe__row-input {
  color: #414c63;
  font-size: 16px;
  font-weight: 600;
}

.safe__row {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  } 
}

.safe__row_reviews {
  width: 100%;
  display: flex;
   @include tablets {
    flex-direction: column;
    margin: 0;
  }
}

.safe__row_two-col {
  flex: 1;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
   @include tablets {
    margin: 0;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 20px;
    }
  }
}
.safe__textarea {
  min-height: 145px;
  border: 1px solid rgba(#414c63, .2);
  padding: 18px 110px 18px 20px;
  line-height: 1.62em;
  resize: vertical;
  @include phones {
    padding: 18px;
    min-height: 190px;
  }
}

.safe__btns {
  display: flex;
  justify-content: flex-end;
   @include tablets {
    justify-content: center;
  }
}

.safe__reset {
color: #383bcf;
font-size: 16px;
font-weight: 600;
background: none;
border: none;
outline: none;
margin-right: 60px;
}

.safe_reviews {
  @include tablets {
    width: 75%;
  }
  @include phones {
    width: 90%;
    margin: 0 auto;
  }
}
.button-iconed {
  padding: 0;
  color: rgba(#414c63, .5);
  font-size: 16px;
  font-weight: 600;
}

.skill__icon {
  width: 16px;
  height: 15px;
  fill: #414c63;
}

.trash__icon {
  justify-self: end;
}

.pencil__icon {
  @include tablets {
    fill: rgba(#414c63, .5);
    margin-right: 0;
  }
}

.cross__icon {
  margin-right: 0;
  fill: #bf2929;
}

.cross__icon_gray {
  fill: $text-color;
}

.work__icon {
  width: 17px;
  height: 17px;
  margin-left: 15px;
}

.pencil__icon_blue {
  fill: #383bcf;
}
.tags {
  display: flex;
  margin-bottom: 40px;
}
.tags__item {
  display: flex;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: #f4f4f4;
  margin-right: 9px;
  &:last-child {
    margin-right: 0;
  }
}
.tags__name {
  color: rgba(#283340, .7);
  font-size: 13px;
  font-weight: 600;
  margin-right: 9px;
}

.group {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.group__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr;
}
.group__row_border-bottom {
  border-bottom: 1px solid rgba(#1f232d, .15);
  padding: 15px 15px 15px 0;
}
.group__row_three-col {
    display: flex;
    justify-content: flex-end;
}
.group__col_end {
  justify-self: end;
  .pencil__icon {
    display: none;
  }
  .tick__icon, .cross__icon {
      display: inline-block;
    }
  @include tablets {
    .pencil__icon {
      display: inline-block;
    }
    .tick__icon, .cross__icon {
      display: none;
    }
  }
}

.group__icon {
  width: 15px;
  height: 12px;
  margin-right: 20px;
  fill: #00d70a;
}

.group__name_padding {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(#1f232d, .5);
  margin-right: 20px;
  width: 20%;
  @include phones {
    width: 28%;
  }
}

.group__name_new {
  width: 45%;
  @include phones {
    width: 49%;
  }
}

.group__add {
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 100%;
  padding: 3px 12px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}


</style>