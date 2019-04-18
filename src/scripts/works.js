import Vue from 'vue';
import axios from "axios";

const thumbs = {
  template: "#works-thumbs",
  props: {
    works: Array,
    currentWork: Object,
  },
  mounted() {
    window.thumbsContainer = this.$refs.sliderThumbs;
  }
}

const controls = {
  template: "#works-controls"
}

const tags = {
  template: "#works-tags",
  props:{
    skills: Array
  }
}

const slider = {
  template: "#works-slider",
  components: {
    thumbs,
    controls
  },
  props: {
    works: Array,
    currentWork: Object
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  },
  mounted() {
    window.sliderContainer = this.$refs.sliderContainer;
  }
}


const info = {
  template: "#works-info",
  components: {
    tags
  },
  props: {
    currentWork: Object,
    works: Array
  },
  methods: {
    skillsToArray(skills) {
      return skills.split(',').filter(item => item !== '');
    }
  }
}

new Vue({
  el: "#works-component",
  template: "#works-container",
  data(){
    return {
      works: [],
      currentIndex: 0,
      scrollOptions: {
        scrollPosition: 0,
        thumbHeight: 0,
        positionPercent: 70,
      },
    }
  },
  components: {
    slider,
    info
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.infinitsSlider(value);
    }
  },
  methods:{
    infinitsSlider(value) {
      const worksCount = this.works.length - 1;

      if(value > worksCount)
        this.currentIndex = 0;

      if(value < 0)
        this.currentIndex = worksCount;
    },
    imagesRequired(data) {
      return data.map((item, index) => {
        //const requredImg = require(`../images/slider/${item.photo}`);
        item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
        item.number = index + 1;
        item.originIndex = index;
        return item;
      })
    },
    handleSlide(direction){
      switch(direction){
        case 'next':
          this.currentIndex ++;
          break;
        case 'prev':
          this.currentIndex --;
          break;
      }
      this.thumbsScroll(direction);
    },
    selectWork(id){
      this.currentIndex = id;
    },
    thumbsScroll(direction) {

      if(this.currentIndex === this.works.length) {
        if(window.scrollPercentStart < this.scrollOptions.thumbHeight*this.currentIndex) {
          window.thumbsContainer.style.transform = `translate3d(0, ${window.maxSliderScroll}px, 0)`;
          this.scrollOptions.scrollPosition = window.maxSliderScroll;
        }
        return false;
      }

      if(this.currentIndex === -1) {
        window.thumbsContainer.style.transform = `translate3d(0, ${window.maxSliderScroll}px, 0)`;
        this.scrollOptions.scrollPosition = window.maxSliderScroll;
        return false;
      }


      if(direction == 'next') {
        // start scroll when 75%
        if(window.scrollPercentStart < this.scrollOptions.thumbHeight*this.currentIndex) {
          if(this.scrollOptions.scrollPosition != window.maxSliderScroll) {
            this.scrollOptions.scrollPosition += 100;
            window.thumbsContainer.style.transform = `translate3d(0, ${this.scrollOptions.scrollPosition}px, 0)`;
          }
        }

      }

      if(direction == 'prev') {
        if(this.scrollOptions.scrollPosition != 0) {
          this.scrollOptions.scrollPosition -= 100;
          window.thumbsContainer.style.transform = `translate3d(0, ${this.scrollOptions.scrollPosition}px, 0)`;
        }
      }
    },
    startScroolPosition() {
      window.scrollPercentStart = window.sliderContainer.offsetHeight * this.scrollOptions.positionPercent / 100;
      window.maxSliderScroll = (this.works.length - Math.floor(window.sliderContainer.offsetHeight / this.scrollOptions.thumbHeight)) * 100;
    }
  },
  async created(){
    try {
      const response = await axios.get('https://webdev-api.loftschool.com/works/114');
      this.works = this.imagesRequired(response.data);
    } catch (error) {

    }
  },
  mounted() {
    this.startScroolPosition();
    window.addEventListener("resize", this.startScroolPosition);
  }
});