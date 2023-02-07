import Vue from 'vue'
// 搜索组件入口
import tongPie from './src/index.vue';

tongPie.install=function(){
    Vue.component(tongPie.name,tongPie)
}
export default tongPie