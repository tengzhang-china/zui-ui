import Vue from 'vue'
import TransferTree from './src/index.vue';
TransferTree.install=function(){
    Vue.component(TransferTree.name,TransferTree)
}
export default TransferTree