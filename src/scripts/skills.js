import Vue from  'vue';
import axios from "axios";
import requests from "../admin/requests";

const skill = {
    template: '#skills',
    props: {
        skill: Object
    },
    methods: {
        drawColoredCircle() {
          const circle = this.$refs["color-circle"];
          const dashArray = parseInt(
            getComputedStyle(circle).getPropertyValue("stroke-dasharray")
          );
          const percent = (dashArray / 100) * (100 - this.skill.percent);
    
          circle.style.strokeDashoffset = percent;
        }
      },
      
      mounted() {
        this.drawColoredCircle();
      }
    };

const skillsRow = {
    template: '#skills-row',
    components: {
        skill
    },
    props: {
        skills: Array,
        cat: Object
    }
}



new Vue ({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow
    },
    data(){
        return {
            skills: {},
            categories: {}
        }
    },
    // props: {
    //   skills: Object
    // },
    methods: {
      filterSkillsCategoryId(categoryId) {
        return this.skills.filter(skill=> skill.category == categoryId)
    } 
    },
    created(){
      axios.get('/skills/114').then(response => {
        this.skills = response.data
    }),
    axios.get('/categories/114').then(response => {
      this.categories = response.data
  })
     
    }
})