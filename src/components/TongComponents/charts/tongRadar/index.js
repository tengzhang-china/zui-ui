import Vue from 'vue'
// 搜索组件入口
import tongRadar from './src/index.vue';

tongRadar.install=function(){
    Vue.component(tongRadar.name,tongRadar)
}
export default tongRadar