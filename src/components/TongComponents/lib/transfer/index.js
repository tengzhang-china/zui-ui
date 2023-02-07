import Vue from 'vue'
import Transfer from './src/index.vue';
Transfer.install=function(){
    Vue.component(Transfer.name,Transfer)
}
export default Transfer