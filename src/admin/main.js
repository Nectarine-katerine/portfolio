import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {store} from "./store";
import requests from "./helpers/requests";
import VeeValidate from "vee-validate";
import locale from "./helpers/ru";

Vue.use(VeeValidate, {
  locale: 'ru',
  dictionary: {
    ru: {
      messages: locale.messages,
      attributes: locale.attributes
    }
  }
});

store.$axios = requests;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});
