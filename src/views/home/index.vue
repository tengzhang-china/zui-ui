<template>
  <div class="home">
    <home-menu v-show="homeModule.menuShow" />
    <router-view />
  </div>
</template>
<script>
import homeMenu from './homeMenu'
import { mapState } from "vuex";
export default {
  components:{homeMenu},
  computed:{
    ...mapState({ homeModule: "home" }),
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.home {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>