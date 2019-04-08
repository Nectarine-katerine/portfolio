import Vue from 'vue';
import Flickity from 'vue-flickity';

const controls = {
  template: '#reviews-controls'
}

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    Flickity,
    controls
  },
  data() {
    return {
      flickityOptions: {
        //initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: true,
        resize: true
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
    imagesRequired(data){
      return data.map(item=>{
        const requredImg = require(`../images/content/${item.photo}`);
        item.photo = requredImg;

        return item;
      })
    },
  },
  created(){
    const data = require("../data/reviews.json");
    this.reviews = this.imagesRequired(data);
  }      
});