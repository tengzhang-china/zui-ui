import Vue from "vue";
import tongBreadDialog from './src/index.vue';
tongBreadDialog.install=function(){
    Vue.component(tongBreadDialog.name,tongBreadDialog)
}
export default tongBreadDialog