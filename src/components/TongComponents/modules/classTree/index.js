import Vue from "vue";
import tongClassTree from './src/index.vue';
tongClassTree.install=function(){
    Vue.component(tongClassTree.name,tongClassTree)
}
export default tongClassTree