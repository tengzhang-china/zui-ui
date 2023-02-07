import Vue from 'vue'
// 搜索组件入口
import tongCalendar from './src/index.vue';

tongCalendar.install=function(){
    Vue.component(tongCalendar.name,tongCalendar)
}
export default tongCalendar