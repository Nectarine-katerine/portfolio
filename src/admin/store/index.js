import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skillsGroup from "./modules/skills-groups";
import skills from './modules/skills'
import user from './modules/user'
import reviews from './modules/reviews'


export default new Vuex.Store({
  modules: {
    skillsGroup, skills, user, reviews
  }
});