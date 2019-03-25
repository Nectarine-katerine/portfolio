  // const arrowLeft=document.querySelector('.arrow__left_round');
  // const arrowRight=document.querySelector('.arrow__right_round');
  
  // const item=document.querySelector('#items');
  // const slidesInView=1;
  
  // const step=items.firstElementChild.getBoundingClientRect().width;
  // const maxRight=(items.children.length-slidesInView)*step;
  // const maxLeft=(items.children.length)*step;
  // const minRight=0;
  
  // let currentRight = 0;
  
  // arrowRight.addEventListener('click', function(event) {
  //   event.preventDefault();
  // if (currentRight < maxRight){
  //   currentRight += step;
  //   item.style.right=`${currentRight}px`;
  // } else {
  //   currentRight=0;
  //   items.style.right=0;
  // }
  // });
  
  // arrowLeft.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   if (currentRight > minRight){
  //     currentRight -= step;
  //     item.style.right=`${currentRight}px`;
  //   } else {
  //   currentRight=maxRight;
  //   items.style.right=maxRight + 'px';
  //   }
  //   });

  // // $('.consist').on('touchstart', e => {
  // //   $('.consist.list').css('width', '80%');
  // // })

  // // $('.consist').on('touchend', e => {
  // //   $('.consist.list').css('width', '0');
  // // })

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
        groupCells: window.screen.width > 700 ? 2 : 1,
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