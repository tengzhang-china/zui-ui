import Vue from 'vue'
// 搜索组件入口
import tongGant from './src/index.vue';

tongGant.install=function(){
    Vue.component(tongGant.name,tongGant)
}
export default tongGant