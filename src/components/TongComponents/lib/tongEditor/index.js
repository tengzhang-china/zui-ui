import Vue from 'vue'
// 搜索组件入口
import tongEditor from './src/index.vue';

tongEditor.install=function(){
    Vue.component(tongEditor.name,tongEditor)
}
export default tongEditor