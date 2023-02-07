import Vue from 'vue'
import tongTitle from './src/index.vue';
tongTitle.install=function(){
    Vue.component(tongTitle.name,tongTitle)
}
export default tongTitle