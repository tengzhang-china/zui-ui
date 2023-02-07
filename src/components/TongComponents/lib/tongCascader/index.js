import Vue from 'vue';
import tongCascader from './src/index.vue';
tongCascader.install = function(){
    Vue.component(tongCascader.name,tongCascader)
}
export default tongCascader