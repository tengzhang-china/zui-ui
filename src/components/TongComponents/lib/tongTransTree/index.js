import Vue from 'vue';
import tongTransTree from './src/index.vue';
tongTransTree.install=function(){
    Vue.component(tongTransTree.name,tongTransTree)
}
export default tongTransTree