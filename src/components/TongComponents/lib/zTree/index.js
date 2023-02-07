import Vue from 'vue'
import ZTree from './src/index.vue';
ZTree.install=function(){
    Vue.component(ZTree.name,ZTree)
}
export default ZTree