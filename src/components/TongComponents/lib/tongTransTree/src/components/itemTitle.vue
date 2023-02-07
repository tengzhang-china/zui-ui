<template>
  <div class="tong-trans-tree-title">
      <p>{{title}}</p>
      <span v-if="countShow">{{count}}</span>
  </div>
</template>
<script>
export default {
    props:["title","count","countShow"]
};
</script>