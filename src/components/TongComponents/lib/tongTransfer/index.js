import Vue from 'vue'
import tongTransfer from './src/index.vue';
tongTransfer.install=function(){
    Vue.component(tongTransfer.name,tongTransfer)
}
export default tongTransfer