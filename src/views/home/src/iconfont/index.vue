<template>
  <div class="tong-icon-box">
      <!-- <div v-if="iconfontHTML" v-html="iconfontHTML"></div> -->
      <iframe src="static/iconfont/demo_index.html" frameborder="0"></iframe>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios"
@Component({})
export default class App extends Vue {
    public iconfontHTML = "";
    public created() {
        Axios.get("static/demo_index.html").then((res:any)=>{
            this.iconfontHTML =  res 
        })
    }
}
</script>
<style lang='scss' scoped>
@import url(../../../../components/TongComponents/iconfont/demo.css);
.tong-icon-box{
    height: calc(100% - 61px);
    overflow-y: hidden;

    iframe{
        width: 100%;
        height: 100%;
    }
}
</style>