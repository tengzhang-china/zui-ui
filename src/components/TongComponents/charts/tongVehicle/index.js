import Vue from 'vue'
// 搜索组件入口
import tongVehicle from './src/index.vue';

tongVehicle.install=function(){
    Vue.component(tongVehicle.name,tongVehicle)
}
export default tongVehicle