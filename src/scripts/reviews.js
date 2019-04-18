import Vue from 'vue';
import Flickity from 'vue-flickity';
import axios from "axios";

const controls = {
  template: '#reviews-controls'
}

new Vue({
  el: "#feedback-component",
  template: "#reviews-container",
  components: {
    Flickity,
    controls
  },
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        groupCells: true,
        pageDots: false
      },
      reviews: []
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    imagesRequired(data) {
      return data.map(item => {
        item.photo = `https://webdev-api.loftschool.com/${item.photo}`;

        return item;
      })
    },
  },
  async created() {
    try {
      const response = await axios.get('https://webdev-api.loftschool.com/reviews/114');
      this.reviews = this.imagesRequired(response.data);
    } catch (error) {

    }
  }
});