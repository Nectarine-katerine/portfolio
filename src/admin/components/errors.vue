<template lang="pug">
  .error(
    :class="[{error_active: visibleMessage}, `error_${type}`]"
  )
    .error__message {{message}}
    button(@click.prevent="CLOSE_ERROR").error__close
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('errors',{
      message: state => state.errors,
      type: state => state.type,
      visibleMessage: state => state.visibleMessage
    })
  },
  methods: {
    ...mapMutations('errors', ['CLOSE_ERROR'])
  }
}
</script>

<style lang="postcss" scoped>
  .error {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 391px;
    top: -1000px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    padding: 29px 20px 29px 30px;
    background-color: #b18333;
    transition: top 2s;
    &_active {
      top: 0;
      transition: top .5s;
    }
    &_error {
      background-color: #b13333;
    }
    &_success {
      background-color: #4bb133;
    }
  }
  .error__message {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    flex: 1;
    margin-right: 20px;
  }
  .error__close {
    width: 20px;
    height: 20px;
    background: svg-load('cross.svg', fill=#ffffff, width=100%, height=100%);
  }
</style>
