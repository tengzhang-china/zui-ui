import Vue from "vue";
import tongUpload from "./src/index.vue";
tongUpload.install=function(){
    Vue.component(tongUpload.name,tongUpload)
}
export default tongUpload