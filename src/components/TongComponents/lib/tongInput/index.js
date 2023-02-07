import Vue from "vue";
import tongInput from "./src/index.vue";
tongInput.install=function(){
    Vue.component(tongInput.name,tongInput)
}
export default tongInput