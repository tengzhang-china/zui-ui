<template>
  <div id="app">
    <iframe v-if="show" width="100%" height="100%" :src="url"></iframe>
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return {
      url:"http://10.10.64.23:72/#/home/menu/400000024?token=OAMSUAM_R_E6C860CD033687559D9FD8F3B0407A94",
      show:true
    }
  },

  created(){
    this.show=!!sessionStorage.getItem("show");
    this.url = sessionStorage.getItem("url")
  }
}
</script>
<style lang="scss" scoped>
#app{
  height: inherit;
}
</style>