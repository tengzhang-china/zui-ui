<template>
  <div class="tong-title">
    <img v-if="!iconClass&&iconImg" :src="iconImg" alt="">
    <i v-if="iconClass" :class="iconClass"></i>
    <span class="title">{{topTitle}}</span>
    <span class="description">{{description}}</span>
  </div>
</template>

<script>
export default {
  name: "tongTitle",
  data() {
    return {
      
    };
  },
  props: {
    iconImg:{
      type:String,
      default:require('../images/title_icon.png')
    },
    iconClass:String,
    topTitle: String,
    description: String
  }
};
</script>
