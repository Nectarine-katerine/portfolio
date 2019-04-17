import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import {store} from "./store/index";

const routes = [
  {
    path: '/',
    component: () => import('./components/pages/about.vue'),
    name: 'about',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: () => import('./components/pages/login.vue'),
    name: 'login'
  },
  {
    path: '/works',
    component: () => import('./components/pages/works.vue'),
    name: 'works',
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/reviews',
    component: () => import('./components/pages/reviews.vue'),
    meta: {
      requiresAuth: true
    },
    name: 'reviews'
  }
];

const route = new VueRouter({routes});

route.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {

    if (store.getters['auth/token'] && store.getters['auth/expiredToken'] > Math.round(new Date()/1000)+10) {
      next();
      return;
    }
    next({name:'login'});
  } else {
    next();
  }
});

export default route;
