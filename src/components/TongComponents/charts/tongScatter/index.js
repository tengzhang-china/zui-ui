import Vue from 'vue'
// 搜索组件入口
import tongScatter from './src/index.vue';

tongScatter.install=function(){
    Vue.component(tongScatter.name,tongScatter)
}
export default tongScatter