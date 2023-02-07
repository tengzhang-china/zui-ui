import Vue from 'vue'
import tongRender from './src/index';
tongRender.install = function(){
    Vue.component(tongRender.name,tongRender);
}

export default tongRender