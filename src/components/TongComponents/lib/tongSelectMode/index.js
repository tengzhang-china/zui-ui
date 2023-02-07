import Vue from 'vue'
// 多选组件入口
import tongSelectMode from './src/index.vue';
tongSelectMode.install=function(){
    Vue.component(tongSelectMode.name,tongSelectMode)
}
export default tongSelectMode