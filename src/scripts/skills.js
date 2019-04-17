import Vue from 'vue';
import axios from "axios";

const graph = {
  template: "#graph",
  props: {
    skillNsme: String,
    skillPercent: Number
  },
  methods: {
    drawGradient(){
      const circle = this.$refs['color-circle'];
      const dashArray = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dasharray'));
      const dashOffset = (dashArray/100) * (100-this.skillPercent);

      circle.style.strokeDashoffset = dashOffset;
    }
  },
  mounted(){
    this.drawGradient()
  }
}

const graphsRow = {
  template: "#graphs-row",
  components: {
    graph
  },
  props: {
    group: Object,
    skills: Array
  }
}

new Vue({
  el: "#graphs-component",
  template: "#graphs-list",
  components: {
    graphsRow
  },
  data(){
    return{
      skillsGroups: [],
      skills: []
    }
  },
  methods:{
    filterSkillsByGroup(groupId){
      return this.skills.filter(skill => skill.category === groupId);
    }
  },
  async created(){
    try {
      const response = await axios.get('https://webdev-api.loftschool.com/categories/114');
      this.skillsGroups = response.data;
    } catch (error) {

    }

    try {
      const response = await axios.get('https://webdev-api.loftschool.com/skills/114');
      this.skills = response.data;
    } catch (error) {

    }
  }
});