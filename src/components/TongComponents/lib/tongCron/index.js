import Vue from 'vue'
import tongCron from './src/index.vue';
tongCron.install=function(){
    Vue.component(tongCron.name,tongCron)
}
export default tongCron