import Vue from 'vue'
// 搜索组件入口
import tongLine from './src/index.vue';

tongLine.install=function(){
    Vue.component(tongLine.name,tongLine)
}
export default tongLine