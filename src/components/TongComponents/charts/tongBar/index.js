import Vue from 'vue'
// 搜索组件入口
import tongBar from './src/index.vue';

tongBar.install=function(){
    Vue.component(tongBar.name,tongBar)
}
export default tongBar