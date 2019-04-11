<template lang="pug">
  div.root-wrapper-container
    div.root-container
      template
        header.header-container
          app-header
        section.tabs-container
          tabs
        main.content-container
          router-view
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    appHeader: () => import("components/header"),
    tabs: () => import("components/tabs")
  }
};
</script>


<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "../styles/admin/base-admin.pcss";
@import "../styles/admin/add-new.pcss";
@import "../styles/admin/edit.pcss";
@import "../styles/admin/group.pcss";
@import "../styles/admin/load.pcss";
@import "../styles/admin/login.pcss";
@import "../styles/admin/safe.pcss";
@import "../styles/admin/section.pcss";
@import "../styles/admin/skills.pcss";
@import "../styles/admin/skill.pcss";
@import "../styles/admin/reviews.pcss";
@import "../styles/admin/tags.pcss";
@import "../styles/admin/works.pcss";
@import "../styles/admin/author.pcss";
@import "../styles/admin/icons.pcss";

</style>