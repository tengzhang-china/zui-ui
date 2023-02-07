import Vue from 'vue'
import tongConsole from './src/index.vue';
tongConsole.install=function(){
    Vue.component(tongConsole.name,tongConsole)
}
export default tongConsole