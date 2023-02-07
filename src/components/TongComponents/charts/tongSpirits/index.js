import Vue from 'vue'
// 搜索组件入口
import tongSpirits from './src/index.vue';

tongSpirits.install=function(){
    Vue.component(tongSpirits.name,tongSpirits)
}
export default tongSpirits