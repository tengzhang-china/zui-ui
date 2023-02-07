import Vue from 'vue'
import Slider from './src/index.vue';
Slider.install=function(){
    Vue.component(Slider.name,Slider)
}
export default Slider