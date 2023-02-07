import Vue from 'vue';
import tongDrag from './src/index.vue';
tongDrag.install = function(){
    Vue.component(tongDrag.name,tongDrag)
}
export default tongDrag