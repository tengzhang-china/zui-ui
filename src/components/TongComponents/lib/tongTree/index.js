import Vue from 'vue';
import tongTree from './src/index.vue';
tongTree.install=function(){
    Vue.component(tongTree.name,tongTree)
}
export default tongTree