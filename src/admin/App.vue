<template lang="pug">
  .wrapper.admin-wrapper
    Header
    Navigation
    .maincontent.admin-maincontent
      .container.container_admin
        router-view
</template>

<script>
import Header from './components/Header';
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components:{
    Header,
    Navigation
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>



<style lang="postcss">
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800';
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import "../styles/admin/form-admin.pcss";
@import "../styles/admin/btn-admin.pcss";

.admin-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 77px 1fr;
  grid-template-areas: "header" "nav" "maincontent";
}

.admin-maincontent {
  grid-area: maincontent;
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    resolve("./images/content/main_bg.jpg") center center no-repeat;
  background-size: cover;
}

.container_admin {

  @include tablets {
    width: 92.2%;
  }

  @include w_650 {
    width: 87.5%;
  }
}

.admin-title {
  font-size: 21px;
  font-weight: 700;
  color: $title-color;

  @include w_650 {
    font-size: 18px;
  }
}

.admin-block {
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  padding: 7px 20px 35px 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  @include w_650 {
    padding: 7px 10px 35px 20px;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  &_p0 {
    padding: 0;
  }
  &.edited {
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      opacity: 0.7;
    }
  }
}

.admin-block__header {
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 4px 14px 8px;
}
.admin-about__name {
  width: 59%;
}
.admin-block__content {
  padding-top: 14px;
  margin-bottom: 50px;
  flex: 1;

  @include w_650 {
    margin-bottom: 35px;
  }
}

.admin-block__header-left {
  width: 60%;
}

.admin-add {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  background-color: transparent;

  &_big {
    .admin-add__icon {
      width: 40px;
      height: 40px;
      margin-right: 0;

      &::before {
        width: 15px;
        height: 15px;
      }
    }
  }

  @include w_650 {
    font-size: 14px;
  }

  &_bigest {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    min-height: 556px;
    padding: 50% 30% 0 30%;

    @include w_650 {
      min-height: 111px;
      font-size: 16px;
      padding: 0;
    }

    .admin-add__icon {
      position: absolute;
      left: 50%;
      top: 42%;
      transform: translate(-50%,-50%);
      width: 150px;
      height: 150px;
      background: transparent;
      border: 2px solid #ffffff;
      margin: 0;

      @include w_650 {
        width: 50px;
        height: 50px;
        top: 50%;
        left: 14%;
      }

      &::before{
        width: 34px;
        height: 34px;
        background: svg-load('remove.svg', fill=#fff);
        @include w_650{
          width: 12px;
          height: 11px;
        }
      }
    }
    &:hover {
      background-image: linear-gradient(to right, #005dff 0%, #0091ff 100%);
    }
  }
  &_middle {
    min-height: 380px;

    @include w_500{
      min-height: 111px;
    }
  }
}

.admin-add__icon {
  width: 21px;
  height: 21px;
  background-color: #ffffff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: #ffffff;
  font-size: 15px;
  font-family: 600;
  text-align: center;
  vertical-align: center;
  border-radius: 50%;
  margin-right: 13px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: rotate(45deg) translate(-65%,7%);
    background: svg-load('cross.svg', fill=#fff);
  }
}
.admin-btn {
  padding: 19px 45px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 25px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  &:hover {
    background-image: linear-gradient(to right, #005dff 0%, #0091ff 100%);
  }
  &_empty {
    background-image: none;
    text-transform: none;
    font-size: 16px;
    color: #383bcf;
    font-weight: 600;
    &:hover {
      background-image: none;
      text-decoration: underline;
    }
    @include w_650 {
      padding: 18px;
    }
  }
  @include w_650 {
    font-size: 14px;
  }
}
.controls {
  display: flex;
  align-items: center;
  &_justify-end {
    justify-content: flex-end;
  }
}
.controls__list {
  display: flex;
  align-items: center;
}
.controls__item {
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
.controls__btn {
  display: flex;
  align-items: center;
  padding: 0;
}
.controls__icon {
  width: 15px;
  height: 15px;
  border: none;
  padding: 0;
  cursor: pointer;
  &_tick {
    background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%);
  }
  &_cross {
    background: svg-load("cross.svg", fill=#bf2929, width=100%, height=100%);
  }
  &_pencil {
    background: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%);
  }
  &_trash {
    background: svg-load("trash.svg", fill=#414c63, width=100%, height=100%);
  }
}
.controls__text {
  opacity: 0.5;
  font-weight: 600;
  margin-right: 10px;
  
  @include w_500 {
    font-size: 14px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bounceIn-enter-active {
  animation-duration: 0.75s;
  animation-name: bounceIn;
}
.bounceOut-leave-active {
  animation-duration: 1s;
  animation-name: hinge;
}
.bounceOut-enter-active {
  animation-duration: 0.75s;
  animation-name: bounceIn;
}
.fadeIn-enter-active {
  animation-duration: 1s;
  animation-name: fadeInDownBig;
}
.fadeIn-leave-active {
  animation-duration: 1s;
  animation-direction: reverse;
  animation-name: fadeInDownBig;
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes hinge {
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style>
