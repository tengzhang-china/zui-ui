import Vue from 'vue'
import Dialog from './src/index.vue';
Dialog.install=function(){
    Vue.component(Dialog.name,Dialog);

    Vue.component("tongDialog",Dialog)
}
export default Dialog