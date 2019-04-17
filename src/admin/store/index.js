import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./modules/auth";
import skillsGroup from "./modules/skills-groups";
import skills from "./modules/skills";
import works from "./modules/works";
import reviews from "./modules/reviews";
import errors from "./modules/errors";

export const store = new Vuex.Store({
  modules:{
    auth,
    skillsGroup,
    skills,
    works,
    reviews,
    errors
  }
});
