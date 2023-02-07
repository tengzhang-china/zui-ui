import Vue from 'vue';
import scrollLink from './src/index';

scrollLink.install=function(){
    Vue.component("scrollLink",scrollLink)
}
export default scrollLink