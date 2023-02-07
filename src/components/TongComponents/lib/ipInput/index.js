import Vue from 'vue'
import ipInput from './src/index.vue';
ipInput.install=function(){
    Vue.component(ipInput.name,ipInput)
}
export default ipInput