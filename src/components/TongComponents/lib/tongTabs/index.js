import Vue from 'vue';
import tongTabs from './src/index.vue';

tongTabs.install=function(){
    Vue.component("tongTabs",tongTabs)
}
export default tongTabs