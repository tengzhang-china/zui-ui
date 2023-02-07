import Vue from 'vue'
import Table from './src/index.vue';
Table.install=function(){
    Vue.component(Table.name,Table)
}
export default Table